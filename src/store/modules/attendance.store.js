import attendanceApi from "@/api/attendance.api";

const state = {
  attendance: [],
  payday: [],
  cambio: [],
  total: 0,
  daytypes: null
};
const getters = {
  getAttendance: state => state.attendance,
  getPayday: state => state.payday,
  getCambio: state => state.cambio,
  getTotal: state => state.total,
  getDayTypes: state => state.daytypes
};
const mutations = {
  SET_ATTENDANCE(state, attendance) {
    state.attendance = attendance;
  },
  SET_PAYDAY(state, attendance) {
    state.payday = attendance;
  },
  SET_CAMBIO(state, cambio) {
    state.cambio = cambio;
  },
  SET_TOTAL(state, total) {
    state.total = total;
  },
  INIT_DAYTYPES(state, daytype) {
    state.daytypes = daytype;
  }
};
const actions = {
  get({ commit }, data) {
    return attendanceApi.get(
      data,
      result => {
        commit("SET_ATTENDANCE", result.data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  getPayday({ commit }, data) {
    return attendanceApi.getPayday(
      data,
      result => {
        commit("SET_PAYDAY", result.data.attendance);
        commit("SET_CAMBIO", result.data.cambio);
        commit("SET_TOTAL", result.data.total);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  getDayTypes({ commit }) {
    return attendanceApi.getDayTypes(
      result => {
        commit("INIT_DAYTYPES", result.data);
        return true;
      },
      error => {
        return error;
      }
    );
  },
  post({ commit }, data) {
    return attendanceApi.post(
      data,
      () => {
        commit("SET_ATTENDANCE", data);
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
