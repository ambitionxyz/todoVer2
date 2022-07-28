const USER_API = {
  getUserAPI: async (params) => {
    // const id = params;
    const response = await fetch(`https://a4ad-118-69-77-229.ap.ngrok.io/`);
    const dataUser = response.json();
    return dataUser;
  },
};
export default USER_API;
