"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={title:"tnctl completion bash"},i=void 0,a={unversionedId:"cli/tnctl_completion_bash",id:"cli/tnctl_completion_bash",title:"tnctl completion bash",description:"tnctl completion bash",source:"@site/docs/terranetes-controller/cli/tnctl_completion_bash.md",sourceDirName:"cli",slug:"/cli/tnctl_completion_bash",permalink:"/terranetes-controller/cli/tnctl_completion_bash",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_completion_bash.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1681469322,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{title:"tnctl completion bash"},sidebar:"tutorialSidebar",previous:{title:"tnctl completion",permalink:"/terranetes-controller/cli/tnctl_completion"},next:{title:"tnctl completion fish",permalink:"/terranetes-controller/cli/tnctl_completion_fish"}},c={},p=[{value:"tnctl completion bash",id:"tnctl-completion-bash",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"tnctl-completion-bash"},"tnctl completion bash"),(0,o.kt)("p",null,"Generate the autocompletion script for bash"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Generate the autocompletion script for the bash shell."),(0,o.kt)("p",null,"This script depends on the 'bash-completion' package.\nIf it is not installed already, you can install it via your OS's package manager."),(0,o.kt)("p",null,"To load completions in your current shell session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source <(tnctl completion bash)\n")),(0,o.kt)("p",null,"To load completions for every new session, execute once:"),(0,o.kt)("h4",{id:"linux"},"Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl completion bash > /etc/bash_completion.d/tnctl\n")),(0,o.kt)("h4",{id:"macos"},"macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl completion bash > $(brew --prefix)/etc/bash_completion.d/tnctl\n")),(0,o.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tnctl completion bash\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help              help for bash\n      --no-descriptions   disable completion descriptions\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../tnctl_completion"},"tnctl completion"),"\t - Generate the autocompletion script for the specified shell")))}m.isMDXComponent=!0}}]);