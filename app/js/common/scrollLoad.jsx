require('../../sass/scrollLoad.scss');
import React from 'react';

export default class ScrollLoad extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div id="scrollLoad">
				<div id="scrollLoad-tx">加载更多</div>
			</div>
		)
	}
}