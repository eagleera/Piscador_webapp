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
        console.log(result.data);
        if (result.data.status == true) {
          console.log(result.data.response["session-token"]);
          localStorage.setItem(
            "accessToken",
            result.data.response["session-token"]
          );
          commit("LOG_USER", result.data.response["session-token"]);
          axios.defaults.headers.common = {
            Authorization: `bearer ${result.data.response["session-token"]}`
          };
          commit("REGISTER_USER", result.data.response);
          if (result.data.response.ranch == null) {
            router.push("/firsttime");
          } else {
            commit("ranch/INIT_RANCH", result.data.response.ranch, {
              root: true
            });
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
        commit("REGISTER_USER", result.data);
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
  me({ commit }) {
    if (localStorage.getItem("accessToken")) {
      axios.defaults.headers.common = {
        Authorization: `bearer ${localStorage.getItem("accessToken")}`
      };
    }
    sessionApi.getMe(
      result => {
        if (result.data.msg == "unauthenticated") {
          localStorage.removeItem("accessToken");
          router.push("/");
        }
        commit("REGISTER_USER", result.data.response);
        // commit("ranch/INIT_RANCH", result.data.user.ranch, { root: true });
      },
      error => {
        return error;
      }
    );
  },
  logout({ commit }) {
    localStorage.removeItem("accessToken");
    router.push("/");
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
