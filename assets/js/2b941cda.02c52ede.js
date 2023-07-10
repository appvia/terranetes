"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[4605],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=s(r),d=o,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(y,a(a({ref:e},p),{},{components:r})):n.createElement(y,a({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5141:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const l={title:"tnctl retry"},a=void 0,i={unversionedId:"cli/tnctl_retry",id:"cli/tnctl_retry",title:"tnctl retry",description:"tnctl retry",source:"@site/docs/terranetes-controller/cli/tnctl_retry.md",sourceDirName:"cli",slug:"/cli/tnctl_retry",permalink:"/terranetes-controller/cli/tnctl_retry",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_retry.md",tags:[],version:"current",lastUpdatedBy:"Celeste",lastUpdatedAt:1688987168,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"tnctl retry"},sidebar:"tutorialSidebar",previous:{title:"tnctl logs",permalink:"/terranetes-controller/cli/tnctl_logs"},next:{title:"tnctl search",permalink:"/terranetes-controller/cli/tnctl_search"}},c={},s=[{value:"tnctl retry",id:"tnctl-retry",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-retry"},"tnctl retry"),(0,o.kt)("p",null,"Attempts to restart a configuration"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"By default a Configuration is only run on a change to the specification. Its\nuseful however to be able to restart the process without changing the\nspec - i.e. the credentials were incorrect and out-of-band error occurred or\nso forth."),(0,o.kt)("p",null,"This command will restart the process by tagging the configuration with a\nannotation. By default the restarted process will be watched for logs."),(0,o.kt)("p",null,"Restart the Configuration:\n$ tnctl retry NAME"),(0,o.kt)("p",null,"Restart the Configuration but do not watch the logs:\n$ tnctl retry NAME --watch=false"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl retry [OPTIONS] NAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help               help for retry\n  -n, --namespace string   The namespace the configuration resides (default "default")\n  -w, --watch              Watch the logs after restarting the configuration (default true)\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl"},"tnctl"),"\t - Terranetes CLI tool")))}u.isMDXComponent=!0}}]);