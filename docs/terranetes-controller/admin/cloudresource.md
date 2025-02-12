---
sidebar_position: 4
sidebar_class_name: green
---

# Cloud Resources

:::tip
This feature is only available from >= v0.4.0 releases
:::

Terranetes supports two interfaces for provisioning cloud resources: [Configurations](../reference/configurations.terraform.appvia.io.md), which represent the legacy implementation, and [CloudResources](../reference/cloudresources.terraform.appvia.io.md), which offer a more managed approach. While [Configurations](../reference/configurations.terraform.appvia.io.md) provide a one-to-one mapping to the Terraform module, [CloudResources](../reference/cloudresources.terraform.appvia.io.md) selectively expose attributes, thereby reducing the complexity for users and ensuring consistency with established standards.

:::info
Note that, although the user-facing interface is the [CloudResource](../reference/cloudresources.terraform.appvia.io.md), a managed [Configuration](../reference/configurations.terraform.appvia.io.md) is created by the controller behind the scenes. It is essential to understand that [CloudResources](../reference/cloudresources.terraform.appvia.io.md) serve as a means of creating a managed [Configuration](../reference/configurations.terraform.appvia.io.md).
:::

## What are Revisions?

[Revisions](../reference/revisions.terraform.appvia.io.md) are the templates for [CloudResources](../reference/cloudresources.terraform.appvia.io.md), each of which is a versioned asset that has been curated and tested against, containing the defaults required by the organization and exposing only the functionality that is contextually relevant. The key aspects of [Revisions](../reference/revisions.terraform.appvia.io.md) are:

- [Revisions](../reference/revisions.terraform.appvia.io.md) reference a terraform module.
- They contain all the default options that the platform wants to set in the module.
- They contain all the options that they want to expose to the consumer.
- Versions can track the upstream terraform module, or move independently of it.
- All [CloudResources](../reference/cloudresources.terraform.appvia.io.md) reference back to a [Revision](../reference/revisions.terraform.appvia.io.md) in the cluster.
- To upgrade a [CloudResource](../reference/cloudresources.terraform.appvia.io.md), the consumer updates the [Revision](../reference/revisions.terraform.appvia.io.md) it points to.

The following diagram illustrates the relationships between Plans (a collection of [Revisions](../reference/revisions.terraform.appvia.io.md)), [CloudResources](../reference/cloudresources.terraform.appvia.io.md), and the [Configuration](../reference/configurations.terraform.appvia.io.md) it manages.

<img src="/img/cloudresources.png"></img>

## Revision specification?

[Revisions](../reference/revisions.terraform.appvia.io.md) are composed of **three** primary sections

### Plan

Describes the metadata associated with the Revisions; the version, description, categories, and so forth.

```yaml
spec:
  ## Defines membership in a package
  plan:
    ## Is the name of the package we are a part of
    name: fake
    ## Is a collection of categories
    categories: [mysql, aws, fake]
    ## Is a description for what this plan provides
    description: Provides a dummy terraform module for testing
    ## Is the version of the package
    revision: v0.0.3
```

- **name**: is the most critical field here, as all [Revisions](../reference/revisions.terraform.appvia.io.md) are grouped by this field. [Revisions](../reference/revisions.terraform.appvia.io.md) with the same `spec.plan.name` are logically grouped into a [Plan](../reference/plans.terraform.appvia.io.md). Plans order these Revisions using SemVer. So when a [CloudResource](../reference/cloudresources.terraform.appvia.io.md) references a Plan `database`, without specifying a version; it looks up the [Plan](../reference/plans.terraform.appvia.io.md) and retrieves the latest version. If it specifies a version, it looks up the [Plan](../reference/plans.terraform.appvia.io.md) and checks if a [Revision](../reference/revisions.terraform.appvia.io.md) of said version exists.
- **categories**: is a collection of tags associated with the revision, these are user-facing and primarily used for searching.
- **description**: provides a human-readable description of the intended use for the [Revision](../reference/revisions.terraform.appvia.io.md)
- **revision**: is the SemVer version associated with this revision.

### Inputs

[Inputs](../reference/revisions.terraform.appvia.io.md#v1alpha1-.spec.configuration) are the options the platform team wants to expose to the consumers.

```yaml
spec:
  ## Is a list of inputs the user is permitted to override
  inputs:
    - key: sentence
      description: Is a sentence we want to print
      required: true
      default:
        value: hello from second additional
    - key: vpc_id
      description: Hello
    - key: list
      description: A list of names
      default:
        values: [a, b, c]
```

- **key**: (required) maps to the terraform variable within the module the [Revision](../reference/revisions.terraform.appvia.io.md) is backing.
- **description**: (required) provides a human-readable description to the variable.
- **required**: (optional) indicates if the user MUST specify a value.
- **default.value**: (optional) can be a string, number, list, or map and is used as the default value for the variable.

### Configuration

The last section provides a template to the [Configuration](../reference/configurations.terraform.appvia.io.md), determining the module source, default values, enabled features, and so forth.

```yaml
spec:
  configuration:
    ## Using a public repository
    module: https://github.com/appvia/terranetes-controller.git//test/e2e/assets/terraform/dummy?ref=master
    ## Where to write any secrets
    writeConnectionSecretToRef:
      name: outputs
```

Hence, the managed [Configuration](../reference/configurations.terraform.appvia.io.md) is a composite of this section and the optional inputs detailed above.

## How to create Revisions?

The process of creating a [Revision](../reference/revisions.terraform.appvia.io.md) is a straightforward one, as it is a standard Custom Resource Definition (CRD). This can be accomplished either manually or by utilizing the [tnctl create revision](../../cli/tnctl_create_revision/) command, which simplifies the creation process.

```shell
tnctl create revision https://github.com/terraform-aws-modules/terraform-aws-rds?ref=v5.9.0
```

## How to validate a Revision?

In the context of utilizing [CloudResources](../reference/cloudresources.terraform.appvia.io.md), ensuring the provision of a validated and reliable asset to the end-user is a critical aspect of the responsibility model. To facilitate this process, Terranetes provides [tnctl verify revision](../cli/tnctl_verify_revision.md) command.

```shell
$ tnctl verify revision revision.yaml
? Input identifier is a mandatory input, what should it's value be? test
🔰 Validating Revision Syntax
   ▫️ The Revision CRD is syntactically correct with no errors found             🟢
🔰 Validating Revision Specification
   ▫️ The Revision does not have any categories defined                          🟠
   ▫️ The Revision has a description defined                                     🟢
   ▫️ The Revision has the default description defined                           🟠
   ▫️ The Revision has a changelog defined                                       🟢
   ▫️ The Revision has the default changelog defined                             🟠
🔰 Validating Revision Inputs
   ▫️ Checking input: backup_window                                              🟢
   ▫️ Checking input: allocated_storage                                          🟢
   ▫️ Checking input: identifier                                                 🟢
🔰 Retrieving Checkov Version
   ▫️ Discovered Checkov version: "bridgecrew/checkov:2.3.291"                   🟢
🔰 Retrieving Terraform Version
   ▫️ Discovered Terraform version: "hashicorp/terraform:1.5.6"                  🟢
🔰 Validating Module Policy permits Revision
   ▫️ Found 1 module constraint policies                                         🟢
   ▫️ Revision is not permitted by any policy                                    🔴
🔰 Validating Cloud Credentials Provider
   ▫️ Checking if we providers associated with the revision                      🟢
   ▫️ Provider referenced exists in cluster                                      🟢
🔰 Validating of Context References
   ▫️ Revision does not reference any values from context/s                      🟢
🔰 Validating against Checkov Security Policy
   ▫️ Checkov is using the code, not the plan, consider --use-terraform-plan     🟠
   ▫️ Found 1 security policies to validate against                              🟢
   ▫️ Revision has passed 18 checks in policy: "checkov"                         🟢
   ▫️ Check ID against documentation: https://docs.bridgecrew.io/docs            🟢
   ▫️ Ensure that RDS instances have Multi-AZ enabled                            🔴
      Check ID: CKV_AWS_157
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure that RDS instances have performance insights enabled                🔴
      Check ID: CKV_AWS_353
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure that respective logs of Amazon Relational Database Service (Am      🔴
      Check ID: CKV_AWS_129
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure that AWS database instances have deletion protection enabled        🔴
      Check ID: CKV_AWS_293
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure that RDS instances has backup policy                                🔴
      Check ID: CKV_AWS_133
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure that enhanced monitoring is enabled for Amazon RDS instances        🔴
      Check ID: CKV_AWS_118
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Ensure CloudWatch log groups retains logs for at least 1 year              🔴
      Check ID: CKV_AWS_338
      Resource: module.main.module.db_instance.aws_cloudwatch_log_group.this
   ▫️ Ensure RDS instance with copy tags to snapshots is enabled                 🔴
      Check ID: CKV2_AWS_60
      Resource: module.main.module.db_instance.aws_db_instance.this[0]
   ▫️ Revision will fail on security policy: "checkov"                           🔴

🟢 Passed: 8, Warning: 4
🔴 Failed: 10
[Error]: revision failed verification checks
```

:::tip
To ensure a comprehensive validation process, it is advisable to utilize read-only credentials and enable the `--use-terraform-plan` flag. This approach requires standard environment variables, including AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, to facilitate a thorough examination of the Terraform plan.
:::
