const redux = require('redux')
const reduxLogger = require("redux-logger")

const { createStore, combineReducers, applyMiddleware } = redux
const { createLogger } = reduxLogger

const ADD_POST = "INCREMENT_COUNTER";
const FOLLOWER_COUNT = "FOLLOWER_COUNT"


const postInitialStata = {
    posts: [],
    followers: 0
}

const followerInitialState = {
    posts: [],
    followers: 0
}

// Action Creator

const addPosts = (postName) => {
    return {
        type: ADD_POST,
        payload: postName
    }
}
const addFollowers = () => {
    return {
        type: FOLLOWER_COUNT
    }
}

const postReducer = (state = postInitialStata, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        default: return state
    }
}



const followerReducer = (state = followerInitialState, action) => {
    switch (action.type) {
        case FOLLOWER_COUNT:
            return {
                ...state,
                followers: state.followers + 1
            }
        default: return state
    }
}

const rootReducer = combineReducers(
    {
        posts: postReducer,
        followers: followerReducer
    })

//store
const store = createStore(rootReducer, applyMiddleware(createLogger()))

const unsubscribe = store.subscribe(() => { })

store.dispatch(addPosts("Mountains vs beaches"))
store.dispatch(addFollowers())
store.dispatch(addPosts("Travelers"))
unsubscribe()