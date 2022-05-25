"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[553],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Provisioning a Terraform Module",s={unversionedId:"developer/configuration",id:"developer/configuration",title:"Provisioning a Terraform Module",description:"Example configuration resource",source:"@site/docs/terraform-controller/developer/configuration.md",sourceDirName:"developer",slug:"/developer/configuration",permalink:"/terraform-controller/developer/configuration",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/developer/configuration.md",tags:[],version:"current",lastUpdatedBy:"Mohammud Yassine Jaffoo",lastUpdatedAt:1653512367,formattedLastUpdatedAt:"5/25/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developer Docs",permalink:"/terraform-controller/category/developer-docs"},next:{title:"Using Private Repositories",permalink:"/terraform-controller/developer/private"}},u={},p=[{value:"Example configuration resource",id:"example-configuration-resource",level:2},{value:"Sections of the configuration resource",id:"sections-of-the-configuration-resource",level:2},{value:"Module reference",id:"module-reference",level:3},{value:"Provider reference",id:"provider-reference",level:3},{value:"Terraform variables",id:"terraform-variables",level:3},{value:"Connection secret reference",id:"connection-secret-reference",level:3},{value:"Viewing the changes",id:"viewing-the-changes",level:2},{value:"Approving a plan",id:"approving-a-plan",level:2},{value:"Deleting the resource",id:"deleting-the-resource",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"provisioning-a-terraform-module"},"Provisioning a Terraform Module"),(0,a.kt)("h2",{id:"example-configuration-resource"},"Example configuration resource"),(0,a.kt)("p",null,"On the consumption side the only resource required is the ",(0,a.kt)("a",{parentName:"p",href:"/terraform-controller/reference/configurations.terraform.appvia.io"},"Configuration")," CRD. Below is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: bucket\nspec:\n  # ssh example: git::ssh://git@example.com/foo/bar\n  module: https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0\n\n  providerRef:\n    namespace: terraform-system\n    name: default\n\n  writeConnectionSecretToRef:\n    name: test\n\n  # An optional reference to a secret containing credentials to retrieve\n  # the git repository\n  auth:\n    name: <SECRET_NAME>\n\n  # Terraform variables used to populate the module\n  variables:\n    # -- The name of the bucket. If omitted, Terraform will assign a random, unique name\n    bucket: rohith-test-1234\n    # -- The canned ACL to apply\n    acl: private\n    # -- Map containing versioning configuration\n    versioning:\n      enabled: true\n    # --Whether Amazon S3 should block public ACLs for this bucket\n    block_public_acls: true\n    # -- Whether Amazon S3 should block public bucket policies for this bucket\n    block_public_policy: true\n    # -- Whether Amazon S3 should ignore public ACLs for this bucket\n    ignore_public_acls: true\n    # -- Whether Amazon S3 should restrict public bucket policies for this bucket\n    restrict_public_buckets: true\n    # -- Map containing server-side encryption configuration\n    server_side_encryption_configuration:\n      rule:\n        apply_server_side_encryption_by_default:\n          sse_algorithm: "aws:kms"\n        bucket_key_enabled: true\n')),(0,a.kt)("h2",{id:"sections-of-the-configuration-resource"},"Sections of the configuration resource"),(0,a.kt)("p",null,"The configuration resource is comprised of the following sections."),(0,a.kt)("h3",{id:"module-reference"},"Module reference"),(0,a.kt)("p",null,"The module reference defines the source of the terraform module to run."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The source reference uses the exact same format as terraform itself (the same library is used). For full details take a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/go-getter"},"hashicorp/go-getter"),"."))),(0,a.kt)("p",null,"For quick reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using SSH the format would look like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"git::ssh://git@example.com/foo/bar")),(0,a.kt)("li",{parentName:"ul"},"Using HTTPS the format would be: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/terraform-aws-modules/terraform-aws-s3-bucket.git?ref=v3.1.0"))),(0,a.kt)("p",null,"You can also extract specific folders or files from the downloaded module by using the double slash: ",(0,a.kt)("inlineCode",{parentName:"p"},"[URL]//dir/file"),"."),(0,a.kt)("h3",{id:"provider-reference"},"Provider reference"),(0,a.kt)("p",null,"The provider reference is what links a configuration to the credentials used to speak to the cloud. Depending on the Kubernetes RBAC you currently posses you can retrieve a list of the current providers via ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get providers -n [NAMESPACE]\n")),(0,a.kt)("p",null,"Once you have the provider ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," you use the reference in the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  providerRef:\n    namespace: <NAMESPACE>\n    name: <NAME>\n")),(0,a.kt)("h3",{id:"terraform-variables"},"Terraform variables"),(0,a.kt)("p",null,"The variables section ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.variables")," is a freeform map used to define all the variables the module can consume. These are converted to HCL and provided into the workflow via ",(0,a.kt)("inlineCode",{parentName:"p"},"-var-file")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"plan")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," stages."),(0,a.kt)("h3",{id:"connection-secret-reference"},"Connection secret reference"),(0,a.kt)("p",null,"The connection secret ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.writeConnectionSecretToRef")," is the name of a secret within the namespace where you want any Terraform outputs to be written. These outputs are converted to environment variable format, i.e., upper-cased and ready to be consumed by workloads using ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables"},"env and envFrom"),"."),(0,a.kt)("p",null,"By default when a secret is defined all the outputs produced are written in environment variable form. If you want to filter this and only select specific keys from the terraform output you can include the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.writeConnectionSecretToRef.keys")," field as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  writeConnectionSecretToRef:\n    name: [NAME]\n    keys:\n      - name_of_key\n      - name_of_key\n")),(0,a.kt)("h2",{id:"viewing-the-changes"},"Viewing the changes"),(0,a.kt)("p",null,"As a Configuration transitions through its plan, apply and destroy phases, a job is created in the namespace, and used to feedback the execution of the change. The jobs follows the naming format ",(0,a.kt)("inlineCode",{parentName:"p"},"[RESOURCE]-[GENERATION]-[plan|apply|destroy]"),". You can easily view the execution of a change by inspecting the pod's logs (",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs [POD]"),")."),(0,a.kt)("h2",{id:"approving-a-plan"},"Approving a plan"),(0,a.kt)("p",null,"By default, unless the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.enableAutoApproval")," is set to true, all Configurations require a manual approval. You can do this by toggling an annotation on the Configuration itself."),(0,a.kt)("p",null,"To approve the Configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"bucket"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl -n apps annotate configurations bucket "terraform.appvia.io/apply"=true\n')),(0,a.kt)("h2",{id:"deleting-the-resource"},"Deleting the resource"),(0,a.kt)("p",null,"You can delete the resource like any other Kubernetes resource (",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete configuration [NAME]"),"). One extra feature is the ability to orphan the cloud resources (i.e., delete the Kubernetes representation but DO NOT delete the cloud resources themselves)."),(0,a.kt)("p",null,"For instance, you may need to migrate the configuration to another cluster. In that case:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Annotate the Configuration with ",(0,a.kt)("inlineCode",{parentName:"li"},'kubectl annotate configuration [NAME] "terraform.appvia.io/orphan"=true')),(0,a.kt)("li",{parentName:"ol"},"Delete the Configuration resource as per normal. The resource will disappear but the cloud resources will remain.")))}f.isMDXComponent=!0}}]);