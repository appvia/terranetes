---
sidebar_position: 1
---

# Provisioning a Terraform Module

Consumption side the only resource required is the [Configuration](docs/reference/configurations.terraform.appvia.io.md) CRD. Below is an example:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  # ssh example: git::ssh://git@example.com/foo/bar
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0

  providerRef:
    namespace: terraform-system
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

The configuration resource is comprised of the following sections.

### Module Reference

The module reference defines the source of the terraform module to run.

:::tip
The source reference uses the exact same format as terraform itself (the same library is used). For full details take a look at [hashicorp/go-getter](https://github.com/hashicorp/go-getter).
:::

For quick reference:
* Using SSH the format would look like `git::ssh://git@example.com/foo/bar`
* Using HTTPS the format would be `https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0`

You can also extract specific folders or files from the downloaded module by using the double slash `[URL]//dir/file`.

### Provider Reference

The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the Kubernetes RBAC you currently posses you can retrieve a list of the current providers via `kubectl`

```shell
$ kubectl get providers -n [NAMESPACE]
```

Once you have the provider `namespace` and `name` you use the reference in the configuration.

```yaml
spec:
  providerRef:
    namespace: <NAMESPACE>
    name: <NAME>
```

### Terraform Variables

The variables section `spec.variables` is a freeform map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via `-var-file` on the `plan` and `apply` stages.

### Connection Secret Reference

The connection secret `spec.writeConnectionSecretToRef` defines the name of a secret within your namespace where you want any outputs from the module to be written.

The name of the secret *(inside the Configuration namespace)* where any module outputs from the terraform module are written as environment variables.

By default when a secret is defined all the outputs produced are written in environment variable form. If you want to filter this and only select specific keys from the terraform output you can include the `spec.writeConnectionSecretToRef.keys` field as below.

```yaml
spec:
  writeConnectionSecretToRef:
    name: [NAME]
    keys:
      - name_of_key
      - name_of_key
```

### Viewing the Changes

As a Configuration transitions through it's plan, apply and destroy phases a job is created in the namespace, used to feedback the execution of the change. The jobs follow the naming format `[RESOURCE]-[GENERATION]-[plan|apply|destroy]`. You can easily view the execution of a change by inspecting the pod's logs (`kubectl logs [POD]`).

### Approving a Plan

By default, unless the `spec.enableAutoApproval` is set to true, all Configurations require a manual approval. This performed by toggling an annotation on the Configuration itself.

To approve the Configuration `bucket`:

```shell
$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true
```

### Deleting the resource

You can delete the resource like any other Kubernetes resource (`kubectl delete configuration [NAME]`). One extra feature is the ability to orphan the cloud resources (i.e delete the Kubernetes representation but DO NOT delete the cloud resource themselves). For instance you may need to migrate the configuration to another cluster.

1. Simply annotate the Configuration with `kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true`
2. Delete the Configuration resource as per normal. The resource will disappear but the cloud resources will remain.
