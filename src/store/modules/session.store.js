import sessionApi from "@/api/session.api";
import router from "@/router";
import axios from "axios";

const state = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || "",
  loggedIn: false
};
const getters = {
  getUser: state => state.user,
  getLoggedIn: state => state.loggedIn
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
    return sessionApi.tryLogin(
      data,
      result => {
        if (result.data) {
          localStorage.setItem("accessToken", result.data.token);
          commit("LOG_USER", result.data.token);
          axios.defaults.headers.common = {
            Authorization: `bearer ${result.data.token}`
          };
          commit("REGISTER_USER", result.data);
          if (result.data.ranch == false) {
            router.push("/firsttime");
          } else {
            router.push("/assistance");
          }
          return true;
        }
      },
      error => {
        return error;
      }
    );
  },
  tryRegister({ commit }, data) {
    sessionApi.tryRegister(
      data,
      result => {
        console.log(result);
        commit("REGISTER_USER", result.data.user);
        router.push("/");
      },
      error => {
        return error;
      }
    );
  },
  fetchAccessToken({ commit }) {
    commit("UPDATE_ACCES_TOKEN", localStorage.getItem("accessToken"));
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    commit("LOGOUT");
    router.push("/");
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
