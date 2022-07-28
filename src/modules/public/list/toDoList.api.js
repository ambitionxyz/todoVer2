import createAxios from "../../../services/Index";
const TODO_API = {
  fetch: async (token) => {
    // https://8d80-118-69-77-229.ap.ngrok.io
    return await createAxios(token).get("/v1/todos?page=1&limit=100");
  },
  post: async (data) => {
    const { token, ...other } = data.params;
    console.log("post API list", token, other);
    return await createAxios(token).post("/v1/todo", other);
  },
  put: async (data) => {
    console.log(data);
    const { token, updateDate, createDate, ...other } = data.params;
    console.log("token", token);
    console.log("other", other);
    return await createAxios(token).put("/v1/todo", other);
  },
  delete: async (data) => {
    console.log("delete", data);
    const { token, userId, _id } = data;
    return await createAxios(token).delete(`/v1/todo?_id=${_id}`, {
      data: {
        userId,
        _id,
      },
    });
  },
};
export default TODO_API;
