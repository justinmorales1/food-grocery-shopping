import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Button,
  Input,
  TextField
} from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
import { removeItem } from '../../../../Actions/RemoveItemsFromCart';
import groceryList from '../../../../groceryList.json';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    minWidth: 700
  },
  totalButton: {
    float: 'right',
    pointerEvents: 'none',
    cursor: 'initial',
    width: '100%'
  },
  deleteButton: {
    display: 'inline',
    position: 'relative',
    color: 'red',
    cursor: 'pointer',
    top: 7,
    left: -10
  },
  foodItem: {
    display: 'inline'
  }
};

class FoodTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemObjects: props.itemObjects,
      selectedNumberOfItemsPerGame: props.selectedNumberOfItemsPerGame,
      productsWithCoupons: groceryList.filter(grocery => grocery.coupon),
      couponDiscountsApplied: props.couponDiscountsApplied,
      couponHasError: false,
      couponHelperText: '',
      couponCodeValue: ''
    };
  }

  handleSelectChange = (itemIndex, e) => {
    this.props.updateNumberOfItemsForGame(itemIndex, e.target.value);
    this.updateDiscountPrices();
    this.forceUpdate();
  };

  getPriceBasedOnTotalItems = (price, itemIndex) => {
    const priceFloat = parseFloat(price);
    let total = priceFloat * this.state.selectedNumberOfItemsPerGame[itemIndex];
    return '$' + total.toFixed(2);
  };

  getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < this.state.itemObjects.length; i++) {
      const price = this.state.itemObjects[i].price;
      const priceFloat = parseFloat(price);
      let totalForGame =
        priceFloat * this.state.selectedNumberOfItemsPerGame[i];
      totalPrice += totalForGame;
    }
    return totalPrice;
  };

  getTotalPriceWithDiscounts = () => {
    let totalPriceWithDiscounts = this.getTotalPrice();

    this.state.couponDiscountsApplied.forEach(prod => {
      if (prod.coupon.applied) {
        totalPriceWithDiscounts -= parseInt(prod.coupon.priceOff);
      }
    });

    return totalPriceWithDiscounts.toFixed(2);
  };

  clearCodeValueAndErrors = () => {
    this.setState({
      couponCodeValue: '',
      couponHelperText: '',
      couponHasError: false
    });
  };

  handleCouponAddition = () => {
    if (this.state.couponCodeValue == '') {
      this.clearCodeValueAndErrors();
    }

    const availableCoupons = this.state.productsWithCoupons.map(
      prod => prod.coupon.code
    );
    const couponsInCart = this.state.itemObjects
      .filter(prod => prod.coupon)
      .map(prod => prod.coupon.code);
    const couponsApplied = this.state.couponDiscountsApplied.map(
      prod => prod.coupon.code
    );

    if (
      !availableCoupons.includes(this.state.couponCodeValue) ||
      !couponsInCart.includes(this.state.couponCodeValue)
    ) {
      this.setState({
        couponHasError: true,
        couponHelperText:
          'Coupon code does not exists or cannot be applied to the current items'
      });
      return;
    }
    if (couponsApplied.includes(this.state.couponCodeValue)) {
      this.setState({
        couponHasError: true,
        couponHelperText: 'Coupon code already applied'
      });
      return;
    }

    this.updateDiscountPrices();
    this.clearCodeValueAndErrors();
    this.forceUpdate();
  };

  updateDiscountPrices = () => {
    this.state.itemObjects.forEach((prod, index) => {
      if (
        prod.coupon &&
        (prod.coupon.code == this.state.couponCodeValue || prod.coupon.applied)
      ) {
        if (prod.coupon.applied) return;

        prod.coupon.applied = false;
        if (
          parseInt(prod.coupon.minQty) <=
          this.state.selectedNumberOfItemsPerGame[index]
        ) {
          prod.coupon.applied = true;
        }

        let tmp = this.state.itemObjects;
        tmp[index] = prod;

        this.setState({
          itemObjects: [...tmp]
        });
        this.props.addCouponDiscountsApplied(prod);
      }
    });
  };

  handleCouponTextFieldChange = e => {
    this.setState({
      couponCodeValue: e.target.value
    });
  };

  handleRemoveGameFromCard = gameIndex => {
    this.props.removeItem(gameIndex);
  };

  render() {
    return (
      <div>
        <Paper style={styles.root}>
          <Table style={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell> Title</TableCell>
                <TableCell numeric> Price</TableCell>
                <TableCell numeric> Quantity</TableCell>
                <TableCell numeric> Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.itemObjects.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <div
                        style={styles.deleteButton}
                        onClick={() => this.handleRemoveGameFromCard(i)}
                      >
                        <RemoveCircle />
                      </div>
                      <div style={styles.foodItem}>{item.title}</div>
                    </TableCell>
                    <TableCell numeric>{item.price}</TableCell>
                    <TableCell numeric>
                      <Select
                        value={this.state.selectedNumberOfItemsPerGame[i]}
                        onChange={e => this.handleSelectChange(i, e)}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell numeric>
                      {' '}
                      {this.getPriceBasedOnTotalItems(item.price, i)}{' '}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {this.state.couponDiscountsApplied.length > 0 && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> For Item</TableCell>
                  <TableCell> After Quantity</TableCell>
                  <TableCell> Applied</TableCell>
                  <TableCell> Discount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.couponDiscountsApplied.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.coupon.minQty}</TableCell>
                      <TableCell>
                        {item.coupon.applied ? 'Yes' : 'False'}
                      </TableCell>
                      <TableCell>-${item.coupon.priceOff}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}

          <Button
            variant='contained'
            size='medium'
            style={styles.totalButton}
            color='default'
          >
            <div style={{ position: 'absolute', left: 845 }}>
              ${this.getTotalPriceWithDiscounts()}
            </div>
          </Button>
        </Paper>

        <TextField
          style={{ marginTop: 15 }}
          label='Coupon Code'
          variant='outlined'
          value={this.state.couponCodeValue}
          onChange={this.handleCouponTextFieldChange}
          error={this.state.couponHasError}
          helperText={this.state.couponHelperText}
        />
        <Button
          style={{ marginLeft: 5 }}
          variant='contained'
          color='primary'
          onClick={this.handleCouponAddition}
        >
          Apply
        </Button>
      </div>
    );
  }
}

let mapStateToProps = dispatch => {
  return {
    removeItem: itemIndex => dispatch(removeItem(itemIndex))
  };
};

export default connect(null, mapStateToProps)(FoodTable);
