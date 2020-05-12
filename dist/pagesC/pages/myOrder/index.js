(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/myOrder/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/myOrder/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyOrder = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(MyOrder, _BaseComponent);

  function MyOrder() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, MyOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MyOrder.__proto__ || Object.getPrototypeOf(MyOrder)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "loopArray350", "loopArray351", "$compid__816", "$compid__817", "$compid__818", "$compid__819", "$compid__820", "$compid__821", "titleList", "creditCardList", "orderList", "current", "orderStatus", "pageNum", "pageSize", "openPayType", "isOpenCard", "payOrderInfo"], _this.state = {
      titleList: [{ title: '全部订单' }, { title: '待使用' }, { title: '已使用' }, { title: '退款/售后' }],
      current: 0,
      orderStatus: 0,
      pageNum: 1,
      pageSize: 10,
      orderList: [],
      openPayType: false,
      isOpenCard: false,
      creditCardList: [],
      payOrderInfo: {} /// 需要支付的订单信息
    }, _this.config = {
      navigationBarTitleText: '我的订单',
      "enablePullDownRefresh": true,
      onReachBottomDistance: 50
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.anonymousFunc10Map = {}, _this.anonymousFunc11Map = {}, _this.customComponents = ["AtTabs", "AtTabsPane", "AtActionSheet", "AtActionSheetItem", "AtIcon", "AtModal", "AtModalContent"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyOrder, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(MyOrder.prototype.__proto__ || Object.getPrototypeOf(MyOrder.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_taroWeapp2.default.getStorageSync('token') != '') {
        this.getList();
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
      var _this2 = this;

      /// 下拉事件
      console.log('lllllllllllll');
      this.setState({
        orderStatus: 0,
        pageNum: 1,
        pageSize: 10,
        orderList: []
      }, function () {
        _this2.getList();
      });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this3 = this;

      //上拉事件监听
      console.log('sssssssssssss');
      this.setState({
        pageNum: this.state.pageNum + 1
      }, function () {
        _this3.getList();
      });
    }
  }, {
    key: 'getList',
    value: function getList() {
      var _this4 = this;

      var _state = this.state,
          orderStatus = _state.orderStatus,
          pageNum = _state.pageNum,
          pageSize = _state.pageSize,
          orderList = _state.orderList;

      var obj = { orderStatus: orderStatus, pageNum: pageNum, pageSize: pageSize };
      _api2.default.post('/order/listMyOrderPage', obj).then(function (res) {
        console.log('bbbbbnnn', res);
        if (res.data.code == 200) {
          var list = orderList;
          if (pageNum == 1) {
            _this4.setState({
              orderList: res.data.data.list
            });
          } else {
            _this4.setState({
              orderList: [].concat(_toConsumableArray(list), _toConsumableArray(res.data.data.list))
            });
          }
        }
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this5 = this;

      console.log('mmmm', e);
      this.setState({
        current: e,
        orderStatus: e == 0 ? 0 : e == 1 ? 20 : e == 2 ? 30 : 40,
        orderList: [],
        pageNum: 1
      }, function () {
        return _this5.getList();
      });
    }
  }, {
    key: 'getOrderStatus',
    value: function getOrderStatus(status) {
      switch (status) {
        case 10:
          return '待支付';
        case 20:
          return '待使用';
        case 30:
          return '已使用';
        case 40:
          return '售后中';
        case 50:
          return '已全额退款';
      }
    }
  }, {
    key: 'goPay',
    value: function goPay(item) {
      var _this6 = this;

      console.log('vvvv', item);
      this.setState({
        payOrderInfo: item
      }, function () {
        if (item.payWay == 1) {
          _this6.clickGoPay(1);
        } else {
          _this6.creditCardPay();
        }
      });
    }
  }, {
    key: 'refundClick',
    value: function refundClick(item) {
      console.log('ttt', item);
      _taroWeapp2.default.navigateTo({
        url: "/pagesC/pages/refundStep/index?data=" + encodeURIComponent(JSON.stringify(item))
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {}
  }, {
    key: 'creditCardPay',
    value: function creditCardPay() {
      var _this7 = this;

      this.setState({
        openPayType: false
      });
      _api2.default.post('/pay/getCardList', {}).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          if (res.data.data.length == 0) {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/addCreditCard/index"
            });
          } else {

            _this7.setState({
              isOpenCard: true,
              creditCardList: res.data.data
            });
          }
        }
      });
    }
  }, {
    key: 'closeCard',
    value: function closeCard() {
      this.setState({
        isOpenCard: false
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
    key: 'addNewCard',
    value: function addNewCard() {
      _taroWeapp2.default.navigateTo({
        url: "/pagesC/pages/addCreditCard/index"
      });
    }
  }, {
    key: 'goDetail',
    value: function goDetail(item) {
      _taroWeapp2.default.navigateTo({
        url: "/pagesC/pages/orderDetail/index?id=" + item.id + "&mySale=2"
      });
    }
  }, {
    key: 'clickGoPay',
    value: function clickGoPay(type) {
      var _this8 = this;

      _taroWeapp2.default.showToast({
        title: '正在发起支付~~',
        icon: 'none',
        mask: true
      });
      var _state2 = this.state,
          payOrderInfo = _state2.payOrderInfo,
          creditCardList = _state2.creditCardList;


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

      _api2.default.post('/pay/payment', { payNo: payOrderInfo.payNo }).then(function (res) {
        console.log('ppp', res);
        if (res.data.code == 200) {
          _this8.setState({
            isOpenCard: false
          });
          if (type == 1) {
            _this8.requestPayment(res.data.data, function (res1) {
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
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var payOrderInfo = this.state.payOrderInfo;


      return {
        title: '好友代付',
        path: "/pagesC/pages/otherPay/index?payNo=" + payOrderInfo.payNo,
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: 'deleteCard',
    value: function deleteCard(item, index) {
      var _this9 = this;

      var creditCardList = this.state.creditCardList;

      var newArr = creditCardList;
      _api2.default.post('/pay/delCard', { cardId: item.cardId }).then(function (res) {
        console.log('ppp', res);
        if (res.data.code == 200) {
          newArr.splice(index, 1);
          _taroWeapp2.default.showToast({
            title: '信用卡删除成功！',
            icon: 'none',
            mask: true
          });
          _this9.setState({
            creditCardList: newArr
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
      var _this10 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__816"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__816 = _genCompid2[0],
          $compid__816 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__817"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__817 = _genCompid4[0],
          $compid__817 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__818"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__818 = _genCompid6[0],
          $compid__818 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__819"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__819 = _genCompid8[0],
          $compid__819 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__820"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__820 = _genCompid10[0],
          $compid__820 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__821"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__821 = _genCompid12[0],
          $compid__821 = _genCompid12[1];

      var _state3 = this.__state,
          titleList = _state3.titleList,
          current = _state3.current,
          orderList = _state3.orderList,
          openPayType = _state3.openPayType,
          creditCardList = _state3.creditCardList,
          isOpenCard = _state3.isOpenCard;


      this.anonymousFunc6 = function () {
        return _this10.handleClose();
      };

      this.anonymousFunc7 = function () {
        return _this10.clickGoPay(1);
      };

      var anonymousState__temp3 = __webpack_require__(/*! ./../../../image/xiny.png */ "./src/image/xiny.png");

      this.anonymousFunc8 = function () {
        return _this10.creditCardPay();
      };

      var anonymousState__temp4 = __webpack_require__(/*! ./../../../image/xiny.png */ "./src/image/xiny.png");

      var anonymousState__temp5 = __webpack_require__(/*! ./../../../image/friend.png */ "./src/image/friend.png");

      this.anonymousFunc9 = function () {
        return _this10.closeCard();
      };

      this.anonymousFunc12 = function () {
        return _this10.addNewCard();
      };

      this.anonymousFunc13 = function () {
        return _this10.clickGoPay(2);
      };

      var loopArray350 = titleList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey6 = "ffizz" + index;

        _this10.anonymousFunc5Map[_$indexKey6] = function () {
          return _this10.goLogin();
        };

        var $loopState__temp7 = _taroWeapp2.default.getStorageSync('token') != '';
        var $anonymousCallee__67 = orderList.length > 0 ? orderList.map(function (item2, index2) {
          item2 = {
            $original: (0, _taroWeapp.internal_get_original)(item2)
          };
          var _$indexKey2 = 'ffezz' + index + '-' + index2;

          _this10.anonymousFunc1Map[_$indexKey2] = function () {
            return _this10.goDetail(item2.$original);
          };

          var _$indexKey3 = 'fffzz' + index + '-' + index2;

          _this10.anonymousFunc2Map[_$indexKey3] = function () {
            return _this10.goPay(item2.$original);
          };

          var _$indexKey4 = 'ffgzz' + index + '-' + index2;

          _this10.anonymousFunc3Map[_$indexKey4] = function () {
            return _this10.refundClick(item2.$original);
          };

          var _$indexKey5 = 'ffhzz' + index + '-' + index2;

          _this10.anonymousFunc4Map[_$indexKey5] = function () {
            return _this10.refundClick(item2.$original);
          };

          var $anonymousCallee__66 = orderList.length > 0 ? item2.$original.orderItemList.map(function (item3, index3) {
            item3 = {
              $original: (0, _taroWeapp.internal_get_original)(item3)
            };
            var _$indexKey = 'ffdzz' + index + '-' + index2 + '-' + index3;

            _this10.anonymousFunc0Map[_$indexKey] = function () {
              return _this10.goDetail(item2.$original);
            };

            var $loopState__temp2 = orderList.length > 0 ? _this10.getOrderStatus(item2.$original.orderStatus) : null;
            return {
              _$indexKey: _$indexKey,
              $loopState__temp2: $loopState__temp2,
              $original: item3.$original
            };
          }) : [];
          return {
            _$indexKey2: _$indexKey2,
            _$indexKey3: _$indexKey3,
            _$indexKey4: _$indexKey4,
            _$indexKey5: _$indexKey5,
            $anonymousCallee__66: $anonymousCallee__66,
            $original: item2.$original
          };
        }) : [];

        var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + 'fgbzzzzzzz' + index, true),
            _genCompid14 = _slicedToArray(_genCompid13, 2),
            $prevCompid__815 = _genCompid14[0],
            $compid__815 = _genCompid14[1];

        _taroWeapp.propsManager.set({
          "current": current,
          "index": index
        }, $compid__815, $prevCompid__815);
        return {
          _$indexKey6: _$indexKey6,
          $loopState__temp7: $loopState__temp7,
          $anonymousCallee__67: $anonymousCallee__67,
          $compid__815: $compid__815,
          $original: item.$original
        };
      });
      var loopArray351 = creditCardList.length > 0 ? creditCardList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey7 = "ffjzz" + index;

        _this10.anonymousFunc10Map[_$indexKey7] = function () {
          return _this10.clickChooseCard(index);
        };

        var _$indexKey8 = "fgazz" + index;

        _this10.anonymousFunc11Map[_$indexKey8] = function () {
          return _this10.deleteCard(item.$original, index);
        };

        return {
          _$indexKey7: _$indexKey7,
          _$indexKey8: _$indexKey8,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "current": current,
        "tabList": titleList,
        "onClick": this.handleClick.bind(this)
      }, $compid__816, $prevCompid__816);
      _taroWeapp.propsManager.set({
        "isOpened": openPayType,
        "onClose": this.anonymousFunc6
      }, $compid__817, $prevCompid__817);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__818, $prevCompid__818);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__819, $prevCompid__819);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__820, $prevCompid__820);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenCard
      }, $compid__821, $prevCompid__821);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        loopArray350: loopArray350,
        loopArray351: loopArray351,
        $compid__816: $compid__816,
        $compid__817: $compid__817,
        $compid__818: $compid__818,
        $compid__819: $compid__819,
        $compid__820: $compid__820,
        $compid__821: $compid__821
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
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey5) {
      var _anonymousFunc4Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc4Map[_$indexKey5] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey5].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey6) {
      var _anonymousFunc5Map;

      ;

      for (var _len7 = arguments.length, e = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        e[_key7 - 1] = arguments[_key7];
      }

      return this.anonymousFunc5Map[_$indexKey6] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey6].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
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
    value: function anonymousFunc10(_$indexKey7) {
      var _anonymousFunc10Map;

      ;

      for (var _len8 = arguments.length, e = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        e[_key8 - 1] = arguments[_key8];
      }

      return this.anonymousFunc10Map[_$indexKey7] && (_anonymousFunc10Map = this.anonymousFunc10Map)[_$indexKey7].apply(_anonymousFunc10Map, e);
    }
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(_$indexKey8) {
      var _anonymousFunc11Map;

      ;

      for (var _len9 = arguments.length, e = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        e[_key9 - 1] = arguments[_key9];
      }

      return this.anonymousFunc11Map[_$indexKey8] && (_anonymousFunc11Map = this.anonymousFunc11Map)[_$indexKey8].apply(_anonymousFunc11Map, e);
    }
  }, {
    key: 'anonymousFunc12',
    value: function anonymousFunc12(e) {
      ;
    }
  }, {
    key: 'anonymousFunc13',
    value: function anonymousFunc13(e) {
      ;
    }
  }]);

  return MyOrder;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13"], _class2.$$componentPath = "pagesC/pages/myOrder/index", _temp2)) || _class);
exports.default = MyOrder;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(MyOrder, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/myOrder/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/myOrder/index.jsx":
/*!********************************************!*\
  !*** ./src/pagesC/pages/myOrder/index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myOrder/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/myOrder/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/myOrder/index.less":
/*!*********************************************!*\
  !*** ./src/pagesC/pages/myOrder/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/myOrder/index.jsx","runtime","taro","vendors","common"]]]);