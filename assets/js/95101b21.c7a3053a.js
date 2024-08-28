"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[3976],{4548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(4848),r=t(8453);const a={sidebar_position:2,sidebar_class_name:"green"},s="Module Restrictions",i={id:"admin/policy/modules",title:"Module Restrictions",description:"You can control the source of the terraform modules permitted to run through the Policy resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used.",source:"@site/docs/terranetes-controller/admin/policy/modules.md",sourceDirName:"admin/policy",slug:"/admin/policy/modules",permalink:"/terranetes-controller/admin/policy/modules",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/policy/modules.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terranetes-controller/admin/policy/intro"},next:{title:"Checkov Policy",permalink:"/terranetes-controller/admin/policy/checkov"}},l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"module-restrictions",children:"Module Restrictions"}),"\n",(0,o.jsxs)(n.p,{children:["You can control the source of the terraform modules permitted to run through the ",(0,o.jsx)(n.a,{href:"/terranetes-controller/reference/policies.terraform.appvia.io",children:"Policy"})," resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used."]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["This control is applied to the primary module (i.e. ",(0,o.jsx)(n.code,{children:"spec.module"}),") inside the Configuration CRD. Modules that incorporate other modules are not enforced."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: permitted-modules\nspec:\n  constraints:\n    modules:\n      selector:\n        namespace:\n          matchLabels: {}\n          matchExpressions: []\n        resource:\n          matchLabels: {}\n          matchExpressions: []\n      allowed:\n        - "https://github.com/appvia/.*"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The allowed list (",(0,o.jsx)(n.code,{children:"spec.constraints.modules.allowed"}),") is a collection of Golang regexes which a ",(0,o.jsx)(n.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," must match at least one."]}),"\n",(0,o.jsxs)(n.p,{children:["The policy may also include an optional selector (",(0,o.jsx)(n.code,{children:"spec.constraints.modules.selector"}),") that can be used to match against namespace and resource labels of the ",(0,o.jsx)(n.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"}),". As with all selectors in the controller, leaving this field empty implies you want to match against all. You can take advantage of the selectors by providing overrides."]}),"\n",(0,o.jsx)(n.p,{children:"Lets use the following requirements."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["All teams may use terraform from the companies Github repositories at ",(0,o.jsx)(n.a,{href:"https://github.com/appvia",children:"https://github.com/appvia"})]}),"\n",(0,o.jsxs)(n.li,{children:["The teams using namespace ",(0,o.jsx)(n.code,{children:"infra"})," and ",(0,o.jsx)(n.code,{children:"ci"})," can use additional modules from ",(0,o.jsx)(n.a,{href:"https://github.com/elsewhere",children:"https://github.com/elsewhere"})]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create the default policy (i.e no selector)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: default\nspec:\n  constraints:\n    modules:\n      allowed:\n        - "https://github.com/appvia/.*"\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Create the additional policy for namespace ",(0,o.jsx)(n.code,{children:"infra"})," and ",(0,o.jsx)(n.code,{children:"ci"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: default\nspec:\n  constraints:\n    modules:\n      selector:\n        namespace:\n          matchExpressions:\n            - key: kubernetes.io/metadata.name\n              operator: In\n              values: [infra, ci]\n      allowed:\n        - "https://github.com/elsewhere/.*"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(6540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);