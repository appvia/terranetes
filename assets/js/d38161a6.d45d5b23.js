"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||n;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2,title:"Creating Helm Packages"},l="Creating Your Own Helm Packages",i={unversionedId:"create-your-own-packages",id:"create-your-own-packages",title:"Creating Helm Packages",description:"If you wish to adopt the Terranetes pattern, then you need to convert your Terraform module into a Helm package before storing it in a Helm repository, which can then be integrated with, and accessed from, artifacthub.io.",source:"@site/docs/tf2helm/create-your-own-packages.md",sourceDirName:".",slug:"/create-your-own-packages",permalink:"/tf2helm/create-your-own-packages",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/tf2helm/create-your-own-packages.md",tags:[],version:"current",lastUpdatedBy:"Alastair Hinde",lastUpdatedAt:1686579314,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creating Helm Packages"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/tf2helm/"},next:{title:"Frequently Asked Questions",permalink:"/tf2helm/faqs"}},c={},s=[{value:"Automate Terraform to Helm conversion",id:"automate-terraform-to-helm-conversion",level:2},{value:"Convert a local Terraform module",id:"convert-a-local-terraform-module",level:3},{value:"Convert a remote Terraform module",id:"convert-a-remote-terraform-module",level:3}],m={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-your-own-helm-packages"},"Creating Your Own Helm Packages"),(0,o.kt)("p",null,"If you wish to adopt the Terranetes pattern, then you need to convert your Terraform module into a Helm package before storing it in a ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository/#hosting-chart-repositories"},"Helm repository"),", which can then be integrated with, and accessed from, ",(0,o.kt)("a",{parentName:"p",href:"https://artifacthub.io/"},"artifacthub.io"),"."),(0,o.kt)("p",null,"Each Helm package or chart must include the following files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 Chart.yaml              # A YAML file containing information about the chart\n\u251c\u2500\u2500 templates\n\u2502   \u251c\u2500\u2500 _helpers.tpl        # A file containing helper templates and partials\n\u2502   \u2514\u2500\u2500 CHART_NAME.yaml     # A Terraform Operator Custom Resource Definition Object\n\u2514\u2500\u2500 values.yaml             # Required and optional configuration values\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CHART_NAME.yaml")," file contains a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Kubernetes Custom Resource")," understood and managed by the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller"},"Appvia Terraform Controller")," component."),(0,o.kt)("h2",{id:"automate-terraform-to-helm-conversion"},"Automate Terraform to Helm conversion"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/tf2helm"},"tf2helm")," tool to automate the conversion of your Terraform module to a Helm package."),(0,o.kt)("h3",{id:"convert-a-local-terraform-module"},"Convert a local Terraform module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tf2helm --tf_module_path="path/to/local/terraform/module/appvia-tf-efs" --tf_version=1.1.7 --name=acp-tf-efs --version=0.1.0 --app_version=0.1.0 --output_dir=charts\n\u2714 Translate Terraform module\n\u2714 Create Helm Chart\n\u2714 Update Helm Chart with Terraform Custom Resource\n\ud83d\ude80 Helm Chart is available at charts/appvia-tf-efs\n')),(0,o.kt)("h3",{id:"convert-a-remote-terraform-module"},"Convert a remote Terraform module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'tf2helm --tf_module_url="https://github.com/terraform-aws-modules/terraform-aws-s3-bucket?ref=v3.1.0" --tf_version=1.1.7 --name=aws-s3-bucket --version=0.1.0 --app_version=0.1.0 --output_dir=charts\n\u2714 Download Terraform module\n\u2714 Translate Terraform module\n\u2714 Create Helm Chart\n\u2714 Update Helm Chart with Terraform Custom Resource\n\ud83d\ude80 Helm Chart is available at charts/aws-s3-bucket\n')))}p.isMDXComponent=!0}}]);