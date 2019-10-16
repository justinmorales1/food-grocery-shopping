/**
 * Created by Justin on 7/25/18.
 */




function SearchReducer(state = {}, action) {


    let newState = Object.assign({},state);

    switch(action.type) {
        case 'SEARCH_PAGE_ACTION':
            console.log("inside the search reducer")
            newState = action.click;
            return newState;
        case "XBOX_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "PLAYSTATION_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "COMPUTER_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "NINTENDO_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "HANDHELD_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "ALL_GAMES_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "PREFERENCE_BUTTON_SELECTED":
            newState = {};
            return newState;
        default :

            return newState;
    }
}

export default SearchReducer;
