import React from 'react';
import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleLogout = () => {
    let message = `Logout successful. Have a nice day!`;
    this.props.onLoginStatusChange(false, message);
  }
  
  render() {
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleLogout} variant="contained" size="small" color="inherit" style={styles.button}>
          Logout
          <ExitToApp style={styles.icon} />
        </Button>
      </div>
    )
  }
}

export default Logout;