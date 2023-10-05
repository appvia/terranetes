---
sidebar_position: 5
---

# Injecting Defaults

Currently via policies platform administrators have the ability to inject both variables and or secrets into developer Configurations, common use cases

* Removing the administrative headache from the developers around which values to use, or enforcing specific organizational defaults on upstream modules.
* Sharing credentials, tokens across an collection of Configurations, for example access to private repositories.

## Variables

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

## Secrets

:::tip
This feature is only available from v0.3.15 onwards
:::

A defaults policy can also be used to inject secrets into a job. A common use case would be for the platform team to provide transparent authentication. Lets take the following example.

* We have a number of private repositories we want to allow the developers to consume.
* We don't want the developers to have to deal with authenticating to these modules and thus the feature should be transparent to them.
* We have already create a kubernetes secret in the controller namespace containing a ssh_key or personal access token used to source the modules.
* We need to setup a policy which injects these secrets into the job so developers don't need to private authentication themselves.

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
Note, terranetes controller had a bug prior to v0.3.30 in regard to default secrets. The `setup` stage, which is responsible retrieving the `spec.module` (terraform code) did not have access to the secret; thus if your using the feature to support private repository access, you'll have issues in the delete. This was fixed [here](https://github.com/appvia/terranetes-controller/pull/812)
:::
