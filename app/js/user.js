webpackJsonp([2],{

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

	var _follow = __webpack_require__(197);

	var _follow2 = _interopRequireDefault(_follow);

	var _group = __webpack_require__(200);

	var _group2 = _interopRequireDefault(_group);

	var _activity = __webpack_require__(181);

	var _activity2 = _interopRequireDefault(_activity);

	var _msg = __webpack_require__(203);

	var _msg2 = _interopRequireDefault(_msg);

	var _newest = __webpack_require__(187);

	var _newest2 = _interopRequireDefault(_newest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(206);

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
	                active: 'active'
	            }, {
	                name: '个人',
	                codeName: 'user-personage',
	                active: ''
	            }]
	        };
	        return _this;
	    }

	    _createClass(User, [{
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
	                    { id: 'user-head' },
	                    _react2.default.createElement(_userMsg2.default, { name: 'Nate' })
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'user-tab', onClick: function onClick(e) {
	                            _this2.toggleTab(e);
	                        } },
	                    _react2.default.createElement(_tab2.default, { data: this.state.tab })
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'user-dynamic', className: 'user-md active' },
	                    _react2.default.createElement(_newest2.default, null)
	                ),
	                _react2.default.createElement(
	                    'section',
	                    { id: 'user-personage', className: 'user-md' },
	                    _react2.default.createElement(
	                        'section',
	                        { className: 'gap' },
	                        _react2.default.createElement(_follow2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { className: 'gap' },
	                        _react2.default.createElement(_group2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { className: 'gap' },
	                        _react2.default.createElement(_activity2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { className: 'gap' },
	                        _react2.default.createElement(_msg2.default, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return User;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(User, { name: 'Nate' }), document.getElementById('user-content'));

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
	 查询是否是移动端，如果是则进行初始化em，如果不是还原
	 autoFont.init(); //自动执行
	 */

	var userAgent = __webpack_require__(161);
	var autoFont = {
	    init: function init() {
	        var setFontSize = (function () {
	            // 获取window 宽度,动态计算
	            var _self = this;
	            _self.width = 750; //psd750px宽度 ,default
	            _self.fontSize = 100; //字体大小
	            _self.widthProportion = function () {
	                var p = (document.body && document.documentElement.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
	                var px1 = (p * _self.fontSize).toFixed(4);
	                //console.log("px1 ="+px1);
	                px1 = px1 > 100 ? 100 : px1;
	                px1 = px1 < 0.08 ? 0.08 : px1;
	                return px1;
	            };
	            console.log("html fontSize: ", _self.widthProportion());
	            document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() + "px; !important");
	        }).bind(window);
	        // init 初始化
	        setFontSize();
	        //手机改变状态时也执行该方法
	        var _evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	        var _timer = null;
	        //android,win系列
	        window.addEventListener(_evt, function () {
	            clearTimeout(_timer);
	            _timer = setTimeout(setFontSize, 300);
	        }, false);
	        //ios系列
	        window.addEventListener("pageshow", function (e) {
	            if (e.persisted) {
	                clearTimeout(_timer);
	                _timer = setTimeout(setFontSize, 300);
	            }
	        }, false);
	    }
	};
	module.exports = autoFont;

/***/ },

/***/ 161:
/***/ function(module, exports) {

	"use strict";

	/*
	    查询是否是移动端
	    userAgent.isMobile() //boo
	*/
	var userAgent = {
	    mobileArr: ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"],
	    isMobile: function isMobile() {
	        return this.mobileArr.some(function (v) {
	            return window.navigator.userAgent.indexOf(v) > 0 ? true : false;
	        });
	    }
	};
	module.exports = userAgent;

/***/ },

/***/ 162:
/***/ function(module, exports) {

	'use strict';

	/*
	    动态添加scrit
	    addScript.init('http://t.m.tv.sohu.com/mb/dist/js/baseLib.min.js?v=1.0.1')
	*/

	var addScript = {
	    init: function init(data) {
	        var head = document.getElementsByTagName('head')[0];
	        var script = document.createElement('script');
	        script.src = data;
	        script.type = 'text/javascript';
	        document.body.appendChild(script);
	    }
	};
	module.exports = addScript;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	'use strict';

	/*
	var headData = {
	  //页面title
	  tit: '首页-知乎',
	  //分享出去的title
	  shareName: '首页-知乎',
	  //分享出去的url
	  shareUrl: 'http://fans.tv.sohu.com/h5/vstar/star_result.html',
	  //分享出去的图片
	  shareImg: 'http://tv.sohu.com/upload/clientapp/vstar/img/default_share_logo.jpg',
	  //分享出去的描述
	  shareDesc: '搜狐V星团是为粉丝精心打造的追星互动平台！只要你来，就有机会零距离接触明星！快为你最爱的明星点赞吧！',
	  //SEO关键字
	  keywords: '搜狐V星团',
	  //SEO描述
	  desc: '搜狐V星团是为粉丝精心打造的追星互动平台！只要你来，就有机会零距离接触明星！快为你最爱的明星点赞吧！'
	  //第二代微信配置
	  admins: '25250114746637056375',
	  //页面ico
	  favicon: 'http://m.tv.sohu.com/favicon.ico',
	  //自己的扩展配置，支持List，String
	  // extend: ''
	}
	*/
	var Head = function Head() {};
	Head.init = function (data) {
	    var head = '',
	        i,
	        l,
	        extend;
	    extend = data.extend;
	    // head += '<meta charset="utf-8" />';
	    head += '<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width" />';
	    head += '<meta name="format-detection" content="telephone=no" />';
	    head += '<meta name="og:url" property="og:url" content="' + data.shareUrl + '" />';
	    head += '<meta name="og:site_name" property="og:site_name" content="' + (data.shareName || data.tit) + '" />';
	    head += '<meta name="og:title" property="og:title" content="' + (data.shareName || data.tit) + '" />';
	    head += '<meta name="og:image" property="og:image" content="' + (data.shareImg || data.defaultImg) + '" />';
	    head += '<meta name="og:desc" property="og:desc" content="' + data.shareDesc + '" />';
	    head += '<meta name="keywords" property="keywords" content="' + data.keywords + '" />';
	    head += '<meta name="description" property="description" content="' + data.desc + '" />';
	    head += '<meta property="qc:admins" content="' + data.admins + '"/>';
	    head += '<title>' + data.tit + '</title>';
	    head += '<link rel="shortcut icon" type="image/x-icon" href="' + data.favicon + '"/>';
	    head += '<link type="text/css" rel="stylesheet" href="../font/css/font-awesome.min.css">';
	    if (!!extend) {
	        if (Object.prototype.toString.call(extend) === '[object Array]') {
	            data.extend.map(function (v, i) {
	                head += v;
	            });
	        } else if (Object.prototype.toString.call(extend) === '[object String]') {
	            head += extend;
	        }
	    }
	    document.head.innerHTML = document.head.innerHTML + head;
	};
	module.exports = Head;

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
	                            _react2.default.createElement('img', { src: '../img/fallback@1x.png' })
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
	            var tabNode = tab.map(function (_tab) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'tab-tx ' + _tab.active, role: _tab.codeName, key: _tab.codeName },
	                    _tab.name
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { id: 'tab', className: 'gap' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'tab-group' },
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
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#tab {\n  line-height: .9rem;\n  background-color: #FFFFFF;\n  font-size: .35rem;\n  box-shadow: 0 1px 2px #aeaeae; }\n  #tab #tab-group {\n    width: 70%;\n    margin: auto;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-flow: row; }\n    #tab #tab-group .tab-tx {\n      text-align: center;\n      flex: 1;\n      color: #999999;\n      height: .8rem; }\n      #tab #tab-group .tab-tx.active {\n        color: #474747;\n        border-bottom: .08rem solid #2fa4f6; }\n\n.tab-md {\n  display: none; }\n  .tab-md.active {\n    display: block; }\n", ""]);

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

/***/ 187:
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

	__webpack_require__(188);

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

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(189);
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(167)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    文字省略\n*/\n/*\n    弹性布局\n*/\n#newest #newest-group .newest-unit {\n  font-size: .4rem;\n  color: #999999;\n  padding-top: .2rem;\n  border-bottom: 2px solid #f6f6f8;\n  margin-top: 0.2rem;\n  background-color: #FFFFFF; }\n  #newest #newest-group .newest-unit:last-child {\n    border-bottom: none; }\n  #newest #newest-group .newest-unit .newest-head {\n    height: 1.2rem;\n    padding: 0 .2rem;\n    overflow: hidden; }\n    #newest #newest-group .newest-unit .newest-head .newest-imgUser {\n      float: left;\n      width: 13%; }\n      #newest #newest-group .newest-unit .newest-head .newest-imgUser img {\n        width: .8rem;\n        border-radius: 100%; }\n    #newest #newest-group .newest-unit .newest-head .newest-msg {\n      float: left;\n      width: 57%; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp {\n        padding-top: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-name {\n          float: left;\n          margin-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag {\n          font-size: 60%;\n          margin-right: .1rem;\n          padding-right: .1rem;\n          border-right: 1px solid #999999; }\n          #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag:last-child {\n            border: none; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-dt {\n        padding-top: .1rem;\n        font-size: 60%; }\n    #newest #newest-group .newest-unit .newest-head .newest-source {\n      float: left;\n      width: 30%;\n      font-size: 60%;\n      padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 {\n        float: left;\n        text-align: right;\n        width: 75%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-1 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-2 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #2fa4f6;\n          padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 {\n        float: left;\n        text-align: right;\n        width: 25%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 img {\n          width: .4rem;\n          border-radius: 100%; }\n  #newest #newest-group .newest-unit .newest-body {\n    padding: 0 .2rem; }\n    #newest #newest-group .newest-unit .newest-body .newest-tx {\n      font-size: 90%;\n      color: #474747;\n      line-height: 1.7;\n      display: -webkit-box;\n      text-overflow: -o-ellipsis-lastline;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical; }\n    #newest #newest-group .newest-unit .newest-body .newest-model1 {\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model1 img {\n        width: 100%; }\n    #newest #newest-group .newest-unit .newest-body .newest-model2 {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img {\n        flex: 1;\n        padding-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img:last-child {\n          padding: 0; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img img {\n          width: 100%; }\n  #newest #newest-group .newest-unit .newest-foot .newest-place {\n    padding: 0 .2rem;\n    margin: .2rem 0;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-place img {\n      width: .25rem;\n      margin-right: .1rem; }\n  #newest #newest-group .newest-unit .newest-foot .newest-tfoot {\n    border-top: 1px solid #f6f6f8;\n    border-bottom: 1px solid #f6f6f8;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      padding: .25rem 0; }\n      #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 {\n        flex: 1;\n        text-align: center;\n        border-right: 1px solid #f6f6f8; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1:last-child {\n          border-right: none; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 img {\n          width: .3rem;\n          margin-right: .1rem; }\n", ""]);

	// exports


/***/ },

/***/ 197:
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

	__webpack_require__(198);

	var Follow = (function (_React$Component) {
	    _inherits(Follow, _React$Component);

	    function Follow(props) {
	        _classCallCheck(this, Follow);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Follow).call(this));
	    }

	    _createClass(Follow, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'follow' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'follow-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-1-name' },
	                            '他的关注'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-1-num' },
	                            '48'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'follow-2-img' },
	                            _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'follow-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'follow-3-img' },
	                            _react2.default.createElement('img', { src: '../img/right@1.png' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Follow;
	})(_react2.default.Component);

	exports.default = Follow;

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./follow.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./follow.scss");
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
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#follow {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #follow #follow-group {\n    height: 1.3rem;\n    overflow: hidden; }\n    #follow #follow-group #follow-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #follow #follow-group #follow-1 #follow-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #follow #follow-group #follow-1 #follow-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #follow #follow-group #follow-2 {\n      width: 5.5rem;\n      height: 1.3rem;\n      float: left; }\n      #follow #follow-group #follow-2 .follow-2-img {\n        float: left;\n        height: 1.3rem;\n        line-height: 1.3rem;\n        width: .78rem;\n        text-align: center; }\n        #follow #follow-group #follow-2 .follow-2-img img {\n          width: 90%; }\n    #follow #follow-group #follow-3 {\n      float: right; }\n      #follow #follow-group #follow-3 #follow-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #follow #follow-group #follow-3 #follow-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


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

	var Group = (function (_React$Component) {
	    _inherits(Group, _React$Component);

	    function Group(props) {
	        _classCallCheck(this, Group);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this));
	    }

	    _createClass(Group, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'group' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'group-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-1' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-1-name' },
	                            '他的群组'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-1-num' },
	                            '20'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-2' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'group-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-img' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-name' },
	                                '寻龙诀影迷'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'group-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-img' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-name' },
	                                '治疗系'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'group-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-img' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-name' },
	                                '游戏玩家'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'group-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-img' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-name' },
	                                '猫耳朵'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'group-2-unit' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-img' },
	                                _react2.default.createElement('img', { src: '../img/headImg@1x.png' })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'group-2-name' },
	                                '下午时光'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'group-3' },
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'group-3-img' },
	                            _react2.default.createElement('img', { src: '../img/right@1.png' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Group;
	})(_react2.default.Component);

	exports.default = Group;

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./group.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./group.scss");
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
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#group {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #group #group-group {\n    overflow: hidden;\n    padding-bottom: .4rem; }\n    #group #group-group #group-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #group #group-group #group-1 #group-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #group #group-group #group-1 #group-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #group #group-group #group-2 {\n      width: 5.5rem;\n      float: left;\n      padding-top: .25rem; }\n      #group #group-group #group-2 .group-2-unit {\n        float: left;\n        width: 1.1rem;\n        text-align: center; }\n        #group #group-group #group-2 .group-2-unit .group-2-img {\n          line-height: 1.04rem; }\n          #group #group-group #group-2 .group-2-unit .group-2-img img {\n            width: 80%; }\n        #group #group-group #group-2 .group-2-unit .group-2-name {\n          font-size: .15rem;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n    #group #group-group #group-3 {\n      float: right; }\n      #group #group-group #group-3 #group-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #group #group-group #group-3 #group-3-img img {\n          height: .4rem; }\n", ""]);

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

	var Msg = (function (_React$Component) {
	    _inherits(Msg, _React$Component);

	    function Msg(props) {
	        _classCallCheck(this, Msg);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Msg).call(this));

	        _this.state = props;
	        return _this;
	    }

	    _createClass(Msg, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'msg', className: 'gap' },
	                _react2.default.createElement(
	                    'div',
	                    { id: 'msg-group' },
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'msg-label-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '个人资料'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '职业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '兴趣'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '行业'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-label' },
	                            '所在地'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'msg-tx-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            '给我一个支点，我能翘起整个地球！'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            '产品经理、36kr创始人、36kr老编辑'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            '创作、写作、画画'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            '社交'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'msg-tx' },
	                            '北京海淀区'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Msg;
	})(_react2.default.Component);

	exports.default = Msg;

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./msg.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./msg.scss");
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
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#msg {\n  padding: 0 .2rem;\n  background-color: #FFFFFF; }\n  #msg #msg-group {\n    font-size: .3rem;\n    line-height: 1rem;\n    overflow: hidden; }\n    #msg #msg-group #msg-label-group {\n      float: left;\n      width: 20%;\n      text-align: left; }\n      #msg #msg-group #msg-label-group .msg-label {\n        font-size: 110%;\n        color: #999999; }\n    #msg #msg-group #msg-tx-group {\n      float: right;\n      width: 80%;\n      text-align: right; }\n      #msg #msg-group #msg-tx-group .msg-tx {\n        border-bottom: 1px solid #f6f6f8;\n        color: #474747;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        #msg #msg-group #msg-tx-group .msg-tx:last-child {\n          border: none; }\n", ""]);

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./user.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./user.scss");
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
	exports.push([module.id, "*::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0.5); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n#user-content {\n  background-color: #f6f6f8;\n  height: 1000px; }\n  #user-content .user-md {\n    display: none; }\n    #user-content .user-md.active {\n      display: block; }\n", ""]);

	// exports


/***/ }

});