import * as Types from "./toDoList.type";

const initialState = {
  list: [],
  job: null,

  loading: false,
  error: null,
  isAddSuccess: false,
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case Types.FETCH_REQUEST: {
      console.log("dang load");
      return { ...state, loading: true };
    }
    case Types.FETCH_SUCCESS: {
      // console.log("thanh cong", action.payload);

      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    }
    case Types.FETCH_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    // PUT / POST
    case Types.PATCH_REQUEST: {
      return { ...state, loading: true, isAddSuccess: false };
    }
    case Types.PATCH_SUCCESS: {
      console.log("patch success");
      return {
        ...state,
        isAddSuccess: true,
      };

      // return { ...state, loading: false };
    }
    case Types.PATCH_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    // GET
    case Types.GET_REQUEST: {
      return { ...state, loading: true };
    }
    case Types.GET_SUCCESS: {
      return { ...state, loading: false, job: action.payload };
    }
    case Types.GET_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    case Types.DELETE_REQUEST: {
      console.log("delete success");
      return { ...state, loading: true };
    }

    // DELETE

    case Types.DELETE_SUCCESS: {
      return { ...state, loading: false };
    }
    case Types.DELETE_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }

    default:
      return state;
  }
};

export default toDoListReducer;
