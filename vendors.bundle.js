!function(t){function e(e){for(var a,l,i=e[0],c=e[1],u=e[2],d=0,m=[];d<i.length;d++)l=i[d],r[l]&&m.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(s&&s(e);m.length;)m.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var a={},r={2:0},n=[];function l(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=a,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(o,a,function(e){return t[e]}.bind(null,a));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var s=c;n.push([37,0,12]),o()}({37:function(t,e,o){o(38),t.exports=o(41)},38:function(t,e,o){(function(t){!async function(){window.$=window.jQuery=t,window.Bootstrap=o(39),t(document).ready(()=>{t("#fontZoom").on("click",t=>{"A+"==t.target.textContent?(document.querySelector("html").style.fontSize="17.3px",t.target.textContent="A-"):(document.querySelector("html").style.fontSize="16px",t.target.textContent="A+")}),t("#sidebarCollapse").on("click",()=>{t("#sidebar").toggleClass("active"),"svg-inline--fa fa-chevron-left fa-w-10 align-middle"==t("#toRigth").attr("class")?t("#toRigth").toggleClass("fas fa-chevron-right"):t("#toRigth").toggleClass("fas fa-chevron-left")}),t("#signOut").on("click",()=>{localStorage.setItem("user",""),localStorage.setItem("token","")}),t(window).on("beforeunload",function(){localStorage.setItem("user",""),localStorage.setItem("token","")})})}()}).call(this,o(5))},41:function(t,e,o){"use strict";o.r(e),function(t){var e=o(11);const a=new(o.n(e).a)(null,!0,"#!");a.on({"novo-chamado":async()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<bread-crumb></bread-crumb> <novo-chamado></novo-chamado>")}else window.location="https://pimquatro.github.io/"},"visualizar-chamado":()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<bread-crumb></bread-crumb> <visualizar-chamado></visualizar-chamado>")}else window.location="https://pimquatro.github.io/"},"visualizar-chamado/:protocolo":e=>{if(localStorage.getItem("token")){const o=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(o[0].nome),t("#app").html(`<bread-crumb></bread-crumb> <visualizar-chamado-id id="${e.protocolo}"></visualizar-chamado-id>`)}else window.location="https://pimquatro.github.io/"},"novo-cliente":()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<bread-crumb></bread-crumb> <novo-cliente></novo-cliente>")}else window.location="https://pimquatro.github.io/"},"novo-atendente":()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<bread-crumb></bread-crumb> <novo-atendente></novo-atendente>")}else window.location="https://pimquatro.github.io/"},dashboard:()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<dash-board></dash-board>")}else window.location="https://pimquatro.github.io/"}}),a.on(()=>{if(localStorage.getItem("token")){const e=JSON.parse(localStorage.getItem("user"));t("#userlogado").html(e[0].nome),t("#app").html("<dash-board></dash-board>")}else window.location="https://pimquatro.github.io/"}),a.notFound(e=>t("#app").html("<bread-crumb></bread-crumb><erro-404></erro-404>")),a.resolve()}.call(this,o(5))}});