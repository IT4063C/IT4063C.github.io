"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2,title:"Git and GitHub"},a=void 0,s={unversionedId:"dev-env/git/index",id:"dev-env/git/index",title:"Git and GitHub",description:"1. Distributed Version Control System",source:"@site/content/course-notes/2.dev-env/5.git/index.md",sourceDirName:"2.dev-env/5.git",slug:"/dev-env/git/",permalink:"/course-notes/dev-env/git/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/2.dev-env/5.git/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658621128,formattedLastUpdatedAt:"Jul 24, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Git and GitHub"},sidebar:"notes",previous:{title:"About the tools",permalink:"/course-notes/dev-env/"},next:{title:"Pip",permalink:"/course-notes/dev-env/package-and-version-management/pip"}},l={},c=[{value:"1. Distributed Version Control System",id:"1-distributed-version-control-system",level:2},{value:"2. Cloning a repository from GitHub",id:"2-cloning-a-repository-from-github",level:2},{value:"3. Updating the Remote repository with your changes\xa0",id:"3-updating-the-remote-repository-with-your-changes",level:2},{value:"4. Pulling Remote changes",id:"4-pulling-remote-changes",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-distributed-version-control-system"},"1. Distributed Version Control System"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"git setup",src:n(55347).Z,width:"732",height:"386"}),"\nServer: GitHub.com\nDev Environment: that's you. say hi.\nWorking Directory: Let's say that's the repository folder that you see\nLocal Repository and the Staging area both live in the same directory as hidden files (.git)\xa0\nDon't delete"),(0,r.kt)("h2",{id:"2-cloning-a-repository-from-github"},"2. Cloning a repository from GitHub"),(0,r.kt)("p",null,"to download a project that's published on github.com, you'll need to clone it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone <url>")," command\nNow if you're collaborating with a couple of developers on this same project, each of you will get a copy of the remote data.\xa0\n",(0,r.kt)("img",{alt:"git clone",src:n(79471).Z,width:"953",height:"488"})),(0,r.kt)("h2",{id:"3-updating-the-remote-repository-with-your-changes"},"3. Updating the Remote repository with your changes\xa0"),(0,r.kt)("p",null,"to push your updates back to the github.com, you need to:\nstage your changes first ",(0,r.kt)("inlineCode",{parentName:"p"},"git add <filename"),"> OR ",(0,r.kt)("inlineCode",{parentName:"p"},"git add .")," to stage all files\ncommit the staged changed to your local repository ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "some descriptive message"'),"\npush the changes to the remote repository ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),"\n",(0,r.kt)("img",{alt:"git add commit and push",src:n(13229).Z,width:"953",height:"585"})),(0,r.kt)("p",null,"if the person you're collaborating with pushed some new updates, you're not going to see those changes until you pull those changes."),(0,r.kt)("h2",{id:"4-pulling-remote-changes"},"4. Pulling Remote changes"),(0,r.kt)("p",null,"the git pull command implicitly fetches the remote changes into the local repository and merges those changes to the working directory so you may see those changes in your code."),(0,r.kt)("p",null,"NOTE: only if both you and your collaborator made changes to the same exact line, you would get merge conflicts.\n",(0,r.kt)("img",{alt:"git pull",src:n(20527).Z,width:"967",height:"499"})))}p.isMDXComponent=!0},13229:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-commit-push-b7c4f3b2b313da51c36e9fee12d2d11f.png"},79471:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clone-13716a9d9c755dcd2a3d28ec753afd35.png"},55347:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/git-1a830af4ece58bf2c424fa2a420f20bb.png"},20527:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/pull-091c286274e4a0b7998fad15ab8add81.png"}}]);