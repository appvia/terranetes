---
sidebar_position: 3
---

# Configuration Contexts

Configuration [Contexts](../reference/contexts.terraform.appvia.io.md) are a means to share common configuration (inputs) between [Configurations](../reference/configurations.terraform.appvia.io.md) in the cluster.

:::tip
This feature is only available from v0.3.25 onwards
:::

These are provisioned by the platform team, but can be referenced by any [Configuration](../reference/configurations.terraform.appvia.io.md)

## Viewing the Contexts

You can list all the [Contexts](../reference/contexts.terraform.appvia.io.md) available via

```shell
$ kubectl get contexts
```

The contains is a map of entities which contains both a `description` an d `value`, as such;

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

You can reference a [Context](../reference/contexts.terraform.appvia.io.md) value using the `spec.valueFrom` field in the [Configuration](../reference/configurations.terraform.appvia.io.md)

For instance if we have a module that requires knowledge of the VPC id, we can use

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
      - context: NAME_OF_CONTEXT
        key: vpc
        name: vpc_id
        optional: true
```

### Field Definitions

* `context` is the name of the [Context](../reference/contexts.terraform.appvia.io.md) resource to reference.
* `key` is the name of the variable inside the [Context](../reference/contexts.terraform.appvia.io.md) resource.
* `name` is the name we present the value to the terraform module - i.e you might need `vpc_id` mapped to `network_id` or `vpc` in the module.
* `optional` controls if the value or [Context](../reference/contexts.terraform.appvia.io.md) needs to exist, if true, any missing value is ignored.


