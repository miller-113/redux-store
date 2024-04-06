import { INCREASE_COUNTER } from "../../action-types";

const INITIAL_STATE = {
    counter: 10,
}

export default (state=INITIAL_STATE, {type, payload}) => {
    switch (type){
        case INCREASE_COUNTER:
            return {...state, counter: state.counter += 1}
        default: return state
    }
}