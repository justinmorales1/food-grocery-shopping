import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import SelectFood from './SelectFood';

class Food extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item>
          <Paper>
            <SelectFood />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Food;
