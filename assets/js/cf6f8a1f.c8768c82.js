"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8609],{51809:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var s=n(87462),o=(n(67294),n(3905));n(8209);const a={title:"Code Snippets",sidebar_position:4},i=void 0,p={unversionedId:"code-snippets",id:"code-snippets",title:"Code Snippets",description:"Python Code Snippets",source:"@site/content/instructor/code-snippets.mdx",sourceDirName:".",slug:"/code-snippets",permalink:"/instructor/code-snippets",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/instructor/code-snippets.mdx",tags:[],version:"current",lastUpdatedBy:"Yahya Gilany",lastUpdatedAt:1658010966,formattedLastUpdatedAt:"Jul 16, 2022",sidebarPosition:4,frontMatter:{title:"Code Snippets",sidebar_position:4},sidebar:"notes",previous:{title:"6. Data Wrangling",permalink:"/instructor/weekly-modules/module6"},next:{title:"Links",permalink:"/instructor/links"}},r={},d=[{value:"Python Code Snippets",id:"python-code-snippets",level:2}],c={toc:d};function l(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python-code-snippets"},"Python Code Snippets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\n\n# make sure to install these packages before running:\n# pip install pandas\n# pip install sodapy\n\nimport pandas as pd\nfrom sodapy import Socrata\n\n# Unauthenticated client only works with public data sets. Note \'None\'\n# in place of application token, and no username or password:\nclient = Socrata("data.cincinnati-oh.gov", None)\n\n# Example authenticated client (needed for non-public datasets):\n# client = Socrata(data.cincinnati-oh.gov,\n#                  MyAppToken,\n#                  userame="user@example.com",\n#                  password="AFakePassword")\n\n# First 2000 results, returned as JSON from API / converted to Python list of\n# dictionaries by sodapy.\nresults = client.get("k59e-2pvf", limit=2000)\n\n# Convert to pandas DataFrame\nresults_df = pd.DataFrame.from_records(results)\n')))}l.isMDXComponent=!0}}]);