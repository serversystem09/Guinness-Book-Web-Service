(function(){"use strict";var t={560:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("MainHeader"),e("router-view"),e("router-link",{staticClass:"create-button",attrs:{to:"/postadd"}},[t._v("+")])],1)},i=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-header"},[e("header",[e("div",{staticClass:"header-wrapper"},[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[e("img",{staticClass:"imgLogo",attrs:{src:t.imgLogo}}),e("img",{staticClass:"textLogo",attrs:{src:t.textLogo}})]),e("router-link",{attrs:{to:"/category"}},[t._v("기네스 카테고리")]),e("router-link",{attrs:{to:"/ranking"}},[t._v("총 기네스 순위")])],1),e("nav",[[e("router-link",{attrs:{to:"/login"}},[t._v("로그인")]),t._v(" | "),e("router-link",{attrs:{to:"/signup"}},[t._v("회원가입")]),t._v(" | "),e("router-link",{attrs:{to:"/csboard"}},[t._v("문의하기")])]],2)])])},u=[],c=e.p+"img/img-logo.553bb4c5.jpg",f=e.p+"img/text-logo.f2684991.jpg",s={data:function(){return{imgLogo:c,textLogo:f,isActive1:"false",isActive2:"false"}}},l=s,d=e(3736),p=(0,d.Z)(l,a,u,!1,null,"7220ef71",null),h=p.exports,g={component:{MainHeader:h},components:{MainHeader:h}},m=g,v=(0,d.Z)(m,o,i,!1,null,null,null),b=v.exports,y=(e(1539),e(8783),e(3948),e(2809));r.Z.use(y.Z);var k=new y.Z({mode:"history",routes:[{path:"/",redirect:"/main"},{path:"/main",component:function(){return e.e(421).then(e.bind(e,2421))}},{path:"/login",component:function(){return e.e(988).then(e.bind(e,9988))}},{path:"/signup",component:function(){return e.e(886).then(e.bind(e,2886))}},{path:"/postadd",component:function(){return e.e(363).then(e.bind(e,5363))}},{path:"/findinfo",component:function(){return e.e(466).then(e.bind(e,9466))}},{path:"/changeinfo",component:function(){return e.e(129).then(e.bind(e,2129))}},{path:"/csboard",component:function(){return e.e(773).then(e.bind(e,6773))}},{path:"/ranking",component:function(){return e.e(319).then(e.bind(e,5319))}},{path:"/category",component:function(){return e.e(265).then(e.bind(e,1265))}},{path:"/mypage",component:function(){return e.e(148).then(e.bind(e,1148))}},{path:"/postview",component:function(){return e.e(126).then(e.bind(e,9126))}},{path:"*",component:function(){return e.e(903).then(e.bind(e,4903))}}]});r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(b)},router:k}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],i=t[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"-legacy."+{126:"33be4c4c",129:"2d77ad30",148:"b432944b",265:"56663318",319:"0a112926",363:"feea333a",421:"fd5dba2f",466:"df189010",773:"78ca6846",886:"4a970bb9",903:"3f15b056",988:"eca7a0fc"}[t]+".js"}}(),function(){e.miniCssF=function(t){return"css/"+t+"."+{126:"65380849",129:"fe6eaaa0",148:"f331c738",265:"c80da34d",319:"1983e312",363:"0c933efa",421:"b30aea72",466:"25df74e3",773:"19333db7",886:"f2c2ee88",903:"d83ad269",988:"376286b7"}[t]+".css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="guiness-front:";e.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,e.nc&&u.setAttribute("nonce",e.nc),u.setAttribute("data-webpack",n+i),u.src=r),t[r]=[o];var d=function(n,e){u.onerror=u.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t=function(t,n,e,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)e();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var e=document.getElementsByTagName("link"),r=0;r<e.length;r++){var o=e[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=e.miniCssF(r),u=e.p+a;if(n(a,u))return o();t(r,u,o,i)}))},o={143:0};e.f.miniCss=function(t,n){var e={126:1,129:1,148:1,265:1,319:1,363:1,421:1,466:1,773:1,886:1,903:1,988:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=r(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var a=e.p+e.u(n),u=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};e.l(a,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],c=r[2],f=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var s=c(e)}for(n&&n(r);f<a.length;f++)i=a[f],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(s)},r=self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(560)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.0f90e160.js.map