webpackJsonp([2],{

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

	var _autoFont = __webpack_require__(167);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(218);

	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();

	var Main = (function (_React$Component) {
		_inherits(Main, _React$Component);

		function Main() {
			_classCallCheck(this, Main);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));

			_this.state = {
				list: [{
					url: '../img/guide/大牛语录@3x',
					active: ''
				}, {
					url: '../img/guide/公司八卦@3x',
					active: ''
				}, {
					url: '../img/guide/职业技能@3x',
					active: ''
				}, {
					url: '../img/guide/行业干活@3x',
					active: ''
				}, {
					url: '../img/guide/创业@3x',
					active: ''
				}, {
					url: '../img/guide/兴趣爱好@3x',
					active: ''
				}],
				next: {
					url: '../img/next@3x',
					active: ''
				}
			};
			return _this;
		}

		_createClass(Main, [{
			key: 'isNext',
			value: function isNext(list) {
				var next = this.state.next;
				var nextTag = list.some(function (v, ix) {
					return v.active === 'active';
				});

				if (nextTag) {
					if (!next.url.includes('active')) {
						next.url = next.url + 'active';
					}
				} else {
					next.url = next.url.substr(0, next.url.indexOf('active'));
				}
				this.setState({
					next: next
				});
			}
		}, {
			key: 'isActive',
			value: function isActive(e) {
				var node = e.target;
				var ix = node.getAttribute('data-ix');
				var list = this.state.list;
				if (e.target.tagName.toLowerCase() === 'img') {
					if (list[ix].active === 'active') {
						list[ix].active = '';
						list[ix].url = list[ix].url.substr(0, list[ix].url.indexOf('active'));
					} else {
						list[ix].active = 'active';
						list[ix].url = list[ix].url + 'active';
					}
					this.setState({ list: list });
					this.isNext(list);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var node = this.state.list.map(function (v, ix) {
					return _react2.default.createElement(
						'div',
						{ key: ix, className: 'guide-unit guide-unit-' + (ix + 1) },
						_react2.default.createElement('img', { className: v.active, src: v.url + '.png', 'data-ix': ix })
					);
				});
				return _react2.default.createElement(
					'div',
					{ id: 'guide-main' },
					_react2.default.createElement(
						'div',
						{ id: 'guide-head' },
						'不上班的时候您关注什么',
						_react2.default.createElement(
							'span',
							{ id: 'guide-head-tag' },
							'?'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'guide-body', onTouchTap: function onTouchTap(e) {
								_this2.isActive(e);
							} },
						node
					),
					_react2.default.createElement(
						'div',
						{ id: 'guide-foot' },
						_react2.default.createElement('img', { src: this.state.next.url + '.png' })
					)
				);
			}
		}]);

		return Main;
	})(_react2.default.Component);

	var BaseData = (function (_React$Component2) {
		_inherits(BaseData, _React$Component2);

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

	_reactDom2.default.render(_react2.default.createElement(BaseData, null), document.querySelector('#guide-content'));

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(177)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./guide.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./guide.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(176)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\nhtml, body {\n  background-color: #f3f4f5; }\n\n#guide-content {\n  overflow: hidden; }\n\n#guide-main {\n  text-align: center;\n  padding-top: .3rem;\n  padding-bottom: .5rem; }\n  #guide-main #guide-head {\n    font-size: .5rem;\n    margin-bottom: .3rem;\n    color: #333333; }\n    #guide-main #guide-head #guide-head-tag {\n      font-size: 140%; }\n  #guide-main #guide-body {\n    position: relative;\n    height: 8.5rem; }\n    #guide-main #guide-body .guide-unit {\n      width: 7rem;\n      height: 7rem;\n      border-radius: 100%;\n      overflow: hidden; }\n      #guide-main #guide-body .guide-unit img {\n        width: 100%;\n        height: 100%; }\n    #guide-main #guide-body .guide-unit-1 {\n      margin: auto;\n      width: 2.3rem;\n      height: 2.3rem; }\n    #guide-main #guide-body .guide-unit-2 {\n      position: absolute;\n      top: 1.5rem;\n      left: .3rem;\n      width: 2.3rem;\n      height: 2.3rem; }\n    #guide-main #guide-body .guide-unit-3 {\n      position: absolute;\n      top: 2.9rem;\n      left: 2.2rem;\n      width: 2.5rem;\n      height: 2.5rem; }\n    #guide-main #guide-body .guide-unit-4 {\n      position: absolute;\n      top: 1.5rem;\n      right: .3rem;\n      width: 2.7rem;\n      height: 2.7rem; }\n    #guide-main #guide-body .guide-unit-5 {\n      position: absolute;\n      top: 5.2rem;\n      left: .8rem;\n      width: 2.3rem;\n      height: 2.3rem; }\n    #guide-main #guide-body .guide-unit-6 {\n      position: absolute;\n      top: 4.5rem;\n      right: 1rem;\n      width: 2rem;\n      height: 2rem; }\n  #guide-main #guide-foot {\n    margin: auto;\n    width: 4rem; }\n    #guide-main #guide-foot img {\n      width: 100%; }\n", ""]);

	// exports


/***/ }

});