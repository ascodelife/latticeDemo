import { SET_SELECT_FILE } from "../constants/fielConstants";

function selectedFileReducer(state=null,action){
    switch (action.type){
        case SET_SELECT_FILE:
            return action.payload
        default:
            return state;
    }
}

export {selectedFileReducer}