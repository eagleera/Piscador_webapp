import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import dashboard from "@/store/modules/dashboard.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard: dashboard
  },
  store: store,
  mutations: mutations,
  actions: actions
});
