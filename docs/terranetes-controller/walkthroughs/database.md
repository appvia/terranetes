---
sidebar_position: 1
---

# Provisioning an Database in AWS

The following tries to encompass a walk-through of the feature set, from a platform admin and developer consumption for self-serving a database resource in the cloud.

## Prerequisites

This guide is assuming the following

* You have [installed](../quick_start.md) the terranetes-controller in a cluster.
* You have the cluster name and region is resides in
* You have [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) installed.
* You have appropriate cloud credentials to provision an RDS in the account.
* The nodegroups are using the EKS Cluster Security Group and not configured with custom groups _(though the data will be available in the context)_.

## Introduction

The guide tries to cover the step required from both a platform team perspective and developer consumption the cloud resource.

## Platform Setup

### Provision a [Provider](../reference/providers.terraform.appvia.io.md)

First we need to setup credentials to speak cloud. For the purposes of the guide we will assume the controller is using static credentials (i.e IAM access keys), though see [here](../admin/providers.md) for workload identity.

a) Lets start by create a kubernetes secret contains the IAM credentials

```shell
$ kubectl -n terraform-system create secret generic aws \
  --from-literal=AWS_ACCESS_KEY_ID=<ID> \
  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \
  --from-literal=AWS_REGION=<REGION>
```

b) Provision a [Provider](../reference/providers.terraform.appvia.io.md) to use the credentials

We will also use this [Provider](../reference/providers.terraform.appvia.io.md) to preload any [contextual data](../admin/contexts.md) for us.

```shell
# Lets export the name of the cluster and the region it's running
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

Note, once the [Provider](../reference/providers.terraform.appvia.io.md) has gone healthy, the [contextual data](../admin/contexts.md) will be loaded make available via [Context](../reference/contexts.terraform.appvia.io.md) specified above `spec.preload.context`

You can see the data via `kubectl get contexts.terraform.appvia.io default -o yaml`. Which will have loads, details on the cluster, networking, routing tables and so forth.

c) Setup a policy to limit which modules can be provisioned within the cluster

For the purposes of the guide I want to limit to a single terraform module, used to provision database. I can of course scope this to one or more modules or make it namespace specific; see [here](../admin/policy/intro.md) for details.

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

From the developer perspective, I have an application which has a dependency on a MySQL database, and understand i'll be passed database the endpoint, username and password via environments variables, in this case mounted from a [Kubernetes secret](https://kubernetes.io/docs/concepts/configuration/secret/#using-a-secret)

a) Lets create a namespace for our application

```shell
kubectl create namespace apps
```

b) Lets provision a Database via a Configuration

```shell
export DATABASE_NAME="demo"

cat <<EOF | kubectl
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: database
  namespace: apps
spec:
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
    db_name: ${DATABASE_NAME}
    engine: mysql
    engine_version: '5.7'
    family: mysql5.7
    identifier: ${DATABASE_NAME}
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

c) Our application can consume the cloud resource

Note we are just using a `mariadb` container here to verify access, as a replacement for application.

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

You can verify access via

```shell
kubectl -n apps exec -ti $(kubectl -n apps get pod --label app=frontend) sh
```

And access the cluster via `mysql` cli by running the below command and entering the database user password when prompted.

```shell
mysql -h ${DATABASE_HOSTNAME} -P ${DATABASE_PORT} -u ${DATABASE_USERNAME} -p
Enter password:
```
