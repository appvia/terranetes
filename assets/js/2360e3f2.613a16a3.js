"use strict";(self.webpackChunkterranetes=self.webpackChunkterranetes||[]).push([[9796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:90},i="Customize Job Template",l={unversionedId:"admin/template",id:"admin/template",title:"Customize Job Template",description:"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this here.",source:"@site/docs/terranetes-controller/admin/template.md",sourceDirName:"admin",slug:"/admin/template",permalink:"/terranetes-controller/admin/template",draft:!1,editUrl:"https://github.com/appvia/terranetes/tree/master/docs/terranetes-controller/admin/template.md",tags:[],version:"current",lastUpdatedBy:"Rohith Jayawardene",lastUpdatedAt:1675621533,formattedLastUpdatedAt:"Feb 5, 2023",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/terranetes-controller/admin/observability/metrics"},next:{title:"Additional Secrets",permalink:"/terranetes-controller/admin/secrets"}},c={},p=[{value:"Overriding the template",id:"overriding-the-template",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customize-job-template"},"Customize Job Template"),(0,a.kt)("p",null,"When a configuration is changed (i.e. for plan, apply or destroy), the controller uses a template to render the final job configuration, taking the options provided on the controller command line, custom policies and the terraform configuration itself. A batch job is created from all the options and ordered to execute the change. You can find the default template for this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/appvia/terranetes-controller/blob/master/pkg/assets/job.yaml.tpl"},"here"),"."),(0,a.kt)("h3",{id:"overriding-the-template"},"Overriding the template"),(0,a.kt)("p",null,"While not required in the vast majority of cases this template can be overridden, allowing platform engineers to customize the pipeline. You might want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a notification on failed configuration, or send a notification when a configuration fails policy."),(0,a.kt)("li",{parentName:"ul"},"Add a new feature into the pipeline such as swapping out the default ",(0,a.kt)("a",{parentName:"li",href:"https://www.checkov.io"},"checkov")," for another policy engine.")),(0,a.kt)("p",null,"You can change the template by uploading a configmap into the namespace where the controller lives:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# create the template configmap (note the key name of job.yaml)\n$ kubectl -n terraform-system create configmap template --from-file=job.yaml=<PATH>\n\n# update the helm values to override the template\ncontroller:\n  templates:\n    job: <NAME_OF_CONFIG_MAP>\n")))}m.isMDXComponent=!0}}]);