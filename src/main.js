import Vue from "vue";
import ShardsVue from "shards-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBell,
  faUsers,
  faLeaf,
  faChess,
  faBook,
  faBars,
  faHandPointLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/shards-dashboards.scss";
import "@/assets/scss/date-range.scss";
import "tachyons";

library.add(
  faSearch,
  faBell,
  faUsers,
  faLeaf,
  faChess,
  faBook,
  faBars,
  faHandPointLeft
);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.component("font-awesome-icon", FontAwesomeIcon);
ShardsVue.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
