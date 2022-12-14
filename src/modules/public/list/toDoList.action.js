import * as Types from "./toDoList.type";

export const fetchRequest = (token) => ({ type: Types.FETCH_REQUEST, token });
export const fetchSuccess = (payload) => ({
  type: Types.FETCH_SUCCESS,
  payload,
});
export const fetchFailure = (error) => ({ type: Types.FETCH_FAILURE, error });

export const patchRequest = (params) => {
  console.log("param===============> ", params);
  return { type: Types.PATCH_REQUEST, params };
};
export const patchSuccess = () => ({ type: Types.PATCH_SUCCESS });
export const patchFailure = (error) => ({ type: Types.PATCH_FAILURE, error });

export const getRequest = (params) => ({ type: Types.GET_REQUEST, params });
export const getSuccess = (payload) => ({ type: Types.GET_SUCCESS, payload });
export const getFailure = (error) => ({ type: Types.GET_FAILURE, error });

export const deleteRequest = (params) => {
  console.log("delete action", params);
  return {
    type: Types.DELETE_REQUEST,
    params,
  };
};
export const deleteSuccess = (payload) => ({
  type: Types.DELETE_SUCCESS,
  payload,
});
export const deleteFailure = (error) => ({ type: Types.DELETE_FAILURE, error });
