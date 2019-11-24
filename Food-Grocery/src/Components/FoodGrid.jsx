import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import FoodCard from './FoodItemCard'

const styles = {
    grid:{
        width: '100vw'
    }
}


class FoodGrid extends React.Component{
    styles = this.props.styles;
    render() {
        const classes = this.props
        const foodCards = classes.GameList.map((food) =>
           <FoodCard price={food.price} imgURL={food.url} Title={food.title} Description={food.description} youtubeId ={food.youtubeId}/>
        );
        return(
            <Grid style={styles.grid} container justify="center">
                {foodCards}
            </Grid>
        );
    }
}

FoodGrid.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(FoodGrid);