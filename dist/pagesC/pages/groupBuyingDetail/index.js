(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/groupBuyingDetail/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/groupBuyingDetail/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupBuyingDetail = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(GroupBuyingDetail, _BaseComponent);

  function GroupBuyingDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupBuyingDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = GroupBuyingDetail.__proto__ || Object.getPrototypeOf(GroupBuyingDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "loopArray375", "$compid__875", "dataList", "pageNum", "pageSize", "openShare", "shareItem"], _this.state = {
      dataList: [],
      pageNum: 1,
      pageSize: 10,
      openShare: false,
      shareItem: {}
    }, _this.config = {
      navigationBarTitleText: '拼团详情',
      "enablePullDownRefresh": true,
      onReachBottomDistance: 50
    }, _this.anonymousFunc0Map = {}, _this.customComponents = ["AtActionSheet", "AtActionSheetItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GroupBuyingDetail, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(GroupBuyingDetail.prototype.__proto__ || Object.getPrototypeOf(GroupBuyingDetail.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        this.getData();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      var _this2 = this;

      /// 下拉事件
      this.setState({
        pageNum: 1,
        pageSize: 10,
        dataList: []
      }, function () {
        _this2.getData();
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this3 = this;

      //上拉事件监听
      this.setState({
        pageNum: this.state.pageNum + 1
      }, function () {
        _this3.getData();
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this4 = this;

      var _state = this.state,
          pageNum = _state.pageNum,
          pageSize = _state.pageSize,
          dataList = _state.dataList;

      var obj = { pageNum: pageNum, pageSize: pageSize };
      _api2.default.post('/order/listGroupOrderPage', obj).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          var list = dataList;
          if (pageNum == 1) {
            _this4.setState({
              dataList: res.data.data.list
            });
          } else {
            _this4.setState({
              dataList: [].concat(_toConsumableArray(list), _toConsumableArray(res.data.data.list))
            });
          }
        }
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        openShare: false
      });
    }
  }, {
    key: 'shareOther',
    value: function shareOther(item) {
      console.log('000000', item);
      this.setState({
        openShare: true,
        shareItem: item
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var shareItem = this.state.shareItem;

      console.log('nnnmmm', shareItem);
      return {
        title: shareItem.productItemName + ',\u539F\u4EF7' + shareItem.groupOriginalPrice + ',\u73B0\u4EF7' + shareItem.price + ',\u9650\u65F6\u56E2\u8D2D',
        path: "/pagesA/pages/foodTuan/index?goodsId=" + shareItem.productItemId,
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: 'shareFriend',
    value: function shareFriend() {
      var shareItem = this.state.shareItem;

      this.setState({
        isOpenToast: true,
        toastText: '开始保存图片，请稍后~~'
      });
      _api2.default.post('/product/shareProdItem', { id: shareItem.id }).then(function (res) {
        console.log('gggggg', res);
        if (res.data.code == 200) {
          var imgUrl = res.data.data;

          _taroWeapp2.default.downloadFile({
            url: imgUrl,
            success: function success(res) {
              console.log('UUUYYYYY', res);
              if (res.statusCode === 200) {
                _taroWeapp2.default.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function success(res) {
                    _taroWeapp2.default.showToast({
                      title: '保存图片成功！',
                      icon: 'none',
                      mask: true
                    });
                  },
                  fail: function fail(res) {
                    _taroWeapp2.default.showToast({
                      title: '保存图片失败！',
                      icon: 'none',
                      mask: true
                    });
                  }
                });
              }
            }
          });
        }
      });
    }
  }, {
    key: 'goLogin',
    value: function goLogin() {
      _taroWeapp2.default.switchTab({
        url: "/pages/my/index"
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__875"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__875 = _genCompid2[0],
          $compid__875 = _genCompid2[1];

      var _state2 = this.__state,
          dataList = _state2.dataList,
          openShare = _state2.openShare;


      this.anonymousFunc1 = function () {
        return _this5.goLogin();
      };

      this.anonymousFunc2 = function () {
        return _this5.handleClose();
      };

      var anonymousState__temp3 = __webpack_require__(/*! ./../../../image/wechatP.png */ "./src/image/wechatP.png");

      var anonymousState__temp4 = _taroWeapp2.default.getStorageSync('token') != '';
      var loopArray375 = dataList.length > 0 ? dataList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = dataList.length > 0 ? __webpack_require__(/*! ./../../../image/shop.jpg */ "./src/image/shop.jpg") : null;
        var $anonymousCallee__93 = dataList.length > 0 ? item.$original.orderItemList.map(function (item2, index2) {
          item2 = {
            $original: (0, _taroWeapp.internal_get_original)(item2)
          };
          var _$indexKey = 'fjhzz' + index + '-' + index2;

          _this5.anonymousFunc0Map[_$indexKey] = function () {
            return _this5.shareOther(item2.$original);
          };

          return {
            _$indexKey: _$indexKey,
            $original: item2.$original
          };
        }) : [];
        return {
          $loopState__temp2: $loopState__temp2,
          $anonymousCallee__93: $anonymousCallee__93,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "isOpened": openShare,
        "onClose": this.anonymousFunc2
      }, $compid__875, $prevCompid__875);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray375: loopArray375,
        $compid__875: $compid__875
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return GroupBuyingDetail;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1"], _class2.$$componentPath = "pagesC/pages/groupBuyingDetail/index", _temp2)) || _class);
exports.default = GroupBuyingDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(GroupBuyingDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/groupBuyingDetail/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/groupBuyingDetail/index.jsx":
/*!******************************************************!*\
  !*** ./src/pagesC/pages/groupBuyingDetail/index.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************!*\
  !*** ./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************!*\
  !*** ./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/groupBuyingDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/groupBuyingDetail/index.less":
/*!*******************************************************!*\
  !*** ./src/pagesC/pages/groupBuyingDetail/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/groupBuyingDetail/index.jsx","runtime","taro","vendors","common"]]]);