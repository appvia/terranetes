"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:90},i="Customize Job Template",l={unversionedId:"admin/template",id:"admin/template",title:"Customize Job Template",description:"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this here.",source:"@site/docs/terranetes-controller/admin/template.md",sourceDirName:"admin",slug:"/admin/template",permalink:"/terranetes-controller/admin/template",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/template.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1708602087,formattedLastUpdatedAt:"Feb 22, 2024",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Kubernetes RBAC",permalink:"/terranetes-controller/admin/rbac"},next:{title:"Additional Secrets",permalink:"/terranetes-controller/admin/secrets"}},c={},p=[{value:"Overriding the template",id:"overriding-the-template",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize-job-template"},"Customize Job Template"),(0,o.kt)("p",null,"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-controller/blob/master/pkg/assets/job.yaml.tpl"},"here"),"."),(0,o.kt)("h3",{id:"overriding-the-template"},"Overriding the template"),(0,o.kt)("p",null,"While not required in the vast majority of cases this template can be overridden, allowing platform engineers to customize the pipeline. You might want to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a notification on failed configuration, or send a notification when a configuration fails policy."),(0,o.kt)("li",{parentName:"ul"},"Add a new feature into the pipeline such as swapping out the default ",(0,o.kt)("a",{parentName:"li",href:"https://www.checkov.io"},"checkov")," for another policy engine.")),(0,o.kt)("p",null,"You can change the template by uploading a configmap into the namespace where the controller lives:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create the template configmap (note the key name of job.yaml)\n$ kubectl -n terraform-system create configmap template --from-file=job.yaml=<PATH>\n\n# update the helm values to override the template\ncontroller:\n  templates:\n    job: <NAME_OF_CONFIG_MAP>\n")))}m.isMDXComponent=!0}}]);