import { combineReducers } from "redux";
import changeNumber from "./miniReducer";

const rootReducer = combineReducers({
  changeNumber,
});

export default rootReducer;
