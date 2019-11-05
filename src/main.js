import Vue from "vue";
import ShardsVue from "shards-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBell,
  faMarker,
  faTrash,
  faUsers,
  faLeaf,
  faChess,
  faBook,
  faBars,
  faHandPointLeft,
  faClipboardCheck,
  faMoneyBillWave,
  faPlus,
  faTimes,
  faTimesCircle,
  faCheckCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue2Filters from "vue2-filters";
import * as VueSpinnersCss from "vue-spinners-css";
import Toasted from "vue-toasted";

import "bootstrap/dist/css/bootstrap.css";
import "@/scss/shards-dashboards.scss";
import "@/assets/scss/date-range.scss";
import "tachyons";

library.add(
  faSearch,
  faBell,
  faMarker,
  faTrash,
  faUsers,
  faLeaf,
  faChess,
  faBook,
  faBars,
  faHandPointLeft,
  faClipboardCheck,
  faMoneyBillWave,
  faPlus,
  faTimes,
  faTimesCircle,
  faCheckCircle,
  faSignOutAlt
);
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vue2Filters);
Vue.use(VueSpinnersCss);
Vue.use(Toasted, {
  iconPack: "fontawesome"
});
ShardsVue.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
