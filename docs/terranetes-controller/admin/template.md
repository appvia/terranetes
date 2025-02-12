---
sidebar_position: 90
---
# Customize Job Template

The controller utilizes a template to generate the final job configuration when a configuration change is initiated, such as for plan, apply, or destroy operations. This template incorporates options specified on the controller command line, custom policies, and the Terraform configuration itself. The aggregated options are then used to create a batch job, which is subsequently executed to implement the change. The default template for this process can be accessed [here](https://github.com/appvia/terranetes-controller/blob/master/pkg/assets/job.yaml.tpl).

### Overriding the template

Although not necessary in most cases, the template can be overridden to allow platform engineers to tailor the pipeline to their specific needs. This customization may involve:
* Implementing notifications for failed configurations or sending notifications when a configuration fails to comply with policy.
* Integrating new features into the pipeline, such as replacing the default [checkov](https://www.checkov.io) policy engine with an alternative.

To modify the template, a ConfigMap must be uploaded into the namespace where the controller is deployed, with the following steps:

```shell
# Create the template ConfigMap, noting the key name 'job.yaml'
$ kubectl -n terraform-system create configmap template --from-file=job.yaml=<PATH>

# Update the Helm values to override the template
controller:
  templates:
    job: <NAME_OF_CONFIG_MAP>
```
