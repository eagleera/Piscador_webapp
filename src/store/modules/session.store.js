import sessionApi from "@/api/session.api";

const state = {
  user: null
};
const getters = {
  getUserName: state => state.user
};
const mutations = {
  LOG_USER(state, userName) {
    state.userName = userName;
  }
};
const actions = {
  tryLogin({ commit }, data) {
    console.log(data);
    sessionApi.tryLogin(
      data,
      result => {
        commit("LOG_USER", result.data.user);
      },
      error => {
        return error;
      }
    );
  }
};

export default {
  namespaced: true,
  state: {
    ...state
  },
  getters: {
    ...getters
  },
  mutations,
  actions
};
