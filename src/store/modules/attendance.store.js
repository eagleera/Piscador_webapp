import attendanceApi from "@/api/attendance.api";

const state = {
  attendance: []
};
const getters = {
  getAttendance: state => state.attendance
};
const mutations = {
  SET_ATTENDANCE(state, attendance) {
    state.attendance = attendance;
  }
};
const actions = {
  get({ commit }, data) {
    attendanceApi.get(
      data,
      result => {
        commit("SET_ATTENDANCE", result.data);
      },
      error => {
        return error;
      }
    );
  },
  post({ commit }, data) {
    attendanceApi.post(
      data,
      result => {
        console.log(result.data);
        // commit("SET_ATTENDANCE", data);
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
