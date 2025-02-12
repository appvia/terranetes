---
sidebar_position: 1
---

# Terranetes CLI

The Terranetes platform includes a comprehensive command-line interface tool, [tnctl](docs/terranetes-controller/cli/tnctl.md), which facilitates cloud resources lifecycle management. The [search](docs/terranetes-controller/cli/tnctl_search.md) subcommand is specifically designed to traverse and index resources from prominent sources, including:

* The [Terraform registry](https://registry.terraform.io), a central hub for Terraform modules.
* [Github](https://github.com) repositories and releases, encompassing a wide range of organizations and users.

For access to the tnctl tool, please refer to the [Releases](docs/terranetes-controller/releases.md) section for download instructions.

## How to search

Upon configuring one or more sources, you can initiate a search for cloud resources using the following command:

```shell
tnctl search [TERMS]
```

For instance, to search for a `database` module specifically on `aws`, you would execute:

```shell
$ tnctl search database
? What cloud provider should we scope the search to? aws
? Which resource do you want to provision?
  ▸[TF] terraform-aws-modules/dms
   [TF] babbel/secretsmanager-for-database-url
   [TF] terraform-aws-modules/dms
   [TF] connect-group/rds-finalsnapshot
   [TF] azavea/postgresql-rds
   [TF] franviera92/aurora
   [TF] bridgecrewio/secured-postgresql-rds
   [TF] felipefrizzo/rds-mysql
   [TF] felipefrizzo/rds-postgres
   [TF] devops4me/postgres-rds
   [TF] jessiehernandez/autorotated-database-credentials
   [TF] mnanchev/database-migration-service
   [TF] aleks-fofanov/rds-lambda-db-provisioner
   [TF] jessiehernandez/database-credentials-rotator
↓  [TF] offensive-terraform/rds-snapshot-publicly-exposed

Name:       dms
Namespace:  terraform-aws-modules
Module:     https://github.com/terraform-aws-modules/terraform-aws-dms
Source:     https://registry.terraform.io/namespaces/terraform-aws-modules
Created:    2022-06-23 17:41:50.716218 +0000 UTC
Downloads:  16436

Terraform module which creates AWS DMS (Database Migration Service) resources
```

Subsequently, you will be prompted to select the following:

* Tagged version
* Provide any **required** inputs _(e.g., names, storage sizes, etc.)_

Ultimately, this process will generate a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) CRD, ready for integration into your deployment pipeline.

## Adding Sources

To integrate additional sources with the [tnctl](docs/terranetes-controller/cli/tnctl.md) command, utilize the [tnctl config sources](docs/terranetes-controller/cli/tnctl_config_sources.md) command. This allows for the incorporation of new sources, as exemplified by the following process.

### Adding your Github organization

To incorporate your Github organization as a source for Terraform modules, execute the following command:

```shell
tnctl config sources add https://github.com/appvia
```

:::important
If any of the Terraform modules are located within private repositories, it is essential to set your Github token as an environment variable using the command `export GITHUB_TOKEN=TOKEN`. This step is crucial for ensuring access to private repositories.
:::

### Adding the Terraform Registry

To integrate the Terraform registry, execute the following command:

```shell
tnctl config sources add https://registry.terraform.io
```

Alternatively, you can specify a particular namespace within the Terraform registry by using the following command:

```shell
tnctl config sources add https://registry.terraform.io/namespaces/terraform-aws-modules
```

:::tip
It is possible to add multiple sources as needed. The [search](docs/terranetes-controller/cli/tnctl_search.md) functionality will consolidate the results and present them in a unified manner.
:::

## Integrate with Kubectl

To integrate tnctl with Kubectl, execute the following steps to enable the use of `kubectl tnctl COMMAND`.

:::important
Kubectl is capable of recognizing plugins based on their naming convention. For example, if you place an executable script named `kubectl-hello-world` in your `$PATH`, it can be invoked using the command `$ kubectl hello world`. The `tnctl kubectl plugin` generates a collection of such alias scripts, including `kubectl-tnctl-describe`, `kubectl-tnctl-logs`, and others, in a specified location.
:::

To complete the integration:

1. Execute the `tnctl kubectl plugin -d DIRECTORY` command, specifying the directory where the alias scripts should be located.
2. Ensure the generated alias scripts are included in your environment's `$PATH`.
3. Verify that `tnctl` is also included in your environment's `$PATH`.
4. You can now utilize the integrated functionality with Kubectl. (see how to set tab completion [here](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_completion/)).

By following these steps, you will be able to leverage the capabilities of tnctl directly within your Kubectl workflow.

## Watching Logs

When a Configuration is executed, a pod is created in the designated namespace to monitor the logs. To access these logs, follow these steps:

1. Retrieve the list of pods using the command `kubectl get pods`.
2. Identify the relevant pod based on the Configuration name and generation.
3. Monitor the logs by executing the command `kubectl logs NAME -f`.

For a more efficient approach, consider using the [tcnl logs](docs/terranetes-controller/cli/tnctl_logs.md) command.

1. Execute `tnctl logs -n NAMESPACE NAME [-f--follow]`.
2. If the kubectl plugin integration is enabled, you can use `kubectl tnctl logs [-n NAMESPACE] NAME [-f|--follow]`.

```bash
$ tnctl logs [cloudresource|configuration] -n apps bucket -f
[info] waiting for the job to be scheduled
[info] watching build: bucket, generation: 1 for the job to be scheduled
........
=======================================================
'SETTING UP THE ENVIRONMENT'
=======================================================
time="2022-08-09T09:59:37Z" level=info msg="downloading the assets" dest=/data source="https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0"
time="2022-08-09T09:59:38Z" level=info msg="successfully downloaded the source" source="https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0"
time="2022-08-09T09:59:38Z" level=info msg="successfully executed the step"

Initializing the backend...

Successfully configured the backend "kubernetes"! Terraform will automatically
use this backend unless the backend configuration changes.
...
```

## Describing Configurations

To gain detailed insights into costs and policy, you can utilize the following commands:

1. `tnctl describe [cloudresource|configuration] -n NAMESPACE [NAME]`
2. `kubectl tnctl describe [cloudresource|configuration] [-n NAMESPACE] [NAME]`

These commands facilitate the retrieval of comprehensive information about costs and policy associated with cloud resources or configurations within a specified namespace.

```bash
[jest@starfury terranetes-controller]$ bin/tnctl describe [cloudresource|configuration] -n apps bucket
Name:         bucket
Namespace:    apps
Created:      2022-08-09T09:59:28Z
Status:       OutOfSync
Annotations:
              terraform.appvia.io/apply    false
Labels:       None

Conditions:
==========
Name               Reason             Message
Provider ready     Ready              Provider ready
Terraform Plan     Ready              Terraform plan is complete
Security Policy    ActionRequired     Configuration has failed security policy, refusing to continue
Terraform Apply    ActionRequired     Waiting for terraform apply annotation to be set to true
Ready              NotDetermined

Configuration:
=============
Authentication: None
Module:         https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0
Provider:       aws
Secret:         apps/test

Checkov Security Policy:
=======================
Status:         Configuration has passed 11 and failed on 3 checks.

CKV_AWS_18     FAILED
├─ Name:       Ensure the S3 bucket has access logging enabled
├─ Resource:   aws_s3_bucket.this[0]
└─ Guide:      https://docs.bridgecrew.io/docs/s3_13-enable-logging
CKV_AWS_144    FAILED
├─ Name:       Ensure that S3 bucket has cross-region replication enabled
├─ Resource:   aws_s3_bucket.this[0]
└─ Guide:      https://docs.bridgecrew.io/docs/ensure-that-s3-bucket-has-cross-region-replication-enabled
...
```
