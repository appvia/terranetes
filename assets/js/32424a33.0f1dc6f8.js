"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Configuration Contexts",l={unversionedId:"developer/contexts",id:"developer/contexts",title:"Configuration Contexts",description:"Configuration Contexts are a means to share common configuration (inputs) between Configurations in the cluster.",source:"@site/docs/terranetes-controller/developer/contexts.md",sourceDirName:"developer",slug:"/developer/contexts",permalink:"/terranetes-controller/developer/contexts",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/contexts.md",tags:[],version:"current",lastUpdatedBy:"Alastair Hinde",lastUpdatedAt:1686579314,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using Private Repositories",permalink:"/terranetes-controller/developer/private"},next:{title:"Enabling Drift Protection",permalink:"/terranetes-controller/developer/drift"}},s={},p=[{value:"Viewing the Contexts",id:"viewing-the-contexts",level:2},{value:"Referencing Context Values",id:"referencing-context-values",level:2},{value:"Field Definitions",id:"field-definitions",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-contexts"},"Configuration Contexts"),(0,a.kt)("p",null,"Configuration ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Contexts")," are a means to share common configuration (inputs) between ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," in the cluster."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This feature is only available from v0.3.25 onwards")),(0,a.kt)("p",null,"These are provisioned by the platform team, but can be referenced by any ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")),(0,a.kt)("h2",{id:"viewing-the-contexts"},"Viewing the Contexts"),(0,a.kt)("p",null,"You can list all the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Contexts")," available via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get contexts\n")),(0,a.kt)("p",null,"The contains is a map of entities which contains both a ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," an d ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", as such;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Context\nmetadata:\n  name: default\nspec:\n  #\n  ## All variables MUST follow the pattern of 'description' and 'value'. The\n  ## value can be any complex or simple type (boolean, int, map, object etc)\n  #\n  variables:\n    environment:\n      description: Is the environment your running in\n      value: dev\n    # Is the name of the variable\n    vpc_id:\n      # Provides a description to the consumer of the input\n      description: Is the network identifier we are residing\n      # The value of the value\n      value: vpc-1223133113\n    public_subnets_ids:\n      # Provides a description to the consumer of the input\n      description: |\n        Is a collection of subnet id's which are publicly available i.e.\n        they are attached to an internet gateway\n      # The value of the value\n      value:\n        - subnet-12312312312\n        - subnet-32332321312\n")),(0,a.kt)("h2",{id:"referencing-context-values"},"Referencing Context Values"),(0,a.kt)("p",null,"You can reference a ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," value using the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.valueFrom")," field in the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")),(0,a.kt)("p",null,"For instance if we have a module that requires knowledge of the VPC id, we can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  ---\n  apiVersion: terraform.appvia.io/v1alpha1\n  kind: Configuration\n  metadata:\n    name: bucket\n  spec:\n    module: https://github.com/terraform-aws-modules/terraform-aws-rds\n\n    providerRef:\n      name: aws\n    valueFrom:\n      - context: NAME_OF_CONTEXT\n        key: vpc\n        name: vpc_id\n        optional: true\n")),(0,a.kt)("h3",{id:"field-definitions"},"Field Definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")," is the name of the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," resource to reference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," is the name of the variable inside the ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," is the name we present the value to the terraform module - i.e you might need ",(0,a.kt)("inlineCode",{parentName:"li"},"vpc_id")," mapped to ",(0,a.kt)("inlineCode",{parentName:"li"},"network_id")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"vpc")," in the module."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"optional")," controls if the value or ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," needs to exist, if true, any missing value is ignored.")))}u.isMDXComponent=!0}}]);