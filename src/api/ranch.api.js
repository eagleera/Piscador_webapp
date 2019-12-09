import config from "@/../config";
import axios from "axios";

export default {
  post(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/ranch`, data)
      .then(onSuccess)
      .catch(onError);
  },
  postHarvest(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/harvest`, data)
      .then(onSuccess)
      .catch(onError);
  },
  postCrop(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/crop`, data)
      .then(onSuccess)
      .catch(onError);
  },
  postActivity(data, onSuccess, onError) {
    return axios
      .post(`${config.host}/api/activity`, data)
      .then(onSuccess)
      .catch(onError);
  },
  getCrops(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/crop`)
      .then(onSuccess)
      .catch(onError);
  },
  getActivities(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/activities`)
      .then(onSuccess)
      .catch(onError);
  },
  getActivity(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/activity`)
      .then(onSuccess)
      .catch(onError);
  },
  getHarvest(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/harvest`)
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
  },
  cropTypes(onSuccess, onError) {
    return axios
      .get(`${config.host}/api/crop_type`)
      .then(onSuccess)
      .catch(onError);
  }
};
