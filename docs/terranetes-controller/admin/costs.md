---
sidebar_position: 5
sidebar_class_name: green
---
# Expose Costs

The cost integration feature enables developers to preview the associated costs before applying the terraform. This controller currently leverages [infracost](https://infracost.io) to predict the costs of a configuration, making the cost visible within the status of the Kubernetes object. This can be viewed by running `kubectl get configuration`.

:::tip
The costs displayed are predictions, not actual costs or usage. While many costs can be calculated based on the resource specifications alone, others are based on usage. For example, an S3 bucket may be free (predicted cost), but if you store 10TB inside it, you will accumulate data storage costs that would not be visible based on your Terraform resource spec.
:::

To set up the integration:

1. Create a secret containing the Infracost API token.
    ```bash
    $ kubectl -n terraform-system create secret generic infracost \
      --from-literal=INFRACOST_API_KEY=$INFRACOST_API_KEY
    ```

2. Configure the controller to enable infracost by updating the controller flag.
    ```yaml
    controller:
      costs:
        # The name of the secret you created in the controller namespace above
        name: infracost
    ```

3. Update the helm chart.
    ```bash
    $ helm upgrade terranetes-controller charts/
    ```

## View the predicted costs

The predicted cost of a [Configuration](../reference/configurations.terraform.appvia.io.md) is accessible through the CRD status and resource description.

To view the predicted costs, execute the following command:
```shell
$ kubectl -n apps get configurations
NAME        MODULE                                                                    SECRET   RESOURCES   ESTIMATED   AGE
instance0   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $140.96     61s
instance1   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $1124.18    61s
instance2   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $136.288    61s
instance3   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $660.72     61s
```
For more detailed information on the costs, including hourly and monthly estimates, you can query the status fields as follows:
```shell
$ k -n apps get configurations.terraform.appvia.io  instance0 -o json | jq -r .status.costs
{
  "enabled": true,
  "hourly": "$0.1930958904109589",
  "monthly": "$140.96"
}
```
