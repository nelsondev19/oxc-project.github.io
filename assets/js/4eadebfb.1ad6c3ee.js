"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8452],{7943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(1527),i=t(7660);const o={id:"linter",title:"Linter"},s="Linter",l={id:"contribute/linter",title:"Linter",description:"Development",source:"@site/docs/contribute/linter.md",sourceDirName:"contribute",slug:"/contribute/linter",permalink:"/docs/contribute/linter",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/oxc-project.github.io/tree/main/docs/contribute/linter.md",tags:[],version:"current",frontMatter:{id:"linter",title:"Linter"},sidebar:"contribute",previous:{title:"Parser",permalink:"/docs/contribute/parser"},next:{title:"Resolver",permalink:"/docs/contribute/resolver"}},c={},d=[{value:"Development",id:"development",level:2},{value:"Rule generation",id:"rule-generation",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"linter",children:"Linter"}),"\n",(0,r.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"./test.ts"})," and then"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'just watch "run -p oxc_cli --bin oxlint -- test.ts"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"rule-generation",children:"Rule generation"}),"\n",(0,r.jsx)(n.p,{children:"Create a new lint rule by providing the ESLint name"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"just new-rule name\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then add the rule to ",(0,r.jsx)(n.code,{children:"crates/oxc_linter/src/rules.rs"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add to ",(0,r.jsx)(n.code,{children:"mod"})]}),"\n",(0,r.jsxs)(n.li,{children:["Add to ",(0,r.jsx)(n.code,{children:"oxc_macros::declare_all_lint_rules"})," at the bottom of the file"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For other plugins, there are also:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"just new-jest-rule name\njust new-ts-rule name\njust new-unicorn-rule name\njust new-react-rule name\njust new-jsx-a11y-rule name\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7660:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(959);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);