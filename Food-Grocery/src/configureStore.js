import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './Reducers/combinerReducers'
import thunk from 'redux-thunk';

export default function configureStore () {
    return createStore(
        combinedReducers,
        applyMiddleware(thunk)
        + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}


