---
sidebar_position: 1
---

# Provisioning a Resource

Terranetes offers two distinct interfaces for provisioning cloud resources: the [Configuration](../reference/configurations.terraform.appvia.io.md) Custom Resource Definition (CRD) and the newer [CloudResource](../reference/cloudresources.terraform.appvia.io.md) model. The primary distinction between these interfaces lies in their approach to simplicity and control.

The [Configuration](../reference/configurations.terraform.appvia.io.md) CRD provides a direct, one-to-one mapping to the Terraform module, offering a high degree of customization and flexibility. In contrast, the [CloudResource](../reference/cloudresources.terraform.appvia.io.md) interface presents a curated subset of options, enabling platform teams to establish defaults, integrate best practices, and enforce security or organizational policies. This design choice has the added advantage of reducing the cognitive load associated with navigating the extensive range of options available in a Terraform module.

## Example CloudResource

This section outlines the steps to provision a [CloudResource](../reference/cloudresources.terraform.appvia.io.md).

### Step 1: Discover Available Resources

To identify the resources available for self-service provisioning, execute the following command to query the cluster for available plans:

```shell
$ kubectl get plans
NAME       LATEST   AGE
database   v0.0.1   3s
```

### Step 2: Inspect the Latest Revision of the Service

To view the details of the latest revision of the service, use the following command:

```shell
kubectl get revision $(kubectl get plan database -o json | jq .status.latest.name -r) -o yaml
```

This command will display the options available within the plan.

### Step 3: Provision a CloudResource from a Revision

To create a CloudResource based on a revision, execute the following command:

```shell
tnctl create cloudresource database
```

This command initiates the provisioning process for a CloudResource named "database" based on the latest revision available.

## Example Configuration resource

For users employing the [Configuration](../reference/configurations.terraform.appvia.io.md) model, the following example is provided:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  # SSH example: git::ssh://git@example.com/foo/bar
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0

  providerRef:
    name: default

  writeConnectionSecretToRef:
    name: test

  # An optional reference to a secret containing credentials to retrieve
  # the git repository
  auth:
    name: <SECRET_NAME>

  # Terraform variables used to populate the module
  variables:
    # -- The name of the bucket. If omitted, Terraform will assign a random, unique name
    bucket: example-test-1234
    # -- The canned ACL to apply
    acl: private
    # -- Map containing versioning configuration
    versioning:
      enabled: true
    # --Whether Amazon S3 should block public ACLs for this bucket
    block_public_acls: true
    # -- Whether Amazon S3 should block public bucket policies for this bucket
    block_public_policy: true
    # -- Whether Amazon S3 should ignore public ACLs for this bucket
    ignore_public_acls: true
    # -- Whether Amazon S3 should restrict public bucket policies for this bucket
    restrict_public_buckets: true
    # -- Map containing server-side encryption configuration
    server_side_encryption_configuration:
      rule:
        apply_server_side_encryption_by_default:
          sse_algorithm: "aws:kms"
        bucket_key_enabled: true
```

:::important
For releases `<= v0.2.5`, the source syntax specified in `spec.module` does not fully adhere to the recommended [Github format](https://www.terraform.io/language/modules/sources#github) for referencing Github repositories. To ensure compatibility, it is essential to use the following formats for Github references: `https://github.com/appvia/terraform-aws-rds?ref=TAG` or `git::ssh://git@github.com/appvia/terraform-aws-rds.git`.

It is crucial to follow the syntax guidelines outlined in the [Generic Git Repository](https://www.terraform.io/language/modules/sources#generic-git-repository) documentation to ensure successful module sourcing.
:::

## Configuration Resource Structure

The configuration resource is structured into distinct sections, each serving a specific purpose in the provisioning process.

### Module reference

The module reference specifies the source location of the Terraform module to be executed. 

:::tip
This reference adheres to the same format as Terraform itself, leveraging the same library. For comprehensive information, refer to [hashicorp/go-getter](https://github.com/hashicorp/go-getter).
:::

For convenience, the following formats are applicable:
* SSH-based references follow the pattern: `git::ssh://git@example.com/foo/bar`
* HTTPS-based references conform to: `https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0`

Additionally, it is possible to selectively extract specific folders or files from the downloaded module by incorporating the double slash notation: `[URL]//dir/file`.

### Provider reference

The provider reference is a crucial element that establishes the connection between a configuration and the credentials required to communicate with the cloud. Depending on the Kubernetes RBAC you currently possess, you can retrieve a list of the current providers via `kubectl`:

```shell
$ kubectl get providers -n [NAMESPACE]
```

Once you have the provider `name`, you can use the reference in the configuration:

```yaml
spec:
  providerRef:
    name: <NAME>
```

### Terraform variables

The `spec.variables` section is a map that enables the definition of all variables that can be utilized by the module. These variables are transformed into HCL format and injected into the workflow through the `-var-file` option during both the `plan` and `apply` phases.

When dealing with sensitive variables, such as passwords, it is advisable to leverage the `spec.valueFrom` field. This field comprises a collection of references to Kubernetes secrets that store the actual values of these sensitive variables.

:::important
The `spec.valueFrom` field is available from version >= v0.1.6
::::

An example for an RDS module can be

```
spec:
  valueFrom:
    - secret: db_password
      key: database_password
      optional: false
```

### Connection secret reference

The `spec.writeConnectionSecretToRef` field specifies the name of a secret within the namespace where Terraform outputs are written. These outputs are automatically converted to environment variable format, ensuring they are uppercase and readily consumable by workloads utilizing [env and envFrom](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables).

By default, when a secret is defined, all Terraform outputs are written in environment variable form. To selectively include specific keys from the Terraform output, you can incorporate the `spec.writeConnectionSecretToRef.keys` field, as demonstrated below.

```yaml
spec:
  writeConnectionSecretToRef:
    name: [NAME]
    keys:
      - name_of_key
      - name_of_key
```

#### Secrets Remapping

The Terraform controller uses the resource outputs as the keys in the connection secret. For example, if a resource has a `database_endpoint` output, the secret will have a key named `DATABASE_ENDPOINT`. However, you might want to rename one or more outputs for convenience. For instance, you can change the `database_endpoint` to `mysql_host` as shown below:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration|CloudResource
metadata:
  name: bucket
spec:
  providerRef:
    name: aws
  writeConnectionSecretToRef:
    name: test
    keys:
      - database_endpoint:mysql_host # is renamed to MYSQL_HOST
      - database_port                # is unchanged as DATABASE_PORT
```

## Viewing the changes

During the lifecycle of a Configuration, including its plan, apply, and destroy phases, a job is spawned within the namespace to facilitate the tracking of the change's execution. These jobs adhere to a standardized naming convention, `[RESOURCE]-[GENERATION]-[plan|apply|destroy]`, allowing for easy identification. To monitor the progress of a change, you can examine the logs of the corresponding pod using the command `kubectl logs [POD]`.

Alternatively, the [tnctl](docs/terranetes-controller/developer/tnctl.md) command-line interface offers a convenient method for accessing logs, as demonstrated below:

```shell
$ tnctl logs -n NAMESPACE NAME
```

## Approving a plan

By default, all Configurations and CloudResources require manual approval before execution, unless `spec.enableAutoApproval` is explicitly set to `true`. To facilitate this approval process, an annotation can be applied directly to the Configuration or CloudResource.

To manually approve the Configuration named `bucket`, execute one of the following commands:

```shell
$ kubectl -n apps annotate configuration bucket "terraform.appvia.io/apply"=true --overwrite
```

Alternatively, for CloudResources:

```shell
$ kubectl -n apps annotate cloudresource bucket "terraform.appvia.io/apply"=true --overwrite
```

For a more streamlined approach, the [tnctl](docs/terranetes-controller/developer/tnctl.md) command-line interface provides a dedicated approval mechanism. To approve a Configuration or CloudResource using tnctl, use the following command:

```shell
$ tnctl approve cloudresource|configuration -n NAMESPACE NAME
```

This annotation or tnctl command effectively signals approval for the specified resource, allowing the Terraform controller to proceed with the execution of the plan.

## Deleting the resource

Deleting a resource is a standard operation in Kubernetes, and can be done using the command `kubectl delete configuration [NAME]`. An additional feature is the ability to orphan the cloud resources, meaning that the Kubernetes representation is deleted, but the cloud resources themselves are not.

For example, if you need to migrate a configuration to another cluster, follow these steps:

1. Annotate the Configuration with `kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true`
2. Delete the Configuration resource as usual. The resource will be removed, but the cloud resources will remain.
