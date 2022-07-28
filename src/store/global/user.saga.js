import { takeEvery, put } from "redux-saga/effects";
import { USER_TYPE } from "./user.type";
import USER_API from "./user.api";
import { USER_ACTION } from "./user.action";
function* onGetUser(params) {
  const user = params;
  try {
    const userData = yield USER_API.getUserAPI(user);
    if (userData) {
      yield put(USER_ACTION.getUserSuccess(user));
      yield USER_API.postUserAPI(user);
    }
  } catch (e) {
    console.log(e);
  }
}
export function* userSaga() {
  yield takeEvery(USER_TYPE.GET_USER_REQUEST, onGetUser);
}
