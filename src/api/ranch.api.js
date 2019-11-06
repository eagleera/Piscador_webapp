import config from "@/../config";
import axios from "axios";

export default {
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/ranch`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      .then(onSuccess)
      .catch(onError);
  }
};
