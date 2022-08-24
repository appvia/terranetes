"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[1609],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5462:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:3,sidebar_class_name:"green"},c="Expose Costs",l={unversionedId:"admin/costs",id:"admin/costs",title:"Expose Costs",description:"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses infracost to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running kubectl get configuration.",source:"@site/docs/terranetes-controller/admin/costs.md",sourceDirName:"admin",slug:"/admin/costs",permalink:"/terranetes-controller/admin/costs",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/costs.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1661348123,formattedLastUpdatedAt:"8/24/2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Define Guardrails",permalink:"/terranetes-controller/admin/policy"},next:{title:"Terraform State",permalink:"/terranetes-controller/admin/state"}},p={},u=[{value:"View the predicted costs",id:"view-the-predicted-costs",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expose-costs"},"Expose Costs"),(0,o.kt)("p",null,"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses ",(0,o.kt)("a",{parentName:"p",href:"https://infracost.io"},"infracost")," to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get configuration"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The costs here are predicted costs, not the actual costs/usage. While many costs can be calculated based on the resource specs alone, many other costs are based on usage. A simple example would be an S3 bucket that is free (predicted cost), but if you store 10TB inside it you will accumulate data storage costs that would not be visible based on your Terraform resource spec."))),(0,o.kt)("p",null,"To configure the integration:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a secret containing the Infracost API token."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n terraform-system create secret generic infracost \\\n  --from-literal=INFRACOST_API_KEY=$INFRACOST_API_KEY\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the controller to enable infracost by updating the controller flag."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  costs:\n    # The name of the secret you created in the controller namespace above\n    name: infracost\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the helm chart."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade terranetes-controller charts/\n")))),(0,o.kt)("h2",{id:"view-the-predicted-costs"},"View the predicted costs"),(0,o.kt)("p",null,"The predicted cost of a ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," is available on the CRD status and resource description."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps get configurations\nNAME        MODULE                                                                    SECRET   RESOURCES   ESTIMATED   AGE\ninstance0   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $140.96     61s\ninstance1   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $1124.18    61s\ninstance2   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $136.288    61s\ninstance3   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $660.72     61s\n")),(0,o.kt)("p",null,"You may retrieve the further detail from the status fields as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ k -n apps get configurations.terraform.appvia.io  instance0 -o json | jq -r .status.costs\n{\n  "enabled": true,\n  "hourly": "$0.1930958904109589",\n  "monthly": "$140.96"\n}\n')))}d.isMDXComponent=!0}}]);