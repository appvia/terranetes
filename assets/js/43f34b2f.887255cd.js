"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,v=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?o.createElement(v,l(l({ref:t},s),{},{components:r})):o.createElement(v,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={title:"tnctl approve cloudresource"},l=void 0,c={unversionedId:"cli/tnctl_approve_cloudresource",id:"cli/tnctl_approve_cloudresource",title:"tnctl approve cloudresource",description:"tnctl approve cloudresource",source:"@site/docs/terranetes-controller/cli/tnctl_approve_cloudresource.md",sourceDirName:"cli",slug:"/cli/tnctl_approve_cloudresource",permalink:"/terranetes-controller/cli/tnctl_approve_cloudresource",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_approve_cloudresource.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl approve cloudresource"},sidebar:"tutorialSidebar",previous:{title:"tnctl approve",permalink:"/terranetes-controller/cli/tnctl_approve"},next:{title:"tnctl approve configuration",permalink:"/terranetes-controller/cli/tnctl_approve_configuration"}},p={},i=[{value:"tnctl approve cloudresource",id:"tnctl-approve-cloudresource",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"tnctl-approve-cloudresource"},"tnctl approve cloudresource"),(0,n.kt)("p",null,"Approves a cloudresource for release"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Used to approve a terraform configuration and permit the\nconfiguration to move into the apply stage. This command\neffectively changes the terraform.appvia.io/apply annotation\nfrom 'false' to 'true'."),(0,n.kt)("p",null,"Approve one or more configurations\n$ tnctl approve configuration NAME"),(0,n.kt)("p",null,"Approve one or more cloudresource\n$ tnctl approve cloudresource NAME"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tnctl approve cloudresource [OPTIONS] NAME [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -h, --help               help for cloudresource\n  -n, --namespace string   Namespace of the resource/s (default "default")\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../tnctl_approve"},"tnctl approve"),"\t - Approves either a configuration or cloudresource")))}u.isMDXComponent=!0}}]);