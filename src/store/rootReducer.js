import { combineReducers } from "redux";

//bowm reducer
import authReducer from "../modules/public/authPage/auth.reducer";
import userReducer from "../store/global/user.reducer";
import toDoListReducer from "../modules/public/list/toDoList.reducer";
const rootReducer = () => {
  return combineReducers({
    auth: authReducer,
    user: userReducer,
    list: toDoListReducer,
  });
};

export default rootReducer;
