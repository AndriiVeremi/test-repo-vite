import{a as u}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="https://your-energy.b.goit.study/api",c=12,i=u.create({baseURL:f,params:{}}),p=async(r=1)=>(await i.get("/filters",{params:{filter:"Body parts",page:r,limit:c}})).data,g=async(r,t=1)=>(await i.get("/filters",{params:{filter:r,page:t,limit:c}})).data;function l(r){return r.map(({imgURL:t,filter:n,name:s})=>`<li class="card">
             <button type="button" class="cat-img"
			   style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
               url('${t}') ;
               background-size: cover;
               background-position:center;
               background-repeat: no-repeat;
              "
              </button>
<div class="card-description">
 <p class="name-category">${s}</p>
    <p class="name-exercises">${n}</p>
</div>
  </li>`).join("")}const d=document.querySelector(".cards"),m=document.querySelector(".filter-list");m.addEventListener("click",y);p().then(r=>{const t=r.results;console.log(t),d.insertAdjacentHTML("beforeend",l(t))}).catch(r=>{console.error(r)});function y(r){if(r.target.nodeName!=="BUTTON")return;const t=r.target.dataset.name;console.log(t),g(t).then(n=>{const s=n.results;console.log(s),d.innerHTML=l(s)}).catch(n=>{console.error(n)})}
//# sourceMappingURL=commonHelpers.js.map
