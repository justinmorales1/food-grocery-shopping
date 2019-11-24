import  React from 'react';
import { connect } from 'react-redux';
import FLOW_STATE from '../Constants/flowstates'
import BUTTON_STATE from '../Constants/buttonStates'
import {mainPageState} from '../Actions/MainPageAction'
import groceryList from '../groceryList.json'
import FoodGrid from './FoodGrid'


const styles = {
    notLoggedIn: {
        position: "absolute",
        left: 200,
        right: 200,


    },

}

class SelectedGamesComponent extends React.Component {


    render() {

        const wordSearch = this.props.state.searchState.name;

        if(this.props.state.currentPageState === FLOW_STATE.SEARCH ) {
            return (
                <div>
                    <FoodGrid
                        GameList={groceryList.filter(function(groceryList){
                            if(groceryList.title.includes(wordSearch)){
                                return groceryList;
                            }
                        })}
                    />
                </div>
            )
        }

        if (this.props.state.mainButtonState === BUTTON_STATE.DAIRY_BUTTON_SELECTED) {

            return (
                <div>
                    <FoodGrid
                        GameList={groceryList.filter(function(groceryList){
                        if(groceryList.category == "dairy" ){
                                return groceryList;
                            }
                        })}
                    />

                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.SEAFOOD_PAGE_BUTTON) {
                return (
                    <div>
                        <FoodGrid
                            GameList={groceryList.filter(function(groceryList){
                        if(groceryList.category == "seafood" ){
                                return groceryList;
                            }
                        })}
                        />
                    </div>
                )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.MEAT_PAGE_BUTTON) {
            return (
                <div>
                    <FoodGrid
                        GameList={groceryList.filter(function(groceryList){
                            if(groceryList.category == "meat" ){
                                return groceryList;
                            }
                        })}
                    />
                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PRODUCE_PAGE_BUTTON) {
            return (
                <div>
                    <FoodGrid
                        GameList={groceryList.filter(function(groceryList){
                            if(groceryList.category == "produce" ){
                                return groceryList;
                            }
                        })}
                    />
                </div>
            )
        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NON_PERSIHABLES_PAGE_BUTTON) {
            return (
                <div>
                    <FoodGrid
                        GameList={groceryList.filter(function(groceryList){
                            if(groceryList.category == "non-perishables" ){
                                return groceryList;
                            }
                        })}
                    />
                </div>
            )
        }

            if(this.props.state.currentPageState === FLOW_STATE.SEARCH ) {
                return (
                    <div>
                        <FoodGrid
                            GameList={groceryList.filter(function(groceryList){
                                 if(groceryList.title.includes(wordSearch)){

                                    return groceryList;
                                }
                            })}
                        />
                    </div>
                )
            }


        if(this.props.state.currentPageState === FLOW_STATE.MAINPAGE && this.props.state.mainButtonState != null) {
            return (
                <div>
                    <FoodGrid GameList={groceryList}/>

                </div>
            )
        }
     }
}


const mapStateToProps = (currentPageState) => {
console.log(currentPageState)
    return {
        state: currentPageState,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialState: () =>
            dispatch(mainPageState(FLOW_STATE.MAINPAGE))

    }
}

let SelectedGamesPage = connect(mapStateToProps,mapDispatchToProps)(SelectedGamesComponent);

export default SelectedGamesPage;







