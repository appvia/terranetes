"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[6037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||l;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={title:"tnctl"},o=void 0,c={unversionedId:"cli/tnctl",id:"cli/tnctl",title:"tnctl",description:"tnctl",source:"@site/docs/terranetes-controller/cli/tnctl.md",sourceDirName:"cli",slug:"/cli/tnctl",permalink:"/terranetes-controller/cli/tnctl",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1689676832,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{title:"tnctl"},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/terranetes-controller/category/cli-reference"},next:{title:"tnctl approve",permalink:"/terranetes-controller/cli/tnctl_approve"}},i={},p=[{value:"tnctl",id:"tnctl",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tnctl"},"tnctl"),(0,a.kt)("p",null,"Terranetes CLI tool"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Provides a toolset for both the platform team and developers to work\nseemlessly with the terranetes framework. The CLI can be used to view,\napprove configurations, package up terraform modules for consumption and\npermit developers to search for resources to consume."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tnctl [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n  -h, --help            help for tnctl\n      --verbose         Enable verbose logging\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_approve"},"tnctl approve"),"\t - Approves a terraform configuration for release"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_build"},"tnctl build"),"\t - Can be used to package up the terraform module for consumption"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_completion"},"tnctl completion"),"\t - Generate the autocompletion script for the specified shell"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_config"},"tnctl config"),"\t - Used to manage the CLI configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_convert"},"tnctl convert"),"\t - Used to convert between different formats"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_describe"},"tnctl describe"),"\t - Used to describe the current state of the configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_kubectl"},"tnctl kubectl"),"\t - Kubectl plugin related commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_logs"},"tnctl logs"),"\t - Displays the latest logs for the given Configuration name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_retry"},"tnctl retry"),"\t - Attempts to restart a configuration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_search"},"tnctl search"),"\t - Searches for cloud resources to consume"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_state"},"tnctl state"),"\t - Used to manage the Terraform Configuration state secrets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl_workflow"},"tnctl workflow"),"\t - Can be used to generate a skelton CI pipeline")))}u.isMDXComponent=!0}}]);