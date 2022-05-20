# Customize Job Template

When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this [here](https://github.com/appvia/terraform-controller/blob/master/pkg/assets/job.yaml.tpl).

### Overriding the template

While not required in the vast majority of cases this template can be overridden, allowing platform engineers to customize the pipeline. You might want to:
* Add a notification on failed configuration, or send a notification when a configuration fails policy.
* Add a new feature into the pipeline such as swapping out the default [checkov](https://www.checkov.io) for another policy engine.

You can change the template by uploading a configmap into the namespace where the controller lives:

```shell
# create the template configmap (note the key name of job.yaml)
$ kubectl -n terraform-system create configmap template --from-file=job.yaml=<PATH>

# update the helm values to override the template
controller:
  templates:
    job: <NAME_OF_CONFIG_MAP>
```
