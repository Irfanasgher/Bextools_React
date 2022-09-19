import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../modules/rootReducer";

export default function configureStore(initialState) {
  const history = createBrowserHistory();
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history)))
  );
  store.history = history;
  return store;
}
