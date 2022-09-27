"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8775],{52072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(8209);const i={title:"Code Style Guide",sidebar_label:"\ud83d\udc8e Code Style Guide"},s=void 0,r={unversionedId:"code-style/index",id:"code-style/index",title:"Code Style Guide",description:"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d",source:"@site/content/guides/3.code-style/index.mdx",sourceDirName:"3.code-style",slug:"/code-style/",permalink:"/guides/code-style/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/guides/3.code-style/index.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1663358199,formattedLastUpdatedAt:"Sep 16, 2022",frontMatter:{title:"Code Style Guide",sidebar_label:"\ud83d\udc8e Code Style Guide"},sidebar:"autoGen",previous:{title:"Assignment Feedback",permalink:"/guides/FAQ/assignment-feedback/"},next:{title:"\ud83d\udee2 Datasets",permalink:"/guides/datasets/"}},l={},d=[{value:"\u2705 Naming Variables and Functions",id:"-naming-variables-and-functions",level:2},{value:"Avoid ambigious abbreviations",id:"avoid-ambigious-abbreviations",level:3},{value:"Use descriptive/intention-revealing names",id:"use-descriptiveintention-revealing-names",level:3},{value:"Use verbs for function names",id:"use-verbs-for-function-names",level:3},{value:"Don&#39;t use different words for the same concept",id:"dont-use-different-words-for-the-same-concept",level:3},{value:"\u2705 Avoid Long Functions",id:"-avoid-long-functions",level:2},{value:"\u2705 No Dead code",id:"-no-dead-code",level:2},{value:"Saving old versions with Git",id:"saving-old-versions-with-git",level:3},{value:"Don&#39;t leave unused variables",id:"dont-leave-unused-variables",level:3},{value:"\u2705 Don&#39;t store secrets in code",id:"-dont-store-secrets-in-code",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u201cAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201d"),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Martin Fowler")),(0,o.kt)("p",null,"Just as important as the functionality of your solution is the readability of your code. And generally, there are some ways of writing code that that makes your code more understandable and ",(0,o.kt)("em",{parentName:"p"},"readable")," than others. Below are some of those practices."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a ",(0,o.kt)("em",{parentName:"p"},"living document")," that I will be updating as we go along.")),(0,o.kt)("p",null,"From when you begin programming it is essential that you follow the guidelines below - a good habit is much easier to get in to when you start!"),(0,o.kt)("h2",{id:"-naming-variables-and-functions"},"\u2705 Naming Variables and Functions"),(0,o.kt)("p",null,"Making our code understandable by others is critical to being a programmer. One of the main tools in our toolbox is good naming for our variables and function names."),(0,o.kt)("p",null,"There are no strict rules to follow when thinking of variable names, but there are some general guidelines."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When thinking about whether a variable name is good, try to imagine that you are reading the code again in the future and you have forgotten exactly how it works."),(0,o.kt)("p",{parentName:"admonition"},"Do the variable names help explain what the code is supposed to do?")),(0,o.kt)("h3",{id:"avoid-ambigious-abbreviations"},"Avoid ambigious abbreviations"),(0,o.kt)("p",null,"Avoid mental mappings, acronyms and abbreviations (unless it's univerasally understood by everyone). Don't come up with your own; it's better to use a long name than a confusing one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Bad\nfna = 'Bob'\ncre_tmstp = 1621535852\nevtnm = 'IT Expo'\n\n# \u2705 Good\nfirst_name = 'Bob'\ncreation_timestamp = 1621535852\nevent_name = 'IT Expo'\n")),(0,o.kt)("h3",{id:"use-descriptiveintention-revealing-names"},"Use descriptive/intention-revealing names"),(0,o.kt)("p",null,"A good variable name quickly explains what it represents to anyone reading the code. Try to describe what the variable is or what it does within in code, and "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Bad\nsong = True;\n\n# \u2705 Good\nsong_is_playing = True;\n")),(0,o.kt)("p",null,"Also, parameters of functions should also have names that properly represent what is going to be received into the function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Bad\ndef is_old_enough(number):\n  return number > 18\n\n# \u2705 Good\ndef is_old_enough(year_of_birth):\n  return year_of_birth > 18\n")),(0,o.kt)("h3",{id:"use-verbs-for-function-names"},"Use verbs for function names"),(0,o.kt)("p",null,'In this example, the function calculates a percentage and returns it. Therefore it is good to name it using the "get" verb to show that it returns something.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Bad\ndef percentage():\n  return 100\n\n# \u2705 Good\ndef getPercentage():\n  return 100\n")),(0,o.kt)("h3",{id:"dont-use-different-words-for-the-same-concept"},"Don't use different words for the same concept"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Bad\ndef get_name(): pass\ndef fetch_age(): pass\n\n# \u2705 Good\ndef get_name(): pass\ndef get_age(): pass\n")),(0,o.kt)("h2",{id:"-avoid-long-functions"},"\u2705 Avoid Long Functions"),(0,o.kt)("p",null,"Sometimes writing long functions are unavoidable, however most of the time is better to split a long function into a few shorter ones. "),(0,o.kt)("p",null,"This will "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make your code easier to read"),(0,o.kt)("li",{parentName:"ol"},"Make your code easier to maintain"),(0,o.kt)("li",{parentName:"ol"},"Make your code easier to review by out volunteers")),(0,o.kt)("p",null,"When you writing code you should also try to keep in mind that you will only ever write the code once, but you will read the code many times. Always aim to write code that is readable. "),(0,o.kt)("p",null,"For more details you can read these useful articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(The Art of Writing Small and Plain Functions)","[https://dmitripavlutin.com/the-art-of-writing-small-and-plain-functions/]")),(0,o.kt)("h2",{id:"-no-dead-code"},"\u2705 No Dead code"),(0,o.kt)("p",null,"If it doesn't run, it's dead code. When you are debugging a problem, you might comment out some sections of your code. When you're done debugging, take it out."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bad")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \ud83d\uded1 Don't do this!\ndef add_to_shopping_list(item):\n  # print('Shopping list before:', *shoppingList, sep='\\n- ')\n  # print(f\"Adding item\", item)\n  shopping_list.add(item)\n  # print('hopping list after:', *shoppingList, sep='\\n- ')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def add_to_shopping_list(item):\n  shopping_list.add(item)\n")),(0,o.kt)("h3",{id:"saving-old-versions-with-git"},"Saving old versions with Git"),(0,o.kt)("p",null,'You might be worried about "losing" some experimental code that you want to "save" by commenting it out. However, this can cause confusion about which bits of code still work.'),(0,o.kt)("p",null,"If you want to save some code, remember that you can commit it using Git. It will then be saved it forever. If you decide to remove the code later you can delete it and make another commit. And if you want it back again, you can always look at the deleted code in the git history."),(0,o.kt)("h3",{id:"dont-leave-unused-variables"},"Don't leave unused variables"),(0,o.kt)("p",null,"As you write code, you may make changes to the variables that you are using. You may rename some variables, make some new variables or change how the variables are used. This may leave some variables that are ",(0,o.kt)("em",{parentName:"p"},"unused"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def order_taxi(pick_up_time):\n  driver_name = get_driver_name();\n  customer_name = get_customer_name(); # \ud83d\uded1 Don't do this!\n\n  print(f\"{driverName} will pick you up at ${pickUpTime}`;\n}\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"customerName")," variable isn't used anywhere."),(0,o.kt)("p",null,"You should remove any variables that are unused. This is because if you (or someone else) is reading your code, it can be confusing if you see a variable and then find out later that it isn't used. It could make you think that there's a bug, because the variable must have been put there for a reason!"),(0,o.kt)("h2",{id:"-dont-store-secrets-in-code"},"\u2705 Don't store secrets in code"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Added to the guide on 16 Sept, 2022")),(0,o.kt)("p",null,"When you are writing code, you should never store any secrets in your code. This includes passwords, API keys, and other sensitive information.\nPer the ",(0,o.kt)("a",{parentName:"p",href:"https://12factor.net/config"},"12 Factor App")," methodology, secrets should be stored in environment variables.\nto achieve this, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"os")," module to get the values of environment variables. For example, if you have an environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"API_KEY"),", you can get the value of it using ",(0,o.kt)("inlineCode",{parentName:"p"},"os.getenv['API_KEY']"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nAPI_KEY = os.getenv("API_KEY")\n')),(0,o.kt)("p",null,"Another way to do this is to use a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. This is a file that contains environment variables. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"python-dotenv")," module to load the environment variables from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom dotenv import load_dotenv\n\nload_dotenv(override=True)\n\nAPI_KEY = os.getenv("API_KEY")\n')),(0,o.kt)("p",null,"and remember to add the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file so that it doesn't get committed to git."))}m.isMDXComponent=!0}}]);