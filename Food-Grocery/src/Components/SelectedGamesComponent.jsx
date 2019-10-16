import  React from 'react';
import { connect } from 'react-redux';
import FLOW_STATE from '../Constants/flowstates'
import BUTTON_STATE from '../Constants/buttonStates'
import {mainPageState} from '../Actions/MainPageAction'
import games from '../gamesList.json'
import GameGrid from './GameGrid'


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
        const preferenceGames = this.props.state.currentUserHandler.user.gamePreferences;

        if(this.props.state.currentPageState === FLOW_STATE.SEARCH ) {
            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                            if(game.title.includes(wordSearch)){
                                return game;
                            }
                        })}
                    />
                </div>
            )
        }

        if ((this.props.state.mainButtonState === "PREFERENCE_BUTTON" && this.props.state.currentPageState === FLOW_STATE.MAINPAGE )&& this.props.state.genreButtonState == null) {

            if (this.props.state.currentUserHandler.isLoggedIn == false) {
                return (
                    <h1 style={styles.notLoggedIn}>
                        Not Logged in. To view preferences please log in.

                    </h1>
                )
            } else {
                if (this.props.state.currentUserHandler.user.gamePreferences != undefined) {
                    var [one = '', two = '', three = '', four = '', five = ''] = preferenceGames;


                    return (
                        <div>
                            <GameGrid
                                GameList={games.filter(function(game){

                                if(game.console == one){
                                return game;
                                }
                                if(game.console == two){
                                return game;
                                }
                                if(game.console == three){
                                return game;
                                }
                                if(game.console == four){
                                return game;
                                }
                                if(game.console == five){
                                return game;
                                }



                        })}
                            />

                        </div>
                    )

                }

            }

        }



        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "computer" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.COMPUTERPAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }
            else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "computer"){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }



        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "nintendo" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.NINTENDOBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "nintendo"){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }




        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "xbox one" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.XBOXPAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "xbox one"){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }




        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "PS4" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }
        if (this.props.state.mainButtonState === BUTTON_STATE.PS4PAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                    />
                </div>
            )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "PS4"){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }




        }





        if (this.props.state.mainButtonState === BUTTON_STATE.HANDHELDPAGEBUTTON && this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                        if(game.console == "hand held" ){
                                return game;
                            }

                        })}
                    />

                </div>
            )

        }

        if (this.props.state.mainButtonState === BUTTON_STATE.HANDHELDPAGEBUTTON && this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held" && game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.console == "hand held"){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }




        }

        if ((this.props.state.mainButtonState === BUTTON_STATE.ALLGAMESPAGEBUTTON || this.props.state.currentPageState === FLOW_STATE.MAINPAGE )&& this.props.state.genreButtonState == null) {


            return (
                <div>
                    <GameGrid
                        GameList={games.filter(function(game){
                                return game;


                        })}
                    />

                </div>
            )

        }

        if ((this.props.state.mainButtonState === BUTTON_STATE.ALLGAMESPAGEBUTTON || this.props.state.currentPageState === FLOW_STATE.MAINPAGE)&& this.props.state.genreButtonState != null) {
            if( this.props.state.genreButtonState == "SPORTS_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.genre == "Sports" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RPG_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.genre == "Roleplaying" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "SHOOTER_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.genre == "Shooter" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            }  else if( this.props.state.genreButtonState == "ADVENTURE_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if( game.genre == "Action-adventure" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "STRATEGY_BUTTON_SELECTED"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.genre == "Strategy" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "RACING_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){
                        if(game.genre == "Racing" ){
                                return game;
                            }

                        })}
                        />
                    </div>
                )
            } else if( this.props.state.genreButtonState == "ALLGENRES_BUTTON"){
                return (
                    <div>
                        <GameGrid
                            GameList={games.filter(function(game){

                                return game;


                        })}
                        />
                    </div>
                )
            }




        }



        if(this.props.state.currentPageState === FLOW_STATE.SEARCH ) {


            return (

                <div>

                    <GameGrid
                        GameList={games.filter(function(game){
                             if(game.title.includes(wordSearch)){

                                return game;
                            }


                        })}
                    />

                </div>

            )

        }

        if(this.props.state.currentPageState === FLOW_STATE.MAINPAGE && this.props.state.mainButtonState != null) {
            return (
                <div>
                    <GameGrid GameList={games}/>

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







