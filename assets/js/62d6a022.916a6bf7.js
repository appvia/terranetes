"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),g=o,d=f["".concat(c,".").concat(g)]||f[g]||p[g]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const l={title:"tnctl logs configuration"},i=void 0,a={unversionedId:"cli/tnctl_logs_configuration",id:"cli/tnctl_logs_configuration",title:"tnctl logs configuration",description:"tnctl logs configuration",source:"@site/docs/terranetes-controller/cli/tnctl_logs_configuration.md",sourceDirName:"cli",slug:"/cli/tnctl_logs_configuration",permalink:"/terranetes-controller/cli/tnctl_logs_configuration",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_logs_configuration.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl logs configuration"},sidebar:"tutorialSidebar",previous:{title:"tnctl logs cloudresource",permalink:"/terranetes-controller/cli/tnctl_logs_cloudresource"},next:{title:"tnctl retry",permalink:"/terranetes-controller/cli/tnctl_retry"}},c={},s=[{value:"tnctl logs configuration",id:"tnctl-logs-configuration",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-logs-configuration"},"tnctl logs configuration"),(0,o.kt)("p",null,"Displays the latest logs for the given resource"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Retrieves and follows the logs from a cloudresource or native configuration"),(0,o.kt)("p",null,"Viewing the logs for a configuration\n$ tnctl logs configuration NAME --follow"),(0,o.kt)("p",null,"Viewing the logs for a cloudresource\n$ tnctl logs cloudresource NAME --follow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl logs configuration NAME [OPTIONS] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -f, --follow             Indicates we should follow the logs\n  -h, --help               help for configuration\n  -n, --namespace string   The namespace of the resource (default "default")\n      --stage string       Select the stage to show logs for, else defaults to the current state\n      --timeout duration   Indicates how long we should wait for logs to be available (default 3s)\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl_logs"},"tnctl logs"),"\t - Displays the latest logs for the resource")))}p.isMDXComponent=!0}}]);