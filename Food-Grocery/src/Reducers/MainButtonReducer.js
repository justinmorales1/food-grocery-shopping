import buttonState from '../Constants/buttonStates'
function CurrentButtonReducer(state = {}, action) {
   
    let newState = Object.assign({},state);
    console.log("The button state is ");
    console.log(state)

    switch(action.type) {
        case 'ALL_GAMES_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'XBOX_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'PLAYSTATION_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'COMPUTER_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'HANDHELD_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'NINTENDO_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'PREFERENCE_BUTTON_SELECTED':
            newState = action.click;
            return newState;

        default :
            
            return state;
    }
}

export default CurrentButtonReducer;
