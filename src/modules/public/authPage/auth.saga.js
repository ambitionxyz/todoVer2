/* eslint-disable no-unused-vars */
import { takeEvery, put, call } from "redux-saga/effects";

import { LOGIN_TYPE, REGISTER_TYPE, LOGOUT_TYPE } from "./auth.types";
import { USER_ACTION } from "../../../store/global/user.action";
import AUTH_API from "./auth.api";

function* logInFunc(action) {
  // console.log("=================>data in saga", action);
  try {
    const data = action;
    // console.log(data);
    const user = yield call(AUTH_API.signIn, data);
    console.log("=============>user ", user);
    if (user) {
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("refresh_token", user.data.refresh_token);
      //push user
      yield put(USER_ACTION.getUserSuccess(user));
    }
  } catch (err) {
    console.log(err.message);
  }
}
function* logOutFunc() {
  console.log("da lou out");
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    yield put(USER_ACTION.getUserFailure());
    yield console.log("logout");
  } catch (err) {
    console.log(err.message);
  }
}
function* registerFunc(action) {
  try {
    const data = action;
    const user = yield call(AUTH_API.signUp, data);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN_TYPE.LOGIN_REQUEST, logInFunc);
  yield takeEvery(LOGOUT_TYPE.LOGOUT_REQUEST, logOutFunc);
  yield takeEvery(REGISTER_TYPE.REGISTER_REQUEST, registerFunc);
}
