# Default Variables

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
