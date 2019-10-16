import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { SnackbarContent, IconButton } from '@material-ui/core';
import {Close as CloseIcon, CheckCircle as CheckCircleIcon } from '@material-ui/icons';
import green from '@material-ui/core/colors/green';

const variantIcon = {
    success: CheckCircleIcon
};
const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

class MySnackbarContent extends React.Component {
    
    constructor (props) {
        super(props);
    }
  
    render () {
        const { classes, className, message, onClose, variant, ...other } = this.props;
        const Icon = variantIcon[variant];
        return (
          <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={classNames(classes.icon, classes.iconVariant)} />
                {message}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={onClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            ]}
            {...other}
          />
        );
    } 
  }

  MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  };

  export default withStyles(styles)(MySnackbarContent);
  