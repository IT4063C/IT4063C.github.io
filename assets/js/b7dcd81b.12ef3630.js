"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[893],{66186:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=i(87462),a=(i(67294),i(3905));i(8209);const n={sidebar_position:1,title:"Git and GitHub"},s=void 0,l={unversionedId:"git/index",id:"git/index",title:"Git and GitHub",description:"For Instructions on Installing and Setting up git, please check out the installation guide in the course notes",source:"@site/content/course-notes/1.git/index.md",sourceDirName:"1.git",slug:"/git/",permalink:"/course-notes/git/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/1.git/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1692318174,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Git and GitHub"},sidebar:"notes",previous:{title:"\ud83d\udcdd About Course Notes",permalink:"/course-notes/"},next:{title:"Reproducible Env.",permalink:"/course-notes/dev-env/"}},r={},d=[{value:"Git Workflow",id:"git-workflow",level:2},{value:"1. Distributed Version Control System",id:"1-distributed-version-control-system",level:2},{value:"2. Cloning a repository from GitHub",id:"2-cloning-a-repository-from-github",level:2},{value:"3. Updating the Remote repository with your changes\xa0",id:"3-updating-the-remote-repository-with-your-changes",level:2},{value:"4. Pulling Remote changes",id:"4-pulling-remote-changes",level:2}],u={toc:d};function h(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\ud83e\udd89 Note ",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For Instructions on Installing and Setting up git, please check out ",(0,a.kt)("a",{parentName:"p",href:"installation-guides/git"},"the installation guide in the course notes"))),(0,a.kt)("p",null,"Also, note that the lecture videos include demos of using git with (1) just the command line, (2) using GitHub Desktop, and (3) using the Visual Studio Code extension."),(0,a.kt)("h2",{id:"git-workflow"},"Git Workflow"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Git workflow",src:i(9536).Z,width:"2048",height:"2048"})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Figure:")," Git workflow diagram - ",(0,a.kt)("a",{parentName:"td",href:"https://twitter.com/ChrisStaud/status/1554091413272494080?s=20&t=_WT38kLmQ_hFYrHuXX9MZQ"},"Tweet")," by ",(0,a.kt)("a",{parentName:"td",href:"https://twitter.com/ChrisStaud"},(0,a.kt)("inlineCode",{parentName:"a"},"ChrisStaud")))))),(0,a.kt)("h2",{id:"1-distributed-version-control-system"},"1. Distributed Version Control System"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"git setup",src:i(27390).Z,width:"732",height:"386"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server: GitHub.com"),(0,a.kt)("li",{parentName:"ul"},"Dev Environment: that's you. say hi."),(0,a.kt)("li",{parentName:"ul"},"Working Directory: Let's say that's the repository folder that you see"),(0,a.kt)("li",{parentName:"ul"},"Local Repository and the Staging area both live in the same directory as hidden files (.git)\xa0- Don't delete")),(0,a.kt)("h2",{id:"2-cloning-a-repository-from-github"},"2. Cloning a repository from GitHub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To download a project that's published on github.com, you'll need to clone it using the ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone <url>")," command"),(0,a.kt)("li",{parentName:"ul"},"If you're collaborating with a couple of developers on this same project, each of you will get a copy of the remote data.\xa0\n",(0,a.kt)("img",{alt:"git clone",src:i(68794).Z,width:"953",height:"488"}))),(0,a.kt)("h2",{id:"3-updating-the-remote-repository-with-your-changes"},"3. Updating the Remote repository with your changes\xa0"),(0,a.kt)("p",null,"To push your updates back to the github.com, you need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"stage your changes first ",(0,a.kt)("inlineCode",{parentName:"li"},"git add <filename"),"> OR ",(0,a.kt)("inlineCode",{parentName:"li"},"git add .")," to stage all files"),(0,a.kt)("li",{parentName:"ul"},"commit the staged changed to your local repository ",(0,a.kt)("inlineCode",{parentName:"li"},'git commit -m "some descriptive message"')),(0,a.kt)("li",{parentName:"ul"},"push the changes to the remote repository ",(0,a.kt)("inlineCode",{parentName:"li"},"git push"),(0,a.kt)("img",{alt:"git add commit and push",src:i(53272).Z,width:"953",height:"585"}))),(0,a.kt)("p",null,"if the person you're collaborating with pushed some new updates, you're not going to see those changes until you pull those changes."),(0,a.kt)("h2",{id:"4-pulling-remote-changes"},"4. Pulling Remote changes"),(0,a.kt)("p",null,"the git pull command implicitly fetches the remote changes into the local repository and merges those changes to the working directory so you may see those changes in your code."),(0,a.kt)("p",null,"NOTE: only if both you and your collaborator made changes to the same exact line, you would get merge conflicts.\n",(0,a.kt)("img",{alt:"git pull",src:i(40316).Z,width:"967",height:"499"})))}h.isMDXComponent=!0},53272:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/add-commit-push-b7c4f3b2b313da51c36e9fee12d2d11f.png"},68794:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/clone-13716a9d9c755dcd2a3d28ec753afd35.png"},27390:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/git-env-1a830af4ece58bf2c424fa2a420f20bb.png"},9536:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/git-workflow-d79b4d7caa9a6ec5dd2445ca3c5cae54.jpg"},40316:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/pull-091c286274e4a0b7998fad15ab8add81.png"}}]);