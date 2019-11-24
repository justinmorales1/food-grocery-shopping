import buttonState from '../Constants/buttonStates'
function CurrentButtonReducer(state = {}, action) {
   
    let newState = Object.assign({},state);
    console.log("The button state is ");
    console.log(state)

    switch(action.type) {
        case 'ALL_FOODS_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'PRODUCE_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'DAIRY_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'SEAFOOD_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'NONPERISHABLE_BUTTON_SELECTED':
            newState = action.click;
            return newState;
        case 'MEAT_BUTTON_SELECTED':
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
