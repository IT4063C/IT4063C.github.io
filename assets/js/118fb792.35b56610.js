"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[292],{10914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));n(8209);const a={sidebar_position:4,title:"Poetry"},l=void 0,s={unversionedId:"installation-guides/poetry",id:"installation-guides/poetry",title:"Poetry",description:"To install Poetry, you call follow the official installation instructions.",source:"@site/content/guides/0.installation-guides/5.poetry.mdx",sourceDirName:"0.installation-guides",slug:"/installation-guides/poetry",permalink:"/guides/installation-guides/poetry",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/0.installation-guides/5.poetry.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1693323604,formattedLastUpdatedAt:"Aug 29, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Poetry"},sidebar:"autoGen",previous:{title:"PyEnv",permalink:"/guides/installation-guides/pyenv"},next:{title:"PipEnv",permalink:"/guides/installation-guides/pipenv"}},r={},p=[{value:"For Windows",id:"for-windows",level:2},{value:"For Linux, macOS, and Windows with WSL",id:"for-linux-macos-and-windows-with-wsl",level:2},{value:"Verifying the installation",id:"verifying-the-installation",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install Poetry, you call follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/#installation"},"installation instructions"),"."),(0,i.kt)("p",null,"I'll copy some of that over here for convinience. But keep it mind this may have changed since copying this."),(0,i.kt)("h2",{id:"for-windows"},"For Windows"),(0,i.kt)("p",null,"The following instruction are for windows users not using the Windows Subsystem for Linux (WSL)."),(0,i.kt)("p",null,"Using powershell, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -\n")),(0,i.kt)("admonition",{title:": Note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you have installed Python through the Microsoft Store, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"py")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," in the command above.")),(0,i.kt)("p",null,"The installer may take care of the following step, but if after you restarted your terminal were still unable to envoke poetry, you'll need to add poetry to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable.\nthe path you need to add to your env. variables is ",(0,i.kt)("inlineCode",{parentName:"p"},"%APPDATA%\\Python\\Scripts")," on Windows."),(0,i.kt)("h2",{id:"for-linux-macos-and-windows-with-wsl"},"For Linux, macOS, and Windows with WSL"),(0,i.kt)("p",null,"Using your terminal of choice, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://install.python-poetry.org | python3 -\n")),(0,i.kt)("p",null,"you may be able to run this with just ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," depending on your system. but some systems still assumes python 2 when you call ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," so it's best to be explicit."),(0,i.kt)("p",null,"The installer may take care of the following step, but if after you restarted your terminal were still unable to envoke poetry, you'll need to add poetry to your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable.\nthe path you need to add to your env. variables is ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.local/bin")," on Linux and macOS."),(0,i.kt)("h2",{id:"verifying-the-installation"},"Verifying the installation"),(0,i.kt)("p",null,"To make sure you've installed poetry correctly, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"poetry --version\n")),(0,i.kt)("p",null,"The results of this is the screenshot you'll need to provide."))}u.isMDXComponent=!0}}]);