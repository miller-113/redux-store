import { SET_TITLE } from "../../action-types";

const INITIAL_STATE = {
    title: 'Titel hs',
}

export default (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case SET_TITLE:
            console.log('sdhjks', payload)
            return {...state, title: payload}
            
    default: return state
    };
}