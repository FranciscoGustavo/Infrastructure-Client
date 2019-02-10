import { createStore, combineReducers, applyMiddleware,  compose } from 'redux';
import reducers from '../reducers';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk'

import { routerReducer } from 'react-router-redux';

const enhancer = function (middleware) {
    return compose(
        persistState('user'),
        applyMiddleware(middleware, thunk)
        
    )
}

const rootReducer = combineReducers({
    ...reducers,
    router : routerReducer
})

export default function configureStore (middleware) {
    return createStore (
        rootReducer,
        enhancer(middleware)
    )
}