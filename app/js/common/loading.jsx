require('../../sass/loading.scss');
import React from 'react';

import Vars from '../temp/vars.js';

class Local extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return(
			<div id='loading-body'>
				<div id='loading-local' style={{backgroundImage: this.props.img}}></div>
			</div>
		);
	}
}


export default class Loading extends React.Component {
	constructor(props) {
		super(props);

		console.log(Vars.path('staticPath'));

		this.state = {
			imgLoading: 'url('+ Vars.path('staticPath') + 'img/f110.png)'
		}
	}
	render() {
		return (
			<Local img={this.state.imgLoading}></Local>
			// {local}
		);
	}
} 