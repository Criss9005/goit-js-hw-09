!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON");function i(n,t){var o=Math.random()>.3;setTimeout((function(){o?e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)}console.log("running");var a=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=parseInt(a.value),t=0;t<=c.value;t++)i(t+1,0==t?n:n+=parseInt(l.value))}))}();
//# sourceMappingURL=03-promises.6306f393.js.map
