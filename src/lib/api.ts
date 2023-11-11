import axios from "axios";

export const apiConfig = {
  baseURL: process.env.API_BASE_URL,
  withCredentials: false,
};

const api = axios.create(apiConfig);

export default api;
