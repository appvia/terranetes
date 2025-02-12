# Metrics

The controller provides a comprehensive set of [Prometheus](https://prometheus.io/docs/introduction/overview/) metrics, enabling the monitoring of operational conditions and usage metrics, including configurations. These metrics facilitate the tracking of:

* The reconciliation process of resources, including their current status.
* The error and success rates of the controllers, ensuring visibility into their performance.
* The costs associated with each configuration, provided the cost integration is enabled.

By default, these metrics are exposed on port `9090`. However, this can be modified in the Helm chart by specifying the desired port number as follows:

```yaml
controller:
  metricsPort: PORT
```

### Viewing the metrics

To access the metrics endpoint, you can utilize port forwarding into the controller pod and then use `curl` to retrieve the metrics.

Here's an example of how to do this:

```shell
$ kubectl -n terraform-system port-forward <POD> 9090
```

Once the port forwarding is established, you can access the metrics endpoint from another terminal using the following command:

```shell
$ curl http://localhost:9090/metrics
```

This approach is equivalent to specifying the `--metrics-port PORT` command line argument when not using the Helm chart.

### Predicted Cost Metrics

Enabling the integration automatically exposes the predicted monthly and hourly costs for all [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md). This feature enables the platform team to monitor usage and set up alerts. The metrics are structured as follows:

```shell
configuration_hourly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>
configuration_monthly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>
```

### Controller Metrics

The [controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) provides a comprehensive set of metrics out of the box, encompassing counters for success, requeue, and error events, as well as the duration of reconciliation processes. These metrics offer valuable insights into the operational performance of the controller.

From an alerting perspective, the error counters are particularly noteworthy. The following example illustrates the structure of these metrics:

```shell
controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="error"} 0
controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue"} 0
controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue_after"} 0
controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="success"} 0
controller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="error"} 0
controller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue"} 0
controller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue_after"} 0
controller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="success"} 2
```

These metrics can be leveraged to notify the platform team in the event of controller issues, ensuring prompt attention and resolution.

### Webhook Metrics

The Terraform controller leverages a suite of [validating and mutating webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) to maintain the integrity of resources. These webhooks are designed to enforce admission control policies, ensuring that resources conform to predefined standards and best practices.

In a manner consistent with controller metrics, the webhook metrics are also automatically exposed through the [controller runtime](https://github.com/kubernetes-sigs/controller-runtime). This facilitates comprehensive monitoring and analysis of webhook performance and effectiveness in maintaining resource integrity.

```shell
[jest@starfury terranetes-controller]$ curl -s http://localhost:9090/metrics | grep webhook
# HELP controller_runtime_webhook_latency_seconds Histogram of the latency of processing admission requests
# TYPE controller_runtime_webhook_latency_seconds histogram
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.005"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.01"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.025"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.05"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.1"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.25"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.5"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="1"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="2.5"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="5"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="10"} 2
controller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="+Inf"} 2
controller_runtime_webhook_latency_seconds_sum{webhook="/validate/terraform.appvia.io/providers"} 0.001305876
controller_runtime_webhook_latency_seconds_count{webhook="/validate/terraform.appvia.io/providers"} 2
# HELP controller_runtime_webhook_requests_in_flight Current number of admission requests being served.
# TYPE controller_runtime_webhook_requests_in_flight gauge
controller_runtime_webhook_requests_in_flight{webhook="/mutate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/policies"} 0
controller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/providers"} 0
# HELP controller_runtime_webhook_requests_total Total number of admission requests by HTTP status code.
# TYPE controller_runtime_webhook_requests_total counter
controller_runtime_webhook_requests_total{code="200",webhook="/mutate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/policies"} 0
controller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/providers"} 2
controller_runtime_webhook_requests_total{code="500",webhook="/mutate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/configurations"} 0
controller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/policies"} 0
controller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/providers"} 0
```

