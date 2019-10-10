import config from "@/../config";
import axios from "axios";

const namespace = "pokemon";

export default {
  getUserSession(params = {}, onSuccess, onError) {
    return axios({
      method: "GET",
      url: `${config.host}/${namespace}/${params.email}`,
      headers: {}
    })
      .then(onSuccess)
      .catch(onError);
  }
};
