import {
  SET_SELECT_FILE,
  SET_SELECT_TAG,
} from "../constants/selectedConstants";

const setSeletedFile = (file) => (dispatch) => {
  dispatch({ type: SET_SELECT_FILE, payload: file });
};

const setSeletedTag = (tag) => (dispatch) => {
  dispatch({ type: SET_SELECT_TAG, payload: tag });
};

export { setSeletedFile, setSeletedTag };
