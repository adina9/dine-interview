import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { booksReducer } from './reducers/booksReducer.js';

const rootReducer = combineReducers({

    booksModule: booksReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


// For Debug
window.theStore = store;
store.subscribe(() => {
    console.log('Global State is:', store.getState())
})
