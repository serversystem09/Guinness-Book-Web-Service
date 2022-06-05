(function(){"use strict";var t={7386:function(t,n,e){e.d(n,{a:function(){return o},p:function(){return i}});var r=e(866);function o(t){return r.eE.post("signup",t)}function i(t){return r.eE.post("login",t)}},866:function(t,n,e){e.d(n,{ks:function(){return l},qb:function(){return h},jn:function(){return m},eE:function(){return s},xu:function(){return f},Ix:function(){return p}});var r=e(6166),o=e.n(r),i=(e(1539),e(615));function u(t){return t.interceptors.request.use((function(t){return console.log(t),t.headers.Authorization=i.Z.state.token,t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),t}function a(){var t=o().create({baseURL:"/api/"});return u(t)}function c(t){var n=o().create({baseURL:"/api/".concat(t),haeders:{"Content-Type":"multipart/form-data"}});return u(n)}var s=a(),f=a(),d=c("addBoard");function l(t){return s.post(t)}function p(t){return d.post(t)}function h(t){return s.post("addBoard",t)}function m(){return s.get("category")}},7329:function(t,n,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("MainHeader"),e("router-view"),e("router-link",{staticClass:"create-button",attrs:{to:"/postadd"}},[t._v("+")])],1)},i=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-header"},[e("header",[e("div",{staticClass:"header-wrapper"},[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[e("img",{staticClass:"imgLogo",attrs:{src:t.imgLogo}}),e("img",{staticClass:"textLogo",attrs:{src:t.textLogo}})]),e("router-link",{attrs:{to:"/category"}},[t._v("기네스 카테고리")]),e("router-link",{attrs:{to:"/ranking"}},[t._v("총 기네스 순위")])],1),e("nav",[t.isUserLogin?[e("span",{staticClass:"username"},[t._v(t._s(t.$store.state.userId))]),e("a",{attrs:{href:"javascript:;"},on:{click:t.logoutUser}},[t._v("로그아웃")]),t._v(" | ")]:[e("router-link",{attrs:{to:"/login"}},[t._v("로그인")]),t._v(" | "),e("router-link",{attrs:{to:"/signup"}},[t._v("회원가입")]),t._v(" | ")],e("router-link",{attrs:{to:"/csboard"}},[t._v("문의하기")])],2)])])},a=[],c=e.p+"img/img-logo.553bb4c5.jpg",s=e.p+"img/text-logo.f2684991.jpg",f=e(7311),d={data:function(){return{imgLogo:c,textLogo:s,isActive1:"false",isActive2:"false"}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{logoutUser:function(){this.$store.commit("clearUserId"),this.$store.commit("clearToken"),(0,f.kT)("til_auth"),(0,f.kT)("til_user"),this.$router.push("/login")}}},l=d,p=e(3736),h=(0,p.Z)(l,u,a,!1,null,"52debed8",null),m=h.exports,g={component:{MainHeader:m},components:{MainHeader:m}},v=g,b=(0,p.Z)(v,o,i,!1,null,null,null),k=b.exports,y=(e(1539),e(8783),e(3948),e(2809));r.Z.use(y.Z);var _=new y.Z({mode:"history",routes:[{path:"/",redirect:"/main"},{path:"/main",component:function(){return e.e(34).then(e.bind(e,8034))}},{path:"/login",component:function(){return e.e(213).then(e.bind(e,213))}},{path:"/signup",component:function(){return e.e(535).then(e.bind(e,8535))}},{path:"/postadd",component:function(){return e.e(802).then(e.bind(e,5802))}},{path:"/findinfo",component:function(){return e.e(466).then(e.bind(e,9466))}},{path:"/changeinfo",component:function(){return e.e(129).then(e.bind(e,2129))}},{path:"/csboard",component:function(){return e.e(938).then(e.bind(e,1938))}},{path:"/ranking",component:function(){return e.e(319).then(e.bind(e,5319))}},{path:"/category",component:function(){return e.e(481).then(e.bind(e,7481))}},{path:"/mypage",component:function(){return e.e(148).then(e.bind(e,1148))}},{path:"/:id/postview",component:function(){return e.e(184).then(e.bind(e,3184))}},{path:"*",component:function(){return e.e(903).then(e.bind(e,4903))}}]}),w=e(615);r.Z.config.productionTip=!1,new r.Z({render:function(t){return t(k)},router:_,store:w.Z}).$mount("#app")},615:function(t,n,e){var r=e(6198),o=(e(8975),e(8935)),i=e(4665),u=e(7311),a=e(7386);o.Z.use(i.ZP),n["Z"]=new i.ZP.Store({state:{userId:(0,u.Zl)()||"",token:(0,u.cd)()||""},getters:{isLogin:function(t){return""!==t.userId}},mutations:{setUserId:function(t,n){t.userId=n},clearUserId:function(t){t.userId=""},setToken:function(t,n){t.token=n},clearToken:function(t){t.token=""}},actions:{LOGIN:function(t,n){return(0,r.Z)(regeneratorRuntime.mark((function e(){var r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,(0,a.p)(n);case 3:return o=e.sent,i=o.data,console.log(i.token),r("setToken",i.token),r("setUsername",i.user.userId),(0,u.aZ)(i.token),(0,u.QR)(i.user.userId),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))()}}})},7311:function(t,n,e){e.d(n,{QR:function(){return o},Zl:function(){return u},aZ:function(){return r},cd:function(){return i},kT:function(){return a}});e(4916),e(5306);function r(t){document.cookie="til_auth=".concat(t)}function o(t){document.cookie="til_user=".concat(t)}function i(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function u(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}function a(t){document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"-legacy."+{34:"7b885db7",129:"2d77ad30",148:"b432944b",184:"1975e99c",213:"a3947955",319:"0a112926",466:"df189010",481:"12ce1a39",535:"077e6540",802:"20a3f6ae",903:"3f15b056",938:"739cade2"}[t]+".js"}}(),function(){e.miniCssF=function(t){return"css/"+t+"."+{34:"b30aea72",129:"fe6eaaa0",148:"f331c738",184:"9c4f0eb0",213:"0a3c24af",319:"1983e312",466:"25df74e3",481:"afc4e064",535:"af75c296",802:"0c933efa",903:"d83ad269",938:"a550d622"}[t]+".css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="guiness-front:";e.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",n+i),a.src=r),t[r]=[o];var l=function(n,e){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){e.p="/"}(),function(){var t=function(t,n,e,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)e();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var e=document.getElementsByTagName("link"),r=0;r<e.length;r++){var o=e[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=e.miniCssF(r),a=e.p+u;if(n(u,a))return o();t(r,a,o,i)}))},o={143:0};e.f.miniCss=function(t,n){var e={34:1,129:1,148:1,184:1,213:1,319:1,466:1,481:1,535:1,802:1,903:1,938:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=r(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,r){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(e,r){o=t[n]=[e,r]}));r.push(o[2]=i);var u=e.p+e.u(n),a=new Error,c=function(r){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};e.l(u,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var f=c(e)}for(n&&n(r);s<u.length;s++)i=u[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},r=self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7329)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.bdb74df8.js.map