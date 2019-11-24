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
        case "PRODUCE_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "DAIRY_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "SEAFOOD_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "MEAT_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "NONPERISHABLE_BUTTON_SELECTED":
            newState = {};
            return newState;
        case "ALL_FOODS_BUTTON_SELECTED":
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
