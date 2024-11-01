"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9753],{200:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(4848),t=n(8453);const s={sidebar_position:1},i="Provisioning a Resource",a={id:"developer/provision",title:"Provisioning a Resource",description:"There are two interfaces for provisioning cloud resources in terranetes",source:"@site/docs/terranetes-controller/developer/provision.md",sourceDirName:"developer",slug:"/developer/provision",permalink:"/terranetes-controller/developer/provision",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/provision.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1730449026e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer Docs",permalink:"/terranetes-controller/category/developer-docs"},next:{title:"Terranetes CLI",permalink:"/terranetes-controller/developer/tnctl"}},l={},c=[{value:"Example CloudResource",id:"example-cloudresource",level:2},{value:"1. Search the service currently available",id:"1-search-the-service-currently-available",level:3},{value:"2. View latest revision of the service",id:"2-view-latest-revision-of-the-service",level:3},{value:"3. Create a CloudResource from a revision",id:"3-create-a-cloudresource-from-a-revision",level:3},{value:"Example Configuration resource",id:"example-configuration-resource",level:2},{value:"Sections of the configuration resource",id:"sections-of-the-configuration-resource",level:2},{value:"Module reference",id:"module-reference",level:3},{value:"Provider reference",id:"provider-reference",level:3},{value:"Terraform variables",id:"terraform-variables",level:3},{value:"Connection secret reference",id:"connection-secret-reference",level:3},{value:"Secrets Remapping",id:"secrets-remapping",level:4},{value:"Viewing the changes",id:"viewing-the-changes",level:2},{value:"Approving a plan",id:"approving-a-plan",level:2},{value:"Deleting the resource",id:"deleting-the-resource",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"provisioning-a-resource",children:"Provisioning a Resource"})}),"\n",(0,o.jsx)(r.p,{children:"There are two interfaces for provisioning cloud resources in terranetes"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["The original ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," CRD."]}),"\n",(0,o.jsxs)(r.li,{children:["The newer model of a ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResource"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["The difference is largely around simplicity and control. While ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," are essentially a one-to-one mapping to the terraform module, the ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," interface expose only a subset of the options, allowing platform teams to set defaults, inline their best practices, security or organizational policy. This arrangement has the added benefit of removing cognitive load surrounding the myriad of options a terraform module provides."]}),"\n",(0,o.jsx)(r.h2,{id:"example-cloudresource",children:"Example CloudResource"}),"\n",(0,o.jsxs)(r.p,{children:["Assuming ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," is being used,"]}),"\n",(0,o.jsx)(r.h3,{id:"1-search-the-service-currently-available",children:"1. Search the service currently available"}),"\n",(0,o.jsx)(r.p,{children:"Query the cluster to discovery the resources available to self-serve."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"$ kubectl get plans\nNAME       LATEST   AGE\ndatabase   v0.0.1   3s\n"})}),"\n",(0,o.jsx)(r.h3,{id:"2-view-latest-revision-of-the-service",children:"2. View latest revision of the service"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"kubectl get revision $(kubectl get plan database -o json | jq .status.latest.name -r) -o yaml\n"})}),"\n",(0,o.jsx)(r.p,{children:"The above will show you the options available on the plan."}),"\n",(0,o.jsx)(r.h3,{id:"3-create-a-cloudresource-from-a-revision",children:"3. Create a CloudResource from a revision"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"tnctl create cloudresource database\n"})}),"\n",(0,o.jsx)(r.h2,{id:"example-configuration-resource",children:"Example Configuration resource"}),"\n",(0,o.jsxs)(r.p,{children:["Alternatively, if you are using ",(0,o.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"}),". Below is an example:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  # ssh example: git::ssh://git@example.com/foo/bar\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n\n  providerRef:\n    name: default\n\n  writeConnectionSecretToRef:\n    name: test\n\n  # An optional reference to a secret containing credentials to retrieve\n  # the git repository\n  auth:\n    name: <SECRET_NAME>\n\n  # Terraform variables used to populate the module\n  variables:\n    # -- The name of the bucket. If omitted, Terraform will assign a random, unique name\n    bucket: example-test-1234\n    # -- The canned ACL to apply\n    acl: private\n    # -- Map containing versioning configuration\n    versioning:\n      enabled: true\n    # --Whether Amazon S3 should block public ACLs for this bucket\n    block_public_acls: true\n    # -- Whether Amazon S3 should block public bucket policies for this bucket\n    block_public_policy: true\n    # -- Whether Amazon S3 should ignore public ACLs for this bucket\n    ignore_public_acls: true\n    # -- Whether Amazon S3 should restrict public bucket policies for this bucket\n    restrict_public_buckets: true\n    # -- Map containing server-side encryption configuration\n    server_side_encryption_configuration:\n      rule:\n        apply_server_side_encryption_by_default:\n          sse_algorithm: "aws:kms"\n        bucket_key_enabled: true\n'})}),"\n",(0,o.jsxs)(r.admonition,{type:"important",children:[(0,o.jsxs)(r.p,{children:["The source syntax ",(0,o.jsx)(r.em,{children:"(spec.module)"})," on releases ",(0,o.jsx)(r.code,{children:"<= v0.2.5"})," does not fully support suggested ",(0,o.jsx)(r.a,{href:"https://www.terraform.io/language/modules/sources#github",children:"Github format"}),". References to Github must use the ",(0,o.jsx)(r.code,{children:"https://github.com/appvia/terraform-aws-rds?ref=TAG"})," or ",(0,o.jsx)(r.code,{children:"git::ssh://git@github.com/appvia/terraform-aws-rds.git"}),"."]}),(0,o.jsxs)(r.p,{children:["Following the syntax of ",(0,o.jsx)(r.a,{href:"https://www.terraform.io/language/modules/sources#generic-git-repository",children:"Generic Git Repository"}),"."]})]}),"\n",(0,o.jsx)(r.h2,{id:"sections-of-the-configuration-resource",children:"Sections of the configuration resource"}),"\n",(0,o.jsx)(r.p,{children:"The configuration resource is comprised of the following sections."}),"\n",(0,o.jsx)(r.h3,{id:"module-reference",children:"Module reference"}),"\n",(0,o.jsx)(r.p,{children:"The module reference defines the source of the terraform module to run."}),"\n",(0,o.jsx)(r.admonition,{type:"tip",children:(0,o.jsxs)(r.p,{children:["The source reference uses the exact same format as terraform itself (the same library is used). For full details take a look at ",(0,o.jsx)(r.a,{href:"https://github.com/hashicorp/go-getter",children:"hashicorp/go-getter"}),"."]})}),"\n",(0,o.jsx)(r.p,{children:"For quick reference:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Using SSH the format would look like this: ",(0,o.jsx)(r.code,{children:"git::ssh://git@example.com/foo/bar"})]}),"\n",(0,o.jsxs)(r.li,{children:["Using HTTPS the format would be: ",(0,o.jsx)(r.code,{children:"https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0"})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["You can also extract specific folders or files from the downloaded module by using the double slash: ",(0,o.jsx)(r.code,{children:"[URL]//dir/file"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"provider-reference",children:"Provider reference"}),"\n",(0,o.jsxs)(r.p,{children:["The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the Kubernetes RBAC you currently posses you can retrieve a list of the current providers via ",(0,o.jsx)(r.code,{children:"kubectl"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"$ kubectl get providers -n [NAMESPACE]\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Once you have the provider ",(0,o.jsx)(r.code,{children:"name"})," you use the reference in the configuration:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"spec:\n  providerRef:\n    name: <NAME>\n"})}),"\n",(0,o.jsx)(r.h3,{id:"terraform-variables",children:"Terraform variables"}),"\n",(0,o.jsxs)(r.p,{children:["The variables section ",(0,o.jsx)(r.code,{children:"spec.variables"})," is a free form map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via ",(0,o.jsx)(r.code,{children:"-var-file"})," on the ",(0,o.jsx)(r.code,{children:"plan"})," and ",(0,o.jsx)(r.code,{children:"apply"})," stages."]}),"\n",(0,o.jsxs)(r.p,{children:["For variables that are sensitive such as passwords it would be better to use the ",(0,o.jsx)(r.code,{children:"spec.valueFrom"})," field. This is a collection of references to kubernetes secrets that hold the values."]}),"\n",(0,o.jsx)(r.admonition,{type:"important",children:(0,o.jsx)(r.p,{children:"ValueFrom fields is available from version >= v0.1.6"})}),"\n",(0,o.jsx)(r.p,{children:"An example for an RDS module can be"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"spec:\n  valueFrom:\n    - secret: db_password\n      key: database_password\n      optional: false\n"})}),"\n",(0,o.jsx)(r.h3,{id:"connection-secret-reference",children:"Connection secret reference"}),"\n",(0,o.jsxs)(r.p,{children:["The connection secret ",(0,o.jsx)(r.code,{children:"spec.writeConnectionSecretToRef"})," is the name of a secret within the namespace where you want any Terraform outputs to be written. These outputs are converted to environment variable format, i.e., upper-cased and ready to be consumed by workloads using ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables",children:"env and envFrom"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["By default when a secret is defined all the outputs produced are written in environment variable form. If you want to filter this and only select specific keys from the terraform output you can include the ",(0,o.jsx)(r.code,{children:"spec.writeConnectionSecretToRef.keys"})," field as shown below."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"spec:\n  writeConnectionSecretToRef:\n    name: [NAME]\n    keys:\n      - name_of_key\n      - name_of_key\n"})}),"\n",(0,o.jsx)(r.h4,{id:"secrets-remapping",children:"Secrets Remapping"}),"\n",(0,o.jsxs)(r.p,{children:["We use the resource outputs as the keys in the connection secret, so if a resource has a ",(0,o.jsx)(r.code,{children:"database_endpoint"})," output the secret will have a key named ",(0,o.jsx)(r.code,{children:"DATABASE_ENDPOINT"}),". You might want to rename one or more outputs for convenience however, for example change the ",(0,o.jsx)(r.code,{children:"database_endpoint"})," to ",(0,o.jsx)(r.code,{children:"mysql_host"}),". You can change the key like below"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration|CloudResource\nmetadata:\n  name: bucket\nspec:\n  providerRef:\n    name: aws\n  writeConnectionSecretToRef:\n    name: test\n    keys:\n      - database_endpoint:mysql_host # is renamed to MYSQL_HOST\n      - database_port                # is unchanged as DATABASE_PORT\n"})}),"\n",(0,o.jsx)(r.h2,{id:"viewing-the-changes",children:"Viewing the changes"}),"\n",(0,o.jsxs)(r.p,{children:["As a Configuration transitions through its plan, apply and destroy phases, a job is created in the namespace, and used to feedback the execution of the change. The jobs follows the naming format ",(0,o.jsx)(r.code,{children:"[RESOURCE]-[GENERATION]-[plan|apply|destroy]"}),". You can easily view the execution of a change by inspecting the pod's logs (",(0,o.jsx)(r.code,{children:"kubectl logs [POD]"}),")."]}),"\n",(0,o.jsxs)(r.p,{children:["As an alternative to using kubectl commands, you can use ",(0,o.jsx)(r.a,{href:"/terranetes-controller/developer/tnctl",children:"tnctl"})," cli"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"$ tnctl logs -n NAMESPACE NAME\n"})}),"\n",(0,o.jsx)(r.h2,{id:"approving-a-plan",children:"Approving a plan"}),"\n",(0,o.jsxs)(r.p,{children:["By default, unless the ",(0,o.jsx)(r.code,{children:"spec.enableAutoApproval"})," is set to true, all Configurations require a manual approval. You can do this by toggling an annotation on the Configuration itself."]}),"\n",(0,o.jsxs)(r.p,{children:["To approve the Configuration or CloudResource ",(0,o.jsx)(r.code,{children:"bucket"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:'$ kubectl -n apps annotate configuration bucket "terraform.appvia.io/apply"=true --overwrite\n'})}),"\n",(0,o.jsx)(r.p,{children:"Or"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:'$ kubectl -n apps annotate cloudresource bucket "terraform.appvia.io/apply"=true --overwrite\n'})}),"\n",(0,o.jsxs)(r.p,{children:["Or if using the ",(0,o.jsx)(r.a,{href:"/terranetes-controller/developer/tnctl",children:"tnctl"})," cli, you can type"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-shell",children:"$ tnctl approve cloudresource|configuration -n NAMESPACE NAME\n"})}),"\n",(0,o.jsx)(r.h2,{id:"deleting-the-resource",children:"Deleting the resource"}),"\n",(0,o.jsxs)(r.p,{children:["You can delete the resource like any other Kubernetes resource (",(0,o.jsx)(r.code,{children:"kubectl delete configuration [NAME]"}),"). One extra feature is the ability to orphan the cloud resources (i.e., delete the Kubernetes representation but DO NOT delete the cloud resources themselves)."]}),"\n",(0,o.jsx)(r.p,{children:"For instance, you may need to migrate the configuration to another cluster. In that case:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Annotate the Configuration with ",(0,o.jsx)(r.code,{children:'kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true'})]}),"\n",(0,o.jsx)(r.li,{children:"Delete the Configuration resource as per normal. The resource will disappear but the cloud resources will remain."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var o=n(6540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);