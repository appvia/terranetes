"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},s="Terraform State",i={unversionedId:"admin/state",id:"admin/state",title:"Terraform State",description:"Terraform stores state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures. For a detailed understanding of terraform state, please visit the official docs.",source:"@site/docs/terranetes-controller/admin/state.md",sourceDirName:"admin",slug:"/admin/state",permalink:"/terranetes-controller/admin/state",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/state.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1664804335,formattedLastUpdatedAt:"Oct 3, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Expose Costs",permalink:"/terranetes-controller/admin/costs"},next:{title:"Drift Detection",permalink:"/terranetes-controller/admin/drift"}},l={},c=[{value:"Where is the state?",id:"where-is-the-state",level:3},{value:"How to change state backend?",id:"how-to-change-state-backend",level:3},{value:"Create a template for the backend to use",id:"create-a-template-for-the-backend-to-use",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terraform-state"},"Terraform State"),(0,n.kt)("p",null,"Terraform stores state about your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and to improve performance for large infrastructures. For a detailed understanding of terraform state, please visit ",(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/language/state"},"the official docs"),"."),(0,n.kt)("h3",{id:"where-is-the-state"},"Where is the state?"),(0,n.kt)("p",null,"By default the terraform state for all ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," is stored in ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes secrets")," located in the controller namespace. The following template is used as the backend."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Namespace is always the controller namespace."),(0,n.kt)("li",{parentName:"ul"},"Suffix is the ",(0,n.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," UUID."),(0,n.kt)("li",{parentName:"ul"},"Note the ",(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/settings/backends/kubernetes"},"kubernetes backend")," adds a prefix ",(0,n.kt)("inlineCode",{parentName:"li"},"tfstate-")," so the state secrets will be named ",(0,n.kt)("inlineCode",{parentName:"li"},"tfstate-UUID"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'var backendTF = `\nterraform {\n  backend "kubernetes" {\n    in_cluster_config = true\n    namespace         = "{{ .controller.namespace }}"\n    secret_suffix     = "{{ .controller.suffix }}"\n  }\n}\n')),(0,n.kt)("h3",{id:"how-to-change-state-backend"},"How to change state backend?"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Note the ability to override the backend is only available with version >= v0.3.1")),(0,n.kt)("p",null,"While using Kubernetes as a backend has it's benefits in terms of ease of use, there's a few downsides as well."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You need to ensure backups are performed on the state secrets."),(0,n.kt)("li",{parentName:"ul"},"Its harder operate or manipulate the terraform state, using taints for example."),(0,n.kt)("li",{parentName:"ul"},"The terraform state is not versioned so rollbacks are harder to performed."),(0,n.kt)("li",{parentName:"ul"},"You are unable to reference the state using ",(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/language/state/remote-state-data"},"remote_state_data")," resource."),(0,n.kt)("li",{parentName:"ul"},"The terraform state is ultimately bound to the Cluster.")),(0,n.kt)("p",null,"Platform administrators can change the backend using the following steps."),(0,n.kt)("h4",{id:"create-a-template-for-the-backend-to-use"},"Create a template for the backend to use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a kubernetes secret in the controller namespace containing the template")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > backend.tf\nterraform {\n  backend "s3" {\n    bucket     = "terranetes-controller-state"\n    key        = "cluster_one/{{ .namespace }}/{{ .name }}\n    region     = "eu-west-2"\n    access_key = "AWS_ACCESS_KEY_ID"\n    secret_key = "AWS_SECRET_ACCESS_KEY"\n  }\n}\nEOF\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We inject the entire ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," resource into the context on the template, so you can reference anything side via ",(0,n.kt)("inlineCode",{parentName:"p"},"configuration.PATH"))),(0,n.kt)("p",null,"Create a kubernetes secret from the above file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n terraform-system create secret generic backend-s3 --from-file=backend.tf=backend.tf\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Update the controller to use the backend template")),(0,n.kt)("p",null,"If you are using the helm chart you simply have to update"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"controller:\n  # Name of a secret in the controller namespace which contains the template to use\n  # for the backend state\n  backendTemplate: backend-s3\n")),(0,n.kt)("p",null,"If you are deploying the controller yourself, update the ",(0,n.kt)("inlineCode",{parentName:"p"},"--backend-template=backend-s3")," command line flag."))}u.isMDXComponent=!0}}]);