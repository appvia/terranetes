"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[2765],{5763:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const o={sidebar_position:4,sidebar_class_name:"green"},t="Cloud Resources",a={id:"admin/cloudresource",title:"Cloud Resources",description:"This feature is only available from >= v0.4.0 releases",source:"@site/docs/terranetes-controller/admin/cloudresource.md",sourceDirName:"admin",slug:"/admin/cloudresource",permalink:"/terranetes-controller/admin/cloudresource",draft:!1,unlisted:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/cloudresource.md",tags:[],version:"current",lastUpdatedBy:"Kashif Saadat",lastUpdatedAt:1724861978e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Contexts",permalink:"/terranetes-controller/admin/contexts"},next:{title:"Observability",permalink:"/terranetes-controller/category/observability"}},c={},l=[{value:"What are Revisions?",id:"what-are-revisions",level:2},{value:"Revision specification?",id:"revision-specification",level:2},{value:"Plan",id:"plan",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Configuration",id:"configuration",level:3},{value:"How to create Revisions?",id:"how-to-create-revisions",level:2},{value:"How to validate a Revision?",id:"how-to-validate-a-revision",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"cloud-resources",children:"Cloud Resources"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"This feature is only available from >= v0.4.0 releases"})}),"\n",(0,i.jsxs)(r.p,{children:["Terranetes supports two interfaces to provisioning cloud resources; ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," which are the legacy implementation and the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"}),". While ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configurations"})," provides a one-to-one mapping to the Terraform module, ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," takes a more managed approach. Rather the exposing the entirety of options to the consumer, ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"CloudResources"})," pick and choose which attributes are exposed, thus reducing the heavy lifting by the users and well and ensuring options do not diverge from a known path."]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["Note, while the user facing interface is the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResource"}),", a managed ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," is created by the controller as the implementation detail. You can think of ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," as a means of creating a managed ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"what-are-revisions",children:"What are Revisions?"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"})," are the templates for ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"}),", each of these are versioned assets which has been curated and tested against, containing the defaults the organization requires and exposing only the functionality which is contextual. The basic gist is;"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"})," point to a terraform module."]}),"\n",(0,i.jsx)(r.li,{children:"They contain all the default options which the platform wants defaults to in the module."}),"\n",(0,i.jsx)(r.li,{children:"They contain all the options which they want exposed to the consumer."}),"\n",(0,i.jsx)(r.li,{children:"Versions can track the upstream terraform module, or move independently of it."}),"\n",(0,i.jsxs)(r.li,{children:["All ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," reference back to a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," in the cluster."]}),"\n",(0,i.jsxs)(r.li,{children:["To upgrade a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResource"})," consumer update the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," it points to."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The following depicts the relations between Plans (a collection of ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"}),"), ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," and the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," it manages."]}),"\n",(0,i.jsx)("img",{src:"/img/cloudresources.png"}),"\n",(0,i.jsx)(r.h2,{id:"revision-specification",children:"Revision specification?"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"})," are made up for ",(0,i.jsx)(r.strong,{children:"three"})," sections"]}),"\n",(0,i.jsx)(r.h3,{id:"plan",children:"Plan"}),"\n",(0,i.jsx)(r.p,{children:"Describes the metadata associated to the Revisions; the version, description, categories and so forth."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"spec:\n  ## Defines we are a member of a package\n  plan:\n    ## Is the name of the package we are a part of\n    name: fake\n    ## Is a collection of categories\n    categories: [mysql, aws, fake]\n    ## Is a description for what this plan provides\n    description: Provides a dummy terraform module for testing\n    ## Is the version of the package\n    revision: v0.0.3\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"name"}),": is probably the most important field here, as all ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"})," are grouped by this field. ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revisions"})," with the same ",(0,i.jsx)(r.code,{children:"spec.plan.name"})," are logically grouped into a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/plans.terraform.appvia.io",children:"Plan"}),". Plans order these Revisions using semvar. So when a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResource"})," references a Plan ",(0,i.jsx)(r.code,{children:"database"}),", without specifying a version; it looks up the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/plans.terraform.appvia.io",children:"Plan"})," and retrieves the latest version. If it specifies a version, it looks up the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/plans.terraform.appvia.io",children:"Plan"})," and checks a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," of said version exists."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"categories"}),": is a collection of tags associated to the revision, these are user facing and largely used for searching."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"description"}),": provides a human readable description of the intended use for the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"revision"}),": is semvar version associated to this revision."]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"inputs",children:"Inputs"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io#v1alpha1-.spec.configuration",children:"Inputs"})," are the options the platform team want to expose to the consumers."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"spec:\n  ## Is a list of inputs the user is permitted to override\n  inputs:\n    - key: sentence\n      description: Is a sentence we want to print\n      required: true\n      default:\n        value: hello from second additional\n    - key: vpc_id\n      description: Hello\n    - key: list\n      description: A list of names\n      default:\n        values: [a, b, c]\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"key"}),": (required) maps to the terraform variable within the module the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," is backing."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"description"}),": (required) provides a human readable description to the variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"required"}),": (optional) indicates if the user MUST specify a value."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"default.value"}),": (optional) can be a string, number, list or map and is used as the default value for the variable."]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["The last section is provides a template to the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"}),", determining the module source, default values, enabled features and so forth."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"spec:\n  configuration:\n    ## Using a public repository\n    module: https://github.com/appvia/terranetes-controller.git//test/e2e/assets/terraform/dummy?ref=master\n    ## Where to write any secrets\n    writeConnectionSecretToRef:\n      name: outputs\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Thus the managed ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/configurations.terraform.appvia.io",children:"Configuration"})," at the end is a combination of this section plus the optional inputs from above."]}),"\n",(0,i.jsx)(r.h2,{id:"how-to-create-revisions",children:"How to create Revisions?"}),"\n",(0,i.jsxs)(r.p,{children:["By hand of course, a ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/revisions.terraform.appvia.io",children:"Revision"})," is nothing more standard CRD; however using the ",(0,i.jsx)(r.a,{href:"../../cli/tnctl_create_revision/",children:"tnctl create revision"})," command."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:"tnctl create revision https://github.com/terraform-aws-modules/terraform-aws-rds?ref=v5.9.0\n"})}),"\n",(0,i.jsx)(r.h2,{id:"how-to-validate-a-revision",children:"How to validate a Revision?"}),"\n",(0,i.jsxs)(r.p,{children:["Part of the responsibility model of using ",(0,i.jsx)(r.a,{href:"/terranetes-controller/reference/cloudresources.terraform.appvia.io",children:"CloudResources"})," is passing a known and tested asset to the consumer. Terranetes tries to make this workflow simpler by using the ",(0,i.jsx)(r.a,{href:"/terranetes-controller/cli/tnctl_verify_revision",children:"tnctl verify revision"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:'$ tnctl verify revision revision.yaml\n? Input identifier is a mandatory input, what should it\'s value be? test\n\ud83d\udd30 Validating Revision Syntax\n   \u25ab\ufe0f The Revision CRD is syntactically correct with no errors found             \ud83d\udfe2\n\ud83d\udd30 Validating Revision Specification\n   \u25ab\ufe0f The Revision does not have any categories defined                          \ud83d\udfe0\n   \u25ab\ufe0f The Revision has a description defined                                     \ud83d\udfe2\n   \u25ab\ufe0f The Revision has the default description defined                           \ud83d\udfe0\n   \u25ab\ufe0f The Revision has a changelog defined                                       \ud83d\udfe2\n   \u25ab\ufe0f The Revision has the default changelog defined                             \ud83d\udfe0\n\ud83d\udd30 Validating Revision Inputs\n   \u25ab\ufe0f Checking input: backup_window                                              \ud83d\udfe2\n   \u25ab\ufe0f Checking input: allocated_storage                                          \ud83d\udfe2\n   \u25ab\ufe0f Checking input: identifier                                                 \ud83d\udfe2\n\ud83d\udd30 Retrieving Checkov Version\n   \u25ab\ufe0f Discovered Checkov version: "bridgecrew/checkov:2.3.291"                   \ud83d\udfe2\n\ud83d\udd30 Retrieving Terraform Version\n   \u25ab\ufe0f Discovered Terraform version: "hashicorp/terraform:1.5.6"                  \ud83d\udfe2\n\ud83d\udd30 Validating Module Policy permits Revision\n   \u25ab\ufe0f Found 1 module constraint policies                                         \ud83d\udfe2\n   \u25ab\ufe0f Revision is not permitted by any policy                                    \ud83d\udd34\n\ud83d\udd30 Validating Cloud Credentials Provider\n   \u25ab\ufe0f Checking if we providers associated with the revision                      \ud83d\udfe2\n   \u25ab\ufe0f Provider referenced exists in cluster                                      \ud83d\udfe2\n\ud83d\udd30 Validating of Context References\n   \u25ab\ufe0f Revision does not reference any values from context/s                      \ud83d\udfe2\n\ud83d\udd30 Validating against Checkov Security Policy\n   \u25ab\ufe0f Checkov is using the code, not the plan, consider --use-terraform-plan     \ud83d\udfe0\n   \u25ab\ufe0f Found 1 security policies to validate against                              \ud83d\udfe2\n   \u25ab\ufe0f Revision has passed 18 checks in policy: "checkov"                         \ud83d\udfe2\n   \u25ab\ufe0f Check ID against documentation: https://docs.bridgecrew.io/docs            \ud83d\udfe2\n   \u25ab\ufe0f Ensure that RDS instances have Multi-AZ enabled                            \ud83d\udd34\n      Check ID: CKV_AWS_157\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure that RDS instances have performance insights enabled                \ud83d\udd34\n      Check ID: CKV_AWS_353\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure that respective logs of Amazon Relational Database Service (Am      \ud83d\udd34\n      Check ID: CKV_AWS_129\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure that AWS database instances have deletion protection enabled        \ud83d\udd34\n      Check ID: CKV_AWS_293\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure that RDS instances has backup policy                                \ud83d\udd34\n      Check ID: CKV_AWS_133\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure that enhanced monitoring is enabled for Amazon RDS instances        \ud83d\udd34\n      Check ID: CKV_AWS_118\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Ensure CloudWatch log groups retains logs for at least 1 year              \ud83d\udd34\n      Check ID: CKV_AWS_338\n      Resource: module.main.module.db_instance.aws_cloudwatch_log_group.this\n   \u25ab\ufe0f Ensure RDS instance with copy tags to snapshots is enabled                 \ud83d\udd34\n      Check ID: CKV2_AWS_60\n      Resource: module.main.module.db_instance.aws_db_instance.this[0]\n   \u25ab\ufe0f Revision will fail on security policy: "checkov"                           \ud83d\udd34\n\n\ud83d\udfe2 Passed: 8, Warning: 4\n\ud83d\udd34 Failed: 10\n[Error]: revision failed verification checks\n'})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["The default validation checks the codebase but not the terraform plan. For a more complete validation we'd recommend passing read-only credentials and using the ",(0,i.jsx)(r.code,{children:"--use-terraform-plan"})," flag, exporting the usual environment variable such as AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and so forth."]})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function t(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);