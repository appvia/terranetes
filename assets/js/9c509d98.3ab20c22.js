"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,sidebar_class_name:"green"},i="Checkov Policy",l={unversionedId:"admin/policy/checkov",id:"admin/policy/checkov",title:"Checkov Policy",description:"Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage.",source:"@site/docs/terranetes-controller/admin/policy/checkov.md",sourceDirName:"admin/policy",slug:"/admin/policy/checkov",permalink:"/terranetes-controller/admin/policy/checkov",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/policy/checkov.md",tags:[],version:"current",lastUpdatedBy:"Alastair Hinde",lastUpdatedAt:1686579314,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Module Restrictions",permalink:"/terranetes-controller/admin/policy/modules"},next:{title:"Configuration Contexts",permalink:"/terranetes-controller/admin/contexts"}},s={},c=[{value:"Using External Policy Source",id:"using-external-policy-source",level:2},{value:"Using Checkov Policy Defaults",id:"using-checkov-policy-defaults",level:2},{value:"Using External Checks",id:"using-external-checks",level:3},{value:"Rules for selecting the security policy",id:"rules-for-selecting-the-security-policy",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkov-policy"},"Checkov Policy"),(0,a.kt)("p",null,"Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage."),(0,a.kt)("p",null,"Once the security plan is performed the report is processed and, assuming no failed checks, is allowed to continue on to be applied (either automatically or via the annotation)."),(0,a.kt)("h2",{id:"using-external-policy-source"},"Using External Policy Source"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This the recommended method for implementing Checkov policy as it stitches together the various elements in the chain; from authoring to consumption. As the same policies can be referenced by your CI and runtime enforcement. ",(0,a.kt)("strong",{parentName:"p"},"Note this option is only available from >= v0.3.7"))),(0,a.kt)("p",null,"The controller has the ability to source in an external repository used to house the Checkov policies. A common scenario would be a shared policy repository with Checkov configuration and external checks and shared between the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/workflows/intro/"},"Workflows")," and this runtime enforcement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    # Optional: allows you to filter on which configurations the policy should apply. If left\n    # blank, this policy is a catch-all and applied to all terraform configurations.\n    selector:\n      # Used to filter on namespace labels\n      namespace:\n        matchLabels: {}\n        matchExpressions: []\n      # Used to filter on the configuration labels\n      resource:\n        matchLabels: {}\n        matchExpressions: []\n\n    checkov:\n      source:\n        # Is the path of the configuration file which holds the Checkov config i.e\n        # .checkov.yaml or config.yaml\n        configuration: PATH\n        # Is the source of the repository; the syntax for this follows the same\n        # format as for modules.\n        url: SOURCE\n        # Is an optional reference to a secret which contains credentials used to\n        # source the external repository. Note, as it stands this must be within the\n        # same namespace as the controller.\n        secret:\n          name: NAME\n          namespace: NAMESPACE\n")),(0,a.kt)("h2",{id:"using-checkov-policy-defaults"},"Using Checkov Policy Defaults"),(0,a.kt)("p",null,"An alternative approach is to rely on the product default and use toggles, ",(0,a.kt)("inlineCode",{parentName:"p"},"skipChecks")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"checks")," to enable or disable checks. The downside from this method is the lack of central policy; under these conditions the enforcement policy is arbitrary to the configuration of the policies in said cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    # Allows you to filter on which configurations the policy should apply. If left\n    # blank, this policy is a catch-all and applied to all terraform configurations.\n    selector:\n      # Used to filter on namespace labels\n      namespace:\n        matchLabels: {}\n        matchExpressions: []\n      # Used to filter on the configuration labels\n      resource:\n        matchLabels: {}\n        matchExpressions: []\n\n    checkov:\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      checks: []\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      skipChecks: []\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If no ",(0,a.kt)("inlineCode",{parentName:"li"},"checkov.checks")," are defined, the entire checkov suite is evaluated."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"checkov.skipChecks")," are defined, those will be ignored during evaluation."))),(0,a.kt)("h3",{id:"using-external-checks"},"Using External Checks"),(0,a.kt)("p",null,"The controller also has the ability to source multiple ",(0,a.kt)("a",{parentName:"p",href:"https://www.checkov.io/3.Custom%20Policies/Custom%20Policies%20Overview.html"},"custom policies"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    checkov:\n      external:\n        - name: custom\n          url: https://[LOCATION]\n          secretRef:\n            name: [SECRET]\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The URL uses the same format at the ","[Configuration]","(/terranetes-controller/reference/configurations.terraform.appvia.io] CRD."),(0,a.kt)("li",{parentName:"ol"},"The secretRef is optional and used to store any credentials used to retrieves the assets. Like ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," we support object stores, git repositories and so forth."),(0,a.kt)("li",{parentName:"ol"},"All assets found in the source are retrieved and used an ",(0,a.kt)("a",{parentName:"li",href:"https://www.checkov.io/2.Basics/CLI%20Command%20Reference.html"},"external-checks-dir")," option to the scan.")),(0,a.kt)("h2",{id:"rules-for-selecting-the-security-policy"},"Rules for selecting the security policy"),(0,a.kt)("p",null,"You can define multiple checkov policies using selectors to target specific workloads, however, only can match. The selection process for this is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the checkov policy does not have a selector it is applied to all resources."),(0,a.kt)("li",{parentName:"ol"},"If the checkov policy has a matching namespace selector it adds additional priority/weight."),(0,a.kt)("li",{parentName:"ol"},"If the checkov policy has a matching resource selector it adds even more priority/weight."),(0,a.kt)("li",{parentName:"ol"},"The total weights are added up and the highest matching checkov policy is used."),(0,a.kt)("li",{parentName:"ol"},"If you have checkov policies with the same weight, the controller throws an error.")),(0,a.kt)("p",null,"At the end we have selected the checkov policy which is most specific to our Configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why not merge multiple policies?")),(0,a.kt)("p",null,"We had the same idea, whereby we'd simply merge multiple policies together. The reasoning here is that adding an additional policy is needed to allow for an exception to the rule. For example, if we define that all RDS databases must use encryption, but project 'A' can't do that, we need an exception. But policies are enforced because they strengthen security, so adding exceptions should be difficult/annoying in order to push for the better solution: fixing project A's lack of compliance."))}h.isMDXComponent=!0}}]);