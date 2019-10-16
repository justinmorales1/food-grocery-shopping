import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import {connect } from 'react-redux'
import {rpgClick,shooterClick,sportsClick,strategyClick,adventureClick, racingClick,allGenresClick} from './../Actions/GenreButtonAction'
import GENRESTATE from './../Constants/genreButtonStates'

const styles = {
  root: {
    color: '#fff',
    backgroundColor: '#2196F3',
    borderBottomLeftRadius: '15%',
    borderBottomRightRadius: '15%',
  },
};

class GenreButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  handleChange = (event, selectedTab) => {
		this.setState({ selectedTab });
	};
      
  render() {
    return (
      <div>
        <Tabs
          value={this.state.selectedTab} onChange={this.handleChange}
          style={styles.root}
          indicatorColor="secondary"
          centered
        >
          <Tab label="all genres" onClick={this.props.allGenresClick} />
          <Tab label="rpg" onClick={this.props.rpgClick} />
          <Tab label="shooter" onClick={this.props.shooterClick} />
          <Tab label="sports" onClick={this.props.sportsClick} />
          <Tab label="strategy" onClick={this.props.strategyClick} />
          <Tab label="adventure" onClick={this.props.adventureClick} />
          <Tab label="racing" onClick={this.props.racingClick} />
        </Tabs>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
      rpgClick: () => dispatch(rpgClick(GENRESTATE.RPGBUTTON)),
      shooterClick: () => dispatch(shooterClick(GENRESTATE.SHOOTERBUTTON)),
      sportsClick: () => dispatch(sportsClick(GENRESTATE.SPORTSPAGEBUTTON)),
      strategyClick: () => dispatch(strategyClick(GENRESTATE.STRATEGYBUTTON)),
      adventureClick: () => dispatch(adventureClick(GENRESTATE.ADVENTUREBUTTON)),
      racingClick: () => dispatch(racingClick(GENRESTATE.RACINGBUTTON)),
      allGenresClick: () => dispatch(allGenresClick(GENRESTATE.ALLGENRESBUTTON))
    }
}

export default connect(null,mapDispatchToProps)(GenreButtons);