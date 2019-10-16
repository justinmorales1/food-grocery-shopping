import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ConsoleButtons from './Components/Layouts/ConsoleButtons';
import Navbar from './Components/Layouts/Navbar';
import Games from './Components/Games'
import GenreButtons from './Components/GenreButtons'

class App extends Component {
  render() {
    const muiTheme = createMuiTheme();

    return (
      <MuiThemeProvider theme={muiTheme}>
        <Navbar />
        <ConsoleButtons/>
        <GenreButtons />
        <Games />     
      </MuiThemeProvider>
    );
  }
}

export default App;
