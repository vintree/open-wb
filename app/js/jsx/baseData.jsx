require('../../sass/baseData.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';

import autoFont from '../temp/autoFont.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';


autoFont.init();
InjectTapEventPlugin();

class HeadImg extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vars: props.vars,
			img: {
				url: path + 'img/defaultHead@3x.png'
			}
		}
	}

	imgChange(e) {
		const fileNode = e.target;
		const imgData = this.state.img;
		if(fileNode.files) {
			if(window.FileReader) {
				let reader = new FileReader();
				reader.onload = (e1) => {
					console.log(e1);
					imgData.url = e1.target.result;
					this.setState({
						img: imgData
					});
				}
				reader.readAsDataURL(fileNode.files[0]);
			}
		}
	}
	render() {
		return (
			<div id="baseData-headImg">
				<img src={this.state.img.url} />
				<input type="file" multiple="multiple" accept="image/jpg,image/png,image/jpeg"
 onChange= { (e) => {this.imgChange(e)} } />
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
		var cf = new _config;
		this.state = {
			vars: cf.vars(),
			nick: {
				name: '',
				placeholder: '怎么称呼您？',
				scope: [1, 18]
			},
			next: {
				url: path + 'img/next@3x.png'
			},
			cityList: []
		}
		this.initCity();
	}

	initCity() {
		const apiPath = this.state.vars.apiPath;
		var url = apiPath + 'zuji/city.json';
		url = FormatAjax.get(url);
		Superagent.get(url).end((err, res) => {
			if(res.status === 200) {
				var data = JSON.parse(Unicode.toHex(res.text));
				this.setState({
					cityList: data.data.china
				});
			}
		});
	}

	sexChange(e) {
		const value = e.target.value;
		document.querySelector('#baseData-sex').innerHTML = value;
	}

	cityChange(e) {
		const value = e.target.value;
		document.querySelector('#baseData-city').innerHTML = value;
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

	nexts() {
		// const apiPath = this.state.vars.apiPath;
		// var url = apiPath + 'zuji/city.json';
		// url = FormatAjax.get(url);
		// Superagent.get(url).end((err, res) => {
		// 	if(res.status === 200) {
		// 		var data = JSON.parse(Unicode.toHex(res.text));
		// 		this.setState({
		// 			cityList: data.data.china
		// 		});
		// 	}
		// });
	}

	render() {

		const cityList = this.state.cityList.map( (v, ix) => {
			return (
				<option key={v.id} value={v.city}>{v.city}</option>
			);
		});

		return (
			<div id="baseData-main">
				<div id="baseData-head">请问您是<span id="baseData-head-tag">?</span></div>
				<HeadImg vars={this.state.vars}/>
				<div id="baseData-body">
					<div className="baseData-unit">
						<input type="text" placeholder={this.state.nick.placeholder} value={this.state.nick.name} onChange={ e => { this.nickChange(e) }}></input>
					</div>
					<div className="baseData-unit">
						<div id="baseData-sex" className="baseData-tx">男</div>
						<select onChange={ e => {this.sexChange(e)} }>
							<option>男</option>
							<option>女</option>
						</select>
					</div>
					<div className="baseData-unit">
						<div id="baseData-city" className="baseData-tx">北京</div>
						<select onChange={ e => {this.cityChange(e)} }>
							{cityList}
						</select>
					</div>
				</div>
				<div id="baseData-foot" onTouchTap={ e => {this.nexts(e)} }>
					<img src={this.state.next.url} />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.querySelector('#baseData-content'));





