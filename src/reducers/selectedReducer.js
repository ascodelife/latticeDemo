import {
  SET_SELECT_FILE,
  SET_SELECT_TAG,
} from "../constants/selectedConstants";

function selectedReducer(state = { file: null, tag: null }, action) {
  switch (action.type) {
    case SET_SELECT_FILE:
      return { ...state, file: action.payload };
    case SET_SELECT_TAG:
      return { ...state, tag: action.payload };
    default:
      return state;
  }
}

export { selectedReducer };
