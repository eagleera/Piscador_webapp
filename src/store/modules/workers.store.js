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
  get({ commit }, data) {
    return workersApi.get(
      result => {
        if (data) {
          result.data.forEach(result => {
            result.attendance = true;
          });
        }
        commit("INIT_WORKERS", result.data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  post({ commit }, data) {
    workersApi.post(
      data,
      () => {
        commit("ADD_WORKER", data);
      },
      error => {
        return error;
      }
    );
  },
  update({ commit }, data, index) {
    console.log(data, index);
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
