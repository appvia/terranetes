"use strict";(self.webpackChunkterraform_controller_docs=self.webpackChunkterraform_controller_docs||[]).push([[7023],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},207:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],l={sidebar_position:1},s="What are workflows",c={unversionedId:"workflows/intro",id:"workflows/intro",title:"What are workflows",description:'\ud83d\udcac "In essence an opinion on a piece of paper"',source:"@site/docs/terraform-controller/workflows/intro.md",sourceDirName:"workflows",slug:"/workflows/intro",permalink:"/terraform-controller/workflows/intro",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terraform-controller/workflows/intro.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1657105032,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/terraform-controller/category/workflows"},next:{title:"Platform Team",permalink:"/terraform-controller/workflows/platform"}},p={},u=[{value:"What were the goals?",id:"what-were-the-goals",level:2},{value:"\ud83d\udfe2 <strong>An agnostic pipeline</strong>",id:"-an-agnostic-pipeline",level:4},{value:"\ud83d\udfe2 <strong>Fail early, fail fast</strong>",id:"-fail-early-fail-fast",level:4},{value:"\ud83d\udfe2 <strong>Bake nothing into the product</strong>",id:"-bake-nothing-into-the-product",level:4},{value:"\ud83d\udfe2 <strong>An opinionated workflow</strong>",id:"-an-opinionated-workflow",level:4},{value:"\ud83d\udfe2 <strong>Distribution is a problem</strong>",id:"-distribution-is-a-problem",level:4}],f={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-workflows"},"What are workflows"),(0,a.kt)("p",null,"\ud83d\udcac ",(0,a.kt)("em",{parentName:"p"},'"In essence an opinion on a piece of paper"')),(0,a.kt)("p",null,"Providing functionality and features isn't complicated; open source overflows with solutions to things. But providing a ",(0,a.kt)("strong",{parentName:"p"},"way of working")," is more useful. Workflows is a stamp of opinion of how devops can iterate, review and publish modules and developers can find, search and consume cloud resources. The workflow isn't revolutionary, it's deliberately simple. If you already have a good process already, feel free to ignore. Use it as a template, that's fine too, or even better yet, raise a pull request and improve it."),(0,a.kt)("h2",{id:"what-were-the-goals"},"What were the goals?"),(0,a.kt)("p",null,"The following provides a glance overview of what we were trying to achieve."),(0,a.kt)("h4",{id:"-an-agnostic-pipeline"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"h4"},"An agnostic pipeline")),(0,a.kt)("p",null,"It shouldn't matter if the terraform module is consumed by another pipeline or the terranetes controller. The suggested workflow should work for both."),(0,a.kt)("h4",{id:"-fail-early-fail-fast"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"h4"},"Fail early, fail fast")),(0,a.kt)("p",null,"Technical controls are often too late in the game, i.e. at runtime. Admission control is a prime example of this, blocking the request on submission. At best this becomes an irritation and waste of time, as a user moves back and forth trying to bring the deployment inline with compliance. At worst it's potential downtime as you apply in one environment just to fail in another. While the technical control is always there we want to ensure those same checks are performed in the pipeline, known upfront and fail early."),(0,a.kt)("h4",{id:"-bake-nothing-into-the-product"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"h4"},"Bake nothing into the product")),(0,a.kt)("p",null,"The workflow is there to 'encourage' good practice, act as a template rather then pigeon hole teams in."),(0,a.kt)("h4",{id:"-an-opinionated-workflow"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"h4"},"An opinionated workflow")),(0,a.kt)("p",null,"Stitching together a good foundation, community tools and pipeline to iterate a terraform from creation, review and through to consumption. Were not reinventing the wheel just providing an out of the box solution."),(0,a.kt)("h4",{id:"-distribution-is-a-problem"},"\ud83d\udfe2 ",(0,a.kt)("strong",{parentName:"h4"},"Distribution is a problem")),(0,a.kt)("p",null,"Work in any large organization and duplication becomes a issue, with numerous modules rehashing the same functionality over and over. Before you know it you've got 20 modules all provisioning an S3 bucket. Beyond the comically waste of time, you now have a maintenance penality not to mention a lack of governance."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which is being used, where?"),(0,a.kt)("li",{parentName:"ul"},"Which is compliant, follows company guidelines and so forth.")))}d.isMDXComponent=!0}}]);