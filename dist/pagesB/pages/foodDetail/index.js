(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesB/pages/foodDetail/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE& ***!
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

__webpack_require__(/*! ./index.less */ "./src/pagesB/pages/foodDetail/index.less");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = FoodDetail.__proto__ || Object.getPrototypeOf(FoodDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "goodsInfo", "loopArray255", "loopArray256", "loopArray257", "$compid__596", "$compid__597", "$compid__598", "$compid__599", "$compid__600", "$compid__601", "hotL", "chatList", "shopId", "pageNum", "pageSize", "toastText", "isOpenToast", "openMessage", "myMessage", "memberId", "carCount", "dianCount"], _this.state = {
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
      carCount: null,
      dianCount: 0
    }, _this.config = {
      navigationBarTitleText: '美城美事365'
    }, _this.anonymousFunc2Map = {}, _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.anonymousFunc6Map = {}, _this.anonymousFunc8Map = {}, _this.customComponents = ["AtIcon", "Footer", "AtToast", "AtActionSheet", "AtActionSheetItem", "AtTextarea"], _temp), _possibleConstructorReturn(_this, _ret);
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
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        this.getCarCount();
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
    key: 'getData',
    value: function getData(id) {
      var _this2 = this;

      _api2.default.post('/home/getProductInfo', { id: id }).then(function (res) {
        if (res.data.code == 200) {
          _this2.setState({
            goodsInfo: res.data.data,
            dianCount: res.data.data.upvote
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
      var _this4 = this;

      _api2.default.post('/cart/count', {}).then(function (res) {
        console.log('sssss', res);
        if (res.data.code == 200) {
          if (res.data.data != 0) {
            _this4.setState({
              carCount: res.data.data
            });
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
      var _this5 = this;

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
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        _api2.default.post('/cart/add', obj).then(function (res) {
          if (res.data.code == 200) {
            _this5.setState({
              isOpenToast: true,
              toastText: '成功添加购物车！'
            });
            _this5.getCarCount();
          }
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: "/pages/my/index"
        });
      }
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
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        this.setState({
          openMessage: true,
          isOpenToast: false
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: "/pages/my/index"
        });
      }
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
      if (_taroWeapp2.default.getStorageSync('userInfo') != '') {
        this.setState({
          openMessage: true,
          memberId: item.id
        });
      } else {
        _taroWeapp2.default.switchTab({
          url: "/pages/my/index"
        });
      }
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
      var _this6 = this;

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
            _this6.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10
            }, function () {
              _this6.getChatList(shopId);
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
            _this6.setState({
              isOpenToast: true,
              toastText: '评论成功！',
              openMessage: false,
              pageNum: 1,
              pageSize: 10,
              memberId: ''
            }, function () {
              _this6.getChatList(shopId);
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
    key: 'openMap',
    value: function openMap() {
      var goodsInfo = this.state.goodsInfo;
      ////使用微信内置地图查看标记点位置，并进行导航

      _taroWeapp2.default.openLocation({
        latitude: parseInt(goodsInfo.latitude), //要去的纬度-地址
        longitude: parseInt(goodsInfo.longitude) //要去的经度-地址
      });
    }
  }, {
    key: 'dianCountChange',
    value: function dianCountChange() {
      var dianCount = this.state.dianCount;

      var val = dianCount;
      val += 1;
      this.setState({
        dianCount: val
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this7 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__596"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__596 = _genCompid2[0],
          $compid__596 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__597"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__597 = _genCompid4[0],
          $compid__597 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__598"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__598 = _genCompid6[0],
          $compid__598 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__599"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__599 = _genCompid8[0],
          $compid__599 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__600"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__600 = _genCompid10[0],
          $compid__600 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__601"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__601 = _genCompid12[0],
          $compid__601 = _genCompid12[1];

      var _state4 = this.__state,
          goodsInfo = _state4.goodsInfo,
          chatList = _state4.chatList,
          shopId = _state4.shopId,
          isOpenToast = _state4.isOpenToast,
          openMessage = _state4.openMessage,
          myMessage = _state4.myMessage,
          dianCount = _state4.dianCount,
          carCount = _state4.carCount,
          toastText = _state4.toastText;

      var hotL = [];
      if (goodsInfo.hotList) {
        hotL = goodsInfo.hotList.length > 3 ? [goodsInfo.hotList[0], goodsInfo.hotList[1], goodsInfo.hotList[2]] : goodsInfo.hotList;
      }

      var url = "/pagesA/foodDetail/index?id=" + shopId;

      this.anonymousFunc0 = function () {
        return _this7.callMe(goodsInfo.telephone);
      };

      var anonymousState__temp = __webpack_require__(/*! ./../../../image/time.png */ "./src/image/time.png");

      this.anonymousFunc1 = function () {
        return _this7.openMap();
      };

      var anonymousState__temp2 = __webpack_require__(/*! ./../../../image/dingwei.png */ "./src/image/dingwei.png");

      this.anonymousFunc3 = function () {
        return _this7.goCai(goodsInfo.hotList);
      };

      this.anonymousFunc7 = function () {
        return _this7.openMessage();
      };

      this.anonymousFunc9 = function () {
        return _this7.handleClose();
      };

      this.anonymousFunc10 = function () {
        return _this7.publishMessage(1);
      };

      this.anonymousFunc11 = function () {
        return _this7.publishMessage(0);
      };

      var loopArray255 = goodsInfo.groupList && goodsInfo.groupList.length > 0 ? goodsInfo.groupList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "degzz" + index;

        _this7.anonymousFunc2Map[_$indexKey] = function () {
          return _this7.goTuan(item.$original.id);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray256 = hotL && hotL.length > 0 ? hotL.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "dehzz" + index;

        _this7.anonymousFunc4Map[_$indexKey2] = function () {
          return _this7.tujianDetail(item.$original);
        };

        var _$indexKey3 = "deizz" + index;

        _this7.anonymousFunc5Map[_$indexKey3] = function () {
          return _this7.tujianDetail(item.$original);
        };

        var _$indexKey4 = "dejzz" + index;

        _this7.anonymousFunc6Map[_$indexKey4] = function () {
          return _this7.addCard(item.$original);
        };

        var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + 'dfbzzzzzzz' + index, true),
            _genCompid14 = _slicedToArray(_genCompid13, 2),
            $prevCompid__595 = _genCompid14[0],
            $compid__595 = _genCompid14[1];

        hotL && hotL.length > 0 && _taroWeapp.propsManager.set({
          "value": "add-circle",
          "size": "16",
          "color": "rgb(36, 200, 178)"
        }, $compid__595, $prevCompid__595);
        return {
          _$indexKey2: _$indexKey2,
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $compid__595: $compid__595,
          $original: item.$original
        };
      }) : [];
      var loopArray257 = chatList.length > 0 ? chatList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey5 = "dfazz" + index;

        _this7.anonymousFunc8Map[_$indexKey5] = function () {
          return _this7.huifuClick(item.$original);
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
      }, $compid__596, $prevCompid__596);
      _taroWeapp.propsManager.set({
        "className": "pinglunIcon",
        "value": "message",
        "size": "15",
        "color": "#999"
      }, $compid__597, $prevCompid__597);
      _taroWeapp.propsManager.set({
        "shopId": this.__state.shopId,
        "shopName": goodsInfo.name,
        "url": url,
        "carCount": carCount,
        "dianCount": dianCount,
        "changeDian": this.dianCountChange,
        "isDian": goodsInfo.upvoteIs,
        "list": goodsInfo.commonList
      }, $compid__598, $prevCompid__598);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__599, $prevCompid__599);
      _taroWeapp.propsManager.set({
        "isOpened": openMessage,
        "onClose": this.anonymousFunc9
      }, $compid__600, $prevCompid__600);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": myMessage,
        "onChange": this.messageChange.bind(this)
      }, $compid__601, $prevCompid__601);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray255: loopArray255,
        loopArray256: loopArray256,
        loopArray257: loopArray257,
        $compid__596: $compid__596,
        $compid__597: $compid__597,
        $compid__598: $compid__598,
        $compid__599: $compid__599,
        $compid__600: $compid__600,
        $compid__601: $compid__601,
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
    value: function anonymousFunc4(_$indexKey2) {
      var _anonymousFunc4Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc4Map[_$indexKey2] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey2].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey3) {
      var _anonymousFunc5Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc5Map[_$indexKey3] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey3].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(_$indexKey4) {
      var _anonymousFunc6Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc6Map[_$indexKey4] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey4].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(_$indexKey5) {
      var _anonymousFunc8Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc8Map[_$indexKey5] && (_anonymousFunc8Map = this.anonymousFunc8Map)[_$indexKey5].apply(_anonymousFunc8Map, e);
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
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(e) {
      ;
    }
  }]);

  return FoodDetail;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc10", "anonymousFunc11"], _class2.$$componentPath = "pagesB/pages/foodDetail/index", _temp2)) || _class);
exports.default = FoodDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(FoodDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesB/pages/foodDetail/index.wxml";

/***/ }),

/***/ "./src/pagesB/pages/foodDetail/index.jsx":
/*!***********************************************!*\
  !*** ./src/pagesB/pages/foodDetail/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/foodDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/foodDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesB/pages/foodDetail/index.less":
/*!************************************************!*\
  !*** ./src/pagesB/pages/foodDetail/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesB/pages/foodDetail/index.jsx","runtime","taro","vendors","common"]]]);