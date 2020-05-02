(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/confirmOrder/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/confirmOrder/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmOrder = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ConfirmOrder, _BaseComponent);

  function ConfirmOrder() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ConfirmOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ConfirmOrder.__proto__ || Object.getPrototypeOf(ConfirmOrder)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "dataInfo", "loopArray150", "loopArray151", "$compid__413", "$compid__414", "$compid__415", "$compid__416", "$compid__417", "$compid__418", "takeaway", "telephone", "remark", "creditCardList", "address", "openPayType", "isOpenCard", "orderType", "pingTuanId", "groupNo", "isShareFriend"], _this.state = {
      dataInfo: {},
      takeaway: false,
      openPayType: false,
      isOpenCard: false,
      creditCardList: [],
      address: '',
      remark: '',
      telephone: '',
      orderType: 1, // 1 普通订单  2 拼团订单
      pingTuanId: '', /// 拼团id，支付成功需要用
      groupNo: null,
      isShareFriend: false
    }, _this.config = {
      navigationBarTitleText: '确认下单'
    }, _this.anonymousFunc9Map = {}, _this.customComponents = ["AtInputNumber", "AtActionSheet", "AtActionSheetItem", "AtIcon", "AtModal", "AtModalContent"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ConfirmOrder, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ConfirmOrder.prototype.__proto__ || Object.getPrototypeOf(ConfirmOrder.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parmars = this.$router.params;
      var data = JSON.parse(decodeURIComponent(parmars.data));
      var type = parmars.isPing;

      var pingId = '';
      var num = null;
      if (type == 2) {
        pingId = parmars.goodsId;
      }
      if (parmars.groupNo) {
        num = parmars.groupNo;
      }
      console.log('00000', data);
      this.setState({
        dataInfo: data,
        orderType: type,
        pingTuanId: pingId,
        groupNo: num
      });
    }
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
    key: 'connectMe',
    value: function connectMe() {
      _taroWeapp2.default.navigateTo({
        url: '/pagesC/pages/myConnect/index'
      });
    }
  }, {
    key: 'countChange',
    value: function countChange(index1, index2, e) {
      var dataInfo = this.state.dataInfo;

      var myData = JSON.parse(JSON.stringify(dataInfo));
      myData.orderItemMap[index1].orderItems[index2].quantity = e;
      var allMoney = 0;
      myData.orderItemMap.forEach(function (item, index) {
        item.orderItems.forEach(function (item2, index2) {
          allMoney += item2.quantity * item2.price;
        });
      });
      myData.totalFee = allMoney;
      myData.payFeeUSD = allMoney;
      this.setState({
        dataInfo: JSON.parse(JSON.stringify(myData))
      });
    }
  }, {
    key: 'chooseWai',
    value: function chooseWai(e) {
      this.setState({
        takeaway: e
      });
    }
  }, {
    key: 'choosePayType',
    value: function choosePayType() {
      this.setState({
        openPayType: true
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        openPayType: false
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
    key: 'creditCardPay',
    value: function creditCardPay() {
      var _this2 = this;

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

            _this2.setState({
              isOpenCard: true,
              creditCardList: res.data.data
            });
          }
        }
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
    key: 'openMap',
    value: function openMap() {
      var _this3 = this;

      _taroWeapp2.default.showToast({
        title: '正在打开地图！',
        icon: 'none',
        mask: true
      });
      _taroWeapp2.default.authorize({
        scope: 'scope.userLocation',
        success: function success(res) {
          console.log('成功：', res);
          _this3.onGetLocation(); //获取位置
        },
        fail: function fail(res) {
          console.log('失败：', res);
        }
      });
    }
  }, {
    key: 'onGetLocation',
    value: function onGetLocation() {
      var _this4 = this;

      _taroWeapp2.default.getLocation({
        success: function success(res) {
          console.log('成功：', res);
          _taroWeapp2.default.chooseLocation({
            success: function success(val) {
              console.log('--------', val);
              _this4.setState({
                address: val.address
                // longitude: val.longitude,
                // latitude: val.latitude,
              });
            }
          });
        },
        fail: function fail(res) {
          console.log('失败：', res);
        }
      });
    }
  }, {
    key: 'remarkChange',
    value: function remarkChange(e) {
      this.setState({
        remark: e.detail.value
      });
    }
  }, {
    key: 'telephoneChange',
    value: function telephoneChange(e) {
      this.setState({
        telephone: e.detail.value
      });
    }
  }, {
    key: 'clickGoPay',
    value: function clickGoPay(type) {
      var _this5 = this;

      _taroWeapp2.default.showToast({
        title: '正在发起支付~~',
        icon: 'none',
        mask: true
      });
      var _state = this.state,
          creditCardList = _state.creditCardList,
          takeaway = _state.takeaway,
          address = _state.address,
          telephone = _state.telephone,
          remark = _state.remark,
          dataInfo = _state.dataInfo,
          orderType = _state.orderType,
          pingTuanId = _state.pingTuanId,
          groupNo = _state.groupNo;


      var chooseIdIndex = 0;
      creditCardList.forEach(function (item, index) {
        if (item.defaultSource) {
          chooseIdIndex = index;
        }
      });

      var myChooseGoods = dataInfo.orderItemMap;
      var goodsList = [];
      myChooseGoods.forEach(function (item, index) {
        item.orderItems.forEach(function (item2, index2) {
          goodsList.push({
            productItemId: item2.productItemId,
            quantity: item2.quantity,
            cartItemId: item2.cartItemId
          });
        });
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

      var obj = {
        takeaway: takeaway,
        address: address,
        telephone: telephone,
        remark: remark,
        payWay: type,
        orderType: parseFloat(orderType),
        orderItemList: goodsList,
        groupNo: groupNo
      };

      _api2.default.post('/order/createOrder', obj).then(function (res) {
        console.log('ppp', res);
        if (res.data.code == 200) {
          _this5.setState({
            isOpenCard: false
          });
          if (type == 1) {
            _this5.requestPayment(res.data.data, function (res1) {
              console.log('??????', res1);
              if (res1.errMsg == "requestPayment:ok") {
                _taroWeapp2.default.navigateTo({
                  url: "/pagesC/pages/payEnd/index?orderType=" + orderType + "&pingId=" + pingTuanId
                });
              }
              if (res1.errMsg == "requestPayment:fail cancel") {
                console.log('支付失败！！！！');
              }
            });
          } else {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/payEnd/index?orderType=" + orderType + "&pingId=" + pingTuanId
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
      var otherPayNo = this.state.otherPayNo;

      this.setState({
        isShareFriend: false
      });

      return {
        title: '好友代付',
        path: "/pagesC/pages/otherPay/index?payNo=" + otherPayNo,
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: 'openFriendPay',
    value: function openFriendPay() {
      var _this6 = this;

      var _state2 = this.state,
          creditCardList = _state2.creditCardList,
          takeaway = _state2.takeaway,
          address = _state2.address,
          telephone = _state2.telephone,
          remark = _state2.remark,
          dataInfo = _state2.dataInfo,
          orderType = _state2.orderType,
          pingTuanId = _state2.pingTuanId,
          groupNo = _state2.groupNo;


      var chooseIdIndex = 0;
      creditCardList.forEach(function (item, index) {
        if (item.defaultSource) {
          chooseIdIndex = index;
        }
      });

      var myChooseGoods = dataInfo.orderItemMap;
      var goodsList = [];
      myChooseGoods.forEach(function (item, index) {
        item.orderItems.forEach(function (item2, index2) {
          goodsList.push({
            productItemId: item2.productItemId,
            quantity: item2.quantity,
            cartItemId: item2.cartItemId
          });
        });
      });

      var obj = {
        takeaway: takeaway,
        address: address,
        telephone: telephone,
        remark: remark,
        payWay: 3,
        orderType: parseFloat(orderType),
        orderItemList: goodsList,
        groupNo: groupNo
      };
      _api2.default.post('/order/createOrder', obj).then(function (res) {
        console.log('ppp', res);
        if (res.data.code == 200) {
          _this6.setState({
            isOpenCard: false,
            openPayType: false,
            isShareFriend: true,
            otherPayNo: res.data.data.payNo
          });
        }
      });
      // this.setState({
      //   openPayType: false,
      //   isShareFriend: true
      // })
    }
  }, {
    key: 'cancelFriendPay',
    value: function cancelFriendPay() {
      this.setState({
        isShareFriend: false
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__413"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__413 = _genCompid2[0],
          $compid__413 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__414"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__414 = _genCompid4[0],
          $compid__414 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__415"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__415 = _genCompid6[0],
          $compid__415 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__416"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__416 = _genCompid8[0],
          $compid__416 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__417"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__417 = _genCompid10[0],
          $compid__417 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__418"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__418 = _genCompid12[0],
          $compid__418 = _genCompid12[1];

      var _state3 = this.__state,
          dataInfo = _state3.dataInfo,
          takeaway = _state3.takeaway,
          openPayType = _state3.openPayType,
          isOpenCard = _state3.isOpenCard,
          creditCardList = _state3.creditCardList,
          remark = _state3.remark,
          telephone = _state3.telephone,
          isShareFriend = _state3.isShareFriend,
          address = _state3.address;


      this.anonymousFunc0 = function () {
        return _this7.chooseWai(true);
      };

      this.anonymousFunc1 = function () {
        return _this7.chooseWai(false);
      };

      this.anonymousFunc2 = function () {
        return _this7.openMap();
      };

      this.anonymousFunc3 = function () {
        return _this7.choosePayType();
      };

      this.anonymousFunc4 = function () {
        return _this7.handleClose();
      };

      this.anonymousFunc5 = function () {
        return _this7.clickGoPay(1);
      };

      var anonymousState__temp = __webpack_require__(/*! ./../../../image/xiny.png */ "./src/image/xiny.png");

      this.anonymousFunc6 = function () {
        return _this7.creditCardPay();
      };

      var anonymousState__temp2 = __webpack_require__(/*! ./../../../image/xiny.png */ "./src/image/xiny.png");

      this.anonymousFunc7 = function () {
        return _this7.openFriendPay();
      };

      var anonymousState__temp3 = __webpack_require__(/*! ./../../../image/friend.png */ "./src/image/friend.png");

      this.anonymousFunc8 = function () {
        return _this7.closeCard();
      };

      this.anonymousFunc10 = function () {
        return _this7.addNewCard();
      };

      this.anonymousFunc11 = function () {
        return _this7.clickGoPay(2);
      };

      this.anonymousFunc12 = function () {
        return _this7.cancelFriendPay();
      };

      var loopArray150 = dataInfo.orderItemMap && dataInfo.orderItemMap.length > 0 ? dataInfo.orderItemMap.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__23 = dataInfo.orderItemMap && dataInfo.orderItemMap.length > 0 ? item.$original.orderItems.map(function (item2, index2) {
          item2 = {
            $original: (0, _taroWeapp.internal_get_original)(item2)
          };

          var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + 'bjdzzzzzzz' + index + "-" + index2, true),
              _genCompid14 = _slicedToArray(_genCompid13, 2),
              $prevCompid__412 = _genCompid14[0],
              $compid__412 = _genCompid14[1];

          _taroWeapp.propsManager.set({
            "min": 1,
            "step": 1,
            "value": item2.$original.quantity,
            "onChange": _this7.countChange.bind(_this7, index, index2)
          }, $compid__412, $prevCompid__412);
          return {
            $compid__412: $compid__412,
            $original: item2.$original
          };
        }) : [];
        return {
          $anonymousCallee__23: $anonymousCallee__23,
          $original: item.$original
        };
      }) : [];
      var loopArray151 = creditCardList.length > 0 ? creditCardList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bjczz" + index;

        _this7.anonymousFunc9Map[_$indexKey] = function () {
          return _this7.clickChooseCard(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      _taroWeapp.propsManager.set({
        "isOpened": openPayType,
        "onClose": this.anonymousFunc4
      }, $compid__413, $prevCompid__413);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__414, $prevCompid__414);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__415, $prevCompid__415);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "20",
        "color": "#999"
      }, $compid__416, $prevCompid__416);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenCard
      }, $compid__417, $prevCompid__417);
      _taroWeapp.propsManager.set({
        "isOpened": isShareFriend
      }, $compid__418, $prevCompid__418);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray150: loopArray150,
        loopArray151: loopArray151,
        $compid__413: $compid__413,
        $compid__414: $compid__414,
        $compid__415: $compid__415,
        $compid__416: $compid__416,
        $compid__417: $compid__417,
        $compid__418: $compid__418
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
    value: function anonymousFunc9(_$indexKey) {
      var _anonymousFunc9Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc9Map[_$indexKey] && (_anonymousFunc9Map = this.anonymousFunc9Map)[_$indexKey].apply(_anonymousFunc9Map, e);
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
  }, {
    key: 'anonymousFunc12',
    value: function anonymousFunc12(e) {
      ;
    }
  }]);

  return ConfirmOrder;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "telephoneChange", "anonymousFunc2", "remarkChange", "anonymousFunc3", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"], _class2.$$componentPath = "pagesC/pages/confirmOrder/index", _temp2)) || _class);
exports.default = ConfirmOrder;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(ConfirmOrder, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/confirmOrder/index.wxml";

/***/ }),

/***/ "./src/pagesC/pages/confirmOrder/index.jsx":
/*!*************************************************!*\
  !*** ./src/pagesC/pages/confirmOrder/index.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/confirmOrder/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/confirmOrder/index.less":
/*!**************************************************!*\
  !*** ./src/pagesC/pages/confirmOrder/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/confirmOrder/index.jsx","runtime","taro","vendors","common"]]]);