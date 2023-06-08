"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={title:"tnctl workflow create"},a=void 0,i={unversionedId:"cli/tnctl_workflow_create",id:"cli/tnctl_workflow_create",title:"tnctl workflow create",description:"tnctl workflow create",source:"@site/docs/terranetes-controller/cli/tnctl_workflow_create.md",sourceDirName:"cli",slug:"/cli/tnctl_workflow_create",permalink:"/terranetes-controller/cli/tnctl_workflow_create",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_workflow_create.md",tags:[],version:"current",lastUpdatedBy:"Alastair Hinde",lastUpdatedAt:1686213818,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{title:"tnctl workflow create"},sidebar:"tutorialSidebar",previous:{title:"tnctl workflow",permalink:"/terranetes-controller/cli/tnctl_workflow"}},c={},p=[{value:"tnctl workflow create",id:"tnctl-workflow-create",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-workflow-create"},"tnctl workflow create"),(0,o.kt)("p",null,"Generates a workflow used to lint, validate and publish the module"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Can be used to generate an opinionate pipeline for terraform modules.\nThe module command will generate a Github actions pipeline, integrating\nlinting, validating and security checks."),(0,o.kt)("p",null,"Generate a workflow for module\n$ tnctl workflow create PATH"),(0,o.kt)("p",null,"You can override the location of the template via the configuration\nfile ${HOME}/.tnctl/config.yaml (or TNCTL_CONFIG). Just add the\nfollowing"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"workflow: URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl workflow create PATH [OPTIONS] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --ensure-naming-linting   Ensure the naming conventions of the repository (default true)\n  -h, --help                    help for create\n      --template string         Repository to use for the template (default "git::ssh://git@github.com/appvia/terranetes-workflows?ref=master")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl_workflow"},"tnctl workflow"),"\t - Can be used to generate a skelton CI pipeline")))}u.isMDXComponent=!0}}]);