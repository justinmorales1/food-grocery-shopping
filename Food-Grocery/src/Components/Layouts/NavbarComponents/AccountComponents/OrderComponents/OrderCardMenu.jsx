import React from 'react';
import {
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import { MoreVert as MoreVertIcon} from '@material-ui/icons';

const options = [
  'Order details',
  'Return items',
  'Product review',
  'Archive order'
];

const ITEM_HEIGHT = 35;

class OrderCardMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} onClick={this.handleClose} style={{ fontSize: this.props.fontSize }}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default OrderCardMenu;