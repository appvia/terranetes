"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[9580],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6863:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Platform Team",p={unversionedId:"workflows/platform",id:"workflows/platform",title:"Platform Team",description:"Setting up workflows",source:"@site/docs/terranetes-controller/workflows/platform.md",sourceDirName:"workflows",slug:"/workflows/platform",permalink:"/terranetes-controller/workflows/platform",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/workflows/platform.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1660134412,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are workflows",permalink:"/terranetes-controller/workflows/intro"},next:{title:"Developer",permalink:"/terranetes-controller/workflows/developer"}},c={},u=[{value:"Setting up workflows",id:"setting-up-workflows",level:2},{value:"Current Checks",id:"current-checks",level:3},{value:"On the Roadmap",id:"on-the-roadmap",level:3},{value:"Authoring a module",id:"authoring-a-module",level:2},{value:"Create the module",id:"create-the-module",level:3},{value:"Adding the code",id:"adding-the-code",level:3},{value:"Publish the artifact",id:"publish-the-artifact",level:3},{value:"Find the artifact",id:"find-the-artifact",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platform-team"},"Platform Team"),(0,o.kt)("h2",{id:"setting-up-workflows"},"Setting up workflows"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"terranetes-workflows")," resides at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-workflows"},"https://github.com/appvia/terranetes-workflows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the repository into the Github organization and update the repository settings to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository"},"Github Template"),"."),(0,o.kt)("li",{parentName:"ol"},"If your organization has a central Checkov policies repository update the ",(0,o.kt)("inlineCode",{parentName:"li"},"POLICY_SOURCE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"POLICY_VERSION")," in the Github workflows, pointing to the repository and tag ",(0,o.kt)("em",{parentName:"li"},"(tag is optional)"),". If you don't have a central repository, its fine, the security checks will use the default rules."),(0,o.kt)("li",{parentName:"ol"},"If you wish to enable ",(0,o.kt)("a",{parentName:"li",href:"https://www.infracost.io/"},"Infracost")," integration, add an organizational secret named ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG_INFRACOST_API_KEY"),". On pull requests will be comment on the breakdown or the diff in predicted costs.")),(0,o.kt)("h3",{id:"current-checks"},"Current Checks"),(0,o.kt)("p",null,"Bundled in the template is a collection of Github workflows assessing;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Checkov Security Rules"),(0,o.kt)("li",{parentName:"ul"},"Code Format"),(0,o.kt)("li",{parentName:"ul"},"Commit messages linting (consistent changelogs)"),(0,o.kt)("li",{parentName:"ul"},"Cost Estimations (Infracost)"),(0,o.kt)("li",{parentName:"ul"},"Module Docs (terraform-docs)"),(0,o.kt)("li",{parentName:"ul"},"Terraform Code Validation")),(0,o.kt)("p",null,"Currently we only support Github actions, though the intention is to replicate the actions for Gitlab and CircleCI."),(0,o.kt)("h3",{id:"on-the-roadmap"},"On the Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Scheduled jobs to re-evaluate the security checks."),(0,o.kt)("li",{parentName:"ul"},"Automatically raising pull requests when central policy is updated.")),(0,o.kt)("h2",{id:"authoring-a-module"},"Authoring a module"),(0,o.kt)("p",null,"The following walks the iteration of provisioning a new terraform module using workflows."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is not a terraform tutorial, so for our purposes we will be wrapping an existing module"))),(0,o.kt)("h3",{id:"create-the-module"},"Create the module"),(0,o.kt)("p",null,"Assuming you have cloned the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-workflows"},"repository")," to a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository"},"Github template")," in your organization. Create a repository via the UI or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cli/cli"},"Github CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo create appvia/terraform-aws-rds --template appvia/terranetes-workflows\n")),(0,o.kt)("p",null,"Ensure you've added an appropriate description, as the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/cli/tnctl_search"},"tnctl search")," command uses the terms found here to filter on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'gh repo edit appvia/terraform-aws-rds --description "Terraform module used to provision a RDS database"\n')),(0,o.kt)("p",null,"Alternatively you can replicate via the ",(0,o.kt)("a",{parentName:"p",href:"/terranetes-controller/cli/tnctl_workflow_create"},"tnctl workflow create")," command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tnctl workflow create terraform-aws-rds --template URL\n")),(0,o.kt)("h3",{id:"adding-the-code"},"Adding the code"),(0,o.kt)("p",null,"Your are now ready to start adding the terraform code. Open the branch and pull request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b feat_adding_code\n# add code and commit\ngh pr create\n")),(0,o.kt)("p",null,"Github actions will assess, review and update the pull requests with appropriate comments."),(0,o.kt)("h3",{id:"publish-the-artifact"},"Publish the artifact"),(0,o.kt)("p",null,"By default all tags ",(0,o.kt)("inlineCode",{parentName:"p"},"v[SEMVER]")," automatically create a Github release and changelog. Assuming the ","[tnctl search]","(/terranetes-controller/cli/tnctl_search] is using your Github organization as a source the artifact is now immediately searchable."),(0,o.kt)("p",null,"For public repositories the Terraform registry offers a nice solution to central point to distribute, view and search for resources. At present you must perform this on a per repository basis. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/sign-in"},"https://registry.terraform.io/sign-in")),(0,o.kt)("p",null,"For private repositories take a look at"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/outsideris/citizen"},"https://github.com/outsideris/citizen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SwissArmyRonin/terraform-aws-registry"},"https://github.com/SwissArmyRonin/terraform-aws-registry"))),(0,o.kt)("h3",{id:"find-the-artifact"},"Find the artifact"),(0,o.kt)("p",null,"The release should now be available from your Github organization ",(0,o.kt)("inlineCode",{parentName:"p"},"tnctl search rds"),"."))}d.isMDXComponent=!0}}]);