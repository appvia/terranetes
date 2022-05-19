---
sidebar_position: 2
sidebar_class_name: green
---

# Define Policy

The controller comes with a number of controls and safe guards which the platform team can utilize.

* Enforce a security policy across the estate via [Checkov](https://www.checkov.io/)
* Enforce the source of the terraform modules, locking down the company repositories for examples.
* Automatically inject environment specific variables into the Configuration CRD, such as cost costs, project IDs, environment specific labels or tags. Removing the for need teams consuming modules to know these details and keeping the deployments environment agnostic.

You can control the source of the terraform modules permitted to run by creating a [Policy](charts/crds/terraform.appvia.io_policies.yaml). The following policy enforces globally only modules the `appvia` organization are permitted.

## Policy Resource

Not wishing to create a plethora of resource types to define all mechanics of policy, all the policy handled by the controller are defined via the [Policy](docs/reference/policy.md) CRD. Note, you can define this multiple times, the definitions are aggregated and pulled together.

## Module Security

Module security lets the platform team control the source of the terraform modules which can be consumed.

:::note
This control is applied to the primary module i.e. `spec.module` inside the Configuration CRD. Modules which incorporate other modules are not enforced.
:::

To enforce that all modules MUST come from the Github organization Appvia we could use.

```YAML
---
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

* The allowed list (`spec.constraints.modules.allowed`) is a collection of Golang regexes.

## Checkov Security Policy

Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check during the plan stage.

:::note
Note the security checks are performed on the terraform plan, not the static module, so you have the added benefit that anything they import is scanned and any varaibles or dynamic variation is included in the scan.
:::

Once security plan is performed the report is processed and assume no failed checks, allowed to continue on to a apply.

### How to define a security policy

Again we are using the [Policy](docs/reference/policy.md) here to define the rule.

```YAML
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    # Allows you to filter on which configurations the policy should apply. If left blank, this
    # policy is a catchup and applied to all terraform configurations.
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
      skipChecks:
```

* If no `checkov.checks` are defined, the entire checkov suite is evaluated.
* If `checkov.skipChecks` if defined, those will be ignored during evaluation.

### Rules for selecting the security policy

You can define multiple checkov policies using selectors to target specific workloads, however you can only have one match. The selection process for this is as follows

1. If the policy does not have a selector it is applied to all
2. If the policy has a matching namespace selector it adds additional priority.
3. If the policy has a matching resource selector is add even more priority / weight.
4. The total weights are added up and highest matching policy is used.
5. If you have policies with the same weight, the controller throws an error.

At the end we have selected the policy which is most specific to our Configuration.

#### Why not merge multiple policies?

We had the same idea; where by we'd simply merge multiple policies together. The reasoning here was adding an additional policy was probably performed to allow for an exception to the rule i.e perhaps we define all RDS database must use encryption, but project 'A' can't do that. But these policies are enforced because they strengthen security and so adding exceptions should be difficult / annoying to push for the better solution of fixing the lack of compliance.

## Default Variables

Default environments provides the ability to inject environment specific variables into a configuration based on a selector. Example might be

* Adding environment specific options, vpc id, tags etc. Elements which you don't want developers to deal with.
* Adding project specific tags - i.e. costs code, project id and so forth.

You can configure via a Policy, an example below

```YAML
---
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
