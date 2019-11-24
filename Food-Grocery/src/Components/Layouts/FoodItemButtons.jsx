import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux'
import { dairyClick,seaFoodClick,nonperishableClick,produceClick,meatClick, allFoodsClick, preferenceClick} from '../../Actions/MainButtonAction';
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
				//category = "produce", "dairy", "meat", "seafood", "non-perishables", "drinks"
				<Tab label="All" onClick={this.props.allFoodClick} />
				<Tab label="Produce" onClick={this.props.produceClick} />
				<Tab label="Dairy" onClick={this.props.dairyClick} />
				<Tab label="Meat" onClick={this.props.meatClick} />
				<Tab label="Seafood" onClick={this.props.seafoodClick} />
				<Tab label="Non-Perishables" onClick={this.props.nonPerishableClick} />
				<Tab label="Preferences" onClick={this.props.preferenceClick} />
			</Tabs>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		preferenceClick: () => dispatch(preferenceClick(FLOW_STATE.PREFERENCEBUTTON)),
    	allFoodClick: () => dispatch(allFoodsClick(FLOW_STATE.ALL_FOOD_BUTTON)),
		produceClick: () => dispatch(produceClick(FLOW_STATE.PRODUCE_PAGE_BUTTON)),
		dairyClick: () => dispatch(dairyClick(FLOW_STATE.DAIRY_PAGE_BUTTON)),
		meatClick: () => dispatch(meatClick(FLOW_STATE.MEAT_PAGE_BUTTON)),
		seafoodClick: () => dispatch(seaFoodClick(FLOW_STATE.SEAFOOD_PAGE_BUTTON)),
		nonPerishableClick: () => dispatch(nonperishableClick(FLOW_STATE.NON_PERSIHABLES_PAGE_BUTTON)),

	}
}

export default connect(null,mapDispatchToProps)(ConsoleButtons);

