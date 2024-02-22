"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[5160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"tnctl create cloudresource"},c=void 0,l={unversionedId:"cli/tnctl_create_cloudresource",id:"cli/tnctl_create_cloudresource",title:"tnctl create cloudresource",description:"tnctl create cloudresource",source:"@site/docs/terranetes-controller/cli/tnctl_create_cloudresource.md",sourceDirName:"cli",slug:"/cli/tnctl_create_cloudresource",permalink:"/terranetes-controller/cli/tnctl_create_cloudresource",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_create_cloudresource.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl create cloudresource"},sidebar:"tutorialSidebar",previous:{title:"tnctl create",permalink:"/terranetes-controller/cli/tnctl_create"},next:{title:"tnctl create configuration",permalink:"/terranetes-controller/cli/tnctl_create_configuration"}},i={},s=[{value:"tnctl create cloudresource",id:"tnctl-create-cloudresource",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-create-cloudresource"},"tnctl create cloudresource"),(0,o.kt)("p",null,"Used to create a cloud resource from a plan"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Create a terranetes revision from a terraform module. The command will\nretrieve the module code if required, parse the attributes from the code\nand build a plan."),(0,o.kt)("p",null,"Create a terranetes revision from the current directory\n$ tnctl create revision ."),(0,o.kt)("p",null,"Create a terranetes revision from a terraform module in a git repository\n$ tnctl create revision -n test.01 -m ",(0,o.kt)("a",{parentName:"p",href:"https://examples.com/terraform-module.git?ref=v1.0.0"},"https://examples.com/terraform-module.git?ref=v1.0.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl create cloudresource [OPTIONS] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -f, --filename string   The name of the file to write the cloud resource to\n  -h, --help              help for cloudresource\n      --plan string       The name of the plan to use\n      --revision string   The semvar version of this revision\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl_create"},"tnctl create"),"\t - Used to create a resource")))}p.isMDXComponent=!0}}]);