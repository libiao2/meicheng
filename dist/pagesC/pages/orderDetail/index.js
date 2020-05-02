(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesC/pages/orderDetail/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.0.6@@tarojs/redux/index.js");

__webpack_require__(/*! ./index.less */ "./src/pagesC/pages/orderDetail/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderDetail = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(OrderDetail, _BaseComponent);

  function OrderDetail() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OrderDetail.__proto__ || Object.getPrototypeOf(OrderDetail)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "orderDetail", "goodsType", "id"], _this.state = {
      orderDetail: {},
      id: '',
      goodsType: '' /// 买的还是卖的
    }, _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderDetail, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(OrderDetail.prototype.__proto__ || Object.getPrototypeOf(OrderDetail.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var id = this.$router.params.id;
      var goodsType = this.$router.params.mySale;
      console.log('MMMMMMMMMMM', id);
      this.getInfo(id);
      this.setState({
        id: id,
        goodsType: goodsType
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
    key: 'getInfo',
    value: function getInfo(id) {
      var _this2 = this;

      _api2.default.post('/order/orderDetail', { id: id }).then(function (res) {
        console.log('gggggg', res);
        if (res.data.code == 200) {
          _this2.setState({
            orderDetail: res.data.data
          });
        }
      });
    }
  }, {
    key: 'goRefund',
    value: function goRefund() {
      var orderDetail = this.state.orderDetail;

      _taroWeapp2.default.navigateTo({
        url: "/pagesC/pages/orderRefund/index?data=" + encodeURIComponent(JSON.stringify(orderDetail))
      });
    }
  }, {
    key: 'callShop',
    value: function callShop() {
      var orderDetail = this.state.orderDetail;

      _taroWeapp2.default.makePhoneCall({
        phoneNumber: orderDetail.telephoneMall,
        success: function success() {
          console.log("拨打电话成功！");
        },
        fail: function fail() {
          console.log("拨打电话失败！");
        }
      });
    }
  }, {
    key: 'seeImg',
    value: function seeImg() {
      var orderDetail = this.state.orderDetail;

      _taroWeapp2.default.previewImage({
        current: orderDetail.qrcode, // 当前显示图片的http链接
        urls: [orderDetail.qrcode] // 需要预览的图片http链接列表
      });
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

      var _state = this.__state,
          orderDetail = _state.orderDetail,
          goodsType = _state.goodsType;


      this.anonymousFunc0 = function () {
        return _this3.seeImg();
      };

      var anonymousState__temp = __webpack_require__(/*! ./../../../image/quanIcon.png */ "./src/image/quanIcon.png");

      this.anonymousFunc1 = function () {
        return _this3.goRefund();
      };

      var anonymousState__temp2 = __webpack_require__(/*! ./../../../image/buyCar.png */ "./src/image/buyCar.png");

      this.anonymousFunc2 = function () {
        return _this3.callShop();
      };

      var anonymousState__temp3 = __webpack_require__(/*! ./../../../image/phone.png */ "./src/image/phone.png");

      var anonymousState__temp4 = __webpack_require__(/*! ./../../../image/dingwei.png */ "./src/image/dingwei.png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4
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
  }]);

  return OrderDetail;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class2.$$componentPath = "pagesC/pages/orderDetail/index", _temp2)) || _class);
exports.default = OrderDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(OrderDetail, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesC/pages/orderDetail/index.wxml";

/***/ }),

/***/ "./src/image/phone.png":
/*!*****************************!*\
  !*** ./src/image/phone.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/image/quanIcon.png":
/*!********************************!*\
  !*** ./src/image/quanIcon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAPvElEQVR4Xu2d33XcthLGQaqA61Rw5QquV1w9x67AcgWxK7BdQZwK4lQQpYLIFcR+9lIbVxC7gmu/e4l7RgfMZdZaLmYADADx2zcdEcDgG/yIv8Q0Bj8oAAUOKtBAGygABQ4rAEDQOqDAjAIABM0DCgAQtAEoIFMAPYhMN6RaiAIAZCGORjVlCgAQmW5ItRAFAMhCHI1qyhQAIDLdkGohCgCQhTga1ZQpAEBkuiHVQhQAIAtxNKopUwCAyHRDqoUoAEAW4mhUU6YAAJHphlQLUQCALMTRqKZMAQAi0w2pFqIAAFmIo1FNmQIARKYbUi1EAQCyEEejmjIFAIhMN6RaiAIAZCGORjVlCgAQmW5ItRAFAMhCHI1qyhQAIDLdkGohCgCQhTga1ZQpAEBkuiHVQhQAIAtxNKopUwCAyHRDqoUoAEAW4mhUU6YAAJHphlQLUQCALMTRqKZMAQAi0w2pFqIAAFmIo1FNmQIARKYbUi1EAQCyEEejmjIFAIhMN6RaiAIqgFxfX3+/ED1RTUUFzs7O3qUuLjog2+323m63e9w0zUNjzIUx5l7qSiD/RSvw2RhzZa19e3Jy8ma1WtHf0X5RAdlsNj80TfPKGHMazUJkBAX8FfhorX21Xq9/808y/2QUQFyv8UfTNA9iGYZ8oIBUAWvtnycnJ49i9CbBgGy32wfDMPyOXkPqTqRLpMDHtm2frFarP0PyDwKEeo5hGP7CPCPEBUibUIHPbdveD+lJxIBgWJXQrcg6mgKhwy0xIH3f02T8x2g1QUZQIJ0CP3VdR+2V/RMBgqEVW2ckyKuAeKglAqTv+9fGmOeH6tw0zW/W2o95NZkt/akx5t9H7PupYPth2p4CTdOcWmt/mBHmZdd11G5ZPxEgm81mO7ekOwzDo/Pz87csSxQf7vuebJvd3e+6TqSNYjVQ1ESB9+/fP2zb9o9DotBcZL1er7iisRvBdrs9dStXB8sCIFw34PlQBY4BQvm7FS3WyIYNiI8hACTU3UjPVSBVu2QD0vf9C2PMz3MVACBc9+L5UAV8ADHGsOchEkCOLu8CkFB3Iz1XAU9A2Mu9AOSAJzBJ5zbRvM8DkIj6YxUropiFZAVAIjoCgEQUs5CsAEhERwCQiGIWkhUAiegIABJRzEKyAiARHQFAIopZSFYAJKIjAEhEMQvJCoAU4giYUaYCAKRMv8CqQhQAIIU4AmaUqQAAKdMvsKoQBQBIIY6AGWUqAEDK9AusKkQBAFKII2BGmQoAkDL9AqsKUQCAFOIImFGmAgCkTL/AqkIUACCFOCK1GXQpBpWxWq1YlwvEsGt6BKdpmrdN09DdtlHDCcSw87Y8qgLEGHPZtu3LWsRN5TROvu4yPvrWn2KqGGvts/V6fcXJI+RZdwn5di8PguOt86U6sJz61AYIOZiuoH8Wers2R6Qan3XXKNGFZ3SZ3TSuivg2QK4OLq4LXap2KNjRL13X0WUdxf58LhMxxpTxTfqeiq+6rivqlkJ6W1pr/zXn7dThvSaRuA42TLqh8uzsjMBJ9uv7nvL/1aOAZ13XXXo8p/qI63nJ/pue98ivSEDI5qKGXCUcd+/7nsJG+ETiStYw3bCKbiP0CpPXtu13JQ2bN5vNRdM0BIeX/aX2IDdQh15Df+zVwPl/IYAcvf50UqfokEjCV0huJuT4hfNs3/c0X+MO+4rtQca6R4n6wxHytmcLAeToBXx7tkeDRAKHMaaIeQhzSLXv/uIBIYNp8rnKsYw5qlUCIM7RtDI0OxdKAUnf9xQyz2fMPhb/rus6ilqc9UdDwt1u92tALMwqAMk+3CoBEGppbg5AQy1vSEJvrWRMyv+GoYShFXe+dIDkOgDJPScpBRDSwXP9fupv8fKvMPARu1HF7mYiwUFmsevCvnrUiXxhraUVhMeBYlx1XfckMA928pIAIeM91/Cn9RTNBwRh8z60bfsw58qV2yeiDUzflapv2gMtlw/DcCXZeGUDMi3dGU/r6CGxCtk3brOJ2EtQGiBk3mazuWK+cGjp/BffjVifuC57Mn1p2/ZBzrmicDFhrMYXY8zrtm1fhwAeBMhoCYm/2+1eMx08HePSpD0onjUHmhIBcT0zaXAsNNx+Vb1Wt45FBbtFP698Obpzn+37nvY42Bul1to3JycnT0PAGG2NAsiYmRtP024r18kfu667zxVQ+nyJgEgn7U6D2cbMbWjUwNbrNWeVS+qKg+kEw07K64u19qlkKHXIkKiAOCff2+12l4LeRG2oVSogIZBYa5/c1jC4cBhjSpl30EkDzo/svog9JIwOyFgjwRtAvDrDUZGeLRkQZ5/v+ahp1b/phQXzDhO6jMz1xW3PC/ZpkkGdDBDh25C9DCdxSOmASCHZPyslWLXKviEoWPZOBgf5ISkgAkhUepEaACHtrq+vL4/E/v7H+4HOuzVNM35DQsuirLNKhfQevoc4qe6f3Epbso+6kgMigCT56kktgLiehI7DP5f0lJw0JUzM3elcOgbj9XNHlpKufqoAQrX1rbw04LuXou6hmgCZaEfBU//DqSfj2ex7Hq6e3ntBGt/KqAyxpk7yaZj0fOo3g48dJQbxFIzPfRlJ3msfM4S5oKAGtFoP4oZap8Mw+CzfJZ2s1wqIG3LRCWDuPtNc+xQdWznW4Ln/Z656Jm0fU9tVAXEO9vlQKOlqSuWAxJyTfOi67gG3Mad4nnHUhnqP0xi75D71UAfEdy6ScohTMyARh1nv2ral4xhF3FbS9/1/PQ8kqvZ46oD4DhNSzkNqBsT3BXPs7VjCku5o44Erh26tQsp2cVuBWQDxXN9XO3pyrDGl/r/7iIm+sRYf6U5tY8plYMb8Q31ImAUQz6/a1CZiqRvXXP6eL4ucJo5l0ybuoxSnrhk7/qrDK/Vl3lFpz3H0IgDxGe6VQIez4XPXdd/FtocBiHqbyNKD+Kx5a20ExXY2N7/KADEpFk98V7ByzJuyAOIm6vZIY0q61MttyKmeByB+p6ud/uobmgAkVcv3zBeAsADBEGtsVylXTTzbrspjAMT/e/wcbSJLD+K5lq/+tlAhYq8QAHLTg9BBTK+LP7TvB84CSN/3PscllgIIaSE97vG9J9Qf6EZLz2cPPmatfR3ze++xIA4gxhjVeUguQHw+ilnMRqG04bqbUOgDqVlQcqz+cOrE2Cg0FPnq7OzsESf/kGfVAfE9VpDySIHPsCbFcmaIow6l9Xn7lg6Ib5sYNdCsjzogvjvHKRvo0gA5dONJCmClefZ9T0NArzuKNXsRVUAYd8Mm3QNZGiBu/kH3lYnnIW3bvklxzGQEynezcAKgylxEFRDGWDPpBH2BgEhf7PvpkjVKRtsYbVK5bFAbEJ/J+aI+uaXx99evX++dn5/Th2Tsn88chJ3p4QTJGqUbXdA3IZxfMmBHI9QA8TzBS3YlP9JcUg/iYwunxaR+NuXc0Hd+OqljMmBVAXFvB7rCPmvQysm6+9HPflM2hGkjBiD/V8PzlLfasI8KUulBGDeLq3xv7NMoAcjtfVFqXXx8s2dZ0ssGkwPCvDw56eQcPUj4ACw1INw9kZu3fMLNw2SACKKRqvQeJKjPWyp1Q+DAGt6so+WQfH7o/ONzFGm/Updd1z2LVlOXURJAXECd35nRSNWOlpQEiGBiGrsN+OZHLzAKx5b0qk8yRhgBmJJGhyQ6IJvN5nnTNHQ6k3MBwaeu63wm8L7OnH2uJEAkkW6FItwEl7HWijYLpcvQQlslwU3Hoig03ctY92ZFA4RWIE5OTn601rLjaac8d3Wbg0oCxL0x6cZJiujEean8XbWmaU49boFXv/BACsdk+CmJkzKGGX8Wo7cLBmS73T621r6QgOGEUBtaccb9WnOQ0EZE6T2XR1UWQGLUZ5pH4BCUgnhSoFPx5XgiQAgK98YTv/VIhBxfiJU2SY/RoO4yIKRPICQ3c5O2ba9Wq9Ubrt5sQCIebUgaGWhOiNKGWFyn7T9/1wGJBAllw+5FcwGSDQ70IKE45ksfoSepAhC12A6HXIkeJF8jDy1ZcOp3WmTxgFBMOQrVm3wtHUOsbxRgN47QxpwqvVsap0+NuXFS2BpoDrGyDqumzkIPkqrp6uVLm4m73e6yaZrHjFLLBISuEW2a5kWszRuGILc+CkBCFSwnvfuMgo6m+HyuWyQgbKNSyz9+pDRXjvbOcUidl7CKNaePO5pCpzeORQNmt8WUQywaUlEEo6zzjZCGV0vapQMy+snjJHAZgJQ2pKqloYfY6XErCLtxhNiTK23f93OXorM1SNKDaN5blMsRpZXr3p50c8mhWOrqR3pyaARAcqiOMqtRAIBU4yoYmkMBAJJDdZRZjQIApBpXwdAcCgCQHKqjzGoUACDVuAqG5lAAgORQHWVWowAAqcZVMDSHAgAkh+oosxoFAEg1roKhORQAIBFUv2vH3SNIcmeyACARXAlAIohYaBYAJIJjAEgEEQvNAoBEcAwAiSBioVkAkAiOASARRCw0CwASwTEAJIKIhWYBQCI4BoBEELHQLABIBMcAkAgiFppFCYC8MMb8PKdP6Z/cApBCW3cEs44Awv7smP1Nus8NGgAkgqeRhUiBOUAk7ZINCIVXG4bhL/QgIv8hUWIF5gBp2/Y+N1YIGxCqX9/3dNfVodszjITUxLr9I3sMsTTV1i1rBhBRAFIpIHSL3Y8zVafrZ8RRfRQkpdBex2IiUh3xq0+BQ35jzz+o6iJAAqKQ1ic3LL4LCohDjIsAccOsY73IXRAWdbgbCrBvVByrLQbE9SJv5+Yid0Nb1KJyBYLCbogBIdEw1Kq86dx988VDq+AeZMwgINrP3XcPaphTgSjRzIJ6kAkk94ZhwHArZ3NA2VMFgoZV04yiADJm6KL90OSdGzsO7oUCMRT4ZIx51XUdbTNE+UUFZLRos9lcULBOa+2FZ2isKJVBJotU4EvTNFfDMFyt12sK7Bn1lwSQfQvp/FZUq5EZFDDGaITJUwEE3oQCtSoAQGr1HOxWUQCAqMiMQmpVAIDU6jnYraIAAFGRGYXUqgAAqdVzsFtFAQCiIjMKqVUBAFKr52C3igIAREVmFFKrAgCkVs/BbhUFAIiKzCikVgUASK2eg90qCgAQFZlRSK0KAJBaPQe7VRQAICoyo5BaFQAgtXoOdqsoAEBUZEYhtSoAQGr1HOxWUQCAqMiMQmpVAIDU6jnYraIAAFGRGYXUqgAAqdVzsFtFAQCiIjMKqVUBAFKr52C3igIAREVmFFKrAgCkVs/BbhUFAIiKzCikVgUASK2eg90qCgAQFZlRSK0KAJBaPQe7VRQAICoyo5BaFQAgtXoOdqsoAEBUZEYhtSoAQGr1HOxWUQCAqMiMQmpVAIDU6jnYraIAAFGRGYXUqgAAqdVzsFtFgf8BQqdOUJBVVMoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pagesC/pages/orderDetail/index.jsx":
/*!************************************************!*\
  !*** ./src/pagesC/pages/orderDetail/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/orderDetail/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesC/pages/orderDetail/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesC/pages/orderDetail/index.less":
/*!*************************************************!*\
  !*** ./src/pagesC/pages/orderDetail/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesC/pages/orderDetail/index.jsx","runtime","taro","vendors","common"]]]);