(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/myConnect/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.6@@tarojs/redux/index.js");

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/myConnect/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyConnect = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(MyConnect, _BaseComponent);

  function MyConnect() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MyConnect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MyConnect.__proto__ || Object.getPrototypeOf(MyConnect)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__257", "$compid__258", "$compid__259", "$compid__260", "email", "phone", "weachat", "isOpenToast", "toastText"], _this.state = {
      email: '',
      phone: '',
      weachat: '',
      isOpenToast: false,
      toastText: ''
    }, _this.config = {
      navigationBarTitleText: '美城美事365'
    }, _this.customComponents = ["AtInput"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyConnect, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(MyConnect.prototype.__proto__ || Object.getPrototypeOf(MyConnect.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      _api2.default.post('/me/content', {}).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          _this2.setState({
            email: res.data.data.email || '',
            phone: res.data.data.telephone || '',
            weachat: res.data.data.weixinNo || ''
          });
        }
      });
    }
  }, {
    key: 'emailChange',
    value: function emailChange(e) {
      this.setState({
        email: e
      });
    }
  }, {
    key: 'phoneChange',
    value: function phoneChange(e) {
      this.setState({
        phone: e
      });
    }
  }, {
    key: 'weachatChange',
    value: function weachatChange(e) {
      this.setState({
        weachat: e
      });
    }
  }, {
    key: 'submitClick',
    value: function submitClick() {
      var _state = this.state,
          email = _state.email,
          phone = _state.phone,
          weachat = _state.weachat;

      var obj = {
        email: email,
        telephone: phone,
        weixinNo: weachat
      };
      if (email == '' && phone == '' && weachat == '') {
        this.setState({
          toastText: '请至少输入其中一项！',
          isOpenToast: true
        });
        return;
      } else {
        _api2.default.post('/me/updateUmsMember', obj).then(function (res) {
          console.log('mmm', res);
          if (res.data.code == 200) {
            _taroWeapp2.default.showToast({
              title: '保存成功！',
              icon: 'none',
              mask: true
            });
            _taroWeapp2.default.switchTab({
              url: '/pages/my/index'
            });
          }
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__257"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__257 = _genCompid2[0],
          $compid__257 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__258"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__258 = _genCompid4[0],
          $compid__258 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__259"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__259 = _genCompid6[0],
          $compid__259 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__260"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__260 = _genCompid8[0],
          $compid__260 = _genCompid8[1];

      var _state2 = this.__state,
          email = _state2.email,
          phone = _state2.phone,
          weachat = _state2.weachat,
          isOpenToast = _state2.isOpenToast,
          toastText = _state2.toastText;


      this.anonymousFunc0 = function () {
        return _this3.submitClick();
      };

      _taroWeapp.propsManager.set({
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u90AE\u7BB1',
        "value": email,
        "onChange": this.emailChange.bind(this)
      }, $compid__257, $prevCompid__257);
      _taroWeapp.propsManager.set({
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7',
        "value": phone,
        "onChange": this.phoneChange.bind(this)
      }, $compid__258, $prevCompid__258);
      _taroWeapp.propsManager.set({
        "type": "text",
        "placeholder": '\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7',
        "value": weachat,
        "onChange": this.weachatChange.bind(this)
      }, $compid__259, $prevCompid__259);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__260, $prevCompid__260);
      Object.assign(this.__state, {
        $compid__257: $compid__257,
        $compid__258: $compid__258,
        $compid__259: $compid__259,
        $compid__260: $compid__260
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return MyConnect;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0"], _class2.$$componentPath = "pagesC/pages/myConnect/index", _temp2)) || _class);
exports.default = MyConnect;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(MyConnect, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/myConnect/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/myConnect/index.jsx":
/*!**********************************************!*\
  !*** ./src/pagesC/pages/myConnect/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myConnect/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myConnect/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/myConnect/index.less":
/*!***********************************************!*\
  !*** ./src/pagesC/pages/myConnect/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/myConnect/index.jsx","runtime","taro","vendors","common"]]]);