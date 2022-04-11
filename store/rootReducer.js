import { combineReducers } from "redux";
import counterReducer from "./sample/sample";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
