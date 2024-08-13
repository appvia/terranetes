"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[3361],{5495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(4848),r=n(8453);const i={sidebar_position:1,sidebar_class_name:"green"},s="Introduction",a={id:"admin/policy/intro",title:"Introduction",description:"The controller comes with a number of controls and safeguards that the platform team can utilize to:",source:"@site/docs/terranetes-controller/admin/policy/intro.md",sourceDirName:"admin/policy",slug:"/admin/policy/intro",permalink:"/terranetes-controller/admin/policy/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/policy/intro.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:172356019e4,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Define Guardrails",permalink:"/terranetes-controller/category/define-guardrails"},next:{title:"Module Restrictions",permalink:"/terranetes-controller/admin/policy/modules"}},c={},l=[{value:"Policy Resource",id:"policy-resource",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"The controller comes with a number of controls and safeguards that the platform team can utilize to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Enforce a security policy across the estate via ",(0,o.jsx)(t.a,{href:"https://www.checkov.io/",children:"Checkov"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Enforce the source of the terraform modules, for example locking down to only fetch terraform modules from your company's repositories."}),"\n",(0,o.jsx)(t.li,{children:"Automatically inject environment-specific variables into the Configuration CRD, such as costs, project IDs, environment-specific labels or tags. This removes the need for teams consuming modules to know these details, and keeps the deployments environment agnostic."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"policy-resource",children:"Policy Resource"}),"\n",(0,o.jsxs)(t.p,{children:["Not wishing to create a plethora of resource types to define all mechanics of policy, all the policies handled by the controller are defined via the ",(0,o.jsx)(t.a,{href:"/terranetes-controller/reference/policies.terraform.appvia.io",children:"Policy"})," CRD."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You can define Policy resources multiple times, as the definitions are pulled together and aggregated."})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);