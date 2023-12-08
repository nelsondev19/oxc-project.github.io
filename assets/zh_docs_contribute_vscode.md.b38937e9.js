import{_ as e,o,c as t,Q as d}from"./chunks/framework.725e5b03.js";const m=JSON.parse('{"title":"VSCode Extension","description":"","frontmatter":{"title":"VSCode Extension","outline":"deep"},"headers":[],"relativePath":"zh/docs/contribute/vscode.md","filePath":"zh/docs/contribute/vscode.md"}'),n={name:"zh/docs/contribute/vscode.md"},i=d('<h1 id="vscode-extension" tabindex="-1">VSCode Extension <a class="header-anchor" href="#vscode-extension" aria-label="Permalink to &quot;VSCode Extension&quot;">​</a></h1><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p>Build the extension and run it inside vscode:</p><ol><li><code>pnpm install</code></li><li><code>pnpm run build</code></li><li><code>pnpm run package</code></li><li>open vscode and run the command palette &quot;Extensions: Install from VSIX...&quot;</li><li>find the <code>oxc-vscode-x.x.x.vsix</code> file from <code>./editor/vscode</code> directory</li><li>open a <code>.js</code> / <code>.ts</code> file, add <code>debugger;</code> and save</li><li>see the warning <code>eslint(no-debugger): debugger statement is not allowed - oxc</code></li></ol>',4),c=[i];function a(s,l,r,p,_,u){return o(),t("div",null,c)}const x=e(n,[["render",a]]);export{m as __pageData,x as default};
