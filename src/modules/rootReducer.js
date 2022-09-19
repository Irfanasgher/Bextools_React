import { combineReducers } from "redux";
import pairExplorerReducer from "./pairExplorer/reducer";

const rootReducer = combineReducers({
  pairExplorerReducer,
});

export default rootReducer;
