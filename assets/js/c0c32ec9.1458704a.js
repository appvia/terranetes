"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2179],{7332:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=n(4848),o=n(8453);const i={title:"tnctl retry configuration"},c=void 0,s={id:"cli/tnctl_retry_configuration",title:"tnctl retry configuration",description:"tnctl retry configuration",source:"@site/docs/terranetes-controller/cli/tnctl_retry_configuration.md",sourceDirName:"cli",slug:"/cli/tnctl_retry_configuration",permalink:"/terranetes-controller/cli/tnctl_retry_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/cli/tnctl_retry_configuration.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,frontMatter:{title:"tnctl retry configuration"},sidebar:"tutorialSidebar",previous:{title:"tnctl retry cloudresource",permalink:"/terranetes-controller/cli/tnctl_retry_cloudresource"},next:{title:"tnctl search",permalink:"/terranetes-controller/cli/tnctl_search"}},l={},a=[{value:"tnctl retry configuration",id:"tnctl-retry-configuration",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"tnctl-retry-configuration",children:"tnctl retry configuration"}),"\n",(0,r.jsx)(e.p,{children:"Attempts to restart a configuration"}),"\n",(0,r.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(e.p,{children:"By default a Configuration is only run on a change to the specification. Its\nuseful however to be able to restart the process without changing the\nspec - i.e. the credentials were incorrect and out-of-band error occurred or\nso forth."}),"\n",(0,r.jsx)(e.p,{children:"This command will restart the process by tagging the configuration with a\nannotation. By default the restarted process will be watched for logs."}),"\n",(0,r.jsx)(e.p,{children:"Restart the Configuration:\n$ tnctl retry NAME"}),"\n",(0,r.jsx)(e.p,{children:"Restart the Configuration but do not watch the logs:\n$ tnctl retry NAME --watch=false"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"tnctl retry configuration [OPTIONS] NAME [flags]\n"})}),"\n",(0,r.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'  -h, --help               help for configuration\n  -n, --namespace string   The namespace the resource resides (default "default")\n  -w, --watch              Watch the logs after restarting the resource (default true)\n'})}),"\n",(0,r.jsx)(e.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'      --config string   Path to the configuration file (default "HOME/.tnctl.yaml")\n      --verbose         Enable verbose logging\n'})}),"\n",(0,r.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"../tnctl_retry",children:"tnctl retry"}),"\t - Attempts to trigger the resource to retry"]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function c(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);