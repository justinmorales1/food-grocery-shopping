import React from 'react';
import PropTypes from 'prop-types';
import { Search } from '@material-ui/icons';
import { TextField, InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';
import { searchPageState } from './../../../Actions/SearchAction';
import { searchMainState } from './../../../Actions/MainPageAction';
import PAGESTATE from './../../../Constants/flowstates';

const styles = {
  searchText: {
    padding: 2,
    position: 'relative',
    backgroundColor: 'white'
  }
};

class SearchBar extends React.Component {
  handleChange = search => event => {
    this.props.searchPageState({
      [search]: event.target.value
    });
  };

  render() {
    console.log('The search state is ');
    console.log(this.props);
    return (
      <TextField
        onChange={this.handleChange('name')}
        style={styles.searchText}
        placeholder='Search'
        InputProps={{
          startAdornment: (
            <InputAdornment
              onClick={this.props.searchMainState}
              position='start'
            >
              <Search />
            </InputAdornment>
          )
        }}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchPageState: click => dispatch(searchPageState(click)),
    searchMainState: () => dispatch(searchMainState('SEARCH_ACTION'))
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
