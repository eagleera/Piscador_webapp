import sessionApi from "@/api/session.api";

const state = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: false
};
const getters = {
  getUser: state => state.user
};
const mutations = {
  LOG_USER(state, token) {
    state.loggedIn = true;
    state.accessToken = token;
  },
  REGISTER_USER(state, user) {
    state.user = user;
  },
  UPDATE_ACCES_TOKEN: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  LOGOUT: state => {
    state.accessToken = null;
  }
};
const actions = {
  tryLogin({ commit }, data) {
    sessionApi.tryLogin(
      data,
      result => {
        if (result.data.token) {
          localStorage.setItem("accessToken", result.data.token);
          commit("LOG_USER", result.data.token);
        }
      },
      error => {
        console.log(error);
      }
    );
  },
  tryRegister({ commit }, data) {
    sessionApi.tryRegister(
      data,
      result => {
        commit("REGISTER_USER", result.data.user);
      },
      error => {
        console.log(error);
      }
    );
  },
  getUserSession({ commit }){
    
  },
  fetchAccessToken({ commit }) {
    commit("UPDATE_ACCES_TOKEN", localStorage.getItem("accessToken"));
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    commit("LOGOUT");
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
