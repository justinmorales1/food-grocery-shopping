import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './Reducers/combinerReducers'
import thunk from 'redux-thunk';




export default function configureStore() {
    return createStore (
        combinedReducers,
        applyMiddleware(thunk)


    );
}


