"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},l="Quick start",i={unversionedId:"quick_start",id:"quick_start",title:"Quick start",description:"Before we begin, you'll need the following tools:",source:"@site/docs/terranetes-controller/quick_start.md",sourceDirName:".",slug:"/quick_start",permalink:"/terranetes-controller/quick_start",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/quick_start.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1674498654,formattedLastUpdatedAt:"Jan 23, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Terranetes?",permalink:"/terranetes-controller/"},next:{title:"Releases",permalink:"/terranetes-controller/releases"}},s={},p=[{value:"Configure credentials",id:"configure-credentials",level:2},{value:"Create your first terraform resource",id:"create-your-first-terraform-resource",level:2},{value:"Approve the plan",id:"approve-the-plan",level:2},{value:"Deleting the terraform resources",id:"deleting-the-terraform-resources",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,"Before we begin, you'll need the following tools:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://helm.sh/docs/intro/install/"},"Helm CLI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://kind.sigs.k8s.io/"},"Kind")))),(0,n.kt)("p",null,"The quickest way to get up and running is via the Helm chart (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-controller/tree/master/charts/terranetes-controller"},"chart"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add appvia https://terranetes-controller.appvia.io\n$ helm repo update\n$ kind create cluster\n$ helm install -n terraform-system terranetes-controller appvia/terranetes-controller --create-namespace\n$ kubectl -n terraform-system get pods\n")),(0,n.kt)("h2",{id:"configure-credentials"},"Configure credentials"),(0,n.kt)("p",null,"Next, we configure some cloud credentials to run terraform with (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-controller/blob/master/examples/provider.yaml"},"provider.yaml"),"):"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The following assumes you are using static cloud credentials. See the docs for ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/providers/#configure-injected-identity"},(0,n.kt)("strong",{parentName:"a"},"managed pod identity")),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n$ kubectl apply -f https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/provider.yaml\n$ kubectl get provider -o yaml\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/providers"},"Configure Credentials")," for more details."),(0,n.kt)("h2",{id:"create-your-first-terraform-resource"},"Create your first terraform resource"),(0,n.kt)("p",null,"Retrieve a demo configuration that creates an S3 bucket (see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-controller/blob/master/examples/configuration.yaml"},"configuration.yaml"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/appvia/terranetes-controller/master/examples/configuration.yaml\n")),(0,n.kt)("p",null,"Next, lets create a namespace and provision the cloud resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the namespace\n$ kubectl create namespace apps\n# View the contains of the configuration\n$ cat configuration.yaml # demo for provisioning an s3 bucket\n\n$ kubectl -n apps apply -f configuration.yaml\n$ kubectl -n apps get po\n\n# Straight away a job is created to 'watch' the terraform workflow\n$ kubectl -n apps logs -f <POD_ID>\n")),(0,n.kt)("h2",{id:"approve-the-plan"},"Approve the plan"),(0,n.kt)("p",null,"By default, unless the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.enableAutoApproval")," is true, all changes must be approved before acting on. An annotation is used to approve the previous plan."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true --overwrite\n')),(0,n.kt)("p",null,"Another kubernetes job will be created to watch the execution of the terraform apply, you can view the logs via ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl -n apps get po | grep apply"),", get the pod name and tail the logs ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl -n apps logs -f <NAME>"),"."),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Note the actual terraform execution does not occur in the ",(0,n.kt)("inlineCode",{parentName:"p"},"apps")," namespace, users simply has the ability to watch the output of the run. The job and the credentials never leave the platform teams namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform-system"))),(0,n.kt)("p",null,"View the the ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n apps get configurations.terraform.appvia.io\nNAME     MODULE                                                                            SECRET   RESOURCES   ESTIMATED     AGE\nbucket   https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0   test     5           Not Enabled   78s\n# The terraform output will be written to a secret in the configuration namespace\n$ kubectl -n apps get secret test -o yaml\n")),(0,n.kt)("p",null,"For a complete summary of ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," click ",(0,n.kt)("a",{parentName:"p",href:"/terranetes-controller/developer/configuration"},"here"),"."),(0,n.kt)("h2",{id:"deleting-the-terraform-resources"},"Deleting the terraform resources"),(0,n.kt)("p",null,"You can delete the configuration like any other Kubernetes resource"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n apps delete configuration bucket\n")),(0,n.kt)("p",null,"Tailing the logs from the watcher will allow you to view the execution."))}u.isMDXComponent=!0}}]);