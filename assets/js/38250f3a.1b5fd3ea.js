"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={sidebar_position:0,title:"Python Refresher",sidebar_label:"Python"},o=void 0,p={unversionedId:"refreshers/python/index",id:"refreshers/python/index",title:"Python Refresher",description:"Comment",source:"@site/content/course-notes/3.refreshers/python/index.md",sourceDirName:"3.refreshers/python",slug:"/refreshers/python/",permalink:"/course-notes/refreshers/python/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/3.refreshers/python/index.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658707530,formattedLastUpdatedAt:"Jul 25, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Python Refresher",sidebar_label:"Python"},sidebar:"notes",previous:{title:"Refreshers",permalink:"/course-notes/refreshers/"},next:{title:"SQL",permalink:"/course-notes/refreshers/sql/"}},i={},u=[{value:"Comment",id:"comment",level:2},{value:"Variables",id:"variables",level:2},{value:"Print()",id:"print",level:2},{value:"Data Types",id:"data-types",level:2},{value:"<em>Numbers (Integers, Floats)</em>",id:"numbers-integers-floats",level:3},{value:"Strings",id:"strings",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Comparison Operators",id:"comparison-operators",level:4},{value:"Lists",id:"lists",level:3},{value:"List slicing",id:"list-slicing",level:4},{value:"List comprehension",id:"list-comprehension",level:4},{value:"Tuples",id:"tuples",level:3},{value:"Lists vs Tuples",id:"lists-vs-tuples",level:3},{value:"if, elif, else Statements",id:"if-elif-else-statements",level:2},{value:"Functions",id:"functions",level:2},{value:"Retuning a value",id:"retuning-a-value",level:3},{value:"Lambda function",id:"lambda-function",level:3},{value:"Try, Except, and Else Statements",id:"try-except-and-else-statements",level:2},{value:"for Loops",id:"for-loops",level:2}],s=(c="CodeOutputBlock",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const m={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"comment"},"Comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# This is a comment\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can only be one word."),(0,r.kt)("li",{parentName:"ul"},"Can use only letters, numbers, and the underscore (_) character."),(0,r.kt)("li",{parentName:"ul"},"Can\u2019t begin with a number."),(0,r.kt)("li",{parentName:"ul"},"Variables are case-sensitive (",(0,r.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Data")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DATA")," would be different variable names).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# defining variables\napple = 3\n# assigning value to a var\napple = apple + apple\napple\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"6\n"))),(0,r.kt)("h2",{id:"print"},"Print()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# printing a string\nprint("printed")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"printed\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# printing an integer\nprint(apple)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"6\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# using print with format\nname = "Sam"\ngrade = 81\nprint("{} scored a grade of {} on the test.".format(name, grade))\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sam scored a grade of 81 on the test.\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# using f-string with print statement\nprint(f"{name} scored a grade of {grade} on the test.")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sam scored a grade of 81 on the test.\n"))),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("h3",{id:"numbers-integers-floats"},(0,r.kt)("em",{parentName:"h3"},"Numbers (Integers, Floats)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'print("addition\\t",                                        5+2)\nprint("subtraction\\t",                                     5-2)\nprint("multiplying\\t",                                     5*2)\nprint("making an exponential calculation\\t",               5**2)\nprint("dividing\\t",                                        5/2)\nprint("dividing and returning only the whole part\\t",      5//2)\nprint("dividing and returning remainder after division\\t", 5%2)\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"addition     7\nsubtraction  3\nmultiplying  10\nmaking an exponential calculation    25\ndividing     2.5\ndividing and returning only the whole part   2\ndividing and returning remainder after division  1\n"))),(0,r.kt)("h3",{id:"strings"},"Strings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a simple string - single quotes\n'This is fun!'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Or with Double-quotes\n"This is fun, isn\'t it!?"\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"This is fun, isn\'t it!?"\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# concatenanting 2 strings together\n"This is fun, " + "isn\'t it!?"\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"This is fun, isn\'t it!?"\n'))),(0,r.kt)("h3",{id:"booleans"},"Booleans"),(0,r.kt)("p",null,"Booleans represent one of two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# TRUE boolean\nTrue\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# FALSE boolean\nFalse\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# using int() to turn the boolean into 1 \nint(True)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# using int() to turn the boolean into 0\nint(False)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 'True and True' always return'True'\nTrue and True\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 'True AND False' always returns 'False'\nTrue and False\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 'True OR False' always returns 'True'\nTrue or False\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("h4",{id:"comparison-operators"},"Comparison Operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 < 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 > 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 <= 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 >= 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 == 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 == 1\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n1 != 2\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n(1 < 2) and (2 < 3)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n(1 > 2) or (2 < 3)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# comparing values and returning a boolean\n"string" == "string"\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# comparing values and returning a boolean\n\"string\" == 'spring'\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"False\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# comparing values and returning a boolean\n"Bill" in ["Bill", "Sarah", "Karen"]\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# comparing values and returning a boolean\n"Ann" not in ["Bill", "Sarah", "Karen"]\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a list of integers\n[1,2,3,4,5]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2, 3, 4, 5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a list of int and string\nL = [1, 'two', 3, 4, 5]\nL\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 'two', 3, 4, 5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# accessing list items using index notation\nL[0]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# assigning value to an item of the list\nL[1] = 2\nL\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2, 3, 4, 5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# concatenating lists together \nL + [6, 7, 8, 9]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2, 3, 4, 5, 6, 7, 8, 9]\n"))),(0,r.kt)("h4",{id:"list-slicing"},"List slicing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# slicing a list\nL3 = [1,2,3,4,5]\nL3[0:3]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2, 3]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# selecting all items - starting for the position 3\nL3[3:]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[4, 5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# selecting the last element of the list\nL3[-1]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# returning reversed list\nL3[::-1]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[5, 4, 3, 2, 1]\n"))),(0,r.kt)("h4",{id:"list-comprehension"},"List comprehension"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a list\nL = [-1,-2,-3,-4,-5]\nL\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[-1, -2, -3, -4, -5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a new list based on the list 'L'\nL_dbl = [n*2 for n in L]\nL_dbl\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[-2, -4, -6, -8, -10]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a new list based on the list 'L'\nL_abs = [abs(num) for num in L]\nL_abs\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2, 3, 4, 5]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a new list based on the list 'L_abs'\nfilter_L = [num for num in L_abs if num < 3]\nfilter_L\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1, 2]\n"))),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a tuple\ntup = (1,2,3)\ntup\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(1, 2, 3)\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# selecting elements of the list\ntup[:2]\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(1, 2)\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# unpacking and assigning multiple values at once\nnum1, num2, num3 = (5,11,15)   \nprint(num2)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"11\n"))),(0,r.kt)("h3",{id:"lists-vs-tuples"},"Lists vs Tuples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Similarities:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They are both used to store collection of data"),(0,r.kt)("li",{parentName:"ul"},"They are both heterogeneous data types means that you can store any kind of data type"),(0,r.kt)("li",{parentName:"ul"},"They are both ordered means the order in which you put the items are kept."),(0,r.kt)("li",{parentName:"ul"},"They are both sequential data types so you can iterate over the items contained."),(0,r.kt)("li",{parentName:"ul"},"Items of both types can be accessed by an integer index operator, provided in square brackets, ","[index]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Differences"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The key difference between the tuples and lists is that while the tuples are immutable objects the lists are mutable. This means that tuples cannot be changed while the lists can be modified."),(0,r.kt)("li",{parentName:"ul"},"Tuples are more memory efficient than the lists."),(0,r.kt)("li",{parentName:"ul"},"When it comes to the time efficiency, again tuples have a slight advantage over the lists especially when lookup to a value is considered."),(0,r.kt)("li",{parentName:"ul"},"If you have data which is not meant to be changed in the first place, you should choose tuple data type over lists.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\na_list = list()\na_tuple = tuple()\n\na_list = [1,2,3,4,5]\na_tuple = (1,2,3,4,5)\n\nprint("size of a_list", sys.getsizeof(a_list))\nprint("size of a_tuple", sys.getsizeof(a_tuple))\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"size of a_list 96\nsize of a_tuple 80\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import sys\nimport time\n\nstart_time = time.time()\nb_list = list(range(10000000))\nend_time = time.time()\nprint("Instantiation time for LIST:", end_time - start_time)\n\nstart_time = time.time()\nb_tuple = tuple(range(10000000))\nend_time = time.time()\nprint("Instantiation time for TUPLE:", end_time - start_time)\n\nstart_time = time.time()\nfor item in b_list:\n  aa = b_list[30000]\nend_time = time.time()\nprint("Lookup time for LIST: ", end_time - start_time)\n\nstart_time = time.time()\nfor item in b_tuple:\n  aa = b_tuple[30000]\nend_time = time.time()\nprint("Lookup time for TUPLE: ", end_time - start_time)\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Instantiation time for LIST: 0.3332700729370117\nInstantiation time for TUPLE: 0.31255292892456055\nLookup time for LIST:  0.5446491241455078\nLookup time for TUPLE:  0.5337920188903809\n"))),(0,r.kt)("h2",{id:"if-elif-else-statements"},"if, elif, else Statements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if")," is a condition statement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"elif"),' is pythons way of saying "if the previous conditions were not true, then try this condition".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"else")," statement catches anything which isn't caught by the preceding conditions.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# using the 'if' statement\nif 1:\n    print(\"True\")\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# for any non-zero number it will return True\nif -3.1415:\n    print("negative Pi is True!")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"negative Pi is True!\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating another example of \'if\' statements\nuser_email = "jeff@amazon.com"\npassword = "bezos"\n\nif user_email == "jeff@amazon.com":\n    if password == "bezos":\n        print("Access granted.")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Access granted.\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating an 'if' statement for value comparison\nif 5>2: \n    print(\"True\")\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if <condition>:\n    block of code\nelif <condition)\n    block of code\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating an example of combinations of conditions\nage = 25\n\nif age < 10:\n    print("Just a kid.")\nelif age < 16:\n    print("Can\'t drive yet!")\nelif age > 21:\n    print("You are an adult!")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"You are an adult!\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"if <condition>:\n    block of code\nelse:\n    block of code\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating an example of combinations of conditions\nage = 25\n\nif age < 10:\n    print("Just a kid.")\nelif age < 16:\n    print("Can\'t drive yet!")\nelif age < 21:\n    print("No drinking for you!")\nelse:\n    print("You\'re good to go!")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"You're good to go!\n"))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"A function is a block of code which only runs when it is called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating a simple function of print statements\ndef greeting():\n    print("Hello")\n    print("Hola")\n    print("Ciao")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# calling the function\ngreeting()\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello\nHola\nCiao\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating a function that requires a parameter\ndef root_on(school):\n    if school == "UC":\n        print("Go Bearcats!")\n    elif school == "OSU":\n        print("Go Buckeyes!")\n    else:\n        print("Go team!")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# calling the function\nroot_on("UC")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Go Bearcats!\n"))),(0,r.kt)("h3",{id:"retuning-a-value"},"Retuning a value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# returning a value within a function\ndef root_on2(school):\n    if school == "UC":\n        return "Go Bearcat!"\n    if school == "OSU":\n        return "Go Buckeyes!"\n    return "Go team!"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# calling the fucntion\nmy_team = root_on2("UC")\nprint("You can do it! {}".format(my_team))\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"You can do it! Go Bearcat!\n"))),(0,r.kt)("h3",{id:"lambda-function"},"Lambda function"),(0,r.kt)("p",null,"A lambda function is a small anonymous function."),(0,r.kt)("p",null,"A lambda function can take any number of arguments, but can only have one expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a 'lambda' fuction\naFunction = lambda x: x * x\nprint(aFunction(10))\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"100\n"))),(0,r.kt)("h2",{id:"try-except-and-else-statements"},"Try, Except, and Else Statements"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating a fucntion\ndef divide(a,b):\n    print("a: {} b: {}".format(a, b))\n    try:\n        result = a / b\n    except (ZeroDivisionError) as err:\n        print("Divide by zero:")\n        print(err)\n    except (TypeError) as err:\n        print("Type error:")\n        print(err)\n    else:\n        print(f"{a} divided by {b} is {result}")     # function strings in python\n    finally:\n        print("This will run no matter what")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# calling the fucntion and passing arguments\ndivide(6,2)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a: 6 b: 2\n6 divided by 2 is 3.0\nThis will run no matter what\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# calling the fucntion and passing arguments\ndivide(6, 'a')\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a: 6 b: a\nType error:\nunsupported operand type(s) for /: 'int' and 'str'\nThis will run no matter what\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# calling the fucntion and passing arguments\ndivide(6,0)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a: 6 b: 0\nDivide by zero:\ndivision by zero\nThis will run no matter what\n"))),(0,r.kt)("h2",{id:"for-loops"},"for Loops"),(0,r.kt)("p",null,"A for loop is used to iterate over a sequence of values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a sequence of numbers\nrange(10)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"range(0, 10)\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# applying the sequence to a list\nlist(range(10))\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a 'for loop'\nfor number in range(10):\n    print(number)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a for loop for a specific range of values - range(start, stop)\nfor num in range(90,101):\n    print(num)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a for loop for a specific range of values - range(start, stop)\nfor item in range(0, 26, 5):\n    print(item)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n5\n10\n15\n20\n25\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a for loop for a range of values that goes in reverse/decending order\nfor value in range(10,0,-1):\n    print(value)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# creating a more elaborated for looop \nmy_list = [1, 11, 4, 44]\n\nfor thing in my_list:\n    greeting()\n    print("\\n")\n')),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello\nHola\nCiao\n\n\nHello\nHola\nCiao\n\n\nHello\nHola\nCiao\n\n\nHello\nHola\nCiao\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# creating a for loop to print values from a list\nmy_list = [1, 11, 4, 44]\n\nfor thing in my_list:\n    print(thing)\n")),(0,r.kt)(s,{lang:"python",mdxType:"CodeOutputBlock"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1\n11\n4\n44\n"))))}d.isMDXComponent=!0}}]);