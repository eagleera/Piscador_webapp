import Vue from "vue";
import Vuex from "vuex";

import actions from "@/store/actions";
import store from "@/store/store";
import mutations from "@/store/mutations";

import attendance from "@/store/modules/attendance.store";
import ranch from "@/store/modules/ranch.store";
import roles from "@/store/modules/roles.store";
import session from "@/store/modules/session.store";
import workers from "@/store/modules/workers.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    roles,
    workers,
    attendance,
    ranch
  },
  store: store,
  mutations: mutations,
  actions: actions
});
