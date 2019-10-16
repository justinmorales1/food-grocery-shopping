import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import GameCard from './GameCard'

const styles = {
    grid:{
        width: '100vw'
    }
}





class GameGrid extends React.Component{
    styles = this.props.styles;
    render() {
        let gameList = [
            {name: "Nier Automata", url: "https://images-na.ssl-images-amazon.com/images/I/51b7HIBTKNL.jpg"},
            {name: "The Last of Us", url: "https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL.jpg"},
            {name: "Nier Automata", url: "https://images-na.ssl-images-amazon.com/images/I/51b7HIBTKNL.jpg"},
            {name: "The Last of Us", url: "https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL.jpg"},
            {name: "Nier Automata", url: "https://images-na.ssl-images-amazon.com/images/I/51b7HIBTKNL.jpg"},
            {name: "The Last of Us", url: "https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL.jpg"},
            {name: "Nier Automata", url: "https://images-na.ssl-images-amazon.com/images/I/51b7HIBTKNL.jpg"},
            {name: "The Last of Us", url: "https://images-na.ssl-images-amazon.com/images/I/51fR72yjSFL.jpg"},
        ];
        const classes = this.props
        const gameCards = classes.GameList.map((game) =>       
           <GameCard price={game.price} imgURL={game.url} Title={game.title} Description={game.description} youtubeId ={game.youtubeId}/> 
        );
        return(
            <Grid style={styles.grid} container justify="center">
                {gameCards}
            </Grid>
        );
    }


}



GameGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(GameGrid);