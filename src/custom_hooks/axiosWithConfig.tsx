import axios from "axios";

import config from "../config/config";

const axiosWithConfig = axios.create({
  baseURL: config.baseUrl,
});

axiosWithConfig.interceptors.request.use(function (axiosConfig) {
  return axiosConfig;
});

export default axiosWithConfig;
