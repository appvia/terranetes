"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,sidebar_class_name:"green"},i="Module Restrictions",l={unversionedId:"admin/policy/modules",id:"admin/policy/modules",title:"Module Restrictions",description:"You can control the source of the terraform modules permitted to run through the Policy resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used.",source:"@site/docs/terranetes-controller/admin/policy/modules.md",sourceDirName:"admin/policy",slug:"/admin/policy/modules",permalink:"/terranetes-controller/admin/policy/modules",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/policy/modules.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708601991,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/terranetes-controller/admin/policy/intro"},next:{title:"Checkov Policy",permalink:"/terranetes-controller/admin/policy/checkov"}},s={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module-restrictions"},"Module Restrictions"),(0,a.kt)("p",null,"You can control the source of the terraform modules permitted to run through the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/policies.terraform.appvia.io"},"Policy")," resource. The following policy enforces that only modules sourced from the Appvia Github Organization can be used."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"This control is applied to the primary module (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.module"),") inside the Configuration CRD. Modules that incorporate other modules are not enforced.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: permitted-modules\nspec:\n  constraints:\n    modules:\n      selector:\n        namespace:\n          matchLabels: {}\n          matchExpressions: []\n        resource:\n          matchLabels: {}\n          matchExpressions: []\n      allowed:\n        - "https://github.com/appvia/.*"\n')),(0,a.kt)("p",null,"The allowed list (",(0,a.kt)("inlineCode",{parentName:"p"},"spec.constraints.modules.allowed"),") is a collection of Golang regexes which a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," must match at least one."),(0,a.kt)("p",null,"The policy may also include an optional selector (",(0,a.kt)("inlineCode",{parentName:"p"},"spec.constraints.modules.selector"),") that can be used to match against namespace and resource labels of the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration"),". As with all selectors in the controller, leaving this field empty implies you want to match against all. You can take advantage of the selectors by providing overrides."),(0,a.kt)("p",null,"Lets use the following requirements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All teams may use terraform from the companies Github repositories at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/appvia"},"https://github.com/appvia")),(0,a.kt)("li",{parentName:"ul"},"The teams using namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"infra")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ci")," can use additional modules from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/elsewhere"},"https://github.com/elsewhere"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the default policy (i.e no selector)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: default\nspec:\n  constraints:\n    modules:\n      allowed:\n        - "https://github.com/appvia/.*"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create the additional policy for namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"infra")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ci"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: default\nspec:\n  constraints:\n    modules:\n      selector:\n        namespace:\n          matchExpressions:\n            - key: kubernetes.io/metadata.name\n              operator: In\n              values: [infra, ci]\n      allowed:\n        - "https://github.com/elsewhere/.*"\n')))}m.isMDXComponent=!0}}]);