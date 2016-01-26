webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(163);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _reactTapEventPlugin = __webpack_require__(159);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _autoFont = __webpack_require__(164);

	var _autoFont2 = _interopRequireDefault(_autoFont);

	var _addScript = __webpack_require__(166);

	var _addScript2 = _interopRequireDefault(_addScript);

	var _head = __webpack_require__(167);

	var _head2 = _interopRequireDefault(_head);

	var _nav = __webpack_require__(191);

	var _nav2 = _interopRequireDefault(_nav);

	var _userMsg = __webpack_require__(168);

	var _userMsg2 = _interopRequireDefault(_userMsg);

	var _tab = __webpack_require__(173);

	var _tab2 = _interopRequireDefault(_tab);

	var _follow = __webpack_require__(212);

	var _follow2 = _interopRequireDefault(_follow);

	var _group = __webpack_require__(215);

	var _group2 = _interopRequireDefault(_group);

	var _activity = __webpack_require__(185);

	var _activity2 = _interopRequireDefault(_activity);

	var _msg = __webpack_require__(218);

	var _msg2 = _interopRequireDefault(_msg);

	var _newest = __webpack_require__(195);

	var _newest2 = _interopRequireDefault(_newest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(221);

	_autoFont2.default.init();
	(0, _reactTapEventPlugin2.default)();
	_head2.default.init({
	    tit: '不上班-用户个人页',
	    shareName: '不上班-用户个人页',
	    shareUrl: '',
	    shareImg: '',
	    shareDesc: '',
	    keywords: '',
	    desc: '',
	    admins: '',
	    favicon: ''
	});

	var User = (function (_React$Component) {
	    _inherits(User, _React$Component);

	    function User(props) {
	        _classCallCheck(this, User);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, props));

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
	        key: 'tapMemu',
	        value: function tapMemu(e) {
	            var node = _reactDom2.default.findDOMNode(e.target);
	            if (node.className.indexOf('userMsg-Menu') !== -1 || node.parentNode.className.indexOf('userMsg-Menu') !== -1) {
	                document.querySelector('#nav').classList.add('active');
	                document.querySelector('.base-body').classList.add('active');
	            }
	        }
	    }, {
	        key: 'tapTab',
	        value: function tapTab(e) {
	            var node = _reactDom2.default.findDOMNode(e.target);
	            var tab = this.state.tab;
	            var ix = Number(node.getAttribute('data-ix'));
	            for (var i = 0, l = tab.length; i < l; i++) {
	                if (i === ix) {
	                    tab[i].active = 'active';
	                } else {
	                    tab[i].active = '';
	                }
	            }
	            this.setState({ tab: tab });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

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
	                        { id: 'user-head', onTouchTap: function onTouchTap(e) {
	                                _this2.tapMemu(e);
	                            } },
	                        _react2.default.createElement(_userMsg2.default, { name: 'Nate' })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-tab', onTouchTap: function onTouchTap(e) {
	                                _this2.tapTab(e);
	                            } },
	                        _react2.default.createElement(_tab2.default, { data: this.state.tab })
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-dynamic', className: 'user-md ' + this.state.tab[0].active },
	                        _react2.default.createElement(_newest2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        'section',
	                        { id: 'user-personage', className: 'user-md ' + this.state.tab[1].active },
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
	                )
	            );
	        }
	    }]);

	    return User;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(User, { name: 'Nate' }), document.getElementById('user-content'));

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function injectTapEventPlugin () {
	  __webpack_require__(31).injection.injectEventPluginsByName({
	    "TapEventPlugin":       __webpack_require__(160)
	  });
	};


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(30);
	var EventPluginUtils = __webpack_require__(33);
	var EventPropagators = __webpack_require__(73);
	var SyntheticUIEvent = __webpack_require__(87);
	var TouchEventUtils = __webpack_require__(161);
	var ViewportMetrics = __webpack_require__(38);

	var keyOf = __webpack_require__(162);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];

	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	var TapEventPlugin = {

	  tapMoveThreshold: tapMoveThreshold,

	  ignoreMouseThreshold: ignoreMouseThreshold,

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent,
	      nativeEventTarget) {

	    if (isTouch(topLevelType)) {
	      lastTouchEvent = now();
	    } else {
	      if (lastTouchEvent && (now() - lastTouchEvent) < ignoreMouseThreshold) {
	        return null;
	      }
	    }

	    if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	      return null;
	    }
	    var event = null;
	    var distance = getDistance(startCoords, nativeEvent);
	    if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	      event = SyntheticUIEvent.getPooled(
	        eventTypes.touchTap,
	        topLevelTargetID,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    if (isStartish(topLevelType)) {
	      startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	      startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	    } else if (isEndish(topLevelType)) {
	      startCoords.x = 0;
	      startCoords.y = 0;
	    }
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }

	};

	module.exports = TapEventPlugin;


/***/ },

/***/ 161:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },

/***/ 162:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },

/***/ 168:
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

	__webpack_require__(169);

	//import $ from 'jquery';

	var UserMsg = (function (_React$Component) {
	    _inherits(UserMsg, _React$Component);

	    function UserMsg() {
	        _classCallCheck(this, UserMsg);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(UserMsg).apply(this, arguments));
	    }

	    _createClass(UserMsg, [{
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
	            e.preventDefault();
	            $('#zh-top-search-input').focus();
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
	                            { id: 'userMsg-left', className: 'userMsg-Menu userMsg-ease' },
	                            _react2.default.createElement('img', { src: '../img/menu@3x.png' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { id: 'userMsg-right', className: 'userMsg-ease' },
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

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(170);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#userMsg {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 5rem;\n  color: #FFFFFF;\n  overflow: hidden; }\n  #userMsg #userMsg-kbImg {\n    position: absolute;\n    top: -6%;\n    left: -3%;\n    width: 106%;\n    height: 112%; }\n  #userMsg #userMsg-head-group {\n    position: relative; }\n    #userMsg #userMsg-head-group #userMsg-head {\n      height: .7rem;\n      overflow: hidden; }\n      #userMsg #userMsg-head-group #userMsg-head .userMsg-ease {\n        width: 1rem;\n        line-height: .6rem;\n        text-align: center;\n        height: 100%; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-left {\n        float: left; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-left img {\n          width: 0.55rem; }\n      #userMsg #userMsg-head-group #userMsg-head #userMsg-right {\n        float: right; }\n        #userMsg #userMsg-head-group #userMsg-head #userMsg-right img {\n          width: 0.5rem; }\n    #userMsg #userMsg-head-group #userMsg-headImg {\n      margin: 0 auto 0.2rem;\n      width: 1.5rem;\n      height: 1.5rem;\n      border: .05rem solid #FFFFFF;\n      -webkit-border-radius: 100%;\n      border-radius: 100%; }\n      #userMsg #userMsg-head-group #userMsg-headImg img {\n        width: 100%;\n        height: 100%;\n        -webkit-border-radius: 100%;\n        border-radius: 100%; }\n    #userMsg #userMsg-head-group #userMsg-name {\n      margin-bottom: 0.15rem;\n      text-align: center;\n      font-size: .4rem; }\n    #userMsg #userMsg-head-group #userMsg-info {\n      width: 2.8rem;\n      height: .6rem;\n      line-height: .6rem;\n      -webkit-border-radius: 2rem;\n      border-radius: 2rem;\n      margin: 0 auto 0.3rem;\n      font-size: .3rem;\n      border: .03rem solid #FFFFFF;\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row; }\n      #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group {\n        flex: 1;\n        text-align: center; }\n        #userMsg #userMsg-head-group #userMsg-info .userMsg-info-group:first-child {\n          border-right: 1px solid #FFFFFF; }\n    #userMsg #userMsg-head-group #userMsg-des {\n      width: 90%;\n      text-align: center;\n      margin: auto;\n      font-size: .27rem;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n", ""]);

	// exports


/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(163);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(174);

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

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#tab {\n  line-height: 1rem;\n  background-color: #FFFFFF;\n  font-size: .35rem; }\n  #tab #tab-left {\n    width: 15%;\n    height: 1rem;\n    float: left;\n    border-bottom: .05rem solid #aeaeae; }\n  #tab #tab-right {\n    float: right;\n    width: 15%;\n    height: 1rem;\n    border-bottom: .05rem solid #aeaeae; }\n  #tab #tab-center {\n    width: 70%;\n    margin: auto;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    flex-flow: row; }\n    #tab #tab-center .tab-tx {\n      text-align: center;\n      flex: 1;\n      color: #999999;\n      height: 1rem;\n      border-bottom: .05rem solid #aeaeae; }\n      #tab #tab-center .tab-tx.active {\n        color: #474747;\n        border-bottom: .05rem solid #2fa4f6; }\n\n.tab-md {\n  display: none; }\n  .tab-md.active {\n    display: block; }\n", ""]);

	// exports


/***/ },

/***/ 185:
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

	__webpack_require__(186);

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

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#activity {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden;\n  font-size: .28rem; }\n  #activity #activity-group {\n    overflow: hidden; }\n    #activity #activity-group #activity-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      padding-top: .2rem;\n      float: left; }\n      #activity #activity-group #activity-1 #activity-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #activity #activity-group #activity-1 #activity-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #activity #activity-group #activity-2 {\n      float: left;\n      width: calc(100% - 1.3rem);\n      padding-top: .7rem; }\n      #activity #activity-group #activity-2 .activity-2-label span {\n        display: inline-block;\n        font-size: .25rem;\n        color: #2fa4f6;\n        background-color: #f6f6f8;\n        border-radius: .5rem;\n        padding: .1rem .2rem;\n        margin-bottom: .3rem; }\n      #activity #activity-group #activity-2 .activity-more {\n        text-align: right;\n        padding-right: .1rem; }\n        #activity #activity-group #activity-2 .activity-more img {\n          height: .4rem;\n          transform: rotate(90DEG); }\n", ""]);

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

	var _reactTapEventPlugin = __webpack_require__(159);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _url = __webpack_require__(192);

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

	__webpack_require__(193);

	(0, _reactTapEventPlugin2.default)();

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
	            for (var i = 0, l = navList.length; i < l; i++) {
	                if (navList[i].img === tag) {
	                    flag = false;
	                    navList[i].active = 'active';
	                    navList[i].img += '_active';
	                } else {
	                    navList[i].active = '';
	                }
	            }
	            if (flag) {
	                navList[0].active = 'active';
	                navList[0].img += '_active';
	            }
	        }
	    }, {
	        key: 'tapHide',
	        value: function tapHide(e) {
	            document.querySelector('#nav').classList.remove('active');
	            document.querySelector('.base-body').classList.remove('active');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

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
	                _react2.default.createElement('div', { id: 'nav-hide', onTouchTap: function onTouchTap(e) {
	                        _this2.tapHide(e);
	                    } })
	            );
	        }
	    }]);

	    return nav;
	})(_react2.default.Component);

	exports.default = nav;

/***/ },

/***/ 192:
/***/ function(module, exports) {

	'use strict';

	var url = function url() {};
	url.getParams = function (key) {
		var search = location.search;
		if (search.indexOf('?') != -1) {
			var str = search.substr(1).split('&');
			for (var i = 0, l = str.length; i < l; i++) {
				if (str[i].indexOf(key) !== -1) {
					return str[i].split('=')[1];
				}
			}
		}
	};

	module.exports = url;

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(194);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "#nav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  font-size: .35rem; }\n  #nav #nav-group {\n    float: left;\n    width: 4rem;\n    height: 100%;\n    background-color: #1c2229;\n    padding: 2rem 0; }\n    #nav #nav-group .nav-unit {\n      display: block;\n      padding: 0 .5rem;\n      line-height: 1.2rem;\n      margin-bottom: .2rem;\n      color: #ffffff; }\n      #nav #nav-group .nav-unit .nav-img {\n        display: inline-block;\n        position: relative;\n        top: .08rem;\n        width: .5rem; }\n        #nav #nav-group .nav-unit .nav-img img {\n          width: 100%;\n          height: 100%; }\n      #nav #nav-group .nav-unit .nav-name {\n        display: inline-block;\n        margin-left: .2rem; }\n      #nav #nav-group .nav-unit.active {\n        background-color: rgba(216, 239, 255, 0.12);\n        color: #3cafff; }\n  #nav #nav-hide {\n    float: left;\n    width: 3.5rem;\n    height: 100%;\n    display: inline-block; }\n\n.nav {\n  transition: transform .5s;\n  transform: translate3D(-100%, 0, 0); }\n  .nav.active {\n    transition: transform .5s;\n    transform: translate3D(0, 0, 0); }\n", ""]);

	// exports


/***/ },

/***/ 195:
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

	__webpack_require__(196);

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

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    文字省略\n*/\n/*\n    弹性布局\n*/\n#newest #newest-group .newest-unit {\n  font-size: .4rem;\n  color: #999999;\n  padding-top: .2rem;\n  border-bottom: 2px solid #f6f6f8;\n  margin-top: 0.2rem;\n  background-color: #FFFFFF; }\n  #newest #newest-group .newest-unit:last-child {\n    border-bottom: none; }\n  #newest #newest-group .newest-unit .newest-head {\n    height: 1.2rem;\n    padding: 0 .2rem;\n    overflow: hidden; }\n    #newest #newest-group .newest-unit .newest-head .newest-imgUser {\n      float: left;\n      width: 13%; }\n      #newest #newest-group .newest-unit .newest-head .newest-imgUser img {\n        width: .8rem;\n        border-radius: 100%; }\n    #newest #newest-group .newest-unit .newest-head .newest-msg {\n      float: left;\n      width: 57%; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp {\n        padding-top: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-name {\n          float: left;\n          margin-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag {\n          font-size: 60%;\n          margin-right: .1rem;\n          padding-right: .1rem;\n          border-right: 1px solid #999999; }\n          #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-pp .newest-tag:last-child {\n            border: none; }\n      #newest #newest-group .newest-unit .newest-head .newest-msg .newest-msg-dt {\n        padding-top: .1rem;\n        font-size: 60%; }\n    #newest #newest-group .newest-unit .newest-head .newest-source {\n      float: left;\n      width: 30%;\n      font-size: 60%;\n      padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 {\n        float: left;\n        text-align: right;\n        width: 75%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-1 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-1 .newest-source-1-2 {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          color: #2fa4f6;\n          padding-top: .15rem; }\n      #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 {\n        float: left;\n        text-align: right;\n        width: 25%; }\n        #newest #newest-group .newest-unit .newest-head .newest-source .newest-source-2 img {\n          width: .4rem;\n          border-radius: 100%; }\n  #newest #newest-group .newest-unit .newest-body {\n    padding: 0 .2rem; }\n    #newest #newest-group .newest-unit .newest-body .newest-tx {\n      font-size: 90%;\n      color: #474747;\n      line-height: 1.7;\n      display: -webkit-box;\n      text-overflow: -o-ellipsis-lastline;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical; }\n    #newest #newest-group .newest-unit .newest-body .newest-model1 {\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model1 img {\n        width: 100%; }\n    #newest #newest-group .newest-unit .newest-body .newest-model2 {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      margin-top: .2rem; }\n      #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img {\n        flex: 1;\n        padding-right: .1rem; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img:last-child {\n          padding: 0; }\n        #newest #newest-group .newest-unit .newest-body .newest-model2 .newest-img img {\n          width: 100%; }\n  #newest #newest-group .newest-unit .newest-foot .newest-place {\n    padding: 0 .2rem;\n    margin: .2rem 0;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-place img {\n      width: .25rem;\n      margin-right: .1rem; }\n  #newest #newest-group .newest-unit .newest-foot .newest-tfoot {\n    border-top: 1px solid #f6f6f8;\n    border-bottom: 1px solid #f6f6f8;\n    font-size: .3rem; }\n    #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content {\n      display: -webkit-box;\n      display: -moz-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      flex-flow: row;\n      padding: .25rem 0; }\n      #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 {\n        flex: 1;\n        text-align: center;\n        border-right: 1px solid #f6f6f8; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1:last-child {\n          border-right: none; }\n        #newest #newest-group .newest-unit .newest-foot .newest-tfoot .newest-tfoot-content .newest-foot-1 img {\n          width: .3rem;\n          margin-right: .1rem; }\n", ""]);

	// exports


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(163);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(213);

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

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(214);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n#follow {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #follow #follow-group {\n    height: 1.3rem;\n    overflow: hidden; }\n    #follow #follow-group #follow-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #follow #follow-group #follow-1 #follow-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #follow #follow-group #follow-1 #follow-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #follow #follow-group #follow-2 {\n      width: 5.5rem;\n      height: 1.3rem;\n      float: left; }\n      #follow #follow-group #follow-2 .follow-2-img {\n        float: left;\n        height: 1.3rem;\n        line-height: 1.3rem;\n        width: .78rem;\n        text-align: center; }\n        #follow #follow-group #follow-2 .follow-2-img img {\n          width: 90%; }\n    #follow #follow-group #follow-3 {\n      float: right; }\n      #follow #follow-group #follow-3 #follow-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #follow #follow-group #follow-3 #follow-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(163);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(216);

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

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#group {\n  padding: 0 .2rem;\n  background-color: #FFFFFF;\n  overflow: hidden; }\n  #group #group-group {\n    overflow: hidden;\n    padding-bottom: .4rem; }\n    #group #group-group #group-1 {\n      width: 1.3rem;\n      height: 1.3rem;\n      line-height: 1.75;\n      text-align: center;\n      font-size: .28rem;\n      padding-top: .2rem;\n      float: left; }\n      #group #group-group #group-1 #group-1-name {\n        vertical-align: middle;\n        color: #999999; }\n      #group #group-group #group-1 #group-1-num {\n        vertical-align: middle;\n        color: #9ed7ff; }\n    #group #group-group #group-2 {\n      width: 5.5rem;\n      float: left;\n      padding-top: .25rem; }\n      #group #group-group #group-2 .group-2-unit {\n        float: left;\n        width: 1.1rem;\n        text-align: center; }\n        #group #group-group #group-2 .group-2-unit .group-2-img {\n          line-height: 1.04rem; }\n          #group #group-group #group-2 .group-2-unit .group-2-img img {\n            width: 80%; }\n        #group #group-group #group-2 .group-2-unit .group-2-name {\n          font-size: .15rem;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n    #group #group-group #group-3 {\n      float: right; }\n      #group #group-group #group-3 #group-3-img {\n        height: 1.3rem;\n        line-height: 1.04rem; }\n        #group #group-group #group-3 #group-3-img img {\n          height: .4rem; }\n", ""]);

	// exports


/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jquery = __webpack_require__(163);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(219);

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

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n    弹性布局\n*/\n/*\n    文字省略\n*/\n#msg {\n  padding: 0 .2rem;\n  background-color: #FFFFFF; }\n  #msg #msg-group {\n    font-size: .3rem;\n    line-height: 1rem;\n    overflow: hidden; }\n    #msg #msg-group #msg-label-group {\n      float: left;\n      width: 20%;\n      text-align: left; }\n      #msg #msg-group #msg-label-group .msg-label {\n        font-size: 110%;\n        color: #999999; }\n    #msg #msg-group #msg-tx-group {\n      float: right;\n      width: 80%;\n      text-align: right; }\n      #msg #msg-group #msg-tx-group .msg-tx {\n        border-bottom: 1px solid #f6f6f8;\n        color: #474747;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n        #msg #msg-group #msg-tx-group .msg-tx:last-child {\n          border: none; }\n", ""]);

	// exports


/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(222);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(172)(content, {});
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

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(171)();
	// imports


	// module
	exports.push([module.id, "*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n\nul, ol {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\na {\n  text-decoration: none; }\n\na:-webkit-any-link {\n  color: -webkit-link;\n  text-decoration: underline;\n  cursor: auto; }\n\ndiv[contentEditable], input, textarea, button, a:link {\n  -webkit-tap-highlight-color: rgba(225, 225, 225, 0); }\n\na:hover {\n  text-decoration: underline; }\n\n.blur {\n  -webkit-filter: blur(10px); }\n\n.gap {\n  margin-bottom: 0.2rem; }\n\n.base-body {\n  transition: transform .5s;\n  transform: translate3D(0, 0, 0); }\n  .base-body.active {\n    transition: transform .5s;\n    transform: translate3D(4rem, 0, 0); }\n\n#user-content {\n  background-color: #f6f6f8;\n  height: 1000px; }\n  #user-content .user-md {\n    display: none; }\n    #user-content .user-md.active {\n      display: block; }\n", ""]);

	// exports


/***/ }

});