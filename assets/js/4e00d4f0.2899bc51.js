"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[6430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Injecting Defaults",s={unversionedId:"admin/defaults",id:"admin/defaults",title:"Injecting Defaults",description:"Currently via policies platform administrators have the ability to inject both variables and or secrets into developer Configurations, common use cases",source:"@site/docs/terranetes-controller/admin/defaults.md",sourceDirName:"admin",slug:"/admin/defaults",permalink:"/terranetes-controller/admin/defaults",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/defaults.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1681469505,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Expose Costs",permalink:"/terranetes-controller/admin/costs"},next:{title:"Terraform State",permalink:"/terranetes-controller/admin/state"}},l={},c=[{value:"Variables",id:"variables",level:2},{value:"Secrets",id:"secrets",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"injecting-defaults"},"Injecting Defaults"),(0,r.kt)("p",null,"Currently via policies platform administrators have the ability to inject both variables and or secrets into developer Configurations, common use cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removing the administrative headache from the developers around which values to use, or enforcing specific organizational defaults on upstream modules."),(0,r.kt)("li",{parentName:"ul"},"Sharing credentials, tokens across an collection of Configurations, for example access to private repositories.")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,"Default environments provide the ability to inject environment-specific variables into a configuration based on a selector. An example might be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding environment-specific options (e.g. VPC ID, tags, etc), elements that you don't want developers to have to deal with"),(0,r.kt)("li",{parentName:"ul"},"Adding project-specific tags (e.g. cost center codes, project ID, etc)")),(0,r.kt)("p",null,"You can configure these via a Policy resource. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: environment-defaults\nspec:\n  defaults:\n    # Can be used to filter on configuration module sources\n    modules:\n      - <REGEX>\n    namespace:\n      # Match on namespace labels\n      matchLabels:\n        kubernetes.io/metadata.name: hello\n      # Use expressions to match on namespace labels\n      matchExpressions:\n        - key: kubernetes.io/metadata.name\n          operator: Exists\n    variables:\n      environment: dev\n")),(0,r.kt)("h2",{id:"secrets"},"Secrets"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature is only available from v0.3.15 onwards")),(0,r.kt)("p",null,"A defaults policy can also be used to inject secrets into a job. A common use case would be for the platform team to provide transparent authentication. Lets take the following example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have a number of private repositories we want to allow the developers to consume."),(0,r.kt)("li",{parentName:"ul"},"We don't want the developers to have to deal with authenticating to these modules and thus the feature should be transparent to them."),(0,r.kt)("li",{parentName:"ul"},"We have already create a kubernetes secret in the controller namespace containing a ssh_key or personal access token used to source the modules."),(0,r.kt)("li",{parentName:"ul"},"We need to setup a policy which injects these secrets into the job so developers don't need to private authentication themselves.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: default-authentication\nspec:\n  defaults:\n    # Can be used to filter on configuration module sources\n    modules:\n      - github.com/appvia/terraform-aws-myprivaterepo:.*\n    namespace:\n      # Use expressions to match on namespace labels\n      matchExpressions:\n        - key: kubernetes.io/metadata.name\n          operator: Exists\n    secrets:\n      - auth_key\n")))}u.isMDXComponent=!0}}]);