---
sidebar_position: 2
---

# Platform Team

## Setting up workflows

The `terranetes-workflows` resides at https://github.com/appvia/terranetes-workflows

1. Clone the repository into the Github organization and update the repository settings to [Github Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).
2. If your organization has a central Checkov policies repository update the `POLICY_SOURCE` and `POLICY_VERSION` in the Github workflows, pointing to the repository and tag _(tag is optional)_. If you don't have a central repository, its fine, the security checks will use the default rules.
3. If you wish to enable [Infracost](https://www.infracost.io/) integration, add an organizational secret named `ORG_INFRACOST_API_KEY`. On pull requests will be comment on the breakdown or the diff in predicted costs.

### Current Checks

Bundled in the template is a collection of Github workflows assessing;

* Checkov Security Rules
* Code Format
* Commit messages linting (consistent changelogs)
* Cost Estimations (Infracost)
* Module Docs (terraform-docs)
* Terraform Code Validation

Currently we only support Github actions, though the intention is to replicate the actions for Gitlab and CircleCI.

### On the Roadmap

- Scheduled jobs to re-evaluate the security checks.
- Automatically ::raising pull requests when central policy is updated.

## Authoring a module

The following walks the iteration of provisioning a new terraform module using workflows.

:::important
This is not a terraform tutorial, so for our purposes we will be wrapping an existing module
::::

### Create the module

Assuming you have cloned the [repository](https://github.com/appvia/terranetes-workflows) to a [Github template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) in your organization. Create a repository via the UI or the [Github CLI](https://github.com/cli/cli)

```shell
gh repo create appvia/terraform-aws-rds --template appvia/terranetes-workflows
```

Ensure you've added an appropriate description, as the [tnctl search](/terraform-controller/cli/tnctl_search) command uses the terms found here to filter on.

```shell
gh repo edit appvia/terraform-aws-rds --description "Terraform module used to provision a RDS database"
```

Alternatively you can replicate via the [tnctl workflow create](/terraform-controller/cli/tnctl_workflow_create) command

```shell
tnctl workflow create terraform-aws-rds --template URL
```

### Adding the code

Your are now ready to start adding the terraform code. Open the branch and pull request

```shell
git checkout -b feat_adding_code
# add code and commit
gh pr create
```

Github actions will assess, review and update the pull requests with appropriate comments.

### Publish the artifact

By default all tags `v[SEMVER]` automatically create a Github release and changelog. Assuming the [tnctl search](docs/terraform-controller/cli/tnctl_search.md] is using your Github organization as a source the artifact is now immediately searchable.

For public repositories the Terraform registry offers a nice solution to central point to distribute, view and search for resources. At present you must perform this on a per repository basis. Go to https://registry.terraform.io/sign-in

For private repositories take a look at

- https://github.com/outsideris/citizen
- https://github.com/SwissArmyRonin/terraform-aws-registry

### Find the artifact

The release should now be available from your Github organization `tnctl search rds`.
