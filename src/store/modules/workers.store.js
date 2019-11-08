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
  },
  EDIT_WORKER(state, data) {
    state.workers[data.index] = data.worker;
  },
  DELETE_WORKER(state, data) {
    state.workers.splice(data.index, 1);
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
  update({ commit }, data) {
    console.log(data);
    return workersApi.update(
      data,
      () => {
        commit("EDIT_WORKER", data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  delete({ commit }, data) {
    return workersApi.delete(
      data,
      () => {
        commit("DELETE_WORKER", data);
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
