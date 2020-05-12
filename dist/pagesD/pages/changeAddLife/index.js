(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesD/pages/changeAddLife/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesD/pages/changeAddLife/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeAddLife = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ChangeAddLife, _BaseComponent);

  function ChangeAddLife() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ChangeAddLife);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ChangeAddLife.__proto__ || Object.getPrototypeOf(ChangeAddLife)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray142", "loopArray143", "loopArray144", "$compid__388", "$compid__389", "$compid__390", "$compid__391", "$compid__392", "$compid__393", "$compid__394", "$compid__395", "lifeImgList", "typeChoose", "imgList", "picList", "name", "isOpencity", "cityName", "city", "address", "detail", "note", "weixinno", "telephone", "email", "isOpen", "toast", "longitude", "latitude", "areaList", "typeList", "id"], _this.config = {
      navigationBarTitleText: '生活'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc5Map = {}, _this.customComponents = ["AtForm", "ChooseImage", "AtIcon", "AtActionSheet", "AtActionSheetItem", "AtTextarea", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChangeAddLife, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ChangeAddLife.prototype.__proto__ || Object.getPrototypeOf(ChangeAddLife.prototype), '_constructor', this).call(this, props);
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
        detail: '',
        note: '',
        weixinno: '',
        telephone: '',
        email: '',
        isOpen: false,
        toast: '',
        typeChoose: 0,
        longitude: '',
        latitude: '',
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
          title: '生活服务'
        }, {
          title: '医疗保健'
        }, {
          title: '教育'
        }, {
          title: '旅游'
        }, {
          title: '求职招聘'
        }, {
          title: '地产'
        }, {
          title: '法律'
        }, {
          title: '零售'
        }, {
          title: '金融保险'
        }, {
          title: '社交'
        }, {
          title: '交通'
        }, {
          title: '其他'
        }],
        lifeImgList: [],
        id: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parmars = this.$router.params;
      if (parmars.id) {
        this.getChangeData(parmars.id);
        this.setState({
          id: parmars.id
        });
      }
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
    key: 'getChangeData',
    value: function getChangeData(id) {
      var _this2 = this;

      _api2.default.post('/product/toUpdate', { id: id }).then(function (res) {
        console.log('mmm', res);
        if (res.data.code == 200) {
          var obj = res.data.data;
          var cityName = '';
          switch (obj.city) {
            case 1:
              cityName = '休斯顿';
              break;
            case 2:
              cityName = '达拉斯';
              break;
            case 3:
              cityName = '奥斯丁';
              break;
            case 4:
              cityName = '西雅图';
              break;
          }

          var typeIndex = 0;
          var chooseType = obj.productType.split(',');
          var typeCopy = [].concat(_toConsumableArray(_this2.state.typeList));
          typeCopy.forEach(function (item, index1) {

            chooseType.forEach(function (item2, index2) {
              if (item.title == item2) {
                typeIndex = index1;
              }
            });
          });

          _this2.setState({
            name: obj.name,
            city: obj.city,
            cityName: cityName,
            address: obj.address,
            latitude: obj.latitude,
            longitude: obj.longitude,

            telephone: obj.telephone,
            email: obj.email,
            weixinno: obj.weixinno,
            typeChoose: typeIndex,

            detail: obj.detail,
            note: obj.note,
            lifeImgList: obj.picList
          });
        }
      });
    }

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
      var _this3 = this;

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
    key: 'typeClick',
    value: function typeClick(index) {
      this.setState({
        typeChoose: index
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
    key: 'deleteChooseImg',
    value: function deleteChooseImg(index) {
      var lifeImgList = this.state.lifeImgList;

      var newList = [].concat(_toConsumableArray(lifeImgList));
      newList.splice(index, 1);
      this.setState({
        lifeImgList: newList
      });
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      var _state = this.state,
          id = _state.id,
          picList = _state.picList,
          name = _state.name,
          city = _state.city,
          address = _state.address,
          telephone = _state.telephone,
          email = _state.email,
          weixinno = _state.weixinno,
          detail = _state.detail,
          note = _state.note,
          typeList = _state.typeList,
          typeChoose = _state.typeChoose,
          longitude = _state.longitude,
          latitude = _state.latitude,
          lifeImgList = _state.lifeImgList;

      if (picList.length == 0 && lifeImgList.length == 0) {
        this.setState({
          toast: '请选择展示图片',
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
      if (name == '') {
        this.setState({
          toast: '请填写名称',
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
        id: id,
        categoryId: 3,
        verifyStatus: 0,
        picList: [].concat(_toConsumableArray(lifeImgList), _toConsumableArray(picList)),
        name: name,
        city: city,
        address: address,
        telephone: telephone,
        email: email,
        weixinno: weixinno,
        detail: detail,
        note: note,
        productTypeList: [typeList[typeChoose].title],
        longitude: longitude,
        latitude: latitude
      };

      _api2.default.post('/product/update', obj).then(function (res) {
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
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__388"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__388 = _genCompid2[0],
          $compid__388 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__389"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__389 = _genCompid4[0],
          $compid__389 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__390"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__390 = _genCompid6[0],
          $compid__390 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__391"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__391 = _genCompid8[0],
          $compid__391 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__392"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__392 = _genCompid10[0],
          $compid__392 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__393"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__393 = _genCompid12[0],
          $compid__393 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__394"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__394 = _genCompid14[0],
          $compid__394 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__395"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__395 = _genCompid16[0],
          $compid__395 = _genCompid16[1];

      var _state2 = this.__state,
          typeChoose = _state2.typeChoose,
          lifeImgList = _state2.lifeImgList;


      this.anonymousFunc1 = function () {
        return _this5.clickCity();
      };

      this.anonymousFunc2 = function () {
        return _this5.cityHandleClose();
      };

      this.anonymousFunc4 = function () {
        return _this5.openMap();
      };

      this.anonymousFunc6 = function () {
        return _this5.submitForm();
      };

      var loopArray142 = lifeImgList.length > 0 ? lifeImgList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bijzz" + index;

        _this5.anonymousFunc0Map[_$indexKey] = function () {
          return _this5.deleteChooseImg(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];

      var loopArray143 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "bjazz" + index;

        _this5.anonymousFunc3Map[_$indexKey2] = function () {
          return _this5.selectCity(item.$original);
        };

        var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + 'bjczzzzzzz' + index, true),
            _genCompid18 = _slicedToArray(_genCompid17, 2),
            $prevCompid__387 = _genCompid18[0],
            $compid__387 = _genCompid18[1];

        _taroWeapp.propsManager.set({
          "onClick": _this5.anonymousFunc3.bind(_this5, _$indexKey2)
        }, $compid__387, $prevCompid__387);
        return {
          _$indexKey2: _$indexKey2,
          $compid__387: $compid__387,
          $original: item.$original
        };
      });

      var loopArray144 = this.__state.typeList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "bjbzz" + index;

        _this5.anonymousFunc5Map[_$indexKey3] = function () {
          return _this5.typeClick(index);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.imgList,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__388, $prevCompid__388);
      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "13",
        "color": "#999"
      }, $compid__389, $prevCompid__389);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpencity,
        "onClose": this.anonymousFunc2
      }, $compid__390, $prevCompid__390);
      _taroWeapp.propsManager.set({
        "value": "map-pin",
        "size": "13",
        "color": "#999"
      }, $compid__391, $prevCompid__391);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.detail,
        "onChange": this.shuomingChange.bind(this)
      }, $compid__392, $prevCompid__392);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.note,
        "onChange": this.noteChange.bind(this)
      }, $compid__393, $prevCompid__393);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc6
      }, $compid__394, $prevCompid__394);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpen,
        "text": this.__state.toast
      }, $compid__395, $prevCompid__395);
      Object.assign(this.__state, {
        loopArray142: loopArray142,
        loopArray143: loopArray143,
        loopArray144: loopArray144,
        $compid__388: $compid__388,
        $compid__389: $compid__389,
        $compid__390: $compid__390,
        $compid__391: $compid__391,
        $compid__392: $compid__392,
        $compid__393: $compid__393,
        $compid__394: $compid__394,
        $compid__395: $compid__395
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
    value: function anonymousFunc4(e) {
      ;
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
    value: function anonymousFunc6(e) {
      ;
    }
  }]);

  return ChangeAddLife;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "nameChange", "anonymousFunc1", "anonymousFunc4", "areaNameChange", "phoneChange", "weixinnoChange", "emailChange", "anonymousFunc5"], _class2.$$componentPath = "pagesD/pages/changeAddLife/index", _temp2)) || _class);
exports.default = ChangeAddLife;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(ChangeAddLife, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesD/pages/changeAddLife/index.wxml";

/***/ }),

/***/ "./src/pagesD/pages/changeAddLife/index.jsx":
/*!**************************************************!*\
  !*** ./src/pagesD/pages/changeAddLife/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLife/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesD/pages/changeAddLife/index.less":
/*!***************************************************!*\
  !*** ./src/pagesD/pages/changeAddLife/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesD/pages/changeAddLife/index.jsx","runtime","taro","vendors","common"]]]);