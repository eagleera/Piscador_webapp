import config from "@/../config";
import axios from "axios";

export default {
  get(onSuccess, onError) {
    return axios
      .get(`${config.host}/roles`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(onSuccess)
      .catch(onError);
  },
  getTypes(onSuccess, onError) {
    return axios
      .get(`${config.host}/tipos`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(onSuccess)
      .catch(onError);
  },
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/rol`, data)
      .then(onSuccess)
      .catch(onError);
  },
  update(data, onSuccess, onError) {
    return axios
      .patch(`${config.host}/rol/${data.role.id}`, data.role)
      .then(onSuccess)
      .catch(onError);
  },
  delete(data, onSuccess, onError) {
    return axios
      .delete(`${config.host}/rol/${data.role.id}`)
      .then(onSuccess)
      .catch(onError);
  }
};
