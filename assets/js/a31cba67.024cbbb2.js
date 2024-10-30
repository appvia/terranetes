"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9457],{4329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=n(4848),o=n(8453);const l={title:"tnctl workflow create"},i=void 0,c={id:"cli/tnctl_workflow_create",title:"tnctl workflow create",description:"tnctl workflow create",source:"@site/docs/terranetes-controller/cli/tnctl_workflow_create.md",sourceDirName:"cli",slug:"/cli/tnctl_workflow_create",permalink:"/terranetes-controller/cli/tnctl_workflow_create",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_workflow_create.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:173030469e4,frontMatter:{title:"tnctl workflow create"},sidebar:"tutorialSidebar",previous:{title:"tnctl workflow",permalink:"/terranetes-controller/cli/tnctl_workflow"}},s={},a=[{value:"tnctl workflow create",id:"tnctl-workflow-create",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"tnctl-workflow-create",children:"tnctl workflow create"}),"\n",(0,r.jsx)(t.p,{children:"Generates a workflow used to lint, validate and publish the module"}),"\n",(0,r.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"Can be used to generate an opinionate pipeline for terraform modules.\nThe module command will generate a Github actions pipeline, integrating\nlinting, validating and security checks."}),"\n",(0,r.jsx)(t.p,{children:"Generate a workflow for module\n$ tnctl workflow create PATH"}),"\n",(0,r.jsx)(t.p,{children:"You can override the location of the template via the configuration\nfile ${HOME}/.tnctl/config.yaml (or TNCTL_CONFIG). Just add the\nfollowing"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"workflow: URL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tnctl workflow create PATH [OPTIONS] [flags]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --ensure-naming-linting   Ensure the naming conventions of the repository (default true)\n  -h, --help                    help for create\n      --template string         Repository to use for the template (default "git::ssh://git@github.com/appvia/terranetes-workflows?ref=master")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../tnctl_workflow",children:"tnctl workflow"}),"\t - Can be used to generate a skelton CI pipeline"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);