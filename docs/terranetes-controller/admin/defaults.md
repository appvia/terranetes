---
sidebar_position: 5
---

# Injecting Defaults

Through the implementation of policies, platform administrators are empowered to inject both variables and secrets into developer Configurations, addressing key use cases such as:

* Mitigating the administrative burden on developers by standardizing the values to be used or enforcing specific organizational defaults on upstream modules.
* Facilitating the sharing of credentials and tokens across a collection of Configurations, exemplified by access to private repositories.

## Variables

The default environment enables the injection of environment-specific variables into a configuration, contingent upon a selector. This capability is particularly useful for:

* Incorporating environment-specific parameters (such as VPC ID, tags, etc.), thereby alleviating the need for developers to manage these details
* Assigning project-specific tags (like cost center codes, project ID, etc.), ensuring consistency across configurations

To implement these variables, a Policy resource can be utilized. A sample configuration is provided below:

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

## Secrets

:::tip
This feature is only available from v0.3.15 onwards
:::

The `defaults` policy offers the capability to inject secrets into a job, facilitating transparent authentication for the platform team. A typical scenario for this feature involves the following:

* The organization has a collection of private repositories that are intended for consumption by developers.
* To ensure a seamless experience for developers, the authentication process for these modules should be transparent, eliminating the need for them to handle authentication directly.
* A Kubernetes secret has been created within the controller namespace, containing either an SSH key or a personal access token, which is utilized for sourcing the modules.
* It is necessary to configure a policy that injects these secrets into the job, thereby alleviating the need for developers to manage private authentication processes themselves.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: default-authentication
spec:
  defaults:
    # Can be used to filter on configuration module sources
    modules:
      - github.com/appvia/terraform-aws-myprivaterepo:.*
    namespace:
      # Use expressions to match on namespace labels
      matchExpressions:
        - key: kubernetes.io/metadata.name
          operator: Exists
    secrets:
      - auth_key
```

:::caution
Please be aware that prior to version v0.3.30, the terranetes controller had a bug related to default secrets. During the `setup` stage, which is responsible for retrieving the `spec.module` (terraform code), the secret was not accessible. This could lead to issues, especially when using the feature to support private repository access, as it could cause problems during deletion. This issue has been resolved and the fix can be found [here](https://github.com/appvia/terranetes-controller/pull/812)
:::
