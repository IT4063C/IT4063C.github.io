"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=o,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Code Style Guide",sidebar_label:"\ud83d\udc8e Code Style Guide"},r=void 0,l={unversionedId:"code-style/index",id:"code-style/index",title:"Code Style Guide",description:"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d",source:"@site/content/guides/3.code-style/index.mdx",sourceDirName:"3.code-style",slug:"/code-style/",permalink:"/guides/code-style/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/3.code-style/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1661452421,formattedLastUpdatedAt:"Aug 25, 2022",frontMatter:{title:"Code Style Guide",sidebar_label:"\ud83d\udc8e Code Style Guide"},sidebar:"autoGen",previous:{title:"Assignment Workflow",permalink:"/guides/FAQ/assignment-workflow/"},next:{title:"\ud83d\udee2 Interesting Datasets",permalink:"/guides/datasets/"}},s={},u=[{value:"No Dead code",id:"no-dead-code",level:2},{value:"Saving old versions with Git",id:"saving-old-versions-with-git",level:3},{value:"Don&#39;t leave unused variables",id:"dont-leave-unused-variables",level:3},{value:"Naming Variables and Functions",id:"naming-variables-and-functions",level:2},{value:"Use <code>camelCase</code>",id:"use-camelcase",level:2},{value:"Avoid short names",id:"avoid-short-names",level:2},{value:"Describe what the variable is/does",id:"describe-what-the-variable-isdoes",level:2},{value:"Avoid Long Functions",id:"avoid-long-functions",level:2},{value:"References:",id:"references",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Using PyLint to format code automatically",id:"using-pylint-to-format-code-automatically",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d"),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Martin Fowler")),(0,o.kt)("p",null,"Just as important as the functionality of your solution is the readability of your code. And generally, there are some ways of writing code that that makes your code more understandable and ",(0,o.kt)("em",{parentName:"p"},"readable")," than others. Below are some of those practices."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a ",(0,o.kt)("em",{parentName:"p"},"living document")," that I will be updating as we go along.")),(0,o.kt)("p",null,"From when you begin programming it is essential that you follow the guidelines below - a good habit is much easier to get in to when you start!"),(0,o.kt)("h2",{id:"no-dead-code"},"No Dead code"),(0,o.kt)("p",null,"If it doesn't run, it's dead code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Don't do this!\ndef addToShoppingList(item):\n  # print('Shopping list before:', *shoppingList, sep='\\n- ')\n  # print(f\"Adding item\", item)\n  shoppingList.add(item)\n  # print('hopping list after:', *shoppingList, sep='\\n- ')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def addToShoppingList(item):\n  shoppingList.add(item)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you are debugging a problem, you might comment out some sections of your code.")),(0,o.kt)("h3",{id:"saving-old-versions-with-git"},"Saving old versions with Git"),(0,o.kt)("p",null,'You might be worried about "losing" some experimental code that you want to "save" by commenting it out. However, this can cause confusion about which bits of code still work.'),(0,o.kt)("p",null,"If you want to save some code, remember that you can commit it using Git. It will then be saved it forever. If you decide to remove the code later you can delete it and make another commit. And if you want it back again, you can always look at the deleted code in the git history."),(0,o.kt)("h3",{id:"dont-leave-unused-variables"},"Don't leave unused variables"),(0,o.kt)("p",null,"As you write code, you may make changes to the variables that you are using. You may rename some variables, make some new variables or change how the variables are used. This may leave some variables that are ",(0,o.kt)("em",{parentName:"p"},"unused"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def orderTaxi(pickUpTime):\n  driverName = getDriverName();\n  customerName = getCustomerName(); // \ud83d\uded1 Don't do this!\n\n  print(f\"{driverName} will pick you up at ${pickUpTime}`;\n}\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerName")," variable isn't used anywhere."),(0,o.kt)("p",null,"You should remove any variables that are unused. This is because if you (or someone else) is reading your code, it can be confusing if you see a variable and then find out later that it isn't used. It could make you think that there's a bug, because the variable must have been put there for a reason!"),(0,o.kt)("h2",{id:"naming-variables-and-functions"},"Naming Variables and Functions"),(0,o.kt)("p",null,"Making our code understandable by others is critical to being a programmer. One of the main tools in our toolbox is good naming for our variables and function names."),(0,o.kt)("p",null,"There are no strict rules to follow when thinking of variable names, but there are some general guidelines."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When thinking about whether a variable name is good, try to imagine that you are reading the code again in the future and you have forgotten exactly how it works."),(0,o.kt)("p",{parentName:"admonition"},"Do the variable names help explain what the code is supposed to do?")),(0,o.kt)("h2",{id:"use-camelcase"},"Use ",(0,o.kt)("inlineCode",{parentName:"h2"},"camelCase")),(0,o.kt)("p",null,"When writing JavaScript, programmers tend to use a convention called ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"camelCase")),'. This means starting your variable name with a lower case letter, and then every "word" after that starts with an upper case letter.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"startingLocation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeToDestination")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trafficOnRoute"))),(0,o.kt)("p",null,'By doing this it makes it easier to read variable name that have multiple "words".'),(0,o.kt)("h2",{id:"avoid-short-names"},"Avoid short names"),(0,o.kt)("p",null,"Very short variable names can be difficult to understand since the purpose of the variable can be unclear. They are also difficult remember, especially if there are many similarly named variables. Try to avoid short names or abbreviations."),(0,o.kt)("p",null,"Here are some examples of ",(0,o.kt)("strong",{parentName:"p"},"bad")," names that you should avoid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single letters like ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"y")),(0,o.kt)("li",{parentName:"ul"},"Abbreviations like ",(0,o.kt)("inlineCode",{parentName:"li"},"evt")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"event")),(0,o.kt)("li",{parentName:"ul"},"Generic names like ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("h2",{id:"describe-what-the-variable-isdoes"},"Describe what the variable is/does"),(0,o.kt)("p",null,"A good variable name quickly explains what it represents to anyone reading the code. Try to describe what the variable is or what it does within in code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nlet song = true;\n\n// \u2705 This is better\nlet isPlaying = true;\n")),(0,o.kt)("p",null,"In this example, the variable name ",(0,o.kt)("inlineCode",{parentName:"p"},"song")," doesn't tell us what it is used for. The ",(0,o.kt)("inlineCode",{parentName:"p"},"isPlaying")," variable name is better since it tells us whether a song is playing or not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction percentage() {\n  // ...\n}\n\n// \u2705 This is better\nfunction getPercentage() {\n  // ...\n}\n")),(0,o.kt)("p",null,'In this example, the function calculates a percentage and returns it. Therefore it is good to name it using the "get" verb to show that it returns something.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction isOldEnough(number) {\n  // ...\n}\n\n// \u2705 This is better\nfunction isOldEnough(yearOfBirth) {\n  // ...\n}\n")),(0,o.kt)("p",null,"Finally, parameters of functions should also have names that properly represent what is going to be received into the function."),(0,o.kt)("h2",{id:"avoid-long-functions"},"Avoid Long Functions"),(0,o.kt)("p",null,"Sometimes writing long functions are unavoidable, however most of the time is better to split a long function into a few shorter ones. "),(0,o.kt)("p",null,"This will "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make your code easier to read"),(0,o.kt)("li",{parentName:"ol"},"Make your code easier to maintain"),(0,o.kt)("li",{parentName:"ol"},"Make your code easier to review by out volunteers")),(0,o.kt)("p",null,"When you writing code you should also try to keep in mind that you will only ever write the code once, but you will read the code many times. Always aim to write code that is readable. "),(0,o.kt)("p",null,"For more details you can read these useful articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(The Art of Writing Small and Plain Functions)","[https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/]")),(0,o.kt)("h2",{id:"references"},"References:"),(0,o.kt)("p",null,"I compiled this list from a number of sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cs.cmu.edu/~213/codeStyle.html"},"https://www.cs.cmu.edu/~213/codeStyle.html"))),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("h3",{id:"using-pylint-to-format-code-automatically"},"Using PyLint to format code automatically"),(0,o.kt)("p",null,"Some of the guidelines are so common that there are automatic tools to do it for you! One of these tools is called PyLint. You should have installed this tool when you ",(0,o.kt)("a",{parentName:"p",href:"#Link-to-setup-guide"},"set up your VS Code extensions"),"."))}m.isMDXComponent=!0}}]);