import config from "@/../config";
import axios from "axios";

export default {
  get(onSuccess, onError) {
    return axios
      .get(`${config.host}/roles`)
      .then(onSuccess)
      .catch(onError);
  },
  getTypes(onSuccess, onError) {
    return axios
      .get(`${config.host}/tipos`)
      .then(onSuccess)
      .catch(onError);
  }
};
