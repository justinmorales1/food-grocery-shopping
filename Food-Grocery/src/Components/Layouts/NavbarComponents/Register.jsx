import React from 'react';
import { 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Checkbox,
  ListItemText
} from '@material-ui/core';
import { SupervisorAccount } from '@material-ui/icons';
import Cryptr from 'cryptr';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      address: '',
      addressErr: '',
      nameErr: false,
      email: '',
      emailErr: false,
      password: '',
      passwordErr: false,
      passwordConfirm: '',
      passwordConfirmErr: false,
      passwordHelperText: '',
      emailHelperText: '',
    };
  }

  handleClickOpen = () => {
    this.resetErrors();
    this.clearPasswordFields();
    this.setState({ open: true });
  };

  resetErrors = () => {
    let errorsArr = ['nameErr', 'emailErr', 'passwordErr', 'passwordConfirmErr'];
    for (let i = 0; i < errorsArr.length; i++) {
      let prop = errorsArr[i];
      this.setState({ [prop]: false });
    }
    this.setState({ passwordHelperText: '' });
    this.setState({ emailHelperText: '' });
  };

  clearPasswordFields = () => {
    this.setState({ password: '' });
    this.setState({ passwordConfirm: '' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFullNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePasswordConfirmChange = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (this.thereAreEmptyValuesInForm()) {
      return;
    } else if (this.passwordsAreInvalid()) {
      return;
    } else if (this.emailAlreadyExists(this.state.email)) {
      return;
    }

    this.handleSavingUser();
    this.updateUIForLoggedUser();
  };

  thereAreEmptyValuesInForm = () => {
    let hasEmptyValues = false;
    let valuesToCheck = ['name','address', 'email', 'password', 'passwordConfirm'];
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

  passwordsAreInvalid = () => {
    let isInvalid = false;
    if (this.state.password !== this.state.passwordConfirm) {
      this.setState({ passwordHelperText: 'Passwords do not match' });
      this.setState({ passwordConfirmErr: true });
      isInvalid = true;
    } else if (this.state.password.length < 8) {
      this.setState({ passwordHelperText: 'Please use a password that contains more than 8 characters' });
      this.setState({ passwordConfirmErr: true });
      this.setState({ passwordErr: true });
      isInvalid = true;
    }
    return isInvalid;
  };

  emailAlreadyExists = (email) => {
    let key = 'email' + email;
    let exists = false;
    if (window.localStorage.getItem(key) != null) {
      this.setState({ emailHelperText: 'email already exists.' });
      this.setState({ emailErr: true });
      exists = true;
    }
    return exists;
  };

  encryptPassword = (password) => {
    const cryptr = new Cryptr(this.props.encryptionKey);
    let passEncrypted = cryptr.encrypt(password);
    return passEncrypted;
  };

  handleSavingUser = () => {
    let hashedPassword = this.encryptPassword(this.state.password);
    let user = { name: this.state.name, address: this.state.address, email: this.state.email, password: hashedPassword};
    this.props.updateUserObject(user);
  };

  updateUIForLoggedUser = () => {
    let message = `Registration successful! Welcome ${this.state.name}`;
    this.setState({ open: false });
    this.props.onLoginStatusChange(true, message);
  };

  handleKeyPress = (e) => {
    // Enter key pressed
    if (e.charCode == 13) {
      this.handleRegister(e);
    }
  };

  render() {
    let styles = this.props.styles;
    return (
      <div onKeyPress={this.handleKeyPress}>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          Register
          <SupervisorAccount style={styles.icon} />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register for Whole Food Eats</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out all the fields of the form to complete the registration
            </DialogContentText>
            <TextField value={this.state.name} onChange={this.handleFullNameChange} error={this.state.nameErr} 
              autoFocus margin="dense" id="full-name" label="Full Name" type="text" required fullWidth
            />
            <TextField value={this.state.address} onChange={this.handleAddressChange} error={this.state.addressErr} 
              margin="dense" id="full-address" label="Address" type="text" required fullWidth
            />
            <TextField value={this.state.email} onChange={this.handleEmailChange} 
              error={this.state.emailErr} helperText={this.state.emailHelperText}
              margin="dense" id="email-register" label="Email" type="email" required fullWidth
            />
            <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
              margin="dense" id="password-register" label="Password" type="password" required fullWidth
            />
            <TextField style={{marginBottom: 20}} value={this.state.passwordConfirm} onChange={this.handlePasswordConfirmChange} 
              error={this.state.passwordConfirmErr} helperText={this.state.passwordHelperText}
              margin="dense" id="password-confirm" label="Confirm Password" type="password" required fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRegister} color="primary" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Register;