"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[42],{5302:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=n(4848),s=n(8453);const a={sidebar_position:2},o="Quick start",l={id:"quick_start",title:"Quick start",description:"While all actions can be performed via kubectl, Terranetes comes bundled with a CLI tool to make operations quicker. You can find the download on releases",source:"@site/docs/terranetes-controller/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/terranetes-controller/quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/quick_start.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:173030469e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Terranetes?",permalink:"/terranetes-controller/"},next:{title:"Releases",permalink:"/terranetes-controller/releases"}},i={},c=[{value:"Configure credentials",id:"configure-credentials",level:2},{value:"Configure a Revision",id:"configure-a-revision",level:2},{value:"Provision a Cloud Resource",id:"provision-a-cloud-resource",level:2},{value:"Approve the plan",id:"approve-the-plan",level:2},{value:"Deleting the terraform resources",id:"deleting-the-terraform-resources",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"quick-start",children:"Quick start"})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["While all actions can be performed via kubectl, Terranetes comes bundled with a CLI tool to make operations quicker. You can find the download on ",(0,t.jsx)(r.a,{href:"/terranetes-controller/releases",children:(0,t.jsx)(r.strong,{children:"releases"})})]})}),"\n",(0,t.jsx)(r.p,{children:"Before we begin, you'll need the following tools:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm CLI"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://kind.sigs.k8s.io/",children:"Kind"})})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The quickest way to get up and running is via the Helm chart (see ",(0,t.jsx)(r.a,{href:"https://github.com/appvia/terranetes-controller/tree/master/charts/terranetes-controller",children:"chart"}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ helm repo add appvia https://terranetes-controller.appvia.io\n$ helm repo update\n$ kind create cluster\n$ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace\n$ kubectl -n terraform-system get pods\n"})}),"\n",(0,t.jsx)(r.h2,{id:"configure-credentials",children:"Configure credentials"}),"\n",(0,t.jsxs)(r.p,{children:["Next, we configure some cloud credentials to run terraform with (see ",(0,t.jsx)(r.a,{href:"https://github.com/appvia/terranetes-controller/blob/master/examples/provider.yaml",children:"provider.yaml"}),"):"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["The following assumes you are using static cloud credentials. See the docs for ",(0,t.jsx)(r.a,{href:"/terranetes-controller/admin/providers/#configure-injected-identity",children:(0,t.jsx)(r.strong,{children:"managed pod identity"})}),"."]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n$ kubectl apply -f https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/provider.yaml\n$ kubectl get provider -o yaml\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"/terranetes-controller/admin/providers",children:"Configure Credentials"})," for more details."]}),"\n",(0,t.jsx)(r.h2,{id:"configure-a-revision",children:"Configure a Revision"}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["The following example uses a pre-baked Revision, however, for tips on generating Revisions please go ",(0,t.jsx)(r.a,{href:"/terranetes-controller/admin/cloudresource",children:(0,t.jsx)(r.strong,{children:"here"})})]})}),"\n",(0,t.jsxs)(r.p,{children:["Retrieve a demo revision that creates an S3 bucket (see ",(0,t.jsx)(r.a,{href:"https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/revision.yaml",children:"revision.yaml"}),")."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/revision.yaml\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Next, lets create a ",(0,t.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," for the resource."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# View the contains of the revision for the s3 bucket\n$ cat revision.yaml # demo for provisioning an s3 bucket\n\n# Apply the revision\n$ kubectl apply -f revision.yaml\n$ kubectl get revision\n\n# We should have a plan from the new revision\n$ kubectl get plan\n"})}),"\n",(0,t.jsx)(r.h2,{id:"provision-a-cloud-resource",children:"Provision a Cloud Resource"}),"\n",(0,t.jsxs)(r.p,{children:["Lets retrieve the cloud resource example from ",(0,t.jsx)(r.a,{href:"https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/cloudresource.yaml",children:"here"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/cloudresource.yaml\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["You can also run ",(0,t.jsx)(r.code,{children:"tnctl create cloudresource"})," to generate a CloudResource CRD from a Revision"]})}),"\n",(0,t.jsx)(r.p,{children:"Lets create a namespace, and consume the revision."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"# Create the namespace\n$ kubectl create namespace apps\n\n# Ensure you change any 'CHANGE_ME' variables in the example\n$ vim cloudresource.yaml\n\n#  Create the cloudresource\n$ kubectl -n apps apply -f cloudresource.yaml\n$ kubectl -n apps get po\n\n# Straight away a job is created to 'watch' the terraform workflow\n$ kubectl -n apps logs -f <POD_ID>\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["You can use the ",(0,t.jsx)(r.code,{children:"tnctl logs cloudresource --namespace apps bucket --follow"})," to find and watch the logs from a build, instead of kubectl commands."]})}),"\n",(0,t.jsx)(r.h2,{id:"approve-the-plan",children:"Approve the plan"}),"\n",(0,t.jsxs)(r.p,{children:["By default, unless the ",(0,t.jsx)(r.code,{children:"spec.enableAutoApproval"})," is true, all changes must be approved before acting on. An annotation is used to approve the previous plan."]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsxs)(r.p,{children:["If you are using the ",(0,t.jsx)(r.code,{children:"tnctl"})," cli, you can approve changes via ",(0,t.jsx)(r.code,{children:"tnctl approve cloudresource --namespace apps bucket"})]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'kubectl -n apps annotate cloudresources bucket "terraform.appvia.io/apply"=true --overwrite\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Another kubernetes job will be created to watch the execution of the terraform apply, you can view the logs via ",(0,t.jsx)(r.code,{children:"kubectl -n apps get po | grep apply"}),", get the pod name and tail the logs ",(0,t.jsx)(r.code,{children:"kubectl -n apps logs -f <NAME>"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"important",children:(0,t.jsxs)(r.p,{children:["The actual terraform execution does not occur in the ",(0,t.jsx)(r.code,{children:"apps"})," namespace, users simply have the ability to watch the output of the run. The job and the credentials never leave the platform teams namespace ",(0,t.jsx)(r.code,{children:"terraform-system"})]})}),"\n",(0,t.jsxs)(r.p,{children:["View the the ",(0,t.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResource"})," below."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"$ kubectl -n apps get cloudresources.terraform.appvia.io\nNAME     PLAN     REVISION   SECRET   CONFIGURATION   ESTIMATED     UPDATE   SYNCHRONIZED   AGE\nbucket   bucket   v0.0.1     test     bucket-7v8jp    Not Enabled   None     InSync         2m7s\n\n# View the kubernetes secrets containing the outputs\n$ kubectl -n apps get secret test -o yaml\n"})}),"\n",(0,t.jsxs)(r.p,{children:["For a complete summary of ",(0,t.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," click ",(0,t.jsx)(r.a,{href:"/terranetes-controller/developer/provision",children:"here"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"deleting-the-terraform-resources",children:"Deleting the terraform resources"}),"\n",(0,t.jsx)(r.p,{children:"You can delete the cloud resource like any other Kubernetes resource"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"kubectl -n apps delete cloudresource bucket --wait=false\n"})}),"\n",(0,t.jsx)(r.p,{children:"Tailing the logs from the watcher will allow you to view the execution."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"POD_NAME=$(kubectl -n apps get pods -l terraform.appvia.io/stage=destroy --no-headers | cut -d' ' -f1)\nkubectl -n apps logs ${POD_NAME} -f\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Or via ",(0,t.jsx)(r.a,{href:"/terranetes-controller/developer/tnctl",children:"tnctl"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"tnctl logs cloudresource -n apps bucket -f\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(6540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);