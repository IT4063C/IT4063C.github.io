"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),p=i,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},41529:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={title:"Code Style Guide",sidebar_label:"Code Style Guide"},r=void 0,l={unversionedId:"code-style",id:"code-style",title:"Code Style Guide",description:"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d",source:"@site/content/guides/code-style.mdx",sourceDirName:".",slug:"/code-style",permalink:"/guides/code-style",editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/code-style.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658082437,formattedLastUpdatedAt:"7/17/2022",frontMatter:{title:"Code Style Guide",sidebar_label:"Code Style Guide"},sidebar:"allInOne",previous:{title:"Docker",permalink:"/guides/env-setup/docker"},next:{title:"Interesting Datasets",permalink:"/guides/datasets"}},s={},d=[{value:"No Dead code",id:"no-dead-code",level:2},{value:"Saving old versions with Git",id:"saving-old-versions-with-git",level:3},{value:"Don&#39;t leave unused variables",id:"dont-leave-unused-variables",level:3},{value:"Naming Variables and Functions",id:"naming-variables-and-functions",level:2},{value:"Use <code>camelCase</code>",id:"use-camelcase",level:2},{value:"Avoid short names",id:"avoid-short-names",level:2},{value:"Describe what the variable is/does",id:"describe-what-the-variable-isdoes",level:2},{value:"Avoid Long Functions",id:"avoid-long-functions",level:2},{value:"References:",id:"references",level:2},{value:"Before you start",id:"before-you-start",level:2},{value:"Using PyLint to format code automatically",id:"using-pylint-to-format-code-automatically",level:3}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d"),(0,i.kt)("p",{parentName:"blockquote"},"\u2014 Martin Fowler")),(0,i.kt)("p",null,"Just as important as the functionality of your solution is the readability of your code. And generally, there are some ways of writing code that that makes your code more understandable and ",(0,i.kt)("em",{parentName:"p"},"readable")," than others. Below are some of those practices."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a ",(0,i.kt)("em",{parentName:"p"},"living document")," that I will be updating as we go along."))),(0,i.kt)("p",null,"From when you begin programming it is essential that you follow the guidelines below - a good habit is much easier to get in to when you start!"),(0,i.kt)("h2",{id:"no-dead-code"},"No Dead code"),(0,i.kt)("p",null,"If it doesn't run, it's dead code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bad")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Don't do this!\ndef addToShoppingList(item):\n  # print('Shopping list before:', *shoppingList, sep='\\n- ')\n  # print(f\"Adding item\", item)\n  shoppingList.add(item)\n  # print('hopping list after:', *shoppingList, sep='\\n- ')\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def addToShoppingList(item):\n  shoppingList.add(item)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you are debugging a problem, you might comment out some sections of your code.")),(0,i.kt)("h3",{id:"saving-old-versions-with-git"},"Saving old versions with Git"),(0,i.kt)("p",null,'You might be worried about "losing" some experimental code that you want to "save" by commenting it out. However, this can cause confusion about which bits of code still work.'),(0,i.kt)("p",null,"If you want to save some code, remember that you can commit it using Git. It will then be saved it forever. If you decide to remove the code later you can delete it and make another commit. And if you want it back again, you can always look at the deleted code in the git history."),(0,i.kt)("h3",{id:"dont-leave-unused-variables"},"Don't leave unused variables"),(0,i.kt)("p",null,"As you write code, you may make changes to the variables that you are using. You may rename some variables, make some new variables or change how the variables are used. This may leave some variables that are ",(0,i.kt)("em",{parentName:"p"},"unused"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def orderTaxi(pickUpTime):\n  driverName = getDriverName();\n  customerName = getCustomerName(); // \ud83d\uded1 Don't do this!\n\n  print(f\"{driverName} will pick you up at ${pickUpTime}`;\n}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"customerName")," variable isn't used anywhere."),(0,i.kt)("p",null,"You should remove any variables that are unused. This is because if you (or someone else) is reading your code, it can be confusing if you see a variable and then find out later that it isn't used. It could make you think that there's a bug, because the variable must have been put there for a reason!"),(0,i.kt)("h2",{id:"naming-variables-and-functions"},"Naming Variables and Functions"),(0,i.kt)("p",null,"Making our code understandable by others is critical to being a programmer. One of the main tools in our toolbox is good naming for our variables and function names."),(0,i.kt)("p",null,"There are no strict rules to follow when thinking of variable names, but there are some general guidelines."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When thinking about whether a variable name is good, try to imagine that you are reading the code again in the future and you have forgotten exactly how it works."),(0,i.kt)("p",{parentName:"div"},"Do the variable names help explain what the code is supposed to do?"))),(0,i.kt)("h2",{id:"use-camelcase"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"camelCase")),(0,i.kt)("p",null,"When writing JavaScript, programmers tend to use a convention called ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"camelCase")),'. This means starting your variable name with a lower case letter, and then every "word" after that starts with an upper case letter.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startingLocation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeToDestination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trafficOnRoute"))),(0,i.kt)("p",null,'By doing this it makes it easier to read variable name that have multiple "words".'),(0,i.kt)("h2",{id:"avoid-short-names"},"Avoid short names"),(0,i.kt)("p",null,"Very short variable names can be difficult to understand since the purpose of the variable can be unclear. They are also difficult remember, especially if there are many similarly named variables. Try to avoid short names or abbreviations."),(0,i.kt)("p",null,"Here are some examples of ",(0,i.kt)("strong",{parentName:"p"},"bad")," names that you should avoid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single letters like ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"y")),(0,i.kt)("li",{parentName:"ul"},"Abbreviations like ",(0,i.kt)("inlineCode",{parentName:"li"},"evt")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"event")),(0,i.kt)("li",{parentName:"ul"},"Generic names like ",(0,i.kt)("inlineCode",{parentName:"li"},"array")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("h2",{id:"describe-what-the-variable-isdoes"},"Describe what the variable is/does"),(0,i.kt)("p",null,"A good variable name quickly explains what it represents to anyone reading the code. Try to describe what the variable is or what it does within in code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nlet song = true;\n\n// \u2705 This is better\nlet isPlaying = true;\n")),(0,i.kt)("p",null,"In this example, the variable name ",(0,i.kt)("inlineCode",{parentName:"p"},"song")," doesn't tell us what it is used for. The ",(0,i.kt)("inlineCode",{parentName:"p"},"isPlaying")," variable name is better since it tells us whether a song is playing or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction percentage() {\n  // ...\n}\n\n// \u2705 This is better\nfunction getPercentage() {\n  // ...\n}\n")),(0,i.kt)("p",null,'In this example, the function calculates a percentage and returns it. Therefore it is good to name it using the "get" verb to show that it returns something.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \ud83d\uded1 Try to avoid this\nfunction isOldEnough(number) {\n  // ...\n}\n\n// \u2705 This is better\nfunction isOldEnough(yearOfBirth) {\n  // ...\n}\n")),(0,i.kt)("p",null,"Finally, parameters of functions should also have names that properly represent what is going to be received into the function."),(0,i.kt)("h2",{id:"avoid-long-functions"},"Avoid Long Functions"),(0,i.kt)("p",null,"Sometimes writing long functions are unavoidable, however most of the time is better to split a long function into a few shorter ones. "),(0,i.kt)("p",null,"This will "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make your code easier to read"),(0,i.kt)("li",{parentName:"ol"},"Make your code easier to maintain"),(0,i.kt)("li",{parentName:"ol"},"Make your code easier to review by out volunteers")),(0,i.kt)("p",null,"When you writing code you should also try to keep in mind that you will only ever write the code once, but you will read the code many times. Always aim to write code that is readable. "),(0,i.kt)("p",null,"For more details you can read these useful articles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(The Art of Writing Small and Plain Functions)","[https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/]")),(0,i.kt)("h2",{id:"references"},"References:"),(0,i.kt)("p",null,"I compiled this list from a number of sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cs.cmu.edu/~213/codeStyle.html"},"https://www.cs.cmu.edu/~213/codeStyle.html"))),(0,i.kt)("h2",{id:"before-you-start"},"Before you start"),(0,i.kt)("h3",{id:"using-pylint-to-format-code-automatically"},"Using PyLint to format code automatically"),(0,i.kt)("p",null,"Some of the guidelines are so common that there are automatic tools to do it for you! One of these tools is called PyLint. You should have installed this tool when you ",(0,i.kt)("a",{parentName:"p",href:"#Link-to-setup-guide"},"set up your VS Code extensions"),"."))}m.isMDXComponent=!0}}]);