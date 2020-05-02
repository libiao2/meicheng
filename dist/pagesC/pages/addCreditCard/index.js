(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/addCreditCard/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************/
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

var _counter = __webpack_require__(/*! ../../../actions/counter */ "./src/actions/counter.js");

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/addCreditCard/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCreditCard = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    addChat: function addChat(list) {
      dispatch((0, _counter.addChat)(list));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(AddCreditCard, _BaseComponent);

  function AddCreditCard() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddCreditCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddCreditCard.__proto__ || Object.getPrototypeOf(AddCreditCard)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__358", "name", "number", "cvc", "shippingName", "country", "state", "city", "postalCode", "line1", "line2", "endTime", "startTime"], _this.state = {
      name: '',
      number: '', /// 卡号
      startTime: '',
      endTime: '',
      cvc: '',
      shippingName: '',
      postalCode: '',
      line1: '',
      line2: ''
    }, _this.config = {
      navigationBarTitleText: '添加信用卡'
    }, _this.customComponents = ["AtIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddCreditCard, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AddCreditCard.prototype.__proto__ || Object.getPrototypeOf(AddCreditCard.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
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
    key: 'nameChange',
    value: function nameChange(e) {
      this.setState({
        name: e.detail.value
      });
    }
  }, {
    key: 'numberChange',
    value: function numberChange(e) {
      this.setState({
        number: e.detail.value
      });
    }
  }, {
    key: 'onStartDateChange',
    value: function onStartDateChange(e) {
      this.setState({
        startTime: e.detail.value
      });
    }
  }, {
    key: 'onEndDateChange',
    value: function onEndDateChange(e) {
      this.setState({
        endTime: e.detail.value
      });
    }
  }, {
    key: 'cvcChange',
    value: function cvcChange(e) {
      this.setState({
        cvc: e.detail.value
      });
    }
  }, {
    key: 'shippingNameChange',
    value: function shippingNameChange(e) {
      this.setState({
        shippingName: e.detail.value
      });
    }
  }, {
    key: 'countryChange',
    value: function countryChange(e) {
      this.setState({
        country: e.detail.value
      });
    }
  }, {
    key: 'stateChange',
    value: function stateChange(e) {
      this.setState({
        state: e.detail.value
      });
    }
  }, {
    key: 'cityChange',
    value: function cityChange(e) {
      this.setState({
        city: e.detail.value
      });
    }
  }, {
    key: 'postalCodeChange',
    value: function postalCodeChange(e) {
      this.setState({
        postalCode: e.detail.value
      });
    }
  }, {
    key: 'line1Change',
    value: function line1Change(e) {
      this.setState({
        line1: e.detail.value
      });
    }
  }, {
    key: 'line2Change',
    value: function line2Change(e) {
      this.setState({
        line2: e.detail.value
      });
    }
  }, {
    key: 'submitClick',
    value: function submitClick() {
      var _state = this.state,
          number = _state.number,
          name = _state.name,
          startTime = _state.startTime,
          endTime = _state.endTime,
          cvc = _state.cvc,
          shippingName = _state.shippingName,
          state = _state.state,
          city = _state.city,
          postalCode = _state.postalCode,
          line1 = _state.line1,
          line2 = _state.line2,
          country = _state.country;

      if (name == '') {
        _taroWeapp2.default.showToast({
          title: '请填写持卡人姓名！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (number == '') {
        _taroWeapp2.default.showToast({
          title: '请填写卡号！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (endTime == '') {
        _taroWeapp2.default.showToast({
          title: '请选择账户有效期限！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (cvc == '') {
        _taroWeapp2.default.showToast({
          title: '请填写CVC！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (shippingName == '') {
        _taroWeapp2.default.showToast({
          title: '请填写持卡人姓名！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (country == '') {
        _taroWeapp2.default.showToast({
          title: '请填写国家！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (state == '') {
        _taroWeapp2.default.showToast({
          title: '请填写州！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (city == '') {
        _taroWeapp2.default.showToast({
          title: '请填写城市！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (postalCode == '') {
        _taroWeapp2.default.showToast({
          title: '请填写邮编！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (line1 == '') {
        _taroWeapp2.default.showToast({
          title: '请填写街道地址！',
          icon: 'none',
          mask: true
        });
        return;
      }
      var timeArr = endTime.split('-');
      var obj = {
        number: number,
        name: name,
        expYear: timeArr[0],
        expMonth: timeArr[1],
        cvc: cvc,
        shippingName: shippingName,
        state: state,
        city: city,
        postalCode: postalCode,
        line1: line1,
        line2: line2,
        country: country
      };
      console.log('PPPP', obj);
      _api2.default.post('/pay/addCard', obj).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          _taroWeapp2.default.showToast({
            title: '保存成功！',
            icon: 'none',
            mask: true
          });
          _taroWeapp2.default.navigateBack({
            delta: 1
          });
        } else {
          _taroWeapp2.default.showToast({
            title: res.data.message,
            icon: 'none',
            mask: true
          });
        }
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__358"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__358 = _genCompid2[0],
          $compid__358 = _genCompid2[1];

      var _state2 = this.__state,
          number = _state2.number,
          name = _state2.name,
          startTime = _state2.startTime,
          endTime = _state2.endTime,
          cvc = _state2.cvc,
          shippingName = _state2.shippingName,
          state = _state2.state,
          city = _state2.city,
          postalCode = _state2.postalCode,
          line1 = _state2.line1,
          line2 = _state2.line2,
          country = _state2.country;


      this.anonymousFunc0 = function () {
        return _this2.submitClick();
      };

      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "16",
        "color": "#999"
      }, $compid__358, $prevCompid__358);
      Object.assign(this.__state, {
        $compid__358: $compid__358,
        country: country,
        state: state,
        city: city
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return AddCreditCard;
}(_taroWeapp.Component), _class2.$$events = ["nameChange", "numberChange", "onEndDateChange", "cvcChange", "shippingNameChange", "countryChange", "stateChange", "cityChange", "postalCodeChange", "line1Change", "line2Change", "anonymousFunc0"], _class2.$$componentPath = "pagesC/pages/addCreditCard/index", _temp2)) || _class);
exports.default = AddCreditCard;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddCreditCard, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/addCreditCard/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/addCreditCard/index.jsx":
/*!**************************************************!*\
  !*** ./src/pagesC/pages/addCreditCard/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/addCreditCard/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/addCreditCard/index.less":
/*!***************************************************!*\
  !*** ./src/pagesC/pages/addCreditCard/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/addCreditCard/index.jsx","runtime","taro","vendors","common"]]]);