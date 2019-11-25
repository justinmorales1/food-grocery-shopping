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
  Button
} from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';
import { removeItem } from '../../../../Actions/RemoveItemsFromCart';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    minWidth: 700,
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
    }
  }

  handleSelectChange = (itemIndex, e) => {
    this.props.updateNumberOfItemsForGame(itemIndex, e.target.value);
    this.forceUpdate();
  };

  getPriceBasedOnTotalItems = (price, itemIndex) => {
    let priceFloat = parseFloat(price.slice(1, price.length));
    let total = priceFloat * this.props.selectedNumberOfItemsPerGame[itemIndex];
    return '$' + total.toFixed(2);
  };

  getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < this.props.itemObjects.length; i++) {
      let price = this.props.itemObjects[i].price;
      let priceFloat = parseFloat(price.slice(1, price.length));
      let totalForGame = priceFloat * this.props.selectedNumberOfItemsPerGame[i];
      totalPrice += totalForGame;
    }
    return totalPrice.toFixed(2);
  };

  handleRemoveGameFromCard = (gameIndex) => {
    this.props.removeItem(gameIndex);
  };

  render () {
    const itemObjects = this.props.itemObjects;
    const selectedNumberOfItemsPerGame = this.props.selectedNumberOfItemsPerGame;

    return (
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
            {itemObjects.map((item, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>
                    <div style={styles.deleteButton} onClick={() => this.handleRemoveGameFromCard(i)}>
                      <RemoveCircle />
                    </div>
                    <div style={styles.foodItem}>
                      {item.title}
                    </div>
                  </TableCell>
                  <TableCell numeric>{item.price}</TableCell>
                  <TableCell numeric> 
                    <Select
                      value={selectedNumberOfItemsPerGame[i]}
                      onChange={ (e) => this.handleSelectChange(i, e)}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell numeric> {this.getPriceBasedOnTotalItems(item.price, i)} </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Button variant="contained" size="medium" style={styles.totalButton} color="default">
          <div style={{ position: 'absolute',  left: 845 }}>${this.getTotalPrice()}</div>
        </Button>
      </Paper>
    );
  }
}

let mapStateToProps = (dispatch) => {
  return {
    removeItem: (itemIndex) => dispatch(removeItem(itemIndex)) 
  }
};

export default connect(null, mapStateToProps)(FoodTable);