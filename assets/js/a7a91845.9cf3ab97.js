"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[3617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="Provisioning an Database in AWS",i={unversionedId:"walkthroughs/database",id:"walkthroughs/database",title:"Provisioning an Database in AWS",description:"The following tries to encompass a walk-through of the feature set, from a platform admin and developer consumption for self-serving a database resource in the cloud.",source:"@site/docs/terranetes-controller/walkthroughs/database.md",sourceDirName:"walkthroughs",slug:"/walkthroughs/database",permalink:"/terranetes-controller/walkthroughs/database",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/walkthroughs/database.md",tags:[],version:"current",lastUpdatedBy:"Celeste",lastUpdatedAt:1688987168,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Walk Throughs",permalink:"/terranetes-controller/category/walk-throughs"},next:{title:"API Reference",permalink:"/terranetes-controller/category/api-reference"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Platform Setup",id:"platform-setup",level:2},{value:"Provision a Provider",id:"provision-a-provider",level:3},{value:"Developer Consumption",id:"developer-consumption",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"provisioning-an-database-in-aws"},"Provisioning an Database in AWS"),(0,r.kt)("p",null,"The following tries to encompass a walk-through of the feature set, from a platform admin and developer consumption for self-serving a database resource in the cloud."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This guide is assuming the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"/terranetes-controller/quick_start"},"installed")," the terranetes-controller in a cluster."),(0,r.kt)("li",{parentName:"ul"},"You have the cluster name and region is resides in"),(0,r.kt)("li",{parentName:"ul"},"You have ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," installed."),(0,r.kt)("li",{parentName:"ul"},"You have appropriate cloud credentials to provision an RDS in the account."),(0,r.kt)("li",{parentName:"ul"},"The nodegroups are using the EKS Cluster Security Group and not configured with custom groups ",(0,r.kt)("em",{parentName:"li"},"(though the data will be available in the context)"),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The guide tries to cover the step required from both a platform team perspective and developer consumption the cloud resource."),(0,r.kt)("h2",{id:"platform-setup"},"Platform Setup"),(0,r.kt)("h3",{id:"provision-a-provider"},"Provision a ",(0,r.kt)("a",{parentName:"h3",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")),(0,r.kt)("p",null,"First we need to setup credentials to speak cloud. For the purposes of the guide we will assume the controller is using static credentials (i.e IAM access keys), though see ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/providers"},"here")," for workload identity."),(0,r.kt)("p",null,"a) Lets start by create a kubernetes secret contains the IAM credentials"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl -n terraform-system create secret generic aws \\\n  --from-literal=AWS_ACCESS_KEY_ID=<ID> \\\n  --from-literal=AWS_SECRET_ACCESS_KEY=<SECRET> \\\n  --from-literal=AWS_REGION=<REGION>\n")),(0,r.kt)("p",null,"b) Provision a ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," to use the credentials"),(0,r.kt)("p",null,"We will also use this ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," to preload any ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/contexts"},"contextual data")," for us."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Lets export the name of the cluster and the region it's running\nexport CLUSTER_NAME=test\nexport CLUSTER_REGION=eu-west-2\n\ncat <<EOF | kubectl apply -f\n---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Provider\nmetadata:\n  name: aws\n  annotations:\n    terranetes.appvia.io/default-provider: \"true\"\nspec:\n  # Source and be 'secret' or 'injected'\n  source: secret\n  # Provider can be google, aws, azurerm, alicloud, azurestack, googleworkspace etc\n  provider: aws\n  # Preload Configuration\n  preload:\n    # Indicates if the preloading should be enabled\n    enabled: true\n    # Is the EKS cluster we use to pivot network and settings around\n    cluster: ${CLUSTER_NAME}\n    # Is the cloud region the cluster above resides\n    region: ${CLUSTER_REGION}\n    # Is the terranetes context resource we should provision\n    context: default\n  # Used when spec.source is secret.\n  secretRef:\n    namespace: terraform-system\n    name: aws\nEOF\n")),(0,r.kt)("p",null,"Note, once the ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/providers.terraform.appvia.io"},"Provider")," has gone healthy, the ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/contexts"},"contextual data")," will be loaded make available via ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/reference/contexts.terraform.appvia.io"},"Context")," specified above ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.preload.context")),(0,r.kt)("p",null,"You can see the data via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get contexts.terraform.appvia.io default -o yaml"),". Which will have loads, details on the cluster, networking, routing tables and so forth."),(0,r.kt)("p",null,"c) Setup a policy to limit which modules can be provisioned within the cluster"),(0,r.kt)("p",null,"For the purposes of the guide I want to limit to a single terraform module, used to provision database. I can of course scope this to one or more modules or make it namespace specific; see ",(0,r.kt)("a",{parentName:"p",href:"/terranetes-controller/admin/policy/intro"},"here")," for details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\napiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: permitted-modules\nspec:\n  constraints:\n    modules:\n      allowed:\n        - "https://github.com/terraform-aws-modules/terraform-aws-rds.*:v.*"\n')),(0,r.kt)("h2",{id:"developer-consumption"},"Developer Consumption"),(0,r.kt)("p",null,"From the developer perspective, I have an application which has a dependency on a MySQL database, and understand i'll be passed database the endpoint, username and password via environments variables, in this case mounted from a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#using-a-secret"},"Kubernetes secret")),(0,r.kt)("p",null,"a) Lets create a namespace for our application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace apps\n")),(0,r.kt)("p",null,"b) Lets provision a Database via a Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export DATABASE_NAME=\"demo\"\n\ncat <<EOF | kubectl\n---\napiVersion: terraform.appvia.io/v1alpha1\nkind: Configuration\nmetadata:\n  name: database\n  namespace: apps\nspec:\n  module: https://github.com/terraform-aws-modules/terraform-aws-rds.git?ref=v5.9.0\n\n  # We are going to consume the contextual data from the context\n  valueFrom:\n    - context: default\n      # We will place the database on the private subnets\n      key: private_subnet_ids\n      # We will map to this the following in the module\n      name: subnet_ids\n\n    - context: default\n      # Nodegroups in our infra are using the cluster security\n      # group\n      key: eks_cluster_security_group_ids\n      # We map this to the following in the module\n      name: vpc_security_group_ids\n\n  writeConnectionSecretToRef:\n    name: database\n    keys:\n      - db_instance_address:database_hostname\n      - db_instance_username:database_username\n      - db_instance_password:database_password\n      - db_instance_port:database_port\n\n  variables:\n    allocated_storage: 5\n    create_db_subnet_group: true\n    db_name: ${DATABASE_NAME}\n    engine: mysql\n    engine_version: '5.7'\n    family: mysql5.7\n    identifier: ${DATABASE_NAME}\n    instance_class: db.t2.large\n    major_engine_version: '5.7'\n    port: 3306\n    skip_final_snapshot: true\n    username: root\n\n    parameters:\n      - name: character_set_client\n        value: utf8mb4\n      - name: character_set_server\n        value: utf8mb4\n")),(0,r.kt)("p",null,"c) Our application can consume the cloud resource"),(0,r.kt)("p",null,"Note we are just using a ",(0,r.kt)("inlineCode",{parentName:"p"},"mariadb")," container here to verify access, as a replacement for application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -n apps -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: frontend\n  labels:\n    app: frontend\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: frontend\n  template:\n    metadata:\n      labels:\n        app: frontend\n    spec:\n      containers:\n      - name: application\n        image: mariadb\n        stdin: true\n        tty: true\n        command: [sh]\n        envFrom:\n          - secretRef:\n              name: database\n")),(0,r.kt)("p",null,"You can verify access via"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apps exec -ti $(kubectl -n apps get pod --label app=frontend) sh\n")),(0,r.kt)("p",null,"And access the cluster via ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," cli by running the below command and entering the database user password when prompted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h ${DATABASE_HOSTNAME} -P ${DATABASE_PORT} -u ${DATABASE_USERNAME} -p\nEnter password:\n")))}u.isMDXComponent=!0}}]);