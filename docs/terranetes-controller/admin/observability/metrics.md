# Metrics

The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations).

* Track the reconciliation of the resources and their current status.
* Track the error and success rates of the controllers.
* Track the associated costs to each of the configurations _(assuming the integration is enabled)_.

By default these are exposed on port `9090` though you can change this in the helm chart via

```yaml
controller:
  metricsPort: PORT
```

### Viewing the metrics

You can port forward into the controller and curl the metrics endpoint.

```shell
$ kubectl -n terraform-system port-forward <POD> 9090
# And then curl the metrics from another terminal
$ curl http://localhost:9090/metrics
```

This maps to the `--metrics-port PORT` command line argument if not using the chart.

### Predicted Cost Metrics

When the integration is enabled all [Configurations](docs/terranetes-controller/reference/configurations.terraform.appvia.io.md) automatically expose their predicted monthly and hourly costs. Allowing the platform team to dashboard usage and or alerting on high figures. The metrics will take the form

```shell
configuration_hourly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>
configuration_monthly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>
```

### Controller Metrics

The [controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) exposes a number of metrics by default, covering success, requeue and error counters, to duration of reconciliation's and more.

Perhaps most useful from an alerting perspective are the error counters; an example for which is given below

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

That can be used to notify the platform team if the controller is experiencing issues.

### Webhook Metrics

The terraform controller uses a number of [validating and mutating webhooks](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) to ensure the integrity of the resources.

Similar to controller metrics these are exposed out of the box via the [controller runtime](https://github.com/kubernetes-sigs/controller-runtime)

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

