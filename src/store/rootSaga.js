import { all } from "redux-saga/effects";

//import tat ca saga
import { authSaga } from "../modules/public/authPage/auth.saga";
import { userSaga } from "./global/user.saga";
import { toDoListSaga } from "../modules/public/list/toDoList.saga";
export default function* rootSaga() {
  yield all([authSaga(), userSaga(), toDoListSaga()]);
}
