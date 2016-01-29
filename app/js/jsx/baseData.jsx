require('../../sass/baseData.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

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
				const reader = new FileReader();
				reader.onload = (e1) => {
					console.log(e1);
					imgData.url = e1.target.result;
					this.setState({
						img: imgData
					});
				}
				reader.readAsDataURL(fileNode.files[0], 'GB2312');
			}
		}
	}
// accept="image/jpg,image/png,image/jpeg"
	render() {
		return (
			<div id="baseData-headImg">
				<img src={this.state.img.url} />
				<input type="file" multiple="multiple"  onChange= { (e) => {this.imgChange(e)} } />
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





