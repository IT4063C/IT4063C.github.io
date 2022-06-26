"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3516],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31066:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:5,title:"Misc."},s=void 0,p={unversionedId:"misc",id:"misc",title:"Misc.",description:"Government Data",source:"@site/content/guides/misc.md",sourceDirName:".",slug:"/misc",permalink:"/guides/misc",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/misc.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1656268219,formattedLastUpdatedAt:"6/26/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Misc."},sidebar:"allInOne",previous:{title:"Contribution Guide",permalink:"/guides/contribution"}},c={},u=[{value:"Government Data",id:"government-data",level:2},{value:"Ohio and Cincinnati",id:"ohio-and-cincinnati",level:2},{value:"Datasets available via code",id:"datasets-available-via-code",level:2},{value:"Others",id:"others",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"government-data"},"Government Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.gov/"},"United States Government Open Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.census.gov/cedsci/"},"United States Census Data"))),(0,i.kt)("h2",{id:"ohio-and-cincinnati"},"Ohio and Cincinnati"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.ohio.gov/wps/portal/gov/data/view"},"Data.Ohio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.cincinnati-oh.gov/browse?category=Thriving+Neighborhoods"},"Cincinnati Data.Ohio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://data.cincinnati-oh.gov/safety/PDI-Police-Data-Initiative-Crime-Incidents/k59e-2pvf"},"Cincinnati Crime Incidents"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://insights.cincinnati-oh.gov/stories/s/8eaa-xrvz"},"Example Dashboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.socrata.com/foundry/data.cincinnati-oh.gov/k59e-2pvf"},"API"))))),(0,i.kt)("h2",{id:"datasets-available-via-code"},"Datasets available via code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_openml.html"},"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_openml.html"))),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/"},"University of Cincinnati Libraries - Research guides"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For examples:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/c.php?g=411946"},"Business and Economics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://guides.libraries.uc.edu/criminal_justice_statistics"},"Criminal Justice")))),(0,i.kt)("li",{parentName:"ul"},"Reach out to the librarian if you're looking for dataset related a certain topic")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/awesomedata/awesome-public-datasets"},"Awesome Public Datasets"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.lib.ncsu.edu/teaching-and-learning-datasets"},"NCSU Datasets for Teaching and Learning"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://sonsofhierarchies.com/real-world-fake-data/"},"http://sonsofhierarchies.com/real-world-fake-data/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://data.world/datasets/religion"},"https://data.world/datasets/religion"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://infoguides.gmu.edu/find-data/practice"},"GMU Data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.sheffield.ac.uk/mash/statistics/datasets"},"University of Sheffield - Datasets for Teaching"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dam.ukdataservice.ac.uk/media/604870/teaching-idea-examining-confidence-in-the-police-using-the-crime-survey-for-england-and-wales.pdf"},"https://dam.ukdataservice.ac.uk/media/604870/teaching-idea-examining-confidence-in-the-police-using-the-crime-survey-for-england-and-wales.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://dasl.datadescription.com/"},"DASL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get some datasets from the book")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/unitedstates"},"https://github.com/unitedstates")))))}m.isMDXComponent=!0}}]);