require('../../sass/login.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import InjectTapEventPlugin from "react-tap-event-plugin";

import autoFont from '../temp/autoFont.js';

autoFont.init();
InjectTapEventPlugin();

class Tab extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="login-tab">
				<div className="login-tab-unit active">注册</div>
				<div className="login-tab-unit">登录</div>
			</div>
		)
	}
}

class Input extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="login-input">
				<div className="login-input-unit">
					<input type="tel" placeholder="输入手机号" maxLength="11" />
				</div>
				<div className="login-input-unit">
					<input type="text" placeholder="输入验证码" />
					<button className="login-code-bt">获取验证码</button>
				</div>
				<div id="login-confirm">
					<button className="login-confirm-bt">注册</button>
				</div>
				<div id="login-state">
				</div>
			</div>
		)
	}
}

					<button className="login-code-bt">获取验证码</button>


class Other extends React.Component {
	constructor() {
		super();
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
						<img src="../img/login/wechat@3x.png" />
					</div>
					<div className="login-pro-unit">
						<img src="../img/login/sina@3x.png" />
					</div>
				</div>
			</div>
		)
	}
}

class Main extends React.Component {
	constructor() {
		super();
		const _lib = window._lib;
		const path = _lib.path();
		this.state = {
			
		}
	}

	render() {
		return (
			<div id="login-main">
				<Tab />
				<Input />
				<Other />
			</div>
		)
	}
}


ReactDOM.render(<Main />, document.querySelector('#login-content'));





