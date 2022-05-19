---
sidebar_position: 1
---

# Using Terraform

Consumption side the only resource required if the [Configuration](docs/reference/configuration.md) CRD. Below is an example

```YAML
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  # ssh git::ssh://git@example.com/foo/bar
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0

  providerRef:
    namespace: terraform-system
    name: default

  writeConnectionSecretToRef:
    name: test

  # An optional reference to a secret containing credentials to retrieve
  # the repository
  auth:
    name: [SECRET_NAME]

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
The source reference uses the exact same format as terraform itself; indeed the same library is used. For full details take a look at https://github.com/hashicorp/go-getter.
:::

For quick reference

* Using SSH the format would look like `git::ssh://git@example.com/foo/bar`
* Using HTTPS the format would be `https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0`

You can also extract specific folders or files from the downloaded module by using the double slash `[URL]//dir/file`.

### Provider Reference

The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the RBAC you currently posses you came retrieve a list of the current providers via `kubectl`

```shell
$ kubectl get providers -n [NAMESPACE]
```

Once you have the provider `namespace` and `name` you use the reference in the configuration.

```YAML
spec:
  providerRef:
    namespace: [NAMESPACE]
    name: [NAME]
```

### Terraform Variables

The variables section `spec.variables` is a free form map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via `-var-file` on the `plan` and `apply` stages.

### Connection Secret Reference

The connection secret `spec.writeConnectionSecretToRef` defines the name of a secret within your namespace where you want any outputs from the module to be written.

The name of the secret *(inside the Configuration namespace)* where any module outputs from the terraform module are written as environment variables.


**Private Repositories**
---

If the repository is private, you can add SSH credentials via a secret and update the spec to reference the secret `spec.auth.name: ssh`.

```
$ kubectl -n apps create secret generic ssh --from-file=SSH_KEY_AUTH=id.rsa
```

You can also pass `GIT_USERNAME` and `GIT_PASSWORD` as an alternative to SSH.

**Annotations**

The following annotations exists

* `terraform.appvia.io/apply` is applied by the controller after a successful plan on a configuration with `spec.enableAutoApproval: false`
* `terraform.appvia.io/orphan` can added by users to the Configuration CRD and on deletion the destroy job is skipped.
