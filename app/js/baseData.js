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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(163);

	(0, _reactTapEventPlugin2.default)();

	var HeadImg = (function (_React$Component) {
		_inherits(HeadImg, _React$Component);

		function HeadImg() {
			_classCallCheck(this, HeadImg);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(HeadImg).call(this));
		}

		_createClass(HeadImg, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ id: 'baseData-headImg' },
					_react2.default.createElement('img', { src: '../img/defaultHead@3x.png' }),
					_react2.default.createElement('input', { type: 'file' })
				);
			}
		}]);

		return HeadImg;
	})(_react2.default.Component);

	var Main = (function (_React$Component2) {
		_inherits(Main, _React$Component2);

		function Main() {
			_classCallCheck(this, Main);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
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
							_react2.default.createElement('input', { type: 'text', placeholder: '怎么称呼您？' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement('input', { type: 'text', placeholder: '您的性别？' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement('input', { type: 'text', placeholder: '您的职业？' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'baseData-unit' },
							_react2.default.createElement('input', { type: 'text', placeholder: '您的地址？' })
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'baseData-foot' },
						_react2.default.createElement('img', { src: '../img/next@3x.png' })
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

	_reactDom2.default.render(_react2.default.createElement(BaseData, null), document.getElementById('baseData-content'));

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(166)(content, {});
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

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(165)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\nhtml, body {\n  background-color: #f3f4f5; }\n\n#baseData-content {\n  overflow: hidden; }\n\n#baseData-main {\n  text-align: center;\n  padding-top: 1rem;\n  padding-bottom: 2rem; }\n  #baseData-main #baseData-head {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #333333; }\n    #baseData-main #baseData-head #baseData-head-tag {\n      font-size: 140%; }\n  #baseData-main #baseData-headImg {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 10rem;\n    height: 10rem;\n    margin: auto;\n    padding: .5rem;\n    border: .2rem solid #ffffff;\n    border-radius: 100%;\n    margin-bottom: 1rem; }\n    #baseData-main #baseData-headImg img {\n      width: 100%;\n      height: 100%; }\n    #baseData-main #baseData-headImg input[type=file] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      visibility: hidden; }\n  #baseData-main #baseData-body {\n    padding-bottom: 1.5rem; }\n    #baseData-main #baseData-body .baseData-unit {\n      margin-bottom: .5rem; }\n      #baseData-main #baseData-body .baseData-unit input {\n        text-align: center;\n        font-size: 1.2rem;\n        border: none;\n        background-color: transparent;\n        line-height: 2rem;\n        border-bottom: 1px solid #dfdfdf;\n        color: #999999; }\n        #baseData-main #baseData-body .baseData-unit input::-webkit-input-placeholder {\n          text-align: center; }\n  #baseData-main #baseData-foot {\n    margin: auto;\n    width: 12rem; }\n    #baseData-main #baseData-foot img {\n      width: 100%; }\n", ""]);

	// exports


/***/ }

});