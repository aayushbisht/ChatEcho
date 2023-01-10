(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const u="/assets/bot-61bdb6bf.svg",f="/assets/user-bcdeb18e.svg",c=document.querySelector("form"),i=document.querySelector("#chat_container");function m(e){e.textContent="",setInterval(()=>{e.textContent+=".",e.textContent==="...."&&(e.textContent="")},300)}function p(){const e=Date.now(),r=Math.random().toString(16);return`id-${e}-${r}`}function d(e,o,r){return`
    <div class ="wrapper ${e&&"ai"}">
    <div class ="chat">
    <div className = "profile">
    <img src = "${e?u:f}" alt="${e?"bot":"user"}"/>
    </div>
    <div class="message" id=${r}>${o}</div>
    </div>
    </div>
    `}const l=async e=>{e.preventDefault();const o=new FormData(c);i.innerHTML+=d(!1,o.get("prompt")),c.reset();const r=p();i.innerHTML+=d(!0," ",r),i.scrollTop=i.scrollHeight;const s=document.getElementById(r);console.log(s),m(s)};c.addEventListener("submit",l);c.addEventListener("keyup",e=>{e.keyCode===13&&l(e)});
