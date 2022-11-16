"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[3323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="Drift Detection",l={unversionedId:"admin/drift",id:"admin/drift",title:"Drift Detection",description:"Drift detection periodically runs a terraform plan on a Configuration, ensuring the expected state (terraform state) and the actual cloud resources are in sync. Currently Configurations must opt in for drift detection via their spec;",source:"@site/docs/terranetes-controller/admin/drift.md",sourceDirName:"admin",slug:"/admin/drift",permalink:"/terranetes-controller/admin/drift",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/drift.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1668587140,formattedLastUpdatedAt:"Nov 16, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Terraform State",permalink:"/terranetes-controller/admin/state"},next:{title:"Observability",permalink:"/terranetes-controller/category/observability"}},s={},p=[{value:"Tuning Drift Detection",id:"tuning-drift-detection",level:2},{value:"Drift Intervals",id:"drift-intervals",level:3},{value:"Drift Threshold",id:"drift-threshold",level:3},{value:"Selection Process",id:"selection-process",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drift-detection"},"Drift Detection"),(0,a.kt)("p",null,"Drift detection periodically runs a terraform plan on a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration"),", ensuring the expected state ",(0,a.kt)("em",{parentName:"p"},"(terraform state)")," and the actual cloud resources are in sync. Currently ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," must opt in for drift detection via their spec;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n  providerRef:\n    namespace: terraform-system\n    name: aws\n  # You can enable drift protection as so\n  enableDriftDetection: true\n")),(0,a.kt)("h2",{id:"tuning-drift-detection"},"Tuning Drift Detection"),(0,a.kt)("p",null,"From an administrative perspective the controller exposes two options:"),(0,a.kt)("h3",{id:"drift-intervals"},"Drift Intervals"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"driftInterval")," is the amount of time that must pass from the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration's")," last terraform plan (last transition time recorded within the status of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," object), before a new check is run. By default this is ",(0,a.kt)("inlineCode",{parentName:"p"},"3h"),", so every three hours that has passed from the last transition time for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration")," object, a drift check will be ran against this resource (providing it is within the ",(0,a.kt)("a",{parentName:"p",href:"#drift-threshold"},(0,a.kt)("inlineCode",{parentName:"a"},"driftThreshold")),")."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The check is always from the last terraform plan run. So if the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," is altered within those 3 hours, the clocks restarts and will be 3 hours from then.")),(0,a.kt)("p",null,"You can configure the drift interval via the helm value ",(0,a.kt)("inlineCode",{parentName:"p"},"controller.driftInterval"),"; the format must be in minutes or hours, i.e. 10m or 10h"),(0,a.kt)("h3",{id:"drift-threshold"},"Drift Threshold"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"driftThreshold")," is a configurable threshold used to ensure we dont overwhelm the cloud provider API with drift checks. These checks are performing a ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform plan")," afterall and thus API requests are sent out to the cloud provider, so a large collection of ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," all confirming at the same time could cause API timeouts and retries due to rate limiting."),(0,a.kt)("p",null,"The threshold is a percentage, expressed as a float between 0 and 1. This sets the maximum number of ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," that can run a drift check at anyone time."),(0,a.kt)("p",null,"This value takes into account ",(0,a.kt)("strong",{parentName:"p"},"all ",(0,a.kt)("inlineCode",{parentName:"strong"},"Configuration")," resources"),", not just those with ",(0,a.kt)("inlineCode",{parentName:"p"},"enableDriftDetection"),", as the intention is to protect against Cloud API limits."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario 1:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"10 ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration")," resources"),(0,a.kt)("li",{parentName:"ul"},"1 resource currently in progress (terraform plan or apply is executing)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"driftThreshold: 0.2")," (10 * 20% - maximum 2 resources)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Result:")," A resource with ",(0,a.kt)("inlineCode",{parentName:"li"},"enableDriftCheck")," will execute a check because it is below the threshold")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario 2:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"10 ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration")," Resources"),(0,a.kt)("li",{parentName:"ul"},"2 resources currently in progress (terraform plan or apply is executing)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"driftThreshold: 0.2")," (10 * 20% - maximum 2 resources)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Result:")," A resource with ",(0,a.kt)("inlineCode",{parentName:"li"},"enableDriftCheck")," will not execute a check because the threshold is currently met. It will be evaluated again after a fixed 5 minute interval.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scenario 3:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"10 ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration")," Resources"),(0,a.kt)("li",{parentName:"ul"},"0 resources currently in progress (terraform plan or apply is executing)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"driftThreshold: 0.01")," (10 * 1% - maximum 1 resource)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Result:")," A resource with ",(0,a.kt)("inlineCode",{parentName:"li"},"enableDriftCheck")," will execute because none are currently in progress, and the maximum resources that can be run is rounded upwards to a value of 1.")),(0,a.kt)("h3",{id:"selection-process"},"Selection Process"),(0,a.kt)("p",null,"The controller chooses a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," based on the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drift detection is enabled on the spec i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.enableDriftDetection: true"),"."),(0,a.kt)("li",{parentName:"ul"},"The configuration has already ran successfully, i.e. a plan, approve and apply."),(0,a.kt)("li",{parentName:"ul"},"The last time a plan ran was >= drift interval."),(0,a.kt)("li",{parentName:"ul"},"Assuming the number of currently running terraform plan or apply actions is below the drift threshold, the configuration is selected.")),(0,a.kt)("p",null,"The selection process is not ordered in any way, the controller makes a best effort approach, knowing eventually all the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," resources will be run in the end."))}u.isMDXComponent=!0}}]);