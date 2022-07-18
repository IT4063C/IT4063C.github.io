"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[919],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),g=r,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return o?n.createElement(h,a(a({ref:t},u),{},{components:o})):n.createElement(h,a({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},90513:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:2,title:"Git and GitHub"},a=void 0,s={unversionedId:"git/index",id:"git/index",title:"Git and GitHub",description:"1. Distributed Version Control System",source:"@site/docs/course-notes/git/index.md",sourceDirName:"git",slug:"/git/",permalink:"/course-notes/git/",editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/docs/course-notes/git/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658155179,formattedLastUpdatedAt:"7/18/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Git and GitHub"},sidebar:"notes",previous:{title:"Notes",permalink:"/course-notes/"},next:{title:"Authoring Docs With Notebooks",permalink:"/course-notes/nb/"}},l={},c=[{value:"1. Distributed Version Control System",id:"1-distributed-version-control-system",level:2},{value:"2. Cloning a repository from GitHub",id:"2-cloning-a-repository-from-github",level:2},{value:"3. Updating the Remote repository with your changes\xa0",id:"3-updating-the-remote-repository-with-your-changes",level:2},{value:"4. Pulling Remote changes",id:"4-pulling-remote-changes",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-distributed-version-control-system"},"1. Distributed Version Control System"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:o(13387).Z,width:"732",height:"386"}),"\nServer: GitHub.com\nDev Environment: that's you. say hi.\nWorking Directory: Let's say that's the repository folder that you see\nLocal Repository and the Staging area both live in the same directory as hidden files (.git)\xa0\nDon't delete"),(0,r.kt)("h2",{id:"2-cloning-a-repository-from-github"},"2. Cloning a repository from GitHub"),(0,r.kt)("p",null,"to download a project that's published on github.com, you'll need to clone it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone <url>")," command\nNow if you're collaborating with a couple of developers on this same project, each of you will get a copy of the remote data.\xa0\n",(0,r.kt)("img",{loading:"lazy",src:o(8391).Z,width:"953",height:"488"})),(0,r.kt)("h2",{id:"3-updating-the-remote-repository-with-your-changes"},"3. Updating the Remote repository with your changes\xa0"),(0,r.kt)("p",null,"to push your updates back to the github.com, you need to:\nstage your changes first ",(0,r.kt)("inlineCode",{parentName:"p"},"git add <filename"),"> OR ",(0,r.kt)("inlineCode",{parentName:"p"},"git add .")," to stage all files\ncommit the staged changed to your local repository ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "some descriptive message"'),"\npush the changes to the remote repository ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"\n",(0,r.kt)("img",{loading:"lazy",src:o(13366).Z,width:"953",height:"585"})),(0,r.kt)("p",null,"if the person you're collaborating with pushed some new updates, you're not going to see those changes until you pull those changes."),(0,r.kt)("h2",{id:"4-pulling-remote-changes"},"4. Pulling Remote changes"),(0,r.kt)("p",null,"the git pull command implicitly fetches the remote changes into the local repository and merges those changes to the working directory so you may see those changes in your code."),(0,r.kt)("p",null,"NOTE: only if both you and your collaborator made changes to the same exact line, you would get merge conflicts.\n",(0,r.kt)("img",{loading:"lazy",src:o(98442).Z,width:"967",height:"499"})))}d.isMDXComponent=!0},13366:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-commit-push-b7c4f3b2b313da51c36e9fee12d2d11f.png"},8391:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/clone-13716a9d9c755dcd2a3d28ec753afd35.png"},13387:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/git-1a830af4ece58bf2c424fa2a420f20bb.png"},98442:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/pull-091c286274e4a0b7998fad15ab8add81.png"}}]);