---
sidebar_position: 3
sidebar_class_name: green
---
# Expose Costs

The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses [infracost](https://infracost.io) to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running `kubectl get configuration`.

:::tip
The costs here are predicted costs, not the actual costs/usage. While many costs can be calculated based on the resource specs alone, many other costs are based on usage. A simple example would be an S3 bucket that is free (predicted cost), but if you store 10TB inside it you will accumulate data storage costs that would not be visible based on your Terraform resource spec.
:::

To configure the integration:

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
    $ helm upgrade terraform-controller charts/
    ```

## View the predicted costs

The predicted cost of a [Configuration](docs/reference/configurations.terraform.appvia.io.md) is available on the CRD status and resource description.

```shell
$ kubectl -n apps get configurations
NAME        MODULE                                                                    SECRET   RESOURCES   ESTIMATED   AGE
instance0   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $140.96     61s
instance1   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $1124.18    61s
instance2   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $136.288    61s
instance3   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $660.72     61s
```

You may retrieve the further detail from the status fields as below.

```shell
$ k -n apps get configurations.terraform.appvia.io  instance0 -o json | jq -r .status.costs
{
  "enabled": true,
  "hourly": "$0.1930958904109589",
  "monthly": "$140.96"
}
```
