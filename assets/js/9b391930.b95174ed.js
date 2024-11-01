"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9045],{903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(4848),n=r(8453);const o={sidebar_position:3,title:"Frequently Asked Questions"},a="Frequently Asked Questions (FAQs)",i={id:"faqs",title:"Frequently Asked Questions",description:"How does it work?",source:"@site/docs/tf2helm/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/tf2helm/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/faqs.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1730449026e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"Creating Helm Packages",permalink:"/tf2helm/create-your-own-packages"}},l={},d=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"What are the benefits to this approach?",id:"what-are-the-benefits-to-this-approach",level:2},{value:"What if my cloud resource depends on another?",id:"what-if-my-cloud-resource-depends-on-another",level:2},{value:"How is the state managed?",id:"how-is-the-state-managed",level:2},{value:"How does this compare to other similar tools?",id:"how-does-this-compare-to-other-similar-tools",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"frequently-asked-questions-faqs",children:"Frequently Asked Questions (FAQs)"})}),"\n",(0,s.jsx)(t.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,s.jsxs)(t.p,{children:["The solution leverages ",(0,s.jsx)(t.a,{href:"https://www.terraform.io/",children:"Terraform"})," and ",(0,s.jsx)(t.a,{href:"https://helm.sh/",children:"Helm"})," to create a Kubernetes Custom Resource Definition (CRD) object, watched and understood by the ",(0,s.jsx)(t.a,{href:"/terranetes-controller",children:"Appvia Terraform Controller"}),". This then triggers a workflow that applies a referenced Terraform module. We have aligned these CRD objects to cloud resources that Kubernetes workloads often depend on, and published them to ",(0,s.jsx)(t.a,{href:"https://artifacthub.io/packages/search?ts_query_web=appvia",children:"artifacthub.io"}),". You can either choose one of them or create your own package."]}),"\n",(0,s.jsx)(t.h2,{id:"what-are-the-benefits-to-this-approach",children:"What are the benefits to this approach?"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Clear separation of concerns for infrastructure operators and application developers"}),"\n",(0,s.jsx)(t.li,{children:"Developer self-service of consumable cloud resource packages with minimal user input"}),"\n",(0,s.jsx)(t.li,{children:"Leverages Helm as a package manager and its rich ecosystem"}),"\n",(0,s.jsx)(t.li,{children:"Leverages Terraform as the de facto tool for infrastructure provisioning"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"what-if-my-cloud-resource-depends-on-another",children:"What if my cloud resource depends on another?"}),"\n",(0,s.jsx)(t.p,{children:"It is common for a cloud resource to depend on other cloud resources as input arguments when being provisioned. These arguments or cloud resource attributes can be retrieved by querying the cloud API or Terraform state."}),"\n",(0,s.jsx)(t.p,{children:"Here are some possible ways to address this if you are creating your own package:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create a Terraform module that creates and/or references the dependent cloud resources."}),"\n",(0,s.jsx)(t.li,{children:"Create a Terraform module based on organisational boundaries that accept user inputs and/or sensible default values as arguments."}),"\n",(0,s.jsx)(t.li,{children:"Create a Helm Chart that uses the Helm Lookup function to query the Kubernetes API for Terraform outputs generated by dependent Helm Charts stored in a Kubernetes secret."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Each ",(0,s.jsx)(t.a,{href:"https://artifacthub.io/packages/search?ts_query_web=appvia",children:"appvia-community package"})," represents a single cloud resource with some appropriate default parameters. This follows the second option above, and allows consumers to add minimal input."]}),"\n",(0,s.jsx)(t.h2,{id:"how-is-the-state-managed",children:"How is the state managed?"}),"\n",(0,s.jsxs)(t.p,{children:["Terraform includes a built-in ",(0,s.jsx)(t.a,{href:"https://www.terraform.io/language/settings/backends",children:"selection of backends"})," that define where Terraform's state snapshots are stored. The Terraform Controller defaults to using the Kubernetes backend for storing and managing state."]}),"\n",(0,s.jsx)(t.p,{children:"Some key points around the usage of the Kubernetes backend:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It supports state locking, which means that Terraform will lock the state for all operations that write state."}),"\n",(0,s.jsx)(t.li,{children:"It is limited by Kubernetes' maximum secret size of 1MB, which must be considered when creating larger Terraform modules."}),"\n",(0,s.jsx)(t.li,{children:"The Terraform Controller stores sensitive data as plaintext within Kubernetes secrets."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-does-this-compare-to-other-similar-tools",children:"How does this compare to other similar tools?"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Key areas"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Terranetes"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Kubeform"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Crossplane"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Architecture"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/appvia/terranetes-controller",children:"Terraform Controller"})," component has a single controller and single CRD referencing a Terraform module"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"One controller per cloud provider and one CRD per cloud resource"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"One controller per cloud provider and one CRD per cloud resource"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"State management"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kubernetes etcd store"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kubernetes etcd store"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Kubernetes etcd store"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Ease of use"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Simplified consumption of cloud resources with minimal user input"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Steep learning curve to understand cloud infrastructure and multiple CRDs"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Steep learning curve of cloud infrastructure, multiple CRDs and concepts"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var s=r(6540);const n={},o=s.createContext(n);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);