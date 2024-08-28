"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[1103],{4328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=r(4848),a=r(8453);const o={sidebar_position:1,title:"Overview"},i="tf2helm",s={id:"index",title:"Overview",description:"t2helm is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:",source:"@site/docs/tf2helm/index.md",sourceDirName:".",slug:"/",permalink:"/tf2helm/",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/index.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Creating Helm Packages",permalink:"/tf2helm/create-your-own-packages"}},l={},h=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tf2helm",children:"tf2helm"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"t2helm"})," is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/appvia/terranetes-controller",children:"Appvia Terraform Controller (default)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/isaaguilar/terraform-operator",children:"Isaaguilar Terraform Operator"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/oam-dev/terraform-controller",children:"OAM Terraform Controller"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"tf2helm"})," reads a Terraform module from a local or remote path and converts it into a Helm Chart in a specified directory. Terraform variables are read from the module source and written under ",(0,n.jsx)(t.code,{children:".Values.required"})," and ",(0,n.jsx)(t.code,{children:".Values.optional"})," keys in the Helm ",(0,n.jsx)(t.code,{children:"values.yaml"})," file, depending on whether they have been assigned values or not."]}),"\n",(0,n.jsx)(t.p,{children:"This gives infrastructure operators, e.g. DevOps or Platform engineers, the flexibility to set sensible default parameters for cloud resources and make them visible and configurable to application developers who may or may not override them afterwards."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Terranetes Diagram",src:r(1914).A+"",width:"8996",height:"5683"})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["The tf2helm package is published in the ",(0,n.jsx)(t.a,{href:"https://pypi.org/project/tf2helm/",children:"Python Package Index"}),", making for easy installation via pip:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"pip install tf2helm\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'$ tf2helm --help\nUsage: tf2helm [OPTIONS]\n\n  tf2helm converts a Terraform module to a Helm Chart\n\n\nOptions:\n  --tf_module_path TEXT  Terraform module local Path e.g.\n                         "/local/path/to/module".\n  --tf_module_url TEXT   Terraform module URL e.g.\n                         "https://github.com/<org>/<module>?ref=<branch|tag>".\n  --tf_version TEXT      Terraform version.\n  --git_auth TEXT        Git access token or SSH private key to use with a\n                         private repository.\n  --template TEXT        Template to generate the custom resource definition.\n                         (terraform-controller, isaaguilar, oam-terraform-\n                         controller)  [default: terraform-controller]\n  --name TEXT            Helm chart name.\n  --app_version TEXT     Helm chart application version.\n  --output_dir TEXT      Path to the Helm chart output directory.\n  --version              Show the version and exit.\n  --help                 Show this message and exit.\n'})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1914:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/terranetes-a9e16155db8ee977f94f457e99618090.jpg"},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);