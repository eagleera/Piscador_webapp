import config from "@/../config";
import axios from "axios";

export default {
  get(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/roles`)
      .then(onSuccess)
      .catch(onError);
  },
  update(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/add_payment_role/${data.role.id}`, data)
      .then(onSuccess)
      .catch(onError);
  }
};
