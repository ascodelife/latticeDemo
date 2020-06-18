import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { selectedReducer } from "./reducers/selectedReducer";
import { metaDataReducer } from "./reducers/metaDataReducers";
import { contextmenuReducer } from "./reducers/contextmenuReducers";
import { viewReducer } from "./reducers/viewReducers";
import { VIEW_TILE } from "./constants/contextmenuConstants";

const metaData = window.ipcRenderer.sendSync("getMetaData") || {
  tags: {},
  files: {},
  error: {},
};

const fileView = window.ipcRenderer.sendSync("getFileView") || VIEW_TILE;

// const metaData ={
//   tags: {},
//   files: {},
//   error: {},
// };

const initialState = {
  selected: { tag: "", file: "" },
  contextmenu: { x: -1, y: -1, target: null, show: false },
  metaData: { ...metaData, apiState: "" },
  view: { ...fileView },
};
const reducer = combineReducers({
  selected: selectedReducer,
  metaData: metaDataReducer,
  contextmenu: contextmenuReducer,
  view: viewReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
