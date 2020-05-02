(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesD/pages/changeAddLeisure/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesD/pages/changeAddLeisure/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChangeAddLeisure = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(ChangeAddLeisure, _BaseComponent);

  function ChangeAddLeisure() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ChangeAddLeisure);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ChangeAddLeisure.__proto__ || Object.getPrototypeOf(ChangeAddLeisure)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray152", "loopArray153", "loopArray154", "$compid__420", "$compid__421", "$compid__422", "$compid__423", "$compid__424", "$compid__425", "$compid__426", "$compid__427", "$compid__428", "$compid__429", "chooseLeisureImgList", "picList", "areaList", "chooseShopImg", "isOpencity", "name", "cityName", "city", "address", "openTimeStart", "openTimeEnd", "projectName", "price", "telephone", "detail", "note", "description", "commonList", "isOpenToast", "toastText", "longitude", "latitude", "id"], _this.config = {
      navigationBarTitleText: '休闲'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc6Map = {}, _this.anonymousFunc7Map = {}, _this.customComponents = ["AtForm", "ChooseImage", "AtIcon", "AtActionSheet", "AtActionSheetItem", "AtTextarea", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChangeAddLeisure, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ChangeAddLeisure.prototype.__proto__ || Object.getPrototypeOf(ChangeAddLeisure.prototype), '_constructor', this).call(this, props);
      this.state = {
        picList: [],
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
        chooseShopImg: {
          files: [],
          showUploadBtn: true,
          upLoadImg: []
        },
        isOpencity: false,
        name: '', /// 店名
        cityName: '休斯顿',
        city: 1, /// 城市名
        address: '', /// 地区名
        openTimeStart: '', /// 开始时间
        openTimeEnd: '', /// 结束时间
        projectName: '', /// 项目名称
        price: '', /// 价格
        telephone: '', /// 联系电话
        detail: '', // 项目详细
        note: '', /// 购买须知
        description: '', /// 其他说明
        commonList: [], /// 服务列表
        isOpenToast: false,
        toastText: '',
        longitude: '',
        latitude: '',
        chooseLeisureImgList: [],
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
      } else {
        if (_taroWeapp2.default.getStorageSync('addLeisureSave') != '') {
          var obj = _taroWeapp2.default.getStorageSync('addLeisureSave');
          this.setState({
            picList: obj.picList,
            name: obj.name,
            city: obj.city,
            address: obj.address,
            openTimeStart: obj.openTimeStart,
            openTimeEnd: obj.openTimeEnd,
            telephone: obj.telephone,
            commonList: obj.commonList,
            chooseShopImg: obj.chooseShopImg,
            cityName: obj.cityName,
            projectName: obj.projectName,
            price: obj.price,
            detail: obj.detail,
            note: obj.note,
            description: obj.description,
            longitude: _taroWeapp2.default.getStorageSync('addLeisureAdress').longitude,
            latitude: _taroWeapp2.default.getStorageSync('addLeisureAdress').latitude,
            chooseLeisureImgList: _taroWeapp2.default.getStorageSync('saveLeisureImgList'),
            id: _taroWeapp2.default.getStorageSync('changeAddLeisureId')
          });

          if (parmars.obj) {
            var data = JSON.parse(decodeURIComponent(parmars.obj));
            var list = [].concat(_toConsumableArray(obj.commonList));
            if (parmars.type == 'change') {
              var i = parseInt(parmars.itemIndex);
              list[i] = data;
              this.setState({
                commonList: list
              });
            } else {
              list.push(data);
              this.setState({
                commonList: list
              });
            }
          }
        }
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

          _this2.setState({
            name: obj.name,
            city: obj.city,
            cityName: cityName,
            address: obj.address,
            latitude: obj.latitude,
            longitude: obj.longitude,
            openTimeStart: obj.openTimeStart,
            openTimeEnd: obj.openTimeEnd,
            price: obj.price,
            projectName: obj.projectName,
            telephone: obj.telephone,
            detail: obj.detail,
            note: obj.note,
            description: obj.description,
            commonList: obj.commonList,
            chooseLeisureImgList: obj.picList
          });
        }
      });
    }

    // 拿到子组件上传图片的路径数组

  }, {
    key: 'getOnFilesValue',
    value: function getOnFilesValue(fails) {
      var newObj = this.state.chooseShopImg;
      newObj.files = fails;
      this.setState({
        chooseShopImg: newObj
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
    key: 'shopNameChange',
    value: function shopNameChange(e) {
      console.log('444555666', e);
      this.setState({
        name: e.detail.value
      });
    }
  }, {
    key: 'areaChange',
    value: function areaChange(e) {
      console.log(e);
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
    key: 'cityHandleClose',
    value: function cityHandleClose() {
      this.setState({
        isOpencity: false
      });
    }
  }, {
    key: 'openMap',
    value: function openMap() {
      var _this3 = this;

      this.setState({
        isOpenToast: true,
        toastText: '正在打开地图！'
      });
      _taroWeapp2.default.authorize({
        scope: 'scope.userLocation',
        success: function success(res) {
          console.log('成功：', res);
          _this3.setState({
            isOpenToast: false,
            toastText: ''
          });
          _this3.onGetLocation(); //获取位置
        },
        fail: function fail(res) {
          console.log('失败：', res);
        }
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
    key: 'areaNameChange',
    value: function areaNameChange(e) {
      console.log('area', e);
      this.setState({
        address: e.detail.value
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
    key: 'timeStartChange',
    value: function timeStartChange(e) {
      console.log('545454', e);
      this.setState({
        openTimeStart: e.detail.value
      });
    }
  }, {
    key: 'timeEndChange',
    value: function timeEndChange(e) {
      this.setState({
        openTimeEnd: e.detail.value
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
    key: 'foodTypeChange',
    value: function foodTypeChange() {}
  }, {
    key: 'saveData',
    value: function saveData() {
      var _state = this.state,
          id = _state.id,
          picList = _state.picList,
          name = _state.name,
          city = _state.city,
          address = _state.address,
          openTimeStart = _state.openTimeStart,
          openTimeEnd = _state.openTimeEnd,
          projectName = _state.projectName,
          price = _state.price,
          telephone = _state.telephone,
          note = _state.note,
          detail = _state.detail,
          description = _state.description,
          commonList = _state.commonList,
          chooseShopImg = _state.chooseShopImg,
          cityName = _state.cityName,
          longitude = _state.longitude,
          latitude = _state.latitude,
          chooseLeisureImgList = _state.chooseLeisureImgList;


      var obj = {
        picList: picList,
        name: name,
        city: city,
        address: address,
        openTimeStart: openTimeStart,
        openTimeEnd: openTimeEnd,
        projectName: projectName,
        price: price,
        telephone: telephone,
        note: note,
        detail: detail,
        description: description,
        commonList: commonList,
        chooseShopImg: chooseShopImg,
        cityName: cityName
      };
      _taroWeapp2.default.setStorageSync('addLeisureSave', obj);
      _taroWeapp2.default.setStorageSync('addLeisureAdress', { longitude: longitude, latitude: latitude });
      _taroWeapp2.default.setStorageSync('saveLeisureImgList', chooseLeisureImgList);
      _taroWeapp2.default.setStorageSync('changeAddLeisureId', id);
    }
  }, {
    key: 'goAddCoupon',
    value: function goAddCoupon() {
      this.saveData();
      _taroWeapp2.default.navigateTo({
        url: '/pagesD/pages/changeAddFuwu/index?type=add'
      });
    }
  }, {
    key: 'deleteItem',
    value: function deleteItem(index) {
      var arr = this.state.commonList;
      arr.splice(index, 1);
      this.setState({
        commonList: arr,
        isOpenToast: true,
        toastText: '删除成功！'
      });
    }
  }, {
    key: 'changeItem',
    value: function changeItem(index) {
      this.saveData();
      var obj = this.state.commonList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesD/pages/changeAddFuwu/index?type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'getReturnImgSrc',
    value: function getReturnImgSrc(img) {
      var list = [].concat(_toConsumableArray(this.state.picList));
      list.push(img);
      this.setState({
        picList: list
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
    key: 'projectNameChange',
    value: function projectNameChange(e) {
      this.setState({
        projectName: e.detail.value
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
    key: 'descriptionChange',
    value: function descriptionChange(e) {
      this.setState({
        description: e
      });
    }
  }, {
    key: 'deleteChooseImg',
    value: function deleteChooseImg(index) {
      var chooseLeisureImgList = this.state.chooseLeisureImgList;

      var newList = [].concat(_toConsumableArray(chooseLeisureImgList));
      newList.splice(index, 1);
      this.setState({
        chooseLeisureImgList: newList
      });
    }
  }, {
    key: 'submitClick',
    value: function submitClick() {
      var _state2 = this.state,
          picList = _state2.picList,
          name = _state2.name,
          city = _state2.city,
          address = _state2.address,
          openTimeStart = _state2.openTimeStart,
          openTimeEnd = _state2.openTimeEnd,
          telephone = _state2.telephone,
          price = _state2.price,
          description = _state2.description,
          detail = _state2.detail,
          note = _state2.note,
          projectName = _state2.projectName,
          commonList = _state2.commonList,
          longitude = _state2.longitude,
          latitude = _state2.latitude,
          chooseLeisureImgList = _state2.chooseLeisureImgList,
          id = _state2.id;


      var obj = {
        id: id,
        categoryId: 2,
        verifyStatus: 0,
        picList: [].concat(_toConsumableArray(chooseLeisureImgList), _toConsumableArray(picList)),
        name: name,
        city: city,
        address: address,
        openTimeStart: openTimeStart,
        openTimeEnd: openTimeEnd,
        telephone: telephone,
        price: price,
        description: description,
        detail: detail,
        note: note,
        projectName: projectName,
        commonList: commonList,
        latitude: latitude,
        longitude: longitude
      };
      console.log('------++++++++++', obj);
      if (name == '') {
        _taroWeapp2.default.showToast({
          title: '请填写店名！',
          icon: 'none',
          mask: true
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
      if (openTimeStart == '') {
        _taroWeapp2.default.showToast({
          title: '请选择开始营业时间！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (openTimeEnd == '') {
        _taroWeapp2.default.showToast({
          title: '请选择结束营业时间！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (projectName == '') {
        _taroWeapp2.default.showToast({
          title: '请填写项目名称！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (price == '') {
        _taroWeapp2.default.showToast({
          title: '请填写价格！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (telephone == '') {
        _taroWeapp2.default.showToast({
          title: '请填写联系电话！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (commonList.length == 0) {
        _taroWeapp2.default.showToast({
          title: '请添加服务！',
          icon: 'none',
          mask: true
        });
        return;
      }

      _api2.default.post('/product/update', obj).then(function (res) {
        if (res.data.code == 200) {
          _taroWeapp2.default.setStorageSync('addLeisureSave', '');
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__420"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__420 = _genCompid2[0],
          $compid__420 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__421"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__421 = _genCompid4[0],
          $compid__421 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__422"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__422 = _genCompid6[0],
          $compid__422 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__423"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__423 = _genCompid8[0],
          $compid__423 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__424"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__424 = _genCompid10[0],
          $compid__424 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__425"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__425 = _genCompid12[0],
          $compid__425 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__426"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__426 = _genCompid14[0],
          $compid__426 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__427"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__427 = _genCompid16[0],
          $compid__427 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__428"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__428 = _genCompid18[0],
          $compid__428 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__429"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__429 = _genCompid20[0],
          $compid__429 = _genCompid20[1];

      var chooseLeisureImgList = this.__state.chooseLeisureImgList;


      this.anonymousFunc1 = function () {
        return _this5.clickCity();
      };

      this.anonymousFunc2 = function () {
        return _this5.cityHandleClose();
      };

      this.anonymousFunc4 = function () {
        return _this5.openMap();
      };

      this.anonymousFunc5 = function () {
        return _this5.goAddCoupon();
      };

      this.anonymousFunc8 = function () {
        return _this5.submitClick();
      };

      var loopArray152 = chooseLeisureImgList.length > 0 ? chooseLeisureImgList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "bjezz" + index;

        _this5.anonymousFunc0Map[_$indexKey] = function () {
          return _this5.deleteChooseImg(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];

      var loopArray153 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "bjfzz" + index;

        _this5.anonymousFunc3Map[_$indexKey2] = function () {
          return _this5.selectCity(item.$original);
        };

        var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + 'bjizzzzzzz' + index, true),
            _genCompid22 = _slicedToArray(_genCompid21, 2),
            $prevCompid__419 = _genCompid22[0],
            $compid__419 = _genCompid22[1];

        _taroWeapp.propsManager.set({
          "onClick": _this5.anonymousFunc3.bind(_this5, _$indexKey2)
        }, $compid__419, $prevCompid__419);
        return {
          _$indexKey2: _$indexKey2,
          $compid__419: $compid__419,
          $original: item.$original
        };
      });

      var loopArray154 = this.__state.commonList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "bjgzz" + index;

        _this5.anonymousFunc6Map[_$indexKey3] = function () {
          return _this5.deleteItem(index);
        };

        var _$indexKey4 = "bjhzz" + index;

        _this5.anonymousFunc7Map[_$indexKey4] = function () {
          return _this5.changeItem(index);
        };

        return {
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.chooseShopImg,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__420, $prevCompid__420);
      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "13",
        "color": "#999"
      }, $compid__421, $prevCompid__421);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpencity,
        "onClose": this.anonymousFunc2
      }, $compid__422, $prevCompid__422);
      _taroWeapp.propsManager.set({
        "value": "map-pin",
        "size": "13",
        "color": "#999"
      }, $compid__423, $prevCompid__423);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.detail,
        "onChange": this.shuomingChange.bind(this)
      }, $compid__424, $prevCompid__424);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.note,
        "onChange": this.noteChange.bind(this)
      }, $compid__425, $prevCompid__425);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.description,
        "onChange": this.descriptionChange.bind(this)
      }, $compid__426, $prevCompid__426);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "12",
        "color": "#999"
      }, $compid__427, $prevCompid__427);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc8
      }, $compid__428, $prevCompid__428);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpenToast,
        "text": this.__state.toastText
      }, $compid__429, $prevCompid__429);
      Object.assign(this.__state, {
        loopArray152: loopArray152,
        loopArray153: loopArray153,
        loopArray154: loopArray154,
        $compid__420: $compid__420,
        $compid__421: $compid__421,
        $compid__422: $compid__422,
        $compid__423: $compid__423,
        $compid__424: $compid__424,
        $compid__425: $compid__425,
        $compid__426: $compid__426,
        $compid__427: $compid__427,
        $compid__428: $compid__428,
        $compid__429: $compid__429
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
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(_$indexKey3) {
      var _anonymousFunc6Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc6Map[_$indexKey3] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey3].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(_$indexKey4) {
      var _anonymousFunc7Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc7Map[_$indexKey4] && (_anonymousFunc7Map = this.anonymousFunc7Map)[_$indexKey4].apply(_anonymousFunc7Map, e);
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }]);

  return ChangeAddLeisure;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "shopNameChange", "anonymousFunc1", "anonymousFunc4", "areaNameChange", "timeStartChange", "timeEndChange", "projectNameChange", "priceChange", "phoneChange", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7"], _class2.$$componentPath = "pagesD/pages/changeAddLeisure/index", _temp2)) || _class);
exports.default = ChangeAddLeisure;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(ChangeAddLeisure, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesD/pages/changeAddLeisure/index.wxml";

/***/ }),

/***/ "./src/pagesD/pages/changeAddLeisure/index.jsx":
/*!*****************************************************!*\
  !*** ./src/pagesD/pages/changeAddLeisure/index.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddLeisure/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesD/pages/changeAddLeisure/index.less":
/*!******************************************************!*\
  !*** ./src/pagesD/pages/changeAddLeisure/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesD/pages/changeAddLeisure/index.jsx","runtime","taro","vendors","common"]]]);