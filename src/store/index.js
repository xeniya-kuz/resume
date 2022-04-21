
import { createStore, combineReducers } from 'redux'
import { animationReducer, languageReducer } from './reducer'

export const store = createStore(
    combineReducers({
        languageReducer: languageReducer,
        animationReducer: animationReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);