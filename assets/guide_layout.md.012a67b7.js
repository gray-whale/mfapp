import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.e750c0e5.js";const b=JSON.parse('{"title":"布局","description":"","frontmatter":{},"headers":[],"relativePath":"guide/layout.md","filePath":"guide/layout.md","lastUpdated":1697021397000}'),p={name:"guide/layout.md"},o=l(`<h1 id="布局" tabindex="-1">布局 <a class="header-anchor" href="#布局" aria-label="Permalink to &quot;布局&quot;">​</a></h1><p>基座统一提供布局组件 提供了一系列布局组件，简化子应用开发的同时，保证视觉的统一。</p><p>管理端在布局上有规范的定义。现在基座实现了这些定义，并通过 Web Component 的形式暴露到子应用使用。</p><h2 id="扩展插槽" tabindex="-1">扩展插槽 <a class="header-anchor" href="#扩展插槽" aria-label="Permalink to &quot;扩展插槽&quot;">​</a></h2><p>基座提供了一些组件，供子应用扩展主界面的一些内容：</p><table><thead><tr><th>组件名称</th><th>描述</th></tr></thead><tbody><tr><td>mfe-header-slot</td><td>头部扩展插槽</td></tr><tr><td>mfe-header-dropdown-menu</td><td>头像下拉列表扩展</td></tr><tr><td>mfe-sidebar-top-slot</td><td>侧边栏上方扩展插槽</td></tr><tr><td>mfe-sidebar-bottom-slot</td><td>侧边栏下方扩展插槽</td></tr></tbody></table><p>使用示例：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">mfe-sidebar-bottom-slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;collapse&quot;</span><span style="color:#E1E4E8;">&gt;折叠显示&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;expand&quot;</span><span style="color:#E1E4E8;">&gt;展开显示&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">mfe-sidebar-bottom-slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">mfe-sidebar-bottom-slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;collapse&quot;</span><span style="color:#24292E;">&gt;折叠显示&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;expand&quot;</span><span style="color:#24292E;">&gt;展开显示&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">mfe-sidebar-bottom-slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：mfe-* 是 Web Component 组件，slot 的使用方式和 vue 有些差别，必须使用 slot 属性，且不能用于 template</p></div><h2 id="错误页面" tabindex="-1">错误页面 <a class="header-anchor" href="#错误页面" aria-label="Permalink to &quot;错误页面&quot;">​</a></h2><p>基座也内置了错误页面，供子应用使用:</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 默认 404 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mfc-error-page-not-found</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 默认 403 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mfc-error-page-forbidden</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 默认 403 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">mfc-error-page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:image</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;可选，支持自定义图片&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;发现外星人&quot;</span><span style="color:#E1E4E8;">&gt;详细描述坐标&lt;/</span><span style="color:#85E89D;">wkc-error-page</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 默认 404 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mfc-error-page-not-found</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 默认 403 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mfc-error-page-forbidden</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 默认 403 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">mfc-error-page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:image</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;可选，支持自定义图片&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">description</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;发现外星人&quot;</span><span style="color:#24292E;">&gt;详细描述坐标&lt;/</span><span style="color:#22863A;">wkc-error-page</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="自定义" tabindex="-1">自定义 <a class="header-anchor" href="#自定义" aria-label="Permalink to &quot;自定义&quot;">​</a></h2><p>自定义布局？ 完全可以，基座并没有限制子应用应该渲染什么内容。</p>`,14),t=[o];function e(r,c,E,y,i,d){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{b as __pageData,u as default};
