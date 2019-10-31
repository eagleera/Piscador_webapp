import rolesApi from "@/api/roles.api";

const state = {
  roles: [],
  types: []
};
const getters = {
  getRoles: state => state.roles,
  getTypes: state => state.types
};
const mutations = {
  INIT_ROLES(state, roles) {
    state.roles = roles;
  },
  ADD_ROLE(state, role) {
    state.roles.unshift(role);
  },
  INIT_TYPES(state, types) {
    state.types = types;
  }
};
const actions = {
  get({ commit }) {
    return rolesApi.get(
      result => {
        commit("INIT_ROLES", result.data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  getTypes({ commit }) {
    rolesApi.getTypes(
      result => {
        commit("INIT_TYPES", result.data);
      },
      error => {
        return error;
      }
    );
  },
  post({ commit }, data) {
    rolesApi.post(
      data,
      result => {
        commit("ADD_ROLE", data);
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
