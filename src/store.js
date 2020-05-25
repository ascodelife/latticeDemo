import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { stepReducer } from "./reducers/controllerReducers";
import { selectedTagReducer } from "./reducers/tagReducers";
import { selectedFileReducer } from "./reducers/fileReducers";

const current = Cookie.getJSON("current") || 0;
const selectedTag = Cookie.getJSON("selectedTag") || null;
const selectedFile = Cookie.getJSON("selectedFile") || null;

const initialState = { step: { current }, selectedTag, selectedFile };
const reducer = combineReducers({
  step: stepReducer,
  selectedTag: selectedTagReducer,
  selectedFile: selectedFileReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
