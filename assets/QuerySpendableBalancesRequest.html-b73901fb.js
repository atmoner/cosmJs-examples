import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c,b as n,d as s,a as e,e as l}from"./app-a0a52c46.js";const r={},i={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"Info",-1),d=n("p",null,"This doc is generated with",-1),k={href:"https://www.npmjs.com/package/@cosmjs/stargate",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/cosmjs-types",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="connect-rpc" tabindex="-1"><a class="header-anchor" href="#connect-rpc" aria-hidden="true">#</a> Connect rpc</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tendermint37Client <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@cosmjs/tendermint-rpc&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createProtobufRpcClient<span class="token punctuation">,</span> QueryClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@cosmjs/stargate&quot;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> bank <span class="token keyword">from</span> <span class="token string">&quot;cosmjs-types/cosmos/bank/v1beta1/query&quot;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">await</span> Tendermint37Client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;{rpc_url}&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span>
<span class="token keyword">const</span> rpcClient <span class="token operator">=</span> <span class="token function">createProtobufRpcClient</span><span class="token punctuation">(</span>queryClient<span class="token punctuation">)</span>

<span class="token keyword">const</span> querybank <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bank<span class="token punctuation">.</span>QueryClientImpl</span><span class="token punctuation">(</span>rpcClient<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> SpendableBalances <span class="token operator">=</span> <span class="token keyword">await</span> querybank<span class="token punctuation">.</span><span class="token function">SpendableBalances</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>SpendableBalances<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function b(h,y){const a=o("ExternalLinkIcon");return p(),c("div",null,[n("div",i,[u,d,n("ul",null,[n("li",null,[n("a",k,[s("@cosmjs/stargate"),e(a)]),s(": ^0.31.3")]),n("li",null,[n("a",m,[s("cosmjs-types"),e(a)]),s(": ^0.9.0")])])]),v])}const f=t(r,[["render",b],["__file","QuerySpendableBalancesRequest.html.vue"]]);export{f as default};
