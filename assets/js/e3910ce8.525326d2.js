"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[333],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4978:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Using Flux as Source",c={unversionedId:"developer/flux",id:"developer/flux",title:"Using Flux as Source",description:"Flux is a flexible and popular framework used for Gitops. You can take advantage of any Flux install while still retaining the full feature set of the terraform controller.",source:"@site/docs/terraform-controller/developer/flux.md",sourceDirName:"developer",slug:"/developer/flux",permalink:"/terraform-controller/developer/flux",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/developer/flux.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1654332967,formattedLastUpdatedAt:"6/4/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using Private Repositories",permalink:"/terraform-controller/developer/private"},next:{title:"API Reference",permalink:"/terraform-controller/category/api-reference"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-flux-as-source"},"Using Flux as Source"),(0,o.kt)("p",null,"Flux is a flexible and popular framework used for ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DevOps#GitOps"},"Gitops"),". You can take advantage of any Flux install while still retaining the full feature set of the terraform controller."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following has assumed you have installed the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/source-controller"},"source-controller")," and any dependant components in the cluster already."))),(0,o.kt)("p",null,"Lets rework our common example to take advantage of Flux and source our terraform module via the source controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1m .\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n\n  providerRef:\n    namespace: terraform-system\n    name: default\n\n  writeConnectionSecretToRef:\n    name: test\n\n  variables: {}\n    bucket: [BUCKET_NAME]\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Now instead of pulling the terraform module direct as above we can use a ",(0,o.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/components/source/gitrepositories/"},"GitRepostory")," to represent the source module.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: GitRepository\nmetadata:\n  name: bucket\nspec:\n  interval: 1m\n  timeout: 60s\n  url: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Wait for the source controller to retrieve the module and view the status.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get gitrepositories bucket -o yaml\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Look into the status of the resource")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  artifact:\n    ...\n  observedGeneration: 2\n  url: http://source-controller.source-system.svc.cluster.local./gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Note the URL will change depending on which namespace the source controller was installed and any branch references.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update you ",(0,o.kt)("a",{parentName:"p",href:"/terraform-controller/reference/configurations.terraform.appvia.io"},"Configuration")," resource to use the above URL. Note we have to force the protocol type by prefixing it with ",(0,o.kt)("inlineCode",{parentName:"p"},"http::")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1m .\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  module: http::http://source-controller.source-system.svc.cluster.local/gitrepository/apps/terraform-aws-s3-bucket.git/latest.tar.gz\n")),(0,o.kt)("p",null,"The controller will retrieve the extract the archive for you."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These steps don't need to be performed sequentially. Once you know the expected format of the URL the source controller is going to give you can apply the resources all at once."))))}d.isMDXComponent=!0}}]);