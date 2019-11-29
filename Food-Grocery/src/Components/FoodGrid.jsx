import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FoodCard from './FoodItemCard';

const styles = {
  grid: {
    padding: '3%',
    width: '100vw',
    flexGrow: 1
  }
};

class FoodGrid extends React.Component {
  styles = this.props.styles;
  render() {
    const classes = this.props;
    const foodCards = classes.foodLists.map((food, index) => (
      <Grid key={index} item lg={2} md={3} xs={6}>
        <FoodCard
          key={index}
          price={food.price}
          imgURL={food.url}
          Title={food.title}
          food={food}
          Description={food.description}
        />
      </Grid>
    ));
    return (
      <Grid
        style={styles.grid}
        container
        justify='center'
        alignItems='center'
        spacing={16}
      >
        {foodCards}
      </Grid>
    );
  }
}

FoodGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FoodGrid);
