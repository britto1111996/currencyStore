import { combineReducers } from "redux";
import getDataReducer from "./getDataReducer";

export default combineReducers({
  data: getDataReducer,
});
