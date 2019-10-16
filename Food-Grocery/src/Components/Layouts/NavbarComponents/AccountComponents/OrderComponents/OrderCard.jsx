import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import OrderCardMenu from './OrderCardMenu';

const styles = {
  card: {
    float: 'left',
    border: 1,
    margin: 2
  },
  media: {
    height: '180px',
    paddingTop: '56.25%', // 16:9
  },
  gameTitleStyle: {
    textDecoration: 'underline',
    fontSize: 17,
    cursor: 'pointer',
    color: '#3A4BAD'
  },
  gamePrice: {
    fontSize: 14,
    color: '#B12805'
  },
  button: {
    fontSize: 10
  },
  gameOrderPlacedOn: {
    fontSize: 14,
    marginTop: 5
  }
};

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Card style={styles.card}>
          <CardMedia
            style={styles.media}
            image={this.props.imgURL}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h4" style={styles.gameTitleStyle}>
              {this.props.gameTitle}
            </Typography>
            <div style={styles.gameOrderPlacedOn}>
              Price: <span style={styles.gamePrice}> {this.props.price} </span>
            </div>
            <div style={styles.gameOrderPlacedOn}>
              Order placed on:
              <span style={styles.gamePrice}>
                {' ' + this.props.orderPlacedOn}
              </span>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" variant="contained" style={styles.button}>
              Buy it again
            </Button>
            <Button size="small" color="primary" style={styles.button}>
              Track package
            </Button>
            <OrderCardMenu fontSize={styles.button.fontSize} style={styles.button}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default OrderCard;