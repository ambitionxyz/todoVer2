import axios from "axios";

const createAxios = (token) => {
  const instance = axios.create({
    baseURL: `https://a4ad-118-69-77-229.ap.ngrok.io/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return instance;
};

export default createAxios;
