import GENRESTATE from '../Constants/genreButtonStates'
function GenreButtonsReducer(state = null, action) {

    let newState = Object.assign({},state);
    console.log("The genre button state is ");
    console.log(state)

    switch(action.type) {
        case GENRESTATE.ADVENTUREBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.RPGBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.SHOOTERBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.SPORTSPAGEBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.STRATEGYBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.RACINGBUTTON:
            newState = action.click;
            return newState;
        case GENRESTATE.ALLGENRESBUTTON:
            newState = action.click;
            return newState;
        case "PRODUCE_BUTTON_SELECTED":
           newState = null;
            return newState;
        case "DAIRY_BUTTON_SELECTED":
            newState = null;
            return newState;
        case "SEAFOOD_BUTTON_SELECTED":
            newState = null;
            return newState;
        case "MEAT_BUTTON_SELECTED":
            newState = null;
            return newState;
        case "NONPERISHABLE_BUTTON_SELECTED":
            newState = null;
            return newState;
        case "ALL_FOODS_BUTTON_SELECTED":
            newState = null;
            return newState;
        case 'PREFERENCE_BUTTON_SELECTED':
            newState = null;
            return newState;

        default :

            return state;
    }
}

export default GenreButtonsReducer;