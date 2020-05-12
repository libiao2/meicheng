(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesB/pages/search/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************/
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

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

__webpack_require__(/*! ./index.less */ "./src/pagesB/pages/search/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(Search, _BaseComponent);

  function Search() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray286", "loopArray287", "$compid__650", "$compid__651", "value", "categoryId", "typeList", "dataList", "keyword", "hasFocus", "city", "pageNum", "pageSize", "isOpenToast", "toastText"], _this.state = {
      keyword: '',
      hasFocus: false,
      typeList: [{
        title: '美食'
      }, {
        title: '休闲'
      }, {
        title: '生活'
      }, {
        title: '二手'
      }, {
        title: '房源'
      }, {
        title: '部落'
      }],
      city: null,
      categoryId: 1,
      pageNum: 1,
      pageSize: 10,
      dataList: [],
      isOpenToast: false,
      toastText: ''
    }, _this.config = {
      navigationBarTitleText: '搜索',
      "enablePullDownRefresh": true,
      onReachBottomDistance: 50
    }, _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.customComponents = ["AtSearchBar", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      var parmars = this.$router.params;
      this.setState({
        city: parseInt(parmars.city)
      });
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        _taroWeapp2.default.getLocation({
          type: 'wgs84',
          success: function success(res) {
            console.log('成功：', res);
            that.setState({
              lat: res.latitude,
              lon: res.longitude
            });
          },
          fail: function fail(res) {
            console.log('失败：', res);
          }
        });
      }
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
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      /// 下拉事件
      console.log('bb');
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this2 = this;

      //上拉事件监听
      this.setState({
        pageNum: this.state.pageNum + 1
      }, function () {
        _this2.getData();
      });
    }
  }, {
    key: 'valueChange',
    value: function valueChange(value) {
      console.log('NNN', value);
      this.setState({
        keyword: value
      });
    }
  }, {
    key: 'goHome',
    value: function goHome() {
      _taroWeapp2.default.switchTab({
        url: '/pages/index/index'
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this3 = this;

      var _state = this.state,
          keyword = _state.keyword,
          city = _state.city,
          categoryId = _state.categoryId,
          pageNum = _state.pageNum,
          dataList = _state.dataList,
          pageSize = _state.pageSize;


      if (keyword == '') {
        return;
      }

      var obj = {
        keyword: keyword,
        city: city,
        categoryId: categoryId,
        pageNum: pageNum,
        pageSize: pageSize
      };
      var list = [].concat(_toConsumableArray(dataList));
      _api2.default.post('/home/search', obj).then(function (res) {
        if (res.data.code == 200) {
          if (res.data.data.list.length == 0) {
            _taroWeapp2.default.showToast({
              title: '暂无更多数据！',
              icon: 'none',
              mask: true
            });
          } else {
            if (pageNum == 1) {
              _this3.setState({
                dataList: res.data.data.list
              });
            } else {
              _this3.setState({
                dataList: [].concat(_toConsumableArray(list), _toConsumableArray(res.data.data.list))
              });
            }
          }
        }
      });
    }
  }, {
    key: 'onActionClick',
    value: function onActionClick() {
      this.getData();
    }
  }, {
    key: 'enterClick',
    value: function enterClick() {
      this.getData();
    }
  }, {
    key: 'chooseType',
    value: function chooseType(index) {
      var _this4 = this;

      this.setState({
        categoryId: index + 1,
        dataList: []
      }, function () {
        _this4.getData();
      });
    }
  }, {
    key: 'distance',
    value: function distance(la1, lo1, la2, lo2) {
      var La1 = la1 * Math.PI / 180.0;
      var La2 = la2 * Math.PI / 180.0;
      var La3 = La1 - La2;
      var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
      var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
      s = s * 6378.137;
      s = Math.round(s * 10000) / 10000;
      s = s.toFixed(2);
      return s;
    }
  }, {
    key: 'location',
    value: function location(item) {
      var _state2 = this.state,
          lat = _state2.lat,
          lon = _state2.lon;

      return this.distance(lat, lon, item.latitude, item.longitude);
    }
  }, {
    key: 'goDetail',
    value: function goDetail(item) {
      switch (item.categoryId) {
        case 1:
          // 美食
          _taroWeapp2.default.navigateTo({
            url: "/pagesB/pages/foodDetail/index?id=" + item.id
          });
          break;
        case 2:
          // 休闲
          _taroWeapp2.default.navigateTo({
            url: "/pagesC/pages/leisureDetail/index?id=" + item.id
          });
          break;
        case 3:
          // 生活
          _taroWeapp2.default.navigateTo({
            url: "/pagesC/pages/otherDetail/index?id=" + item.id + "&type=" + (item.categoryId - 1)
          });
          break;
        case 4:
          // 二手
          _taroWeapp2.default.navigateTo({
            url: "/pagesC/pages/otherDetail/index?id=" + item.id + "&type=" + (item.categoryId - 1)
          });
          break;
        case 5:
          // 房源
          _taroWeapp2.default.navigateTo({
            url: "/pagesC/pages/otherDetail/index?id=" + item.id + "&type=" + (item.categoryId - 1)
          });
          break;
        case 6:
          //部落
          _taroWeapp2.default.navigateTo({
            url: "/pagesC/pages/otherDetail/index?id=" + item.id + "&type=" + (item.categoryId - 1)
          });
          break;
      }
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__650"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__650 = _genCompid2[0],
          $compid__650 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__651"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__651 = _genCompid4[0],
          $compid__651 = _genCompid4[1];

      var _state3 = this.__state,
          value = _state3.value,
          typeList = _state3.typeList,
          categoryId = _state3.categoryId,
          isOpenToast = _state3.isOpenToast,
          dataList = _state3.dataList,
          toastText = _state3.toastText;


      this.anonymousFunc0 = function () {
        return _this5.setState({ hasFocus: true });
      };

      this.anonymousFunc1 = function () {
        return _this5.setState({ hasFocus: false });
      };

      this.anonymousFunc2 = function () {
        return _this5.enterClick();
      };

      this.anonymousFunc3 = function () {
        return _this5.goHome();
      };

      var loopArray286 = typeList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "diezz" + index;

        _this5.anonymousFunc4Map[_$indexKey] = function () {
          return _this5.chooseType(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      var loopArray287 = dataList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "difzz" + index;

        _this5.anonymousFunc5Map[_$indexKey2] = function () {
          return _this5.goDetail(item.$original);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "className": "search",
        "value": value,
        "onFocus": this.anonymousFunc0,
        "onBlur": this.anonymousFunc1,
        "onChange": this.valueChange.bind(this),
        "onActionClick": this.onActionClick.bind(this),
        "onConfirm": this.anonymousFunc2
      }, $compid__650, $prevCompid__650);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__651, $prevCompid__651);
      Object.assign(this.__state, {
        loopArray286: loopArray286,
        loopArray287: loopArray287,
        $compid__650: $compid__650,
        $compid__651: $compid__651,
        value: value
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
    value: function anonymousFunc1(e) {
      ;
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
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey) {
      var _anonymousFunc4Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc4Map[_$indexKey] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey2) {
      var _anonymousFunc5Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc5Map[_$indexKey2] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey2].apply(_anonymousFunc5Map, e);
    }
  }]);

  return Search;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class2.$$componentPath = "pagesB/pages/search/index", _temp2)) || _class);
exports.default = Search;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Search, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesB/pages/search/index.wxml";

/***/ }),

/***/ "./src/pagesB/pages/search/index.jsx":
/*!*******************************************!*\
  !*** ./src/pagesB/pages/search/index.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/search/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/search/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesB/pages/search/index.less":
/*!********************************************!*\
  !*** ./src/pagesB/pages/search/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesB/pages/search/index.jsx","runtime","taro","vendors","common"]]]);