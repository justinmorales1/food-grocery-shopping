import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  foodImage: {
    height: 150,
    width: 150
  },
  listContainer: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: '250px 250px 250px',
    justifyContent: 'center'
  }
};

class PaymentReviewInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      email: 'jdoe@email.com',
      address: '1600 Pennsylvania Ave',
      total: 0,
      couponDiscountsApplied: props.couponDiscountsApplied
    };
  }

  calculateTotalAmount = () => {
    let total = 0;
    let items = this.props.itemObjects;

    items.map((item, index) => {
      total +=
        parseFloat(item.price) * this.props.selectedNumberOfItemsPerGame[index];
    });
    this.state.couponDiscountsApplied.forEach(prod => {
      if (prod.coupon) {
        total -= parseInt(prod.coupon.priceOff);
      }
    });
    this.setState({ total: total.toFixed(2) });
  };

  setUserProps = () => {
    let currentUserHandler = this.props.state.currentUserHandler;
    if (currentUserHandler.isLoggedIn) {
      let user = currentUserHandler.user;
      this.setState({
        name: user.name,
        email: user.email,
        address: user.address
      });
    }
  };

  componentWillMount = () => {
    this.calculateTotalAmount();
    this.setUserProps();
  };

  render() {
    const itemObjects = this.props.itemObjects;

    return (
      <Paper elevation={2}>
        <Typography style={{ marginLeft: 15 }} variant='body2' gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 98 }}>Email: </span>{' '}
          {this.state.email}
        </Typography>
        <Typography style={{ marginLeft: 15 }} variant='body2' gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 15 }}>
            Shipping Address:
          </span>{' '}
          {this.state.address}
        </Typography>
        <Typography style={{ marginLeft: 15 }} variant='body2' gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 24 }}>
            Payment Method:
          </span>{' '}
          Credit Card (Visa)
        </Typography>
        <Typography style={{ marginLeft: 15 }} variant='body2' gutterBottom>
          <span style={{ fontWeight: 'bold' }}>Orders:</span>
        </Typography>
        <List>
          <div style={styles.listContainer}>
            {itemObjects.map((item, i) => {
              return (
                <ListItem key={i}>
                  <img style={styles.foodImage} src={item.url} />
                  <ListItemText
                    primary={item.title}
                    secondary={`Price: ${item.price} x${this.props.selectedNumberOfItemsPerGame[i]}`}
                  />
                </ListItem>
              );
            })}
          </div>
        </List>
        <Typography style={{ marginLeft: 15 }} variant='body2' gutterBottom>
          <span style={{ fontWeight: 'bold', marginRight: 104 }}>Total:</span>{' '}
          {`$${this.state.total}`}
        </Typography>
      </Paper>
    );
  }
}

const mapStateToProps = currentPageState => {
  return {
    state: currentPageState
  };
};

export default connect(mapStateToProps, null)(PaymentReviewInfo);
