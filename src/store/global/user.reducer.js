import { USER_TYPE } from "./user.type";

const initialState = {
  user: null,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPE.GET_USER_SUCCESS:
      return { ...state, user: action.user, isLogin: true };
    case USER_TYPE.GET_USER_FALURE:
      return { ...state, user: null, isLogin: false };
    default:
      return state;
  }
};

export default userReducer;
