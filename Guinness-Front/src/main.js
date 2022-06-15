import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import store from "@/store/index";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(VueLazyload);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
