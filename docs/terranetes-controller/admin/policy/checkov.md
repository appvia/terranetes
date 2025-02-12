---
sidebar_position: 3
sidebar_class_name: green
---
# Checkov Policy

The implementation of a security policy ensures that platform teams can confidently allow self-service capabilities that adhere to the organization's best practices. As part of the plan stage, all Terraform configurations undergo a security check to validate their compliance.

Upon completion of the security check, the report is analyzed, and if no failed checks are identified, the configuration is permitted to proceed to the `apply` stage, either automatically or through manual annotation.

## Utilizing an External Policy Source

:::tip
This method is highly recommended for implementing Checkov policy as it seamlessly integrates the various elements in the chain; from authoring to consumption. This allows the same policies to be referenced by your CI and runtime enforcement. 

**Please note that this option is only available from version 0.3.7 and above.**
:::

The controller has the capability to source an external repository used to store the Checkov policies. A common scenario would be a shared policy repository with Checkov configuration and external checks, shared between the [Workflows](/terranetes-controller/workflows/intro/) and this runtime enforcement.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    # Optional: This field allows you to specify the configurations to which the policy should apply. If left
    # blank, this policy is a catch-all and will be applied to all terraform configurations.
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
        # This field optionally references a secret containing credentials necessary for sourcing the external repository. 
        # It is essential to note that this secret must reside within the same namespace as the controller.
        secret:
          name: NAME
          namespace: NAMESPACE
```

## Utilizing Checkov Policy Defaults

As an alternative, you can leverage the product's default settings and employ the `skipChecks` and `checks` toggles to selectively enable or disable specific checks. However, it is essential to note that this approach lacks a centralized policy framework, resulting in the enforcement policy being determined by the configuration of policies within the cluster.

The following Policy configuration exemplifies the structure for defining a Checkov policy that utilizes default settings and toggles for check management:

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: checkov
spec:
  constraints:
    # This field enables filtering of the configurations to which the policy should apply. 
    # If left blank, this policy becomes a catch-all, applying to all Terraform configurations.
    selector:
      # Utilized for filtering based on namespace labels
      namespace:
        matchLabels: {}
        matchExpressions: []
      # Utilized for filtering based on the configuration labels
      resource:
        matchLabels: {}
        matchExpressions: []

    checkov:
      # For more information, refer to: https://www.checkov.io/5.Policy%20Index/terraform.html
      checks: []
      # For more information, refer to: https://www.checkov.io/5.Policy%20Index/terraform.html
      skipChecks: []
```

:::important
* In the absence of defined `checkov.checks`, the entire Checkov suite is evaluated.
* If `checkov.skipChecks` are specified, those checks are excluded from the evaluation process.
:::

### Utilizing External Checks

The controller is capable of incorporating multiple [custom policies](https://www.checkov.io/3.Custom%20Policies/Custom%20Policies%20Overview.html) to enhance its policy enforcement capabilities.

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

Key aspects to note:

1. The URL adheres to the same format as the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) CRD, ensuring consistency in the way external resources are referenced.
2. The `secretRef` field is optional and serves as a means to store credentials necessary for accessing the external assets. This aligns with the support for various asset sources, including object stores and git repositories, as seen in [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md).
3. Upon retrieval, all assets from the specified source are utilized as part of the [external-checks-dir](https://www.checkov.io/2.Basics/CLI%20Command%20Reference.html) option during the scan process, ensuring a comprehensive evaluation of the Terraform configurations.

## Rules for selecting the security policy

Multiple checkov policies can be defined using selectors to target specific workloads, however, only one can match. The selection process is as follows:

1. If the checkov policy does not have a selector, it is applied to all resources.
2. If the checkov policy has a matching namespace selector, it adds additional priority/weight.
3. If the checkov policy has a matching resource selector, it adds even more priority/weight.
4. The total weights are added up, and the highest matching checkov policy is used.
5. If you have checkov policies with the same weight, the controller throws an error.

Ultimately, the most specific checkov policy is selected for our Configuration.

**Why not merge multiple policies?**

The idea of merging multiple policies was considered, but it was determined that adding an additional policy is needed to allow for an exception to the rule. For example, if we define that all RDS databases must use encryption, but project 'A' can't do that, we need an exception. However, policies are enforced because they strengthen security, so adding exceptions should be difficult/annoying in order to push for the better solution: fixing project A's lack of compliance.
