import config from "@/../config";
import axios from "axios";

export default {
  get(onSuccess, onError) {
    return axios
      .get(`${config.host}/workers`)
      .then(onSuccess)
      .catch(onError);
  },
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/worker`, data)
      .then(onSuccess)
      .catch(onError);
  }
};
