import ranchApi from "@/api/ranch.api";

const state = {
  ranch: null,
  sizes: null,
  croptypes: null,
  crops: null,
  harvest: null,
  activities: null,
  activity: null
};
const getters = {
  getRanch: state => state.ranch,
  getSizes: state => state.sizes,
  getCropTypes: state => state.croptypes,
  getCrops: state => state.crops,
  getHarvest: state => state.harvest,
  getActivities: state => state.activities,
  getActivity: state => state.activity
};
const mutations = {
  INIT_RANCH(state, ranch) {
    state.ranch = ranch;
  },
  INIT_SIZES(state, sizes) {
    state.sizes = sizes;
  },
  INIT_CROPTYPES(state, types) {
    state.croptypes = types;
  },
  INIT_CROPS(state, crops) {
    state.crops = crops;
  },
  INIT_HARVEST(state, harvest) {
    state.harvest = harvest;
  },
  INIT_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
  INIT_ACTIVITY(state, activity) {
    state.activity = activity;
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
  addHarvest({ commit }, data) {
    return ranchApi.postHarvest(
      data,
      res => {
        console.log(res);
        return res;
      },
      error => {
        return error;
      }
    );
  },
  addActivity({ commit }, data) {
    return ranchApi.postActivity(
      data,
      res => {
        return res;
      },
      error => {
        return error;
      }
    );
  },
  postCrop({ commit }, data) {
    return ranchApi.postCrop(
      data,
      res => {
        console.log(res);
        return res;
      },
      error => {
        return error;
      }
    );
  },
  getCrops({ commit }) {
    return ranchApi.getCrops(
      res => {
        commit("INIT_CROPS", res.data);
        console.log(res);
        return res;
      },
      error => {
        return error;
      }
    );
  },
  getHarvest({ commit }) {
    return ranchApi.getHarvest(
      res => {
        commit("INIT_HARVEST", res.data);
        console.log(res);
        return res;
      },
      error => {
        return error;
      }
    );
  },
  getActivities({ commit }) {
    return ranchApi.getActivities(
      res => {
        commit("INIT_ACTIVITIES", res.data);
        return res;
      },
      error => {
        return error;
      }
    );
  },
  getActivity({ commit }) {
    return ranchApi.getActivity(
      res => {
        commit("INIT_ACTIVITY", res.data);
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
  cropTypes({ commit }) {
    return ranchApi.cropTypes(
      res => {
        commit("INIT_CROPTYPES", res.data);
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
