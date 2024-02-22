"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"tnctl create revision"},a=void 0,l={unversionedId:"cli/tnctl_create_revision",id:"cli/tnctl_create_revision",title:"tnctl create revision",description:"tnctl create revision",source:"@site/docs/terranetes-controller/cli/tnctl_create_revision.md",sourceDirName:"cli",slug:"/cli/tnctl_create_revision",permalink:"/terranetes-controller/cli/tnctl_create_revision",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_create_revision.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",frontMatter:{title:"tnctl create revision"},sidebar:"tutorialSidebar",previous:{title:"tnctl create configuration",permalink:"/terranetes-controller/cli/tnctl_create_configuration"},next:{title:"tnctl create workflow",permalink:"/terranetes-controller/cli/tnctl_create_workflow"}},c={},s=[{value:"tnctl create revision",id:"tnctl-create-revision",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-create-revision"},"tnctl create revision"),(0,o.kt)("p",null,"Used to create terranetes revision from a terraform module"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Create a terranetes revision from a terraform module. The command will\nretrieve the module code if required, parse the attributes from the code\nand build a plan."),(0,o.kt)("p",null,"Create a terranetes revision from the current directory\n$ tnctl create revision ."),(0,o.kt)("p",null,"Create a terranetes revision from a terraform module in a git repository\n$ tnctl create revision -n test.01 -m ",(0,o.kt)("a",{parentName:"p",href:"https://examples.com/terraform-module.git?ref=v1.0.0"},"https://examples.com/terraform-module.git?ref=v1.0.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl create revision [OPTIONS] MODULE [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --description string         A human readable description of the revision and what is provides\n      --enable-default-variables   Indicates if include variables which have defaults from the terraform module (default true)\n  -f, --file string                The path to save the revision to\n  -h, --help                       help for revision\n  -n, --name string                This name of the revision\n      --provider string            The name of the terranetes provider to use (default "aws")\n  -r, --revision string            The semvar version of this revision\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl_create"},"tnctl create"),"\t - Used to create a resource")))}u.isMDXComponent=!0}}]);