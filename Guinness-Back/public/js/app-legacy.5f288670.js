(function(){"use strict";var e={5133:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MainHeader"),n("router-view"),n("router-link",{staticClass:"create-button",attrs:{to:"/postadd"}},[e._v("+")])],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header"},[n("header",[n("div",{staticClass:"header-wrapper"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{staticClass:"imgLogo",attrs:{src:e.imgLogo}}),n("img",{staticClass:"textLogo",attrs:{src:e.textLogo}})]),n("router-link",{attrs:{to:"/category"}},[e._v("파핏 카테고리")]),n("router-link",{attrs:{to:"/ranking"}},[e._v("인기 이벤트 순위")])],1),n("nav",[e.isUserLogin?[n("span",{staticClass:"username"},[e._v(e._s(e.$store.state.userEmail)+" | ")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.logoutUser}},[e._v("로그아웃")]),e._v(" | "),n("router-link",{attrs:{to:"/mypage"}},[e._v("마이 페이지")]),e._v(" | ")]:[n("router-link",{attrs:{to:"/login"}},[e._v("로그인")]),e._v(" | "),n("router-link",{attrs:{to:"/signup"}},[e._v("회원가입")]),e._v(" | ")],n("router-link",{attrs:{to:"/csboard"}},[e._v("문의하기")])],2)])])},u=[],c=n.p+"img/img-logo.553bb4c5.jpg",s=n.p+"img/text-logo.f2684991.jpg",l=n(7311),f={data:function(){return{imgLogo:c,textLogo:s,isActive1:"false",isActive2:"false"}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{logoutUser:function(){this.$store.commit("clearUserEmail"),this.$store.commit("clearToken"),this.$store.commit("clearUserID"),(0,l.kT)("til_auth"),(0,l.kT)("til_user_id"),(0,l.kT)("til_user_email"),this.$router.push("/login")}}},d=f,m=n(3736),p=(0,m.Z)(d,a,u,!1,null,"6ada5692",null),h=p.exports,g={component:{MainHeader:h},components:{MainHeader:h}},v=g,b=(0,m.Z)(v,o,i,!1,null,null,null),k=b.exports,_=(n(1539),n(8783),n(3948),n(2809)),y=n(615);r.Z.use(_.Z);var E=new _.Z({routes:[{path:"/",redirect:"/main"},{path:"/main",component:function(){return Promise.all([n.e(750),n.e(423)]).then(n.bind(n,6423))}},{path:"/login",component:function(){return Promise.all([n.e(750),n.e(509)]).then(n.bind(n,5509))}},{path:"/signup",component:function(){return Promise.all([n.e(750),n.e(87)]).then(n.bind(n,7087))}},{path:"/postadd",component:function(){return Promise.all([n.e(750),n.e(754)]).then(n.bind(n,4754))},meta:{auth:!0}},{path:"/findinfo",component:function(){return n.e(466).then(n.bind(n,9466))},meta:{auth:!0}},{path:"/changeinfo",component:function(){return Promise.all([n.e(750),n.e(173)]).then(n.bind(n,1765))},meta:{auth:!0}},{path:"/csboard",component:function(){return Promise.all([n.e(750),n.e(649)]).then(n.bind(n,6649))},meta:{auth:!0}},{path:"/ranking",component:function(){return Promise.all([n.e(750),n.e(859)]).then(n.bind(n,859))}},{path:"/category",component:function(){return Promise.all([n.e(750),n.e(989)]).then(n.bind(n,3989))}},{path:"/mypage",component:function(){return Promise.all([n.e(750),n.e(306)]).then(n.bind(n,2306))},meta:{auth:!0}},{path:"/myinquiry",component:function(){return Promise.all([n.e(750),n.e(88)]).then(n.bind(n,5088))},meta:{auth:!0}},{path:"/mycomment",component:function(){return Promise.all([n.e(750),n.e(650)]).then(n.bind(n,5650))},meta:{auth:!0}},{path:"/mypost",component:function(){return Promise.all([n.e(750),n.e(47)]).then(n.bind(n,4047))},meta:{auth:!0}},{path:"/postview/:id",component:function(){return Promise.all([n.e(750),n.e(490)]).then(n.bind(n,3490))}},{path:"/edit/:id",component:function(){return Promise.all([n.e(750),n.e(329)]).then(n.bind(n,5329))},meta:{auth:!0}},{path:"*",component:function(){return n.e(903).then(n.bind(n,4903))}}]});E.beforeEach((function(e,t,n){e.meta.auth&&!y.Z.getters.isLogin?(alert("로그인이 필요한 페이지입니다."),n("/login")):n()}));var P=E;r.Z.config.productionTip=!1,new r.Z({render:function(e){return e(k)},router:P,store:y.Z}).$mount("#app")},615:function(e,t,n){var r=n(8935),o=n(4665),i=n(7311);r.Z.use(o.ZP),t["Z"]=new o.ZP.Store({state:{userEmail:(0,i.gW)()||"",userID:(0,i.q$)()||"",token:(0,i.cd)()||""},getters:{isLogin:function(e){return""!==e.userEmail}},mutations:{setUserEmail:function(e,t){e.userEmail=t},setUserID:function(e,t){e.userID=t},clearUserEmail:function(e){e.userEmail=""},clearUserID:function(e){e.userID=""},setToken:function(e,t){e.token=t},clearToken:function(e){e.token=""}},actions:{}})},7311:function(e,t,n){n.d(t,{EU:function(){return o},FG:function(){return i},aZ:function(){return r},cd:function(){return c},gW:function(){return a},kT:function(){return s},q$:function(){return u}});n(4916),n(5306);function r(e){document.cookie="til_auth=".concat(e)}function o(e){document.cookie="til_user_email=".concat(e)}function i(e){document.cookie="til_user_id=".concat(e)}function a(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user_email\s*=\s*([^;]*).*$)|^.*$/,"$1")}function u(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user_id\s*=\s*([^;]*).*$)|^.*$/,"$1")}function c(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function s(e){document.cookie="".concat(e,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{47:"e07a17d7",87:"fd4622db",88:"cb5be31b",173:"c525b4ee",306:"15b9aebd",329:"52a1c0ec",423:"9049e9f8",466:"df189010",490:"617f8684",509:"655acb2b",649:"e8106496",650:"a5544aaf",750:"c42fea99",754:"ced1c84e",859:"0e16c7cc",903:"3f15b056",989:"0108d867"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{47:"b98501e3",87:"6a2027b7",88:"02108973",173:"fe6eaaa0",306:"3a50ec98",329:"d83ad269",423:"12a0cc6a",466:"25df74e3",490:"d9d1b7da",509:"603213c6",649:"9bad1279",650:"137a9e1f",754:"3a7d817b",859:"59975dd7",903:"d83ad269",989:"9c0dcb61"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="guiness-front:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={47:1,87:1,88:1,173:1,306:1,329:1,423:1,466:1,490:1,509:1,649:1,650:1,754:1,859:1,903:1,989:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkguiness_front"]=self["webpackChunkguiness_front"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5133)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.5f288670.js.map