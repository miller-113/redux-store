import {createStore} from 'redux'

// share reducers
let intialState = {
    counter: 2,
    title: 'some titel'
}

const store = createStore((state = intialState, action) => {
    switch(action.type){
        case "INCREASE_COUNTER": {
            return {...state, counter: state.counter +=1}
        };
        case "SET_TITLE": {
            return {...state, title: action.payload}
        }
        default: return state
    }
})
//

// ACTIONS
export const increaseCounter = (payload) => ({type: "INCREASE_COUNTER", payload})
export const setTitle = (payload) => ({type: "SET_TITLE", payload});


export default store;