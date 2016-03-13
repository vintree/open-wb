require('../../sass/login.scss');
// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";
import Superagent from 'superagent';

import AutoFont from '../temp/autoFont.js';
import Md5 from '../temp/md5.js';
import Format from '../temp/format.js';
import FormatAjax from '../temp/formatAjax.js';
import Unicode from '../temp/unicode.js';
import UserAgent from '../temp/userAgent.js';
import ErrorMsg from '../temp/errorMsg.js';
import Storage from '../temp/storage.js';
import Vars from '../temp/vars.js';
// import Ibootstrap from '../temp/lib/ibootstrap.all.min.js';
AutoFont.init();
InjectTapEventPlugin();

class Tab extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="login-tab">
				<div id='login-tabs' className={'login-tab-unit ' + this.props.tab[0].active } data-ix='0'>{this.props.tab[0].buttonName}</div>
				<div id='register-tabs' className={'login-tab-unit ' + this.props.tab[1].active } data-ix='1'>{this.props.tab[1].buttonName}</div>
			</div>
		)
	}
}

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: {
				name: '获取验证码',
				time: '',
				initName: '获取验证码',
				initTime: 60,
				initDes: '秒后再次获取',
				active: ''
			},
			imgList: {
				bottom: this.props.vars.path + 'img/login/bottom@3x.png',
				box: this.props.vars.path + 'img/login/box@3x.png',
				selector: this.props.vars.path + 'img/login/selector@3x.png',
				info: this.props.vars.path + 'img/login/info@3x.png'
			},
			protocol: '',
			isLogin: ''
		}
	}

	componentDidMount() {
		this.initAv();
	}

	componentDidUpdate() {
		this.login();
	}

	// 初始化第三方数据
	initAv() {
		window.onload = () => {
			const appid = 'zz7nf1fzbas63s5o0t3rudu4zij1f3n80jfjtfk4j5ks57b6';
			const appkey ='9x0nlvt0cno3dm000phoddmiw8ok18vwplaoybf3nuxegxzk';
			window.AV.initialize(appid, appkey);
			var TestObject = AV.Object.extend('TestObject');
			var testObject = new TestObject();
			testObject.save({
				foo: 'bar'
			}, {
			  	success: function(object) {
			   	 	// alert('LeanCloud works!');
			   	 	// console.log(object);
			  	}
			});
		}
	}

	// 获取手机验证码
	getCode() {
		var code = this.state.code;
		if(code.active === '') {
			const mobile = this.refs.mobile.value.trim();
			if(Format.mobile(mobile)) {
				code.active = 'active';
				code.time = code.initTime;
				code.name = code.time + code.initDes;
				this.setState({
					code: code
				});
				code.time--;
				let t = setInterval(() => {
					if(code.time !== 0) {
						code.name = code.time + code.initDes;
						this.setState({
							code: code
						});
						code.time--;
					} else {
						clearTimeout(t);
						code.active = '';
						code.name = code.initName;
						this.setState({
							code: code
						});
					}
				}, 1000);
				AV.Cloud.requestSmsCode({
					 mobilePhoneNumber: mobile,
					 name: '我司',
					 op: '验证操作',
					 ttl: 10
				}).then(function() {
				 //发送成功
				}, function(err) {
				 //发送失败
				 	alert(err.message);
				});
			} else {
				alert(ErrorMsg.err('mobileFormat'));
			}
		}
	}


	// btControl() {
	// 	if(this.isTab()) {
	// 		btFun(1);
	// 	} else {
	// 		btFun(2);
	// 	}
	// }

	// 提交注册
	btConfirm(code) {
		var
			mobile = this.refs.mobile.value.trim(),
			username = mobile,
			code = this.refs.code.value.trim();
		const
			vars = this.props.vars,
			sharekey = vars.sharekey;

			// let
			// 	timestamp = (new Date()).getTime(),
			// 	url;
			// timestamp += Md5.init(timestamp + sharekey);
			// username += Md5.init(username + sharekey);
			// url = FormatAjax.get(vars.apiPath + 'users/register.json', {
			// 	timestamp: timestamp,
			// 	username: username,
			// 	mobile: mobile,
			// 	device: UserAgent.identify(),
			// 	deviceuuid: 'web',
			// 	source: 'useastore',
			// 	type: 'nopassword'
			// });
			// Superagent.get(url).end(function(err, res) {
			// 	if(res.status === 200) {
			// 		var data = JSON.parse(Unicode.toHex(res.text));
			// 		if(data.status.code === '0') {
			// 			alert('注册成功！');
			// 		} else {
			// 			alert(data.status.msg);
			// 		}
			// 	}
			// });
// 临时注释，短信验证失败！
		if(Format.mobile(mobile)) {
			AV.Cloud.verifySmsCode(code, mobile).then(function() {
   			//验证成功
				let
					timestamp = (new Date()).getTime(),
				  	url;
				timestamp += Md5.init(timestamp + sharekey);
				username += Md5.init(username + sharekey);
				url = FormatAjax.get(vars.apiPath + 'users/register.json', {
				  	timestamp: timestamp,
				  	username: username,
				  	mobile: mobile,
					device: UserAgent.identify(),
					deviceuuid: 'web',
					source: 'useastore',
					type: 'nopassword'
				});
				Superagent.get(url).end(function(err, res) {
					if(res.status === 200) {
						var data = JSON.parse(Unicode.toHex(res.text));
						if(data.status.code === '0') {
							Storage.set(Vars('userStorage'), data.data)
							//  	alert('注册成功！');
						} else {
						  	alert(data.status.msg);
						}
					}
				});
			}, function(err) {
			   //验证失败
			   alert(err.message);
			});
		} else {
			alert(ErrorMsg.err('mobileFormat'));
		}
	}

	// btRegister() {
	//
	// }

	isTab() {// 判断注册模块
		let node = document.querySelector('#login-tabs');
		if(node.classList.contains('active')) {
			// 注册模块
			return true;
		} else {
			// 登录模块
			return false;
		}
	}

	isProtocol(e) {
		let protocol = this.state.protocol;
		if(protocol === 'active') {
			protocol = '';
		} else {
			protocol = 'active';
		}
		this.setState({
			protocol: protocol
		});
		// this.login();
	}

	isLogin() {
		let
			mobile = document.querySelector('.login-mobile').value,
			code = document.querySelector('.login-code').value,
			isProtocol = document.querySelector('.login-selected');
		isProtocol = isProtocol ? isProtocol.classList.contains('active') : '';
		if(!Format.mobile(mobile)) {
			return false;
		}
		if(code.length === 0) {
			return false;
		}
		if(this.isTab()) {
			if(!isProtocol) {
				return false;
			}
		}
		return true;
	}

	login() {
		let node = document.querySelector('.login-confirm-bt');
		if(this.isLogin()) {
			node.classList.add('active');
		} else {
			node.classList.remove('active');
		}
	}

	mobileInput() {
		this.login();
	}

	codeInput() {
		this.login();
	}

	render() {
		let
			buttonName = this.props.tab,
			login,
			register;
		for(let i = 0, l = buttonName.length; i < l; i++) {
			if(buttonName[i].active === 'active') {
				buttonName = buttonName[i];
				break;
			}
		}

		// console.log(buttonName.buttonName);

		if(buttonName.buttonName === '注册') {
			login = (
				<div className="login-protocol">
					<div onTouchTap={ e => { this.isProtocol(e) } }>
						<img className="login-box" src={this.state.imgList.box}></img>
						<img className={'login-selected ' + this.state.protocol} src={this.state.imgList.selector}></img>
					</div>
					<span>我已阅读并同意</span>
					<a href="http://www.baidu.com">我司用户协议及隐私协议</a>
				</div>
			)
		} else {
			login = (
				<div className="login-protocol">
					<div >
						<img className="login-box" src={this.state.imgList.info}></img>
					</div>
					<span>首次凭借手机号和手机验证码登录即可</span>
				</div>
			)
		}

		return (
			<div id="login-input">
				<div className="login-input-unit">
					<input className="login-mobile" type="tel" placeholder="输入手机号" maxLength="11" ref="mobile" onInput={ e => { this.mobileInput(e) } }/>
				</div>
				<div className="login-input-unit">
					<input className="login-code" type="text" placeholder="输入验证码" ref="code" onInput={ e => { this.codeInput(e) } } />
					<button className={'login-code-bt ' + this.state.code.active} onTouchTap={ e => { this.getCode(e) } }>{this.state.code.name}</button>
				</div>
				{login}
				<div id="login-confirm">
					<button className={'login-confirm-bt ' + this.state.isLogin} onTouchTap={ e => { this.btConfirm(e) } }>{buttonName.buttonName}</button>
				</div>
			</div>
		)
	}
}

class Other extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img: [
				{
					imgUrl: this.props.vars.path + 'img/login/wechat@3x.png'
				},
				{
					imgUrl: this.props.vars.path + 'img/login/sina@3x.png'
				}
			]
		}
	}
	render() {
		return (
			<div id="login-other">
				<div id="login-tx">
					<div className="login-cf"></div>
					<div className="login-content">选择其它登录方式</div>
					<div className="login-cf"></div>
				</div>
				<div id="login-pro">
					<div className="login-pro-unit">
						<img src={this.state.img[0].imgUrl} />
					</div>
					<div className="login-pro-unit">
						<img src={this.state.img[1].imgUrl} />
					</div>
				</div>
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
		const cf = new _config;
		this.state = {
			vars: cf.vars(),
			tab: [
				{
					active: 'active',
					buttonName: '注册'
				},
				{
					active: '',
					buttonName: '登录'
				}
			]
		}
	}

	tabToggle(e) {
		const
			node = e.target,
			ix = node.getAttribute('data-ix');
		let tab = this.state.tab;
		tab = tab.map((v, i) => {
			if(i === Number(ix)) {
				v.active = 'active';
				return v;
			} else {
				v.active = '';
				return v;
			}
		});

		this.setState({
			tab: tab
		});
	}

	render() {
		return (
			<div id="login-main">
				<section onTouchTap={ e => {this.tabToggle(e)} }>
					<Tab vars={this.state.vars} tab={this.state.tab} />
				</section>
				<Input vars={this.state.vars} tab={this.state.tab}/>
				<Other vars={this.state.vars}/>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.querySelector('#login-content'));
