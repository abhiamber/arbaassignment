import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Redux/reducer";

const rootreducers = combineReducers({
  state: reducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootreducers,
  createComposer(applyMiddleware(thunk))
);
