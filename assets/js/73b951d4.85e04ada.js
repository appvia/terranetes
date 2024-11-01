"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2628],{2644:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(4848),r=s(8453);const o={sidebar_position:5,sidebar_class_name:"green"},a="Expose Costs",i={id:"admin/costs",title:"Expose Costs",description:"The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses infracost to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running kubectl get configuration.",source:"@site/docs/terranetes-controller/admin/costs.md",sourceDirName:"admin",slug:"/admin/costs",permalink:"/terranetes-controller/admin/costs",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/costs.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1730449026e3,sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/terranetes-controller/admin/observability/metrics"},next:{title:"Injecting Defaults",permalink:"/terranetes-controller/admin/defaults"}},c={},l=[{value:"View the predicted costs",id:"view-the-predicted-costs",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"expose-costs",children:"Expose Costs"})}),"\n",(0,n.jsxs)(t.p,{children:["The costs integration allows developers to see their associated costs before applying the terraform. This controller currently uses ",(0,n.jsx)(t.a,{href:"https://infracost.io",children:"infracost"})," to extract the predicted costs of a configuration, exposing the cost within the status of the Kubernetes object. It is viewable by running ",(0,n.jsx)(t.code,{children:"kubectl get configuration"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The costs here are predicted costs, not the actual costs/usage. While many costs can be calculated based on the resource specs alone, many other costs are based on usage. A simple example would be an S3 bucket that is free (predicted cost), but if you store 10TB inside it you will accumulate data storage costs that would not be visible based on your Terraform resource spec."})}),"\n",(0,n.jsx)(t.p,{children:"To configure the integration:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create a secret containing the Infracost API token."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ kubectl -n terraform-system create secret generic infracost \\\n  --from-literal=INFRACOST_API_KEY=$INFRACOST_API_KEY\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Configure the controller to enable infracost by updating the controller flag."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"controller:\n  costs:\n    # The name of the secret you created in the controller namespace above\n    name: infracost\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Update the helm chart."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ helm upgrade terranetes-controller charts/\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"view-the-predicted-costs",children:"View the predicted costs"}),"\n",(0,n.jsxs)(t.p,{children:["The predicted cost of a ",(0,n.jsx)(t.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," is available on the CRD status and resource description."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ kubectl -n apps get configurations\nNAME        MODULE                                                                    SECRET   RESOURCES   ESTIMATED   AGE\ninstance0   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $140.96     61s\ninstance1   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $1124.18    61s\ninstance2   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $136.288    61s\ninstance3   https://github.com/terraform-aws-modules/terraform-aws-ec2-instance.git                        $660.72     61s\n"})}),"\n",(0,n.jsx)(t.p,{children:"You may retrieve the further detail from the status fields as below."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ k -n apps get configurations.terraform.appvia.io  instance0 -o json | jq -r .status.costs\n{\n  "enabled": true,\n  "hourly": "$0.1930958904109589",\n  "monthly": "$140.96"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);