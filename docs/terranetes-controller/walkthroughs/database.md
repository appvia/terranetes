---
sidebar_position: 1
---

# AWS Database Provisioning

This guide provides a comprehensive walkthrough of the feature set, catering to both platform administrators and developers. It focuses on the self-service provisioning of a database resource in the cloud.

## Prerequisites

This guide assumes the following prerequisites have been met:

* The terranetes-controller has been successfully [installed](../quick_start.md) within a cluster.
* The cluster name and its residing region are known.
* [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) is installed and available for use.
* Appropriate cloud credentials are in place to facilitate the provisioning of an RDS instance within the account.
* Nodegroups are configured to utilize the EKS Cluster Security Group, without custom group configurations. Note that context data will still be accessible.

## Introduction

This guide aims to comprehensively cover the steps required for both platform teams and developers to consume cloud resources.

## Platform Setup

### Provision a [Provider](../reference/providers.terraform.appvia.io.md)

To facilitate cloud communication, it is essential to establish credentials. For the purpose of this guide, we will utilize static credentials, specifically IAM access keys, although workload identity is also an option, as detailed in [here](../admin/providers.md).

a) Create a Kubernetes secret containing the IAM credentials.

```shell
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
```

b) Provision a [Provider](../reference/providers.terraform.appvia.io.md) to utilize the credentials.

This [Provider](../reference/providers.terraform.appvia.io.md) will also preload any [contextual data](../admin/contexts.md) for us.

```shell
# Exporting the name of the cluster and the region it's running in
export CLUSTER_NAME=test
export CLUSTER_REGION=eu-west-2

cat <<EOF | kubectl apply -f
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Provider
metadata:
  name: aws
  annotations:
    terranetes.appvia.io/default-provider: "true"
spec:
  # Source and be 'secret' or 'injected'
  source: secret
  # Provider can be google, aws, azurerm, alicloud, azurestack, googleworkspace etc
  provider: aws
  # Preload Configuration
  preload:
    # Indicates if the preloading should be enabled
    enabled: true
    # Is the EKS cluster we use to pivot network and settings around
    cluster: ${CLUSTER_NAME}
    # Is the cloud region the cluster above resides
    region: ${CLUSTER_REGION}
    # Is the terranetes context resource we should provision
    context: default
  # Used when spec.source is secret.
  secretRef:
    namespace: terraform-system
    name: aws
EOF
```

Upon successful deployment of the [Provider](../reference/providers.terraform.appvia.io.md), the [contextual data](../admin/contexts.md) is loaded and made accessible through the [Context](../reference/contexts.terraform.appvia.io.md) specified in `spec.preload.context`.

To view the data, execute the command `kubectl get contexts.terraform.appvia.io default -o yaml`, which will display comprehensive information about the cluster, including networking and routing tables.

c) Establish a policy to restrict the provisioning of modules within the cluster

For the purpose of this guide, we will limit the provisioning to a single Terraform module, specifically designed for database provisioning. It is possible to extend this limitation to include one or more modules or make it namespace-specific, as detailed in [here](../admin/policy/intro.md).

```shell
cat <<EOF | kubectl apply -f -
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: permitted-modules
spec:
  constraints:
    modules:
      allowed:
        - "https://github.com/terraform-aws-modules/terraform-aws-rds.*:v.*"
```

## Developer Consumption

As a developer, I am responsible for an application that relies on a MySQL database. I understand that I will receive the database endpoint, username, and password via environment variables, which will be mounted from a [Kubernetes secret](https://kubernetes.io/docs/concepts/configuration/secret/#using-a-secret).

a) Let's create a namespace for our application

```shell
kubectl create namespace apps
```

b) As the Platform Team, let's provision a revision

```shell

cat <<EOF | kubectl
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Revision
metadata:
  name: database
  namespace: apps
spec:
  plan:
    name: database-mysql
    categories: [mysql, database, aws]
    description: Provides a MySQL database
    revision: v0.0.1

  inputs:
    - key: identifier
      description: Is the cloud resource name for the database instance
      required: true
    - key: db_name
      description: Is the name of the database we should create in the instances
      required: true
      default:
        value: demo
    - key: backup_retention_period
      description: The days to retain backups for
      type: number
      default:
        value: 7
    - key: allocated_storage
      description: The database size in GB as a integer
      default:
        value: 5

  configuration:
    module: https://github.com/terraform-aws-modules/terraform-aws-rds.git?ref=v5.9.0

    # We are going to consume the contextual data from the context
    valueFrom:
      - context: default
        # We will place the database on the private subnets
        key: private_subnet_ids
        # We will map to this the following in the module
        name: subnet_ids

      - context: default
        # Nodegroups in our infra are using the cluster security
        # group
        key: eks_cluster_security_group_ids
        # We map this to the following in the module
        name: vpc_security_group_ids

      writeConnectionSecretToRef:
        name: database
        keys:
          - db_instance_address:database_hostname
          - db_instance_username:database_username
          - db_instance_password:database_password
          - db_instance_port:database_port

      variables:
        allocated_storage: 5
        create_db_subnet_group: true
        engine: mysql
        engine_version: '5.7'
        family: mysql5.7
        instance_class: db.t2.large
        major_engine_version: '5.7'
        port: 3306
        skip_final_snapshot: true
        username: root

    parameters:
      - name: character_set_client
        value: utf8mb4
      - name: character_set_server
        value: utf8mb4
```

c) The application initiates a request for a CloudResource

```shell
cat <<EOF | kubectl apply -n apps -f -
apiVersion: terraform.appvia.io/v1alpha1
kind: CloudResource
metadata:
  name: database
  labels:
    app: database
spec:
  plan:
    name: database-mysql
    revision: v0.0.1
  variables:
    allocated_storage: 10
    identifier: demo
  writeConnectionSecretToRef:
    name: database
```

In order to validate the accessibility of the cloud resource database, a sample application deployment has been provided below. This deployment is designed to securely mount the database access credentials from a secret, which is dynamically generated by the CloudResource resource mentioned above. The application itself is represented by a `mariadb` container, which serves as the primary interface for interacting with the database. 

```shell
cat <<EOF | kubectl apply -n apps -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
  labels:
    app: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: application
        image: mariadb
        stdin: true
        tty: true
        command: [sh]
        envFrom:
          - secretRef:
              name: database
```

To validate the accessibility of the cloud resource database, execute the following command:

```shell
kubectl -n apps exec -ti $(kubectl -n apps get pod --label app=frontend) sh
```

To access the database, execute the following command using the `mysql` CLI, and enter the password for the database user when prompted.

```shell
mysql -h ${DATABASE_HOSTNAME} -P ${DATABASE_PORT} -u ${DATABASE_USERNAME} -p
Enter password:
```
