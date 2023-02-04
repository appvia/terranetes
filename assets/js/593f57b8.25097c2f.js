"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,b=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={title:"tnctl kubectl plugin"},o=void 0,c={unversionedId:"cli/tnctl_kubectl_plugin",id:"cli/tnctl_kubectl_plugin",title:"tnctl kubectl plugin",description:"tnctl kubectl plugin",source:"@site/docs/terranetes-controller/cli/tnctl_kubectl_plugin.md",sourceDirName:"cli",slug:"/cli/tnctl_kubectl_plugin",permalink:"/terranetes-controller/cli/tnctl_kubectl_plugin",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_kubectl_plugin.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675516780,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"tnctl kubectl plugin"},sidebar:"tutorialSidebar",previous:{title:"tnctl kubectl",permalink:"/terranetes-controller/cli/tnctl_kubectl"},next:{title:"tnctl logs",permalink:"/terranetes-controller/cli/tnctl_logs"}},a={},u=[{value:"tnctl kubectl plugin",id:"tnctl-kubectl-plugin",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tnctl-kubectl-plugin"},"tnctl kubectl plugin"),(0,l.kt)("p",null,"Generates the kubectl plugin integration"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("p",null,"This command is used to integrate the tnctl command as a kubectl\nplugin. It effectively generates a series of shortcuts that are\ncalled from kubectl. You need to ensure the scripts this command\ngenerates are included your $PATH, long with the location of the\ntnctl command."),(0,l.kt)("h1",{id:"create-the-kubectl-plugins-defaults-to-homebin"},"Create the kubectl plugins (defaults to ${HOME}/bin)"),(0,l.kt)("p",null,"$ tnctl kubectl plugin"),(0,l.kt)("h1",{id:"place-the-plugins-scripts-in-another-directory"},"Place the plugins scripts in another directory"),(0,l.kt)("p",null,"$ tnctl kubectl plugin -d ${GOPATH}/bin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tnctl kubectl plugin [OPTIONS] [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'  -d, --directory string   Directory to place the kubectl plugins shortcuts (default "/home/jest/bin")\n  -h, --help               help for plugin\n')),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tnctl_kubectl"},"tnctl kubectl"),"\t - Kubectl plugin related commands")))}s.isMDXComponent=!0}}]);