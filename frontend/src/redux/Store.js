import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer as AppReducer } from "./AppReducer/Reducer";

import { Reducer as AuthReducer } from "./AuthReducer/Reducer";
const rootReducer = combineReducers({ AppReducer, AuthReducer });
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
