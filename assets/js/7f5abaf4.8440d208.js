"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[7931],{7053:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(4848),n=o(8453);const i={},a="Metrics",l={id:"admin/observability/metrics",title:"Metrics",description:"The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations).",source:"@site/docs/terranetes-controller/admin/observability/metrics.md",sourceDirName:"admin/observability",slug:"/admin/observability/metrics",permalink:"/terranetes-controller/admin/observability/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/observability/metrics.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/terranetes-controller/category/observability"},next:{title:"Expose Costs",permalink:"/terranetes-controller/admin/costs"}},s={},c=[{value:"Viewing the metrics",id:"viewing-the-metrics",level:3},{value:"Predicted Cost Metrics",id:"predicted-cost-metrics",level:3},{value:"Controller Metrics",id:"controller-metrics",level:3},{value:"Webhook Metrics",id:"webhook-metrics",level:3}];function u(e){const r={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsx)(r.p,{children:"The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations)."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Track the reconciliation of the resources and their current status."}),"\n",(0,t.jsx)(r.li,{children:"Track the error and success rates of the controllers."}),"\n",(0,t.jsxs)(r.li,{children:["Track the associated costs to each of the configurations ",(0,t.jsx)(r.em,{children:"(assuming the integration is enabled)"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["By default these are exposed on port ",(0,t.jsx)(r.code,{children:"9090"})," though you can change this in the helm chart via"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"controller:\n  metricsPort: PORT\n"})}),"\n",(0,t.jsx)(r.h3,{id:"viewing-the-metrics",children:"Viewing the metrics"}),"\n",(0,t.jsx)(r.p,{children:"You can port forward into the controller and curl the metrics endpoint."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"$ kubectl -n terraform-system port-forward <POD> 9090\n# And then curl the metrics from another terminal\n$ curl http://localhost:9090/metrics\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This maps to the ",(0,t.jsx)(r.code,{children:"--metrics-port PORT"})," command line argument if not using the chart."]}),"\n",(0,t.jsx)(r.h3,{id:"predicted-cost-metrics",children:"Predicted Cost Metrics"}),"\n",(0,t.jsxs)(r.p,{children:["When the integration is enabled all ",(0,t.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," automatically expose their predicted monthly and hourly costs. Allowing the platform team to dashboard usage and or alerting on high figures. The metrics will take the form"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'configuration_hourly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>\nconfiguration_monthly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>\n'})}),"\n",(0,t.jsx)(r.h3,{id:"controller-metrics",children:"Controller Metrics"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"https://github.com/kubernetes-sigs/controller-runtime",children:"controller-runtime"})," exposes a number of metrics by default, covering success, requeue and error counters, to duration of reconciliation's and more."]}),"\n",(0,t.jsx)(r.p,{children:"Perhaps most useful from an alerting perspective are the error counters; an example for which is given below"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="error"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue_after"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="success"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="error"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue_after"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="success"} 2\n'})}),"\n",(0,t.jsx)(r.p,{children:"That can be used to notify the platform team if the controller is experiencing issues."}),"\n",(0,t.jsx)(r.h3,{id:"webhook-metrics",children:"Webhook Metrics"}),"\n",(0,t.jsxs)(r.p,{children:["The terraform controller uses a number of ",(0,t.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/",children:"validating and mutating webhooks"})," to ensure the integrity of the resources."]}),"\n",(0,t.jsxs)(r.p,{children:["Similar to controller metrics these are exposed out of the box via the ",(0,t.jsx)(r.a,{href:"https://github.com/kubernetes-sigs/controller-runtime",children:"controller runtime"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:'[jest@starfury terranetes-controller]$ curl -s http://localhost:9090/metrics | grep webhook\n# HELP controller_runtime_webhook_latency_seconds Histogram of the latency of processing admission requests\n# TYPE controller_runtime_webhook_latency_seconds histogram\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.005"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.01"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.025"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.05"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.1"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.25"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="1"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="2.5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="10"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="+Inf"} 2\ncontroller_runtime_webhook_latency_seconds_sum{webhook="/validate/terraform.appvia.io/providers"} 0.001305876\ncontroller_runtime_webhook_latency_seconds_count{webhook="/validate/terraform.appvia.io/providers"} 2\n# HELP controller_runtime_webhook_requests_in_flight Current number of admission requests being served.\n# TYPE controller_runtime_webhook_requests_in_flight gauge\ncontroller_runtime_webhook_requests_in_flight{webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/providers"} 0\n# HELP controller_runtime_webhook_requests_total Total number of admission requests by HTTP status code.\n# TYPE controller_runtime_webhook_requests_total counter\ncontroller_runtime_webhook_requests_total{code="200",webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/providers"} 2\ncontroller_runtime_webhook_requests_total{code="500",webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/providers"} 0\n'})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>l});var t=o(6540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);