---
sidebar_position: 2
title: Creating Helm Packages
---

# Creating Your Own Helm Packages

If you wish to adopt the Terranetes pattern, then you need to convert your Terraform module into a Helm package before storing it in a [Helm repository](https://helm.sh/docs/topics/chart_repository/#hosting-chart-repositories), which can then be integrated with, and accessed from, [artifacthub.io](https://artifacthub.io/).

Each Helm package or chart must include the following files:

```
.
├── Chart.yaml              # A YAML file containing information about the chart
├── templates
│   ├── _helpers.tpl        # A file containing helper templates and partials
│   └── CHART_NAME.yaml     # A Terraform Operator Custom Resource Definition Object
└── values.yaml             # Required and optional configuration values
```

The `CHART_NAME.yaml` file contains a [Kubernetes Custom Resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) understood and managed by the [Appvia Terraform Controller](/terraform-controller) component.

## Automate Terraform to Helm conversion

You can use the [tf2helm](https://github.com/appvia/tf2helm) tool to automate the conversion of your Terraform module to a Helm package.

### Convert a local Terraform module

```
tf2helm --tf_module_path="path/to/local/terraform/module/appvia-tf-efs" --tf_version=1.1.7 --name=acp-tf-efs --version=0.1.0 --app_version=0.1.0 --output_dir=charts
✔ Translate Terraform module
✔ Create Helm Chart
✔ Update Helm Chart with Terraform Custom Resource
🚀 Helm Chart is available at charts/appvia-tf-efs
```

### Convert a remote Terraform module

```
tf2helm --tf_module_url="https://github.com/terraform-aws-modules/terraform-aws-s3-bucket?ref=v3.1.0" --tf_version=1.1.7 --name=aws-s3-bucket --version=0.1.0 --app_version=0.1.0 --output_dir=charts
✔ Download Terraform module
✔ Translate Terraform module
✔ Create Helm Chart
✔ Update Helm Chart with Terraform Custom Resource
🚀 Helm Chart is available at charts/aws-s3-bucket
```
