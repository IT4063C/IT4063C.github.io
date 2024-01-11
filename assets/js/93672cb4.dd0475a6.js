"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3570],{27574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));n(8209);const r={title:"Numbers in Computers",sidebar_position:1,draft:!1},l=void 0,s={unversionedId:"working-with-data/numbers-in-computers",id:"working-with-data/numbers-in-computers",title:"Numbers in Computers",description:"Understanding how computers represent and handles numbers under the hood will save you from many unexpected issues and trouble in your analysis works.",source:"@site/content/course-notes/5.working-with-data/1.numbers-in-computers.md",sourceDirName:"5.working-with-data",slug:"/working-with-data/numbers-in-computers",permalink:"/course-notes/working-with-data/numbers-in-computers",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/course-notes/5.working-with-data/1.numbers-in-computers.md",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1662926689,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:1,frontMatter:{title:"Numbers in Computers",sidebar_position:1,draft:!1},sidebar:"notes",previous:{title:"Data Analytics",permalink:"/course-notes/data-analytics/"},next:{title:"Importing from Different Data Sources",permalink:"/course-notes/working-with-data/data-sources"}},i={},p=[{value:"Integers\xb6",id:"integers",level:3},{value:"Floating Point Numbers\xb6",id:"floating-point-numbers",level:3},{value:"Number Problems",id:"number-problems",level:2},{value:"Problem 1: Integer Overflow",id:"problem-1-integer-overflow",level:3},{value:"Problem 2: Floating Number Precision",id:"problem-2-floating-number-precision",level:3},{value:"About <code>Pandas</code>",id:"about-pandas",level:2},{value:"About Series",id:"about-series",level:3},{value:"About DataFrames",id:"about-dataframes",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=u("CodeOutputBlock"),m=u("HTMLOutputBlock"),h={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Understanding how computers represent and handles numbers under the hood will save you from many unexpected issues and trouble in your analysis works."),(0,o.kt)("p",null,"Broadly speaking, computers have 2 ways to represent numbers: integers (for whole numbers) and floating point numbers (for decimal numbers)."),(0,o.kt)("p",null,"Regardless of the type, all numbers are stored in bits in the computer memory."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The following explanations are very good; and there\u2019s no reason to try to write my own explanations when these exist.")),(0,o.kt)("h3",{id:"integers"},"Integers\xb6"),(0,o.kt)("p",null,"Integers, as a datatype, are wonderful. They are precise and pretty intuitive. However, they have a major pitfall: integer overflow and underflow. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Watch this video")),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/vA0Rl6Ne5C8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"floating-point-numbers"},"Floating Point Numbers\xb6"),(0,o.kt)("p",null," Since Integers can only represent whole numbers, we need to use floating point numbers, and other could argue that they can't represent really big numbers. So how do we deal with decimals and really big numbers? Floating point numbers!"),(0,o.kt)("p",null,"To learn about floating point numbers, please:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Watch this video")),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/pQs_wx8eoQ8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"and ",(0,o.kt)("a",{parentName:"strong",href:"https://ciechanow.ski/exposing-floating-point/"},"Read this"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"2 major problems you find when working on numbers in computers in general are "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Integer overflow",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Leads to situations like adding two big numbers producing a negative number"),(0,o.kt)("li",{parentName:"ul"},"Leads to situations like subtracting two small big negative numbers producing a positive number."))),(0,o.kt)("li",{parentName:"ul"},"Floating point precision.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Computers can't keep track of very large numbers and very small ones at the same time (in the same calculation)"),(0,o.kt)("li",{parentName:"ul"},"Situations where very simple arithmetics gives weird results. ")))),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Example 1: Imprecise arithmetics calculations\n\n0.1 + 0.1 + 0.1\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    0.30000000000000004\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# example 1.1: check if 0.1 + 0.1 + 0.1 EQUALS 0.3\n0.1 + 0.1 + 0.1 == 0.3\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    False\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Example 2: can't keep track of very big and very small numbers in the same calculations, leading to a lot of rounding errors\nprint(2.32781**55 + 10 == 2.32781**55)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    True\n"))),(0,o.kt)("p",null,"The videos above, explains this problem perfectly."),(0,o.kt)("h2",{id:"number-problems"},"Number Problems"),(0,o.kt)("h3",{id:"problem-1-integer-overflow"},"Problem 1: Integer Overflow"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is not an alternative to the videos above\nConsider the following: "),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"You have 5 bits to represent a signed number (positive and negative).\n0\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e3"),(0,o.kt)("li",{parentName:"ul"},"The computer is storing this information as bits of 1's and 0's."),(0,o.kt)("li",{parentName:"ul"},"One of the available bits will be used to represent the sigh (0\ufe0f\u20e3 for positive, 1\ufe0f\u20e3 for negative)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This means, you only have 4 bits to represent your number. Only the numbers from (-15) to (0) to (15)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e3 (-15)"),(0,o.kt)("li",{parentName:"ul"},"0\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e3 (0)"),(0,o.kt)("li",{parentName:"ul"},"0\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e3 (15)"))))),(0,o.kt)("li",{parentName:"ul"},"So if we tried to add up (15 + 15), what would we get."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  0\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e3\n+ 0\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e3\n------------\n  1\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e30\ufe0f\u20e3 (which is -14)\n")),(0,o.kt)("p",null,"Also what if try to add +15 + 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  0\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e31\ufe0f\u20e3\n+ 0\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e31\ufe0f\u20e3\n------------\n  1\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e30\ufe0f\u20e3 (which is -0; yes in computers, it's a thing)\n")),(0,o.kt)("p",null,"A tradeoff was made when designing python to prioritize ease of use, over performance. The idea being that if anyone needed performance, they could go with languages like C at the time.Actually up until this time, Python is still the most performant programming language, and arguable the most complex."),(0,o.kt)("p",null,"How did this manifest in python? You can't overflow integers (the problem described here, can't happen)"),(0,o.kt)("p",null,"This design decision is evident in how python deals with numbers.\nIn computers, generally, values and Numbers are stored in memory using bits. For example, if you have 64-bit computer, you can store integer numbers are stored in 64 bits which means it can store numbers between $",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 15: 0\\to 2^{63}-1 $\u0332",style:{color:"#cc0000"}},"0\\to 2^{63}-1 $")),". One of those bits is where we store whether a number is positive or negative. "),(0,o.kt)("p",null,"Traditionally, if we had 2**63 and made it even bigger, it should overflow, and the calculation would yield a negative number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# In most modern computers, we have 64-bit processors. which means that I can have 64-bit integers.\nlarge_number  = 2**63\nprint(large_number)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    9223372036854775808\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Making this very large number, even bigger should mean overflowing the 64 bits.\nvery_large_number = large_number ** 4 # too large it can't fit in 64 bits\nprint(very_large_number) # however, it doesn't overflow.\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    7237005577332262213973186563042994240829374041602535252466099000494570602496\n"))),(0,o.kt)("p",null,"Python is convenient enough to allow for that to happen easily. "),(0,o.kt)("p",null,"This convenience comes at the expense of performance and speed. Simple integer computation isn\u2019t just about computing the results anymore. , it stops to check whether you the result has been allocated enough bits to store the result, and, if not, it just adds more bits! So if you do math with an integer that won\u2019t fit in 64 bits, it will just allocate more bits to the integer!"),(0,o.kt)("p",null,"This performance hit wouldn\u2019t make python a good option for data analysis. Where speed is of the utmost importance and where we work with a huge datasets of data."),(0,o.kt)("p",null,"This is why we use libraries like ",(0,o.kt)("inlineCode",{parentName:"p"},"Numpy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pandas"),". They make calculations a lot more faster and a lot more efficient."),(0,o.kt)("p",null,"How fast? Let's try a (toy example) of adding numbers using vanilla python and then again using ",(0,o.kt)("inlineCode",{parentName:"p"},"Numpy"),".\nWe'll measure the speed of execution and the memory usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nimport pandas as pd\nimport time # used to time the execution of the code\nfrom pympler import asizeof # used to measure the size of the data structures\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Make a regular Python list\n# with all the numbers up to one hundred million\n\n# Remember `range` doesn't include the last number,\n# so I have to go up to 100_000_001 to actually get all\n# the numbers from 1 to 100_000_000\n\none_to_one_hund_mil_list = list(range(1, 100_000_001))\n\n# Now make a numpy vector\none_to_one_hund_mil_vector = np.arange(1, 100_000_001)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'start = time.time()\n\ntotal = 0\nfor i in one_to_one_hund_mil_list:\n    total = total + i\n    pass\n\nend = time.time()\npython_total = end - start\nprint(f" Python took {python_total:.3f} seconds")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"     Python took 8.303 seconds\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'start = time.time()\n\n# Now we sum up all the numbers in the array\n# using the numpy `sum` function.\nnp.sum(one_to_one_hund_mil_vector)\n\nend = time.time()\nnumpy_total = end - start\nprint(f"Numpy took {numpy_total:.3f} seconds")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Numpy took 0.079 seconds\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(f"Numpy was {python_total / numpy_total:.1f}x faster!")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Numpy was 104.6x faster!\n"))),(0,o.kt)("p",null,"You could argue that a loop implementation isn't the most efficient. you're right it's not; ",(0,o.kt)("inlineCode",{parentName:"p"},"Numpy")," would still be drastically more efficient though."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"start = time.time()\nsum(one_to_one_hund_mil_list)\nend = time.time()\n\nsum_python_total = end - start\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(f"Numpy was {sum_python_total / numpy_total:.1f}x faster!")\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Numpy was 11.3x faster!\n"))),(0,o.kt)("p",null,"Even from a memory perspective"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# `asizeof.asizeof()` gets the size of an object\n# and all of its contents in bytes, so we'll\n# divide it's output by one billion to get\n# the value in gigabytes.\n\nlist_size_in_gb = asizeof.asizeof(one_to_one_hund_mil_list) / 1_000_000_000\nvector_size_in_gb = asizeof.asizeof(one_to_one_hund_mil_vector) / 1_000_000_000\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(f"The Python list of numbers took up {list_size_in_gb:.2f} GB of RAM")\nprint(f"The numpy vector of numbers took up {vector_size_in_gb:.2f} GB of RAM")\nprint(\n    f"That means the Python list took up {list_size_in_gb/vector_size_in_gb:.0f}x "\n    "as much space as the numpy vector!"\n)\n')),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    The Python list of numbers took up 4.00 GB of RAM\n    The numpy vector of numbers took up 0.80 GB of RAM\n    That means the Python list took up 5x as much space as the numpy vector!\n"))),(0,o.kt)("p",null,"Everything is the world of software design and architecture is a tradeoff. You don\u2019t get the efficiency with nothing to give. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Numpy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pandas")," you specify the type and size of the data you store and they don\u2019t check for integer overflows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n# 63 bits because the sign bit is used\na = np.array([2**63-2, 2**63-1], dtype='int')\na\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    array([9223372036854775806, 9223372036854775807])\n"))),(0,o.kt)("p",null,"so if you try to increase the values by one "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"a + 1 # add 1 to every element in the overflow; you get a negative number (overflow)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    array([ 9223372036854775807, -9223372036854775808])\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"x = np.array([2**15-1], dtype='int16') # 15 bits; 16th bit is the sign bit\nx + 1 # another overflow (negative number)\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    array([-32768], dtype=int16)\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# The bits can also underflow (wrap around) with unsigned integers\nx = np.array([0], dtype='uint16')\nx - 1 # underflow\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    array([65535], dtype=uint16)\n"))),(0,o.kt)("h3",{id:"problem-2-floating-number-precision"},"Problem 2: Floating Number Precision"),(0,o.kt)("p",null,"The other major problem you get with numbers is floating number precessions: you get this problem whether you\u2019re using numpy or vanilla python."),(0,o.kt)("p",null,"Because computers store numbers (even decimal ones uses bits). Can't stress enough to ",(0,o.kt)("strong",{parentName:"p"},"watch the video"),"."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/pQs_wx8eoQ8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"and ",(0,o.kt)("a",{parentName:"strong",href:"https://ciechanow.ski/exposing-floating-point/"},"Read this"))),(0,o.kt)("p",null,"If you have 64 bits integer, you get one bit for the sign, 52 bits for the mantissa  and 11 bits for the exponent.. the number decides where to place the decimal. An act that results in a tradeoff between the size and accuracy of your numbers that you store. "),(0,o.kt)("p",null,"A manifestation of this issue can be demonstrated by this."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"0.1 + 0.1 + 0.1 == 0.3 # False")),(0,o.kt)("p",null,"These numbers as you\u2019d learn from the video aren\u2019t represented on the computers line of numbers. Not accurately at least."),(0,o.kt)("h2",{id:"about-pandas"},"About ",(0,o.kt)("inlineCode",{parentName:"h2"},"Pandas")),(0,o.kt)("p",null,"Pandas is the second package you\u2019ll most commonly use in your analysis projects. It provides a flexible data structure to allow you to work with relational and labeled data sets."),(0,o.kt)("p",null,"It allows for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy search and filtering of the data"),(0,o.kt)("li",{parentName:"ul"},"Easy handling for missing data (we\u2019ll talk more about that later in the class)"),(0,o.kt)("li",{parentName:"ul"},"Easily merge and join data sets"),(0,o.kt)("li",{parentName:"ul"},"Easy reshaping of data"),(0,o.kt)("li",{parentName:"ul"},"Easy handling of time series datasets: or data that span over a long time.")),(0,o.kt)("p",null,"The 2 most common data structures we\u2019d use from pandas are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Series"),(0,o.kt)("li",{parentName:"ul"},"Data Frames")),(0,o.kt)("h3",{id:"about-series"},"About Series"),(0,o.kt)("p",null,"A series is an ordered collection of values, generally of the same type. Kind of like a numpy array. (Actually not kind of .. It is). Pandas uses numpy arrays to build its series."),(0,o.kt)("p",null,"Series are central to pandas because pandas was designed for statistics, and Series are a perfect way to collect lots of different observations of a variable."),(0,o.kt)("p",null,"To illustrate, let me tell you about a week at the zoo I wish I owned. Here\u2019s what attendance looked like at my zoo last week:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Day of Week"),(0,o.kt)("th",{parentName:"tr",align:null},"Attendees"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Monday"),(0,o.kt)("td",{parentName:"tr",align:null},"132 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tuesday"),(0,o.kt)("td",{parentName:"tr",align:null},"94 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Wednesday"),(0,o.kt)("td",{parentName:"tr",align:null},"112 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Thursday"),(0,o.kt)("td",{parentName:"tr",align:null},"84 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Friday"),(0,o.kt)("td",{parentName:"tr",align:null},"254 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Saturday"),(0,o.kt)("td",{parentName:"tr",align:null},"322 People")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sunday"),(0,o.kt)("td",{parentName:"tr",align:null},"472 People")))),(0,o.kt)("p",null,"To represent that using Pandas Series"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\nattendance = pd.Series(\n  [132, 94, 112, 84, 254, 322, 472],\n  index=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])\nattendance\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Monday       132\n    Tuesday       94\n    Wednesday    112\n    Thursday      84\n    Friday       254\n    Saturday     322\n    Sunday       472\n    dtype: int64\n"))),(0,o.kt)("p",null,"You can get the underlying numpy array by calling the values function. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"attendance.values\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    array([132,  94, 112,  84, 254, 322, 472])\n"))),(0,o.kt)("p",null,"This is good to know because every now and then you may find a tool that works with\xa0numpy\xa0arrays but\xa0not\xa0pandas. And when that happens, you now know how to pull out the\xa0numpy\xa0array underlying your Series and use it directly!"),(0,o.kt)("p",null,"Series also also allows you to have named indices for your elements in a series. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"attendance.index\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Index(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',\n           'Sunday'],\n          dtype='object')\n"))),(0,o.kt)("p",null,"It\u2019s also augmented with additional features to improve your development workflow."),(0,o.kt)("p",null,"You can also sort the days by the attendance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"attendance = attendance.sort_values()\nattendance\n")),(0,o.kt)(d,{lang:"python",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Thursday      84\n    Tuesday       94\n    Wednesday    112\n    Monday       132\n    Friday       254\n    Saturday     322\n    Sunday       472\n    dtype: int64\n"))),(0,o.kt)("p",null,"You could also use Pandas to subset datasets using indices, logical expressions and predicates"),(0,o.kt)("h3",{id:"about-dataframes"},"About DataFrames"),(0,o.kt)("p",null,"A pandas data frame is a tabular data structure, a 2d array. It can do everything you\u2019d generally do when a generalized series structure that allows for more than just 2 dimensions. "),(0,o.kt)("p",null,"The biggest difference here, is that we have more than one index, one for rows, and another for columns. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame({'animals': ['dog', 'cat', 'bird', 'fish'],\n                   'can_swim': [True, False, False, True],\n                   'has_fur': [True, True, False, False]})\ndf\n")),(0,o.kt)(m,{mdxType:"HTMLOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n<table border="1" class="dataframe">\n  <thead>\n    <tr style="text-align: right;">\n      <th></th>\n      <th>animals</th>\n      <th>can_swim</th>\n      <th>has_fur</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>dog</td>\n      <td>True</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>cat</td>\n      <td>False</td>\n      <td>True</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>bird</td>\n      <td>False</td>\n      <td>False</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>fish</td>\n      <td>True</td>\n      <td>False</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n'))),(0,o.kt)("p",null,"We can also construct data frames from other sources: (csv files, excel spreadsheets, databases, ...)"),(0,o.kt)("p",null,"We'll see that in the next post"))}c.isMDXComponent=!0}}]);