import {
  SHOW_CONTEXTMENU,
  HIDE_CONTEXTMENU,
} from "../constants/contextmenuConstants";

const showContextmenu = (x, y, target, data = {}) => (dispatch) => {
  dispatch({ type: SHOW_CONTEXTMENU, payload: { x, y, target, data } });
};

const hideContextmenu = () => (dispatch) => {
  dispatch({ type: HIDE_CONTEXTMENU, payload: { } });
};

export { showContextmenu, hideContextmenu };
