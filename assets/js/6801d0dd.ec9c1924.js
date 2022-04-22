"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5759],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,h=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:1,title:"About the tools",pagination_next:"env-setup/python"},s=void 0,u={unversionedId:"env-setup/index",id:"env-setup/index",title:"About the tools",description:"This guide will help you get started with the tools you need to build a Python environment for Data Analytics.",source:"@site/content/guides/env-setup/index.mdx",sourceDirName:"env-setup",slug:"/env-setup/",permalink:"/guides/env-setup/",editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/env-setup/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1650658565,formattedLastUpdatedAt:"4/22/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"About the tools",pagination_next:"env-setup/python"},sidebar:"env",next:{title:"Python",permalink:"/guides/env-setup/python"}},c={},p=[{value:"Python3",id:"python3",level:2},{value:"Anaconda",id:"anaconda",level:2},{value:"IDE",id:"ide",level:2},{value:"VSCode",id:"vscode",level:3},{value:"PyCharm",id:"pycharm",level:3},{value:"Jupyter",id:"jupyter",level:2},{value:"Docker",id:"docker",level:2},{value:"Tableau",id:"tableau",level:2}],d={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you get started with the tools you need to build a Python environment for Data Analytics."),(0,i.kt)("h2",{id:"python3"},"Python3"),(0,i.kt)("h2",{id:"anaconda"},"Anaconda"),(0,i.kt)("p",null,"When installing packages in python using pip, it installs globally across your entire maching. This is not ideal for Data Analytics or for any project for that matter. You may be working on multiple projects, each of which requires a certain version of the same package. Anaconda is a python distribution that is specifically designed to allows you to setup virtual envirnoments, install packages there."),(0,i.kt)("h2",{id:"ide"},"IDE"),(0,i.kt)("p",null,"I will be using this VSCode for this class, but you can use any IDE you like. I'm including instructions on getting the ultimate edition for the PyCharm for free."),(0,i.kt)("h3",{id:"vscode"},"VSCode"),(0,i.kt)("h3",{id:"pycharm"},"PyCharm"),(0,i.kt)("h2",{id:"jupyter"},"Jupyter"),(0,i.kt)("p",null,"Jupyter notebook is an open source web application that is a game changer for data scientists and engineers. A simple web UI that makes it simple to create and share documents that contain live code, equations, visualizations and narrative text. The Jupyter notebook has now evolved into JupyterLab. This new web-based interactive development environment takes Jupyter notebooks to a whole new level by modularizing the environment making it easy for developers to extend the platform and adds new capabilities like a console, command-line terminal, and a text editor."),(0,i.kt)("p",null,"It's important to realize the Jupyter is a layer on top of Python itself. It's not necessary to write python, or to run data science/analytics projects. But it's a great in educational settings because it can help in telling the story of your data and provide context around the story using Markdown"),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("h2",{id:"tableau"},"Tableau"),(0,i.kt)("p",null,"We won't be using this until the 4th week. Not having it setup then, wouldn't be an acceptable excuse."))}y.isMDXComponent=!0}}]);