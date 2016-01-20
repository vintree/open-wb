webpackJsonp([0],{

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

	var _userMsg = __webpack_require__(164);

	var _userMsg2 = _interopRequireDefault(_userMsg);

	var _tab = __webpack_require__(169);

	var _tab2 = _interopRequireDefault(_tab);

	var _member = __webpack_require__(172);

	var _member2 = _interopRequireDefault(_member);

	var _tag = __webpack_require__(175);

	var _tag2 = _interopRequireDefault(_tag);

	var _related = __webpack_require__(178);

	var _related2 = _interopRequireDefault(_related);

	var _activity = __webpack_require__(181);

	var _activity2 = _interopRequireDefault(_activity);

	var _photo = __webpack_require__(184);

	var _photo2 = _interopRequireDefault(_photo);

	var _newest = __webpack_require__(187);

	var _newest2 = _interopRequireDefault(_newest);

	var _hot = __webpack_require__(190);

	var _hot2 = _interopRequireDefault(_hot);

	var _details = __webpack_require__(193);

	var _details2 = _interopRequireDefault(_details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//require('../../sass/base.scss');
	__webpack_require__(194);

	_autoFont2.default.init();

	var FansGroup = (function (_React$Component) {
	    _inherits(FansGroup, _React$Component);

	    function FansGroup() {
	        _classCallCheck(this, FansGroup);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FansGroup).call(this));

	        _this.state = {
	            tab: [{
	                name: '最新',
	                codeName: 'fansGroup-newest',
	                active: 'active'
	            }, {
	                name: '热门',
	                codeName: 'fansGroup-hot',
	                active: ''
	            }, {
	                name: '详情',
	                codeName: 'fansGroup-details',
	                active: ''
	            }]
	        };
	        return _this;
	    }

	    _createClass(FansGroup, [{
	        key: 'toggleTab',
	        value: function toggleTab(e) {
	            var node = e.target;
	            var role = node.attributes.role.value;
	            (0, _jquery2.default)(node).addClass('active').siblings().removeClass('active');
	            (0, _jquery2.default)('#' + role).addClass('active').siblings().removeClass('active');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'section',
	                    { id: 'fansGroup-head' },
	                    _react2.default.createElement(_userMsg2.default, { name: 'Nate' })
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'fansGroup-tab', onClick: function onClick(e) {
	                            _this2.toggleTab(e);
	                        } },
	                    _react2.default.createElement(_tab2.default, { data: this.state.tab })
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'fansGroup-newest', className: 'fansGroup-md active' },
	                    _react2.default.createElement(_newest2.default, null)
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'fansGroup-hot', className: 'fansGroup-md' },
	                    _react2.default.createElement(_newest2.default, null)
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'fansGroup-details', className: 'fansGroup-md' },
	                    _react2.default.createElement(_details2.default, null)
	                )
	            );
	        }
	    }]);

	    return FansGroup;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(FansGroup, { name: 'Nate' }), document.getElementById('fansGroup-content'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(173);

	//import $ from 'jquery';

	var Member = (function (_React$Component) {
	    _inherits(Member, _React$Component);

	    function Member() {
	        _classCallCheck(this, Member);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Member).call(this));
	    }

	    _createClass(Member, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'member' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'member-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'member-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'member-1-name' },
	                            '群成员'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'member-1-num' },
	                            '210'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'member-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'member-2-owner' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' }),
	                            _react2.default.createElement(
	                                'div',
	                                { id: 'member-2-owner-tag' },
	                                '群主'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'member-2-member-group' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'member-2-member' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'member-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'member-3-img' },
	                            _react2.default.createElement('img', { src: '../img/right@1.png' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Member;
	})(_react2.default.Component);

	exports.default = Member;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./member.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./member.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#member {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #member #member-group {\n    height: 1.3rem;\n    overflow: hidden; }\n    #member #member-group #member-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #member #member-group #member-1 #member-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #member #member-group #member-1 #member-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #member #member-group #member-2 {\n      width: 5.5rem;\n      height: 1.3rem;\n      line-height: 1.3rem;\n      float: left; }\n      #member #member-group #member-2 #member-2-owner {\n        position: relative;\n        width: 1rem;\n        -webkit-border-radius: 100%;\n        border-radius: 100%;\n        float: left; }\n        #member #member-group #member-2 #member-2-owner img {\n          width: .7rem;\n          height: .7rem;\n          -webkit-border-radius: 100%;\n          border-radius: 100%; }\n        #member #member-group #member-2 #member-2-owner #member-2-owner-tag {\n          position: absolute;\n          bottom: .26rem;\n          right: .1rem;\n          line-height: .35rem;\n          padding: 0 .1rem;\n          background-color: #ffb541;\n          color: #FFFFFF;\n          -webkit-border-radius: .2rem;\n          border-radius: .2rem;\n          font-size: .2rem; }\n      #member #member-group #member-2 #member-2-member-group {\n        line-height: 1.118rem; }\n        #member #member-group #member-2 #member-2-member-group .member-2-member {\n          width: .5rem;\n          -webkit-border-radius: 100%;\n          border-radius: 100%;\n          display: inline-block;\n          padding: 0 .05rem; }\n          #member #member-group #member-2 #member-2-member-group .member-2-member img {\n            width: .5rem;\n            height: .5rem;\n            -webkit-border-radius: 100%;\n            border-radius: 100%; }\n    #member #member-group #member-3 {\n      float: right; }\n      #member #member-group #member-3 #member-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #member #member-group #member-3 #member-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(176);

	//import $ from 'jquery';

	var Tag = (function (_React$Component) {
	    _inherits(Tag, _React$Component);

	    function Tag() {
	        _classCallCheck(this, Tag);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this));
	    }

	    _createClass(Tag, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'tag' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'tag-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'tag-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'tag-1-name' },
	                            '群标签'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'tag-1-num' },
	                            '5'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'tag-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'tag-2-group' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '科技智联'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '互联网创业'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '粉丝'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'tag-2-group' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-customTag' },
	                                '牛人们'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-customTag' },
	                                '科技极客'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Tag;
	})(_react2.default.Component);

	exports.default = Tag;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#tag {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  font-size: .28rem; }\n  #tag #tag-group {\n    height: 1.3rem;\n    overflow: hidden; }\n    #tag #tag-group #tag-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      padding-top: .2rem;\n      float: left; }\n      #tag #tag-group #tag-1 #tag-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #tag #tag-group #tag-1 #tag-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #tag #tag-group #tag-2 {\n      height: 1.3rem;\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: column;\n      font-size: .2rem;\n      color: #FFFFFF; }\n      #tag #tag-group #tag-2 .tag-2-group {\n        flex: 1;\n        line-height: 0.676rem; }\n        #tag #tag-group #tag-2 .tag-2-group span {\n          padding: .1rem .2rem;\n          -webkit-border-radius: .3rem;\n          border-radius: .3rem;\n          margin-left: .2rem; }\n          #tag #tag-group #tag-2 .tag-2-group span:first-child {\n            margin: 0; }\n        #tag #tag-group #tag-2 .tag-2-group .tag-2-group-sysTag {\n          background-color: #ffb541; }\n        #tag #tag-group #tag-2 .tag-2-group .tag-2-group-customTag {\n          background-color: #a8e1ff; }\n", ""]);

	// exports


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(179);

	//import $ from 'jquery';

	var Related = (function (_React$Component) {
	    _inherits(Related, _React$Component);

	    function Related() {
	        _classCallCheck(this, Related);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Related).call(this));
	    }

	    _createClass(Related, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'related' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'related-1-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'related-1-label' },
	                        '相关公司'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'related-1-name' },
	                        '深圳创客智能科技信息有限公司'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'related-2-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'related-2-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'related-2-name' },
	                            '相关连接'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'related-2-num' },
	                            '4'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'related-2-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'related-2-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-img' },
	                                _react2.default.createElement('img', { src: '../img/wechat.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-name' },
	                                '微信'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'related-2-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-img' },
	                                _react2.default.createElement('img', { src: '../img/webo.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-name' },
	                                '微博'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'related-2-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-img' },
	                                _react2.default.createElement('img', { src: '../img/app.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-name' },
	                                'APP'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'related-2-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-img' },
	                                _react2.default.createElement('img', { src: '../img/web.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'related-2-2-name' },
	                                '网页'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Related;
	})(_react2.default.Component);

	exports.default = Related;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(180);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./related.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./related.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#related {\n  font-size: .28rem;\n  padding-left: .1rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #related #related-1-group {\n    line-height: 1rem; }\n    #related #related-1-group #related-1-label {\n      display: inline-block;\n      width: 1.3rem;\n      float: left;\n      color: #999999;\n      text-align: center; }\n    #related #related-1-group #related-1-name {\n      font-size: .25rem;\n      display: inline-block;\n      width: calc(100% - 1.3rem);\n      color: #474747;\n      border-bottom: 1px solid #f6f6f8; }\n  #related #related-2-group {\n    padding-top: .2rem; }\n    #related #related-2-group #related-2-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      float: left; }\n      #related #related-2-group #related-2-1 #related-2-name {\n        vertical-align: middle;\n        color: #999999; }\n      #related #related-2-group #related-2-1 #related-2-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #related #related-2-group #related-2-2 {\n      display: inline-block;\n      width: calc(100% - 1.3rem);\n      text-align: center; }\n      #related #related-2-group #related-2-2 .related-2-2-unit {\n        width: 25%;\n        height: 2rem;\n        display: inline-block; }\n        #related #related-2-group #related-2-2 .related-2-2-unit .related-2-2-img img {\n          width: 1.2rem; }\n        #related #related-2-group #related-2-2 .related-2-2-unit .related-2-2-name {\n          line-height: 1.9;\n          color: #474747;\n          font-size: .25rem; }\n", ""]);

	// exports


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(185);

	var Photo = (function (_React$Component) {
	    _inherits(Photo, _React$Component);

	    function Photo() {
	        _classCallCheck(this, Photo);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Photo).call(this));
	    }

	    _createClass(Photo, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'photo' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'photo-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'photo-1-label' },
	                            _react2.default.createElement(
	                                'div',
	                                { id: 'photo-name' },
	                                '群相册'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { id: 'photo-num' },
	                                '220'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'photo-1' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Photo;
	})(_react2.default.Component);

	exports.default = Photo;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./photo.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./photo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "#photo {\n  padding: .2rem .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  font-size: .28rem; }\n  #photo #photo-group .photo-1 {\n    float: left;\n    text-align: center;\n    padding: .077rem;\n    width: 1.62rem;\n    height: 1.62rem; }\n    #photo #photo-group .photo-1 img {\n      width: 100%; }\n    #photo #photo-group .photo-1 #photo-1-label {\n      width: 1.3rem;\n      line-height: 1.75; }\n      #photo #photo-group .photo-1 #photo-1-label #photo-name {\n        color: #999999; }\n      #photo #photo-group .photo-1 #photo-1-label #photo-num {\n        color: #9ed7ff; }\n", ""]);

	// exports


/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(191);

	//import $ from 'jquery';

	var Tag = (function (_React$Component) {
	    _inherits(Tag, _React$Component);

	    function Tag() {
	        _classCallCheck(this, Tag);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this));
	    }

	    _createClass(Tag, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'tag' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'tag-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'tag-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'tag-1-name' },
	                            '群标签'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'tag-1-num' },
	                            '5'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'tag-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'tag-2-group' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '科技智联'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '互联网创业'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-sysTag' },
	                                '粉丝'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'tag-2-group' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-customTag' },
	                                '牛人们'
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'tag-2-group-customTag' },
	                                '科技极客'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Tag;
	})(_react2.default.Component);

	exports.default = Tag;

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./hot.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./hot.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n", ""]);

	// exports


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _member = __webpack_require__(172);

	var _member2 = _interopRequireDefault(_member);

	var _tag = __webpack_require__(175);

	var _tag2 = _interopRequireDefault(_tag);

	var _related = __webpack_require__(178);

	var _related2 = _interopRequireDefault(_related);

	var _activity = __webpack_require__(181);

	var _activity2 = _interopRequireDefault(_activity);

	var _photo = __webpack_require__(184);

	var _photo2 = _interopRequireDefault(_photo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Newest from "./newest.jsx";
	// import Hot from "./hot.jsx";

	var Details = (function (_React$Component) {
	    _inherits(Details, _React$Component);

	    function Details() {
	        _classCallCheck(this, Details);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this));
	    }

	    _createClass(Details, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { id: 'tab-details' },
	                _react2.default.createElement(
	                    "section",
	                    { id: "fansGroup-member", className: "gap" },
	                    _react2.default.createElement(_member2.default, null)
	                ),
	                _react2.default.createElement(
	                    "section",
	                    { id: "fansGroup-tag", className: "gap" },
	                    _react2.default.createElement(_tag2.default, null)
	                ),
	                _react2.default.createElement(
	                    "section",
	                    { id: "fansGroup-related", className: "gap" },
	                    _react2.default.createElement(_related2.default, null)
	                ),
	                _react2.default.createElement(
	                    "section",
	                    { id: "fansGroup-activity", className: "gap" },
	                    _react2.default.createElement(_activity2.default, null)
	                ),
	                _react2.default.createElement(
	                    "section",
	                    { className: "gap" },
	                    _react2.default.createElement(_photo2.default, null)
	                )
	            );
	        }
	    }]);

	    return Details;
	})(_react2.default.Component);

	exports.default = Details;

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./fansGroup.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./fansGroup.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "*::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0.5); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n#fansGroup-content {\n  background-color: #f6f6f8;\n  height: 1000px; }\n\n.fansGroup-md {\n  display: none; }\n  .fansGroup-md.active {\n    display: block; }\n", ""]);

	// exports


/***/ }

});