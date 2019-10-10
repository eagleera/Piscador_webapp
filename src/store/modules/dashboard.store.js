import dashboardApi from "@/api/dashboard.api";

const state = {
  userName: "Prueba Simona"
};
const getters = {
  getUserName: state => state.userName
};
const mutations = {
  SET_USER_NAME(state, userName) {
    state.userName = userName;
  }
};
const actions = {
  getUserSession({ commit }, data) {
    dashboardApi.getUserSession(
      {
        email: data.email
      },
      result => {
        commit("SET_USER_NAME", result.data.name);
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
