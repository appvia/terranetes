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
        - "https://github.com/appvia/.*"
```

The allowed list (`spec.constraints.modules.allowed`) is a collection of Golang regexes which a [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) must match at least one.

The policy may also include an optional selector (`spec.constraints.modules.selector`) that can be used to match against namespace and resource labels of the [Configuration](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md). As with all selectors in the controller, leaving this field empty implies you want to match against all. You can take advantage of the selectors by providing overrides.

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

