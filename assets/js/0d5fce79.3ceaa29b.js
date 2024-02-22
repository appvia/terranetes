"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2585],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=c(n),d=l,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8100:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"tnctl state list"},o=void 0,i={unversionedId:"cli/tnctl_state_list",id:"cli/tnctl_state_list",title:"tnctl state list",description:"tnctl state list",source:"@site/docs/terranetes-controller/cli/tnctl_state_list.md",sourceDirName:"cli",slug:"/cli/tnctl_state_list",permalink:"/terranetes-controller/cli/tnctl_state_list",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_state_list.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708601991,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl state list"},sidebar:"tutorialSidebar",previous:{title:"tnctl state clean",permalink:"/terranetes-controller/cli/tnctl_state_clean"},next:{title:"tnctl verify",permalink:"/terranetes-controller/cli/tnctl_verify"}},s={},c=[{value:"tnctl state list",id:"tnctl-state-list",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"tnctl-state-list"},"tnctl state list"),(0,l.kt)("p",null,"Listing all the configurations in the cluster and the current state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tnctl state list [OPTIONS] [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --controller-namespace string   The namespace the controller is running in (default "terraform-system")\n  -h, --help                          help for list\n      --namespace string              The namespace to list the configurations, defaults to all\n')),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../tnctl_state"},"tnctl state"),"\t - Used to manage the Terraform Configuration state secrets")))}u.isMDXComponent=!0}}]);