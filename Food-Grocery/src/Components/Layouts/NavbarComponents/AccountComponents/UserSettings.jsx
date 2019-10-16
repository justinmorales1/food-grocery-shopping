import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  Button, 
  TextField,
  Select,
  MenuItem,
  DialogActions
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { updateLoggedInUser } from '../../../../Actions/LoggedInUserAction';
import Cryptr from 'cryptr';

const styles = {
  textWidth: {
    width: 400
  },
  deleteBtn: {
    fontSize: 12,
    height: 10,
    width: 170, 
    marginTop: 15,
    marginBottom: 15
  },
  successMessage: {
    display: 'none',
    color: 'green'
  }
};

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      tabValue: 0,
      name: '',
      nameErr: false,
      password: '',
      passwordErr: false,
      newPassword: '',
      newPasswordErr: false,
      newPasswordConfirm: '',
      newPasswordConfirmErr: false,
      passwordHelperText: '',
      newPasswordHelperText: '',
      newPasswordConfirmHelperText: '',
      address: '1600 Pennsylvania Ave',
      addressErr: false,
      stateSelected: 'TX',
      encryptionKey: 'myTotalySecretKey',
      successMessage: 'Update successfull!',
    };
  }

  componentWillMount = () => {
    let currentUserHandler = this.props.state.currentUserHandler;
    if (currentUserHandler.isLoggedIn) {
      let user = currentUserHandler.user;
      this.setState({ user: user, name: user.name, address: user.address, stateSelected: 'TX' });
    }
  };

  handleFullNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleNewPasswordChange = (e) => {
    this.setState({ newPassword: e.target.value });
  };
  
  handleNewPasswordConfirmationChange = (e) => {
    this.setState({ newPasswordConfirm: e.target.value });
  };

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  };

  handleDeleteBtnAction = () => {
    let conf = window.confirm('Are you sure that you would like to DELETE your account?\n This is an irreversible step');
    if (conf) {
      let key = 'email' + this.props.userObj.email;
      window.localStorage.removeItem(key);
      this.props.handleUserDeleted(); // Logout and show message
    }
  };

  handleChangeSelectedState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateClick = () => {
    if (this.thereAreEmptyValuesInForm()) {
      return;
    } else if (this.passwordsAreInvalid()) {
      return;
    }
    this.updateUser();
  };

  updateUser = () => {
    let user = this.state.user;
    if (this.state.newPassword.length > 0) {
      let hashedPassword = this.encryptPassword(this.state.newPassword);
      user.password = hashedPassword;
    }
    user.address = this.state.address;
    user.name = this.state.name;
    this.props.updateLoggedInUser(user);
    this.setState({password: '', newPassword: '',  newPasswordConfirm: '' });
    this.showSuccessMessage();
  };

  showSuccessMessage = () => {
    this.refs.successDiv.style.display = 'block';
    setTimeout(() => {
      this.refs.successDiv.style.display = 'none';
    }, 1000);
  };

  encryptPassword = (password) => {
    const cryptr = new Cryptr(this.state.encryptionKey);
    let passEncrypted = cryptr.encrypt(password);
    return passEncrypted;
  };

  handleClose = () => {
    this.props.handleClose();
  }

  thereAreEmptyValuesInForm = () => {
    let hasEmptyValues = false;
    let valuesToCheck = ['name', 'password', 'address'];
    if (this.state.newPassword.length > 0 ||  this.state.newPasswordConfirm.length > 0) {
      valuesToCheck.push('newPassword', 'newPasswordConfirm');
    }
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
    if (this.isInvalidCurrentPassword()) {
      isInvalid = true;
    } else if (this.state.newPassword !== this.state.newPasswordConfirm) {
      this.setState({ newPasswordConfirmHelperText: 'New passwords do not match' });
      this.setState({ newPasswordConfirmErr: true });
      isInvalid = true;
    } else if (this.state.newPassword.length > 0 && this.state.newPassword.length < 8) {
      this.setState({ newPasswordHelperText: 'Please use a password that contains more than 8 characters' });
      this.setState({ newPasswordConfirmErr: true });
      this.setState({ newPasswordErr: true });
      isInvalid = true;
    }
    return isInvalid;
  };

  isInvalidCurrentPassword = () => {
    const cryptr = new Cryptr(this.state.encryptionKey);
    let storedPassword = cryptr.decrypt(this.state.user.password);
    if (storedPassword !== this.state.password) {
      this.setState({ passwordHelperText: 'Incorrect passwrod.', passwordErr: true });
      return true;
    }
    return false;
  };

  render() {
    return (
      <Fragment>
        <TextField value={this.state.name} onChange={this.handleFullNameChange} error={this.state.nameErr} 
          autoFocus margin="dense" id="full-name" label="Full Name" type="text" required
          style={styles.textWidth}
        />
        <TextField value={this.state.password} onChange={this.handlePasswordChange} error={this.state.passwordErr}
          margin="dense" id="password-register" label="Password" type="password" required
          style={styles.textWidth}
          helperText={this.state.passwordHelperText}
        />
        <TextField value={this.state.newPassword} onChange={this.handleNewPasswordChange} error={this.state.newPasswordErr}
          margin="dense" id="new-password-register" label="New Password" type="password"
          style={styles.textWidth}
          helperText={this.state.newPasswordHelperText}
        />
        <TextField value={this.state.newPasswordConfirm} onChange={this.handleNewPasswordConfirmationChange} error={this.state.newPasswordConfirmErr}
          margin="dense" id="new-password-confirm-register" label="New Password Confirmation" type="password"
          style={styles.textWidth}
          helperText={this.state.newPasswordConfirmHelperText}
        />
        <TextField value={this.state.address} onChange={this.handleAddressChange} error={this.state.addressErr}
          margin="dense" id="new-address-register" label="Shipping Address" type="text"
          style={styles.textWidth}
        />
        <Select
          style={{ marginLeft: 10 }}
          value={this.state.stateSelected}
          inputProps={{
            name: 'stateSelected'
          }}
          onChange={this.handleChangeSelectedState}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'TX'}>TX</MenuItem>
        </Select>
        <Button
          onClick={this.handleDeleteBtnAction}
          variant="contained" color="secondary" style={ styles.deleteBtn }
        >
          Delete Account
          <DeleteIcon />
        </Button>
        
        <DialogActions>
          <div ref="successDiv" style={styles.successMessage}>{this.state.successMessage}</div>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
          <Button onClick={this.handleUpdateClick} color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
   
      </Fragment>
    )
  }
}

const mapStateToProps = (currentPageState) => {
  return {
    state: currentPageState,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateLoggedInUser: (user) => dispatch(updateLoggedInUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);