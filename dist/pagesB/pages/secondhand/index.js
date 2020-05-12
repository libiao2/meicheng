(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesB/pages/secondhand/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE& ***!
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

__webpack_require__(/*! ./index.less */ "./src/pagesB/pages/secondhand/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var secondhand = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(secondhand, _BaseComponent);

  function secondhand() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, secondhand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = secondhand.__proto__ || Object.getPrototypeOf(secondhand)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray125", "loopArray126", "$compid__336", "$compid__337", "$compid__338", "$compid__339", "$compid__340", "$compid__341", "$compid__342", "$compid__343", "typeChoose", "imgList", "picList", "name", "isOpencity", "cityName", "city", "address", "price", "detail", "note", "weixinno", "telephone", "email", "isOpen", "toast", "areaList", "typeList", "longitude", "latitude"], _this.config = {
      navigationBarTitleText: '二手'
    }, _this.anonymousFunc2Map = {}, _this.anonymousFunc4Map = {}, _this.customComponents = ["AtForm", "ChooseImage", "AtIcon", "AtActionSheet", "AtActionSheetItem", "AtTextarea", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(secondhand, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(secondhand.prototype.__proto__ || Object.getPrototypeOf(secondhand.prototype), '_constructor', this).call(this, props);
      this.state = {
        imgList: {
          files: [],
          showUploadBtn: true,
          upLoadImg: []
        },
        picList: [],
        name: '',
        isOpencity: false,
        cityName: '休斯顿',
        city: 1, /// 城市名
        address: '',
        price: '',
        detail: '',
        note: '',
        weixinno: '',
        telephone: '',
        email: '',
        isOpen: false,
        toast: '',
        areaList: [{
          name: '休斯顿',
          value: 1
        }, {
          name: '达拉斯',
          value: 2
        }, {
          name: '奥斯丁',
          value: 3
        }, {
          name: '西雅图',
          value: 4
        }],
        typeList: [{
          title: '全部'
        }, {
          title: '汽车'
        }, {
          title: '其他'
        }],
        typeChoose: 0,
        longitude: '',
        latitude: ''
      };
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
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}

    // 拿到子组件上传图片的路径数组

  }, {
    key: 'getOnFilesValue',
    value: function getOnFilesValue(fails) {
      var newObj = this.state.imgList;
      newObj.files = fails;
      this.setState({
        imgList: newObj
      });
    }
  }, {
    key: 'deleteImgSrc',
    value: function deleteImgSrc(index) {
      console.log('VVVVVVVVV', index);
      var newList = this.state.picList;
      newList.splice(newList[index], 1); // 删除已上传的图片地址
      this.setState({
        picList: newList
      });
    }
  }, {
    key: 'getReturnImgSrc',
    value: function getReturnImgSrc(img) {
      console.log('6565656565', img, this.state.picList);
      var list = [].concat(_toConsumableArray(this.state.picList));
      list.push(img);
      this.setState({
        picList: list
      });
    }
  }, {
    key: 'nameChange',
    value: function nameChange(e) {
      this.setState({
        name: e.detail.value
      });
    }
  }, {
    key: 'clickCity',
    value: function clickCity() {
      this.setState({
        isOpencity: true
      });
    }
  }, {
    key: 'selectCity',
    value: function selectCity(e) {
      this.setState({
        cityName: e.name,
        city: e.value,
        isOpencity: false
      });
    }
  }, {
    key: 'areaNameChange',
    value: function areaNameChange(e) {
      console.log('area', e);
      this.setState({
        address: e.detail.value
      });
    }
  }, {
    key: 'openMap',
    value: function openMap() {
      var _this2 = this;

      this.setState({
        isOpen: true,
        toast: '正在打开地图！'
      });
      _taroWeapp2.default.authorize({
        scope: 'scope.userLocation',
        success: function success(res) {
          console.log('成功：', res);
          _this2.setState({
            isOpen: false,
            toast: ''
          });
          _this2.onGetLocation(); //获取位置
        },
        fail: function fail(res) {
          console.log('失败：', res);
        }
      });
    }
  }, {
    key: 'onGetLocation',
    value: function onGetLocation() {
      var _this3 = this;

      _taroWeapp2.default.getLocation({
        success: function success(res) {
          console.log('成功：', res);
          _taroWeapp2.default.chooseLocation({
            success: function success(val) {
              console.log('--------', val);
              _this3.setState({
                address: val.address,
                longitude: val.longitude,
                latitude: val.latitude
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
    key: 'cityHandleClose',
    value: function cityHandleClose() {
      this.setState({
        isOpencity: false
      });
    }
  }, {
    key: 'priceChange',
    value: function priceChange(e) {
      var reg = /^0\.\d+$|^[1-9]+(\.\d+)?$/;
      if (!reg.test(e.detail.value)) {
        if (e.detail.value != '') {
          if (e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
            this.setState({
              price: e.detail.value
            });
          } else {
            this.setState({
              price: ''
            });
            _taroWeapp2.default.showToast({
              title: '价格填写有误！！',
              icon: 'none',
              mask: true
            });
          }
        }
      } else {
        this.setState({
          price: e.detail.value
        });
      }
    }
  }, {
    key: 'shuomingChange',
    value: function shuomingChange(e) {
      this.setState({
        detail: e
      });
    }
  }, {
    key: 'noteChange',
    value: function noteChange(e) {
      this.setState({
        note: e
      });
    }
  }, {
    key: 'phoneChange',
    value: function phoneChange(e) {
      this.setState({
        telephone: e.detail.value
      });
    }
  }, {
    key: 'weixinnoChange',
    value: function weixinnoChange(e) {
      this.setState({
        weixinno: e.detail.value
      });
    }
  }, {
    key: 'emailChange',
    value: function emailChange(e) {
      this.setState({
        email: e.detail.value
      });
    }
  }, {
    key: 'emailBlur',
    value: function emailBlur(e) {
      var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!reg.test(e.detail.value)) {
        _taroWeapp2.default.showToast({
          title: '请输入正确邮箱',
          icon: 'none',
          mask: true
        });
        this.setState({
          email: ''
        });
        return;
      }
    }
  }, {
    key: 'weixinBlur',
    value: function weixinBlur(e) {
      var reg = /^[a-zA-Z\d_]{5,}$/;
      if (!reg.test(e.detail.value)) {
        _taroWeapp2.default.showToast({
          title: '请输入正确微信号',
          icon: 'none',
          mask: true
        });
        this.setState({
          weixinno: ''
        });
        return;
      }
    }
  }, {
    key: 'phoneBlur',
    value: function phoneBlur(e) {
      console.log('.....', e.detail.value);
      var reg = /\D/g;
      if (reg.test(parseFloat(e.detail.value))) {
        _taroWeapp2.default.showToast({
          title: '请输入正确手机号',
          icon: 'none',
          mask: true
        });
        this.setState({
          telephone: ''
        });
        return;
      } else {
        if (e.detail.value.length > 11 || e.detail.value.length < 10) {
          _taroWeapp2.default.showToast({
            title: '请输入正确手机号',
            icon: 'none',
            mask: true
          });
          this.setState({
            telephone: ''
          });
          return;
        }
      }
    }
  }, {
    key: 'typeClick',
    value: function typeClick(index) {
      this.setState({
        typeChoose: index
      });
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      var _state = this.state,
          picList = _state.picList,
          name = _state.name,
          city = _state.city,
          address = _state.address,
          price = _state.price,
          telephone = _state.telephone,
          email = _state.email,
          weixinno = _state.weixinno,
          detail = _state.detail,
          note = _state.note,
          typeList = _state.typeList,
          typeChoose = _state.typeChoose,
          longitude = _state.longitude,
          latitude = _state.latitude;

      if (picList.length == 0) {
        this.setState({
          toast: '请选择展示图片',
          isOpen: true
        });
        return;
      }
      if (name == '') {
        this.setState({
          toast: '请填写二手名称',
          isOpen: true
        });
        return;
      }
      if (address == '') {
        _taroWeapp2.default.showToast({
          title: '请选择具体地址！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (price == '') {
        this.setState({
          toast: '请填写价格',
          isOpen: true
        });
        return;
      }
      if (email == '' && telephone == '' && weixinno == '') {
        this.setState({
          toast: '请填写联系方式',
          isOpen: true
        });
        return;
      }
      var obj = {
        categoryId: 4,
        verifyStatus: 0,
        picList: picList,
        name: name,
        city: city,
        address: address,
        price: price,
        telephone: telephone,
        email: email,
        weixinno: weixinno,
        detail: detail,
        note: note,
        productTypeList: [typeList[typeChoose].title],
        longitude: longitude,
        latitude: latitude
      };

      _api2.default.post('/product/create', obj).then(function (res) {
        if (res.data.code == 200) {
          _taroWeapp2.default.switchTab({
            url: '/pages/index/index'
          });
        } else {
          _taroWeapp2.default.showToast({
            title: '发布失败！',
            icon: 'none',
            mask: true
          });
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__336"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__336 = _genCompid2[0],
          $compid__336 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__337"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__337 = _genCompid4[0],
          $compid__337 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__338"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__338 = _genCompid6[0],
          $compid__338 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__339"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__339 = _genCompid8[0],
          $compid__339 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__340"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__340 = _genCompid10[0],
          $compid__340 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__341"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__341 = _genCompid12[0],
          $compid__341 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__342"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__342 = _genCompid14[0],
          $compid__342 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__343"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__343 = _genCompid16[0],
          $compid__343 = _genCompid16[1];

      var typeChoose = this.__state.typeChoose;


      this.anonymousFunc0 = function () {
        return _this4.clickCity();
      };

      this.anonymousFunc1 = function () {
        return _this4.cityHandleClose();
      };

      this.anonymousFunc3 = function () {
        return _this4.openMap();
      };

      this.anonymousFunc5 = function () {
        return _this4.submitForm();
      };

      var loopArray125 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bgczz" + index;

        _this4.anonymousFunc2Map[_$indexKey] = function () {
          return _this4.selectCity(item.$original);
        };

        var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + 'bgezzzzzzz' + index, true),
            _genCompid18 = _slicedToArray(_genCompid17, 2),
            $prevCompid__335 = _genCompid18[0],
            $compid__335 = _genCompid18[1];

        _taroWeapp.propsManager.set({
          "onClick": _this4.anonymousFunc2.bind(_this4, _$indexKey)
        }, $compid__335, $prevCompid__335);
        return {
          _$indexKey: _$indexKey,
          $compid__335: $compid__335,
          $original: item.$original
        };
      });

      var loopArray126 = this.__state.typeList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "bgdzz" + index;

        _this4.anonymousFunc4Map[_$indexKey2] = function () {
          return _this4.typeClick(index);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.imgList,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__336, $prevCompid__336);
      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "13",
        "color": "#999"
      }, $compid__337, $prevCompid__337);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpencity,
        "onClose": this.anonymousFunc1
      }, $compid__338, $prevCompid__338);
      _taroWeapp.propsManager.set({
        "value": "map-pin",
        "size": "13",
        "color": "#999"
      }, $compid__339, $prevCompid__339);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.detail,
        "onChange": this.shuomingChange.bind(this)
      }, $compid__340, $prevCompid__340);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.note,
        "onChange": this.noteChange.bind(this)
      }, $compid__341, $prevCompid__341);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc5
      }, $compid__342, $prevCompid__342);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpen,
        "text": this.__state.toast
      }, $compid__343, $prevCompid__343);
      Object.assign(this.__state, {
        loopArray125: loopArray125,
        loopArray126: loopArray126,
        $compid__336: $compid__336,
        $compid__337: $compid__337,
        $compid__338: $compid__338,
        $compid__339: $compid__339,
        $compid__340: $compid__340,
        $compid__341: $compid__341,
        $compid__342: $compid__342,
        $compid__343: $compid__343
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
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return secondhand;
}(_taroWeapp.Component), _class2.$$events = ["nameChange", "anonymousFunc0", "areaNameChange", "anonymousFunc3", "priceChange", "phoneBlur", "phoneChange", "weixinBlur", "weixinnoChange", "emailBlur", "emailChange", "anonymousFunc4"], _class2.$$componentPath = "pagesB/pages/secondhand/index", _temp2)) || _class);
exports.default = secondhand;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(secondhand, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesB/pages/secondhand/index.wxml";

/***/ }),

/***/ "./src/pagesB/pages/secondhand/index.jsx":
/*!***********************************************!*\
  !*** ./src/pagesB/pages/secondhand/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/secondhand/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesB/pages/secondhand/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesB/pages/secondhand/index.less":
/*!************************************************!*\
  !*** ./src/pagesB/pages/secondhand/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesB/pages/secondhand/index.jsx","runtime","taro","vendors","common"]]]);