import { SET_SELECT_TAG } from "../constants/tagsConstants";

const setSeletedTag = (tag) => (dispatch) => {
    dispatch({type:SET_SELECT_TAG,payload:tag})
};

export { setSeletedTag };
