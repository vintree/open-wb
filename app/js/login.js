webpackJsonp([6],{

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

	var _autoFont = __webpack_require__(163);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(227);

	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();

	var Tab = (function (_React$Component) {
		_inherits(Tab, _React$Component);

		function Tab() {
			_classCallCheck(this, Tab);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));
		}

		_createClass(Tab, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'login-tab' },
					_react2.default.createElement(
						'div',
						{ className: 'login-tab-unit active' },
						'注册'
					),
					_react2.default.createElement(
						'div',
						{ className: 'login-tab-unit' },
						'登录'
					)
				);
			}
		}]);

		return Tab;
	})(_react2.default.Component);

	var Input = (function (_React$Component2) {
		_inherits(Input, _React$Component2);

		function Input() {
			_classCallCheck(this, Input);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this));
		}

		_createClass(Input, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'login-input' },
					_react2.default.createElement(
						'div',
						{ className: 'login-input-unit' },
						_react2.default.createElement('input', { type: 'tel', placeholder: '输入手机号', maxLength: '11' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'login-input-unit' },
						_react2.default.createElement('input', { type: 'text', placeholder: '输入验证码' }),
						_react2.default.createElement(
							'button',
							{ className: 'login-code-bt' },
							'获取验证码'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'login-confirm' },
						_react2.default.createElement(
							'button',
							{ className: 'login-confirm-bt' },
							'注册'
						)
					),
					_react2.default.createElement('div', { id: 'login-state' })
				);
			}
		}]);

		return Input;
	})(_react2.default.Component);

	_react2.default.createElement(
		'button',
		{ className: 'login-code-bt' },
		'获取验证码'
	);

	var Other = (function (_React$Component3) {
		_inherits(Other, _React$Component3);

		function Other() {
			_classCallCheck(this, Other);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Other).call(this));
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
							_react2.default.createElement('img', { src: '../img/login/wechat@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'login-pro-unit' },
							_react2.default.createElement('img', { src: '../img/login/sina@3x.png' })
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

			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));

			var _lib = window._lib;
			var path = _lib.path();
			_this4.state = {};
			return _this4;
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'login-main' },
					_react2.default.createElement(Tab, null),
					_react2.default.createElement(Input, null),
					_react2.default.createElement(Other, null)
				);
			}
		}]);

		return Main;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.querySelector('#login-content'));

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(228);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
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

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\nhtml, body {\n  background-color: #f3f4f5; }\n\n#login-content {\n  overflow: hidden; }\n\n#login-main {\n  font-size: .4rem; }\n  #login-main #login-tab {\n    text-align: center;\n    line-height: 1rem;\n    border-bottom: .07rem solid #24a2f9;\n    overflow: hidden;\n    color: #666666;\n    margin-bottom: .4rem; }\n    #login-main #login-tab .login-tab-unit {\n      float: left;\n      width: 50%; }\n      #login-main #login-tab .login-tab-unit.active {\n        color: #2fa4f6; }\n  #login-main #login-input {\n    padding: 0 .2rem; }\n    #login-main #login-input .login-input-unit {\n      position: relative;\n      height: 1.1rem;\n      margin-bottom: .2rem; }\n      #login-main #login-input .login-input-unit input {\n        position: absolute;\n        top: 0;\n        left: 0;\n        border-radius: .15rem;\n        width: 100%;\n        height: 100%;\n        border: none;\n        padding: 0 .4rem;\n        font-size: .4rem; }\n      #login-main #login-input .login-input-unit:nth-child(2) input {\n        padding-right: 2.5rem; }\n      #login-main #login-input .login-input-unit:nth-child(2) .login-code-bt {\n        position: absolute;\n        top: .15rem;\n        right: .12rem;\n        width: 2rem;\n        height: .8rem;\n        background-color: #ffb541;\n        color: #ffffff;\n        border: none;\n        border-radius: .1rem;\n        font-size: .25rem;\n        padding: 0 .1rem; }\n  #login-main #login-confirm {\n    margin-top: .6rem; }\n    #login-main #login-confirm .login-confirm-bt {\n      width: 100%;\n      height: 1.1rem;\n      border: none;\n      background-color: #24a2f9;\n      color: #ffffff;\n      border-radius: .15rem;\n      font-size: inherit; }\n  #login-main #login-other {\n    margin-top: 1rem; }\n    #login-main #login-other #login-tx {\n      width: 70%;\n      margin: auto;\n      overflow: hidden;\n      margin-bottom: .5rem; }\n      #login-main #login-other #login-tx .login-cf {\n        float: left;\n        width: 15%;\n        border-bottom: .04rem solid #e0e0e0;\n        height: .5rem; }\n      #login-main #login-other #login-tx .login-content {\n        float: left;\n        width: 70%;\n        text-align: center;\n        line-height: 1rem;\n        height: 1rem;\n        font-size: .35rem;\n        color: #666666; }\n    #login-main #login-other #login-pro {\n      overflow: hidden; }\n      #login-main #login-other #login-pro .login-pro-unit {\n        float: left;\n        width: 50%;\n        text-align: center; }\n        #login-main #login-other #login-pro .login-pro-unit img {\n          width: 3rem; }\n", ""]);

	// exports


/***/ }

});