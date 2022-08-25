"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(g,a(a({ref:t},u),{},{components:r})):o.createElement(g,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3,title:"Git and GitHub"},a=void 0,l={unversionedId:"git/index",id:"git/index",title:"Git and GitHub",description:"Git Workflow",source:"@site/content/course-notes/3.git/index.md",sourceDirName:"3.git",slug:"/git/",permalink:"/course-notes/git/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/3.git/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1661316294,formattedLastUpdatedAt:"Aug 24, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Git and GitHub"},sidebar:"notes",previous:{title:"SQL",permalink:"/course-notes/refreshers/sql/"},next:{title:"About the tools",permalink:"/course-notes/dev-env/"}},s={},c=[{value:"Git Workflow",id:"git-workflow",level:2},{value:"1. Distributed Version Control System",id:"1-distributed-version-control-system",level:2},{value:"2. Cloning a repository from GitHub",id:"2-cloning-a-repository-from-github",level:2},{value:"3. Updating the Remote repository with your changes\xa0",id:"3-updating-the-remote-repository-with-your-changes",level:2},{value:"4. Pulling Remote changes",id:"4-pulling-remote-changes",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"git-workflow"},"Git Workflow"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Git workflow",src:r(75773).Z,width:"2048",height:"2048"})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Figure:")," Git workflow diagram - ",(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/ChrisStaud/status/1554091413272494080?s=20&t=_WT38kLmQ_hFYrHuXX9MZQ"},"Tweet")," by ",(0,n.kt)("a",{parentName:"td",href:"https://twitter.com/ChrisStaud"},(0,n.kt)("inlineCode",{parentName:"a"},"ChrisStaud")))))),(0,n.kt)("h2",{id:"1-distributed-version-control-system"},"1. Distributed Version Control System"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git setup",src:r(28329).Z,width:"732",height:"386"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server: GitHub.com"),(0,n.kt)("li",{parentName:"ul"},"Dev Environment: that's you. say hi."),(0,n.kt)("li",{parentName:"ul"},"Working Directory: Let's say that's the repository folder that you see"),(0,n.kt)("li",{parentName:"ul"},"Local Repository and the Staging area both live in the same directory as hidden files (.git)\xa0- Don't delete")),(0,n.kt)("h2",{id:"2-cloning-a-repository-from-github"},"2. Cloning a repository from GitHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To download a project that's published on github.com, you'll need to clone it using the ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone <url>")," command"),(0,n.kt)("li",{parentName:"ul"},"If you're collaborating with a couple of developers on this same project, each of you will get a copy of the remote data.\xa0\n",(0,n.kt)("img",{alt:"git clone",src:r(34696).Z,width:"953",height:"488"}))),(0,n.kt)("h2",{id:"3-updating-the-remote-repository-with-your-changes"},"3. Updating the Remote repository with your changes\xa0"),(0,n.kt)("p",null,"To push your updates back to the github.com, you need to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"stage your changes first ",(0,n.kt)("inlineCode",{parentName:"li"},"git add <filename"),"> OR ",(0,n.kt)("inlineCode",{parentName:"li"},"git add .")," to stage all files"),(0,n.kt)("li",{parentName:"ul"},"commit the staged changed to your local repository ",(0,n.kt)("inlineCode",{parentName:"li"},'git commit -m "some descriptive message"')),(0,n.kt)("li",{parentName:"ul"},"push the changes to the remote repository ",(0,n.kt)("inlineCode",{parentName:"li"},"git push"),(0,n.kt)("img",{alt:"git add commit and push",src:r(80189).Z,width:"953",height:"585"}))),(0,n.kt)("p",null,"if the person you're collaborating with pushed some new updates, you're not going to see those changes until you pull those changes."),(0,n.kt)("h2",{id:"4-pulling-remote-changes"},"4. Pulling Remote changes"),(0,n.kt)("p",null,"the git pull command implicitly fetches the remote changes into the local repository and merges those changes to the working directory so you may see those changes in your code."),(0,n.kt)("p",null,"NOTE: only if both you and your collaborator made changes to the same exact line, you would get merge conflicts.\n",(0,n.kt)("img",{alt:"git pull",src:r(29253).Z,width:"967",height:"499"})))}d.isMDXComponent=!0},80189:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/add-commit-push-b7c4f3b2b313da51c36e9fee12d2d11f.png"},34696:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/clone-13716a9d9c755dcd2a3d28ec753afd35.png"},28329:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/git-env-1a830af4ece58bf2c424fa2a420f20bb.png"},75773:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/git-workflow-d79b4d7caa9a6ec5dd2445ca3c5cae54.jpg"},29253:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/pull-091c286274e4a0b7998fad15ab8add81.png"}}]);