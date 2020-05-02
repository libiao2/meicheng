(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/otherPay/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/otherPay/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtherPay = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OtherPay, _BaseComponent);

  function OtherPay() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OtherPay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OtherPay.__proto__ || Object.getPrototypeOf(OtherPay)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray101", "$compid__263", "creditCardList", "isOpenCard", "payNo"], _this.state = {
      isOpenCard: false,
      creditCardList: [],
      payNo: ''
    }, _this.config = {
      navigationBarTitleText: '支付'
    }, _this.anonymousFunc1Map = {}, _this.customComponents = ["AtModal", "AtModalContent"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OtherPay, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(OtherPay.prototype.__proto__ || Object.getPrototypeOf(OtherPay.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var payNo = this.$router.params.payNo;
      this.setState({
        payNo: payNo
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.creditCardPay();
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
    key: 'closeCard',
    value: function closeCard() {
      this.setState({
        isOpenCard: false
      });
    }
  }, {
    key: 'addNewCard',
    value: function addNewCard() {
      _taroWeapp2.default.navigateTo({
        url: "/pagesC/pages/addCreditCard/index"
      });
    }
  }, {
    key: 'clickChooseCard',
    value: function clickChooseCard(index) {
      var creditCardList = this.state.creditCardList;

      var newList = creditCardList;
      newList.forEach(function (item) {
        item.defaultSource = false;
      });
      newList[index].defaultSource = true;
      this.setState({
        creditCardList: newList
      });
    }
  }, {
    key: 'creditCardPay',
    value: function creditCardPay() {
      var _this2 = this;

      _api2.default.post('/pay/getCardList', {}).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          if (res.data.data.length == 0) {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/addCreditCard/index"
            });
          } else {

            _this2.setState({
              isOpenCard: true,
              creditCardList: res.data.data
            });
          }
        }
      });
    }
  }, {
    key: 'clickGoPay',
    value: function clickGoPay(type) {
      var _this3 = this;

      _taroWeapp2.default.showToast({
        title: '正在发起支付~~',
        icon: 'none',
        mask: true
      });
      var _state = this.state,
          payNo = _state.payNo,
          creditCardList = _state.creditCardList;


      var chooseIdIndex = 0;
      creditCardList.forEach(function (item, index) {
        if (item.defaultSource) {
          chooseIdIndex = index;
        }
      });

      if (type == 2) {
        _api2.default.post('/pay/defaultSource', { cardId: creditCardList[chooseIdIndex].cardId }).then(function (res) {
          console.log('ccc', res);
          if (!(res.data.code == 200)) {
            _taroWeapp2.default.showToast({
              title: '保存默认卡号失败！',
              icon: 'none',
              mask: true
            });
          }
        });
      }

      _api2.default.post('/pay/payment', { payNo: payNo }).then(function (res) {
        console.log('ppp', res);
        if (res.data.code == 200) {
          _this3.setState({
            isOpenCard: false
          });
          if (type == 1) {
            _this3.requestPayment(res.data.data, function (res1) {
              console.log('??????', res1);
              if (res1.errMsg == "requestPayment:ok") {
                console.log('支付成功！！！！');
              }
              if (res1.errMsg == "requestPayment:fail cancel") {
                console.log('支付失败！！！！');
              }
            });
          } else {
            _taroWeapp2.default.showToast({
              title: '信用卡支付成功！',
              icon: 'none',
              mask: true
            });
            _taroWeapp2.default.switchTab({
              url: '/pages/index/index'
            });
          }
        }
      });
    }
  }, {
    key: 'requestPayment',
    value: function requestPayment(tempData, callback) {
      console.log('SSSSSSSS', tempData);
      var timeStamp = tempData.timeStamp,


      // 随机字符串
      nonceStr = tempData.nonceStr,


      // 统一下单
      pkg = tempData.package,


      // 签名
      paySign = tempData.paySign,


      // 订单号
      payNo = tempData.payNo,
          signType = tempData.signType;
      _taroWeapp2.default.requestPayment({
        timeStamp: timeStamp,
        nonceStr: nonceStr,
        package: pkg,
        signType: signType,
        paySign: paySign,
        success: function success(res) {
          console.log('>>>>>', res);
          res.payNo = payNo;
          // 支付成功跳转到支付成功页面
          if (res.errMsg == "requestPayment:ok") {
            callback(res);
          }
        },
        fail: function fail(res) {
          res.payNo = payNo;
          // 判断用户取消支付
          if (res.errMsg == "reques tPayment:fail cancel") {
            callback(res);
          } else {
            // 支付失败跳转到支付失败页面
            callback(res);
          }
        }
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this4 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__263"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__263 = _genCompid2[0],
          $compid__263 = _genCompid2[1];

      var _state2 = this.__state,
          isOpenCard = _state2.isOpenCard,
          creditCardList = _state2.creditCardList;


      this.anonymousFunc0 = function () {
        return _this4.closeCard();
      };

      this.anonymousFunc2 = function () {
        return _this4.addNewCard();
      };

      this.anonymousFunc3 = function () {
        return _this4.clickGoPay(2);
      };

      var loopArray101 = creditCardList.length > 0 ? creditCardList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bcjzz" + index;

        _this4.anonymousFunc1Map[_$indexKey] = function () {
          return _this4.clickChooseCard(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "isOpened": isOpenCard
      }, $compid__263, $prevCompid__263);
      Object.assign(this.__state, {
        loopArray101: loopArray101,
        $compid__263: $compid__263
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return OtherPay;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class2.$$componentPath = "pagesC/pages/otherPay/index", _temp2)) || _class);
exports.default = OtherPay;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(OtherPay, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/otherPay/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/otherPay/index.jsx":
/*!*********************************************!*\
  !*** ./src/pagesC/pages/otherPay/index.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherPay/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherPay/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/otherPay/index.less":
/*!**********************************************!*\
  !*** ./src/pagesC/pages/otherPay/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/otherPay/index.jsx","runtime","taro","vendors","common"]]]);