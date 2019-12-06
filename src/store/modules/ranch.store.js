import ranchApi from "@/api/ranch.api";

const state = {
  ranch: null,
  sizes: null
};
const getters = {
  getRanch: state => state.ranch,
  getSizes: state => state.sizes
};
const mutations = {
  INIT_RANCH(state, ranch) {
    state.ranch = ranch;
  },
  INIT_SIZES(state, sizes) {
    state.sizes = sizes;
  }
};
const actions = {
  post({ commit }, data) {
    return ranchApi.post(
      data,
      res => {
        commit("INIT_RANCH", res.data.ranch);
        commit("session/REGISTER_USER", res.data.user, { root: true });
        return res;
      },
      error => {
        return error;
      }
    );
  },
  addInvite({ commit }, codigo) {
    return ranchApi.addInvite(
      codigo,
      res => {
        commit("INIT_RANCH", res.data);
        return res.data;
      },
      error => {
        return error;
      }
    );
  },
  sizeTypes({ commit }) {
    return ranchApi.sizeTypes(
      res => {
        commit("INIT_SIZES", res.data);
        return res.data;
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
