import React from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle
} from '@material-ui/core';
import { AccountBox } from '@material-ui/icons';
import Cryptr from 'cryptr';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: '',
      emailErr: false,
      emailHelperText: '',
      password: '',
      passwordErr: false,
      passwordHelperText: ''
    };
  }

  handleClickOpen = () => {
    this.resetErrors();
    this.setState({ password: '' });
    this.setState({ open: true });
  };

  resetErrors = () => {
    let errorsArr = ['emailErr', 'passwordErr'];
    for (let i = 0; i < errorsArr.length; i++) {
      let prop = errorsArr[i];
      this.setState({ [prop]: false });
    }
    this.setState({ passwordHelperText: '' });
    this.setState({ emailHelperText: '' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  };

  handleLogin = (e) => {
    e.preventDefault();
    let emailKey = 'email' + this.state.email;
    let user = window.localStorage.getItem(emailKey);
    let userObj = JSON.parse(user);
    if (this.thereAreEmptyValuesInForm()) {
      return;
    } else if (this.emailNotFoundOrWrongPasswordsDontMatch(userObj)) {
      return;
    }
    
    // User login successful
    this.updateUIForLoggedUser(userObj.name);
    this.props.updateUserObject(userObj);
  };

  thereAreEmptyValuesInForm = () => {
    let hasEmptyValues = false;
    let valuesToCheck = ['email', 'password'];
    for (let i = 0; i < valuesToCheck.length; i++) {
      let propValue = valuesToCheck[i];
      let errorName = propValue + 'Err';
      this.setState({ [errorName]: false });
      if (this.state[propValue] === '') {
        this.setState({ [errorName]: true });
        hasEmptyValues = true;
      }
    }
    return hasEmptyValues;
  };

  emailNotFoundOrWrongPasswordsDontMatch = (user) => {
    if (user === null) {
      this.setState({ emailHelperText: 'Email not found.', emailErr: true });
      return true;
    } 
    const cryptr = new Cryptr(this.props.encryptionKey);
    let storedPassword = cryptr.decrypt(user.password);
    if (storedPassword !== this.state.password) {
      this.setState({ passwordHelperText: 'Email not found or passwords do not match our records. Please try again.', 
        emailErr: false, 
        passwordErr: true 
      });
      return true;
    }
    return false;
  };

  updateUIForLoggedUser = (name) => {
    let message = `Welcome back ${name}!`;
    this.setState({ open: false });
    this.props.onLoginStatusChange(true, message);
  };

  handleKeyPress = (e) => {
    // Enter key pressed
    if (e.charCode == 13) {
      this.handleLogin(e);
    }
  };
  
  render() {
    let styles = this.props.styles;
    return (
      <div onKeyPress={this.handleKeyPress}>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          Login
          <AccountBox style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login to Your Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email followed by the password.
            </DialogContentText>
            <TextField value={this.state.email} onChange={this.handleEmailChange} error={this.state.emailErr}
              helperText={this.state.emailHelperText}
              autoFocus margin="dense" id="email-login" label="Email" type="text" required fullWidth
            />
            <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
              helperText={this.state.passwordHelperText}
              margin="dense" id="password-login" label="Password" type="password" required fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleLogin} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Login;