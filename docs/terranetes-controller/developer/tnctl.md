---
sidebar_position: 1
---

# Terranetes CLI

Terranetes comes bundled with a [tnctl](docs/terranetes-controller/cli/tnctl.md) command _(see [Releases](docs/terranetes-controller/releases.md) for downloads)_ which has ability to search for cloud resources. The [search](docs/terranetes-controller/cli/tnctl_search.md) subcommand supports iterating through

* [Terraform registry](https://registry.terraform.io).
* [Github](https://github.com) repositories and releases of any organization and or user.

## How to search

Once one or more sources have been configured you can search for cloud resources via

```shell
tnctl search [TERMS]
```

Looking for a `database` module on `aws`.

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

Next you will be prompted to choose the

* Tagged version
* Asked for any **required** inputs _(i.e. names, storages size and so forth)_

The final piece will render a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) CRD ready to be consumed in your deployment pipeline.

## Adding Sources

You can add a source to the [tnctl](docs/terranetes-controller/cli/tnctl.md) command via [tnctl config sources](docs/terranetes-controller/cli/tnctl_config_sources.md) command. For example to add

### Adding your Github organization

```shell
tnctl config sources add https://github.com/appvia
```

:::important
If any of the terraform modules are in private repositories you must export your Github token via export GITHUB_TOKEN=TOKEN
:::

### Adding the Terraform Registry

You can add the Terraform registry via

```shell
tnctl config sources add https://registry.terraform.io
```

Alternately you can scope the registry to a specific namespace

```shell
tnctl config sources add https://registry.terraform.io/namespaces/terraform-aws-modules
```

:::tip
You can add as many sources are you needs. The [search](docs/terranetes-controller/cli/tnctl_search.md) will aggregate the results and present it findings as one.
:::

## Integrate with Kubectl

You can integrate tnctl with Kubectl i.e. `kubectl tnctl COMMAND`.

:::important
Kubectl can recognize plugins based on the name. Lets assume you place an executable script in your `$PATH` named `kubectl-hello-world`. This script can be called via `$ kubectl hello world`. All the `tnctl kubectl plugin` does it create an collection of these alias scripts i.e kubectl-tnctl-describe, kubectl-tnctl-logs and so forth in the desired location.
:::

1. Run the `tnctl kubectl plugin -d DIRECTORY` command. The directory here is the location of where the alias scripts should be located.
2. Ensure the alias scripts are included in your environment `$PATH`
3. Ensure the `tnctl` is included in your environment `$PATH`.
4. You can now use kubectl directory _(note tab completion is configured via kubectl, please review their docs)_.

## Watching Logs

When a Configuration is run a pod is created in the namespace used to watch the logs. You can perform the

1. Retrieve the pods via `kubectl get pods`
2. Find the appropriate pod based on the Configuration name and generation.
3. Watch the logs via `kubectl logs NAME -f`

A faster alternative is to use the [logs](docs/terranetes-controller/cli/tnctl_logs.md]

1. Type `tnctl logs -n NAMESPACE NAME [-f--follow]`
2. If the kubectl plugin integration has been enabled, you can use `kubectl tnctl logs [-n NAMESPACE] NAME [-f|--follow]`

```bash
$ tnctl logs -n apps bucket -f
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

You can the use

1. `tnctl describe -n NAMESPACE [NAME]`
2. `kubectl tnctl describe [-n NAMESPACE] [NAME]`

to provide insight into costs and policy.

```bash
[jest@starfury terranetes-controller]$ bin/tnctl describe -n apps bucket
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
