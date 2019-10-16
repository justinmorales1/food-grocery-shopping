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
import { Help } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,   
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

 
  


  render() {
    let styles = this.props.styles;
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained" size="small" color="inherit" style={styles.button}>
          FAQ<Help style={styles.icon} />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Frequently Asked Questions</DialogTitle>
          <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is your return policy? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
        Most products ordered from Swagoo which are returned no more than 30 days from the date on the packing slip, can be returned directly to our warehouse, subject to certain guidelines. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Where's my order? How do I track my order? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          To track or update an order, visit the Order History page and sign in. A list of recent orders will be displayed. Click on the order number to review order details, tracking numbers and available self-service options. 
          Depending on where your order is in the processing cycle you may be able to update the credit card information, change the shipping service level, or cancel an order.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >What do I do if my order is under review?  </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          In order to protect our customers, some orders are held for review prior to being processed. 
          Most orders held for review are released within 24 hours, and if we need any additional information from you, we will call or email you.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >What is my gift card balance? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          If you would like to inquire about the balance on your Swagoo gift card. Please Call Us. Toll Free 1-800-SWAGOO.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Still have a question? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Email us at help@swagoo.com or call us at 
          1-800-SWAGOO
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FAQ;