webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _autoFont = __webpack_require__(160);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	var _addScript = __webpack_require__(162);

	var _addScript2 = _interopRequireDefault(_addScript);

	var _head = __webpack_require__(163);

	var _head2 = _interopRequireDefault(_head);

	var _userMsg = __webpack_require__(164);

	var _userMsg2 = _interopRequireDefault(_userMsg);

	var _tab = __webpack_require__(169);

	var _tab2 = _interopRequireDefault(_tab);

	var _member = __webpack_require__(170);

	var _member2 = _interopRequireDefault(_member);

	var _tag = __webpack_require__(173);

	var _tag2 = _interopRequireDefault(_tag);

	var _related = __webpack_require__(176);

	var _related2 = _interopRequireDefault(_related);

	var _activity = __webpack_require__(179);

	var _activity2 = _interopRequireDefault(_activity);

	var _photo = __webpack_require__(182);

	var _photo2 = _interopRequireDefault(_photo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//require('../../sass/base.scss');
	__webpack_require__(192);

	_autoFont2.default.init();

	var User = (function (_React$Component) {
	    _inherits(User, _React$Component);

	    function User() {
	        _classCallCheck(this, User);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this));

	        _this.state = {
	            tab: [{
	                name: '动态',
	                codeName: 'user-dynamic',
	                active: ''
	            }, {
	                name: '个人',
	                codeName: 'user-personage',
	                active: 'active'
	            }]
	        };
	        return _this;
	    }

	    _createClass(User, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'section',
	                    { id: 'user-head' },
	                    _react2.default.createElement(_userMsg2.default, { name: 'Nate' })
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'user-tab', className: '' },
	                    _react2.default.createElement(_tab2.default, { data: this.state.tab })
	                ),
	                _react2.default.createElement('section', { id: 'user-dynamic', className: '' }),
	                _react2.default.createElement('section', { id: 'user-personage' })
	            );
	        }
	    }]);

	    return User;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(User, { name: 'Nate' }), document.getElementById('user-content'));

/***/ }
]);