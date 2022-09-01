---
sidebar_position: 3
sidebar_class_name: green
---
# Checkov Policy

Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage.

Once the security plan is performed the report is processed and, assuming no failed checks, is allowed to continue on to be applied (either automatically or via the annotation).

## Using External Policy Source

:::tip
This the recommended method for implementing Checkov policy as it stitches together the various elements in the chain; from authoring to consumption. As the same policies can be referenced by your CI and runtime enforcement.
:::

The controller has the ability to source in an external repository used to house the Checkov policies. A common scenario would be a shared policy repository with Checkov configuration and external checks and shared between the [Workflows](/terranetes-controller/workflows/intro/) and this runtime enforcement.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    # Optional: allows you to filter on which configurations the policy should apply. If left
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
      source:
        # Is the path of the configuration file which holds the Checkov config i.e
        # .checkov.yaml or config.yaml
        configuration: PATH
        # Is the source of the repository; the syntax for this follows the same
        # format as for modules.
        url: SOURCE
        # Is an optional reference to a secret which contains credentials used to
        # source the external repository. Note, as it stands this must be within the
        # same namespace as the controller.
        secret:
          name: NAME
          namespace: NAMESPACE
```

## Using Checkov Policy Defaults

An alternative approach is to rely on the product default and use toggles, `skipChecks` and `checks` to enable or disable checks. The downside from this method is the lack of central policy; under these conditions the enforcement policy is arbitrary to the configuration of the policies in said cluster.

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

### Using External Checks

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

1. The URL uses the same format at the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md] CRD.
2. The secretRef is optional and used to store any credentials used to retrieves the assets. Like [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) we support object stores, git repositories and so forth.
3. All assets found in the source are retrieved and used an [external-checks-dir](https://www.checkov.io/2.Basics/CLI%20Command%20Reference.html) option to the scan.

## Rules for selecting the security policy

You can define multiple checkov policies using selectors to target specific workloads, however, only can match. The selection process for this is as follows:

1. If the checkov policy does not have a selector it is applied to all resources.
2. If the checkov policy has a matching namespace selector it adds additional priority/weight.
3. If the checkov policy has a matching resource selector it adds even more priority/weight.
4. The total weights are added up and the highest matching checkov policy is used.
5. If you have checkov policies with the same weight, the controller throws an error.

At the end we have selected the checkov policy which is most specific to our Configuration.

**Why not merge multiple policies?**

We had the same idea, whereby we'd simply merge multiple policies together. The reasoning here is that adding an additional policy is needed to allow for an exception to the rule. For example, if we define that all RDS databases must use encryption, but project 'A' can't do that, we need an exception. But policies are enforced because they strengthen security, so adding exceptions should be difficult/annoying in order to push for the better solution: fixing project A's lack of compliance.

