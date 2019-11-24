import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ConsoleButtons from './Components/Layouts/FoodItemButtons';
import Navbar from './Components/Layouts/Navbar';
import Games from './Components/Food'

class App extends Component {
  render() {
    const muiTheme = createMuiTheme();

    return (
      <MuiThemeProvider theme={muiTheme}>
        <Navbar />
        <ConsoleButtons/>
        <Games />     
      </MuiThemeProvider>
    );
  }
}

export default App;
