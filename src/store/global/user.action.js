import { USER_TYPE } from "./user.type";

const USER_ACTION = {
  getUserRequest: (user) => {
    console.log(user);
    return {
      type: USER_TYPE.GET_USER_REQUEST,
      user,
    };
  },
  getUserSuccess: (user) => {
    console.log(user);
    return { type: USER_TYPE.GET_USER_SUCCESS, user };
  },
  getUserFailure: () => ({ type: USER_TYPE.GET_USER_FALURE }),
};

export { USER_ACTION };
