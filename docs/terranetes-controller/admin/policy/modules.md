---
sidebar_position: 2
sidebar_class_name: green
---
# Module Restrictions

You can control the source of the terraform modules permitted to run through the [Policy](docs/terranetes-controller/reference/policies.terraform.appvia.io.md) resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used.

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
    modules:
      selector:
        namespace:
          matchLabels: {}
          matchExpressions: []
        resource:
          matchLabels: {}
          matchExpressions: []
      allowed:
        - "https://github.com/appvia/.*"  # only allow specific org modules
```

The `spec.constraints.modules.allowed` list comprises a collection of Golang regex patterns that a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) must match at least one of.

Additionally, the policy can optionally include a `spec.constraints.modules.selector` that enables matching against namespace and resource labels of the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md). Consistent with all selectors within the controller, an empty field implies a match against all configurations. By providing specific overrides, you can leverage the selectors to target specific configurations.

The following example policy configurations are designed to meet the specified requirements:

* Permit all teams to utilize terraform modules from the company's Github repositories at https://github.com/appvia
* Allow teams operating within the `infra` and `ci` namespaces to access additional modules from https://github.com/elsewhere

1. Establish the default policy (i.e., without a selector)

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

2. Create an additional policy specifically for the `infra` and `ci` namespaces.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Policy
metadata:
  name: default
spec:
  constraints:
    modules:
      selector:
        namespace:
          matchExpressions:
            - key: kubernetes.io/metadata.name
              operator: In
              values: [infra, ci]
      allowed:
        - "https://github.com/elsewhere/.*"
```

