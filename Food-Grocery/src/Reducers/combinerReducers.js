import {combineReducers} from 'redux';
import currentPageState from './CurrentPageReducer'
import mainButtonState from './MainButtonReducer'
import addToCartReducer from './ItemsReducer'
import searchState from './SearchReducer'
import currentUserHandler from './LoggedInUserReducer'

export default combineReducers({
    currentPageState,
    mainButtonState,
    addToCartReducer,
    searchState,
    currentUserHandler
})