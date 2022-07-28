import axios from "axios";
const BASE_URL = "https://a4ad-118-69-77-229.ap.ngrok.io/v1/auth/";
const AUTH_API = {
  signIn: async (dataInput) => {
    const res = await axios({
      method: "post",
      url: `${BASE_URL}login`,
      headers: {},
      data: {
        email: dataInput.data.email,
        password: dataInput.data.password,
      },
    });
    return res.data;
  },
  signUp: async (dataInput) => {
    const res = await axios({
      method: "post",
      url: `${BASE_URL}register`,
      headers: {},
      data: {
        email: dataInput.data.email,
        password: dataInput.data.password,
      },
    });
    return res.data;
  },
};
export default AUTH_API;
