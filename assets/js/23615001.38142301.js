"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,title:"Overview"},l="tf2helm",i={unversionedId:"index",id:"index",title:"Overview",description:"t2helm is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:",source:"@site/docs/tf2helm/index.md",sourceDirName:".",slug:"/",permalink:"/tf2helm/",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/index.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1686385965,formattedLastUpdatedAt:"Jun 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Creating Helm Packages",permalink:"/tf2helm/create-your-own-packages"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tf2helm"},"tf2helm"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"t2helm")," is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/appvia/terranetes-controller"},"Appvia Terraform Controller (default)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/isaaguilar/terraform-operator"},"Isaaguilar Terraform Operator")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/terraform-controller"},"OAM Terraform Controller"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"tf2helm")," reads a Terraform module from a local or remote path and converts it into a Helm Chart in a specified directory. Terraform variables are read from the module source and written under ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.required")," and ",(0,n.kt)("inlineCode",{parentName:"p"},".Values.optional")," keys in the Helm ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, depending on whether they have been assigned values or not."),(0,n.kt)("p",null,"This gives infrastructure operators, e.g. DevOps or Platform engineers, the flexibility to set sensible default parameters for cloud resources and make them visible and configurable to application developers who may or may not override them afterwards."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Terranetes Diagram",src:r(9265).Z,width:"8996",height:"5683"})),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The tf2helm package is published in the ",(0,n.kt)("a",{parentName:"p",href:"https://pypi.org/project/tf2helm/"},"Python Package Index"),", making for easy installation via pip:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pip install tf2helm\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ tf2helm --help\nUsage: tf2helm [OPTIONS]\n\n  tf2helm converts a Terraform module to a Helm Chart\n\n\nOptions:\n  --tf_module_path TEXT  Terraform module local Path e.g.\n                         "/local/path/to/module".\n  --tf_module_url TEXT   Terraform module URL e.g.\n                         "https://github.com/<org>/<module>?ref=<branch|tag>".\n  --tf_version TEXT      Terraform version.\n  --git_auth TEXT        Git access token or SSH private key to use with a\n                         private repository.\n  --template TEXT        Template to generate the custom resource definition.\n                         (terraform-controller, isaaguilar, oam-terraform-\n                         controller)  [default: terraform-controller]\n  --name TEXT            Helm chart name.\n  --app_version TEXT     Helm chart application version.\n  --output_dir TEXT      Path to the Helm chart output directory.\n  --version              Show the version and exit.\n  --help                 Show this message and exit.\n')))}u.isMDXComponent=!0},9265:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/terranetes-a9e16155db8ee977f94f457e99618090.jpg"}}]);