"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=l,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const o={title:"tnctl logs"},a=void 0,i={unversionedId:"cli/tnctl_logs",id:"cli/tnctl_logs",title:"tnctl logs",description:"tnctl logs",source:"@site/docs/terranetes-controller/cli/tnctl_logs.md",sourceDirName:"cli",slug:"/cli/tnctl_logs",permalink:"/terranetes-controller/cli/tnctl_logs",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_logs.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1708602075,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl logs"},sidebar:"tutorialSidebar",previous:{title:"tnctl kubectl plugin",permalink:"/terranetes-controller/cli/tnctl_kubectl_plugin"},next:{title:"tnctl logs cloudresource",permalink:"/terranetes-controller/cli/tnctl_logs_cloudresource"}},c={},s=[{value:"tnctl logs",id:"tnctl-logs",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tnctl-logs"},"tnctl logs"),(0,l.kt)("p",null,"Displays the latest logs for the resource"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"Retrieves and follows the logs from a cloudresource or native configuration"),(0,l.kt)("p",null,"Viewing the logs for a configuration\n$ tnctl logs configuration NAME --follow"),(0,l.kt)("p",null,"Viewing the logs for a cloudresource\n$ tnctl logs cloudresource NAME --follow"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -h, --help   help for logs\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tnctl"},"tnctl"),"\t - Terranetes CLI tool"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tnctl_logs_cloudresource"},"tnctl logs cloudresource"),"\t - Displays the latest logs for the given resource"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tnctl_logs_configuration"},"tnctl logs configuration"),"\t - Displays the latest logs for the given resource")))}u.isMDXComponent=!0}}]);