"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9032],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=a,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2010:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:3,sidebar_class_name:"green"},i="Checkov Policy",l={unversionedId:"admin/policy/checkov",id:"admin/policy/checkov",title:"Checkov Policy",description:"Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage.",source:"@site/docs/terranetes-controller/admin/policy/checkov.md",sourceDirName:"admin/policy",slug:"/admin/policy/checkov",permalink:"/terranetes-controller/admin/policy/checkov",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/policy/checkov.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1662029886,formattedLastUpdatedAt:"Sep 1, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Module Restrictions",permalink:"/terranetes-controller/admin/policy/modules"},next:{title:"Default Variables",permalink:"/terranetes-controller/admin/policy/defaults"}},c={},s=[{value:"Using External Policy Source",id:"using-external-policy-source",level:2},{value:"Using Checkov Policy Defaults",id:"using-checkov-policy-defaults",level:2},{value:"Using External Checks",id:"using-external-checks",level:3},{value:"Rules for selecting the security policy",id:"rules-for-selecting-the-security-policy",level:2}],p={toc:s};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"checkov-policy"},"Checkov Policy"),(0,a.kt)("p",null,"Security policy allows platform teams to be assured what they are allowing to be self-serviced follows what they and the organization deem to be best practice. All terraform configurations are funnelled through a security check as part of the plan stage."),(0,a.kt)("p",null,"Once the security plan is performed the report is processed and, assuming no failed checks, is allowed to continue on to be applied (either automatically or via the annotation)."),(0,a.kt)("h2",{id:"using-external-policy-source"},"Using External Policy Source"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This the recommended method for implementing Checkov policy as it stitches together the various elements in the chain; from authoring to consumption. As the same policies can be referenced by your CI and runtime enforcement.")),(0,a.kt)("p",null,"The controller has the ability to source in an external repository used to house the Checkov policies. A common scenario would be a shared policy repository with Checkov configuration and external checks and shared between the ",(0,a.kt)("a",{parentName:"p",href:"/terranetes-controller/workflows/intro/"},"Workflows")," and this runtime enforcement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    # Optional: allows you to filter on which configurations the policy should apply. If left\n    # blank, this policy is a catch-all and applied to all terraform configurations.\n    selector:\n      # Used to filter on namespace labels\n      namespace:\n        matchLabels: {}\n        matchExpressions: []\n      # Used to filter on the configuration labels\n      resource:\n        matchLabels: {}\n        matchExpressions: []\n\n    checkov:\n      source:\n        # Is the path of the configuration file which holds the Checkov config i.e\n        # .checkov.yaml or config.yaml\n        configuration: PATH\n        # Is the source of the repository; the syntax for this follows the same\n        # format as for modules.\n        url: SOURCE\n        # Is an optional reference to a secret which contains credentials used to\n        # source the external repository. Note, as it stands this must be within the\n        # same namespace as the controller.\n        secret:\n          name: NAME\n          namespace: NAMESPACE\n")),(0,a.kt)("h2",{id:"using-checkov-policy-defaults"},"Using Checkov Policy Defaults"),(0,a.kt)("p",null,"An alternative approach is to rely on the product default and use toggles, ",(0,a.kt)("inlineCode",{parentName:"p"},"skipChecks")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"checks")," to enable or disable checks. The downside from this method is the lack of central policy; under these conditions the enforcement policy is arbitrary to the configuration of the policies in said cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    # Allows you to filter on which configurations the policy should apply. If left\n    # blank, this policy is a catch-all and applied to all terraform configurations.\n    selector:\n      # Used to filter on namespace labels\n      namespace:\n        matchLabels: {}\n        matchExpressions: []\n      # Used to filter on the configuration labels\n      resource:\n        matchLabels: {}\n        matchExpressions: []\n\n    checkov:\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      checks: []\n      # See: https://www.checkov.io/5.Policy%20Index/terraform.html\n      skipChecks: []\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If no ",(0,a.kt)("inlineCode",{parentName:"li"},"checkov.checks")," are defined, the entire checkov suite is evaluated."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"checkov.skipChecks")," are defined, those will be ignored during evaluation."))),(0,a.kt)("h3",{id:"using-external-checks"},"Using External Checks"),(0,a.kt)("p",null,"The controller also has the ability to source multiple ",(0,a.kt)("a",{parentName:"p",href:"https://www.checkov.io/3.Custom%20Policies/Custom%20Policies%20Overview.html"},"custom policies"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: terraform.appvia.io/v1alpha1\nkind: Policy\nmetadata:\n  name: checkov\nspec:\n  constraints:\n    checkov:\n      external:\n        - name: custom\n          url: https://[LOCATION]\n          secretRef:\n            name: [SECRET]\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The URL uses the same format at the ","[Configuration]","(/terranetes-controller/reference/configurations.terraform.appvia.io] CRD."),(0,a.kt)("li",{parentName:"ol"},"The secretRef is optional and used to store any credentials used to retrieves the assets. Like ",(0,a.kt)("a",{parentName:"li",href:"/terranetes-controller/reference/configurations.terraform.appvia.io"},"Configurations")," we support object stores, git repositories and so forth."),(0,a.kt)("li",{parentName:"ol"},"All assets found in the source are retrieved and used an ",(0,a.kt)("a",{parentName:"li",href:"https://www.checkov.io/2.Basics/CLI%20Command%20Reference.html"},"external-checks-dir")," option to the scan.")),(0,a.kt)("h2",{id:"rules-for-selecting-the-security-policy"},"Rules for selecting the security policy"),(0,a.kt)("p",null,"You can define multiple checkov policies using selectors to target specific workloads, however, only can match. The selection process for this is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the checkov policy does not have a selector it is applied to all resources."),(0,a.kt)("li",{parentName:"ol"},"If the checkov policy has a matching namespace selector it adds additional priority/weight."),(0,a.kt)("li",{parentName:"ol"},"If the checkov policy has a matching resource selector it adds even more priority/weight."),(0,a.kt)("li",{parentName:"ol"},"The total weights are added up and the highest matching checkov policy is used."),(0,a.kt)("li",{parentName:"ol"},"If you have checkov policies with the same weight, the controller throws an error.")),(0,a.kt)("p",null,"At the end we have selected the checkov policy which is most specific to our Configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why not merge multiple policies?")),(0,a.kt)("p",null,"We had the same idea, whereby we'd simply merge multiple policies together. The reasoning here is that adding an additional policy is needed to allow for an exception to the rule. For example, if we define that all RDS databases must use encryption, but project 'A' can't do that, we need an exception. But policies are enforced because they strengthen security, so adding exceptions should be difficult/annoying in order to push for the better solution: fixing project A's lack of compliance."))}h.isMDXComponent=!0}}]);