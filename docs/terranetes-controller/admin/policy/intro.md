---
sidebar_position: 1
sidebar_class_name: green
---

# Introduction

The controller comes with a number of controls and safeguards that the platform team can utilize to:

* Enforce a security policy across the estate via [Checkov](https://www.checkov.io/).
* Enforce the source of the terraform modules, for example locking down to only fetch terraform modules from your company's repositories.
* Automatically inject environment-specific variables into the Configuration CRD, such as costs, project IDs, environment-specific labels or tags. This removes the need for teams consuming modules to know these details, and keeps the deployments environment agnostic.

## Policy Resource

Not wishing to create a plethora of resource types to define all mechanics of policy, all the policies handled by the controller are defined via the [Policy](docs/terranetes-controller/reference/policies.terraform.appvia.io.md) CRD.

:::tip
You can define Policy resources multiple times, as the definitions are pulled together and aggregated.
:::

