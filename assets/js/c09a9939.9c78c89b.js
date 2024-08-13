"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[210],{4703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),o=n(8453);const i={title:"tnctl build"},l=void 0,a={id:"cli/tnctl_build",title:"tnctl build",description:"tnctl build",source:"@site/docs/terranetes-controller/cli/tnctl_build.md",sourceDirName:"cli",slug:"/cli/tnctl_build",permalink:"/terranetes-controller/cli/tnctl_build",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_build.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:172356019e4,frontMatter:{title:"tnctl build"},sidebar:"tutorialSidebar",previous:{title:"tnctl approve configuration",permalink:"/terranetes-controller/cli/tnctl_approve_configuration"},next:{title:"tnctl completion",permalink:"/terranetes-controller/cli/tnctl_completion"}},s={},c=[{value:"tnctl build",id:"tnctl-build",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"tnctl-build",children:"tnctl build"}),"\n",(0,r.jsx)(t.p,{children:"Can be used to package up the terraform module for consumption"}),"\n",(0,r.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.p,{children:"Build is used to automatically generate a compatible terraform\nconfiguration from a given terraform module. The source for the\nmodule can be a local directory, a git repository, s3 bucket or\nso forth. As long as you have the credentials and required CLI\nbinaries installed."}),"\n",(0,r.jsx)(t.p,{children:"Generate a terraform configuration a Github repository\n$ tnctl build github.com/terraform-aws-modules/terraform-aws-vpc"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tnctl build SOURCE [OPTIONS] [flags]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --enable-auto-approval     Automatically approve the configuration\n      --enable-defaults          Indicates any defaults with values from the terraform module are included (default true)\n      --enable-drift-detection   Detect drift in the configuration (default true)\n      --enable-sensitive         Indicates any sensitive variables from the module should be placed into secrets (default true)\n  -h, --help                     help for build\n      --name string              The name of the configuration resource (default "test")\n      --namespace string         The namespace for the configuration (default "default")\n      --provider string          Name of the credentials provider to use\n      --secret string            Name of the secret any outputs from the resource are kept\n      --source string            The path to the terraform module (default ".")\n'})}),"\n",(0,r.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../tnctl",children:"tnctl"}),"\t - Terranetes CLI tool"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);