import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux'
import { playStationClick,computerClick,handHeldClick,xBoxClick,nintendoClick, allGamesClick, preferenceClick} from '../../Actions/MainButtonAction';
import FLOW_STATE from '../../Constants/buttonStates'

const tabStyle = {
	Tabs: {
		margin: '0 10px 5px 10px'
	}
};

class ConsoleButtons extends React.Component {

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


			<Tabs
       			value={this.state.selectedTab} onChange={this.handleChange}
				style={tabStyle.Tabs}
				indicatorColor="primary"
				textColor="primary"
				fullWidth
				centered
			>

				<Tab label="All" onClick={this.props.allGamesClick} />
				<Tab label="Xbox One" onClick={this.props.xBoxClick} />
				<Tab label="PS4" onClick={this.props.playStationClick} />
				<Tab label="Wii U" onClick={this.props.nintendoClick} />
				<Tab label="PC" onClick={this.props.computerClick} />
				<Tab label="Switch" onClick={this.props.handHeldClick} />
				<Tab label="Preferences" onClick={this.props.preferenceClick} />
			</Tabs>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("The mapStateToProps in ConsoleButtons is");
	return {
		state: state,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		preferenceClick: () => dispatch(preferenceClick(FLOW_STATE.PREFERENCEBUTTON)),
    	allGamesClick: () => dispatch(allGamesClick(FLOW_STATE.ALLGAMESPAGEBUTTON)),
		xBoxClick: () => dispatch(xBoxClick(FLOW_STATE.XBOXPAGEBUTTON)),
		playStationClick: () => dispatch(playStationClick(FLOW_STATE.PS4PAGEBUTTON)),
		nintendoClick: () => dispatch(nintendoClick(FLOW_STATE.NINTENDOBUTTON)),
		computerClick: () => dispatch(computerClick(FLOW_STATE.COMPUTERPAGEBUTTON)),
		handHeldClick: () => dispatch(handHeldClick(FLOW_STATE.HANDHELDPAGEBUTTON)),

	}
}

export default connect(null,mapDispatchToProps)(ConsoleButtons);

