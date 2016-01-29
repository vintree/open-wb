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
		this.state = {
			nick: {
				name: 'rwerew',
				placeholder: '怎么称呼您？',
				scope: [1, 18]
			}
		}
	}

	sexChange(e) {
		const value = e.target.value;
		document.querySelector('.baseData-sex').innerHTML = value;
	}

	nickChange(e) {
		const nick = this.state.nick;
		const value = e.target.value;
		const len = this.resultEn(value) + this.resultCn(value);
		const min = this.state.nick.scope[0];
		const max = this.state.nick.scope[1];
		if(len < max) {
			nick.name = value;
			this.setState({
				nick: nick
			});
		}
	}

	resultEn(value) {
		const str = value.match(/\w{1}/g);
		if(str) {
			return str.length;
		}
		return 0;
	}

	resultCn(value) {
		const str = value.match(/[\u4e00-\u9fa5]{1}/g);
		if(str) {
			return str.length * 2;
		}
		return 0;
	}

	render() {
		return (
			<div id="baseData-main">
				<div id="baseData-head">请问您是<span id="baseData-head-tag">?</span></div>
				<HeadImg />
				<div id="baseData-body">
					<div className="baseData-unit">
						<input type="text" placeholder={this.state.nick.placeholder} value={this.state.nick.name} onChange={ e => { this.nickChange(e) }}></input>
					</div>
					<div className="baseData-unit">
						<div className="baseData-sex">男</div>
						<select onChange={ e => {this.sexChange(e)} }>
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





