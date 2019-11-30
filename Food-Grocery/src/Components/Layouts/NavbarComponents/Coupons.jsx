import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Grid,
  CardHeader
} from '@material-ui/core';
import { AttachMoney, ContentCopy } from '@material-ui/icons';
import groceryList from '../../../groceryList.json';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardTitle } from 'material-ui';

class Coupons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      productsWithCoupons: groceryList.filter(grocery => grocery.coupon)
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const styles = this.props.styles;
    const discountCard = grocery => {
      return (
        <Card style={{ maxWidth: 550 }}>
          <CardMedia
            style={{
              height: 150,
              width: 150,
              position: 'relative',
              left: '20%'
            }}
            image={grocery.url}
          />
          <CardContent>
            <Typography align='center'>
              <span
                style={{ marginRight: 10, fontWeight: 'bold', fontSize: 14 }}
              >
                Product:
              </span>
              {grocery.title}
            </Typography>
            <Typography align='center'>
              <span style={{ fontWeight: 'bold', fontSize: 14 }}>Code: </span>
              {grocery.coupon.code}
            </Typography>
          </CardContent>
        </Card>
      );
    };
    const productsWithCoupons = this.state.productsWithCoupons.map(
      (grocery, index) => {
        return (
          <Grid item xs={6} key={index}>
            {discountCard(grocery)}
          </Grid>
        );
      }
    );

    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          variant='contained'
          size='small'
          color='inherit'
          style={styles.button}
        >
          Coupons
          <AttachMoney style={styles.icon} />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Our Coupons</DialogTitle>
          <DialogContent>
            <Grid container spacing={16} alignContent='center'>
              {productsWithCoupons}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Coupons;
