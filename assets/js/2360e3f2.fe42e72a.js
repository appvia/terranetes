"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[8560],{2642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(4848),r=n(8453);const a={sidebar_position:90},i="Customize Job Template",l={id:"admin/template",title:"Customize Job Template",description:"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this here.",source:"@site/docs/terranetes-controller/admin/template.md",sourceDirName:"admin",slug:"/admin/template",permalink:"/terranetes-controller/admin/template",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/template.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:173030469e4,sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Kubernetes RBAC",permalink:"/terranetes-controller/admin/rbac"},next:{title:"Additional Secrets",permalink:"/terranetes-controller/admin/secrets"}},s={},c=[{value:"Overriding the template",id:"overriding-the-template",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"customize-job-template",children:"Customize Job Template"})}),"\n",(0,o.jsxs)(t.p,{children:["When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this ",(0,o.jsx)(t.a,{href:"https://github.com/appvia/terranetes-controller/blob/master/pkg/assets/job.yaml.tpl",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"overriding-the-template",children:"Overriding the template"}),"\n",(0,o.jsx)(t.p,{children:"While not required in the vast majority of cases this template can be overridden, allowing platform engineers to customize the pipeline. You might want to:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Add a notification on failed configuration, or send a notification when a configuration fails policy."}),"\n",(0,o.jsxs)(t.li,{children:["Add a new feature into the pipeline such as swapping out the default ",(0,o.jsx)(t.a,{href:"https://www.checkov.io",children:"checkov"})," for another policy engine."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"You can change the template by uploading a configmap into the namespace where the controller lives:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"# create the template configmap (note the key name of job.yaml)\n$ kubectl -n terraform-system create configmap template --from-file=job.yaml=<PATH>\n\n# update the helm values to override the template\ncontroller:\n  templates:\n    job: <NAME_OF_CONFIG_MAP>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);