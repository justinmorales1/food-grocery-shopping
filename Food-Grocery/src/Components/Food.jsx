import React from 'react';
import { Paper, Grid  } from '@material-ui/core';
import SelectedGamesComponent from './SelectFood'

class Food extends React.Component {

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item>
          <Paper>
            <SelectedGamesComponent/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Food;