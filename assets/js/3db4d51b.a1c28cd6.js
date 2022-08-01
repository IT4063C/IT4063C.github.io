"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:4,title:"Module 4: Working with Data Sources",sidebar_label:"4. Working with Data Sources"},i=void 0,l={unversionedId:"weekly-modules/module4",id:"weekly-modules/module4",title:"Module 4: Working with Data Sources",description:"Overview",source:"@site/content/instructor/weekly-modules/module4.md",sourceDirName:"weekly-modules",slug:"/weekly-modules/module4",permalink:"/instructor/weekly-modules/module4",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/instructor/weekly-modules/module4.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1650658565,formattedLastUpdatedAt:"Apr 22, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Module 4: Working with Data Sources",sidebar_label:"4. Working with Data Sources"},sidebar:"notes",previous:{title:"3. The Big Pictures + Ask",permalink:"/instructor/weekly-modules/module3"},next:{title:"6. Data Wrangling",permalink:"/instructor/weekly-modules/module6"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Learning Outcomes",id:"learning-outcomes",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Media",id:"media",level:2},{value:"Resources",id:"resources",level:2},{value:"TODO",id:"todo",level:4}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,n.kt)("h2",{id:"checklist"},"Checklist"),(0,n.kt)("h2",{id:"media"},"Media"),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("h4",{id:"todo"},"TODO"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Record a module video"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Find Different Datasets of Different Data Sources for the exercies.")),(0,n.kt)("p",null,"pymongo\n",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/blog/post/getting-started-with-mongodb-pyspark-and-jupyter-notebook"},"https://www.mongodb.com/blog/post/getting-started-with-mongodb-pyspark-and-jupyter-notebook")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://medium.com/@pragya_paudyal/connecting-mongodb-to-jupyter-notebook-e3f636a85830"},"https://medium.com/@pragya_paudyal/connecting-mongodb-to-jupyter-notebook-e3f636a85830")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/heres-how-to-run-sql-in-jupyter-notebooks-f26eb90f3259"},"https://towardsdatascience.com/heres-how-to-run-sql-in-jupyter-notebooks-f26eb90f3259")))}d.isMDXComponent=!0}}]);