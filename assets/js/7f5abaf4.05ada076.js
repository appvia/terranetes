"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[9217],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return _}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),_=n,d=m["".concat(c,".").concat(_)]||m[_]||p[_]||a;return t?o.createElement(d,i(i({ref:r},u),{},{components:t})):o.createElement(d,i({ref:r},u))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8950:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],l={},c="Metrics",s={unversionedId:"admin/observability/metrics",id:"admin/observability/metrics",title:"Metrics",description:"The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations).",source:"@site/docs/terranetes-controller/admin/observability/metrics.md",sourceDirName:"admin/observability",slug:"/admin/observability/metrics",permalink:"/terranetes-controller/admin/observability/metrics",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/observability/metrics.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1658755385,formattedLastUpdatedAt:"7/25/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Observability",permalink:"/terranetes-controller/category/observability"},next:{title:"Customize Job Template",permalink:"/terranetes-controller/admin/template"}},u={},p=[{value:"Viewing the metrics",id:"viewing-the-metrics",level:3},{value:"Predicted Cost Metrics",id:"predicted-cost-metrics",level:3},{value:"Controller Metrics",id:"controller-metrics",level:3},{value:"Webhook Metrics",id:"webhook-metrics",level:3}],m={toc:p};function _(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"The controller exposes a number of prometheus metrics that can be utilized for tracking operational conditions and usage metrics (i.e. configurations)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Track the reconciliation of the resources and their current status."),(0,a.kt)("li",{parentName:"ul"},"Track the error and success rates of the controllers."),(0,a.kt)("li",{parentName:"ul"},"Track the associated costs to each of the configurations ",(0,a.kt)("em",{parentName:"li"},"(assuming the integration is enabled)"),".")),(0,a.kt)("p",null,"By default these are exposed on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9090")," though you can change this in the helm chart via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  metricsPort: PORT\n")),(0,a.kt)("h3",{id:"viewing-the-metrics"},"Viewing the metrics"),(0,a.kt)("p",null,"You can port forward into the controller and curl the metrics endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n terraform-system port-forward <POD> 9090\n# And then curl the metrics from another terminal\n$ curl http://localhost:9090/metrics\n")),(0,a.kt)("p",null,"This maps to the ",(0,a.kt)("inlineCode",{parentName:"p"},"--metrics-port PORT")," command line argument if not using the chart."),(0,a.kt)("h3",{id:"predicted-cost-metrics"},"Predicted Cost Metrics"),(0,a.kt)("p",null,"When the integration is enabled all ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," automatically expose their predicted monthly and hourly costs. Allowing the platform team to dashboard usage and or alerting on high figures. The metrics will take the form"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'configuration_hourly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>\nconfiguration_monthly_cost_total{namespace="NAMESPACE", name="NAME"} = <COST>\n')),(0,a.kt)("h3",{id:"controller-metrics"},"Controller Metrics"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/controller-runtime"},"controller-runtime")," exposes a number of metrics by default, covering success, requeue and error counters, to duration of reconciliation's and more."),(0,a.kt)("p",null,"Perhaps most useful from an alerting perspective are the error counters; an example for which is given below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'controller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="error"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="requeue_after"} 0\ncontroller_runtime_reconcile_total{controller="configuration.terraform.appvia.io",result="success"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="error"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="requeue_after"} 0\ncontroller_runtime_reconcile_total{controller="provider.terraform.appvia.io",result="success"} 2\n')),(0,a.kt)("p",null,"That can be used to notify the platform team if the controller is experiencing issues."),(0,a.kt)("h3",{id:"webhook-metrics"},"Webhook Metrics"),(0,a.kt)("p",null,"The terraform controller uses a number of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"validating and mutating webhooks")," to ensure the integrity of the resources."),(0,a.kt)("p",null,"Similar to controller metrics these are exposed out of the box via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/controller-runtime"},"controller runtime")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[jest@starfury terranetes-controller]$ curl -s http://localhost:9090/metrics | grep webhook\n# HELP controller_runtime_webhook_latency_seconds Histogram of the latency of processing admission requests\n# TYPE controller_runtime_webhook_latency_seconds histogram\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.005"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.01"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.025"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.05"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.1"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.25"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="0.5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="1"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="2.5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="5"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="10"} 2\ncontroller_runtime_webhook_latency_seconds_bucket{webhook="/validate/terraform.appvia.io/providers",le="+Inf"} 2\ncontroller_runtime_webhook_latency_seconds_sum{webhook="/validate/terraform.appvia.io/providers"} 0.001305876\ncontroller_runtime_webhook_latency_seconds_count{webhook="/validate/terraform.appvia.io/providers"} 2\n# HELP controller_runtime_webhook_requests_in_flight Current number of admission requests being served.\n# TYPE controller_runtime_webhook_requests_in_flight gauge\ncontroller_runtime_webhook_requests_in_flight{webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_in_flight{webhook="/validate/terraform.appvia.io/providers"} 0\n# HELP controller_runtime_webhook_requests_total Total number of admission requests by HTTP status code.\n# TYPE controller_runtime_webhook_requests_total counter\ncontroller_runtime_webhook_requests_total{code="200",webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_total{code="200",webhook="/validate/terraform.appvia.io/providers"} 2\ncontroller_runtime_webhook_requests_total{code="500",webhook="/mutate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/configurations"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/policies"} 0\ncontroller_runtime_webhook_requests_total{code="500",webhook="/validate/terraform.appvia.io/providers"} 0\n')))}_.isMDXComponent=!0}}]);