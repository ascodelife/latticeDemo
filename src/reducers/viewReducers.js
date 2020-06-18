import {
    SET_FILE_VIEW
  } from "../constants/viewConstants";
  
  function viewReducer(state = {}, action) {
    switch (action.type) {
      case SET_FILE_VIEW:
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  }
  
  export { viewReducer };
  