"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[1609],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3,sidebar_class_name:"green"},s="Expose Costs",i={unversionedId:"admin/costs",id:"admin/costs",title:"Expose Costs",description:"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses infracost to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running kubectl get configuration.",source:"@site/docs/terranetes-controller/admin/costs.md",sourceDirName:"admin",slug:"/admin/costs",permalink:"/terranetes-controller/admin/costs",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/costs.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1661422327,formattedLastUpdatedAt:"Aug 25, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Define Guardrails",permalink:"/terranetes-controller/admin/policy"},next:{title:"Terraform State",permalink:"/terranetes-controller/admin/state"}},c={},l=[{value:"View the predicted costs",id:"view-the-predicted-costs",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expose-costs"},"Expose Costs"),(0,a.kt)("p",null,"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses ",(0,a.kt)("a",{parentName:"p",href:"https://infracost.io"},"infracost")," to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get configuration"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The costs here are predicted costs, not the actual costs/usage. While many costs can be calculated based on the resource specs alone, many other costs are based on usage. A simple example would be an S3 bucket that is free (predicted cost), but if you store 10TB inside it you will accumulate data storage costs that would not be visible based on your Terraform resource spec.")),(0,a.kt)("p",null,"To configure the integration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a secret containing the Infracost API token."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n terraform-system create secret generic infracost \\\n  --from-literal=INFRACOST_API_KEY=$INFRACOST_API_KEY\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the controller to enable infracost by updating the controller flag."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  costs:\n    # The name of the secret you created in the controller namespace above\n    name: infracost\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the helm chart."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade terranetes-controller charts/\n")))),(0,a.kt)("h2",{id:"view-the-predicted-costs"},"View the predicted costs"),(0,a.kt)("p",null,"The predicted cost of a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," is available on the CRD status and resource description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps get configurations\nNAME        MODULE                                                                    SECRET   RESOURCES   ESTIMATED   AGE\ninstance0   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $140.96     61s\ninstance1   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $1124.18    61s\ninstance2   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $136.288    61s\ninstance3   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $660.72     61s\n")),(0,a.kt)("p",null,"You may retrieve the further detail from the status fields as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ k -n apps get configurations.terraform.appvia.io  instance0 -o json | jq -r .status.costs\n{\n  "enabled": true,\n  "hourly": "$0.1930958904109589",\n  "monthly": "$140.96"\n}\n')))}u.isMDXComponent=!0}}]);