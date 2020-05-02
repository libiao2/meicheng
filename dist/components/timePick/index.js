(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/timePick/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************************************/
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
// import PropTypes from 'prop-types';

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _utils = __webpack_require__(/*! ./utils */ "./src/components/timePick/utils.js");

__webpack_require__(/*! ./index.less */ "./src/components/timePick/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = (_temp2 = _class = function (_BaseComponent) {
  _inherits(DateTimePicker, _BaseComponent);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray114", "loopArray115", "loopArray116", "loopArray117", "loopArray118", "$compid__299", "current", "visible", "selectIndexList", "yearList", "monthLsit", "dayList", "hourList", "minuteList", "placeholder", "fmtInitValue", "hasChange", "year", "month", "day", "hour", "minute", "initValue"], _this.state = {
      yearList: [], //年 -下拉
      monthLsit: [], //月 -下拉
      dayList: [], //日 -下拉
      hourList: [], //时 -下拉
      minuteList: [], //分 -下拉
      selectIndexList: [1, 1, 1, 1, 1], //PickerViewColumn选择的索引
      fmtInitValue: "", //初始值
      current: '', //当前选择的数据
      visible: false, //是否可见
      hasChange: false, //是否更改
      year: '', //时间值
      month: '',
      day: '',
      hour: '',
      minute: ''
    }, _this.openModal = function () {
      var _this$state = _this.state,
          current = _this$state.current,
          fmtInitValue = _this$state.fmtInitValue;

      var selectIndexList = [];
      var arr = (0, _utils.getArrWithTime)(current || fmtInitValue || (0, _utils.getDate)()); //优先当前选择的值，其次默认值，其次当前值

      var _getPickerViewList = (0, _utils.getPickerViewList)(),
          yearList = _getPickerViewList.yearList,
          monthLsit = _getPickerViewList.monthLsit,
          dayList = _getPickerViewList.dayList,
          hourList = _getPickerViewList.hourList,
          minuteList = _getPickerViewList.minuteList;

      var _arr = _slicedToArray(arr, 5),
          year = _arr[0],
          month = _arr[1],
          day = _arr[2],
          hour = _arr[3],
          minute = _arr[4];

      //根据arr  数据索引


      selectIndexList[0] = yearList.indexOf(arr[0] + '年');
      selectIndexList[1] = monthLsit.indexOf(arr[1] + '月');
      selectIndexList[2] = dayList.indexOf(arr[2] + '日');
      selectIndexList[3] = hourList.indexOf(arr[3] + '点');
      selectIndexList[4] = minuteList.indexOf(arr[4] + '分');

      _this.setState({
        selectIndexList: selectIndexList,
        visible: true,
        yearList: yearList,
        monthLsit: monthLsit,
        dayList: dayList,
        hourList: hourList,
        minuteList: minuteList,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute
      });
    }, _this.cancelHandel = function () {
      _this.setState({
        visible: false,
        hasChange: false
      });

      var _this$state2 = _this.state,
          year = _this$state2.year,
          month = _this$state2.month,
          day = _this$state2.day,
          hour = _this$state2.hour,
          minute = _this$state2.minute;

      var current = (0, _utils.formatDate)(year, month, day, hour, minute);

      _this.props.onCancel && _this.props.onCancel({ current: current });
    }, _this.okHandel = function () {
      var _this$state3 = _this.state,
          year = _this$state3.year,
          month = _this$state3.month,
          day = _this$state3.day,
          hour = _this$state3.hour,
          minute = _this$state3.minute;

      var current = (0, _utils.formatDate)(year, month, day, hour, minute);

      _this.setState({
        current: current,
        hasChange: false,
        visible: false
      });
      _this.props.onOk && _this.props.onOk({ current: current });
    }, _this.changeHandel = function (e) {
      var selectIndexList = e.detail.value;

      var _selectIndexList = _slicedToArray(selectIndexList, 5),
          yearIndex = _selectIndexList[0],
          monthIndex = _selectIndexList[1],
          dayIndex = _selectIndexList[2],
          hourIndex = _selectIndexList[3],
          minuteIndex = _selectIndexList[4];

      var _this$state4 = _this.state,
          yearList = _this$state4.yearList,
          monthLsit = _this$state4.monthLsit,
          dayList = _this$state4.dayList,
          hourList = _this$state4.hourList,
          minuteList = _this$state4.minuteList;

      var yearStr = yearList[yearIndex];
      var monthStr = monthLsit[monthIndex];
      var dayStr = dayList[dayIndex];
      var hourStr = hourList[hourIndex];
      var minuteStr = minuteList[minuteIndex];
      var year = Number(yearStr.substr(0, yearStr.length - 1));
      var month = Number(monthStr.substr(0, monthStr.length - 1));
      var day = Number(dayStr.substr(0, dayStr.length - 1));
      var hour = Number(hourStr.substr(0, hourStr.length - 1));
      var minute = Number(minuteStr.substr(0, minuteStr.length - 1));

      // 更新年、天数
      var newDayList = (0, _utils.getDayList)(year, month);

      _this.setState({
        dayList: newDayList,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        hasChange: true
      });
    }, _this.clear = function () {
      _this.setState({
        current: ''
      });
      _this.props.onClear && _this.props.onClear({ current: '' });
    }, _this.customComponents = ["AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(DateTimePicker.prototype.__proto__ || Object.getPrototypeOf(DateTimePicker.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
    // 打开时间选择的模态框 - 根据当前时间初始化picker-view的数据

    // 取消

    // 确定

    // 切换

    // 清除数据

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var initValue = this.props.initValue;

      var fmtInitValue = (0, _utils.getDate)(initValue);
      this.setState({ fmtInitValue: fmtInitValue });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__299"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__299 = _genCompid2[0],
          $compid__299 = _genCompid2[1];

      var _state = this.__state,
          visible = _state.visible,
          current = _state.current,
          yearList = _state.yearList,
          monthLsit = _state.monthLsit,
          dayList = _state.dayList,
          hourList = _state.hourList,
          minuteList = _state.minuteList,
          selectIndexList = _state.selectIndexList;
      var _props$placeholder = this.__props.placeholder,
          placeholder = _props$placeholder === undefined ? '请选择时间' : _props$placeholder;

      var loopArray114 = visible ? yearList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = yearList.length ? String(index) : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      }) : [];
      var loopArray115 = visible ? monthLsit.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = monthLsit.length ? String(index) : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      }) : [];
      var loopArray116 = visible ? dayList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp6 = dayList.length ? String(index) : null;
        return {
          $loopState__temp6: $loopState__temp6,
          $original: item.$original
        };
      }) : [];
      var loopArray117 = visible ? hourList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp8 = hourList.length ? String(index) : null;
        return {
          $loopState__temp8: $loopState__temp8,
          $original: item.$original
        };
      }) : [];
      var loopArray118 = visible ? minuteList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp10 = minuteList.length ? String(index) : null;
        return {
          $loopState__temp10: $loopState__temp10,
          $original: item.$original
        };
      }) : [];
      current && _taroWeapp.propsManager.set({
        "value": "close-circle",
        "size": "20",
        "onClick": this.clear
      }, $compid__299, $prevCompid__299);
      Object.assign(this.__state, {
        loopArray114: loopArray114,
        loopArray115: loopArray115,
        loopArray116: loopArray116,
        loopArray117: loopArray117,
        loopArray118: loopArray118,
        $compid__299: $compid__299,
        placeholder: placeholder
      });
      return this.__state;
    }
  }]);

  return DateTimePicker;
}(_taroWeapp.Component), _class.$$events = ["openModal", "cancelHandel", "okHandel", "changeHandel"], _class.externalClasses = ['wrap-class', 'select-item-class'], _class.$$componentPath = "components/timePick/index", _temp2);

// DateTimePicker.prototype = {
//     initValue: PropTypes.string, //初始化时间
//     onClear: PropTypes.func, //清除选择的时间触发
//     onCancel: PropTypes.func, //时间picker 取消时触发
//     onOk: PropTypes.func, //时间picker 确定时触发
// };


exports.default = DateTimePicker;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(DateTimePicker));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/timePick/index.wxml";

/***/ }),

/***/ "./src/components/timePick/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/timePick/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=COMPONENT& */ "./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=COMPONENT& */ "./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/timePick/index.jsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************!*\
  !*** ./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/timePick/index.jsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/timePick/index.less":
/*!********************************************!*\
  !*** ./src/components/timePick/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/timePick/utils.js":
/*!******************************************!*\
  !*** ./src/components/timePick/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addZero(num) {
  return Number(num) < 10 ? '0' + num : num;
}

var formatDate = exports.formatDate = function formatDate(year, month, day, hour, minute) {
  var newmonth = addZero(month);
  var newday = addZero(day);
  var newhour = addZero(hour);
  var newminute = addZero(minute);

  return year + '-' + newmonth + '-' + newday + ' ' + newhour + ":" + newminute;
};

// 获取当前时间
var getDate = exports.getDate = function getDate(value) {
  var date = '';
  if (value) {
    date = new Date(value);
  } else {
    date = new Date();
  }
  var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      h = date.getHours(),

  //获取当前小时数(0-23)
  f = date.getMinutes();
  return formatDate(y, m, d, h, f);
};

// 获取对应年份月份的天数
var getMonthDay = exports.getMonthDay = function getMonthDay(year, month) {
  var d = new Date(year, month, 0);
  return d.getDate();
};

//根据时间2019-01-02 09：12  得到 ['2019','1','2','9','12']
var getArrWithTime = exports.getArrWithTime = function getArrWithTime(str) {
  var arr1 = str.split(' ');
  var arr2 = arr1[0].split('-');
  var arr3 = arr1[1].split(':');
  var arr = arr2.concat(arr3);
  arr[1] = arr[1].startsWith('0') ? arr[1].substr(1, arr[1].length) : arr[1];
  arr[2] = arr[2].startsWith('0') ? arr[2].substr(1, arr[2].length) : arr[2];
  arr[3] = arr[3].startsWith('0') ? arr[3].substr(1, arr[3].length) : arr[3];
  arr[4] = arr[4].startsWith('0') ? arr[4].substr(1, arr[4].length) : arr[4];
  return arr;
};

// 获取月份天数
var getDayList = exports.getDayList = function getDayList(year, month) {
  var dayList = [];
  var d = new Date(year, month, 0);
  for (var i = 1; i <= d.getDate(); i++) {
    dayList.push(i + "日");
  }

  return dayList;
};

// 获取最近的年、月、日、时、分的集合
var getPickerViewList = exports.getPickerViewList = function getPickerViewList() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var yearList = [];
  var monthLsit = [];
  var dayList = getDayList(year, month);
  var hourList = [];
  var minuteList = [];

  for (var i = 1970; i <= 2070; i++) {
    yearList.push(i + "年");
  }
  for (var _i = 1; _i <= 12; _i++) {
    monthLsit.push(_i + "月");
  }

  for (var _i2 = 0; _i2 <= 23; _i2++) {
    hourList.push(_i2 + "点");
  }
  for (var _i3 = 0; _i3 <= 59; _i3++) {
    minuteList.push(_i3 + "分");
  }
  return { yearList: yearList, monthLsit: monthLsit, dayList: dayList, hourList: hourList, minuteList: minuteList };
};

/***/ })

},[["./src/components/timePick/index.jsx","runtime","taro","vendors"]]]);