import Vue from "vue";
import ShardsVue from "shards-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/shards-dashboards.scss";
import "@/assets/scss/date-range.scss";

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
ShardsVue.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
