---
sidebar_position: 2
sidebar_class_name: green
---

# Define Guardrails

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

:::important
This control is applied to the primary module (i.e. `spec.module`) inside the Configuration CRD. Modules that incorporate other modules are not enforced.
:::

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: permitted-modules
spec:
  constraints:
    selector:
      namespace:
        matchLabels: {}
        matchExpressions: []
      resource:
        matchLabels: {}
        matchExpressions: []
    modules:
      allowed:
        - "https://github.com/appvia/.*"
```

The allowed list (`spec.constraints.modules.allowed`) is a collection of Golang regexes which a [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) must match at least one.

The policy may also include an optional selector (`spec.constraints.modules.selector`) that can be used to match against namespace and resource labels of the [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md). As with all selectors in the controller, leaving this field empty implies you want to match against all. You can take advantage of the selectors by providing overrides.

Lets use the following requirements.

* All teams may use terraform from the companies Github repositories at https://github.com/appvia
* The teams using namespace `infra` and `ci` can use additional modules from https://github.com/elsewhere

1. Create the default policy (i.e no selector)

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: default
spec:
  constraints:
    modules:
      allowed:
        - "https://github.com/appvia/.*"
```

2. Create the additional policy for namespace `infra` and `ci`.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: default
spec:
  constraints:
    selector:
      namespace:
        matchExpressions:
          - key: kubernetes.io/metadata.name
            operator: In
            values: [infra, ci]
    modules:
      allowed:
        - "https://github.com/elsewhere/.*"
```

## Checkov Security Policy

Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage.

:::tip
The security checks are performed on the terraform plan, not the static module, so you have the added benefit that anything they import is scanned and any variables or dynamic variation is included in the scan.
:::

Once the security plan is performed the report is processed and, assuming no failed checks, is allowed to continue on to be applied (either automatically or via the annotation).

### Defining checkov policies

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

### Using external checks

The controller also has the ability to source multiple [custom policies](https://www.checkov.io/3.Custom%20Policies/Custom%20Policies%20Overview.html).

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    checkov:
      external:
        - name: custom
          url: https://[LOCATION]
          secretRef:
            name: [SECRET]
```

1. The URL uses the same format at the [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md] CRD.
2. The secretRef is optional and used to store any credentials used to retrieves the assets. Like [Configurations](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) we support object stores, git repositories and so forth.
3. All assets found in the source are retrieved and used an [external-checks-dir](https://www.checkov.io/2.Basics/CLI%20Command%20Reference.html) option to the scan.

### Rules for selecting the security policy

You can define multiple checkov policies using selectors to target specific workloads, however, you can only have one match. The selection process for this is as follows:

1. If the checkov policy does not have a selector it is applied to all resources.
2. If the checkov policy has a matching namespace selector it adds additional priority/weight.
3. If the checkov policy has a matching resource selector it adds even more priority/weight.
4. The total weights are added up and the highest matching checkov policy is used.
5. If you have checkov policies with the same weight, the controller throws an error.

At the end we have selected the checkov policy which is most specific to our Configuration.

**Why not merge multiple policies?**

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
    # Can be used to filter on configuration module sources
    modules:
      - <REGEX>
    namespace:
      # Match on namespace labels
      matchLabels:
        kubernetes.io/metadata.name: hello
      # Use expressions to match on namespace labels
      matchExpressions:
        - key: kubernetes.io/metadata.name
          operator: Exists
    variables:
      environment: dev
```
