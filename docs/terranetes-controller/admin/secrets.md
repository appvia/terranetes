---
sidebar_position: 100
---
# Additional Secrets

The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs.

The platform team must create the Kubernetes secrets ahead of time, which are referenced on the command line of the controller.

:::warning
These secrets are added to all jobs so be prudent when using this feature. This intention is to add the feature on to [Providers](docs/terranetes-controller/reference/providers.terraform.appvia.io.md) CRD to make it fine grained.
:::

## Adding a custom secret

Update your Helm chart values to include the following. The secrets must exist in the controller namespace and contain environment variable i.e. uppercases key/values, as the secrets are sourced into the jobs via the [spec.envFrom](https://kubernetes.io/docs/concepts/configuration/secret/#use-case-as-container-environment-variables)

```yaml
controller:
  # A collection of secret names which exist the controller namespace
  executorSecrets:
    - NAME
```

Alternatively if you are not using the Helm chart, update the deployment yaml to include the `--executor-secret` flags.


