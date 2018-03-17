import 'babel-polyfill';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/teamActions';

class Team extends Component {
	componentDidMount() {
		this.props.onFetch();
	}
	render() {
		let team = null;

		if (this.props.success) {
			team = this.props.team.members.map(member => {
				return <li key={member._id}>{member.name}</li>;
			});
		}
		return <ul>{team}</ul>;
	}
}

const mapStateToProps = state => {
	return {
		loading: state.team.loading,
		error: state.team.error,
		success: state.team.success,
		team: state.team.team
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetch: data => dispatch(actions.fetch())
	};
};

const loadData = store => {
	return store.dispatch(actions.fetch());
};

export default {
	loadData,
	component: connect(mapStateToProps, mapDispatchToProps)(Team)
};
