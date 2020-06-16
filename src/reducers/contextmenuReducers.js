import {
  SHOW_CONTEXTMENU,
  HIDE_CONTEXTMENU,
} from "../constants/contextmenuConstants";

function contextmenuReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_CONTEXTMENU:
      return {
        ...state,
        target: action.payload.target,
        x: action.payload.x,
        y: action.payload.y,
        data: action.payload.data,
        show: true,
      };
    case HIDE_CONTEXTMENU:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}

export { contextmenuReducer };
