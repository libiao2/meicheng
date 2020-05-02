(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/otherDetail/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE& ***!
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

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.6@@tarojs/redux/index.js");

var _counter = __webpack_require__(/*! ../../../actions/counter */ "./src/actions/counter.js");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/otherDetail/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtherDetail = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(OtherDetail, _BaseComponent);

  function OtherDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OtherDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OtherDetail.__proto__ || Object.getPrototypeOf(OtherDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "goodsInfo", "loopArray135", "$compid__352", "$compid__353", "$compid__354", "$compid__355", "$compid__356", "$compid__357", "type", "chatList", "shopId", "pageNum", "pageSize", "toastText", "isOpenToast", "openMessage", "myMessage", "memberId", "openShare"], _this.state = {
      goodsInfo: {},
      shopId: '',
      chatList: [],
      pageNum: 1,
      pageSize: 10,
      toastText: '',
      isOpenToast: false,
      openMessage: false,
      myMessage: '', /// 评论信息
      memberId: '', /// 评论时保留评论id
      type: null,
      openShare: false
    }, _this.config = {
      navigationBarTitleText: '美城美事365'
    }, _this.anonymousFunc2Map = {}, _this.customComponents = ["AtIcon", "AtToast", "AtActionSheet", "AtActionSheetItem", "AtTextarea"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OtherDetail, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(OtherDetail.prototype.__proto__ || Object.getPrototypeOf(OtherDetail.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.$router.params.id;
      var type = this.$router.params.type;
      this.setState({
        shopId: id,
        type: type
      });
      this.getData(id);
      this.getChatList(id);
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
    value: function getData(id) {
      var _this2 = this;

      _api2.default.post('/home/getProductInfo', { id: id }).then(function (res) {
        console.log('iiiiiii', res);
        if (res.data.code == 200) {
          _this2.setState({
            goodsInfo: res.data.data
          });
        }
      });
    }
  }, {
    key: 'getChatList',
    value: function getChatList(id) {
      var _this3 = this;

      var _state = this.state,
          pageNum = _state.pageNum,
          pageSize = _state.pageSize;

      var obj = {
        productId: parseInt(id),
        pageNum: pageNum,
        pageSize: pageSize
      };
      _api2.default.post('/comment/commentListByProductId', obj).then(function (res) {
        console.log('JJJ', res);
        if (res.data.code == 200) {
          _this3.setState({
            chatList: res.data.data.list
          });
        }
      });
    }
  }, {
    key: 'callMe',
    value: function callMe(phone) {
      _taroWeapp2.default.makePhoneCall({
        phoneNumber: phone,
        success: function success() {
          console.log("拨打电话成功！");
        },
        fail: function fail() {
          console.log("拨打电话失败！");
        }
      });
    }
  }, {
    key: 'openMessage',
    value: function openMessage() {
      this.setState({
        openMessage: true,
        isOpenToast: false
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        openMessage: false
      });
    }
  }, {
    key: 'messageChange',
    value: function messageChange(e) {
      this.setState({
        myMessage: e
      });
    }
  }, {
    key: 'aa',
    value: function aa(item) {
      console.log('????');
      this.setState({
        openMessage: true,
        memberId: item.id
      });
    }
  }, {
    key: 'publishMessage',
    value: function publishMessage() {
      var _this4 = this;

      var _state2 = this.state,
          shopId = _state2.shopId,
          myMessage = _state2.myMessage,
          memberId = _state2.memberId;

      if (memberId == '') {
        /// 评论
        var obj = {
          productId: shopId,
          content: myMessage,
          anonymous: 0
        };
        _api2.default.post('/comment/create', obj).then(function (res) {
          console.log('mmmmm', res);
          if (res.data.code == 200) {
            _this4.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10
            }, function () {
              _this4.getChatList(shopId);
            });
          }
        });
      } else {
        var _obj = {
          commentId: memberId,
          content: myMessage,
          anonymous: 0
        };

        _api2.default.post('/comment/replay', _obj).then(function (res) {
          console.log('hhhhh', res);
          if (res.data.code == 200) {
            _this4.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10,
              memberId: ''
            }, function () {
              _this4.getChatList(shopId);
            });
          }
        });
      }
    }
  }, {
    key: 'shareHandleClose',
    value: function shareHandleClose() {
      this.setState({
        openShare: false
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var _state3 = this.state,
          shopId = _state3.shopId,
          type = _state3.type;

      return {
        title: '分享',
        path: "/pagesC/pages/otherDetail/index?id=" + shopId + "&type=" + type,
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: 'shareClick',
    value: function shareClick() {
      this.setState({
        openShare: true
      });
    }
  }, {
    key: 'shareFriend',
    value: function shareFriend() {
      var shopId = this.state.shopId;

      this.setState({
        isOpenToast: true,
        toastText: '开始保存图片，请稍后~~'
      });
      _api2.default.post('/product/shareProd', { id: shopId }).then(function (res) {
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
    key: '_createData',
    value: function _createData() {
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__352"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__352 = _genCompid2[0],
          $compid__352 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__353"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__353 = _genCompid4[0],
          $compid__353 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__354"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__354 = _genCompid6[0],
          $compid__354 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__355"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__355 = _genCompid8[0],
          $compid__355 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__356"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__356 = _genCompid10[0],
          $compid__356 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__357"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__357 = _genCompid12[0],
          $compid__357 = _genCompid12[1];

      var _state4 = this.__state,
          goodsInfo = _state4.goodsInfo,
          chatList = _state4.chatList,
          shopId = _state4.shopId,
          isOpenToast = _state4.isOpenToast,
          openMessage = _state4.openMessage,
          myMessage = _state4.myMessage,
          type = _state4.type,
          openShare = _state4.openShare,
          toastText = _state4.toastText;

      console.log('JJJJKKK', type);

      var url = "/pagesC/pages/otherDetail/index?id=" + shopId + "&type=" + type;

      this.anonymousFunc0 = function () {
        return _this5.shareClick();
      };

      var anonymousState__temp = __webpack_require__(/*! ./../../../image/share.png */ "./src/image/share.png");

      this.anonymousFunc1 = function () {
        return _this5.openMessage();
      };

      this.anonymousFunc3 = function () {
        return _this5.handleClose();
      };

      this.anonymousFunc4 = function () {
        return _this5.publishMessage();
      };

      this.anonymousFunc5 = function () {
        return _this5.shareHandleClose();
      };

      var anonymousState__temp2 = __webpack_require__(/*! ./../../../image/wechatP.png */ "./src/image/wechatP.png");

      this.anonymousFunc6 = function () {
        return _this5.shareFriend();
      };

      var anonymousState__temp3 = __webpack_require__(/*! ./../../../image/wechatP.png */ "./src/image/wechatP.png");

      var loopArray135 = chatList.length > 0 ? chatList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bghzz" + index;

        _this5.anonymousFunc2Map[_$indexKey] = function () {
          return _this5.aa(item.$original);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      type != 5 && _taroWeapp.propsManager.set({
        "className": "icon",
        "value": "phone",
        "size": "16",
        "color": "#666"
      }, $compid__352, $prevCompid__352);
      _taroWeapp.propsManager.set({
        "className": "pinglunIcon",
        "value": "message",
        "size": "15",
        "color": "#999"
      }, $compid__353, $prevCompid__353);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__354, $prevCompid__354);
      _taroWeapp.propsManager.set({
        "isOpened": openMessage,
        "onClose": this.anonymousFunc3
      }, $compid__355, $prevCompid__355);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": myMessage,
        "onChange": this.messageChange.bind(this)
      }, $compid__356, $prevCompid__356);
      _taroWeapp.propsManager.set({
        "isOpened": openShare,
        "onClose": this.anonymousFunc5
      }, $compid__357, $prevCompid__357);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray135: loopArray135,
        $compid__352: $compid__352,
        $compid__353: $compid__353,
        $compid__354: $compid__354,
        $compid__355: $compid__355,
        $compid__356: $compid__356,
        $compid__357: $compid__357
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
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }]);

  return OtherDetail;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc4", "anonymousFunc6"], _class2.$$componentPath = "pagesC/pages/otherDetail/index", _temp2)) || _class);
exports.default = OtherDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(OtherDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/otherDetail/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/otherDetail/index.jsx":
/*!************************************************!*\
  !*** ./src/pagesC/pages/otherDetail/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/otherDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/otherDetail/index.less":
/*!*************************************************!*\
  !*** ./src/pagesC/pages/otherDetail/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/otherDetail/index.jsx","runtime","taro","vendors","common"]]]);