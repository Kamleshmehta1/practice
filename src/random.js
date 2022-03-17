const { type } = require('@testing-library/user-event/dist/type');
const redux = require('redux')

const { createStore } = redux


const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// Action
// {
//     type: INCREMENT_COUNTER
// }

{
    type: DECREMENT_COUNTER
}

const initialStata = {
    count: 0
}

// Action Creator

const incrementCount = () => {
    return { type: INCREMENT_COUNTER }
}
const decrementCount = () => {
    return { type: DECREMENT_COUNTER }
}

const reducer = (state = initialStata, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

//store
const store = createStore(reducer)

console.log(store.getState()); // getState() {methos}, status or returns u current state 


// const unsubscribe = store.subscribe(() =>console.log("subscribed to redux state the current state is", store.getState()))
const unsubscribe = store.subscribe(() => { })

store.dispatch(incrementCount())
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(incrementCount())
store.dispatch(incrementCount())

console.log(store.getState())

unsubscribe()