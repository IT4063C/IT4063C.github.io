"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=a,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"Transcripts"},r=void 0,s={unversionedId:"weekly-modules/module1/video-transcripts",id:"weekly-modules/module1/video-transcripts",title:"Transcripts",description:"Welcome Video",source:"@site/content/instructor/weekly-modules/module1/2.video-transcripts.mdx",sourceDirName:"weekly-modules/module1",slug:"/weekly-modules/module1/video-transcripts",permalink:"/instructor/weekly-modules/module1/video-transcripts",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/instructor/weekly-modules/module1/2.video-transcripts.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658029886,formattedLastUpdatedAt:"Jul 17, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Transcripts"},sidebar:"notes",previous:{title:"Overview",permalink:"/instructor/weekly-modules/module1/index"},next:{title:"2. Refreshers",permalink:"/instructor/weekly-modules/module2"}},l={},u=[{value:"Welcome Video",id:"welcome-video",level:2},{value:"Tools when setting up a development environment",id:"tools-when-setting-up-a-development-environment",level:2},{value:"Python",id:"python",level:3},{value:"PyEnv",id:"pyenv",level:3},{value:"Pip",id:"pip",level:3},{value:"VirtualEnvs",id:"virtualenvs",level:3},{value:"IDE",id:"ide",level:2},{value:"Poetry",id:"poetry",level:3},{value:"Conda and Anaconda",id:"conda-and-anaconda",level:3},{value:"SemVer",id:"semver",level:2},{value:"Welcome",id:"welcome",level:3}],h={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"welcome-video"},"Welcome Video"),(0,a.kt)("p",null,"Welcome to IT4063C. This is one of last course you have in the Data Analytics Track."),(0,a.kt)("p",null,"I'm Yahya Gilany. I'm a faculty at the School of Information Technology, and the Technology Lead, and Lead software architect at the Information Technology Solutions Center. My main experience is in software development, especially data-intensive application; application that uses/collects a lot of data and sends it for processing, data analytics, and/or reporting.\nCurrently, I lead the development of a software eco-system built for the ohio criminal sentencing commission and the state of ohio supreme court. The system will be used to collect sentencing data from the courts and judges and provide a way to tell the story of sentencing in the state of ohio."),(0,a.kt)("p",null,"I have 2 objectives for you in this course:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"to piece together all what you've learned in the track so far. Frame it together in a nice framework that you can apply to your future data analytics projects."),(0,a.kt)("li",{parentName:"ol"},"Introduce and re-introduce a number of tools and technologies.")),(0,a.kt)("p",null,"In the process, we'll discuss skills and techniques to be an effective data analyst, such as effective use of visualization and storytelling. and we'll get an introduction to the basics of Machine Learning. we may not dig too deep into it, but you'll be set on the beginning of your journey and you'd be able to carry forward on your own."),(0,a.kt)("p",null,"This is a hands-on course, we'll be using Python as the main programming language, with an ecosystem of associated libraries. and will get our hands dirty with some real problem and datasets."),(0,a.kt)("p",null,"I've always had a keen interest in machine learning and in building this course, I was able to reignite that again."),(0,a.kt)("p",null,"I'm looking forward to working with you all this semester. I hope you're excited for this class too."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"tools-when-setting-up-a-development-environment"},"Tools when setting up a development environment"),(0,a.kt)("p",null,"In the spirit of this course name I want to talk about the different tools and technologies that we use in setting up our developement env.. You may already have a development env setup\nbut knowing and understanding the different functionality of the tools you're using will help you create the most optimized envirnoment, and allow you to change tools as new ones are developed."),(0,a.kt)("p",null,"Without further Ado, Let's get to it."),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"Now obviosuly we're using python as out main programming language in this course. It's one of the most common langauges used for the purposes of data analytics. R being the other option.\nLike any software, python is continiously updated with security patches, performacne optimizations, and even new functionality.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/whatsnew/index.html"},"what's new in each version"),"\nwhen you started the program, you may have used version 3.4.0, now (at the time of recording this), we are at version 3.10.5. In the semver Video, I talk about the meaning of those numbers,\nand what those numbers might mean for you when you're developing your systems.\nNow at one point, you may have used version 2 in building a piece of code, and on your newer projects, you used 3.4.0, and on an even newer project. \\\nNow depending on what language features, you may be able to have one installation of python that would be able to run all version. (but don't count on it)\nBut also the alternative, is to uninstall python and reinstall it over and over again depending on the project you're using for the day."),(0,a.kt)("p",null,"This is why we employ virtualization tools or Virtual env tools. Let's continue this, in the next video."),(0,a.kt)("h3",{id:"pyenv"},"PyEnv"),(0,a.kt)("p",null,"Now like we said, python have multiple versions, each version has certain features, and so on.\nThis might mean that every time you work on a different projects, that uses a different version, you may need to reinstall python with the appropriate version. That's ridiculous. No one want to work like that."),(0,a.kt)("p",null,"For that reason, we use something like pyenv"),(0,a.kt)("p",null,"Pyenv Simple Python Version Management tool. it lets you change the global Python version, install multiple Python versions. so on the same device you may have 3.4, 3.7, and 3.10."),(0,a.kt)("h3",{id:"pip"},"Pip"),(0,a.kt)("p",null,"Many developers, computer scientists, data analysts and so on have already developed many tools and functions and packaged it into libraries that we can install, use and reuse. Rather, than always starting from scratch, you want to use those tools.\nOne of the ways you can install those libraries, is Package-Installer-for-Python or (PIP).\nit is the de facto and recommended package-management system used to install and manage software packages."),(0,a.kt)("p",null,"Whenever you get an error that a package is not found, you'd want to ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install <said-package>")),(0,a.kt)("h3",{id:"virtualenvs"},"VirtualEnvs"),(0,a.kt)("p",null,"With that you still have a tiny problem. Now, whenever you install a certain dependency or package through pip. That's installed globally for the entire environment. That's just the way that works for python. You install a python version, it's for the whole computer, download a dependency, it's till for the whole computer.\nNow, you may be working on multiple projects, thankfully, all of them are running the same version of python. You're running 3.10.4 . However, certain project uses version x from the package numpy, and the other is using version y. Every time you switch between these 2 projects, you need to install the packages again, for that project."),(0,a.kt)("p",null,"Enter VirtualEnv. Which I would be using it along side pyenv through a wrapper tool called pyenv-virtualenv plugin to manage multiple versions of python and seamlessly integrate them with your projects' virtual environments. Now I can have a different environment for each project, which with it's own set of packages and dependencies."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/"},"https://www.geeksforgeeks.org/creating-python-virtual-environment-windows-linux/"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html"},"https://docs.python.org/3/library/venv.html")),(0,a.kt)("p",null,"So far in the program, whenever you need to work on a python project for data analysis purposes, you were told to use Anaconda and Jupyter notebook."),(0,a.kt)("p",null,"You've heard of anaconda in your career so far in the data analytics program. You can still use that in this class. I just need to reintroduce you to it and explain what it actually means to be using it. I will also show you other alternatives that you can also use (and I will be using in this class)"),(0,a.kt)("h2",{id:"ide"},"IDE"),(0,a.kt)("p",null,"I've reviewed many resumes that would list things like NetBeans, Eclipse, Visual Studio and other IDEs like that under their technical skills. When I asked those candidates about those skills they would start talking about the language they coded on those IDEs. The Netbeans, or eclipse people would talk about Java, Visual Studio would talk about C++ or C# or whatever they used there."),(0,a.kt)("p",null,"I want to make clear that these are just Development tools that allows you to use those environments."),(0,a.kt)("h3",{id:"poetry"},"Poetry"),(0,a.kt)("p",null,"a great other tool for PACKAGING AND DEPENDENCY MANAGEMENT is poetry. I will actually be using this. and recommend you do too.\nThis will mean that for projects that I would share with other developers, I would prepackage my dependencies and all they need to do is run poetry install, and they get the same exact setup for their environment as mine."),(0,a.kt)("h3",{id:"conda-and-anaconda"},"Conda and Anaconda"),(0,a.kt)("p",null,"But what about anaconda, or conda, or miniconda. This is a system that does (package management, version management and virtual env management). throughout your tenure in the track so far, you've been using anaconda."),(0,a.kt)("p",null,"This Anaconda thing also comes with Jupyter Notebook and bunch of other tools and utilities."),(0,a.kt)("p",null,"One big problem with it though, is that it comes with a bunch of other tools and utilities. It bloats your system with a lot of things that you don't really need."),(0,a.kt)("p",null,"Which is why I use the other tools. Now, I showed how I have my env. setup. You may choose to use my setup, or stick to anaconda."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"semver"},"SemVer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://semver.org"},"https://semver.org")),(0,a.kt)("h3",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"hello and welcome to ITC 49c web game\ndevelopment my name is Leah hey Jelani\nand I'm your instructor for this course\nI'm an adjunct and a staff member here\nat the School of IT at the University of\nCincinnati working as a technology lead\nat the IT solution Center which is the\nresearch center / software shop\nconsulting company that builds and\nprovides IT solutions and services to\nother research centers government\nagencies public companies startups and\nentrepreneurs a while back I used to do\na lot of video editing work so I'm truly\nexcited to be building this course with\nyou and for you and I hope that you'd\nget an enjoyable and a fruitful learning\nexperience with me here let's talk about\nthe course a little bit this is web game\ndevelopment but I like to think of it as\nfront-end development or client-side\nprogramming in the context of building\ngames in fact you can use many of those\ntechnologies to build mobile and desktop\napplications using frameworks such as\nionic react native electron etc etc this\nclass assumes prior knowledge and\nexperience with HTML and CSS as well as\nbasic computer programming experience we\nwill build on those and we'll learn how\nwe can use JavaScript to make static web\npages more dynamic and more like an\napplication with logic and functionality\nin addition to the classes learning\ngoals and outcomes you'll be introduced\nto many skills and tools that are\ntransferable to any programming language\nor to any software project that you're\nworking on things like using git and\ngithub refactoring clean code practices\nand testing you are not on this journey\nalone you can seek out help from your\nclassmates that brilliant group of TA\nstaff in the school's Learning Center\nthat classes TA or to me my advice to\nyou is to explore in your own ask\nquestions and do your work this is your\nrecipe for success in this course and\nany course for that matter now please\ntake a moment to review the course\nsyllabus for more information and reach\nout if you have any questions"))}d.isMDXComponent=!0}}]);