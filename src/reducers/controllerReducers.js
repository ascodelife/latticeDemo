import {SET_CURRENT_STEP} from "../constants/controllerConstants";

function stepReducer(state = { current: 0 },action) {
    switch (action.type){
        case SET_CURRENT_STEP:
            return {current:action.payload};
        default:
            return state;
    }
}

export { stepReducer };
