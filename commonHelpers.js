import{a as g}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const p="https://your-energy.b.goit.study/api",l=12,f=10,a=g.create({baseURL:p,params:{}}),m=async(e=1)=>(await a.get("/filters",{params:{filter:"Body parts",page:e,limit:l}})).data,y=async(e,t=1)=>(await a.get("/filters",{params:{filter:e,page:t,limit:l}})).data,L=async({bodypart:e,muscles:t,equipment:o,search:n},r=1)=>{const s=n&&!e&&!t&&!o?"":n;return(await a.get("/exercises",{params:{bodypart:e||"",muscles:t||"",equipment:o||"",keyword:s||"",page:r,limit:f}})).data};function d(e){return e.map(({imgURL:t,filter:o,name:n})=>`<li class="card">
             <button type="button" class="cat-img"
			   style=" background: linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%),
               url('${t}') ;
               background-size: cover;
               background-position:center;
               background-repeat: no-repeat;
              "
              </button>
<div class="card-description">
 <p class="name-category">${n}</p>
    <p class="name-exercises">${o}</p>
</div>
  </li>`).join("")}let u=1;const i=document.querySelector(".cards"),h=document.querySelector(".filter-list");h.addEventListener("click",b);i.addEventListener("click",E);m().then(e=>{const t=e.results;console.log(t),i.innerHTML=d(t)}).catch(e=>{console.error(e)});function b(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.dataset.name;console.log(t),y(t,u).then(o=>{const n=o.results;console.log(n),i.innerHTML=d(n)}).catch(o=>{console.error(o)})}function E(e){console.log(e.target);const t=e.target;L(t,u).then(o=>{const n=o.results;console.log(n)}).catch(o=>{console.error(o)})}
//# sourceMappingURL=commonHelpers.js.map
