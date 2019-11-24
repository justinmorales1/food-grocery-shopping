import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Add, Info} from '@material-ui/icons';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


  
const styles = {
  button: {
    position: 'absolute',
    bottom: '5px',
    backgroundColor: '#1D8BF1',
    color: '#FFF',
    width: '40%'
  }

};

class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,   
    };
  }
  

  handleClickOpen = () => {
    console.log(this.props.youtubeId); 
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

 
  


  render() {
    const classes = this.props;   
    let styles = this.props.styles;
    const opts = {
      height: '390',
      width: '550',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1
      }
    };
    return (

  <div>
    <Button onClick={(e) => this.handleClickOpen(classes.Title,classes.price)} className={this.props.classButtonName} >
    MORE
    <Info style={{ marginLeft: 5 }} width='auto'/>
  </Button>
  <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.Title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.Description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="#1D8BF1" >
              Close
            </Button>
          </DialogActions>
        </Dialog>
    </div>
 


    );
  }
}
GameInfo.propTypes = {
  classes: PropTypes.object.isRequired, 
};

export default GameInfo;