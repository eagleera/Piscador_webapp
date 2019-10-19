import config from "@/../config";
import axios from "axios";

export default {
  get(data, onSuccess, onError) {
    console.log(data);
    return axios
      .get(`${config.host}/attendance/`, { params: { date: data } })
      .then(onSuccess)
      .catch(onError);
  },
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/attendance`, data)
      .then(onSuccess)
      .catch(onError);
  }
};
