"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"tnctl search"},i=void 0,s={unversionedId:"cli/tnctl_search",id:"cli/tnctl_search",title:"tnctl search",description:"tnctl search",source:"@site/docs/terranetes-controller/cli/tnctl_search.md",sourceDirName:"cli",slug:"/cli/tnctl_search",permalink:"/terranetes-controller/cli/tnctl_search",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_search.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1674498654,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{title:"tnctl search"},sidebar:"tutorialSidebar",previous:{title:"tnctl logs",permalink:"/terranetes-controller/cli/tnctl_logs"},next:{title:"tnctl workflow",permalink:"/terranetes-controller/cli/tnctl_workflow"}},l={},c=[{value:"tnctl search",id:"tnctl-search",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-search"},"tnctl search"),(0,o.kt)("p",null,"Searches for cloud resources to consume"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Searches the sources, determined by the configuration file (tnctl config view)\nfor modules which match the required terms. Once selected the command will\ngenerate the Configuration CRD required to use the module as a source."),(0,o.kt)("p",null,"At present we support using the Terraform registry and GitHub user / organizations\nas a source for terraform modules."),(0,o.kt)("p",null,"Add the terraform registry\n$ tnctl config sources add ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io"},"https://registry.terraform.io")),(0,o.kt)("p",null,"Scope the terraform registry searches to a specific namespace\n$ tnctl config sources add ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/appvia"},"https://registry.terraform.io/namespaces/appvia")),(0,o.kt)("p",null,"Adding a GitHub user or organization\n$ tnctl config sources add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia"},"https://github.com/appvia")),(0,o.kt)("p",null,"Write the generated output to a file\n$ tnctl search -o filename"),(0,o.kt)("p",null,"For private repositories on Github you will need to export your token\nto the environment variable GITHUB_TOKEN.\n$ export GITHUB_TOKEN=TOKEN"),(0,o.kt)("p",null,"This command assumes credentials have already been setup. For the Terraform\nregistry, nothing is required, but for private repositories on Github your\nenvironment must already be setup to git clone the repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl search [OPTIONS] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --enable-defaults           Indicates any defaults with values from the terraform module are included\n  -h, --help                      help for search\n      --name string               Is the name of the resource to create\n  -o, --output string             Optional filename to write the generated configuration (defaults: stdout)\n  -p, --provider string           Limit the search only to modules with the given provider\n  -s, --source string             Limit the scope of the search to a specific source\n      --source-namespace string   The namespace within the source registry to scope the search\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl"},"tnctl"),"\t - Terranetes CLI tool")))}u.isMDXComponent=!0}}]);