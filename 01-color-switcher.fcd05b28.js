console.log("running");const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");t.addEventListener("click",(()=>{const n=setInterval((function(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);t.disabled=!0,e.disabled=!1,e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,clearInterval(n)}))}));
//# sourceMappingURL=01-color-switcher.fcd05b28.js.map
