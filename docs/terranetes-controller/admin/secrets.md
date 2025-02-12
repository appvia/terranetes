---
sidebar_position: 100
---
# Additional Secrets

The controller provides the capability to inject supplementary secrets into the Terraform execution process. This feature is particularly useful for supplying additional credentials, API tokens, or custom configurations to jobs.

It is essential for the platform team to create the necessary Kubernetes secrets in advance, which are then referenced on the controller's command line.

:::warning
It is crucial to exercise caution when utilizing this feature, as these secrets are applied to all jobs. The long-term goal is to integrate this feature with the [Providers](docs/terranetes-controller/reference/providers.terraform.appvia.io.md) CRD to achieve a more granular control.
:::

## Adding a custom secret

To incorporate a custom secret, update your Helm chart values to include the following configuration. It is imperative that the secrets exist within the controller namespace and contain environment variables, ensuring that keys are uppercase, as they are sourced into jobs via the [spec.envFrom](https://kubernetes.io/docs/concepts/configuration/secret/#use-case-as-container-environment-variables) mechanism.

```yaml
controller:
  # A collection of secret names existing within the controller namespace
  executorSecrets:
    - NAME
```

Alternatively, if you are not utilizing the Helm chart, update the deployment to include the `--executor-secret` flags.
