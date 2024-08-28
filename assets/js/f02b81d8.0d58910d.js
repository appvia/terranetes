"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[8364],{6170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(4848),o=t(8453);const i={title:"tnctl convert revision"},c=void 0,l={id:"cli/tnctl_convert_revision",title:"tnctl convert revision",description:"tnctl convert revision",source:"@site/docs/terranetes-controller/cli/tnctl_convert_revision.md",sourceDirName:"cli",slug:"/cli/tnctl_convert_revision",permalink:"/terranetes-controller/cli/tnctl_convert_revision",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_convert_revision.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,frontMatter:{title:"tnctl convert revision"},sidebar:"tutorialSidebar",previous:{title:"tnctl convert configuration",permalink:"/terranetes-controller/cli/tnctl_convert_configuration"},next:{title:"tnctl create",permalink:"/terranetes-controller/cli/tnctl_create"}},s={},a=[{value:"tnctl convert revision",id:"tnctl-convert-revision",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"tnctl-convert-revision",children:"tnctl convert revision"}),"\n",(0,r.jsx)(n.p,{children:"Used to convert revision back to terraform"}),"\n",(0,r.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.p,{children:"Provides the ability to convert configurations and cloudresources back\ninto terraform modules."}),"\n",(0,r.jsx)(n.p,{children:"Note, if you include --include-provider or --include-checkov, this\ncommand will use the current kubeconfig context to retrieve the provider\nand checkov policy from the cluster."}),"\n",(0,r.jsx)(n.p,{children:"Convert a configuration in the cluster into a terraform module:\n$ tnctl convert configuration -n my-namespace my-configuration"}),"\n",(0,r.jsx)(n.p,{children:"Convert a configuration file into a terraform module:\n$ tnctl convert configuration -f my-configuration.yaml"}),"\n",(0,r.jsx)(n.p,{children:"Convert a cloudresource in the cluster into a terraform module:\n$ tnctl convert cloudresource -n my-namespace my-cloudresource"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"tnctl convert revision [OPTIONS] [NAME|--file PATH] [flags]\n"})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  -f, --file string         The path to the file containing the revision\n  -h, --help                help for revision\n      --include-checkov     Include checkov in the output (default true)\n      --include-provider    Include provider in the output (default true)\n      --include-terraform   Include terraform in the output (default true)\n  -n, --namespace string    The namespace of the revision\n  -p, --path string         The path to write the files to (default ".")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../tnctl_convert",children:"tnctl convert"}),"\t - Used to convert between different formats"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(6540);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);