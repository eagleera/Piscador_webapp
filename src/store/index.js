import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import dashboard from "@/store/modules/dashboard.store";
import session from "@/store/modules/session.store";
import roles from "@/store/modules/roles.store";
import workers from "@/store/modules/workers.store";
import attendance from "@/store/modules/attendance.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboard,
    session,
    roles,
    workers,
    attendance
  },
  store: store,
  mutations: mutations,
  actions: actions
});
