import { SET_SELECT_TAG } from "../constants/tagsConstants";

function selectedTagReducer(state=null,action){
    switch (action.type){
        case SET_SELECT_TAG:
            return action.payload
        default:
            return state;
    }
}

export {selectedTagReducer}