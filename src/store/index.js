import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import dashboard from "@/store/modules/dashboard.store";
import session from "@/store/modules/session.store";
import roles from "@/store/modules/roles.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    session,
    roles
  },
  store: store,
  mutations: mutations,
  actions: actions
});
