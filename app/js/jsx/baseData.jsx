require('../../sass/baseData.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

import autoFont from '../temp/autoFont.js';

autoFont.init();
InjectTapEventPlugin();

class HeadImg extends React.Component {
	constructor() {
		super();
		this.state = {
			img: {
				url: '../img/defaultHead@3x.png'
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
		this.state = {
			nick: {
				name: '',
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

	nexts() {
		// alert('dasd');

		fetch('http://dev.useastore.com:8086/v1/kiklink/shop_list.json').then(function(data) {
			data.text().then(function(obj) {
				console.log(JSON.parse(obj));
			});
		}, function(ex) {
			console.log(ex);
		});


		// fetch('../js/json/1.json').then(function(data) {
		// 	data.text().then(function(obj) {
		// 		console.log(JSON.parse(obj));
		// 	});
		// }, function(ex) {
		// 	console.log(ex);
		// });


		// fetch('../js/json/1.json').then(response => {
		// 	response.json()
		// }).then(data => {
		// 	console.log(data);
		// }).catch(e => {
		// 	console.log(e);
		// 	console.log("Oops, error", e)
		// })

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
				<div id="baseData-foot" onTouchTap={ e => {this.nexts(e)} }>
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





