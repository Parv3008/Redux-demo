import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
