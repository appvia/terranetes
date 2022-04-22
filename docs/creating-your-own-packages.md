# Creating Your Own Helm Packages

If you wish to adopt the Terranetes pattern, then you need to convert your Terraform module into a Helm package before storing it in a [Helm repository](https://helm.sh/docs/topics/chart_repository/#hosting-chart-repositories) which then be integrated with and accessed from [artifacthub.io](https://artifacthub.io/).

Each Helm package or chart must include the following files:

```
.
├── Chart.yaml              # A YAML file containing information about the chart
├── templates
│   ├── _helpers.tpl        # A file containing helper templates and partials
│   └── CHART_NAME.yaml     # A Terraform Operator Custom Resource Definition Object    
└── values.yaml             # Required and optional configuration values
```

The `CHART_NAME.yaml` file contains a [Kubernetes Custom Resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) understood and managed by a Terraform Operator component. If you use the Terranetes pattern with the [suggested Terraform Operator](https://github.com/isaaguilar/terraform-operator) component, then you must ensure that the Custom Resource specification contains valid properties as by defined the [Custom Resource Definition](https://github.com/isaaguilar/terraform-operator/blob/master/deploy/crds/tf.isaaguilar.com_terraforms_crd.yaml).

## Automate Terraform to Helm Conversion

You can use the [tf2helm](https://github.com/appvia/tf2helm) tool to automate the conversion of your Terraform module to a Helm package.

The tool currently only supports the [suggested Terraform Operator](https://github.com/isaaguilar/terraform-operator) but there is plan to support other operators such as the [Open Application Model Terraform Controller](https://github.com/oam-dev/terraform-controller).

### Convert Local Terraform Module

```
tf2helm --tf_module_path="/Users/mohammudyassinejaffoo/Workspace/appvia/appvia-tf-efs" --tf_version=1.1.7 --name=acp-tf-efs --version=0.1.0 --app_version=0.1.0 --output_dir=charts
✔ Download Terraform module
✔ Translate Terraform module
✔ Create Helm Chart
✔ Update Helm Chart with Terraform Custom Resource
🚀 Helm Chart is available at charts/appvia-tf-efs
```

### Convert Remote Terraform Module

```
tf2helm --tf_module_url="https://github.com/terraform-aws-modules/terraform-aws-s3-bucket?ref=v3.1.0" --tf_version=1.1.7 --name=aws-s3-bucket --version=0.1.0 --app_version=0.1.0 --output_dir=charts
✔ Download Terraform module
✔ Translate Terraform module
✔ Create Helm Chart
✔ Update Helm Chart with Terraform Custom Resource
🚀 Helm Chart is available at charts/aws-s3-bucket
```
