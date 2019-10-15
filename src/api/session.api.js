import config from "@/../config";
import axios from "axios";

export default {
  tryLogin(params = {}, onSuccess, onError) {
    console.log(params);
    return axios
      .post(`${config.host}/login`, params)
      .then(onSuccess)
      .catch(onError);
  },
  tryRegister(params = {}, onSuccess, onError) {
    console.log(params);
    return axios
      .post(`${config.host}/register`, params)
      .then(onSuccess)
      .catch(onError);
  }
};
