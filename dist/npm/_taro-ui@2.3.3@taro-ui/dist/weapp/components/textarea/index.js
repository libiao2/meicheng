(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/_classnames@2.2.6@classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getMaxLength(maxLength, textOverflowForbidden) {
  if (!textOverflowForbidden) {
    return maxLength + 500;
  }
  return maxLength;
}
var ENV = _taroWeapp2.default.getEnv();
(0, _utils.initTestEnv)();

var AtTextarea = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTextarea, _AtComponent);

  function AtTextarea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTextarea.__proto__ || Object.getPrototypeOf(AtTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "rootCls", "placeholderStyle", "placeholderCls", "cursorSpacing", "value", "actualMaxLength", "placeholder", "disabled", "autoFocus", "focus", "showConfirmBar", "selectionStart", "selectionEnd", "fixed", "count", "_maxLength", "customStyle", "className", "placeholderClass", "maxLength", "textOverflowForbidden", "height"], _this.handleInput = function (event) {
      _this.props.onChange(event.target.value, event);
    }, _this.handleFocus = function (event) {
      _this.props.onFocus && _this.props.onFocus(event);
    }, _this.handleBlur = function (event) {
      _this.props.onBlur && _this.props.onBlur(event);
    }, _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    }, _this.handleLinechange = function (event) {
      _this.props.onLinechange && _this.props.onLinechange(event);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTextarea, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AtTextarea.prototype.__proto__ || Object.getPrototypeOf(AtTextarea.prototype), '_constructor', this).apply(this, arguments);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          customStyle = _props.customStyle,
          className = _props.className,
          value = _props.value,
          cursorSpacing = _props.cursorSpacing,
          placeholder = _props.placeholder,
          placeholderStyle = _props.placeholderStyle,
          placeholderClass = _props.placeholderClass,
          maxLength = _props.maxLength,
          count = _props.count,
          disabled = _props.disabled,
          autoFocus = _props.autoFocus,
          focus = _props.focus,
          showConfirmBar = _props.showConfirmBar,
          selectionStart = _props.selectionStart,
          selectionEnd = _props.selectionEnd,
          fixed = _props.fixed,
          textOverflowForbidden = _props.textOverflowForbidden,
          height = _props.height;

      var _maxLength = parseInt(maxLength.toString());
      var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
      var textareaStyle = height ? "height:" + _taroWeapp2.default.pxTransform(Number(height)) : '';
      var rootCls = (0, _classnames2.default)('at-textarea', "at-textarea--" + ENV, {
        'at-textarea--error': _maxLength < value.length
      }, className);
      var placeholderCls = (0, _classnames2.default)('placeholder', placeholderClass);
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(customStyle);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(textareaStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        rootCls: rootCls,
        placeholderStyle: placeholderStyle,
        placeholderCls: placeholderCls,
        cursorSpacing: cursorSpacing,
        value: value,
        actualMaxLength: actualMaxLength,
        placeholder: placeholder,
        disabled: disabled,
        autoFocus: autoFocus,
        focus: focus,
        showConfirmBar: showConfirmBar,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd,
        fixed: fixed,
        count: count,
        _maxLength: _maxLength
      });
      return this.__state;
    }
  }]);

  return AtTextarea;
}(_component2.default), _class.$$events = ["handleInput", "handleFocus", "handleBlur", "handleConfirm", "handleLinechange"], _class.$$componentPath = "node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index", _temp2);


AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  onLinechange: function onLinechange() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onConfirm: function onConfirm() {}
};
AtTextarea.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  value: _propTypes2.default.string.isRequired,
  cursorSpacing: _propTypes2.default.number,
  maxLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  placeholderClass: _propTypes2.default.string,
  placeholderStyle: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  autoFocus: _propTypes2.default.bool,
  focus: _propTypes2.default.bool,
  showConfirmBar: _propTypes2.default.bool,
  selectionStart: _propTypes2.default.number,
  selectionEnd: _propTypes2.default.number,
  count: _propTypes2.default.bool,
  textOverflowForbidden: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onLinechange: _propTypes2.default.func,
  onChange: _propTypes2.default.func.isRequired,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onConfirm: _propTypes2.default.func
};
exports.default = AtTextarea;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AtTextarea));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.wxml";

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/node_modules&outputPath=npm!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_node_modules_outputPath_npm_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/_taro-ui@2.3.3@taro-ui/dist/weapp/components/textarea/index.tsx","runtime","taro","vendors"]]]);