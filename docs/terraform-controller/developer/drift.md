---
sidebar_position: 3
---

# Enabling Drift Protection

Drift protection instructs the controller to periodically check for drift between the desired state and the upstream cloud provider; this could occur due to someone or something changing the configuration outside of the scope of terraform i.e. on the cloud console, API and so forth. The time frame is configured by the platform team, see [Drift Detection](docs/terraform-controller/admin/drift.md) for details.

When a configuration is detected as out of sync the status of the resource is updated and a kubernetes event is raised.

```bash
$ kubectl -n apps get configurations.terraform.appvia.io
NAME     MODULE                                                                            SECRET   ESTIMATED     SYNCHRONIZED   AGE
bucket   https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0   test     Not Enabled   OutOfSync      3m5s
```

## Enabling Drift Detection

To enable drift detection on a [Configuration](docs/terraform-controller/reference/configurations.terraform.appvia.io.md) set `spec.enableDriftDetection: true`.

```yaml
apiVersion: terraform.appvia.io/v1alpha1
kind: Configuration
metadata:
  name: bucket
spec:
  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0
  providerRef:
    name: aws
  # You can enable drift protection as so
  enableDriftDetection: true
```
