import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './NavbarComponents/Login';
import Register from './NavbarComponents/Register';
import FAQ from './NavbarComponents/FAQ';
import SearchBar from './NavbarComponents/SearchBar';
import ShoppingCart from './NavbarComponents/ShoppingCart';
import Logout from './NavbarComponents/Logout';
import UserAccount from './NavbarComponents/UserAccount';
import { AppBar, Toolbar, Typography, Snackbar } from '@material-ui/core';
import { updateLoggedInUserStatus } from '../../Actions/LoggedInStatusAction';
import { updateLoggedInUser } from '../../Actions/LoggedInUserAction';
import MySnackbarContent from '../CustomSnackbar';

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  button: {
    margin: 10,
    color: '#FFF',
    backgroundColor: '#1D8BF1'
  },
  icon: {
    marginLeft: 5
  },
  snackbarText: {
    textAlign: 'center'
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { name: 'John Doe' },
      userIsLoggedIn: false,
      openSnackbarMessage: false,
      loginMessage: '',
      encryptionKey: 'myTotalySecretKey' // Maybe replace with a more secure key in the future
    };
  }

  handleSnackbarClose = () => {
    this.setState({ openSnackbarMessage: false });
  };
  
  handleLoginStatusChange = (isLoggedIn, message) => {
    this.setState({ userIsLoggedIn: isLoggedIn });
    this.props.updateLoggedInUserStatus(isLoggedIn);
    this.handleLoginLogoutPopUpMessage(message);
  };

  handleLoginLogoutPopUpMessage = (message) => {
    this.setState({ openSnackbarMessage: true, loginMessage: message });
  };

  handleUpdateCurrentUserObj = (userObj) => {
    this.setState({ user: userObj });
    this.props.updateLoggedInUser(userObj);
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Toolbar>
            <Typography variant="title" color="inherit" style={styles.title}>
              Whole Food Eats
            </Typography>          
            <SearchBar />
            <ShoppingCart styles={styles}/>
            {!this.state.userIsLoggedIn ? (
              <Fragment>
                <Login styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                  updateUserObject={this.handleUpdateCurrentUserObj}
                />
                <Register styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange} encryptionKey={this.state.encryptionKey}
                  updateUserObject={this.handleUpdateCurrentUserObj}
                />
              </Fragment>
            ) : (
              <Fragment>
                <UserAccount styles={styles} userObj={this.state.user} 
                  onLoginStatusChange={this.handleLoginStatusChange}
                />
                <Logout styles={styles}
                  onLoginStatusChange={this.handleLoginStatusChange}
                />
              </Fragment>
            )}
             <Fragment>
              <FAQ styles={styles}/>
              </Fragment>
          </Toolbar>
          <Snackbar
            open={this.state.openSnackbarMessage}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            autoHideDuration={3000}
            onClose={this.handleSnackbarClose}
          >
            <MySnackbarContent
              variant="success"
              message={<span id="message-id">{this.state.loginMessage}</span>}
            />
          </Snackbar>
            
        </AppBar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateLoggedInUserStatus: (isLoggedIn) => dispatch(updateLoggedInUserStatus(isLoggedIn)),
    updateLoggedInUser: (user) => dispatch(updateLoggedInUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Navbar);
