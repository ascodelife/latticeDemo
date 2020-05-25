import { SET_SELECT_FILE } from "../constants/fielConstants";

const setSeletedFile = (file) => (dispatch) => {
  dispatch({ type: SET_SELECT_FILE, payload: file });
};

export { setSeletedFile };
