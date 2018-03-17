/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LandingPage = __webpack_require__(8);

var _LandingPage2 = _interopRequireDefault(_LandingPage);

var _AboutPage = __webpack_require__(9);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _LandingPage2.default, {
	path: '/',
	exact: true
}), _extends({}, _AboutPage2.default, {
	path: '/firmast'
})];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SEND_REQUEST_START = exports.SEND_REQUEST_START = 'SEND_REQUEST_START';
var SEND_REQUEST_SUCCESS = exports.SEND_REQUEST_SUCCESS = 'SEND_REQUEST_SUCCESS';
var SEND_REQUEST_FAIL = exports.SEND_REQUEST_FAIL = 'SEND_REQUEST_FAIL';

var FETCH_FLEET_START = exports.FETCH_FLEET_START = 'FETCH_FLEET_START';
var FETCH_FLEET_SUCCESS = exports.FETCH_FLEET_SUCCESS = 'FETCH_FLEET_SUCCESS';
var FETCH_FLEET_FAIL = exports.FETCH_FLEET_FAIL = 'FETCH_FLEET_FAIL';

var FETCH_TEAM_START = exports.FETCH_TEAM_START = 'FETCH_TEAM_START';
var FETCH_TEAM_SUCCESS = exports.FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
var FETCH_TEAM_FAIL = exports.FETCH_TEAM_FAIL = 'FETCH_TEAM_FAIL';

var FETCH_OFFERS_START = exports.FETCH_OFFERS_START = 'FETCH_OFFERS_START';
var FETCH_OFFERS_SUCCESS = exports.FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS';
var FETCH_OFFERS_FAIL = exports.FETCH_OFFERS_FAIL = 'FETCH_OFFERS_FAIL';

var AUTH_START = exports.AUTH_START = 'AUTH_START';
var AUTH_SUCCESS = exports.AUTH_SUCCESS = 'AUTH_SUCCESS';
var AUTH_FAIL = exports.AUTH_FAIL = 'AUTH_FAIL';
var AUTH_LOGOUT = exports.AUTH_LOGOUT = 'AUTH_LOGOUT';

var INITIALIZE = exports.INITIALIZE = 'INITIALIZE';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(17);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
	var store = (0, _createStore2.default)();

	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(function () {
		res.send((0, _renderer2.default)(req, store));
	});
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			'Im the home best component'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					return console.log('hello!');
				} },
			'Press me'
		)
	);
};

exports.default = {
	component: Landing
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(10);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _teamActions = __webpack_require__(11);

var actions = _interopRequireWildcard(_teamActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Team = function (_Component) {
	_inherits(Team, _Component);

	function Team() {
		_classCallCheck(this, Team);

		return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).apply(this, arguments));
	}

	_createClass(Team, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.onFetch();
		}
	}, {
		key: 'render',
		value: function render() {
			var team = null;

			if (this.props.success) {
				team = this.props.team.members.map(function (member) {
					return _react2.default.createElement(
						'li',
						{ key: member._id },
						member.name
					);
				});
			}
			return _react2.default.createElement(
				'ul',
				null,
				team
			);
		}
	}]);

	return Team;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		loading: state.team.loading,
		error: state.team.error,
		success: state.team.success,
		team: state.team.team
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		onFetch: function onFetch(data) {
			return dispatch(actions.fetch());
		}
	};
};

var loadData = function loadData(store) {
	return store.dispatch(actions.fetch());
};

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Team)
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchAll = exports.fetch = exports.fetchFail = exports.fetchSuccess = exports.fetchStart = undefined;

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(4);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import config from '../../config/config';

var fetchStart = exports.fetchStart = function fetchStart() {
	return {
		type: actionTypes.FETCH_TEAM_START
	};
};

var fetchSuccess = exports.fetchSuccess = function fetchSuccess(response) {
	return {
		type: actionTypes.FETCH_TEAM_SUCCESS,
		res: response.data
	};
};

var fetchFail = exports.fetchFail = function fetchFail(error) {
	return {
		type: actionTypes.FETCH_TEAM_FAIL,
		error: error
	};
};

var fetch = exports.fetch = function fetch() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							dispatch(fetchStart());
							_context.prev = 1;
							_context.next = 4;
							return _axios2.default.get('https://www.domeca.ee/api/team');

						case 4:
							res = _context.sent;

							dispatch(fetchSuccess(res));
							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](1);

							dispatch(fetchFail(_context.t0));

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[1, 8]]);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}();
};

// export const fetch = () => {
// 	return dispatch => {
// 		dispatch(fetchStart());
// 		axios
// 			.get(`https://www.domeca.ee/api/team`)
// 			.then(response => {
// 				dispatch(fetchSuccess(response));
// 			})
// 			.catch(err => {
// 				// console.log(err);
// 				dispatch(fetchFail(err));
// 			});
// 	};
// };

var fetchAll = exports.fetchAll = function fetchAll() {
	return function (dispatch) {
		dispatch(fetchStart());
		_axios2.default.get('https://www.domeca.ee/api/team?show=all').then(function (response) {
			dispatch(fetchSuccess(response));
		}).catch(function (err) {
			// console.log(err);
			dispatch(fetchFail(err));
		});
	};
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(15);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(1);

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(
				'div',
				null,
				(0, _reactRouterConfig.renderRoutes)(_Routes2.default)
			)
		)
	));
	return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n\t\t\t\t</script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

	return store;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(5);

var _teamReducer = __webpack_require__(20);

var _teamReducer2 = _interopRequireDefault(_teamReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	team: _teamReducer2.default
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actionTypes = __webpack_require__(4);

var actionTypes = _interopRequireWildcard(_actionTypes);

var _utility = __webpack_require__(21);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	team: null,
	loading: false,
	error: null,
	success: false
};

var fetchStart = function fetchStart(state, action) {
	return (0, _utility.updateObject)(state, { error: null, loading: true });
};

var fetchSuccess = function fetchSuccess(state, action) {
	return (0, _utility.updateObject)(state, {
		team: action.res,
		loading: false,
		success: true
	});
};

var fetchFail = function fetchFail(state, action) {
	return (0, _utility.updateObject)(state, {
		error: action.error.response.data,
		loading: false,
		success: false
	});
};

var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case actionTypes.FETCH_TEAM_START:
			return fetchStart(state, action);
		case actionTypes.FETCH_TEAM_SUCCESS:
			return fetchSuccess(state, action);
		case actionTypes.FETCH_TEAM_FAIL:
			return fetchFail(state, action);
		default:
			return state;
	}
};

exports.default = reducer;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var updateObject = exports.updateObject = function updateObject(oldObject, updateValues) {
	return _extends({}, oldObject, updateValues);
};

/***/ })
/******/ ]);