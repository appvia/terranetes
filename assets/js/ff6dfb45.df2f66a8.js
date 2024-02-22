"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[8812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},l="Using Flux as Source",i={unversionedId:"developer/flux",id:"developer/flux",title:"Using Flux as Source",description:"Flux is a flexible and popular framework used for Gitops. You can take advantage of any Flux install while still retaining the full feature set of the terraform controller.",source:"@site/docs/terranetes-controller/developer/flux.md",sourceDirName:"developer",slug:"/developer/flux",permalink:"/terranetes-controller/developer/flux",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/flux.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1708602075,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Enabling Drift Protection",permalink:"/terranetes-controller/developer/drift"},next:{title:"Walk Throughs",permalink:"/terranetes-controller/category/walk-throughs"}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-flux-as-source"},"Using Flux as Source"),(0,a.kt)("p",null,"Flux is a flexible and popular framework used for ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DevOps#GitOps"},"Gitops"),". You can take advantage of any Flux install while still retaining the full feature set of the terraform controller."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The following has assumed you have installed the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/source-controller"},"source-controller")," and any dependant components in the cluster already.")),(0,a.kt)("p",null,"Lets rework our common example to take advantage of Flux and source our terraform module via the source controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1m .\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n\n  providerRef:\n    name: default\n\n  writeConnectionSecretToRef:\n    name: test\n\n  variables:\n    bucket: [BUCKET_NAME]\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Now instead of pulling the terraform module direct as above we can use a ",(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/components/source/gitrepositories/"},"GitRepostory")," to represent the source module.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: GitRepository\nmetadata:\n  name: bucket\nspec:\n  interval: 1m\n  timeout: 60s\n  url: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Wait for the source controller to retrieve the module and view the status.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get gitrepositories bucket -o yaml\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Look into the status of the resource")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  artifact:\n    ...\n  observedGeneration: 2\n  url: http://source-controller.source-system.svc.cluster.local./gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Note the URL will change depending on which namespace the source controller was installed and any branch references.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update you ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," resource to use the above URL. Note we have to force the protocol type by prefixing it with ",(0,a.kt)("inlineCode",{parentName:"p"},"http::")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1m .\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  module: http::http://source-controller.source-system.svc.cluster.local/gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz\n")),(0,a.kt)("p",null,"The controller will retrieve the extract the archive for you."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"These steps don't need to be performed sequentially. Once you know the expected format of the URL the source controller is going to give you can apply the resources all at once.")))}u.isMDXComponent=!0}}]);