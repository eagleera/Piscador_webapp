import config from "@/../config";
import axios from "axios";

export default {
  tryLogin(params = {}, onSuccess, onError) {
    return axios
      .post(`${config.host}/session/login`, params)
      .then(onSuccess)
      .catch(onError);
  },
  tryRegister(params = {}, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/user`, params)
      .then(onSuccess)
      .catch(onError);
  },
  getMe(onSuccess, onError) {
    return axios
      .get(`${config.host}/session/me`)
      .then(onSuccess)
      .catch(onError);
  },
  logout(onSuccess, onError) {
    return axios
      .post(`${config.host}/logout`,{}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(onSuccess)
      .catch(onError);
  }
};
