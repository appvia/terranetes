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
