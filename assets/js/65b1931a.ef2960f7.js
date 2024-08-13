"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[1537],{7303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(4848),o=n(8453);const l={title:"tnctl create workflow"},i=void 0,a={id:"cli/tnctl_create_workflow",title:"tnctl create workflow",description:"tnctl create workflow",source:"@site/docs/terranetes-controller/cli/tnctl_create_workflow.md",sourceDirName:"cli",slug:"/cli/tnctl_create_workflow",permalink:"/terranetes-controller/cli/tnctl_create_workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_create_workflow.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:172356019e4,frontMatter:{title:"tnctl create workflow"},sidebar:"tutorialSidebar",previous:{title:"tnctl create revision",permalink:"/terranetes-controller/cli/tnctl_create_revision"},next:{title:"tnctl delete",permalink:"/terranetes-controller/cli/tnctl_delete"}},c={},s=[{value:"tnctl create workflow",id:"tnctl-create-workflow",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"tnctl-create-workflow",children:"tnctl create workflow"}),"\n",(0,r.jsx)(t.p,{children:"Generates a workflow used to lint, validate and publish the module"}),"\n",(0,r.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"Workflow provide an out of the box solution to generating ci\npipelines for your terraform modules. The pipelines are coded\nto enforce, linting, validation, documentation generation\nand security scanning. Also when enabled the pipeline will\nalso include a release."}),"\n",(0,r.jsx)(t.p,{children:"Can be used to generate an opinionate pipeline for terraform modules.\nThe module command will generate a Github actions pipeline, integrating\nlinting, validating and security checks."}),"\n",(0,r.jsx)(t.p,{children:"Generate a workflow for module\n$ tnctl create workflow PATH"}),"\n",(0,r.jsx)(t.p,{children:"You can override the location of the template via the configuration\nfile ${HOME}/.tnctl/config.yaml (or TNCTL_CONFIG). Just add the\nfollowing"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"workflow: URL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tnctl create workflow PATH [OPTIONS] [flags]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --ensure-naming-linting   Ensure the naming conventions of the repository (default true)\n  -h, --help                    help for workflow\n      --template string         Repository to use for the template (default "git::ssh://git@github.com/appvia/terranetes-workflows?ref=master")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../tnctl_create",children:"tnctl create"}),"\t - Used to create a resource"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);