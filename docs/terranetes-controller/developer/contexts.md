---
sidebar_position: 3
---

# Configuration Contexts

[Contexts](../reference/contexts.terraform.appvia.io.md) serve as a mechanism for sharing common configuration inputs across [Configurations](../reference/configurations.terraform.appvia.io.md) within a cluster. This feature, introduced in version v0.3.25, enables the platform team to provision contexts that can be referenced by any [Configuration](../reference/configurations.terraform.appvia.io.md) for a more streamlined and efficient configuration management process.

:::tip
This feature is only available from v0.3.25 onwards
:::

## Viewing the Contexts

To enumerate all available [Contexts](../reference/contexts.terraform.appvia.io.md), execute the following command:

```shell
$ kubectl get contexts
```

A Context is comprised of variables, each of which is defined by a `description` and a `value`, as outlined below;

```yaml
---
apiVersion: terraform.appvia.io/v1alpha1
kind: Context
metadata:
  name: default
spec:
  #
  ## All variables MUST follow the pattern of 'description' and 'value'. The
  ## value can be any complex or simple type (boolean, int, map, object etc)
  #
  variables:
    environment:
      description: Is the environment your running in
      value: dev
    # Is the name of the variable
    vpc_id:
      # Provides a description to the consumer of the input
      description: Is the network identifier we are residing
      # The value of the value
      value: vpc-1223133113
    public_subnets_ids:
      # Provides a description to the consumer of the input
      description: |
        Is a collection of subnet id's which are publicly available i.e.
        they are attached to an internet gateway
      # The value of the value
      value:
        - subnet-12312312312
        - subnet-32332321312
```

## Referencing Context Values

To reference a [Context](../reference/contexts.terraform.appvia.io.md) value, utilize the `spec.valueFrom` field within the [Configuration](../reference/configurations.terraform.appvia.io.md). This allows for the integration of context values into your configurations.

For example, when a module necessitates knowledge of the VPC ID, you can leverage this mechanism to inject the required information.

```yaml
  ---
  apiVersion: terraform.appvia.io/v1alpha1
  kind: Configuration
  metadata:
    name: bucket
  spec:
    module: https://github.com/terraform-aws-modules/terraform-aws-rds

    providerRef:
      name: aws
    valueFrom:
      - context: NAME_OF_CONTEXT  # Referenced context name
        key: vpc                  # Name of the context key that holds the value
        name: vpc_id              # Terraform module input variable name
        optional: true
```

### Field Definitions

* `context` refers to the [Context](../reference/contexts.terraform.appvia.io.md) resource name that is being referenced.
* `key` is the name of the variable within the [Context](../reference/contexts.terraform.appvia.io.md) resource.
* `name` is the identifier used to present the value to the terraform module. For instance, `vpc_id` can be mapped to `network_id` or `vpc` in the module.
* `optional` determines whether the value or [Context](../reference/contexts.terraform.appvia.io.md) needs to exist. If set to true, any missing value is ignored.


