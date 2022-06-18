(function(){"use strict";var e={8572:function(e,t,n){var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MainHeader"),n("router-view"),n("router-link",{staticClass:"create-button",attrs:{to:"/postadd"}},[e._v("+")])],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("header",[n("div",{staticClass:"header-wrapper"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{staticClass:"imgLogo",attrs:{src:e.imgLogo}}),n("img",{staticClass:"textLogo",attrs:{src:e.textLogo}})]),n("router-link",{attrs:{to:"/category"}},[e._v("파핏 카테고리")]),n("router-link",{attrs:{to:"/ranking"}},[e._v("인기 이벤트 순위")])],1),n("nav",[e.isUserLogin?[n("span",{staticClass:"username"},[e._v(e._s(e.$store.state.userEmail)+" | ")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.logoutUser}},[e._v("로그아웃")]),e._v(" | "),n("router-link",{attrs:{to:"/mypage"}},[e._v("마이 페이지")]),e._v(" | ")]:[n("router-link",{attrs:{to:"/login"}},[e._v("로그인")]),e._v(" | "),n("router-link",{attrs:{to:"/signup"}},[e._v("회원가입")]),e._v(" | ")],n("router-link",{attrs:{to:"/csboard"}},[e._v("문의하기")])],2)])])},u=[],s=n.p+"img/img-logo.553bb4c5.jpg",c=n.p+"img/text-logo.f2684991.jpg",l=n(7311),f={data(){return{imgLogo:s,textLogo:c,isActive1:"false",isActive2:"false"}},computed:{isUserLogin(){return this.$store.getters.isLogin}},methods:{logoutUser(){this.$store.commit("clearUserEmail"),this.$store.commit("clearToken"),this.$store.commit("clearUserID"),(0,l.kT)("til_auth"),(0,l.kT)("til_user_id"),(0,l.kT)("til_user_email"),this.$router.push("/login")}}},d=f,m=n(1001),p=(0,m.Z)(d,a,u,!1,null,"6ada5692",null),h=p.exports,g={component:{MainHeader:h},components:{MainHeader:h}},v=g,b=(0,m.Z)(v,o,i,!1,null,null,null),k=b.exports,_=n(2809),y=n(615);r.Z.use(_.Z);const P=new _.Z({mode:"history",routes:[{path:"/",redirect:"/main"},{path:"/main",component:()=>Promise.all([n.e(866),n.e(650)]).then(n.bind(n,6650))},{path:"/login",component:()=>Promise.all([n.e(866),n.e(255)]).then(n.bind(n,6255))},{path:"/signup",component:()=>Promise.all([n.e(866),n.e(417)]).then(n.bind(n,7417))},{path:"/postadd",component:()=>Promise.all([n.e(866),n.e(313)]).then(n.bind(n,9313)),meta:{auth:!0}},{path:"/findinfo",component:()=>n.e(698).then(n.bind(n,7698)),meta:{auth:!0}},{path:"/changeinfo",component:()=>Promise.all([n.e(866),n.e(433)]).then(n.bind(n,2433)),meta:{auth:!0}},{path:"/csboard",component:()=>Promise.all([n.e(866),n.e(632)]).then(n.bind(n,5632)),meta:{auth:!0}},{path:"/ranking",component:()=>Promise.all([n.e(866),n.e(727)]).then(n.bind(n,4727))},{path:"/category",component:()=>Promise.all([n.e(866),n.e(529)]).then(n.bind(n,1529))},{path:"/mypage",component:()=>Promise.all([n.e(866),n.e(294)]).then(n.bind(n,8294)),meta:{auth:!0}},{path:"/myinquiry",component:()=>Promise.all([n.e(866),n.e(591)]).then(n.bind(n,591)),meta:{auth:!0}},{path:"/mylike",component:()=>Promise.all([n.e(866),n.e(963)]).then(n.bind(n,8963)),meta:{auth:!0}},{path:"/mycomment",component:()=>Promise.all([n.e(866),n.e(19)]).then(n.bind(n,7019)),meta:{auth:!0}},{path:"/mypost",component:()=>Promise.all([n.e(866),n.e(167)]).then(n.bind(n,2167)),meta:{auth:!0}},{path:"/postview/:id",component:()=>Promise.all([n.e(866),n.e(470)]).then(n.bind(n,5956))},{path:"/postview/edit/:id",component:()=>Promise.all([n.e(866),n.e(449)]).then(n.bind(n,449)),meta:{auth:!0}},{path:"*",component:()=>n.e(999).then(n.bind(n,4999))}]});P.beforeEach(((e,t,n)=>{e.meta.auth&&!y.Z.getters.isLogin?(alert("로그인이 필요한 페이지입니다."),n("/login")):n()}));var $=P,E=n(2228);r.Z.config.productionTip=!1,r.Z.use(E.ZP),new r.Z({render:e=>e(k),router:$,store:y.Z}).$mount("#app")},615:function(e,t,n){var r=n(8935),o=n(4665),i=n(7311);r.Z.use(o.ZP),t["Z"]=new o.ZP.Store({state:{userEmail:(0,i.gW)()||"",userID:(0,i.q$)()||"",token:(0,i.cd)()||""},getters:{isLogin(e){return""!==e.userEmail}},mutations:{setUserEmail(e,t){e.userEmail=t},setUserID(e,t){e.userID=t},clearUserEmail(e){e.userEmail=""},clearUserID(e){e.userID=""},setToken(e,t){e.token=t},clearToken(e){e.token=""}},actions:{}})},7311:function(e,t,n){function r(e){document.cookie=`til_auth=${e}`}function o(e){document.cookie=`til_user_email=${e}`}function i(e){document.cookie=`til_user_id=${e}`}function a(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function u(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function s(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function c(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`}n.d(t,{EU:function(){return o},FG:function(){return i},aZ:function(){return r},cd:function(){return s},gW:function(){return a},kT:function(){return c},q$:function(){return u}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{19:"aa5bf9be",167:"00c08777",255:"02e58a68",294:"fcc9602c",313:"3ba78a79",417:"5057cbac",433:"26c5c103",449:"343b38b1",470:"c7d94c59",529:"a84f6606",591:"4905c3d2",632:"d627e1bd",650:"34520a62",698:"4bbe4b33",727:"947fc5cf",866:"64ee3629",963:"18954836",999:"9a1c8e65"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{19:"137a9e1f",167:"b98501e3",255:"603213c6",294:"3a50ec98",313:"1c26fc3b",417:"ca6e35fe",433:"fe6eaaa0",449:"d28a2bb5",470:"1326c576",529:"eedda9a5",591:"02108973",632:"819352db",650:"cac1d401",698:"25df74e3",727:"59975dd7",963:"b42f21ee",999:"d83ad269"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="guiness-front:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={19:1,167:1,255:1,294:1,313:1,417:1,433:1,449:1,470:1,529:1,591:1,632:1,650:1,698:1,727:1,963:1,999:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8572)}));r=n.O(r)})();
//# sourceMappingURL=app.e5ff006c.js.map