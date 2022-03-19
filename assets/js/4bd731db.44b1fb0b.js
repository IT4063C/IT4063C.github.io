"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[919],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,title:"Git and GitHub"},c=void 0,l={unversionedId:"course-notes/git/index",id:"course-notes/git/index",title:"Git and GitHub",description:"1. Distributed Version Control System",source:"@site/docs/course-notes/git/index.md",sourceDirName:"course-notes/git",slug:"/course-notes/git/",permalink:"/docs/course-notes/git/",editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/docs/course-notes/git/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Git and GitHub"},sidebar:"notes",previous:{title:"Notes",permalink:"/docs/course-notes/"}},u={},p=[{value:"1. Distributed Version Control System",id:"1-distributed-version-control-system",level:2},{value:"2. Cloning a repository from GitHub",id:"2-cloning-a-repository-from-github",level:2},{value:"3. Updating the Remote repository with your changes\xa0",id:"3-updating-the-remote-repository-with-your-changes",level:2},{value:"4. Pulling Remote changes",id:"4-pulling-remote-changes",level:2}],d={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-distributed-version-control-system"},"1. Distributed Version Control System"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(3242).Z,width:"732",height:"386"}),"\nServer: GitHub.com\nDev Environment: that's you. say hi.\nWorking Directory: Let's say that's the repository folder that you see\nLocal Repository and the Staging area both live in the same directory as hidden files (.git)\xa0\nDon't delete"),(0,i.kt)("h2",{id:"2-cloning-a-repository-from-github"},"2. Cloning a repository from GitHub"),(0,i.kt)("p",null,"to download a project that's published on github.com, you'll need to clone it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone <url>")," command\nNow if you're collaborating with a couple of developers on this same project, each of you will get a copy of the remote data.\xa0\n",(0,i.kt)("img",{loading:"lazy",src:n(7086).Z,width:"953",height:"488"})),(0,i.kt)("h2",{id:"3-updating-the-remote-repository-with-your-changes"},"3. Updating the Remote repository with your changes\xa0"),(0,i.kt)("p",null,"to push your updates back to the github.com, you need to:\nstage your changes first ",(0,i.kt)("inlineCode",{parentName:"p"},"git add <filename"),"> OR ",(0,i.kt)("inlineCode",{parentName:"p"},"git add .")," to stage all files\ncommit the staged changed to your local repository ",(0,i.kt)("inlineCode",{parentName:"p"},'git commit -m "some descriptive message"'),"\npush the changes to the remote repository ",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),"\n",(0,i.kt)("img",{loading:"lazy",src:n(9772).Z,width:"953",height:"585"})),(0,i.kt)("p",null,"if the person you're collaborating with pushed some new updates, you're not going to see those changes until you pull those changes."),(0,i.kt)("h2",{id:"4-pulling-remote-changes"},"4. Pulling Remote changes"),(0,i.kt)("p",null,"the git pull command implicitly fetches the remote changes into the local repository and merges those changes to the working directory so you may see those changes in your code."),(0,i.kt)("p",null,"NOTE: only if both you and your collaborator made changes to the same exact line, you would get merge conflicts.\n",(0,i.kt)("img",{loading:"lazy",src:n(4361).Z,width:"967",height:"499"})))}g.isMDXComponent=!0},9772:function(e,t,n){t.Z=n.p+"assets/images/add-commit-push-b7c4f3b2b313da51c36e9fee12d2d11f.png"},7086:function(e,t,n){t.Z=n.p+"assets/images/clone-13716a9d9c755dcd2a3d28ec753afd35.png"},3242:function(e,t,n){t.Z=n.p+"assets/images/git-1a830af4ece58bf2c424fa2a420f20bb.png"},4361:function(e,t,n){t.Z=n.p+"assets/images/pull-091c286274e4a0b7998fad15ab8add81.png"}}]);