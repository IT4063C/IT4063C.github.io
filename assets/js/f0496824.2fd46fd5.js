"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:5,title:"Misc."},l=void 0,s={unversionedId:"misc",id:"misc",title:"Misc.",description:"Government Data",source:"@site/content/guides/misc.md",sourceDirName:".",slug:"/misc",permalink:"/guides/misc",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/misc.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1656268219,formattedLastUpdatedAt:"Jun 26, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Misc."},sidebar:"allInOne",previous:{title:"Interesting Datasets",permalink:"/guides/datasets"}},o={},p=[{value:"Government Data",id:"government-data",level:2},{value:"Ohio and Cincinnati",id:"ohio-and-cincinnati",level:2},{value:"Datasets available via code",id:"datasets-available-via-code",level:2},{value:"Others",id:"others",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"government-data"},"Government Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.gov/"},"United States Government Open Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.census.gov/cedsci/"},"United States Census Data"))),(0,i.kt)("h2",{id:"ohio-and-cincinnati"},"Ohio and Cincinnati"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.ohio.gov/wps/portal/gov/data/view"},"Data.Ohio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.cincinnati-oh.gov/browse?category=Thriving+Neighborhoods"},"Cincinnati Data.Ohio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.cincinnati-oh.gov/safety/PDI-Police-Data-Initiative-Crime-Incidents/k59e-2pvf"},"Cincinnati Crime Incidents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://insights.cincinnati-oh.gov/stories/s/8eaa-xrvz"},"Example Dashboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.socrata.com/foundry/data.cincinnati-oh.gov/k59e-2pvf"},"API"))))),(0,i.kt)("h2",{id:"datasets-available-via-code"},"Datasets available via code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_openml.html"},"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_openml.html"))),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/"},"University of Cincinnati Libraries - Research guides"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For examples:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/c.php?g=411946"},"Business and Economics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/criminal_justice_statistics"},"Criminal Justice")))),(0,i.kt)("li",{parentName:"ul"},"Reach out to the librarian if you're looking for dataset related a certain topic")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/awesomedata/awesome-public-datasets"},"Awesome Public Datasets"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.lib.ncsu.edu/teaching-and-learning-datasets"},"NCSU Datasets for Teaching and Learning"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://sonsofhierarchies.com/real-world-fake-data/"},"http://sonsofhierarchies.com/real-world-fake-data/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://data.world/datasets/religion"},"https://data.world/datasets/religion"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://infoguides.gmu.edu/find-data/practice"},"GMU Data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.sheffield.ac.uk/mash/statistics/datasets"},"University of Sheffield - Datasets for Teaching"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dam.ukdataservice.ac.uk/media/604870/teaching-idea-examining-confidence-in-the-police-using-the-crime-survey-for-england-and-wales.pdf"},"https://dam.ukdataservice.ac.uk/media/604870/teaching-idea-examining-confidence-in-the-police-using-the-crime-survey-for-england-and-wales.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dasl.datadescription.com/"},"DASL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get some datasets from the book")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/unitedstates"},"https://github.com/unitedstates")))))}d.isMDXComponent=!0}}]);