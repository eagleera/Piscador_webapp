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
    state.roles.push(role);
  },
  INIT_TYPES(state, types) {
    state.types = types;
  }
};
const actions = {
  get({ commit }) {
    rolesApi.get(
      result => {
        console.log(result.data);
        commit("INIT_ROLES", result.data);
      },
      error => {
        return error;
      }
    );
  },
  getTypes({ commit }) {
    rolesApi.getTypes(
      result => {
        console.log(result.data);
        commit("INIT_TYPES", result.data);
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
