import config from "@/../config";
import axios from "axios";

export default {
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/ranch`, data)
      .then(onSuccess)
      .catch(onError);
  },
  addInvite(codigo, onSuccess, onError) {
    return axios
      .post(`${config.host}/ranch/add-invite`, codigo)
      .then(onSuccess)
      .catch(onError);
  },
  sizeTypes(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/size_type`)
      .then(onSuccess)
      .catch(onError);
  }
};
