"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[661],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5283:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1,title:"Overview"},s="tf2helm",p={unversionedId:"index",id:"index",title:"Overview",description:"t2helm is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:",source:"@site/docs/tf2helm/index.md",sourceDirName:".",slug:"/",permalink:"/tf2helm/",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/index.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1656882153,formattedLastUpdatedAt:"7/3/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Creating Helm Packages",permalink:"/tf2helm/create-your-own-packages"}},m={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tf2helm"},"tf2helm"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"t2helm")," is a simple Python utility that converts a Terraform module to a Helm Chart. The Helm Chart contains a Kubernetes Custom Resource understood and managed by one of the following Kubernetes Operators:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/appvia/terraform-controller"},"Appvia Terraform Controller (default)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/isaaguilar/terraform-operator"},"Isaaguilar Terraform Operator")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/terraform-controller"},"OAM Terraform Controller"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tf2helm")," reads a Terraform module from a local or remote path and converts it into a Helm Chart in a specified directory. Terraform variables are read from the module source and written under ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.required")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.optional")," keys in the Helm ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file, depending on whether they have been assigned values or not."),(0,o.kt)("p",null,"This gives infrastructure operators, e.g. DevOps or Platform engineers, the flexibility to set sensible default parameters for cloud resources and make them visible and configurable to application developers who may or may not override them afterwards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Terranetes Diagram",src:r(9265).Z,width:"8996",height:"5683"})),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The tf2helm package is published in the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/tf2helm/"},"Python Package Index"),", making for easy installation via pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install tf2helm\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ tf2helm --help\nUsage: tf2helm [OPTIONS]\n\n  tf2helm converts a Terraform module to a Helm Chart\n\n\nOptions:\n  --tf_module_path TEXT  Terraform module local Path e.g.\n                         "/local/path/to/module".\n  --tf_module_url TEXT   Terraform module URL e.g.\n                         "https://github.com/<org>/<module>?ref=<branch|tag>".\n  --tf_version TEXT      Terraform version.\n  --git_auth TEXT        Git access token or SSH private key to use with a\n                         private repository.\n  --template TEXT        Template to generate the custom resource definition.\n                         (terraform-controller, isaaguilar, oam-terraform-\n                         controller)  [default: terraform-controller]\n  --name TEXT            Helm chart name.\n  --app_version TEXT     Helm chart application version.\n  --output_dir TEXT      Path to the Helm chart output directory.\n  --version              Show the version and exit.\n  --help                 Show this message and exit.\n')))}f.isMDXComponent=!0},9265:function(e,t,r){t.Z=r.p+"assets/images/terranetes-a9e16155db8ee977f94f457e99618090.jpg"}}]);