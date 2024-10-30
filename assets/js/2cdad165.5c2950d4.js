"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2257],{6248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(4848),o=n(8453);const s={title:"tnctl config sources add"},i=void 0,c={id:"cli/tnctl_config_sources_add",title:"tnctl config sources add",description:"tnctl config sources add",source:"@site/docs/terranetes-controller/cli/tnctl_config_sources_add.md",sourceDirName:"cli",slug:"/cli/tnctl_config_sources_add",permalink:"/terranetes-controller/cli/tnctl_config_sources_add",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_config_sources_add.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:173030469e4,frontMatter:{title:"tnctl config sources add"},sidebar:"tutorialSidebar",previous:{title:"tnctl config sources",permalink:"/terranetes-controller/cli/tnctl_config_sources"},next:{title:"tnctl config sources list",permalink:"/terranetes-controller/cli/tnctl_config_sources_list"}},l={},a=[{value:"tnctl config sources add",id:"tnctl-config-sources-add",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"tnctl-config-sources-add",children:"tnctl config sources add"}),"\n",(0,r.jsx)(t.p,{children:"Adds a terraform module source to the configuration"}),"\n",(0,r.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"Sources are the URL locations for terraform modules. By default if\nno sources are defined we use the public terraform registry. We currently\nsupport aggregating modules from any terraform registry and Github."}),"\n",(0,r.jsxs)(t.p,{children:["Add a terraform registry to the source\n$ tnctl config sources add ",(0,r.jsx)(t.a,{href:"https://registry.terraform.io",children:"https://registry.terraform.io"})]}),"\n",(0,r.jsx)(t.p,{children:"Add a Github organization or user to the source\n$ tnctl config sources add github.com/appvia/terranetes-controller"}),"\n",(0,r.jsx)(t.p,{children:"Note, skipping the name github organization or user requires your GITHUB_TOKEN\nis exported as the CLI will use this to authenticate to the github and\nsearch any repositories you are a member, contributor or owner of."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tnctl config sources add SOURCE [flags]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"  -h, --help   help for add\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../tnctl_config_sources",children:"tnctl config sources"}),"\t - Used to manage the sources of the terraform modules"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);