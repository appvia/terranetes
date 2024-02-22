---
sidebar_position: 4
sidebar_class_name: green
---

# Cloud Resources

:::tip
This feature is only available from >= v0.4.0 releases
:::

Terranetes supports two interfaces to provisioning cloud resources; [Configurations](../reference/configurations.terraform.appvia.io.md) which are the legacy implementation and the [CloudResources](../reference/cloudresources.terraform.appvia.io.md). While [Configurations](../reference/configurations.terraform.appvia.io.md) provides a one-to-one mapping to the Terraform module, [CloudResources](../reference/cloudresources.terraform.appvia.io.md) takes a more managed approach. Rather the exposing the entirety of options to the consumer, [CloudResources](../reference/configurations.terraform.appvia.io.md) pick and choose which attributes are exposed, thus reducing the heavy lifting by the users and well and ensuring options do not diverge from a known path.

:::info
Note, while the user facing interface is the [CloudResource](../reference/cloudresources.terraform.appvia.io.md), a managed [Configuration](../reference/configurations.terraform.appvia.io.md) is created by the controller as the implementation detail. You can think of [CloudResources](../reference/cloudresources.terraform.appvia.io.md) as a means of creating a managed [Configuration](../reference/configurations.terraform.appvia.io.md).
:::

## What are Revisions?

[Revisions](../reference/revisions.terraform.appvia.io.md) are the templates for [CloudResources](../reference/cloudresources.terraform.appvia.io.md), each of these are versioned assets which has been curated and tested against, containing the defaults the organization requires and exposing only the functionality which is contextual. The basic gist is;

- [Revisions](../reference/revisions.terraform.appvia.io.md) point to a terraform module.
- They contain all the default options which the platform wants defaults to in the module.
- They contain all the options which they want exposed to the consumer.
- Versions can track the upstream terraform module, or move independently of it.
- All [CloudResources](../reference/cloudresources.terraform.appvia.io.md) reference back to a [Revision](../reference/revisions.terraform.appvia.io.md) in the cluster.
- To upgrade a [CloudResource](../reference/cloudresources.terraform.appvia.io.md) consumer update the [Revision](../reference/revisions.terraform.appvia.io.md) it points to.

The following depicts the relations between Plans (a collection of [Revisions](../reference/revisions.terraform.appvia.io.md)), [CloudResources](../reference/cloudresources.terraform.appvia.io.md) and the [Configuration](../reference/configurations.terraform.appvia.io.md) it manages.

<img src="/img/cloudresources.png"></img>

## Revision specification?

[Revisions](../reference/revisions.terraform.appvia.io.md) are made up for **three** sections

### Plan

Describes the metadata associated to the Revisions; the version, description, categories and so forth.

```yaml
spec:
  ## Defines we are a member of a package
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

- **name**: is probably the most important field here, as all [Revisions](../reference/revisions.terraform.appvia.io.md) are grouped by this field. [Revisions](../reference/revisions.terraform.appvia.io.md) with the same `spec.plan.name` are logically grouped into a [Plan](../reference/plans.terraform.appvia.io.md). Plans order these Revisions using semvar. So when a [CloudResource](../reference/cloudresources.terraform.appvia.io.md) references a Plan `database`, without specifying a version; it looks up the [Plan](../reference/plans.terraform.appvia.io.md) and retrieves the latest version. If it specifies a version, it looks up the [Plan](../reference/plans.terraform.appvia.io.md) and checks a [Revision](../reference/revisions.terraform.appvia.io.md) of said version exists.
- **categories**: is a collection of tags associated to the revision, these are user facing and largely used for searching.
- **description**: provides a human readable description of the intended use for the [Revision](../reference/revisions.terraform.appvia.io.md)
- **revision**: is semvar version associated to this revision.

### Inputs

[Inputs](../reference/revisions.terraform.appvia.io.md#v1alpha1-.spec.configuration) are the options the platform team want to expose to the consumers.

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
- **description**: (required) provides a human readable description to the variable.
- **required**: (optional) indicates if the user MUST specify a value.
- **default.value**: (optional) can be a string, number, list or map and is used as the default value for the variable.

### Configuration

The last section is provides a template to the [Configuration](../reference/configurations.terraform.appvia.io.md), determining the module source, default values, enabled features and so forth.

```yaml
spec:
  configuration:
    ## Using a public repository
    module: https://github.com/appvia/terranetes-controller.git//test/e2e/assets/terraform/dummy?ref=master
    ## Where to write any secrets
    writeConnectionSecretToRef:
      name: outputs
```

Thus the managed [Configuration](../reference/configurations.terraform.appvia.io.md) at the end is a combination of this section plus the optional inputs from above.

## How to create Revisions?

By hand of course, a [Revision](../reference/revisions.terraform.appvia.io.md) is nothing more standard CRD; however using the [tnctl create revision](../../cli/tnctl_create_revision/) command.

```shell
tnctl create revision https://github.com/terraform-aws-modules/terraform-aws-rds?ref=v5.9.0
```

## How to validate a Revision?

Part of the responsibility model of using [CloudResources](../reference/cloudresources.terraform.appvia.io.md) is passing a known and tested asset to the consumer. Terranetes tries to make this workflow simpler by using the [tnctl verify revision](../cli/tnctl_verify_revision.md).

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
The default validation checks the codebase but not the terraform plan. For a more complete validation we'd recommend passing read-only credentials and using the `--use-terraform-plan` flag, exporting the usual environment variable such as AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and so forth.
:::
