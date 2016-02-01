webpackJsonp([0],{

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

	var _formatAjax = __webpack_require__(165);

	var _formatAjax2 = _interopRequireDefault(_formatAjax);

	var _unicode = __webpack_require__(166);

	var _unicode2 = _interopRequireDefault(_unicode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(167);

	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();

	var HeadImg = (function (_React$Component) {
		_inherits(HeadImg, _React$Component);

		function HeadImg() {
			_classCallCheck(this, HeadImg);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeadImg).call(this));

			var $c = window.$c;
			var path = $c.path();
			_this.state = {
				img: {
					url: path + 'img/defaultHead@3x.png'
				}
			};
			return _this;
		}

		_createClass(HeadImg, [{
			key: 'imgChange',
			value: function imgChange(e) {
				var _this2 = this;

				var fileNode = e.target;
				var imgData = this.state.img;
				if (fileNode.files) {
					if (window.FileReader) {
						var reader = new FileReader();
						reader.onload = function (e1) {
							console.log(e1);
							imgData.url = e1.target.result;
							_this2.setState({
								img: imgData
							});
						};
						reader.readAsDataURL(fileNode.files[0]);
					}
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					'div',
					{ id: 'baseData-headImg' },
					_react2.default.createElement('img', { src: this.state.img.url }),
					_react2.default.createElement('input', { type: 'file', multiple: 'multiple', accept: 'image/jpg,image/png,image/jpeg',
						onChange: function onChange(e) {
							_this3.imgChange(e);
						} })
				);
			}
		}]);

		return HeadImg;
	})(_react2.default.Component);

	var Main = (function (_React$Component2) {
		_inherits(Main, _React$Component2);

		function Main() {
			_classCallCheck(this, Main);

			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));

			var $c = window.$c;
			var path = $c.path();
			_this4.state = {
				nick: {
					name: '',
					placeholder: '怎么称呼您？',
					scope: [1, 18]
				},
				next: {
					url: path + 'img/next@3x.png'
				}
			};
			return _this4;
		}

		_createClass(Main, [{
			key: 'sexChange',
			value: function sexChange(e) {
				var value = e.target.value;
				document.querySelector('.baseData-sex').innerHTML = value;
			}
		}, {
			key: 'nickChange',
			value: function nickChange(e) {
				var nick = this.state.nick;
				var value = e.target.value;
				var len = this.resultEn(value) + this.resultCn(value);
				var min = this.state.nick.scope[0];
				var max = this.state.nick.scope[1];
				if (len < max) {
					nick.name = value;
					this.setState({
						nick: nick
					});
				}
			}
		}, {
			key: 'resultEn',
			value: function resultEn(value) {
				var str = value.match(/\w{1}/g);
				if (str) {
					return str.length;
				}
				return 0;
			}
		}, {
			key: 'resultCn',
			value: function resultCn(value) {
				var str = value.match(/[\u4e00-\u9fa5]{1}/g);
				if (str) {
					return str.length * 2;
				}
				return 0;
			}
		}, {
			key: 'nexts',
			value: function nexts() {
				var url = _formatAjax2.default.get(window.$c.apiPath() + 'zuji/city.json');
				fetch(url).then(function (data) {
					if (data.status === 200) {
						data.json().then(function (json) {
							if (json.status.code === "0") {
								json = JSON.parse(_unicode2.default.toHex(JSON.stringify(json.data.china)));
								console.log(json);
							}
						});
					}
				}).then(function (data) {
					// console.log(data);
				}).catch(function (e) {
					console.log(e);
					console.log("Oops, error", e);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				return _react2.default.createElement(
					'div',
					{ id: 'baseData-main' },
					_react2.default.createElement(
						'div',
						{ id: 'baseData-head' },
						'请问您是',
						_react2.default.createElement(
							'span',
							{ id: 'baseData-head-tag' },
							'?'
						)
					),
					_react2.default.createElement(HeadImg, null),
					_react2.default.createElement(
						'div',
						{ id: 'baseData-body' },
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement('input', { type: 'text', placeholder: this.state.nick.placeholder, value: this.state.nick.name, onChange: function onChange(e) {
									_this5.nickChange(e);
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement(
								'div',
								{ className: 'baseData-sex' },
								'男'
							),
							_react2.default.createElement(
								'select',
								{ onChange: function onChange(e) {
										_this5.sexChange(e);
									} },
								_react2.default.createElement(
									'option',
									null,
									'男'
								),
								_react2.default.createElement(
									'option',
									null,
									'女'
								)
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement('input', { type: 'text', placeholder: '您的地址？' })
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'baseData-foot', onTouchTap: function onTouchTap(e) {
								_this5.nexts(e);
							} },
						_react2.default.createElement('img', { src: this.state.next.url })
					)
				);
			}
		}]);

		return Main;
	})(_react2.default.Component);

	var BaseData = (function (_React$Component3) {
		_inherits(BaseData, _React$Component3);

		function BaseData() {
			_classCallCheck(this, BaseData);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseData).call(this));
		}

		_createClass(BaseData, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(Main, null)
				);
			}
		}]);

		return BaseData;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(BaseData, null), document.querySelector('#baseData-content'));

/***/ },

/***/ 165:
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

/***/ 166:
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

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(170)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./baseData.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./baseData.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(169)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\nhtml, body {\n  background-color: #f3f4f5; }\n\n#baseData-content {\n  overflow: hidden; }\n\n#baseData-main {\n  text-align: center;\n  padding-top: .3rem;\n  padding-bottom: .5rem; }\n  #baseData-main #baseData-head {\n    font-size: .5rem;\n    margin-bottom: .3rem;\n    color: #333333; }\n    #baseData-main #baseData-head #baseData-head-tag {\n      font-size: 140%; }\n  #baseData-main #baseData-headImg {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 3rem;\n    height: 3rem;\n    margin: auto;\n    padding: .1rem;\n    border: .06rem solid #ffffff;\n    border-radius: 100%;\n    margin-bottom: .6rem; }\n    #baseData-main #baseData-headImg img {\n      width: 100%;\n      height: 100%;\n      border-radius: 100%; }\n    #baseData-main #baseData-headImg input[type=file] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      opacity: 0; }\n  #baseData-main #baseData-body {\n    padding-bottom: .8rem; }\n    #baseData-main #baseData-body .baseData-unit {\n      position: relative;\n      width: 70%;\n      margin: auto;\n      border-bottom: 1px solid #dfdfdf;\n      padding-bottom: 1rem;\n      line-height: 1rem;\n      height: .5rem;\n      text-align: center;\n      font-size: .4rem;\n      color: #999999; }\n      #baseData-main #baseData-body .baseData-unit input {\n        width: 100%;\n        text-align: center;\n        font-size: inherit;\n        border: none;\n        background-color: transparent;\n        color: #333333; }\n        #baseData-main #baseData-body .baseData-unit input::-webkit-input-placeholder {\n          text-align: center;\n          color: #999999; }\n      #baseData-main #baseData-body .baseData-unit select {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n        border: none;\n        opacity: 0; }\n      #baseData-main #baseData-body .baseData-unit .baseData-sex {\n        color: #2fa4f6; }\n  #baseData-main #baseData-foot {\n    margin: auto;\n    width: 4rem; }\n    #baseData-main #baseData-foot img {\n      width: 100%; }\n", ""]);

	// exports


/***/ }

});