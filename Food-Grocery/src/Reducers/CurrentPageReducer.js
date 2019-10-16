import flowState from '../Constants/flowstates'
function CurrentPageReducer(state = flowState.MAINPAGE, action) {

    let newState = Object.assign({},state);
    switch(action.type) {
        case 'LOGIN_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'COMPUTER_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'REGISTER_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'CART_PAGE_ACTION':
            newState = action.click;
            return newState;
        case 'SEARCH_ACTION':
            newState = action.click;
            return newState;
        case "PLAYSTATION_BUTTON_SELECTED":
            newState = flowState.MAINPAGE;
            return newState;
        case "COMPUTER_BUTTON_SELECTED":
            newState = flowState.MAINPAGE;
            return newState;
        case "NINTENDO_BUTTON_SELECTED":
            newState = flowState.MAINPAGE;
            return newState;
        case "HANDHELD_BUTTON_SELECTED":
            newState = flowState.MAINPAGE;
            return newState;
        case "ALL_GAMES_BUTTON_SELECTED":
            newState = flowState.MAINPAGE;
            return newState;
        case 'PREFERENCE_BUTTON_SELECTED':
            newState = flowState.MAINPAGE;
            return newState;
        default :

            return state;
    }
}

export default CurrentPageReducer;