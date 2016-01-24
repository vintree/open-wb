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

	var _nav = __webpack_require__(187);

	var _nav2 = _interopRequireDefault(_nav);

	var _newest = __webpack_require__(191);

	var _newest2 = _interopRequireDefault(_newest);

	var _hot = __webpack_require__(194);

	var _hot2 = _interopRequireDefault(_hot);

	var _details = __webpack_require__(197);

	var _details2 = _interopRequireDefault(_details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(198);

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
	        key: 'initializeTouchEvents',
	        value: function initializeTouchEvents() {
	            return true;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            document.getElementById('fansGroup-tab').onclick = function (e) {
	                var node = _reactDom2.default.findDOMNode(e.target);
	                var tab = _this2.state.tab;
	                var ix = Number(node.getAttribute('data-ix'));
	                for (var i = 0, l = tab.length; i < l; i++) {
	                    if (i === ix) {
	                        tab[i].active = 'active';
	                    } else {
	                        tab[i].active = '';
	                    }
	                }
	                _this2.setState({ tab: tab });
	            };

	            document.getElementById('fansGroup-head').onclick = function (e) {
	                var node = _reactDom2.default.findDOMNode(e.target);
	                if (node.id === 'userMsg-fallback' || node.parentNode.id === 'userMsg-fallback') {
	                    document.querySelector('#nav').classList.add('active');
	                    document.querySelector('.base-body').classList.add('active');
	                    if (node.classList.contains('active')) {} else {
	                        // node.classList.add('active');
	                        // console.log(document.querySelector('.base-nav'));
	                        // document.querySelector('#nav').classList.add('active');
	                        // document.querySelector('.base-body').classList.add('active');
	                    }
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'base-nav' },
	                    _react2.default.createElement(_nav2.default, null)
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'base-body' },
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'fansGroup-head' },
	                        _react2.default.createElement(_userMsg2.default, { name: 'Nate' })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'fansGroup-tab' },
	                        _react2.default.createElement(_tab2.default, { data: this.state.tab })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'fansGroup-newest', className: 'fansGroup-md ' + this.state.tab[0].active },
	                        _react2.default.createElement(_newest2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'fansGroup-hot', className: 'fansGroup-md ' + this.state.tab[1].active },
	                        _react2.default.createElement(_newest2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'fansGroup-details', className: 'fansGroup-md ' + this.state.tab[2].active },
	                        _react2.default.createElement(_details2.default, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return FansGroup;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(FansGroup, { name: 'Nate' }), document.getElementById('fansGroup-content'));

/***/ },

/***/ 164:
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

	__webpack_require__(165);

	//import $ from 'jquery';

	var UserMsg = (function (_React$Component) {
	    _inherits(UserMsg, _React$Component);

	    function UserMsg() {
	        _classCallCheck(this, UserMsg);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserMsg).apply(this, arguments));
	    }

	    _createClass(UserMsg, [{
	        key: 'dataJson',
	        value: function dataJson(val) {
	            var dataTopic, dataUser, dataQ;
	            dataTopic = {
	                '知': ['知乎', '知乎社区', '知乎指南'],
	                '知乎': ['知乎', '知乎社区', '知乎指南']
	            };
	            dataUser = {
	                '知': ['知道', '知晓', '知知'],
	                '知乎': ['知乎者也', '知乎果壳', '知乎小楠']
	            };
	            dataQ = {
	                '知': ['知乎大牛有那些', '春知晓', '搜狗投资知乎的意义'],
	                '知乎': ['知乎有哪些高质量问答', '知乎如何赢利', '知乎在bat的战略地位']
	            };
	            return [dataTopic[val], dataUser[val], dataQ[val]];
	        }
	    }, {
	        key: 'handleInput',
	        value: function handleInput(e) {
	            var val = this.refs.search.value.trim();
	            console.log(this.dataJson(val));
	        }
	    }, {
	        key: 'handleFocus',
	        value: function handleFocus(e) {
	            $('#header-rsBox').addClass('active');
	        }
	    }, {
	        key: 'handleBlur',
	        value: function handleBlur(e) {
	            $('#header-rsBox').removeClass('active');
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            // alert('dada');
	            e.preventDefault();
	            // e.stopPropagation();

	            $('#zh-top-search-input').focus();
	            // alert('dasd');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'userMsg' },
	                _react2.default.createElement('img', { id: 'userMsg-kbImg', className: 'blur', src: '../img/bk.png' }),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'userMsg-head-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-head' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-fallback', className: 'userMsg-ease' },
	                            _react2.default.createElement('img', { id: 'userMsg-fallbackImg', src: '../img/fallback@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-share', className: 'userMsg-ease' },
	                            _react2.default.createElement('img', { src: '../img/share@1x.png' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-headImg' },
	                        _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-name' },
	                        'MakeBlok粉丝群'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-info' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-peaple', className: 'userMsg-info-group' },
	                            '123人'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-focus', className: 'userMsg-info-group' },
	                            '+ 加入'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'userMsg-des' },
	                        '有趣味的开源机器人，游戏骨粉级玩总动员尽在粉丝群~'
	                    )
	                )
	            );
	        }
	    }]);

	    return UserMsg;
	})(_react2.default.Component);

	exports.default = UserMsg;

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./userMsg.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./userMsg.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#userMsg {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 5rem;\n  color: #FFFFFF;\n  overflow: hidden; }\n  #userMsg #userMsg-kbImg {\n    position: absolute;\n    top: -6%;\n    left: -3%;\n    width: 106%;\n    height: 112%; }\n  #userMsg #userMsg-head-group {\n    position: relative; }\n    #userMsg #userMsg-head-group #userMsg-head {\n      height: .7rem;\n      overflow: hidden; }\n      #userMsg #userMsg-head-group #userMsg-head .userMsg-ease {\n        width: 0.8rem;\n        line-height: .6rem;\n        text-align: center;\n        height: 100%; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-fallback {\n        float: left; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-fallback img {\n          width: 0.3rem; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-share {\n        float: right; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-share img {\n          width: 0.42rem; }\n    #userMsg #userMsg-head-group #userMsg-headImg {\n      margin: 0 auto 0.2rem;\n      width: 1.5rem;\n      height: 1.5rem;\n      border: .05rem solid #FFFFFF;\n      -webkit-border-radius: 100%;\n      border-radius: 100%; }\n      #userMsg #userMsg-head-group #userMsg-headImg img {\n        width: 100%;\n        height: 100%;\n        -webkit-border-radius: 100%;\n        border-radius: 100%; }\n    #userMsg #userMsg-head-group #userMsg-name {\n      margin-bottom: 0.15rem;\n      text-align: center;\n      font-size: .4rem; }\n    #userMsg #userMsg-head-group #userMsg-info {\n      width: 2.8rem;\n      height: .6rem;\n      line-height: .6rem;\n      -webkit-border-radius: 2rem;\n      border-radius: 2rem;\n      margin: 0 auto 0.3rem;\n      font-size: .3rem;\n      border: .03rem solid #FFFFFF;\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row; }\n      #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group {\n        flex: 1;\n        text-align: center; }\n        #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group:first-child {\n          border-right: 1px solid #FFFFFF; }\n    #userMsg #userMsg-head-group #userMsg-des {\n      width: 90%;\n      text-align: center;\n      margin: auto;\n      font-size: .27rem;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n", ""]);

	// exports


/***/ },

/***/ 169:
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

	__webpack_require__(170);

	var Tab = (function (_React$Component) {
	    _inherits(Tab, _React$Component);

	    function Tab(props) {
	        _classCallCheck(this, Tab);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this));

	        _this.state = props;
	        return _this;
	    }

	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            var tab = this.state.data;
	            var tabNode = tab.map(function (_tab, ix) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'tab-tx ' + _tab.active, role: _tab.codeName, key: _tab.codeName, 'data-ix': ix },
	                    _tab.name
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { id: 'tab', className: 'gap' },
	                _react2.default.createElement('div', { id: 'tab-left' }),
	                _react2.default.createElement('div', { id: 'tab-right' }),
	                _react2.default.createElement(
	                    'div',
	                    { id: 'tab-center' },
	                    tabNode
	                )
	            );
	        }
	    }]);

	    return Tab;
	})(_react2.default.Component);

	exports.default = Tab;

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tab.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#tab {\n  line-height: 1rem;\n  background-color: #FFFFFF;\n  font-size: .35rem; }\n  #tab #tab-left {\n    width: 15%;\n    height: 1rem;\n    float: left;\n    border-bottom: .05rem solid #aeaeae; }\n  #tab #tab-right {\n    float: right;\n    width: 15%;\n    height: 1rem;\n    border-bottom: .05rem solid #aeaeae; }\n  #tab #tab-center {\n    width: 70%;\n    margin: auto;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-flow: row; }\n    #tab #tab-center .tab-tx {\n      text-align: center;\n      flex: 1;\n      color: #999999;\n      height: 1rem;\n      border-bottom: .05rem solid #aeaeae; }\n      #tab #tab-center .tab-tx.active {\n        color: #474747;\n        border-bottom: .05rem solid #2fa4f6; }\n\n.tab-md {\n  display: none; }\n  .tab-md.active {\n    display: block; }\n", ""]);

	// exports


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

/***/ 181:
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

	__webpack_require__(182);

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
	                { id: 'activity' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'activity-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'activity-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'activity-1-name' },
	                            '近期活动'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'activity-1-num' },
	                            '6'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'activity-2' },
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'activity-2-label' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '要不要在北京举办一次粉丝见面会?'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'activity-2-label' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '智能穿戴二代售价200大家觉得合理吗？'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'activity-2-label' },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    '新产品中国北京媒体发布会年前举行还是年后？'
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'activity-more' },
	                            _react2.default.createElement('img', { src: '../img/right@1.png' })
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

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./activity.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./activity.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#activity {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  font-size: .28rem; }\n  #activity #activity-group {\n    overflow: hidden; }\n    #activity #activity-group #activity-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      padding-top: .2rem;\n      float: left; }\n      #activity #activity-group #activity-1 #activity-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #activity #activity-group #activity-1 #activity-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #activity #activity-group #activity-2 {\n      float: left;\n      width: calc(100% - 1.3rem);\n      padding-top: .7rem; }\n      #activity #activity-group #activity-2 .activity-2-label span {\n        display: inline-block;\n        font-size: .25rem;\n        color: #2fa4f6;\n        background-color: #f6f6f8;\n        border-radius: .5rem;\n        padding: .1rem .2rem;\n        margin-bottom: .3rem; }\n      #activity #activity-group #activity-2 .activity-more {\n        text-align: right;\n        padding-right: .1rem; }\n        #activity #activity-group #activity-2 .activity-more img {\n          height: .4rem;\n          transform: rotate(90DEG); }\n", ""]);

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

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _url = __webpack_require__(188);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/*
	    AT:
	        ABEL

	    EQ:
	        在URL中nav参数作为标识

	    DT:
	        2016-1-20

	*/

	__webpack_require__(189);

	var nav = (function (_React$Component) {
	    _inherits(nav, _React$Component);

	    function nav(props) {
	        _classCallCheck(this, nav);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(nav).call(this, props));

	        _this.state = {
	            nav: [{
	                name: '热门推荐',
	                active: 'active',
	                img: 'heart'
	            }, {
	                name: '热门群组',
	                active: '',
	                img: 'hot'
	            }, {
	                name: '话题',
	                active: '',
	                img: 'talk'
	            }, {
	                name: '活动',
	                active: '',
	                img: 'activity'
	            }, {
	                name: '我的主页',
	                active: '',
	                img: 'me'
	            }, {
	                name: '关于我们',
	                active: '',
	                img: 'about'
	            }]
	        };
	        return _this;
	    }

	    _createClass(nav, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var flag = true; // 是否带有相关参数
	            var navList = this.state.nav;
	            var tag = _url2.default.getParams('nav');
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = navList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var o = _step.value;

	                    if (o.img === tag) {
	                        flag = false;
	                        o.active = 'active';
	                        o.img += '_active';
	                    } else {
	                        o.active = '';
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            if (flag) {
	                navList[0].active = 'active';
	                navList[0].img += '_active';
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.getElementById('nav-hide').onclick = function (e) {
	                document.querySelector('#nav').classList.remove('active');
	                document.querySelector('.base-body').classList.remove('active');
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var navList = this.state.nav.map(function (v) {
	                return _react2.default.createElement(
	                    'a',
	                    { className: 'nav-unit ' + v.active, key: v.img, href: '?nav=' + v.img },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nav-img' },
	                        _react2.default.createElement('img', { src: '../img/icon_nav/' + v.img + '.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'nav-name' },
	                        v.name
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { id: 'nav', className: 'nav' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'nav-group' },
	                    navList
	                ),
	                _react2.default.createElement('div', { id: 'nav-hide' })
	            );
	        }
	    }]);

	    return nav;
	})(_react2.default.Component);

	exports.default = nav;

/***/ },

/***/ 188:
/***/ function(module, exports) {

	'use strict';

	var url = function url() {};
	url.getParams = function (key) {
		var search = location.search;
		if (search.indexOf('?') != -1) {
			var str = search.substr(1).split('&');
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var s = _step.value;

					if (s.indexOf(key) != -1) {
						return s.split('=')[1];
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	};

	module.exports = url;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./nav.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./nav.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "#nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  font-size: .35rem; }\n  #nav #nav-group {\n    float: left;\n    width: 4rem;\n    height: 100%;\n    background-color: #1c2229;\n    padding: 2rem 0; }\n    #nav #nav-group .nav-unit {\n      display: block;\n      padding: 0 .5rem;\n      line-height: 1.2rem;\n      margin-bottom: .2rem;\n      color: #ffffff; }\n      #nav #nav-group .nav-unit .nav-img {\n        display: inline-block;\n        position: relative;\n        top: .08rem;\n        width: .5rem; }\n        #nav #nav-group .nav-unit .nav-img img {\n          width: 100%;\n          height: 100%; }\n      #nav #nav-group .nav-unit .nav-name {\n        display: inline-block;\n        margin-left: .2rem; }\n      #nav #nav-group .nav-unit.active {\n        background-color: rgba(216, 239, 255, 0.12);\n        color: #3cafff; }\n  #nav #nav-hide {\n    float: left;\n    width: 3.5rem;\n    height: 100%;\n    display: inline-block; }\n\n.nav {\n  transition: transform .5s;\n  transform: translate3D(-100%, 0, 0); }\n  .nav.active {\n    transition: transform .5s;\n    transform: translate3D(0, 0, 0); }\n", ""]);

	// exports


/***/ },

/***/ 191:
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

	__webpack_require__(192);

	//import $ from 'jquery';

	var Newest_head = (function (_React$Component) {
	    _inherits(Newest_head, _React$Component);

	    function Newest_head() {
	        _classCallCheck(this, Newest_head);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_head).call(this));
	    }

	    _createClass(Newest_head, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-head' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-imgUser' },
	                    _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-msg' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-msg-pp' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-name' },
	                            '王家卫'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'newest-tag' },
	                            '电影导演'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'newest-tag' },
	                            '监制'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'newest-tag' },
	                            '编剧'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-msg-dt' },
	                        '今天 12:30'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-source' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-source-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-source-1-1' },
	                            '来自'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-source-1-2' },
	                            '春光乍泄剧组'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-source-2' },
	                        _react2.default.createElement('img', { src: '../img/photo.png' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_head;
	})(_react2.default.Component);

	var Newest_tx = (function (_React$Component2) {
	    _inherits(Newest_tx, _React$Component2);

	    function Newest_tx() {
	        _classCallCheck(this, Newest_tx);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_tx).call(this));
	    }

	    return Newest_tx;
	})(_react2.default.Component);

	var Newest_body_1 = (function (_React$Component3) {
	    _inherits(Newest_body_1, _React$Component3);

	    function Newest_body_1() {
	        _classCallCheck(this, Newest_body_1);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_body_1).call(this));
	    }

	    _createClass(Newest_body_1, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tx' },
	                    '虽然没有明确具体坐标，但现场很好找，因为很远就能看到马路边上一团火。“车身已经是一片火海，看不清车型和车牌了。”水枪从着火汽车正前方左右两侧进......'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-model1' },
	                    _react2.default.createElement('img', { src: '../img/bk.png' })
	                )
	            );
	        }
	    }]);

	    return Newest_body_1;
	})(_react2.default.Component);

	var Newest_body_2 = (function (_React$Component4) {
	    _inherits(Newest_body_2, _React$Component4);

	    function Newest_body_2() {
	        _classCallCheck(this, Newest_body_2);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_body_2).call(this));
	    }

	    _createClass(Newest_body_2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-body' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tx' },
	                    '虽然没有明确具体坐标，但现场很好找，因为很远就能看到马路边上一团火。“车身已经是一片火海，看不清车型和车牌了。”水枪从着火汽车正前方左右两侧进......'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-model2' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: '../img/bk.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: '../img/bk.png' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-img' },
	                        _react2.default.createElement('img', { src: '../img/bk.png' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_body_2;
	})(_react2.default.Component);

	var Newest_foot = (function (_React$Component5) {
	    _inherits(Newest_foot, _React$Component5);

	    function Newest_foot() {
	        _classCallCheck(this, Newest_foot);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest_foot).apply(this, arguments));
	    }

	    _createClass(Newest_foot, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'newest-foot' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-place' },
	                    _react2.default.createElement('img', { src: '../img/map@3x.png' }),
	                    '北京市丰台区六里桥北八一制片厂'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'newest-tfoot' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-tfoot-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: '../img/collect.png' }),
	                            '20'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: '../img/good.png' }),
	                            '18'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'newest-foot-1' },
	                            _react2.default.createElement('img', { src: '../img/review.png' }),
	                            '120 +'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest_foot;
	})(_react2.default.Component);

	var Newest = (function (_React$Component6) {
	    _inherits(Newest, _React$Component6);

	    function Newest() {
	        _classCallCheck(this, Newest);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Newest).call(this));
	    }

	    _createClass(Newest, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'newest' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'newest-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-unit gap' },
	                        _react2.default.createElement(Newest_head, null),
	                        _react2.default.createElement(Newest_body_1, null),
	                        _react2.default.createElement(Newest_foot, null)
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'newest-unit gap' },
	                        _react2.default.createElement(Newest_head, null),
	                        _react2.default.createElement(Newest_body_2, null),
	                        _react2.default.createElement(Newest_foot, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return Newest;
	})(_react2.default.Component);

	exports.default = Newest;

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(193);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(168)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./newest.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./newest.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    文字省略\n*/\n/*\n    弹性布局\n*/\n#newest #newest-group .newest-unit {\n  font-size: .4rem;\n  color: #999999;\n  padding-top: .2rem;\n  border-bottom: 2px solid #f6f6f8;\n  margin-top: 0.2rem;\n  background-color: #FFFFFF; }\n  #newest #newest-group .newest-unit:last-child {\n    border-bottom: none; }\n  #newest #newest-group .newest-unit .newest-head {\n    height: 1.2rem;\n    padding: 0 .2rem;\n    overflow: hidden; }\n    #newest #newest-group .newest-unit .newest-head .newest-imgUser {\n      float: left;\n      width: 13%; }\n      #newest #newest-group .newest-unit .newest-head .newest-imgUser img {\n        width: .8rem;\n        border-radius: 100%; }\n    #newest #newest-group .newest-unit .newest-head .newest-msg {\n      float: left;\n      width: 57%; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp {\n        padding-top: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-name {\n          float: left;\n          margin-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag {\n          font-size: 60%;\n          margin-right: .1rem;\n          padding-right: .1rem;\n          border-right: 1px solid #999999; }\n          #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag:last-child {\n            border: none; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-dt {\n        padding-top: .1rem;\n        font-size: 60%; }\n    #newest #newest-group .newest-unit .newest-head .newest-source {\n      float: left;\n      width: 30%;\n      font-size: 60%;\n      padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 {\n        float: left;\n        text-align: right;\n        width: 75%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-1 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-2 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #2fa4f6;\n          padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 {\n        float: left;\n        text-align: right;\n        width: 25%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 img {\n          width: .4rem;\n          border-radius: 100%; }\n  #newest #newest-group .newest-unit .newest-body {\n    padding: 0 .2rem; }\n    #newest #newest-group .newest-unit .newest-body .newest-tx {\n      font-size: 90%;\n      color: #474747;\n      line-height: 1.7;\n      display: -webkit-box;\n      text-overflow: -o-ellipsis-lastline;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical; }\n    #newest #newest-group .newest-unit .newest-body .newest-model1 {\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model1 img {\n        width: 100%; }\n    #newest #newest-group .newest-unit .newest-body .newest-model2 {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img {\n        flex: 1;\n        padding-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img:last-child {\n          padding: 0; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img img {\n          width: 100%; }\n  #newest #newest-group .newest-unit .newest-foot .newest-place {\n    padding: 0 .2rem;\n    margin: .2rem 0;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-place img {\n      width: .25rem;\n      margin-right: .1rem; }\n  #newest #newest-group .newest-unit .newest-foot .newest-tfoot {\n    border-top: 1px solid #f6f6f8;\n    border-bottom: 1px solid #f6f6f8;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      padding: .25rem 0; }\n      #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 {\n        flex: 1;\n        text-align: center;\n        border-right: 1px solid #f6f6f8; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1:last-child {\n          border-right: none; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 img {\n          width: .3rem;\n          margin-right: .1rem; }\n", ""]);

	// exports


/***/ },

/***/ 194:
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

	__webpack_require__(195);

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

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
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

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n", ""]);

	// exports


/***/ },

/***/ 197:
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

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(199);
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

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\n#fansGroup-content {\n  background-color: #f6f6f8;\n  height: 1000px; }\n\n.fansGroup-md {\n  display: none; }\n  .fansGroup-md.active {\n    display: block; }\n", ""]);

	// exports


/***/ }

});