"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,d=c["".concat(o,".").concat(u)]||c[u]||v[u]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1,title:"Pyenv"},l=void 0,p={unversionedId:"dev-env/package-and-version-management/pyenv",id:"dev-env/package-and-version-management/pyenv",title:"Pyenv",description:"Overview",source:"@site/content/course-notes/2.dev-env/2.package-and-version-management/1.pyenv.mdx",sourceDirName:"2.dev-env/2.package-and-version-management",slug:"/dev-env/package-and-version-management/pyenv",permalink:"/course-notes/dev-env/package-and-version-management/pyenv",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/2.dev-env/2.package-and-version-management/1.pyenv.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1659930061,formattedLastUpdatedAt:"Aug 8, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Pyenv"},sidebar:"notes",previous:{title:"Pip",permalink:"/course-notes/dev-env/package-and-version-management/pip"},next:{title:"Poetry",permalink:"/course-notes/dev-env/package-and-version-management/poetry"}},o={},s=[{value:"Overview",id:"overview",level:2}],m={toc:s};function v(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"pyenv is a python installation manager. It allows you to install and run multiple python installations, on the same machine. pyenv manages the different versions for you, so that you will avoid the chaos illustrated in the above picture. Don't ever again install a python version any other way!"),(0,r.kt)("p",null,"To setup a new env. using pyenv"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure pyenv has the python version you want to use"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv versions\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the list doesn't include the version you want, then we'll need to Install it")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv install <version>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv install 3.10.5"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new virtual env."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv virtualenv <version> <env_name>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv virtualenv 3.10.5 my_env"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Activate the virtual env."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv activate <env_name>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv activate my_env")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"li"},"pyenv shell <env_name>")," to activate the virtual env."),(0,r.kt)("li",{parentName:"ul"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"li"},"pyenv deactivate")," to deactivate the virtual env.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv shell my_env\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv shell my_env"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv global <version>")," to set the global version."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv global <version>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv global 3.10.5"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv uninstall <env_name>")," to uninstall the virtual env."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv uninstall <env_name>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv uninstall my_env"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can set a local version using ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv local <version>")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pyenv local <version>\n")),(0,r.kt)("p",{parentName:"li"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"pyenv local 3.10.5")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will create a file named ",(0,r.kt)("inlineCode",{parentName:"li"},".pyenv-local")," in the current directory."),(0,r.kt)("li",{parentName:"ul"},"This file will contain the version you want to use.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"pyenv pyramids",src:n(93009).Z,width:"751",height:"786"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Image Credit: ",(0,r.kt)("a",{parentName:"td",href:"https://realpython.com/intro-to-pyenv/"},"realpython"))))))}v.isMDXComponent=!0},93009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pyenv-pyramid-1bf516d19cb15c12684c26639395d6cf.webp"}}]);