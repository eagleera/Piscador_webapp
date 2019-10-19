import workersApi from "@/api/workers.api";

const state = {
  workers: []
};
const getters = {
  getWorkers: state => state.workers
};
const mutations = {
  INIT_WORKERS(state, workers) {
    state.workers = workers;
  },
  ADD_WORKER(state, worker) {
    state.workers.unshift(worker);
  }
};
const actions = {
  get({ commit }) {
    workersApi.get(
      result => {
        console.log(result.data);
        commit("INIT_WORKERS", result.data);
      },
      error => {
        return error;
      }
    );
  },
  post({ commit }, data) {
    workersApi.post(
      data,
      result => {
        console.log(result.data);
        commit("ADD_WORKER", data);
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
