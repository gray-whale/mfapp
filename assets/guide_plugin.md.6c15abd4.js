import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b137f78f.js";const g=JSON.parse('{"title":"插件指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin.md","filePath":"guide/plugin.md","lastUpdated":1697386468000}'),l={name:"guide/plugin.md"},e=p(`<h1 id="插件指南" tabindex="-1">插件指南 <a class="header-anchor" href="#插件指南" aria-label="Permalink to &quot;插件指南&quot;">​</a></h1><p>基座引入了插件化机制，目的是为了让开发者能够通过编写插件的方式扩展更多功能，或为自身业务定制个性化功能。</p><h2 id="插件能做什么" tabindex="-1">插件能做什么 <a class="header-anchor" href="#插件能做什么" aria-label="Permalink to &quot;插件能做什么&quot;">​</a></h2><p>插件的功能范围没有严格的限制——一般有下面两种：</p><ul><li>添加全局方法或增加默认参数</li><li>在应用的生命周期中自定义功能</li></ul><h2 id="使用插件" tabindex="-1">使用插件 <a class="header-anchor" href="#使用插件" aria-label="Permalink to &quot;使用插件&quot;">​</a></h2><p>通过调用 Bay.usePlugin 方法将插件添加到你的应用程序中。</p><p>usePlugin() 方法第一个参数接收要安装的插件。</p><p>它还会自动阻止你多次使用同一插件，因此在同一插件上多次调用只会安装一次该插件，Bay 内部通过插件执行后返回的 name 作为唯一标识来进行区分，在进行插件命名时，请确保不会和其他插件之间发生冲突。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Bay } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@mfejs/mfapp&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MFAppLogger </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./plugins/logger&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Bay.</span><span style="color:#B392F0;">usePlugin</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MFAppLogger</span><span style="color:#E1E4E8;">());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Bay } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@mfejs/mfapp&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MFAppLogger </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./plugins/logger&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Bay.</span><span style="color:#6F42C1;">usePlugin</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MFAppLogger</span><span style="color:#24292E;">());</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,10),o=[e];function r(t,c,i,d,u,y){return a(),n("div",null,o)}const m=s(l,[["render",r]]);export{g as __pageData,m as default};
