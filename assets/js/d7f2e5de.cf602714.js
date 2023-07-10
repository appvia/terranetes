"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[89],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={title:"tnctl describe"},i=void 0,l={unversionedId:"cli/tnctl_describe",id:"cli/tnctl_describe",title:"tnctl describe",description:"tnctl describe",source:"@site/docs/terranetes-controller/cli/tnctl_describe.md",sourceDirName:"cli",slug:"/cli/tnctl_describe",permalink:"/terranetes-controller/cli/tnctl_describe",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_describe.md",tags:[],version:"current",lastUpdatedBy:"Celeste",lastUpdatedAt:1688987168,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"tnctl describe"},sidebar:"tutorialSidebar",previous:{title:"tnctl convert configuration",permalink:"/terranetes-controller/cli/tnctl_convert_configuration"},next:{title:"tnctl kubectl",permalink:"/terranetes-controller/cli/tnctl_kubectl"}},a={},s=[{value:"tnctl describe",id:"tnctl-describe",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-describe"},"tnctl describe"),(0,o.kt)("p",null,"Used to describe the current state of the configuration"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Retrieves the definition and current state of one or more of the\nterraform configurations, displaying in a human friendly format.\nThe command also extracts any integration details which have been\nproduced by infracosts or checkov scans."),(0,o.kt)("p",null,"Describe all configurations in a namespace\n$ tnctl describe -n apps"),(0,o.kt)("p",null,"Describe a single configuration called 'test'\n$ tnctl describe -n apps test"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl describe [NAME...] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help                 help for describe\n  -n, --namespace string     Namespace of the resource/s (default "default")\n      --show-passed-checks   Indicates we should show passed checks (default true)\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl"},"tnctl"),"\t - Terranetes CLI tool")))}d.isMDXComponent=!0}}]);