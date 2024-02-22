"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[6701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Provisioning a Resource",l={unversionedId:"developer/provision",id:"developer/provision",title:"Provisioning a Resource",description:"There are two interfaces for provisioning cloud resources in terranetes",source:"@site/docs/terranetes-controller/developer/provision.md",sourceDirName:"developer",slug:"/developer/provision",permalink:"/terranetes-controller/developer/provision",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/developer/provision.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer Docs",permalink:"/terranetes-controller/category/developer-docs"},next:{title:"Terranetes CLI",permalink:"/terranetes-controller/developer/tnctl"}},s={},p=[{value:"Example CloudResource",id:"example-cloudresource",level:2},{value:"1. Search the service currently available",id:"1-search-the-service-currently-available",level:3},{value:"2. View latest revision of the service",id:"2-view-latest-revision-of-the-service",level:3},{value:"3. Create a CloudResource from a revision",id:"3-create-a-cloudresource-from-a-revision",level:3},{value:"Example Configuration resource",id:"example-configuration-resource",level:2},{value:"Sections of the configuration resource",id:"sections-of-the-configuration-resource",level:2},{value:"Module reference",id:"module-reference",level:3},{value:"Provider reference",id:"provider-reference",level:3},{value:"Terraform variables",id:"terraform-variables",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"provisioning-a-resource"},"Provisioning a Resource"),(0,a.kt)("p",null,"There are two interfaces for provisioning cloud resources in terranetes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The original ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configuration")," CRD."),(0,a.kt)("li",{parentName:"ul"},"The newer model of a ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io"},"CloudResource"),".")),(0,a.kt)("p",null,"The difference is largely around simplicity and control. While ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," are essentially a one-to-one mapping to the terraform module, the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io"},"CloudResources")," interface expose only a subset of the options, allowing platform teams to set defaults, inline their best practices, security or organizational policy. This arrangement has the added benefit of removing cognitive load surrounding the myriad of options a terraform module provides."),(0,a.kt)("h2",{id:"example-cloudresource"},"Example CloudResource"),(0,a.kt)("p",null,"Assuming ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io"},"CloudResources")," is being used,"),(0,a.kt)("h3",{id:"1-search-the-service-currently-available"},"1. Search the service currently available"),(0,a.kt)("p",null,"Query the cluster to discovery the resources available to self-serve."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get plans\nNAME       LATEST   AGE\ndatabase   v0.0.1   3s\n")),(0,a.kt)("h3",{id:"2-view-latest-revision-of-the-service"},"2. View latest revision of the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get revision $(kubectl get plan database -o json | jq .status.latest.name -r) -o yaml\n")),(0,a.kt)("p",null,"The above will show you the options available on the plan."),(0,a.kt)("h3",{id:"3-create-a-cloudresource-from-a-revision"},"3. Create a CloudResource from a revision"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tnctl create cloudresource database\n")),(0,a.kt)("h2",{id:"example-configuration-resource"},"Example Configuration resource"),(0,a.kt)("p",null,"Alternatively, if you are using ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations"),". Below is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  # ssh example: git::ssh://git@example.com/foo/bar\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n\n  providerRef:\n    name: default\n\n  writeConnectionSecretToRef:\n    name: test\n\n  # An optional reference to a secret containing credentials to retrieve\n  # the git repository\n  auth:\n    name: <SECRET_NAME>\n\n  # Terraform variables used to populate the module\n  variables:\n    # -- The name of the bucket. If omitted, Terraform will assign a random, unique name\n    bucket: example-test-1234\n    # -- The canned ACL to apply\n    acl: private\n    # -- Map containing versioning configuration\n    versioning:\n      enabled: true\n    # --Whether Amazon S3 should block public ACLs for this bucket\n    block_public_acls: true\n    # -- Whether Amazon S3 should block public bucket policies for this bucket\n    block_public_policy: true\n    # -- Whether Amazon S3 should ignore public ACLs for this bucket\n    ignore_public_acls: true\n    # -- Whether Amazon S3 should restrict public bucket policies for this bucket\n    restrict_public_buckets: true\n    # -- Map containing server-side encryption configuration\n    server_side_encryption_configuration:\n      rule:\n        apply_server_side_encryption_by_default:\n          sse_algorithm: "aws:kms"\n        bucket_key_enabled: true\n')),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The source syntax ",(0,a.kt)("em",{parentName:"p"},"(spec.module)")," on releases ",(0,a.kt)("inlineCode",{parentName:"p"},"<= v0.2.5")," does not fully support suggested ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/language/modules/sources#github"},"Github format"),". References to Github must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/appvia/terraform-aws-rds?ref=TAG")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"git::ssh://git@github.com/appvia/terraform-aws-rds.git"),"."),(0,a.kt)("p",{parentName:"admonition"},"Following the syntax of ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/language/modules/sources#generic-git-repository"},"Generic Git Repository"),".")),(0,a.kt)("h2",{id:"sections-of-the-configuration-resource"},"Sections of the configuration resource"),(0,a.kt)("p",null,"The configuration resource is comprised of the following sections."),(0,a.kt)("h3",{id:"module-reference"},"Module reference"),(0,a.kt)("p",null,"The module reference defines the source of the terraform module to run."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The source reference uses the exact same format as terraform itself (the same library is used). For full details take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"hashicorp/go-getter"),".")),(0,a.kt)("p",null,"For quick reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using SSH the format would look like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"git::ssh://git@example.com/foo/bar")),(0,a.kt)("li",{parentName:"ul"},"Using HTTPS the format would be: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0"))),(0,a.kt)("p",null,"You can also extract specific folders or files from the downloaded module by using the double slash: ",(0,a.kt)("inlineCode",{parentName:"p"},"[URL]//dir/file"),"."),(0,a.kt)("h3",{id:"provider-reference"},"Provider reference"),(0,a.kt)("p",null,"The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the Kubernetes RBAC you currently posses you can retrieve a list of the current providers via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get providers -n [NAMESPACE]\n")),(0,a.kt)("p",null,"Once you have the provider ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," you use the reference in the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  providerRef:\n    name: <NAME>\n")),(0,a.kt)("h3",{id:"terraform-variables"},"Terraform variables"),(0,a.kt)("p",null,"The variables section ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.variables")," is a free form map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via ",(0,a.kt)("inlineCode",{parentName:"p"},"-var-file")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"plan")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," stages."),(0,a.kt)("p",null,"For variables that are sensitive such as passwords it would be better to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.valueFrom")," field. This is a collection of references to kubernetes secrets that hold the values."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"ValueFrom fields is available from version >= v0.1.6\n::::"),(0,a.kt)("p",{parentName:"admonition"},"An example for an RDS module can be"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"spec:\n  valueFrom:\n    - secret: db_password\n      key: database_password\n      optional: false\n")),(0,a.kt)("h3",{parentName:"admonition",id:"connection-secret-reference"},"Connection secret reference"),(0,a.kt)("p",{parentName:"admonition"},"The connection secret ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.writeConnectionSecretToRef")," is the name of a secret within the namespace where you want any Terraform outputs to be written. These outputs are converted to environment variable format, i.e., upper-cased and ready to be consumed by workloads using ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables"},"env and envFrom"),"."),(0,a.kt)("p",{parentName:"admonition"},"By default when a secret is defined all the outputs produced are written in environment variable form. If you want to filter this and only select specific keys from the terraform output you can include the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.writeConnectionSecretToRef.keys")," field as shown below."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  writeConnectionSecretToRef:\n    name: [NAME]\n    keys:\n      - name_of_key\n      - name_of_key\n")),(0,a.kt)("h4",{parentName:"admonition",id:"secrets-remapping"},"Secrets Remapping"),(0,a.kt)("p",{parentName:"admonition"},"We use the resource outputs as the keys in the connection secret, so if a resource has a ",(0,a.kt)("inlineCode",{parentName:"p"},"database_endpoint")," output the secret will have a key named ",(0,a.kt)("inlineCode",{parentName:"p"},"DATABASE_ENDPOINT"),". You might want to rename one or more outputs for convenience however, for example change the ",(0,a.kt)("inlineCode",{parentName:"p"},"database_endpoint")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql_host"),". You can change the key like below"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration|CloudResource\nmetadata:\n  name: bucket\nspec:\n  providerRef:\n    name: aws\n  writeConnectionSecretToRef:\n    name: test\n    keys:\n      - database_endpoint:mysql_host # is renamed to MYSQL_HOST\n      - database_port                # is unchanged as DATABASE_PORT\n")),(0,a.kt)("h2",{parentName:"admonition",id:"viewing-the-changes"},"Viewing the changes"),(0,a.kt)("p",{parentName:"admonition"},"As a Configuration transitions through its plan, apply and destroy phases, a job is created in the namespace, and used to feedback the execution of the change. The jobs follows the naming format ",(0,a.kt)("inlineCode",{parentName:"p"},"[RESOURCE]-[GENERATION]-[plan|apply|destroy]"),". You can easily view the execution of a change by inspecting the pod's logs (",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs [POD]"),")."),(0,a.kt)("p",{parentName:"admonition"},"As an alternative to using kubectl commands, you can use ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/developer/tnctl"},"tnctl")," cli"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tnctl logs -n NAMESPACE NAME\n")),(0,a.kt)("h2",{parentName:"admonition",id:"approving-a-plan"},"Approving a plan"),(0,a.kt)("p",{parentName:"admonition"},"By default, unless the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.enableAutoApproval")," is set to true, all Configurations require a manual approval. You can do this by toggling an annotation on the Configuration itself."),(0,a.kt)("p",{parentName:"admonition"},"To approve the Configuration or CloudResource ",(0,a.kt)("inlineCode",{parentName:"p"},"bucket"),":"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n apps annotate configuration bucket "terraform.appvia.io/apply"=true --overwrite\n')),(0,a.kt)("p",{parentName:"admonition"},"Or"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n apps annotate cloudresource bucket "terraform.appvia.io/apply"=true --overwrite\n')),(0,a.kt)("p",{parentName:"admonition"},"Or if using the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/developer/tnctl"},"tnctl")," cli, you can type"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tnctl approve cloudresource|configuration -n NAMESPACE NAME\n")),(0,a.kt)("h2",{parentName:"admonition",id:"deleting-the-resource"},"Deleting the resource"),(0,a.kt)("p",{parentName:"admonition"},"You can delete the resource like any other Kubernetes resource (",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete configuration [NAME]"),"). One extra feature is the ability to orphan the cloud resources (i.e., delete the Kubernetes representation but DO NOT delete the cloud resources themselves)."),(0,a.kt)("p",{parentName:"admonition"},"For instance, you may need to migrate the configuration to another cluster. In that case:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Annotate the Configuration with ",(0,a.kt)("inlineCode",{parentName:"li"},'kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true')),(0,a.kt)("li",{parentName:"ol"},"Delete the Configuration resource as per normal. The resource will disappear but the cloud resources will remain."))))}u.isMDXComponent=!0}}]);