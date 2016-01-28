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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(206);

	(0, _reactTapEventPlugin2.default)();

	var Main = (function (_React$Component) {
		_inherits(Main, _React$Component);

		function Main() {
			_classCallCheck(this, Main);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
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
						{ id: 'guide-body' },
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-1' },
							_react2.default.createElement('img', { src: '../img/guide/大牛语录@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-2' },
							_react2.default.createElement('img', { src: '../img/guide/公司八卦@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-3' },
							_react2.default.createElement('img', { src: '../img/guide/职业技能@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-4' },
							_react2.default.createElement('img', { src: '../img/guide/行业干活@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-5' },
							_react2.default.createElement('img', { src: '../img/guide/创业@3x.png' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'guide-unit guide-unit-6' },
							_react2.default.createElement('img', { src: '../img/guide/兴趣爱好@3x.png' })
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'guide-foot' },
						_react2.default.createElement('img', { src: '../img/next@3x.png' })
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

	_reactDom2.default.render(_react2.default.createElement(BaseData, null), document.getElementById('guide-content'));

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(166)(content, {});
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

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(165)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\nhtml, body {\n  background-color: #f3f4f5; }\n\n#guide-content {\n  overflow: hidden; }\n\n#guide-main {\n  text-align: center;\n  padding-top: 1rem;\n  padding-bottom: 2rem; }\n  #guide-main #guide-head {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #333333; }\n    #guide-main #guide-head #guide-head-tag {\n      font-size: 140%; }\n  #guide-main #guide-body {\n    position: relative;\n    height: 30rem; }\n    #guide-main #guide-body .guide-unit {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 7rem;\n      height: 7rem; }\n      #guide-main #guide-body .guide-unit img {\n        width: 100%;\n        height: 100%; }\n    #guide-main #guide-body .guide-unit-1 {\n      transform: translate3D(8rem, 0, 0); }\n    #guide-main #guide-body .guide-unit-2 {\n      transform: translate3D(1rem, 7rem, 0); }\n    #guide-main #guide-body .guide-unit-3 {\n      transform: translate3D(8.5rem, 9rem, 0); }\n    #guide-main #guide-body .guide-unit-4 {\n      transform: translate3D(15rem, 5rem, 0); }\n    #guide-main #guide-body .guide-unit-5 {\n      transform: translate3D(4rem, 16rem, 0); }\n    #guide-main #guide-body .guide-unit-6 {\n      width: 6rem;\n      height: 6rem;\n      transform: translate3D(14rem, 15rem, 0); }\n  #guide-main #guide-foot {\n    margin: auto;\n    width: 12rem; }\n    #guide-main #guide-foot img {\n      width: 100%; }\n", ""]);

	// exports


/***/ }

});