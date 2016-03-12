webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactTapEventPlugin = __webpack_require__(159);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _superagent = __webpack_require__(163);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _autoFont = __webpack_require__(168);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	var _md = __webpack_require__(174);

	var _md2 = _interopRequireDefault(_md);

	var _format = __webpack_require__(232);

	var _format2 = _interopRequireDefault(_format);

	var _formatAjax = __webpack_require__(170);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(171);

	var _unicode2 = _interopRequireDefault(_unicode);

	var _userAgent = __webpack_require__(169);

	var _userAgent2 = _interopRequireDefault(_userAgent);

	var _errs = __webpack_require__(233);

	var _errs2 = _interopRequireDefault(_errs);

	var _storage = __webpack_require__(173);

	var _storage2 = _interopRequireDefault(_storage);

	var _vars = __webpack_require__(172);

	var _vars2 = _interopRequireDefault(_vars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(234);
	// import $ from 'jquery';

	// import Ibootstrap from '../temp/lib/ibootstrap.all.min.js';
	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();

	var Tab = (function (_React$Component) {
		_inherits(Tab, _React$Component);

		function Tab(props) {
			_classCallCheck(this, Tab);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, props));
			// console.log(this.props);
		}

		_createClass(Tab, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'login-tab' },
					_react2.default.createElement(
						'div',
						{ id: 'login-tabs', className: 'login-tab-unit ' + this.props.tab[0].active, 'data-ix': '0' },
						this.props.tab[0].buttonName
					),
					_react2.default.createElement(
						'div',
						{ id: 'register-tabs', className: 'login-tab-unit ' + this.props.tab[1].active, 'data-ix': '1' },
						this.props.tab[1].buttonName
					)
				);
			}
		}]);

		return Tab;
	})(_react2.default.Component);

	var Input = (function (_React$Component2) {
		_inherits(Input, _React$Component2);

		function Input(props) {
			_classCallCheck(this, Input);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

			_this2.state = {
				code: {
					name: '获取验证码',
					time: '',
					initName: '获取验证码',
					initTime: 60,
					initDes: '秒后再次获取',
					active: ''
				},
				imgList: {
					bottom: _this2.props.vars.path + 'img/login/bottom@3x.png',
					box: _this2.props.vars.path + 'img/login/box@3x.png',
					selector: _this2.props.vars.path + 'img/login/selector@3x.png',
					info: _this2.props.vars.path + 'img/login/info@3x.png'
				},
				protocol: '',
				isLogin: ''
			};
			return _this2;
		}

		_createClass(Input, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.initAv();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				this.login();
			}

			// 初始化第三方数据

		}, {
			key: 'initAv',
			value: function initAv() {
				window.onload = function () {
					var appid = 'zz7nf1fzbas63s5o0t3rudu4zij1f3n80jfjtfk4j5ks57b6';
					var appkey = '9x0nlvt0cno3dm000phoddmiw8ok18vwplaoybf3nuxegxzk';
					window.AV.initialize(appid, appkey);
					var TestObject = AV.Object.extend('TestObject');
					var testObject = new TestObject();
					testObject.save({
						foo: 'bar'
					}, {
						success: function success(object) {
							// alert('LeanCloud works!');
							// console.log(object);
						}
					});
				};
			}

			// 获取手机验证码

		}, {
			key: 'getCode',
			value: function getCode() {
				var _this3 = this;

				var code = this.state.code;
				if (code.active === '') {
					var mobile = this.refs.mobile.value.trim();
					if (_format2.default.mobile(mobile)) {
						(function () {
							code.active = 'active';
							code.time = code.initTime;
							code.name = code.time + code.initDes;
							_this3.setState({
								code: code
							});
							code.time--;
							var t = setInterval(function () {
								if (code.time !== 0) {
									code.name = code.time + code.initDes;
									_this3.setState({
										code: code
									});
									code.time--;
								} else {
									clearTimeout(t);
									code.active = '';
									code.name = code.initName;
									_this3.setState({
										code: code
									});
								}
							}, 1000);
							AV.Cloud.requestSmsCode({
								mobilePhoneNumber: mobile,
								name: '我司',
								op: '验证操作',
								ttl: 10
							}).then(function () {
								//发送成功
							}, function (err) {
								//发送失败
								alert(err.message);
							});
						})();
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

		}, {
			key: 'btConfirm',
			value: function btConfirm(code) {
				var mobile = this.refs.mobile.value.trim(),
				    username = mobile,
				    code = this.refs.code.value.trim();
				var vars = this.props.vars,
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
				if (_format2.default.mobile(mobile)) {
					// AV.Cloud.verifySmsCode(code, mobile).then(function() {
					//验证成功
					var timestamp = new Date().getTime(),
					    url = undefined;
					timestamp += _md2.default.init(timestamp + sharekey);
					username += _md2.default.init(username + sharekey);
					url = _formatAjax2.default.get(vars.apiPath + 'users/register.json', {
						timestamp: timestamp,
						username: username,
						mobile: mobile,
						device: _userAgent2.default.identify(),
						deviceuuid: 'web',
						source: 'useastore',
						type: 'nopassword'
					});
					_superagent2.default.get(url).end(function (err, res) {
						if (res.status === 200) {
							var data = JSON.parse(res.text);
							if (data.status.code === '0') {
								_storage2.default.set((0, _vars2.default)('userStorage'), data.data);
								//  	alert('注册成功！');
								// console.log(data.data.nickname);
								if (data.data.nickname) {
									// console.log(Vars.href('user'));
									location.href = _vars2.default.href('user');
								} else {
									// console.log(Vars.href('baseData'));
									location.href = _vars2.default.href('baseData');
								}
							} else {
								alert(data.status.msg);
							}
						}
					});
					// }, function(err) {
					//    //验证失败
					//    alert(err.message);
					// });
				} else {
						alert(errs.err('format', mobile));
					}
			}

			// btRegister() {
			//
			// }

		}, {
			key: 'isTab',
			value: function isTab() {
				// 判断注册模块
				var node = document.querySelector('#login-tabs');
				if (node.classList.contains('active')) {
					// 注册模块
					return true;
				} else {
					// 登录模块
					return false;
				}
			}
		}, {
			key: 'isProtocol',
			value: function isProtocol(e) {
				var protocol = this.state.protocol;
				if (protocol === 'active') {
					protocol = '';
				} else {
					protocol = 'active';
				}
				this.setState({
					protocol: protocol
				});
				// this.login();
			}
		}, {
			key: 'isLogin',
			value: function isLogin() {
				var mobile = document.querySelector('.login-mobile').value,
				    code = document.querySelector('.login-code').value,
				    isProtocol = document.querySelector('.login-selected');
				isProtocol = isProtocol ? isProtocol.classList.contains('active') : '';
				if (!_format2.default.mobile(mobile)) {
					return false;
				}
				if (code.length === 0) {
					return false;
				}
				if (this.isTab()) {
					if (!isProtocol) {
						return false;
					}
				}
				return true;
			}
		}, {
			key: 'login',
			value: function login() {
				var node = document.querySelector('.login-confirm-bt');
				if (this.isLogin()) {
					node.classList.add('active');
				} else {
					node.classList.remove('active');
				}
			}
		}, {
			key: 'mobileInput',
			value: function mobileInput() {
				this.login();
			}
		}, {
			key: 'codeInput',
			value: function codeInput() {
				this.login();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				var buttonName = this.props.tab,
				    login = undefined,
				    register = undefined;
				for (var i = 0, l = buttonName.length; i < l; i++) {
					if (buttonName[i].active === 'active') {
						buttonName = buttonName[i];
						break;
					}
				}

				// console.log(buttonName.buttonName);

				if (buttonName.buttonName === '注册') {
					login = _react2.default.createElement(
						'div',
						{ className: 'login-protocol' },
						_react2.default.createElement(
							'div',
							{ onTouchTap: function onTouchTap(e) {
									_this4.isProtocol(e);
								} },
							_react2.default.createElement('img', { className: 'login-box', src: this.state.imgList.box }),
							_react2.default.createElement('img', { className: 'login-selected ' + this.state.protocol, src: this.state.imgList.selector })
						),
						_react2.default.createElement(
							'span',
							null,
							'我已阅读并同意'
						),
						_react2.default.createElement(
							'a',
							{ href: 'http://www.baidu.com' },
							'我司用户协议及隐私协议'
						)
					);
				} else {
					login = _react2.default.createElement(
						'div',
						{ className: 'login-protocol' },
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement('img', { className: 'login-box', src: this.state.imgList.info })
						),
						_react2.default.createElement(
							'span',
							null,
							'首次凭借手机号和手机验证码登录即可'
						)
					);
				}

				return _react2.default.createElement(
					'div',
					{ id: 'login-input' },
					_react2.default.createElement(
						'div',
						{ className: 'login-input-unit' },
						_react2.default.createElement('input', { className: 'login-mobile', type: 'tel', placeholder: '输入手机号', maxLength: '11', ref: 'mobile', onInput: function onInput(e) {
								_this4.mobileInput(e);
							} })
					),
					_react2.default.createElement(
						'div',
						{ className: 'login-input-unit' },
						_react2.default.createElement('input', { className: 'login-code', type: 'text', placeholder: '输入验证码', ref: 'code', onInput: function onInput(e) {
								_this4.codeInput(e);
							} }),
						_react2.default.createElement(
							'button',
							{ className: 'login-code-bt ' + this.state.code.active, onTouchTap: function onTouchTap(e) {
									_this4.getCode(e);
								} },
							this.state.code.name
						)
					),
					login,
					_react2.default.createElement(
						'div',
						{ id: 'login-confirm' },
						_react2.default.createElement(
							'button',
							{ className: 'login-confirm-bt ' + this.state.isLogin, onTouchTap: function onTouchTap(e) {
									_this4.btConfirm(e);
								} },
							buttonName.buttonName
						)
					)
				);
			}
		}]);

		return Input;
	})(_react2.default.Component);

	var Other = (function (_React$Component3) {
		_inherits(Other, _React$Component3);

		function Other(props) {
			_classCallCheck(this, Other);

			var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Other).call(this, props));

			_this5.state = {
				img: [{
					imgUrl: _this5.props.vars.path + 'img/login/wechat@3x.png'
				}, {
					imgUrl: _this5.props.vars.path + 'img/login/sina@3x.png'
				}]
			};
			return _this5;
		}

		_createClass(Other, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'login-other' },
					_react2.default.createElement(
						'div',
						{ id: 'login-tx' },
						_react2.default.createElement('div', { className: 'login-cf' }),
						_react2.default.createElement(
							'div',
							{ className: 'login-content' },
							'选择其它登录方式'
						),
						_react2.default.createElement('div', { className: 'login-cf' })
					),
					_react2.default.createElement(
						'div',
						{ id: 'login-pro' },
						_react2.default.createElement(
							'div',
							{ className: 'login-pro-unit' },
							_react2.default.createElement('img', { src: this.state.img[0].imgUrl })
						),
						_react2.default.createElement(
							'div',
							{ className: 'login-pro-unit' },
							_react2.default.createElement('img', { src: this.state.img[1].imgUrl })
						)
					)
				);
			}
		}]);

		return Other;
	})(_react2.default.Component);

	var Main = (function (_React$Component4) {
		_inherits(Main, _React$Component4);

		function Main() {
			_classCallCheck(this, Main);

			var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));

			var cf = new _config();
			_this6.state = {
				vars: cf.vars(),
				tab: [{
					active: 'active',
					buttonName: '注册'
				}, {
					active: '',
					buttonName: '登录'
				}]
			};
			return _this6;
		}

		_createClass(Main, [{
			key: 'tabToggle',
			value: function tabToggle(e) {
				var node = e.target,
				    ix = node.getAttribute('data-ix');
				var tab = this.state.tab;
				tab = tab.map(function (v, i) {
					if (i === Number(ix)) {
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
		}, {
			key: 'render',
			value: function render() {
				var _this7 = this;

				return _react2.default.createElement(
					'div',
					{ id: 'login-main' },
					_react2.default.createElement(
						'section',
						{ onTouchTap: function onTouchTap(e) {
								_this7.tabToggle(e);
							} },
						_react2.default.createElement(Tab, { vars: this.state.vars, tab: this.state.tab })
					),
					_react2.default.createElement(Input, { vars: this.state.vars, tab: this.state.tab }),
					_react2.default.createElement(Other, { vars: this.state.vars })
				);
			}
		}]);

		return Main;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.querySelector('#login-content'));

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(164);
	var reduce = __webpack_require__(165);

	/**
	 * Root reference for iframes.
	 */

	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}

	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */

	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */

	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */

	Request.prototype.parse = function(fn){
	  this._parser = fn;
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename || file.name);
	  return this;
	};

	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;

	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;

	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this.getHeader('Content-Type');
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);

	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};

	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */

	Request.prototype.then = function (fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	request['del'] = del;
	request['delete'] = del;

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;


/***/ },

/***/ 164:
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 165:
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';

	var formatAjax = function formatAjax() {};

	formatAjax.get = function (url, obj) {
		var str = '?';
		if (arguments.length !== 1) {
			for (var o in obj) {
				if (obj.hasOwnProperty(o)) {
					str += o + '=' + obj[o] + '&';
				}
			}
			return url + str.substr(0, str.length - 1);
		}
		return url;
	};

	formatAjax.post = function (url, obj) {};

	module.exports = formatAjax;

/***/ },

/***/ 171:
/***/ function(module, exports) {

	"use strict";

	/*
		Unicode编码转换
	*/
	var unicode = function unicode() {};

	// 加码
	unicode.toDec = function (str) {
		if (str) {
			var res = [];
			for (var i = 0; i < str.length; i++) {
				res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
			}return "\\u" + res.join("\\u");
		}
		return '';
	};

	// 解码
	unicode.toHex = function (str) {
		if (str) {
			str = str.replace(/\\/g, '%');
			return unescape(str).replace(/%/g, '');
		}
		return '';
	};

	module.exports = unicode;

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _storage = __webpack_require__(173);

	var _storage2 = _interopRequireDefault(_storage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cf = new _config();
	var vars = function vars(key) {
	    var obj = {
	        userStorage: 'ws',
	        user: 'ws'
	    };
	    return obj[key];
	};

	vars.storage = function (key) {
	    var obj = {
	        userStorage: 'ws',
	        user: 'ws'
	    };
	    return obj[key];
	};

	vars.storageValue = function (key1, key2) {
	    var sobj = _storage2.default.get(vars.storage(key1));
	    // console.log(sobj);
	    return key2 ? sobj[key2] : sobj;
	};

	// 系统参数
	vars.sys = function (key) {
	    var obj = {
	        cid: 17,
	        sharekey: 'X-v]4hcK$C'
	    },
	        sobj = _storage2.default.get(vars.storage('userStorage'));
	    for (var o in sobj) {
	        if (sobj.hasOwnProperty(o)) {
	            obj[o] = sobj[o];
	        }
	    }
	    return obj[key];
	};

	// 基本地址
	vars.path = function (key) {
	    var staticPath = undefined,
	        port = undefined,
	        obj = undefined;
	    port = location.port,
	    // host = 'http://10.2.144.38:8080/';
	    staticPath = 'http://127.0.0.1:8080/';
	    if (port === '8080') {
	        staticPath = '../';
	    } else {
	        staticPath += 'github/open-wb/app/';
	    }
	    obj = {
	        href: './',
	        apiPath: '/v1/',
	        staticPath: staticPath
	    };
	    return obj[key];
	};

	// 错误信息
	vars.err = function (key) {
	    var obj = {
	        nickName: '请填写1-18个字符，中文占两个字符，英文占一个字符',
	        gender: '请选择性别',
	        city: '请选择城市'
	    };
	    return obj[key];
	};

	// 跳转地址
	vars.href = function (key) {
	    var path = vars.path('href'),
	        obj = {
	        login: path + 'login.html',
	        baseData: path + 'baseData.html',
	        user: path + 'user.html?nav=me',
	        hotGroup: path + 'hotGroup.html',
	        fansGroup: path + 'fansGroup.html',
	        guide: path + 'guide.html'
	    };
	    return obj[key];
	};

	// 接口地址
	vars.api = function (key) {
	    var path = vars.path('apiPath'),
	        obj = {
	        fileUpload: 'file/post.json',
	        userInfo: 'users/userinfo.json',
	        city: 'zuji/city.json',
	        hotTagList: 'biaoqian/list.json',
	        hotList: 'biaoqian/search.json',
	        userShow: 'users/show.json', //获取某个用户的个人信息
	        follow_list: 'users/following/list.json', //获取用户关注的人的列表
	        tag_list: 'users/tag/list.json', //获取用户加入的群组(标签)
	        event_list: 'users/event/list.json', //获取用户活动列表
	        get_my_notes: 'notes/get_my_notes.json', //用户的动态
	        user_show: 'users/show.json', //获取用户信息
	        user_register: 'users/register.json' };
	    //用户注册

	    return path + obj[key];
	};

	module.exports = vars;

	// {"mid":76350,"username":"18810373055","nickname":"eqwe","pinyin":"eqwe","avatar":"http://image.useastore.com/user/avatar/ADCAC15A-677B-4DC5-BBA2-9ED1FD4516BE1456735556333.jpg","vip":0,"gender":"m","age":1,"constellation":"\\u53cc\\u9c7c\\u5ea7","address":"\\u6fb3\\u95e8\\u5e02","sign":"\\u6211\\u662f\\u5c0f\\u6d4b","xingming":"","background":null,"leagues":null,"groups":null,"height":0,"mobile":"18810373055","extension":"{\"school\":\"& #40;null& #41;\",\"position\":\"\\u5348\\u591c\\u5de5\\u4f5c\\u8005\",\"Mylabel\":\"& #40;null& #41;\",\"company\":\"& #40;null& #41;\",\"experience\":\"& #40;null& #41;\",\"project\":\"& #40;null& #41;\",\"industry\":\"& #40;null& #41;\",\"interest\":\"\\u5c0f\\u9017\\u9752\\u5e74\"}","isRegister":0,"ofpassword":"b942077d406d5d069a3c71ae3d332811","ngroups":null,"ofusername":"7f3304db83383f8624b5eb5a41ea2758"}

/***/ },

/***/ 173:
/***/ function(module, exports) {

	'use strict';

	var storage = function storage() {
	    if ('localStorage' in window && window['localStorage'] != null) {
	        return true;
	    }
	    return false;
	};

	storage.set = function (name, key) {
	    if (storage()) {
	        key = JSON.stringify(key);
	        localStorage.setItem(name, key);
	    }
	};

	storage.get = function (name) {
	    if (storage()) {
	        return JSON.parse(localStorage.getItem(name));
	    }
	};

	storage.clear = function () {
	    localStorage.clear();
	};

	module.exports = storage;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	"use strict";

	var md5 = function md5() {};

	md5.init = function (string) {

	    function RotateLeft(lValue, iShiftBits) {
	        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
	    }

	    function AddUnsigned(lX, lY) {
	        var lX4, lY4, lX8, lY8, lResult;
	        lX8 = lX & 0x80000000;
	        lY8 = lY & 0x80000000;
	        lX4 = lX & 0x40000000;
	        lY4 = lY & 0x40000000;
	        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	        if (lX4 & lY4) {
	            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
	        }
	        if (lX4 | lY4) {
	            if (lResult & 0x40000000) {
	                return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
	            } else {
	                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
	            }
	        } else {
	            return lResult ^ lX8 ^ lY8;
	        }
	    }

	    function F(x, y, z) {
	        return x & y | ~x & z;
	    }
	    function G(x, y, z) {
	        return x & z | y & ~z;
	    }
	    function H(x, y, z) {
	        return x ^ y ^ z;
	    }
	    function I(x, y, z) {
	        return y ^ (x | ~z);
	    }

	    function FF(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };

	    function GG(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };

	    function HH(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };

	    function II(a, b, c, d, x, s, ac) {
	        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
	        return AddUnsigned(RotateLeft(a, s), b);
	    };

	    function ConvertToWordArray(string) {
	        var lWordCount;
	        var lMessageLength = string.length;
	        var lNumberOfWords_temp1 = lMessageLength + 8;
	        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
	        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
	        var lWordArray = Array(lNumberOfWords - 1);
	        var lBytePosition = 0;
	        var lByteCount = 0;
	        while (lByteCount < lMessageLength) {
	            lWordCount = (lByteCount - lByteCount % 4) / 4;
	            lBytePosition = lByteCount % 4 * 8;
	            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
	            lByteCount++;
	        }
	        lWordCount = (lByteCount - lByteCount % 4) / 4;
	        lBytePosition = lByteCount % 4 * 8;
	        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
	        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	        return lWordArray;
	    };

	    function WordToHex(lValue) {
	        var WordToHexValue = "",
	            WordToHexValue_temp = "",
	            lByte,
	            lCount;
	        for (lCount = 0; lCount <= 3; lCount++) {
	            lByte = lValue >>> lCount * 8 & 255;
	            WordToHexValue_temp = "0" + lByte.toString(16);
	            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
	        }
	        return WordToHexValue;
	    };

	    function Utf8Encode(string) {
	        string = string.replace(/\r\n/g, "\n");
	        var utftext = "";

	        for (var n = 0; n < string.length; n++) {

	            var c = string.charCodeAt(n);

	            if (c < 128) {
	                utftext += String.fromCharCode(c);
	            } else if (c > 127 && c < 2048) {
	                utftext += String.fromCharCode(c >> 6 | 192);
	                utftext += String.fromCharCode(c & 63 | 128);
	            } else {
	                utftext += String.fromCharCode(c >> 12 | 224);
	                utftext += String.fromCharCode(c >> 6 & 63 | 128);
	                utftext += String.fromCharCode(c & 63 | 128);
	            }
	        }

	        return utftext;
	    };

	    var x = Array();
	    var k, AA, BB, CC, DD, a, b, c, d;
	    var S11 = 7,
	        S12 = 12,
	        S13 = 17,
	        S14 = 22;
	    var S21 = 5,
	        S22 = 9,
	        S23 = 14,
	        S24 = 20;
	    var S31 = 4,
	        S32 = 11,
	        S33 = 16,
	        S34 = 23;
	    var S41 = 6,
	        S42 = 10,
	        S43 = 15,
	        S44 = 21;

	    string = Utf8Encode(string);

	    x = ConvertToWordArray(string);

	    a = 0x67452301;b = 0xEFCDAB89;c = 0x98BADCFE;d = 0x10325476;

	    for (k = 0; k < x.length; k += 16) {
	        AA = a;BB = b;CC = c;DD = d;
	        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
	        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
	        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
	        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
	        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
	        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
	        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
	        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
	        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
	        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
	        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
	        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
	        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
	        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
	        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
	        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
	        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
	        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
	        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
	        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
	        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
	        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
	        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
	        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
	        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
	        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
	        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
	        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
	        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
	        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
	        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
	        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
	        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
	        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
	        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
	        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
	        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
	        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
	        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
	        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
	        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
	        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
	        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
	        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
	        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
	        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
	        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
	        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
	        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
	        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
	        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
	        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
	        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
	        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
	        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
	        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
	        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
	        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
	        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
	        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
	        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
	        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
	        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
	        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
	        a = AddUnsigned(a, AA);
	        b = AddUnsigned(b, BB);
	        c = AddUnsigned(c, CC);
	        d = AddUnsigned(d, DD);
	    }
	    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
	    return temp.toLowerCase();
	};

	module.exports = md5;

/***/ },

/***/ 232:
/***/ function(module, exports) {

	"use strict";

	var format = function format() {};

	// 验证手机号格式
	format.mobile = function (str) {
		var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
		if (reg.test(str)) {
			return true;
		}
		return false;
	};

	module.exports = format;

/***/ },

/***/ 233:
/***/ function(module, exports) {

	'use strict';

	var errs = function errs() {};

	/*
		@author
			abel
		@des
			前缀术语：
				un: 未放置，空参数
				unfully: 不完全，不完整，没有传递所有参数
				format: 格式不正确
	 */

	errs.err = function () {
		var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

		var obj = {
			format: '格式不正确! ' + name,
			un: '没有找到! ' + name,
			unMethod: '未提供该方法支持! ' + name,
			unFully: '未提供完善数据！' + name
		};
		if (key) {
			return obj[key];
		}
		console.err(obj['un'] + 'key');
	};

	errs.warn = function (key, name) {};

	errs.log = function (key, name) {};

	module.exports = errs;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(235);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(178)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./login.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(177)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\n/*\n    文字省略\n*/\nhtml, body {\n  background-color: #f3f4f5; }\n\n#login-content {\n  overflow: hidden; }\n\n#login-main {\n  font-size: .4rem; }\n  #login-main #login-tab {\n    text-align: center;\n    line-height: 1rem;\n    border-bottom: .07rem solid #24a2f9;\n    overflow: hidden;\n    color: #666666;\n    margin-bottom: .4rem; }\n    #login-main #login-tab .login-tab-unit {\n      float: left;\n      width: 50%; }\n      #login-main #login-tab .login-tab-unit.active {\n        color: #2fa4f6; }\n  #login-main #login-input {\n    padding: 0 .2rem; }\n    #login-main #login-input .login-input-unit {\n      position: relative;\n      height: 1.1rem;\n      margin-bottom: .2rem; }\n      #login-main #login-input .login-input-unit input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: .15rem;\n        width: 100%;\n        height: 100%;\n        border: none;\n        padding: 0 .4rem;\n        font-size: .4rem; }\n      #login-main #login-input .login-input-unit:nth-child(2) input {\n        padding-right: 2.5rem; }\n      #login-main #login-input .login-input-unit:nth-child(2) .login-code-bt {\n        position: absolute;\n        top: .15rem;\n        right: .12rem;\n        width: 2.3rem;\n        height: .8rem;\n        background-color: #ffb541;\n        color: #ffffff;\n        border: none;\n        border-radius: .1rem;\n        font-size: .25rem;\n        padding: 0 .1rem;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        #login-main #login-input .login-input-unit:nth-child(2) .login-code-bt.active {\n          background-color: #b6b6b6; }\n    #login-main #login-input .login-protocol {\n      position: relative;\n      font-size: .3rem;\n      color: #666666;\n      margin-top: .5rem; }\n      #login-main #login-input .login-protocol .login-box {\n        position: absolute;\n        top: -.05rem;\n        height: .4rem; }\n      #login-main #login-input .login-protocol .login-selected {\n        position: absolute;\n        top: -.1rem;\n        left: .08rem;\n        height: .35rem;\n        display: none; }\n        #login-main #login-input .login-protocol .login-selected.active {\n          display: block; }\n      #login-main #login-input .login-protocol span {\n        padding-left: .55rem; }\n      #login-main #login-input .login-protocol a {\n        color: #24a2f9; }\n  #login-main #login-confirm {\n    margin-top: .6rem; }\n    #login-main #login-confirm .login-confirm-bt {\n      width: 100%;\n      height: 1.1rem;\n      border: none;\n      background-color: #cccccc;\n      color: #ffffff;\n      border-radius: .15rem;\n      font-size: inherit; }\n      #login-main #login-confirm .login-confirm-bt.active {\n        background-color: #24a2f9; }\n  #login-main #login-other {\n    margin-top: 1rem; }\n    #login-main #login-other #login-tx {\n      width: 70%;\n      margin: auto;\n      overflow: hidden;\n      margin-bottom: .5rem; }\n      #login-main #login-other #login-tx .login-cf {\n        float: left;\n        width: 15%;\n        border-bottom: .04rem solid #e0e0e0;\n        height: .5rem; }\n      #login-main #login-other #login-tx .login-content {\n        float: left;\n        width: 70%;\n        text-align: center;\n        line-height: 1rem;\n        height: 1rem;\n        font-size: .35rem;\n        color: #666666; }\n    #login-main #login-other #login-pro {\n      overflow: hidden; }\n      #login-main #login-other #login-pro .login-pro-unit {\n        float: left;\n        width: 50%;\n        text-align: center; }\n        #login-main #login-other #login-pro .login-pro-unit img {\n          width: 3rem; }\n", ""]);

	// exports


/***/ }

});