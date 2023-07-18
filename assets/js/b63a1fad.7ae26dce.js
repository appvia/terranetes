"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||n;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2},i="Platform Team",l={unversionedId:"workflows/platform",id:"workflows/platform",title:"Platform Team",description:"Setting up workflows",source:"@site/docs/terranetes-controller/workflows/platform.md",sourceDirName:"workflows",slug:"/workflows/platform",permalink:"/terranetes-controller/workflows/platform",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/workflows/platform.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1689676832,formattedLastUpdatedAt:"Jul 18, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are workflows",permalink:"/terranetes-controller/workflows/intro"},next:{title:"Developer",permalink:"/terranetes-controller/workflows/developer"}},s={},p=[{value:"Setting up workflows",id:"setting-up-workflows",level:2},{value:"Current Checks",id:"current-checks",level:3},{value:"On the Roadmap",id:"on-the-roadmap",level:3},{value:"Authoring a module",id:"authoring-a-module",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platform-team"},"Platform Team"),(0,o.kt)("h2",{id:"setting-up-workflows"},"Setting up workflows"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"terranetes-workflows")," resides at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-workflows"},"https://github.com/appvia/terranetes-workflows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the repository into the Github organization and update the repository settings to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository"},"Github Template"),"."),(0,o.kt)("li",{parentName:"ol"},"If your organization has a central Checkov policies repository update the ",(0,o.kt)("inlineCode",{parentName:"li"},"POLICY_SOURCE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"POLICY_VERSION")," in the Github workflows, pointing to the repository and tag ",(0,o.kt)("em",{parentName:"li"},"(tag is optional)"),". If you don't have a central repository, its fine, the security checks will use the default rules."),(0,o.kt)("li",{parentName:"ol"},"If you wish to enable ",(0,o.kt)("a",{parentName:"li",href:"https://www.infracost.io/"},"Infracost")," integration, add an organizational secret named ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG_INFRACOST_API_KEY"),". On pull requests will be comment on the breakdown or the diff in predicted costs.")),(0,o.kt)("h3",{id:"current-checks"},"Current Checks"),(0,o.kt)("p",null,"Bundled in the template is a collection of Github workflows assessing;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checkov Security Rules"),(0,o.kt)("li",{parentName:"ul"},"Code Format"),(0,o.kt)("li",{parentName:"ul"},"Commit messages linting (consistent changelogs)"),(0,o.kt)("li",{parentName:"ul"},"Cost Estimations (Infracost)"),(0,o.kt)("li",{parentName:"ul"},"Module Docs (terraform-docs)"),(0,o.kt)("li",{parentName:"ul"},"Terraform Code Validation")),(0,o.kt)("p",null,"Currently we only support Github actions, though the intention is to replicate the actions for Gitlab and CircleCI."),(0,o.kt)("h3",{id:"on-the-roadmap"},"On the Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scheduled jobs to re-evaluate the security checks."),(0,o.kt)("li",{parentName:"ul"},"Automatically raising pull requests when central policy is updated.")),(0,o.kt)("h2",{id:"authoring-a-module"},"Authoring a module"),(0,o.kt)("p",null,"The following walks the iteration of provisioning a new terraform module using workflows."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"This is not a terraform tutorial, so for our purposes we will be wrapping an existing module\n::::"),(0,o.kt)("h3",{parentName:"admonition",id:"create-the-module"},"Create the module"),(0,o.kt)("p",{parentName:"admonition"},"Assuming you have cloned the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-workflows"},"repository")," to a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository"},"Github template")," in your organization. Create a repository via the UI or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cli/cli"},"Github CLI")),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo create appvia/terraform-aws-rds --template appvia/terranetes-workflows\n")),(0,o.kt)("p",{parentName:"admonition"},"Ensure you've added an appropriate description, as the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/cli/tnctl_search"},"tnctl search")," command uses the terms found here to filter on."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'gh repo edit appvia/terraform-aws-rds --description "Terraform module used to provision a RDS database"\n')),(0,o.kt)("p",{parentName:"admonition"},"Alternatively you can replicate via the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/cli/tnctl_workflow_create"},"tnctl workflow create")," command"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tnctl workflow create terraform-aws-rds --template URL\n")),(0,o.kt)("h3",{parentName:"admonition",id:"adding-the-code"},"Adding the code"),(0,o.kt)("p",{parentName:"admonition"},"Your are now ready to start adding the terraform code. Open the branch and pull request"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b feat_adding_code\n# add code and commit\ngh pr create\n")),(0,o.kt)("p",{parentName:"admonition"},"Github actions will assess, review and update the pull requests with appropriate comments."),(0,o.kt)("h3",{parentName:"admonition",id:"publish-the-artifact"},"Publish the artifact"),(0,o.kt)("p",{parentName:"admonition"},"By default all tags ",(0,o.kt)("inlineCode",{parentName:"p"},"v[SEMVER]")," automatically create a Github release and changelog. Assuming the ","[tnctl search]","(/terranetes-controller/cli/tnctl_search] is using your Github organization as a source the artifact is now immediately searchable."),(0,o.kt)("p",{parentName:"admonition"},"For public repositories the Terraform registry offers a nice solution to central point to distribute, view and search for resources. At present you must perform this on a per repository basis. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/sign-in"},"https://registry.terraform.io/sign-in")),(0,o.kt)("p",{parentName:"admonition"},"For private repositories take a look at"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/outsideris/citizen"},"https://github.com/outsideris/citizen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SwissArmyRonin/terraform-aws-registry"},"https://github.com/SwissArmyRonin/terraform-aws-registry"))),(0,o.kt)("h3",{parentName:"admonition",id:"find-the-artifact"},"Find the artifact"),(0,o.kt)("p",{parentName:"admonition"},"The release should now be available from your Github organization ",(0,o.kt)("inlineCode",{parentName:"p"},"tnctl search rds"),".")))}c.isMDXComponent=!0}}]);