import config from "@/../config";
import axios from "axios";

export default {
  get(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/workers`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(onSuccess)
      .catch(onError);
  },
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/worker`, data)
      .then(onSuccess)
      .catch(onError);
  },
  update(data, onSuccess, onError) {
    return axios
      .patch(`${config.host}/worker/${data.worker.id}`, data.worker)
      .then(onSuccess)
      .catch(onError);
  },
  delete(data, onSuccess, onError) {
    return axios
      .delete(`${config.host}/worker/${data.worker.id}`)
      .then(onSuccess)
      .catch(onError);
  }
};
