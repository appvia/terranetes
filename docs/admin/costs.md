---
sidebar_position: 3
sidebar_class_name: green
---
# Expose Costs

The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses [infracost](https://infracost.io) to extract the predicted costs of a configuration, exposing the cost on the kubernetes status. It is viewable via `$ kubectl get configuration`.

:::tip
The costs here are the predicted costs not the actual cost / usage. While many costs can be calculated based on the resources alone many other are based on usage. A simple example would be a S3 bucket which is free (predicted cost), but store 10TB inside it and it's no definitely not free any more.
:::

To configure the integration:

1. Create a secret containing the Infracost API token.

    `$ kubectl -n terraform-system create secret generic infracost --from-literal=INFRACOST_API_KEY=$INFRACOST_API_KEY`

2. Configure the controller to enable infracost by updating the controller flag.
      ```YAML
      controller:
        costs:
          # is the name of the secret you created in the controller namespace above
          name: infracost
      ```

3. Update the helm chart.

    `$ helm upgrade terraform-controller charts/`

