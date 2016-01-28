require('../../sass/baseData.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

InjectTapEventPlugin();

class HeadImg extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					name: '怎么称呼您？',
					scope: [6, 10]
				},
				{
					name: '您的性别？',
					scope: [6, 10]
				},
				{
					name: '您的职业？',
					scope: [6, 10]
				},
				{
					name: '您的地址？',
					scope: [6, 10]
				},
			]
		}
	}
	render() {
		return (
			<div id="baseData-headImg">
				<img src="../img/defaultHead@3x.png" />
				<input type="file" />
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="baseData-main">
				<div id="baseData-head">请问您是<span id="baseData-head-tag">?</span></div>
				<HeadImg />
				<div id="baseData-body">
					<div className="baseData-unit">
						<input type="text" placeholder="怎么称呼您？"></input>
					</div>
					<div className="baseData-unit">
						<select placeholder="您的性别？">
							<option>男</option>
							<option>女</option>
						</select>
					</div>
					<div className="baseData-unit">
						<input type="text" placeholder="您的地址？"></input>
					</div>
				</div>
				<div id="baseData-foot">
					<img src="../img/next@3x.png" />
				</div>
			</div>
		)
	}
}

class BaseData extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Main />
			</div>
		)
	}
}

ReactDOM.render(<BaseData />, document.querySelector('#baseData-content'));





