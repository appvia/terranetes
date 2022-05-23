---
sidebar_position: 2
sidebar_class_name: green
---

# Define Policy

The controller comes with a number of controls and safeguards that the platform team can utilize to:

* Enforce a security policy across the estate via [Checkov](https://www.checkov.io/).
* Enforce the source of the terraform modules, for example locking down to only fetch terraform modules from your company's repositories.
* Automatically inject environment-specific variables into the Configuration CRD, such as costs, project IDs, environment-specific labels or tags. This removes the need for teams consuming modules to know these details, and keeps the deployments environment agnostic.

## Policy Resource

Not wishing to create a plethora of resource types to define all mechanics of policy, all the policies handled by the controller are defined via the [Policy](../reference/policies.terraform.appvia.io.md) CRD.

:::tip
You can define Policy resources multiple times, as the definitions are pulled together and aggregated.
:::

## Module Security

You can control the source of the terraform modules permitted to run through the [Policy](../reference/policies.terraform.appvia.io.md) resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used.

:::note
This control is applied to the primary module (i.e. `spec.module`) inside the Configuration CRD. Modules that incorporate other modules are not enforced.
:::

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: permitted-modules
spec:
  constraints:
    modules:
      allowed:
        - "https://github.com/appvia/.*"
```

The allowed list (`spec.constraints.modules.allowed`) is a collection of Golang regexes.

## Checkov Security Policy

Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage.

:::tip
The security checks are performed on the terraform plan, not the static module, so you have the added benefit that anything they import is scanned and any varaibles or dynamic variation is included in the scan.
:::

Once the security plan is performed the report is processed and, assuming no failed checks, is allowed to continue on to be applied (either automatically or via the annotation).

### How to define a Checkov security policy

Again we are using the [Policy](../reference/policies.terraform.appvia.io.md) here to define the rule:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    # Allows you to filter on which configurations the policy should apply. If left
    # blank, this policy is a catch-all and applied to all terraform configurations.
    selector:
      # Used to filter on namespace labels
      namespace:
        matchLabels: {}
        matchExpressions: []
      # Used to filter on the configuration labels
      resource:
        matchLabels: {}
        matchExpressions: []

    checkov:
      # See: https://www.checkov.io/5.Policy%20Index/terraform.html
      checks: []
      # See: https://www.checkov.io/5.Policy%20Index/terraform.html
      skipChecks: []
```

:::important
* If no `checkov.checks` are defined, the entire checkov suite is evaluated.
* If `checkov.skipChecks` are defined, those will be ignored during evaluation.
:::

### Rules for selecting the security policy

You can define multiple checkov policies using selectors to target specific workloads, however, you can only have one match. The selection process for this is as follows:

1. If the checkov policy does not have a selector it is applied to all resources.
2. If the checkov policy has a matching namespace selector it adds additional priority/weight.
3. If the checkov policy has a matching resource selector it adds even more priority/weight.
4. The total weights are added up and the highest matching checkov policy is used.
5. If you have checkov policies with the same weight, the controller throws an error.

At the end we have selected the checkov policy which is most specific to our Configuration.

#### Why not merge multiple policies?

We had the same idea, whereby we'd simply merge multiple policies together. The reasoning here is that adding an additional policy is needed to allow for an exception to the rule. For example, if we define that all RDS databases must use encryption, but project 'A' can't do that, we need an exception. But policies are enforced because they strengthen security, so adding exceptions should be difficult/annoying in order to push for the better solution: fixing project A's lack of compliance.

## Default Variables

Default environments provide the ability to inject environment-specific variables into a configuration based on a selector. An example might be:

* Adding environment-specific options (e.g. VPC ID, tags, etc), elements that you don't want developers to have to deal with
* Adding project-specific tags (e.g. cost center codes, project ID, etc)

You can configure these via a Policy resource. For example:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: environment-defaults
spec:
  defaults:
    - selector:
        namespace:
          matchExpressions:
            - key: kubernetes.io/metadata.name
              operator: Exists
      variables:
        environment: dev
```
