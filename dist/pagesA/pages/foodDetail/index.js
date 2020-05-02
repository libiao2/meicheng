(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesA/pages/foodDetail/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesA/pages/foodDetail/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FoodDetail = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(FoodDetail, _BaseComponent);

  function FoodDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, FoodDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FoodDetail.__proto__ || Object.getPrototypeOf(FoodDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "goodsInfo", "loopArray124", "loopArray125", "loopArray126", "$compid__327", "$compid__328", "$compid__329", "$compid__330", "$compid__331", "$compid__332", "hotL", "chatList", "shopId", "pageNum", "pageSize", "toastText", "isOpenToast", "openMessage", "myMessage", "memberId"], _this.state = {
      goodsInfo: {},
      shopId: '',
      chatList: [],
      pageNum: 1,
      pageSize: 10,
      toastText: '',
      isOpenToast: false,
      openMessage: false,
      myMessage: '', /// 评论信息
      memberId: '' /// 评论时保留评论id
    }, _this.config = {
      navigationBarTitleText: '美城美事365'
    }, _this.anonymousFunc1Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.anonymousFunc7Map = {}, _this.customComponents = ["AtIcon", "Footer", "AtToast", "AtActionSheet", "AtActionSheetItem", "AtTextarea"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FoodDetail, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(FoodDetail.prototype.__proto__ || Object.getPrototypeOf(FoodDetail.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var id = this.$router.params.id;
      this.setState({
        shopId: id
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
    key: 'goCai',
    value: function goCai(list) {
      _taroWeapp2.default.navigateTo({
        url: "/pagesB/pages/menu/index?list=" + encodeURIComponent(JSON.stringify(list))
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
    key: 'getCarCount',
    value: function getCarCount() {
      _api2.default.post('/cart/count', {}).then(function (res) {
        console.log('sssss', res);
        if (res.data.code == 200) {
          if (res.data.data != 0) {
            _taroWeapp2.default.setTabBarBadge({
              index: 2,
              text: "" + res.data.data
            });
          } else {
            _taroWeapp2.default.removeTabBarBadge({
              index: 2
            });
          }
        }
      });
    }
  }, {
    key: 'addCard',
    value: function addCard(item) {
      var _this4 = this;

      console.log('HHHHH', item);
      var _state2 = this.state,
          shopId = _state2.shopId,
          goodsInfo = _state2.goodsInfo;

      var obj = {
        productId: shopId,
        productItemId: item.id,
        quantity: 1,
        price: item.price,
        productPic: item.pic,
        productName: goodsInfo.name,
        productItemName: item.name
      };
      _api2.default.post('/cart/add', obj).then(function (res) {
        if (res.data.code == 200) {
          _this4.setState({
            isOpenToast: true,
            toastText: '成功添加购物车！'
          });
          _this4.getCarCount();
        }
      });
    }
  }, {
    key: 'goTuan',
    value: function goTuan(id) {
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/foodTuan/index?goodsId=" + id
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
    key: 'huifuClick',
    value: function huifuClick(item) {
      console.log('????');
      this.setState({
        openMessage: true,
        memberId: item.id
      });
    }
  }, {
    key: 'tujianDetail',
    value: function tujianDetail(item) {
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/foodInfo/index?goodsId=" + item.id
      });
    }
  }, {
    key: 'publishMessage',
    value: function publishMessage(type) {
      var _this5 = this;

      var _state3 = this.state,
          shopId = _state3.shopId,
          myMessage = _state3.myMessage,
          memberId = _state3.memberId;

      if (memberId == '') {
        /// 评论
        var obj = {
          productId: shopId,
          content: myMessage,
          anonymous: type
        };
        _api2.default.post('/comment/create', obj).then(function (res) {
          console.log('mmmmm', res);
          if (res.data.code == 200) {
            _this5.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10
            }, function () {
              _this5.getChatList(shopId);
            });
          }
        });
      } else {
        var _obj = {
          commentId: memberId,
          content: myMessage,
          anonymous: type
        };

        _api2.default.post('/comment/replay', _obj).then(function (res) {
          console.log('hhhhh', res);
          if (res.data.code == 200) {
            _this5.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10,
              memberId: ''
            }, function () {
              _this5.getChatList(shopId);
            });
          }
        });
      }
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '美城美事365',
        path: "/pagesA/foodDetail/index?id=" + shopId,
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this6 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__327"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__327 = _genCompid2[0],
          $compid__327 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__328"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__328 = _genCompid4[0],
          $compid__328 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__329"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__329 = _genCompid6[0],
          $compid__329 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__330"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__330 = _genCompid8[0],
          $compid__330 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__331"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__331 = _genCompid10[0],
          $compid__331 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__332"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__332 = _genCompid12[0],
          $compid__332 = _genCompid12[1];

      var _state4 = this.__state,
          goodsInfo = _state4.goodsInfo,
          chatList = _state4.chatList,
          shopId = _state4.shopId,
          isOpenToast = _state4.isOpenToast,
          openMessage = _state4.openMessage,
          myMessage = _state4.myMessage,
          toastText = _state4.toastText;

      var hotL = [];
      if (goodsInfo.hotList) {
        hotL = goodsInfo.hotList.length > 3 ? [goodsInfo.hotList[0], goodsInfo.hotList[1], goodsInfo.hotList[2]] : goodsInfo.hotList;
      }

      var url = "/pagesA/foodDetail/index?id=" + shopId;

      this.anonymousFunc0 = function () {
        return _this6.callMe(goodsInfo.telephone);
      };

      var anonymousState__temp = __webpack_require__(/*! ./../../../image/time.png */ "./src/image/time.png");

      var anonymousState__temp2 = __webpack_require__(/*! ./../../../image/dingwei.png */ "./src/image/dingwei.png");

      this.anonymousFunc2 = function () {
        return _this6.goCai(goodsInfo.hotList);
      };

      this.anonymousFunc6 = function () {
        return _this6.openMessage();
      };

      this.anonymousFunc8 = function () {
        return _this6.handleClose();
      };

      this.anonymousFunc9 = function () {
        return _this6.publishMessage(1);
      };

      this.anonymousFunc10 = function () {
        return _this6.publishMessage(0);
      };

      var loopArray124 = goodsInfo.groupList && goodsInfo.groupList.length > 0 ? goodsInfo.groupList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bfczz" + index;

        _this6.anonymousFunc1Map[_$indexKey] = function () {
          return _this6.goTuan(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray125 = hotL && hotL.length > 0 ? hotL.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "bfdzz" + index;

        _this6.anonymousFunc3Map[_$indexKey2] = function () {
          return _this6.tujianDetail(item.$original);
        };

        var _$indexKey3 = "bfezz" + index;

        _this6.anonymousFunc4Map[_$indexKey3] = function () {
          return _this6.tujianDetail(item.$original);
        };

        var _$indexKey4 = "bffzz" + index;

        _this6.anonymousFunc5Map[_$indexKey4] = function () {
          return _this6.addCard(item.$original);
        };

        var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + 'bfhzzzzzzz' + index, true),
            _genCompid14 = _slicedToArray(_genCompid13, 2),
            $prevCompid__326 = _genCompid14[0],
            $compid__326 = _genCompid14[1];

        hotL && hotL.length > 0 && _taroWeapp.propsManager.set({
          "value": "add-circle",
          "size": "16",
          "color": "rgb(36, 200, 178)"
        }, $compid__326, $prevCompid__326);
        return {
          _$indexKey2: _$indexKey2,
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $compid__326: $compid__326,
          $original: item.$original
        };
      }) : [];
      var loopArray126 = chatList.length > 0 ? chatList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey5 = "bfgzz" + index;

        _this6.anonymousFunc7Map[_$indexKey5] = function () {
          return _this6.huifuClick(item.$original);
        };

        return {
          _$indexKey5: _$indexKey5,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "onClick": this.anonymousFunc0,
        "className": "phoneIcon",
        "value": "phone",
        "size": "26",
        "color": "#666"
      }, $compid__327, $prevCompid__327);
      _taroWeapp.propsManager.set({
        "className": "pinglunIcon",
        "value": "message",
        "size": "15",
        "color": "#999"
      }, $compid__328, $prevCompid__328);
      _taroWeapp.propsManager.set({
        "shopId": this.__state.shopId,
        "shopName": goodsInfo.name,
        "url": url,
        "isDian": goodsInfo.upvoteIs,
        "list": goodsInfo.commonList
      }, $compid__329, $prevCompid__329);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__330, $prevCompid__330);
      _taroWeapp.propsManager.set({
        "isOpened": openMessage,
        "onClose": this.anonymousFunc8
      }, $compid__331, $prevCompid__331);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": myMessage,
        "onChange": this.messageChange.bind(this)
      }, $compid__332, $prevCompid__332);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray124: loopArray124,
        loopArray125: loopArray125,
        loopArray126: loopArray126,
        $compid__327: $compid__327,
        $compid__328: $compid__328,
        $compid__329: $compid__329,
        $compid__330: $compid__330,
        $compid__331: $compid__331,
        $compid__332: $compid__332,
        hotL: hotL
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
    value: function anonymousFunc3(_$indexKey2) {
      var _anonymousFunc3Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc3Map[_$indexKey2] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey2].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey3) {
      var _anonymousFunc4Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc4Map[_$indexKey3] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey3].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey4) {
      var _anonymousFunc5Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc5Map[_$indexKey4] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey4].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(_$indexKey5) {
      var _anonymousFunc7Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc7Map[_$indexKey5] && (_anonymousFunc7Map = this.anonymousFunc7Map)[_$indexKey5].apply(_anonymousFunc7Map, e);
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: 'anonymousFunc10',
    value: function anonymousFunc10(e) {
      ;
    }
  }]);

  return FoodDetail;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc9", "anonymousFunc10"], _class2.$$componentPath = "pagesA/pages/foodDetail/index", _temp2)) || _class);
exports.default = FoodDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(FoodDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesA/pages/foodDetail/index.wxml";

/***/ }),

/***/ "./src/pagesA/pages/foodDetail/index.jsx":
/*!***********************************************!*\
  !*** ./src/pagesA/pages/foodDetail/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesA/pages/foodDetail/index.less":
/*!************************************************!*\
  !*** ./src/pagesA/pages/foodDetail/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesA/pages/foodDetail/index.jsx","runtime","taro","vendors","common"]]]);