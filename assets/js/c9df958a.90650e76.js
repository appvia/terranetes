"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[5220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||l;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const l={title:"tnctl completion zsh"},i=void 0,c={unversionedId:"cli/tnctl_completion_zsh",id:"cli/tnctl_completion_zsh",title:"tnctl completion zsh",description:"tnctl completion zsh",source:"@site/docs/terranetes-controller/cli/tnctl_completion_zsh.md",sourceDirName:"cli",slug:"/cli/tnctl_completion_zsh",permalink:"/terranetes-controller/cli/tnctl_completion_zsh",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_completion_zsh.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1684430264,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"tnctl completion zsh"},sidebar:"tutorialSidebar",previous:{title:"tnctl completion powershell",permalink:"/terranetes-controller/cli/tnctl_completion_powershell"},next:{title:"tnctl config",permalink:"/terranetes-controller/cli/tnctl_config"}},a={},p=[{value:"tnctl completion zsh",id:"tnctl-completion-zsh",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Linux:",id:"linux",level:4},{value:"macOS:",id:"macos",level:4},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tnctl-completion-zsh"},"tnctl completion zsh"),(0,r.kt)("p",null,"Generate the autocompletion script for zsh"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Generate the autocompletion script for the zsh shell."),(0,r.kt)("p",null,"If shell completion is not already enabled in your environment you will need\nto enable it.  You can execute the following once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),(0,r.kt)("p",null,"To load completions in your current shell session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"source <(tnctl completion zsh); compdef _tnctl tnctl\n")),(0,r.kt)("p",null,"To load completions for every new session, execute once:"),(0,r.kt)("h4",{id:"linux"},"Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'tnctl completion zsh > "${fpath[1]}/_tnctl"\n')),(0,r.kt)("h4",{id:"macos"},"macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tnctl completion zsh > $(brew --prefix)/share/zsh/site-functions/_tnctl\n")),(0,r.kt)("p",null,"You will need to start a new shell for this setup to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tnctl completion zsh [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help              help for zsh\n      --no-descriptions   disable completion descriptions\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../tnctl_completion"},"tnctl completion"),"\t - Generate the autocompletion script for the specified shell")))}u.isMDXComponent=!0}}]);