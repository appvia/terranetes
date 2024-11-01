"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[8601],{5907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(4848),a=n(8453);const s={sidebar_position:5},o="Terraform State",i={id:"admin/state",title:"Terraform State",description:"Terraform stores state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures. For a detailed understanding of terraform state, please visit the official docs.",source:"@site/docs/terranetes-controller/admin/state.md",sourceDirName:"admin",slug:"/admin/state",permalink:"/terranetes-controller/admin/state",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/state.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1730449026e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Drift Detection",permalink:"/terranetes-controller/admin/drift"},next:{title:"Kubernetes RBAC",permalink:"/terranetes-controller/admin/rbac"}},c={},l=[{value:"Where is the state?",id:"where-is-the-state",level:3},{value:"How to change state backend?",id:"how-to-change-state-backend",level:3},{value:"Create a template for the backend to use",id:"create-a-template-for-the-backend-to-use",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"terraform-state",children:"Terraform State"})}),"\n",(0,r.jsxs)(t.p,{children:["Terraform stores state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures. For a detailed understanding of terraform state, please visit ",(0,r.jsx)(t.a,{href:"https://www.terraform.io/language/state",children:"the official docs"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"where-is-the-state",children:"Where is the state?"}),"\n",(0,r.jsxs)(t.p,{children:["By default the terraform state for all ",(0,r.jsx)(t.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," is stored in ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Kubernetes secrets"})," located in the controller namespace. The following template is used as the backend."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Namespace is always the controller namespace."}),"\n",(0,r.jsxs)(t.li,{children:["Suffix is the ",(0,r.jsx)(t.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," UUID."]}),"\n",(0,r.jsxs)(t.li,{children:["Note the ",(0,r.jsx)(t.a,{href:"https://www.terraform.io/language/settings/backends/kubernetes",children:"kubernetes backend"})," adds a prefix ",(0,r.jsx)(t.code,{children:"tfstate-"})," so the state secrets will be named ",(0,r.jsx)(t.code,{children:"tfstate-UUID"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'var backendTF = `\nterraform {\n  backend "kubernetes" {\n    in_cluster_config = true\n    namespace         = "{{ .controller.namespace }}"\n    secret_suffix     = "{{ .controller.suffix }}"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"how-to-change-state-backend",children:"How to change state backend?"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Note the ability to override the backend is only available with version >= v0.3.1"})}),"\n",(0,r.jsx)(t.p,{children:"While using Kubernetes as a backend has it's benefits in terms of ease of use, there's a few downsides as well."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"You need to ensure backups are performed on the state secrets."}),"\n",(0,r.jsx)(t.li,{children:"Its harder operate or manipulate the terraform state, using taints for example."}),"\n",(0,r.jsx)(t.li,{children:"The terraform state is not versioned so rollbacks are harder to performed."}),"\n",(0,r.jsxs)(t.li,{children:["You are unable to reference the state using ",(0,r.jsx)(t.a,{href:"https://www.terraform.io/language/state/remote-state-data",children:"remote_state_data"})," resource."]}),"\n",(0,r.jsx)(t.li,{children:"The terraform state is ultimately bound to the Cluster."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Platform administrators can change the backend using the following steps."}),"\n",(0,r.jsx)(t.h4,{id:"create-a-template-for-the-backend-to-use",children:"Create a template for the backend to use"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a kubernetes secret in the controller namespace containing the template"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'cat <<EOF > backend.tf\nterraform {\n  backend "s3" {\n    bucket     = "terranetes-controller-state"\n    key        = "cluster_one/{{ .namespace }}/{{ .name }}"\n    region     = "eu-west-2"\n    access_key = "AWS_ACCESS_KEY_ID"\n    secret_key = "AWS_SECRET_ACCESS_KEY"\n  }\n}\nEOF\n'})}),"\n",(0,r.jsx)(t.p,{children:"Note the template can reference a number variables"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"controller.namespace"})," is the namespace where the terranetes-controller is running."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"controller.labels"})," is a map of all the labels from the terranetes controller."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"controller.suffix"})," is a controller default used for secrets (default: tfstate)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"configuration"})," is the entire Configuration object this you can reference ",(0,r.jsx)(t.code,{children:"configuration.Metadata.Namespace"})," for instance."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"name"})," is the Configuration name being executed on"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"namespace"})," is the Configuration namespace and can be used to as a s3 key per namespace for example"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["We inject the entire ",(0,r.jsx)(t.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," resource into the context on the template, so you can reference anything side via ",(0,r.jsx)(t.code,{children:"configuration.PATH"})]})}),"\n",(0,r.jsx)(t.p,{children:"Create a kubernetes secret from the above file"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"kubectl -n terraform-system create secret generic backend-s3 --from-file=backend.tf=backend.tf\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Update the controller to use the backend template"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If you are using the helm chart you simply have to update"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"controller:\n  # Name of a secret in the controller namespace which contains the template to use\n  # for the backend state\n  backendTemplate: backend-s3\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," if you are using the helm chart >= v0.6.0, the format has changed to the below format"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"backend:\n  name: backend-s3\n  # optional: but will create the backend.name kubernetes secret based on this\n  # content in 'template'\n  template: |\n    TEMPLATE_CONTENT\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you are deploying the controller yourself, update the ",(0,r.jsx)(t.code,{children:"--backend-template=backend-s3"})," command line flag."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);