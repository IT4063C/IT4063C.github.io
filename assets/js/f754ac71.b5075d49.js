"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1729],{61638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));n(8209);const i={sidebar_position:2,title:"Transcripts"},s=void 0,l={unversionedId:"weekly-modules/module1/video-transcripts",id:"weekly-modules/module1/video-transcripts",title:"Transcripts",description:"Tools when setting up a development environment",source:"@site/content/instructor/weekly-modules/module1/2.video-transcripts.mdx",sourceDirName:"weekly-modules/module1",slug:"/weekly-modules/module1/video-transcripts",permalink:"/instructor/weekly-modules/module1/video-transcripts",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/instructor/weekly-modules/module1/2.video-transcripts.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658446025,formattedLastUpdatedAt:"Jul 21, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Transcripts"},sidebar:"notes",previous:{title:"Overview",permalink:"/instructor/weekly-modules/module1/index"},next:{title:"2. Refreshers",permalink:"/instructor/weekly-modules/module2"}},r={},u=[{value:"Tools when setting up a development environment",id:"tools-when-setting-up-a-development-environment",level:2},{value:"Python",id:"python",level:3},{value:"PyEnv",id:"pyenv",level:3},{value:"Pip",id:"pip",level:3},{value:"VirtualEnvs",id:"virtualenvs",level:3},{value:"IDE",id:"ide",level:2},{value:"Poetry",id:"poetry",level:3},{value:"Conda and Anaconda",id:"conda-and-anaconda",level:3},{value:"SemVer",id:"semver",level:2}],h={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tools-when-setting-up-a-development-environment"},"Tools when setting up a development environment"),(0,a.kt)("p",null,"In the spirit of this course name I want to talk about the different tools and technologies that we use in setting up our developement env.. You may already have a development env setup\nbut knowing and understanding the different functionality of the tools you're using will help you create the most optimized envirnoment, and allow you to change tools as new ones are developed."),(0,a.kt)("p",null,"Without further Ado, Let's get to it."),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"Now obviosuly we're using python as out main programming language in this course. It's one of the most common langauges used for the purposes of data analytics. R being the other option.\nLike any software, python is continiously updated with security patches, performacne optimizations, and even new functionality.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/whatsnew/index.html"},"what's new in each version"),"\nwhen you started the program, you may have used version 3.4.0, now (at the time of recording this), we are at version 3.10.5. In the semver Video, I talk about the meaning of those numbers,\nand what those numbers might mean for you when you're developing your systems.\nNow at one point, you may have used version 2 in building a piece of code, and on your newer projects, you used 3.4.0, and on an even newer project. \\\nNow depending on what language features, you may be able to have one installation of python that would be able to run all version. (but don't count on it)\nBut also the alternative, is to uninstall python and reinstall it over and over again depending on the project you're using for the day."),(0,a.kt)("p",null,"This is why we employ virtualization tools or Virtual env tools. Let's continue this, in the next video."),(0,a.kt)("h3",{id:"pyenv"},"PyEnv"),(0,a.kt)("p",null,"Now like we said, python have multiple versions, each version has certain features, and so on.\nThis might mean that every time you work on a different projects, that uses a different version, you may need to reinstall python with the appropriate version. That's ridiculous. No one want to work like that."),(0,a.kt)("p",null,"For that reason, we use something like pyenv"),(0,a.kt)("p",null,"Pyenv Simple Python Version Management tool. it lets you change the global Python version, install multiple Python versions. so on the same device you may have 3.4, 3.7, and 3.10."),(0,a.kt)("h3",{id:"pip"},"Pip"),(0,a.kt)("p",null,"Many developers, computer scientists, data analysts and so on have already developed many tools and functions and packaged it into libraries that we can install, use and reuse. Rather, than always starting from scratch, you want to use those tools.\nOne of the ways you can install those libraries, is Package-Installer-for-Python or (PIP).\nit is the de facto and recommended package-management system used to install and manage software packages."),(0,a.kt)("p",null,"Whenever you get an error that a package is not found, you'd want to ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install <said-package>")),(0,a.kt)("h3",{id:"virtualenvs"},"VirtualEnvs"),(0,a.kt)("p",null,"With that you still have a tiny problem. Now, whenever you install a certain dependency or package through pip. That's installed globally for the entire environment. That's just the way that works for python. You install a python version, it's for the whole computer, download a dependency, it's till for the whole computer.\nNow, you may be working on multiple projects, thankfully, all of them are running the same version of python. You're running 3.10.4 . However, certain project uses version x from the package numpy, and the other is using version y. Every time you switch between these 2 projects, you need to install the packages again, for that project."),(0,a.kt)("p",null,"Enter VirtualEnv. Which I would be using it along side pyenv through a wrapper tool called pyenv-virtualenv plugin to manage multiple versions of python and seamlessly integrate them with your projects' virtual environments. Now I can have a different environment for each project, which with it's own set of packages and dependencies."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/"},"https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"https://docs.python.org/3/library/venv.html")),(0,a.kt)("p",null,"So far in the program, whenever you need to work on a python project for data analysis purposes, you were told to use Anaconda and Jupyter notebook."),(0,a.kt)("p",null,"You've heard of anaconda in your career so far in the data analytics program. You can still use that in this class. I just need to reintroduce you to it and explain what it actually means to be using it. I will also show you other alternatives that you can also use (and I will be using in this class)"),(0,a.kt)("h2",{id:"ide"},"IDE"),(0,a.kt)("p",null,"I've reviewed many resumes that would list things like NetBeans, Eclipse, Visual Studio and other IDEs like that under their technical skills. When I asked those candidates about those skills they would start talking about the language they coded on those IDEs. The Netbeans, or eclipse people would talk about Java, Visual Studio would talk about C++ or C# or whatever they used there."),(0,a.kt)("p",null,"I want to make clear that these are just Development tools that allows you to use those environments."),(0,a.kt)("h3",{id:"poetry"},"Poetry"),(0,a.kt)("p",null,"a great other tool for PACKAGING AND DEPENDENCY MANAGEMENT is poetry. I will actually be using this. and recommend you do too.\nThis will mean that for projects that I would share with other developers, I would prepackage my dependencies and all they need to do is run poetry install, and they get the same exact setup for their environment as mine."),(0,a.kt)("h3",{id:"conda-and-anaconda"},"Conda and Anaconda"),(0,a.kt)("p",null,"But what about anaconda, or conda, or miniconda. This is a system that does (package management, version management and virtual env management). throughout your tenure in the track so far, you've been using anaconda."),(0,a.kt)("p",null,"This Anaconda thing also comes with Jupyter Notebook and bunch of other tools and utilities."),(0,a.kt)("p",null,"One big problem with it though, is that it comes with a bunch of other tools and utilities. It bloats your system with a lot of things that you don't really need."),(0,a.kt)("p",null,"Which is why I use the other tools. Now, I showed how I have my env. setup. You may choose to use my setup, or stick to anaconda."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"semver"},"SemVer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://semver.org"},"https://semver.org")))}d.isMDXComponent=!0}}]);