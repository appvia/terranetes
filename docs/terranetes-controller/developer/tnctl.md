---
sidebar_position: 1
---

# Finding Cloud Resources

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
