import {
  ADD_FILES_REQUEST,
  ADD_FILES_SUCCESS,
  ADD_FILES_FAIL,
  REMOVE_FILE_REQUEST,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_FAIL,
  ADD_TAG_REQUEST,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  REMOVE_TAG_REQUEST,
  REMOVE_TAG_SUCCESS,
  REMOVE_TAG_FAIL,
  CLEAR_REQUEST,
  CLEAR_SUCCESS,
  CLEAR_FAIL,
} from "../constants/metaDataConstants";
import { REQUEST, SUCCESS, FAIL } from "../constants/apiConstants";

function metaDataReducer(state = { files: {}, tags: {} }, action) {
  switch (action.type) {
    case ADD_FILES_REQUEST:
      return { ...state, apiState: REQUEST };
    case ADD_FILES_SUCCESS:
      return { ...action.payload.addFileState, apiState: SUCCESS };
    case ADD_FILES_FAIL:
      return { ...state, apiState: FAIL, error: action.payload };

    case REMOVE_FILE_REQUEST:
      return { ...state, apiState: REQUEST };
    case REMOVE_FILE_SUCCESS:
      return { ...action.payload.removeFileState, apiState: SUCCESS };
    case REMOVE_FILE_FAIL:
      return { ...state, apiState: FAIL, error: action.payload };

    case ADD_TAG_REQUEST:
      return { ...state, apiState: REQUEST };
    case ADD_TAG_SUCCESS:
      return { ...action.payload.addTagState, apiState: SUCCESS };
    case ADD_TAG_FAIL:
      return { ...state, apiState: FAIL, error: action.payload };

    case REMOVE_TAG_REQUEST:
      return { ...state, apiState: REQUEST };
    case REMOVE_TAG_SUCCESS:
      return { ...action.payload.removeTagState, apiState: SUCCESS };
    case REMOVE_TAG_FAIL:
      return { ...state, apiState: FAIL, error: action.payload };

    case CLEAR_REQUEST:
      return { ...state, apiState: REQUEST };
    case CLEAR_SUCCESS:
      return { ...action.payload.clearState, apiState: SUCCESS };
    case CLEAR_FAIL:
      return { ...state, apiState: FAIL, error: action.payload };

    default:
      return state;
  }
}

export { metaDataReducer };
