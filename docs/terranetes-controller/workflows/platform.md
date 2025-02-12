---
sidebar_position: 2
---

# Platform Team

## Setting up workflows

The `terranetes-workflows` resides at https://github.com/appvia/terranetes-workflows

To integrate the `terranetes-workflows` into your organization's workflow, follow these steps:

1. Clone the `terranetes-workflows` repository into your organization's GitHub space and configure the repository settings to adhere to the [GitHub Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) guidelines.
2. If your organization maintains a centralized *Checkov* policies repository, update the `POLICY_SOURCE` and `POLICY_VERSION` variables within the GitHub workflows to reference the repository and its tag (optional). In the absence of a central repository, the security checks will default to using the standard rules.
3. To enable [Infracost](https://www.infracost.io/) integration, create an organizational secret named `ORG_INFRACOST_API_KEY`. This will facilitate comments on pull requests, providing a detailed breakdown or diff of the predicted costs.

### Current Checks

The template includes a comprehensive suite of GitHub workflows designed to evaluate and enforce various aspects of code quality and security. These workflows encompass:

* Checkov Security Rules: Ensuring adherence to security best practices and identifying potential vulnerabilities.
* Code Format: Maintaining a consistent code structure and style across the project.
* Commit messages linting (consistent changelogs): Standardizing commit messages for clear and concise documentation of changes.
* Cost Estimations (Infracost): Providing detailed cost analysis and predictions for infrastructure deployments.
* Module Docs (terraform-docs): Generating and maintaining accurate documentation for Terraform modules.
* Terraform Code Validation: Verifying the correctness and validity of Terraform code.

At present, these workflows are specifically designed for GitHub Actions. However, there are plans to expand support to include GitLab and CircleCI in the future.

### On the Roadmap

- Implementation of scheduled jobs for periodic re-evaluation of security checks.
- Automation of pull request creation upon update of central policy.

## Authoring a module

The following outlines the process of provisioning a new Terraform module using workflows.

:::important
This is not a Terraform tutorial. For our purposes, we will be wrapping an existing module.
::::

### Creating the Module

To initiate the creation of a Terraform module, first ensure that the [terranetes-workflows](https://github.com/appvia/terranetes-workflows) repository has been cloned to a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) within your organization. This can be accomplished through the GitHub UI or by utilizing the [GitHub CLI](https://github.com/cli/cli) with the following command:

```shell
gh repo create appvia/terraform-aws-rds --template appvia/terranetes-workflows
```

It is essential to provide a suitable description for the repository, as this information is utilized by the [tnctl search](/terranetes-controller/cli/tnctl_search) command to facilitate filtering. This can be achieved with the following command:

```shell
gh repo edit appvia/terraform-aws-rds --description "Terraform module used to provision a RDS database"
```

Alternatively, the module can be replicated using the [tnctl workflow create](/terranetes-controller/cli/tnctl_workflow_create) command:

```shell
tnctl workflow create terraform-aws-rds --template URL
```

### Incorporating Code

With the module created, you can now proceed to add the Terraform code. To do this, create a new branch and initiate a pull request:

```shell
git checkout -b feat_adding_code
# add code and commit
gh pr create
```

GitHub Actions will subsequently evaluate, review, and update the pull request with relevant comments.

### Publishing the Artifact

Upon creation of a tag following the semantic versioning pattern (`v[SEMVER]`), a GitHub release and changelog are automatically generated. This ensures that the artifact becomes instantly discoverable, provided the [tnctl search](docs/terranetes-controller/cli/tnctl_search.md) is configured to utilize your GitHub organization as a source.

For publicly accessible repositories, the Terraform registry serves as a centralized platform for distributing, viewing, and searching for resources. Currently, this process must be performed on a per-repository basis. To initiate this process, navigate to https://registry.terraform.io/sign-in.

In the case of private repositories, consider the following options:

- https://github.com/outsideris/citizen
- https://github.com/SwissArmyRonin/terraform-aws-registry

### Finding the Artifact

Upon successful completion of the publishing process, the artifact should be accessible within your GitHub organization. To find the artifact, execute the command `tnctl search rds`.
