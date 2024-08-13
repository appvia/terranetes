"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[461],{7571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(4848),o=n(8453);const s={sidebar_position:100},i="Additional Secrets",a={id:"admin/secrets",title:"Additional Secrets",description:"The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs.",source:"@site/docs/terranetes-controller/admin/secrets.md",sourceDirName:"admin",slug:"/admin/secrets",permalink:"/terranetes-controller/admin/secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/secrets.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:172356019e4,sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Customize Job Template",permalink:"/terranetes-controller/admin/template"},next:{title:"Developer Docs",permalink:"/terranetes-controller/category/developer-docs"}},c={},d=[{value:"Adding a custom secret",id:"adding-a-custom-secret",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"additional-secrets",children:"Additional Secrets"}),"\n",(0,r.jsx)(t.p,{children:"The controller supports the ability to inject additional secrets into the terraform execution. A common use case to provide additional credentials, api tokens or custom configuration into the jobs."}),"\n",(0,r.jsx)(t.p,{children:"The platform team must create the Kubernetes secrets ahead of time, which are referenced on the command line of the controller."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["These secrets are added to all jobs so be prudent when using this feature. This intention is to add the feature on to ",(0,r.jsx)(t.a,{href:"/terranetes-controller/reference/providers.terraform.appvia.io",children:"Providers"})," CRD to make it fine grained."]})}),"\n",(0,r.jsx)(t.h2,{id:"adding-a-custom-secret",children:"Adding a custom secret"}),"\n",(0,r.jsxs)(t.p,{children:["Update your Helm chart values to include the following. The secrets must exist in the controller namespace and contain environment variable i.e. uppercases key/values, as the secrets are sourced into the jobs via the ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#use-case-as-container-environment-variables",children:"spec.envFrom"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"controller:\n  # A collection of secret names which exist the controller namespace\n  executorSecrets:\n    - NAME\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively if you are not using the Helm chart, update the deployment yaml to include the ",(0,r.jsx)(t.code,{children:"--executor-secret"})," flags."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);