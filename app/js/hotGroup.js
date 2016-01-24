webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(159);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _autoFont = __webpack_require__(160);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	var _addScript = __webpack_require__(162);

	var _addScript2 = _interopRequireDefault(_addScript);

	var _head = __webpack_require__(163);

	var _head2 = _interopRequireDefault(_head);

	var _groupTab = __webpack_require__(200);

	var _groupTab2 = _interopRequireDefault(_groupTab);

	var _groupList = __webpack_require__(203);

	var _groupList2 = _interopRequireDefault(_groupList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(206);

	_autoFont2.default.init();

	var HotGroup = (function (_React$Component) {
	    _inherits(HotGroup, _React$Component);

	    function HotGroup() {
	        _classCallCheck(this, HotGroup);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(HotGroup).call(this));
	    }

	    _createClass(HotGroup, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'section',
	                    null,
	                    _react2.default.createElement(_groupTab2.default, null)
	                ),
	                _react2.default.createElement(
	                    'section',
	                    null,
	                    _react2.default.createElement(_groupList2.default, null)
	                )
	            );
	        }
	    }]);

	    return HotGroup;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(HotGroup, { name: 'Nate' }), document.getElementById('hotGroup-content'));

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(159);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(201);

	var GroupTab = (function (_React$Component) {
	    _inherits(GroupTab, _React$Component);

	    function GroupTab(props) {
	        _classCallCheck(this, GroupTab);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GroupTab).call(this));
	    }

	    _createClass(GroupTab, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'groupTab' },
	                _react2.default.createElement('div', { id: 'groupTab-left' }),
	                _react2.default.createElement('div', { id: 'groupTab-right' }),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'groupTab-center' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'groupTab-overflow' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit active' },
	                            '最新'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '最火'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '投资'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '媒体人'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '职业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '空间'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '运动'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '美容'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '职业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '空间'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '职业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupTab-unit' },
	                            '空间'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return GroupTab;
	})(_react2.default.Component);

	exports.default = GroupTab;

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(202);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./groupTab.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./groupTab.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "#groupTab {\n  font-size: .35rem;\n  height: 1rem;\n  line-height: 1rem;\n  white-space: nowrap;\n  background-color: #ffffff;\n  color: #666666; }\n  #groupTab #groupTab-left {\n    float: left;\n    height: 1rem;\n    width: .2rem;\n    border-bottom: 2px solid #e2e2e2; }\n  #groupTab #groupTab-right {\n    float: right;\n    height: 1rem;\n    width: .2rem;\n    border-bottom: 2px solid #e2e2e2; }\n  #groupTab #groupTab-center {\n    height: 1.1rem;\n    overflow: hidden; }\n    #groupTab #groupTab-center #groupTab-overflow {\n      overflow-y: hidden;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      height: 1.5rem; }\n    #groupTab #groupTab-center .groupTab-unit {\n      display: inline-block;\n      padding: 0 .15rem;\n      border-bottom: 2px solid #e2e2e2;\n      height: 1rem;\n      line-height: 1rem; }\n      #groupTab #groupTab-center .groupTab-unit.active {\n        color: #2fa4f6;\n        border-bottom: 2px solid #2fa4f6; }\n", ""]);

	// exports


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(159);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(204);

	var GroupList = (function (_React$Component) {
	    _inherits(GroupList, _React$Component);

	    function GroupList(props) {
	        _classCallCheck(this, GroupList);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(GroupList).call(this));
	    }

	    _createClass(GroupList, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'groupList' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'groupList-unit' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-head' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-msg' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'groupList-mainInfo' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'groupList-name' },
	                                    '谁动了我的奶酪'
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'groupList-tag' },
	                                    '我司官方'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'groupList-info' },
	                                '发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-px' },
	                        _react2.default.createElement('div', { className: 'groupList-radius' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-body' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-num' },
	                            '1280个成员'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-member' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '圆圆、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '吹吹、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '小鱼儿、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '杜拉拉、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '鱼刺、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '神奇宝贝、'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-join' },
	                            '+ 加入'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'groupList-unit' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-head' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-msg' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'groupList-mainInfo' },
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'groupList-name' },
	                                    '谁动了我的奶酪'
	                                ),
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'groupList-tag' },
	                                    '我司官方'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'groupList-info' },
	                                '发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-px' },
	                        _react2.default.createElement('div', { className: 'groupList-radius' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'groupList-body' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-num' },
	                            '1280个成员'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-member' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '圆圆、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '吹吹、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '小鱼儿、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '杜拉拉、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '鱼刺、'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '神奇宝贝、'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'groupList-join' },
	                            '+ 加入'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return GroupList;
	})(_react2.default.Component);

	exports.default = GroupList;

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./groupList.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./groupList.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    文字省略\n*/\n#groupList {\n  padding: 0 .2rem;\n  font-size: .35rem; }\n  #groupList .groupList-unit {\n    margin-top: .2rem;\n    padding: .2rem;\n    border: 1px solid #e2e2e2;\n    border-radius: .2rem;\n    overflow: hidden;\n    background-color: #ffffff; }\n    #groupList .groupList-unit .groupList-head {\n      overflow: hidden;\n      margin-bottom: .2rem; }\n      #groupList .groupList-unit .groupList-head .groupList-img {\n        width: 1.4rem;\n        height: 1.4rem;\n        margin-right: .2rem;\n        border-radius: 100%;\n        float: left; }\n        #groupList .groupList-unit .groupList-head .groupList-img img {\n          width: 100%;\n          height: 100%;\n          border: 100%; }\n      #groupList .groupList-unit .groupList-head .groupList-msg .groupList-mainInfo {\n        line-height: .5rem; }\n        #groupList .groupList-unit .groupList-head .groupList-msg .groupList-mainInfo .groupList-name {\n          display: inline-block;\n          padding-right: .2rem;\n          color: #474747; }\n        #groupList .groupList-unit .groupList-head .groupList-msg .groupList-mainInfo .groupList-tag {\n          position: relative;\n          top: -.05rem;\n          font-size: 70%;\n          background-color: #ffb541;\n          padding: .06rem .1rem;\n          border-radius: .2rem;\n          color: #ffffff; }\n      #groupList .groupList-unit .groupList-head .groupList-msg .groupList-info {\n        display: -webkit-box;\n        text-overflow: -o-ellipsis-lastline;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        font-size: 90%;\n        line-height: 1.45;\n        color: #666666; }\n    #groupList .groupList-unit .groupList-px {\n      position: relative;\n      margin-left: .7rem;\n      border-bottom: 1px solid #e2e2e2; }\n      #groupList .groupList-unit .groupList-px .groupList-radius {\n        position: absolute;\n        top: -.04rem;\n        left: 0;\n        width: .12rem;\n        height: .12rem;\n        border-radius: 100%;\n        background-color: #e2e2e2; }\n    #groupList .groupList-unit .groupList-body {\n      font-size: 80%;\n      margin-top: .2rem;\n      height: .5rem;\n      line-height: .5rem;\n      overflow: hidden; }\n      #groupList .groupList-unit .groupList-body .groupList-num {\n        float: left;\n        width: 1.5rem;\n        padding-right: .2rem;\n        color: #999999; }\n      #groupList .groupList-unit .groupList-body .groupList-member {\n        float: left;\n        width: 3.5rem;\n        color: #2fa4f6;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #groupList .groupList-unit .groupList-body .groupList-join {\n        float: right;\n        padding: 0 .2rem;\n        background-color: #a8e1ff;\n        color: #ffffff;\n        border-radius: .3rem; }\n", ""]);

	// exports


/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./hotGroup.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./hotGroup.scss");
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

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\n#hotGroup-content {\n  background-color: #f6f6f8;\n  height: 1000px; }\n", ""]);

	// exports


/***/ }

});