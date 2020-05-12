(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/car/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/car/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/car/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************/
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

var _counter = __webpack_require__(/*! ../../actions/counter */ "./src/actions/counter.js");

__webpack_require__(/*! ./index.less */ "./src/pages/car/index.less");

var _api = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(Car, _BaseComponent);

  function Car() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Car);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Car.__proto__ || Object.getPrototypeOf(Car)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "loopArray335", "$compid__776", "$compid__777", "dataList", "checkAll", "buyCount", "payMoney", "isOpenToast", "toastText"], _this.state = {
      checkAll: false,
      dataList: [],
      payMoney: 0,
      buyCount: 0,
      isOpenToast: false,
      toastText: ''
    }, _this.config = {
      navigationBarTitleText: '购物车'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.customComponents = ["AtIcon", "AtSwipeAction", "AtInputNumber", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Car, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Car.prototype.__proto__ || Object.getPrototypeOf(Car.prototype), '_constructor', this).call(this, props);

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
    value: function componentDidShow() {
      if (_taroWeapp2.default.getStorageSync('userInfo') != '') {
        this.getData();
        this.getCarCount();
      }
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
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
    key: 'countChange',
    value: function countChange(index1, index2, id, e) {
      var _this2 = this;

      var dataList = this.state.dataList;

      var list = JSON.parse(JSON.stringify(dataList));
      var obj = {
        id: id,
        quantity: e
      };
      _api2.default.post('/cart/updateQuantity', obj).then(function (res) {
        if (res.data.code == 200) {
          list[index1].cartItemList[index2].quantity = e;
          _this2.setState({
            dataList: [].concat(_toConsumableArray(list)),
            isOpenToast: true,
            toastText: '成功修改数量！'
          });
        }
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this3 = this;

      _api2.default.post('/cart/list', {}).then(function (res) {
        console.log('cccc', res);
        if (res.data.code == 200) {
          var list = res.data.data;
          for (var i = 0; i < list.length; i += 1) {
            list[i].checked = false;
            for (var a = 1; a < list[i].cartItemList.length; a += 1) {
              list[i].cartItemList[a].checked = false;
            }
          }
          _this3.setState({
            dataList: [].concat(_toConsumableArray(list))
          });
        }
      });
    }
  }, {
    key: 'checkShopChange',
    value: function checkShopChange(index) {
      var dataList = this.state.dataList;

      var list = [].concat(_toConsumableArray(dataList));
      list[index].checked = !list[index].checked;
      if (list[index].checked) {
        list[index].cartItemList.forEach(function (item) {
          item.checked = true;
        });
      } else {
        list[index].cartItemList.forEach(function (item) {
          item.checked = false;
        });
      }
      var allMoney = 0;
      var chooseCount = 0;
      list.forEach(function (item) {
        item.cartItemList.forEach(function (val) {
          if (val.checked) {
            allMoney += val.price * val.quantity;
            chooseCount += 1;
          }
        });
      });

      this.setState({
        dataList: list,
        payMoney: allMoney,
        buyCount: chooseCount
      });
    }
  }, {
    key: 'checkboxChange',
    value: function checkboxChange(index1, index2) {
      var dataList = this.state.dataList;

      var list = JSON.parse(JSON.stringify(dataList));
      list[index1].cartItemList[index2].checked = !list[index1].cartItemList[index2].checked;

      var allMoney = 0;
      var chooseCount = 0;
      list.forEach(function (item) {
        item.cartItemList.forEach(function (val) {
          if (val.checked) {
            allMoney += val.price * val.quantity;
            chooseCount += 1;
          }
        });
      });
      this.setState({
        dataList: [].concat(_toConsumableArray(list)),
        payMoney: allMoney,
        buyCount: chooseCount
      });
    }
  }, {
    key: 'checkAllChange',
    value: function checkAllChange() {
      var _state = this.state,
          checkAll = _state.checkAll,
          dataList = _state.dataList;

      var isTrue = checkAll;
      var list = JSON.parse(JSON.stringify(dataList));
      isTrue = !isTrue;
      if (isTrue) {
        for (var i = 0; i < list.length; i += 1) {
          list[i].checked = true;
          for (var a = 0; a < list[i].cartItemList.length; a += 1) {
            list[i].cartItemList[a].checked = true;
          }
        }
      } else {
        for (var _i = 0; _i < list.length; _i += 1) {
          list[_i].checked = false;
          for (var _a = 0; _a < list[_i].cartItemList.length; _a += 1) {
            list[_i].cartItemList[_a].checked = false;
          }
        }
      }
      var allMoney = 0;
      var chooseCount = 0;
      list.forEach(function (item) {
        item.cartItemList.forEach(function (val) {
          if (val.checked) {
            allMoney += val.price * val.quantity;
            chooseCount += 1;
          }
        });
      });
      this.setState({
        checkAll: isTrue,
        dataList: [].concat(_toConsumableArray(list)),
        payMoney: allMoney,
        buyCount: chooseCount
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(index1, index2) {
      var _this4 = this;

      console.log('22222', index1, index2);
      var dataList = this.state.dataList;

      var obj = {
        ids: [dataList[index1].cartItemList[index2].id]
      };
      var list = JSON.parse(JSON.stringify(dataList));
      _api2.default.post('/cart/delete', obj).then(function (res) {
        console.log('cccc', res);
        if (res.data.code == 200) {
          list[index1].cartItemList.splice(index2, 1);

          var allMoney = 0;
          var chooseCount = 0;
          list.forEach(function (item, index) {
            if (item.cartItemList.length == 0) {
              list.splice(index, 1);
            }
            item.cartItemList.forEach(function (val) {
              if (val.checked) {
                allMoney += val.price * val.quantity;
                chooseCount += 1;
              }
            });
          });
          _this4.setState({
            dataList: [].concat(_toConsumableArray(list)),
            payMoney: allMoney,
            buyCount: chooseCount
          });
          _taroWeapp2.default.showToast({
            title: '删除成功！',
            icon: 'none',
            mask: true
          });
          _this4.getCarCount();
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
    key: 'goPay',
    value: function goPay() {
      var _state2 = this.state,
          buyCount = _state2.buyCount,
          dataList = _state2.dataList;

      if (buyCount == 0) {
        _taroWeapp2.default.showToast({
          title: '请选择要买的商品！',
          icon: 'none',
          mask: true
        });
      } else {
        var myList = [];
        var list = JSON.parse(JSON.stringify(dataList));
        list.forEach(function (item, index1) {
          item.cartItemList.forEach(function (item2, index2) {
            if (item2.checked) {
              myList.push({
                productItemId: item2.productItemId,
                quantity: item2.quantity,
                cartItemId: item2.id
              });
            }
          });
        });

        var obj = {
          orderItemList: myList
        };
        _api2.default.post('/order/confirmOrder', obj).then(function (res) {
          console.log(',,,', res.data.data);
          if (res.data.code == 200) {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/confirmOrder/index?data=" + encodeURIComponent(JSON.stringify(res.data.data)) + "&isPing=1"
            });
          }
        });
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__776"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__776 = _genCompid2[0],
          $compid__776 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__777"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__777 = _genCompid4[0],
          $compid__777 = _genCompid4[1];

      var _state3 = this.__state,
          dataList = _state3.dataList,
          checkAll = _state3.checkAll,
          payMoney = _state3.payMoney,
          buyCount = _state3.buyCount,
          isOpenToast = _state3.isOpenToast,
          toastText = _state3.toastText;


      this.anonymousFunc3 = function () {
        return _this5.checkAllChange();
      };

      var anonymousState__temp3 = payMoney.toFixed(2);
      var anonymousState__temp4 = payMoney.toFixed(2);

      this.anonymousFunc4 = function () {
        return _this5.goPay();
      };

      this.anonymousFunc5 = function () {
        return _this5.goLogin();
      };

      var anonymousState__temp5 = _taroWeapp2.default.getStorageSync('token') != '';
      var loopArray335 = dataList.map(function (item, index1) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "ejhzz" + index1;

        _this5.anonymousFunc0Map[_$indexKey] = function () {
          return _this5.checkShopChange(index1);
        };

        var $anonymousCallee__55 = item.$original.cartItemList.map(function (item2, index2) {
          item2 = {
            $original: (0, _taroWeapp.internal_get_original)(item2)
          };
          var _$indexKey2 = 'ejizz' + index1 + '-' + index2;

          _this5.anonymousFunc1Map[_$indexKey2] = function () {
            return _this5.handleClick(index1, index2);
          };

          var $loopState__temp2 = [{
            text: '删除',
            style: {
              backgroundColor: '#FF4949'
            }
          }];
          var _$indexKey3 = 'ejjzz' + index1 + '-' + index2;

          _this5.anonymousFunc2Map[_$indexKey3] = function () {
            return _this5.checkboxChange(index1, index2);
          };

          var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + 'faazzzzzzz' + index1 + "-" + index2, true),
              _genCompid6 = _slicedToArray(_genCompid5, 2),
              $prevCompid__772 = _genCompid6[0],
              $compid__772 = _genCompid6[1];

          _taroWeapp.propsManager.set({
            "onClick": _this5.anonymousFunc1.bind(_this5, _$indexKey2),
            "options": $loopState__temp2
          }, $compid__772, $prevCompid__772);

          var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + 'fabzzzzzzz' + index1 + "-" + index2, true),
              _genCompid8 = _slicedToArray(_genCompid7, 2),
              $prevCompid__773 = _genCompid8[0],
              $compid__773 = _genCompid8[1];

          item2.$original.checked && _taroWeapp.propsManager.set({
            "value": "check",
            "size": "14",
            "color": "rgb(36, 200, 178)"
          }, $compid__773, $prevCompid__773);

          var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + 'faczzzzzzz' + index1 + "-" + index2, true),
              _genCompid10 = _slicedToArray(_genCompid9, 2),
              $prevCompid__774 = _genCompid10[0],
              $compid__774 = _genCompid10[1];

          _taroWeapp.propsManager.set({
            "min": 1,
            "step": 1,
            "value": item2.$original.quantity,
            "onChange": _this5.countChange.bind(_this5, index1, index2, item2.$original.id)
          }, $compid__774, $prevCompid__774);
          return {
            _$indexKey2: _$indexKey2,
            $loopState__temp2: $loopState__temp2,
            _$indexKey3: _$indexKey3,
            $compid__772: $compid__772,
            $compid__773: $compid__773,
            $compid__774: $compid__774,
            $original: item2.$original
          };
        });

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + 'fadzzzzzzz' + index1, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__775 = _genCompid12[0],
            $compid__775 = _genCompid12[1];

        item.$original.checked && _taroWeapp.propsManager.set({
          "value": "check",
          "size": "14",
          "color": "rgb(36, 200, 178)"
        }, $compid__775, $prevCompid__775);
        return {
          _$indexKey: _$indexKey,
          $anonymousCallee__55: $anonymousCallee__55,
          $compid__775: $compid__775,
          $original: item.$original
        };
      });
      checkAll && _taroWeapp.propsManager.set({
        "value": "check",
        "size": "14",
        "color": "rgb(36, 200, 178)"
      }, $compid__776, $prevCompid__776);
      _taroWeapp.propsManager.set({
        "isOpened": isOpenToast,
        "text": toastText
      }, $compid__777, $prevCompid__777);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        loopArray335: loopArray335,
        $compid__776: $compid__776,
        $compid__777: $compid__777
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
  }]);

  return Car;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class2.$$componentPath = "pages/car/index", _temp2)) || _class);
exports.default = Car;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Car, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/car/index.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/car/index.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/car/index.wxml";

/***/ }),

/***/ "./src/pages/car/index.jsx":
/*!*********************************!*\
  !*** ./src/pages/car/index.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/car/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/car/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/car/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************!*\
  !*** ./src/pages/car/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/car/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/car/index.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/car/index.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/car/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/car/index.less":
/*!**********************************!*\
  !*** ./src/pages/car/index.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/car/index.jsx","runtime","taro","vendors","common"]]]);