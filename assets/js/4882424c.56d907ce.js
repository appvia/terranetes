"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[4104],{8892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(4848),i=n(8453);const s={sidebar_position:2},a="Using Private Repositories",o={id:"developer/private",title:"Using Private Repositories",description:"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace.",source:"@site/docs/terranetes-controller/developer/private.md",sourceDirName:"developer",slug:"/developer/private",permalink:"/terranetes-controller/developer/private",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/private.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1730449026e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Terranetes CLI",permalink:"/terranetes-controller/developer/tnctl"},next:{title:"Configuration Contexts",permalink:"/terranetes-controller/developer/contexts"}},c={},l=[{value:"Using SSH Authentication",id:"using-ssh-authentication",level:2},{value:"Using HTTP Authentication",id:"using-http-authentication",level:2},{value:"Using Token Authentication",id:"using-token-authentication",level:2},{value:"What sources are supported?",id:"what-sources-are-supported",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"using-private-repositories",children:"Using Private Repositories"})}),"\n",(0,r.jsx)(t.p,{children:"If the repository containing the terraform module is private and requires credentials to retrieve, you can add the authentication details to a secret held within the namespace."}),"\n",(0,r.jsx)(t.h2,{id:"using-ssh-authentication",children:"Using SSH Authentication"}),"\n",(0,r.jsx)(t.p,{children:"Let's assume we have a terraform module hosted in a private Github repository. Here's how to add authentication details:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create an SSH deployment key for the repository with the ability to clone."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a Kubernetes secret in the namespace containing the SSH private key."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ kubectl -n apps create secret generic ssh --from-file=SSH_AUTH_KEY=id.rsa\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the Terraform module configuration resource, setting the ",(0,r.jsx)(t.code,{children:"spec.auth.name: [NAME]"})," to the name of the secret:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  auth:\n    name: ssh\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Reference a git repository as the module source"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  module: git::ssh://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you need to extract a specific folder within the repository the syntax ",(0,r.jsx)(t.code,{children:"git::ssh://git@github.com/ORG/REPOSITORY//PATH?ref=<TAG|BRANCH|COMMIT>"})]})}),"\n",(0,r.jsx)(t.h2,{id:"using-http-authentication",children:"Using HTTP Authentication"}),"\n",(0,r.jsx)(t.p,{children:"Similar to the above, create a Kubernetes secret like so"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a Kubernetes secret containing the username and password"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"$ kubectl -n app create secret generic httpauth --from-literal=GIT_USERNAME=USERNAME --from-literal=GIT_PASSWORD=PASSWORD\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Update the ",(0,r.jsx)(t.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," to include the authentication reference"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  auth:\n    name: httpauth\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Reference the terraform module using http"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"spec:\n  module: https://git@github.com/ORG/REPOSITORY?ref=<TAG|BRANCH|COMMIT>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"using-token-authentication",children:"Using Token Authentication"}),"\n",(0,r.jsxs)(t.p,{children:["Use the same process as above, creating a Kubernetes secret ",(0,r.jsx)(t.code,{children:"TOKEN"})]}),"\n",(0,r.jsx)(t.h2,{id:"what-sources-are-supported",children:"What sources are supported?"}),"\n",(0,r.jsxs)(t.p,{children:["We use the same library as Terraform, ",(0,r.jsx)(t.a,{href:"https://github.com/hashicorp/go-getter",children:"go-getter"})," that supports:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Git"}),"\n",(0,r.jsx)(t.li,{children:"Mercurial"}),"\n",(0,r.jsx)(t.li,{children:"HTTP"}),"\n",(0,r.jsx)(t.li,{children:"Amazon S3"}),"\n",(0,r.jsx)(t.li,{children:"Google GCP"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For full details, see ",(0,r.jsx)(t.a,{href:"https://github.com/hashicorp/go-getter",children:"https://github.com/hashicorp/go-getter"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);