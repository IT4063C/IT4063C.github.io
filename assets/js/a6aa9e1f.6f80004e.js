"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3089],{80046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(67294),l=n(86010),a=n(52263),i=n(1944),c=n(35281),o=n(39058),s=n(99703),p=n(90197),m=n(79985);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.Z)(),{blogDescription:l,blogTitle:c,permalink:o}=t,s="/"===o?n:c;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:s,description:l}),r.createElement(p.Z,{tag:"blog_posts_list"}))}function d(e){const{metadata:t,items:n,sidebar:l}=e;return r.createElement(o.Z,{sidebar:l},r.createElement(m.Z,{items:n}),r.createElement(s.Z,{metadata:t}))}function g(e){return r.createElement(i.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},r.createElement(u,e),r.createElement(d,e))}},99703:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(95999),a=n(32244);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&r.createElement(a.Z,{permalink:n,title:r.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(a.Z,{permalink:i,title:r.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),l=n(9460),a=n(30390);function i(e){let{items:t,component:n=a.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(l.n,{key:t.metadata.permalink,content:t},r.createElement(n,null,r.createElement(t,null)))})))}},12294:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),l=n(67294),a=n(35742),i=n(39960),c=n(74915),o=n(92503),s=n(34673);const p="wrapper_Kbar",m=e=>{let{children:t}=e;return l.createElement("div",{className:p},t," ")},u="wrapper_II1w",d="center__O8v";var g=n(64593);const h=e=>{var t,n,r,a;let{children:i,center:c=!1}=e;if(console.log("center: ",c),!i)return console.warn("<HTMLOutputBlock/> should include a code block"),null;if(null==(t=i.props)||!t.children||"code"!==(null==(n=i.props)||null==(r=n.children)||null==(a=r.props)?void 0:a.originalType))return console.warn("<HTMLOutputBlock/> should include a code block"),null;const o=i.props.children.props.children,s=o.match(/<script[^>]*>(.*)<\/script>/s),p=s&&s.length>1;return l.createElement(l.Fragment,null,p?l.createElement(g.Z,null,l.createElement("script",null,s[1])):null,l.createElement("div",{className:u+(c?" "+d:""),dangerouslySetInnerHTML:{__html:o}}))};const E={head:e=>{const t=l.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...r}=e.props;return l.createElement(e.props.originalType,r)}return e}(e)));return l.createElement(a.Z,e,t)},code:e=>l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?l.createElement("code",e):l.createElement(c.Z,e),a:e=>l.createElement(i.Z,e),pre:e=>{var t;return l.createElement(c.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:e=>{const t=l.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=l.createElement(l.Fragment,null,t.filter((e=>e!==n)));return l.createElement(s.Z,(0,r.Z)({},e,{summary:n}),a)},h1:e=>l.createElement(o.Z,(0,r.Z)({as:"h1"},e)),h2:e=>l.createElement(o.Z,(0,r.Z)({as:"h2"},e)),h3:e=>l.createElement(o.Z,(0,r.Z)({as:"h3"},e)),h4:e=>l.createElement(o.Z,(0,r.Z)({as:"h4"},e)),h5:e=>l.createElement(o.Z,(0,r.Z)({as:"h5"},e)),h6:e=>l.createElement(o.Z,(0,r.Z)({as:"h6"},e)),CodeOutputBlock:m,HTMLOutputBlock:h}}}]);