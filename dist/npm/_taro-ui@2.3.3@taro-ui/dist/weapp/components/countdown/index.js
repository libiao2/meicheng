(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var AtCountdown = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtCountdown, _AtComponent);

  function AtCountdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtCountdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtCountdown.__proto__ || Object.getPrototypeOf(AtCountdown)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__282", "$compid__283", "$compid__284", "$compid__285", "isShowDay", "isShowHour", "_day", "_hours", "_minutes", "_seconds", "day", "hours", "minutes", "seconds", "className", "customStyle", "format", "isCard"], _this.customComponents = ["AtCountdownItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtCountdown, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtCountdown.prototype.__proto__ || Object.getPrototypeOf(AtCountdown.prototype), '_constructor', this).call(this, props);
      var _props = this.props,
          day = _props.day,
          hours = _props.hours,
          minutes = _props.minutes,
          seconds = _props.seconds;

      this.seconds = toSeconds(day, hours, minutes, seconds);

      var _calculateTime = this.calculateTime(),
          _day = _calculateTime.day,
          _hours = _calculateTime.hours,
          _minutes = _calculateTime.minutes,
          _seconds = _calculateTime.seconds;

      this.state = {
        _day: _day,
        _hours: _hours,
        _minutes: _minutes,
        _seconds: _seconds
      };
      this.timer = undefined;
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'setTimer',
    value: function setTimer() {
      if (!this.timer) {
        this.countdonwn();
      }
    }
  }, {
    key: 'clearTimer',
    value: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = undefined;
      }
    }
  }, {
    key: 'calculateTime',
    value: function calculateTime() {
      var day = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;

      if (this.seconds > 0) {
        day = this.props.isShowDay ? Math.floor(this.seconds / 86400) : 0;
        hours = Math.floor(this.seconds / 3600) - day * 24;
        minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
        seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
      }
      return {
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  }, {
    key: 'countdonwn',
    value: function countdonwn() {
      var _this2 = this;

      var _calculateTime2 = this.calculateTime(),
          day = _calculateTime2.day,
          hours = _calculateTime2.hours,
          minutes = _calculateTime2.minutes,
          seconds = _calculateTime2.seconds;

      this.setState({
        _day: day,
        _hours: hours,
        _minutes: minutes,
        _seconds: seconds
      });
      this.seconds--;
      if (this.seconds < 0) {
        this.clearTimer();
        this.props.onTimeUp && this.props.onTimeUp();
        return;
      }
      this.timer = setTimeout(function () {
        _this2.countdonwn();
      }, 1000);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(this.props) === JSON.stringify(nextProps)) {
        return;
      }var day = nextProps.day,
          hours = nextProps.hours,
          minutes = nextProps.minutes,
          seconds = nextProps.seconds;

      this.seconds = toSeconds(day, hours, minutes, seconds);
      this.clearTimer();
      this.setTimer();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearTimer();
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {
      this.clearTimer();
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {
      this.setTimer();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__282"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__282 = _genCompid2[0],
          $compid__282 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__283"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__283 = _genCompid4[0],
          $compid__283 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__284"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__284 = _genCompid6[0],
          $compid__284 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__285"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__285 = _genCompid8[0],
          $compid__285 = _genCompid8[1];

      var _props2 = this.__props,
          className = _props2.className,
          customStyle = _props2.customStyle,
          format = _props2.format,
          isShowDay = _props2.isShowDay,
          isCard = _props2.isCard,
          isShowHour = _props2.isShowHour;
      var _state = this.__state,
          _day = _state._day,
          _hours = _state._hours,
          _minutes = _state._minutes,
          _seconds = _state._seconds;

      var anonymousState__temp = (0, _classnames2.default)({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(customStyle);
      isShowDay && _taroWeapp.propsManager.set({
        "num": _day,
        "separator": format.day
      }, $compid__282, $prevCompid__282);
      isShowHour && _taroWeapp.propsManager.set({
        "num": _hours,
        "separator": format.hours
      }, $compid__283, $prevCompid__283);
      _taroWeapp.propsManager.set({
        "num": _minutes,
        "separator": format.minutes
      }, $compid__284, $prevCompid__284);
      _taroWeapp.propsManager.set({
        "num": _seconds,
        "separator": format.seconds
      }, $compid__285, $prevCompid__285);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__282: $compid__282,
        $compid__283: $compid__283,
        $compid__284: $compid__284,
        $compid__285: $compid__285,
        isShowDay: isShowDay,
        isShowHour: isShowHour
      });
      return this.__state;
    }
  }]);

  return AtCountdown;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index", _temp2);


AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  onTimeUp: function onTimeUp() {}
};
AtCountdown.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  isCard: _propTypes2.default.bool,
  isShowDay: _propTypes2.default.bool,
  isShowHour: _propTypes2.default.bool,
  format: _propTypes2.default.object,
  day: _propTypes2.default.number,
  hours: _propTypes2.default.number,
  minutes: _propTypes2.default.number,
  seconds: _propTypes2.default.number,
  onTimeUp: _propTypes2.default.func
};
exports.default = AtCountdown;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AtCountdown));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.wxml";

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/countdown/index.tsx","runtime","taro","vendors"]]]);