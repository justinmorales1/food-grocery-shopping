import React from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import FoodTable from './FoodTable';
import UserPaymentInfo from './UserPaymentInfo';
import PaymentReviewInfo from './PaymentReviewInfo';
import { clearCart } from '../../../../Actions/ClearCart';
import { updateLoggedInUser } from '../../../../Actions/LoggedInUserAction';
import { currentUserHandler } from '../../../../Reducers/LoggedInUserReducer';
import { LinearProgress } from '@material-ui/core';

const styles = {
  root: {
    width: '100%'
  },
  button: {
    float: 'right',
    marginLeft: 5
  },
  progress: {
    position: 'absolute',
    left: '50%',
    top: '50%'
  }
};

let getSteps = () => {
  return [
    'Preview order',
    'Confirm shipping and payment settings',
    'Review settings'
  ];
};

class CartProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      email: 'jdoe@email.com',
      showProgress: true,
      selectedNumberOfItemsPerGrocery: [],
      couponDiscountsApplied: [],
      time: '06:00 PM',
      date: '2019-12-12'
    };
  }

  componentWillMount = () => {
    this.createEmptyNumberOfGroceriesArr();
    this.setLoggedInUserData();
  };

  setLoggedInUserData = () => {
    let currentUserHandler = this.props.state.currentUserHandler;
    if (currentUserHandler.isLoggedIn) {
      let user = currentUserHandler.user;
      this.setState({ email: user.email });
    }
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });

    if (activeStep == getSteps().length - 1) {
      setTimeout(() => {
        this.setState({ showProgress: false });
      }, 2000);
    }
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
    this.handleSaveOrdersToUser();
    this.props.clearCart();
    this.props.closeDialog();
  };

  handleSaveOrdersToUser = () => {
    if (this.props.state.currentUserHandler.isLoggedIn) {
      let itemsInShoppingCart = this.props.state.addToCartReducer.items;
      let user = this.props.state.currentUserHandler.user;
      if (!user.userOrders) {
        user.userOrders = [];
      }
      user.userOrders = itemsInShoppingCart.concat(user.userOrders);
      this.props.updateLoggedInUser(user);
    }
  };

  createEmptyNumberOfGroceriesArr = () => {
    let arr = [];
    for (let i = 0; i < this.props.itemObjects.length; i++) {
      arr.push(1);
    }
    this.setState({ selectedNumberOfItemsPerGrocery: arr });
  };

  updateNumberOfItemsForGrocery = (itemIndex, value) => {
    let arr = this.state.selectedNumberOfItemsPerGrocery;
    arr[itemIndex] = value;
    this.setState({ selectedNumberOfItemsPerGrocery: arr });
  };

  addCouponDiscountsApplied = prod => {
    let arr = this.state.couponDiscountsApplied;
    arr.push(prod);
    this.setState({ couponDiscountsApplied: arr });
  };

  handleTimeChange = time => {
    const t = new Date(time);

    // Store hour:minute:seconds
    this.setState({ time: t.toLocaleTimeString('en-US') });
  };

  handleDateChange = date => {
    console.log(date);
    this.setState({ date: date });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const itemObjects = this.props.itemObjects;

    return (
      <div style={styles.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography component={'div'} style={styles.instructions}>
                {this.state.showProgress ? (
                  <CircularProgress style={styles.progress} size={50} />
                ) : (
                  <div>
                    Thanks for shopping with us, we will email to
                    <span style={{ fontWeight: 'bold' }}>
                      {' '}
                      {this.state.email}{' '}
                    </span>
                    which should contain the tracking number once we ship your
                    order.
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <span style={{ fontWeight: 'bold' }}>
                        Delivery Date:{' '}
                      </span>
                      {this.state.date}
                    </div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <span style={{ fontWeight: 'bold' }}>
                        Delivery Time:{' '}
                      </span>
                      {this.state.time}
                    </div>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                      <span style={{ fontWeight: 'bold' }}>
                        {' '}
                        Order Status:{' '}
                      </span>
                      Received
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <LinearProgress variant='determinate' value={20} />
                    </div>
                  </div>
                )}
              </Typography>
              <Button onClick={this.handleReset} style={styles.button}>
                Done
              </Button>
            </div>
          ) : (
            <div>
              {this.state.activeStep == 0 && (
                <div>
                  <FoodTable
                    itemObjects={itemObjects}
                    selectedNumberOfItemsPerGrocery={
                      this.state.selectedNumberOfItemsPerGrocery
                    }
                    couponDiscountsApplied={this.state.couponDiscountsApplied}
                    updateNumberOfItemsForGrocery={
                      this.updateNumberOfItemsForGrocery
                    }
                    addCouponDiscountsApplied={this.addCouponDiscountsApplied}
                  />
                </div>
              )}

              {this.state.activeStep == 1 && <UserPaymentInfo />}

              {this.state.activeStep == 2 && (
                <PaymentReviewInfo
                  itemObjects={itemObjects}
                  couponDiscountsApplied={this.state.couponDiscountsApplied}
                  selectedNumberOfItemsPerGrocery={
                    this.state.selectedNumberOfItemsPerGrocery
                  }
                  handleTimeChange={this.handleTimeChange}
                  handleDateChange={this.handleDateChange}
                />
              )}
              <div style={{ marginTop: 30 }}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={this.handleNext}
                  style={styles.button}
                >
                  {activeStep === steps.length - 1 ? 'Submit Payment' : 'Next'}
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  style={styles.button}
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = currentPageState => {
  return {
    state: currentPageState
  };
};

let mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(clearCart()),
    updateLoggedInUser: user => dispatch(updateLoggedInUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProgress);
