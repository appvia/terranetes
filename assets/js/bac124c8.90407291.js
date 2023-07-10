"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"tnctl search"},i=void 0,l={unversionedId:"cli/tnctl_search",id:"cli/tnctl_search",title:"tnctl search",description:"tnctl search",source:"@site/docs/terranetes-controller/cli/tnctl_search.md",sourceDirName:"cli",slug:"/cli/tnctl_search",permalink:"/terranetes-controller/cli/tnctl_search",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_search.md",tags:[],version:"current",lastUpdatedBy:"Celeste",lastUpdatedAt:1688987168,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"tnctl search"},sidebar:"tutorialSidebar",previous:{title:"tnctl retry",permalink:"/terranetes-controller/cli/tnctl_retry"},next:{title:"tnctl state",permalink:"/terranetes-controller/cli/tnctl_state"}},s={},c=[{value:"tnctl search",id:"tnctl-search",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tnctl-search"},"tnctl search"),(0,a.kt)("p",null,"Searches for cloud resources to consume"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Searches the sources, determined by the configuration file (tnctl config view)\nfor modules which match the required terms. Once selected the command will\ngenerate the Configuration CRD required to use the module as a source."),(0,a.kt)("p",null,"At present we support using the Terraform registry and GitHub user / organizations\nas a source for terraform modules."),(0,a.kt)("p",null,"Note, you can lookup the available providers available to you by selecting the\n'check available' option. This option will use the currently configured kubeconfig\nto list providers available in that cluster."),(0,a.kt)("p",null,"Add the terraform registry\n$ tnctl config sources add ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io"},"https://registry.terraform.io")),(0,a.kt)("p",null,"Scope the terraform registry searches to a specific namespace\n$ tnctl config sources add ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/namespaces/appvia"},"https://registry.terraform.io/namespaces/appvia")),(0,a.kt)("p",null,"Adding a GitHub user or organization\n$ tnctl config sources add ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/appvia"},"https://github.com/appvia")),(0,a.kt)("h1",{id:"search-for-all-modules-which-have-the-term-database-using-an-aws-provider"},"Search for all modules which have the term database using an 'aws' provider"),(0,a.kt)("p",null,"$ tnctl search database -p aws"),(0,a.kt)("p",null,"Write the generated output to a file\n$ tnctl search -o filename"),(0,a.kt)("p",null,"For private repositories on Github you will need to export your token\nto the environment variable GITHUB_TOKEN.\n$ export GITHUB_TOKEN=TOKEN"),(0,a.kt)("p",null,"This command assumes credentials have already been setup. For the Terraform\nregistry, nothing is required, but for private repositories on Github your\nenvironment must already be setup to git clone the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tnctl search [OPTIONS] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --enable-defaults           Indicates any defaults with values from the terraform module are included\n  -h, --help                      help for search\n      --name string               Is the name of the resource to create\n  -o, --output string             Optional filename to write the generated configuration (defaults: stdout)\n  -p, --provider string           Limit the search only to modules with the given provider\n  -s, --source string             Limit the scope of the search to a specific source\n      --source-namespace string   The namespace within the source registry to scope the search\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../tnctl"},"tnctl"),"\t - Terranetes CLI tool")))}u.isMDXComponent=!0}}]);