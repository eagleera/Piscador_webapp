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
  },
  EDIT_ROLE(state, data) {
    state.roles[data.index] = data.role;
  },
  DELETE_ROLE(state, data) {
    state.roles.splice(data.index, 1);
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
    return rolesApi.post(
      data,
      () => {
        commit("ADD_ROLE", data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  update({ commit }, data) {
    return rolesApi.update(
      data,
      () => {
        commit("EDIT_ROLE", data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  delete({ commit }, data) {
    return rolesApi.delete(
      data,
      () => {
        commit("DELETE_ROLE", data);
        return true;
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
