import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {AddShoppingCart as Add} from '@material-ui/icons';
import { addItem } from '../Actions/AddItemsToCart';
import Snackbar from '@material-ui/core/Snackbar';
import GameInfo from './FoodInformation'
import MySnackbarContent from './CustomSnackbar';
  
const styles = {
  card: {
    position: 'relative',
    width: '17%',
    margin: '5px'
  },
  img: {
    width: '100%',
    height: '325px'
  },
  media: {
    width: '100%',
    maxWidth:'100%',
  },
  button: {
    position: 'absolute',
    bottom: '5px',
    backgroundColor: '#1D8BF1',
    color: '#FFF',
    width: '40%'
  },
  Title: {
    padding: 5,
    height: 50,
    maxHeight: 150,
    color: '#3748AC'
  },
  Price: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#B12805',
    fontSize: 27
  },
  More: {
    padding: 5,
  },
  Cart: {
    padding: 5,
  },
};

class FoodCard extends React.Component{
  state = {
    open: false,
   gamesTitlesArray: []
  };

   isNewGameInCart = (title) => {
    for (let i = 0; i < this.props.state.addToCartReducer.items.length; i++) {
      if (this.props.state.addToCartReducer.items[i].title === title) {
        return false;
      }
    }
    return true;
  };
 
  handleClick = () => {
    let itemObj = {
      title: this.props.Title,
      price: this.props.price,
      url: this.props.imgURL
    }
    this.props.addItem(itemObj);

    console.log(this.props.youtubeId)

    if (this.isNewGameInCart(this.props.Title)) {
      this.setState({ open: true });
    }
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const classes = this.props;    
  
    return (
  <React.Fragment>
 <Card className={classes.classes.card}>
        <CardMedia className={classes.classes.media}>
          <img src={classes.imgURL} className={classes.classes.img}/>
        </CardMedia>
        <CardContent >
          <Typography  gutterBottom style={styles.Title} align='center'>
            <h2>{classes.Title}</h2>
          </Typography>
        </CardContent>
        <CardContent >
          <Typography gutterBottom  style={styles.Price} align='center'>
            <div>
              <img style={{ width: 27, height: 27 }} src="https://cdn2.iconfinder.com/data/icons/e-commerce-4/256/Price_Tag-512.png" />
              {classes.price.slice(1, 3)}
              <div style={{ fontSize: 17, display: 'inline', position: 'relative', bottom: 12 }}>{classes.price.slice(4, classes.price.length)}</div>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <Grid  container spacing='12'>
            <Grid item style={styles.More} xs='12' sm='6'>
              <GameInfo price={this.props.price} imgURL={this.props.imgURL} Title={this.props.Title} Description={this.props.Description} youtubeId={this.props.youtubeId} classButtonName={classes.classes.button} classImageName = {classes.classes.img}/>
            </Grid>

            <Grid item style={styles.Cart} xs='12' sm='6'>
              <Button onClick={(e) => this.handleClick(classes.Title,classes.price)} className={classes.classes.button} >
                cart
                <Add style={{ marginLeft: 5 }} width='auto'/>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={1000}
          onClose={this.handleClose}
        >
          <MySnackbarContent
            onClose={this.handleClose}
            variant="success"
            message="Game was successfully added to cart!"
          />
        </Snackbar>
      </React.Fragment>
    );
  }
}

FoodCard.propTypes = {
  classes: PropTypes.object.isRequired, 
};

function mapDispatchToProps(dispatch) {
    return {
      addItem: (item) => dispatch(addItem(item))
    }
}

const mapStateToProps = (currentPageState) => {

  return {
      state: currentPageState,
  };
};

export default compose(withStyles(styles), connect(mapStateToProps,mapDispatchToProps))(FoodCard);