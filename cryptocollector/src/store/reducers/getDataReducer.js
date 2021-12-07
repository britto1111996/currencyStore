import { GET_DATA, GET_ERROR } from "../types";

const initialState = {
  data: [],
  loading: true,
};

const fnName = function (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fnName;
