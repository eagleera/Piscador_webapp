import sessionApi from "@/api/session.api";

const state = {
  user: null
};
const getters = {
  getUser: state => state.user
};
const mutations = {
  LOG_USER(state, user) {
    state.user = user;
  },
  REGISTER_USER(state, user) {
    state.user = user;
  }
};
const actions = {
  tryLogin({ commit }, data) {
    sessionApi.tryLogin(
      data,
      result => {
        console.log(result.data.token);
        console.log(data.email);
        if (result.data.token) {
          localStorage.setItem("user-token", result.data.token);
          commit("LOG_USER", result.data.user);
        }
      },
      error => {
        console.log(error);
        return error;
      }
    );
  },
  tryRegister({ commit }, data) {
    sessionApi.tryRegister(
      data,
      result => {
        console.log(result.data.user);
        commit("REGISTER_USER", result.data.user);
      },
      error => {
        console.log(error);
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
