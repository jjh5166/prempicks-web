import { createStore, applyMiddleware } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunkMiddleware]
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
import combinedReducer from './reducers'

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.guest.isGuest) nextState.guest = state.guest // preserve on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

function initStore() {
    return createStore(
        reducer,
        undefined,
        composeWithDevTools(applyMiddleware(...middleware))
    )
}

export const wrapper = createWrapper(initStore)
