import { LOGIN_TYPE, LOGOUT_TYPE, REGISTER_TYPE } from "./auth.types";

const LOGIN_ACTION = {
  onLoginRequest: (data) => ({
    type: LOGIN_TYPE.LOGIN_REQUEST,
    data,
  }),
  onLoginSucces: (data) => {
    console.log("da dang nhap", data);
    return {
      type: LOGIN_TYPE.LOGIN_SUCCESS,
      data,
    };
  },
  onLoginFailure: (data) => ({
    type: LOGOUT_TYPE.LOGOUT_FAILURE,
    data,
  }),
};

const LOGOUT_ACTION = {
  onLogoutRequest: (data) => ({
    type: LOGOUT_TYPE.LOGOUT_REQUEST,
    data,
  }),
  onLogoutSucces: (data) => ({
    type: LOGOUT_TYPE.LOGOUT_SUCCESS,
    data,
  }),
  onLogoutFailure: (data) => ({
    type: LOGOUT_TYPE.LOGOUT_FAILURE,
    data,
  }),
};

const REGISTER_ACTION = {
  onRegisterRequest: (data) => ({ type: REGISTER_TYPE.REGISTER_REQUEST, data }),
  onRegisterSuccess: (data) => ({ type: REGISTER_TYPE.REGISTER_SUCCESS, data }),
  onRegisterFailure: (data) => ({ type: REGISTER_TYPE.REGISTER_FAILURE, data }),
};

export { LOGIN_ACTION, LOGOUT_ACTION, REGISTER_ACTION };
