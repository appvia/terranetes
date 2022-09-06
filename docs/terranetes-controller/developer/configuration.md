---
sidebar_position: 1
---

# Provisioning a Terraform Module

## Example configuration resource

On the consumption side the only resource required is the [Configuration](../reference/configurations.terraform.appvia.io.md) CRD. Below is an example:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  # ssh example: git::ssh://git@example.com/foo/bar
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
    bucket: rohith-test-1234
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
The source syntax _(spec.module)_ on releases `<= v0.2.5` does not fully support suggested [Github format](https://www.terraform.io/language/modules/sources#github). References to Github must use the `https://github.com/appvia/terraform-aws-rds?ref=TAG` or `git::ssh://git@github.com/appvia/terraform-aws-rds.git`.

Following the syntax of [Generic Git Repository](https://www.terraform.io/language/modules/sources#generic-git-repository).
:::

## Sections of the configuration resource

The configuration resource is comprised of the following sections.

### Module reference

The module reference defines the source of the terraform module to run.

:::tip
The source reference uses the exact same format as terraform itself (the same library is used). For full details take a look at [hashicorp/go-getter](https://github.com/hashicorp/go-getter).
:::

For quick reference:
* Using SSH the format would look like this: `git::ssh://git@example.com/foo/bar`
* Using HTTPS the format would be: `https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0`

You can also extract specific folders or files from the downloaded module by using the double slash: `[URL]//dir/file`.

### Provider reference

The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the Kubernetes RBAC you currently posses you can retrieve a list of the current providers via `kubectl`:

```shell
$ kubectl get providers -n [NAMESPACE]
```

Once you have the provider `name` you use the reference in the configuration:

```yaml
spec:
  providerRef:
    name: <NAME>
```

### Terraform variables

The variables section `spec.variables` is a freeform map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via `-var-file` on the `plan` and `apply` stages.

For variables that are sensitive such as passwords it would be better to use the `spec.valueFrom` field. This is a collection of references to kubernetes secrets that hold the values.

:::important
ValueFrom fields is available from version >= v0.1.6
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

The connection secret `spec.writeConnectionSecretToRef` is the name of a secret within the namespace where you want any Terraform outputs to be written. These outputs are converted to environment variable format, i.e., upper-cased and ready to be consumed by workloads using [env and envFrom](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables).

By default when a secret is defined all the outputs produced are written in environment variable form. If you want to filter this and only select specific keys from the terraform output you can include the `spec.writeConnectionSecretToRef.keys` field as shown below.

```yaml
spec:
  writeConnectionSecretToRef:
    name: [NAME]
    keys:
      - name_of_key
      - name_of_key
```

#### Secrets Remapping

We use the resource outputs as the keys in the connection secret, so if a resource has a `database_endpoint` output the secret will have a key named `DATABASE_ENDPOINT`. You might want to rename one or more outputs for convenience however, for example change the `database_endpoint` to `mysql_host`. You can change the key like below

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-rds.git?ref=v3.1.0
  providerRef:
    name: aws
  writeConnectionSecretToRef:
    name: test
    keys:
      - database_endpoint:mysql_host # is renamed to MYSQL_HOST
      - database_port                # is unchanged as DATABASE_PORT
```

## Viewing the changes

As a Configuration transitions through its plan, apply and destroy phases, a job is created in the namespace, and used to feedback the execution of the change. The jobs follows the naming format `[RESOURCE]-[GENERATION]-[plan|apply|destroy]`. You can easily view the execution of a change by inspecting the pod's logs (`kubectl logs [POD]`).

## Approving a plan

By default, unless the `spec.enableAutoApproval` is set to true, all Configurations require a manual approval. You can do this by toggling an annotation on the Configuration itself.

To approve the Configuration `bucket`:

```shell
$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true --overwrite
```

## Deleting the resource

You can delete the resource like any other Kubernetes resource (`kubectl delete configuration [NAME]`). One extra feature is the ability to orphan the cloud resources (i.e., delete the Kubernetes representation but DO NOT delete the cloud resources themselves).

For instance, you may need to migrate the configuration to another cluster. In that case:

1. Annotate the Configuration with `kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true`
2. Delete the Configuration resource as per normal. The resource will disappear but the cloud resources will remain.
