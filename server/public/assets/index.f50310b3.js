import{o as d,c as n,a as s,t as u,b as v,r as p,d as b,F as h,p as _,e as g,f}from"./vendor.230bb215.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};m();var i=(a,r)=>{const o=a.__vccOpts||a;for(const[c,e]of r)o[c]=e;return o};const k={name:"HelloWorld",props:{msg:String}},y={class:"hello"},j=v('<p data-v-4dec2c2b> For a guide and recipes on how to configure / customize this project,<br data-v-4dec2c2b> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>vue-cli documentation</a>. </p><h3 data-v-4dec2c2b>Installed CLI Plugins</h3><ul data-v-4dec2c2b><li data-v-4dec2c2b><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-4dec2c2b>babel</a></li><li data-v-4dec2c2b><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-4dec2c2b>router</a></li><li data-v-4dec2c2b><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-4dec2c2b>vuex</a></li><li data-v-4dec2c2b><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-4dec2c2b>eslint</a></li></ul><h3 data-v-4dec2c2b>Essential Links</h3><ul data-v-4dec2c2b><li data-v-4dec2c2b><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>Core Docs</a></li><li data-v-4dec2c2b><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>Forum</a></li><li data-v-4dec2c2b><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>Community Chat</a></li><li data-v-4dec2c2b><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-4dec2c2b>Twitter</a></li><li data-v-4dec2c2b><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>News</a></li></ul><h3 data-v-4dec2c2b>Ecosystem</h3><ul data-v-4dec2c2b><li data-v-4dec2c2b><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>vue-router</a></li><li data-v-4dec2c2b><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>vuex</a></li><li data-v-4dec2c2b><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-4dec2c2b>vue-devtools</a></li><li data-v-4dec2c2b><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-4dec2c2b>vue-loader</a></li><li data-v-4dec2c2b><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-4dec2c2b>awesome-vue</a></li></ul>',7);function $(a,r,o,c,e,t){return d(),n("div",y,[s("h1",null,u(o.msg),1),j])}var w=i(k,[["render",$],["__scopeId","data-v-4dec2c2b"]]),x="/assets/logo.03d6d6da.png";const I={name:"App",components:{HelloWorld:w}},L=a=>(_("data-v-3d313da4"),a=a(),g(),a),N=L(()=>s("img",{alt:"Vue logo",src:x},null,-1));function S(a,r,o,c,e,t){const l=p("HelloWorld");return d(),n(h,null,[N,b(l)],64)}var A=i(I,[["render",S],["__scopeId","data-v-3d313da4"]]);f(A).mount("#app");
//# sourceMappingURL=index.f50310b3.js.map