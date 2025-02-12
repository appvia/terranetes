---
sidebar_position: 1
sidebar_class_name: green
---

# Introduction

The controller is equipped with a variety of controls and safeguards that the platform team can leverage to:

* Enforce a comprehensive security policy across the entire estate using [Checkov](https://www.checkov.io/).
* Ensure the source of the terraform modules, for instance, by restricting the fetching of terraform modules to your company's repositories only.
* Automatically inject environment-specific variables into the Configuration CRD, such as costs, project IDs, environment-specific labels or tags. This eliminates the need for teams consuming modules to be aware of these details, and maintains the environment agnostic nature of the deployments.

## Policy Resource

In an effort to avoid creating an excessive number of resource types to define all aspects of policy, the controller handles all policies through the [Policy](docs/terranetes-controller/reference/policies.terraform.appvia.io.md) CRD.

:::tip
Policy resources can be defined multiple times, as the definitions are consolidated and aggregated.
:::
