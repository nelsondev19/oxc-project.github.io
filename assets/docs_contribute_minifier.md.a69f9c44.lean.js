import{_ as i,o as t,c as o,k as e,a as s}from"./chunks/framework.36bc40e2.js";const g=JSON.parse('{"title":"Minifier","description":"","frontmatter":{"title":"Minifier","outline":"deep"},"headers":[],"relativePath":"docs/contribute/minifier.md","filePath":"docs/contribute/minifier.md","lastUpdated":1700044925000}'),r={name:"docs/contribute/minifier.md"},a=e("h1",{id:"minifier",tabindex:"-1"},[s("Minifier "),e("a",{class:"header-anchor",href:"#minifier","aria-label":'Permalink to "Minifier"'},"​")],-1),n=e("p",null,"JavaScript minification plays a crucial role in optimizing website performance as it reduces the amount of data sent to users, resulting in faster page loads. This holds tremendous economic value, particularly for e-commerce websites, where every second can equate to millions of dollars.",-1),c=e("p",null,"However, existing minifiers typically require a trade-off between compression quality and speed. You have to choose between the slowest for the best compression or the fastest for less compression. But what if we could develop a faster minifier without compromising on compression?",-1),l=e("p",null,"We are actively working on a prototype that aims to achieve this goal, by porting all test cases from well-known minifiers such as [google-closure-compiler], [terser], [esbuild], and [tdewolff-minify].",-1),d=e("p",null,"Preliminary results indicate that we are on track to achieve our objectives. With the Oxc minifier, you can expect faster minification times without sacrificing compression quality.",-1),f=[a,n,c,l,d];function m(p,u,h,_,w,b){return t(),o("div",null,f)}const v=i(r,[["render",m]]);export{g as __pageData,v as default};