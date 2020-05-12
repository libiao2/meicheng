(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesA/pages/addFood/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE& ***!
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

__webpack_require__(/*! ./index.less */ "./src/pagesA/pages/addFood/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddFood = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(AddFood, _BaseComponent);

  function AddFood() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddFood);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddFood.__proto__ || Object.getPrototypeOf(AddFood)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray155", "loopArray156", "loopArray157", "loopArray158", "loopArray159", "loopArray160", "$compid__435", "$compid__436", "$compid__437", "$compid__438", "$compid__439", "$compid__440", "$compid__441", "$compid__442", "$compid__443", "serveList", "picList", "areaList", "foodType", "chooseShopImg", "isOpencity", "name", "cityName", "city", "address", "openTimeStart", "openTimeEnd", "telephone", "takeaway", "takeawayFee", "chooseFoodList", "groupList", "hotList", "commonList", "isOpenToast", "toastText", "longitude", "latitude"], _this.config = {
      navigationBarTitleText: '美城美食365'
    }, _this.anonymousFunc2Map = {}, _this.anonymousFunc6Map = {}, _this.anonymousFunc8Map = {}, _this.anonymousFunc9Map = {}, _this.anonymousFunc11Map = {}, _this.anonymousFunc12Map = {}, _this.anonymousFunc13Map = {}, _this.anonymousFunc15Map = {}, _this.anonymousFunc16Map = {}, _this.customComponents = ["AtForm", "ChooseImage", "AtIcon", "AtActionSheet", "AtActionSheetItem", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddFood, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AddFood.prototype.__proto__ || Object.getPrototypeOf(AddFood.prototype), '_constructor', this).call(this, props);
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
        foodType: [{
          value: 'chuan',
          label: '川菜',
          isChoose: false
        }, {
          value: 'huo',
          label: '火锅',
          isChoose: false
        }, {
          value: 'xiang',
          label: '湘菜',
          isChoose: false
        }, {
          value: 'ri',
          label: '日本料理',
          isChoose: false
        }, {
          value: 'han',
          label: '韩国料理',
          isChoose: false
        }, {
          value: 'nai',
          label: '奶茶',
          isChoose: false
        }, {
          value: 'kao',
          label: '烤鱼',
          isChoose: false
        }, {
          value: 'chuanchuan',
          label: '串串',
          isChoose: false
        }, {
          value: 'wanghong',
          label: '网红潮店',
          isChoose: false
        }, {
          value: 'yangrou',
          label: '羊肉火锅',
          isChoose: false
        }],
        serveList: [{
          value: 'mian',
          label: '免费停车',
          isChoose: false
        }, {
          value: 'wai',
          label: '外卖',
          isChoose: false
        }, {
          value: 'bao',
          label: '包间',
          isChoose: false
        }, {
          value: 'ke',
          label: '可刷卡',
          isChoose: false
        }, {
          value: 'dian',
          label: '电视',
          isChoose: false
        }, {
          value: 'chong',
          label: '充电宝',
          isChoose: false
        }, {
          value: 'ying',
          label: '婴儿车',
          isChoose: false
        }, {
          value: 'ke',
          label: '可退款',
          isChoose: false
        }, {
          value: 'sha',
          label: '沙发位',
          isChoose: false
        }, {
          value: 'kawei',
          label: '卡座',
          isChoose: false
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
        telephone: '', /// 联系电话
        takeaway: true, /// 是否外卖
        takeawayFee: '', /// 外卖配送费
        chooseFoodList: [], /// 食物类型
        groupList: [], /// 团购列表
        hotList: [], /// 推荐菜
        commonList: [],
        isOpenToast: false,
        toastText: '',
        longitude: '',
        latitude: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parmars = this.$router.params;

      if (_taroWeapp2.default.getStorageSync('addFoodInfo') != '') {
        var obj = JSON.parse(_taroWeapp2.default.getStorageSync('addFoodInfo'));
        console.log('5555%%%%%', _taroWeapp2.default.getStorageSync('chooseShopImg'));
        this.setState({
          picList: obj.picList,
          foodType: obj.foodType,
          serveList: obj.serveList,
          name: obj.name,
          city: obj.city,
          address: obj.address,
          openTimeStart: obj.openTimeStart,
          openTimeEnd: obj.openTimeEnd,
          telephone: obj.telephone,
          takeaway: obj.takeaway,
          takeawayFee: obj.takeawayFee,
          groupList: obj.groupList,
          hotList: obj.hotList,
          chooseShopImg: _taroWeapp2.default.getStorageSync('chooseShopImg'),
          commonList: _taroWeapp2.default.getStorageSync('commonList'),
          cityName: _taroWeapp2.default.getStorageSync('cityName'),
          longitude: _taroWeapp2.default.getStorageSync('addressInfo').longitude,
          latitude: _taroWeapp2.default.getStorageSync('addressInfo').latitude
        });

        if (parmars.addCouponObj) {
          var data = JSON.parse(decodeURIComponent(parmars.addCouponObj));
          var list = [].concat(_toConsumableArray(obj.groupList));
          if (parmars.type == 'change') {
            var i = parseInt(parmars.itemIndex);
            list[i] = data;
            this.setState({
              groupList: list
            });
          } else {
            list.push(data);
            this.setState({
              groupList: list
            });
          }
        }

        if (parmars.addHotFoodObj) {
          var _data = JSON.parse(decodeURIComponent(parmars.addHotFoodObj));
          var _list = [].concat(_toConsumableArray(obj.hotList));
          if (parmars.type == 'change') {
            var _i = parseInt(parmars.itemIndex);
            _list[_i] = _data;
            this.setState({
              hotList: _list
            });
          } else {
            _list.push(_data);
            this.setState({
              hotList: _list
            });
          }
        }

        if (parmars.addFoodObj) {
          var _data2 = JSON.parse(decodeURIComponent(parmars.addFoodObj));
          var _list2 = [].concat(_toConsumableArray(_taroWeapp2.default.getStorageSync('commonList')));
          if (parmars.type == 'change') {
            var _i2 = parseInt(parmars.itemIndex);
            _list2[_i2] = _data2;
            this.setState({
              commonList: _list2
            });
          } else {
            _list2.push(_data2);
            this.setState({
              commonList: _list2
            });
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
      var _this2 = this;

      this.setState({
        isOpenToast: true,
        toastText: '正在打开地图！'
      });
      _taroWeapp2.default.authorize({
        scope: 'scope.userLocation',
        success: function success(res) {
          console.log('成功：', res);
          _this2.setState({
            isOpenToast: false,
            toastText: ''
          });
          _this2.onGetLocation(); //获取位置
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
    key: 'chooseWai',
    value: function chooseWai(e) {
      this.setState({
        takeaway: e
      });
    }
  }, {
    key: 'deliverFeeChange',
    value: function deliverFeeChange(e) {
      var reg = /^0\.\d+$|^[1-9]+(\.\d+)?$/;
      if (!reg.test(e.detail.value)) {
        if (e.detail.value != '') {
          if (e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
            this.setState({
              takeawayFee: e.detail.value
            });
          } else {
            this.setState({
              takeawayFee: ''
            });
            _taroWeapp2.default.showToast({
              title: '外卖费填写有误！！',
              icon: 'none',
              mask: true
            });
          }
        }
      } else {
        this.setState({
          takeawayFee: e.detail.value
        });
      }
    }
  }, {
    key: 'foodTypeChange',
    value: function foodTypeChange() {}
  }, {
    key: 'saveData',
    value: function saveData() {
      var _state = this.state,
          picList = _state.picList,
          foodType = _state.foodType,
          serveList = _state.serveList,
          name = _state.name,
          city = _state.city,
          address = _state.address,
          openTimeStart = _state.openTimeStart,
          openTimeEnd = _state.openTimeEnd,
          telephone = _state.telephone,
          takeaway = _state.takeaway,
          takeawayFee = _state.takeawayFee,
          groupList = _state.groupList,
          hotList = _state.hotList,
          commonList = _state.commonList,
          chooseShopImg = _state.chooseShopImg,
          cityName = _state.cityName,
          latitude = _state.latitude,
          longitude = _state.longitude;


      var obj = {
        picList: picList,
        foodType: foodType,
        serveList: serveList,
        name: name,
        city: city,
        address: address,
        openTimeStart: openTimeStart,
        openTimeEnd: openTimeEnd,
        telephone: telephone,
        takeaway: takeaway,
        takeawayFee: takeawayFee,
        groupList: groupList,
        hotList: hotList
      };
      console.log('888889999', chooseShopImg);
      _taroWeapp2.default.setStorageSync('addFoodInfo', JSON.stringify(obj));
      _taroWeapp2.default.setStorageSync('chooseShopImg', chooseShopImg); /// 店铺图片
      _taroWeapp2.default.setStorageSync('commonList', commonList);
      _taroWeapp2.default.setStorageSync('cityName', cityName);
      _taroWeapp2.default.setStorageSync('addressInfo', { latitude: latitude, longitude: longitude });
    }
  }, {
    key: 'goAddCoupon',
    value: function goAddCoupon() {
      this.saveData();

      _taroWeapp2.default.navigateTo({
        url: '/pagesA/pages/addCoupon/index?type="add"'
      });
    }
  }, {
    key: 'typeChoose',
    value: function typeChoose(index) {
      var newList = this.state.foodType;
      newList[index].isChoose = !newList[index].isChoose;
      this.setState({
        foodType: newList
      });
      console.log('hhhhhhhhhh', this.state.foodType);
    }
  }, {
    key: 'hasFuwu',
    value: function hasFuwu(index) {
      var newList = this.state.serveList;
      newList[index].isChoose = !newList[index].isChoose;
      this.setState({
        serveList: newList
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
    key: 'goAddcai',
    value: function goAddcai(index) {
      this.saveData();

      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/addFoodInfo/index?index=" + index + "&type=add"
      });
    }
  }, {
    key: 'deleteCoupon',
    value: function deleteCoupon(index) {
      var arr = this.state.groupList;
      arr.splice(index, 1);
      _taroWeapp2.default.showToast({
        title: '删除成功！',
        icon: 'none',
        mask: true
      });
      this.setState({
        groupList: arr
      });
    }
  }, {
    key: 'changeCoupon',
    value: function changeCoupon(index) {
      this.saveData();
      var obj = this.state.groupList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/addCoupon/index?type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'deleteHotItem',
    value: function deleteHotItem(index) {
      var arr = this.state.hotList;
      arr.splice(index, 1);
      _taroWeapp2.default.showToast({
        title: '删除成功！',
        icon: 'none',
        mask: true
      });
      this.setState({
        hotList: arr
      });
    }
  }, {
    key: 'changeHot',
    value: function changeHot(e, index) {
      this.saveData();
      var obj = this.state.hotList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/addFoodInfo/index?index=" + e + "&type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'changeCaidan',
    value: function changeCaidan(e, index) {
      this.saveData();
      var obj = this.state.commonList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/addFoodInfo/index?index=" + e + "&type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
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
    key: 'deleteCommonItem',
    value: function deleteCommonItem(index) {
      var arr = this.state.commonList;
      arr.splice(index, 1);
      this.setState({
        commonList: arr,
        isOpenToast: true,
        toastText: '删除成功！'
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
          foodType = _state2.foodType,
          serveList = _state2.serveList,
          takeaway = _state2.takeaway,
          takeawayFee = _state2.takeawayFee,
          hotList = _state2.hotList,
          groupList = _state2.groupList,
          commonList = _state2.commonList,
          latitude = _state2.latitude,
          longitude = _state2.longitude;

      var productTypeList = [];
      foodType.forEach(function (item, index) {
        if (item.isChoose) {
          productTypeList.push(item.label);
        }
      });

      var serviceSupportList = [];
      serveList.forEach(function (item, index) {
        if (item.isChoose) {
          serviceSupportList.push(item.label);
        }
      });
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
      if (telephone == '') {
        _taroWeapp2.default.showToast({
          title: '请填写联系电话！',
          icon: 'none',
          mask: true
        });
        return;
      }
      if (takeaway && takeawayFee == '') {
        _taroWeapp2.default.showToast({
          title: '请填写外卖费用！',
          icon: 'none',
          mask: true
        });
        return;
      }

      if (hotList.length == 0) {
        _taroWeapp2.default.showToast({
          title: '请添加推荐菜单！',
          icon: 'none',
          mask: true
        });
        return;
      }

      if (commonList.length == 0) {
        _taroWeapp2.default.showToast({
          title: '请添加菜单！',
          icon: 'none',
          mask: true
        });
        return;
      }
      var obj = {
        categoryId: 1,
        verifyStatus: 0,
        picList: picList,
        name: name,
        city: city,
        address: address,
        openTimeStart: openTimeStart,
        openTimeEnd: openTimeEnd,
        telephone: telephone,
        takeaway: takeaway,
        takeawayFee: takeawayFee,
        hotList: hotList,
        groupList: groupList,
        commonList: commonList,
        productTypeList: productTypeList,
        serviceSupportList: serviceSupportList,
        longitude: longitude,
        latitude: latitude
      };
      _api2.default.post('/product/create', obj).then(function (res) {
        if (res.data.code == 200) {
          _taroWeapp2.default.setStorageSync('addFoodInfo', '');
          _taroWeapp2.default.setStorageSync('chooseShopImg', ''); /// 店铺图片
          _taroWeapp2.default.setStorageSync('commonList', '');
          _taroWeapp2.default.setStorageSync('cityName', '');
          _taroWeapp2.default.setStorageSync('addressInfo', '');
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__435"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__435 = _genCompid2[0],
          $compid__435 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__436"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__436 = _genCompid4[0],
          $compid__436 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__437"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__437 = _genCompid6[0],
          $compid__437 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__438"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__438 = _genCompid8[0],
          $compid__438 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__439"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__439 = _genCompid10[0],
          $compid__439 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__440"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__440 = _genCompid12[0],
          $compid__440 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__441"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__441 = _genCompid14[0],
          $compid__441 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__442"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__442 = _genCompid16[0],
          $compid__442 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__443"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__443 = _genCompid18[0],
          $compid__443 = _genCompid18[1];

      var serveList = this.__state.serveList;


      this.anonymousFunc0 = function () {
        return _this4.clickCity();
      };

      this.anonymousFunc1 = function () {
        return _this4.cityHandleClose();
      };

      this.anonymousFunc3 = function () {
        return _this4.openMap();
      };

      this.anonymousFunc4 = function () {
        return _this4.chooseWai(true);
      };

      this.anonymousFunc5 = function () {
        return _this4.chooseWai(false);
      };

      this.anonymousFunc7 = function () {
        return _this4.goAddCoupon();
      };

      this.anonymousFunc10 = function () {
        return _this4.goAddcai(1);
      };

      this.anonymousFunc14 = function () {
        return _this4.goAddcai(2);
      };

      this.anonymousFunc17 = function () {
        return _this4.submitClick();
      };

      var loopArray155 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "cajzz" + index;

        _this4.anonymousFunc2Map[_$indexKey] = function () {
          return _this4.selectCity(item.$original);
        };

        var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + 'cbizzzzzzz' + index, true),
            _genCompid20 = _slicedToArray(_genCompid19, 2),
            $prevCompid__434 = _genCompid20[0],
            $compid__434 = _genCompid20[1];

        _taroWeapp.propsManager.set({
          "onClick": _this4.anonymousFunc2.bind(_this4, _$indexKey)
        }, $compid__434, $prevCompid__434);
        return {
          _$indexKey: _$indexKey,
          $compid__434: $compid__434,
          $original: item.$original
        };
      });

      var loopArray156 = this.__state.foodType.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "cbazz" + index;

        _this4.anonymousFunc6Map[_$indexKey2] = function () {
          return _this4.typeChoose(index);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });

      var loopArray157 = this.__state.groupList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "cbbzz" + index;

        _this4.anonymousFunc8Map[_$indexKey3] = function () {
          return _this4.deleteCoupon(index);
        };

        var _$indexKey4 = "cbczz" + index;

        _this4.anonymousFunc9Map[_$indexKey4] = function () {
          return _this4.changeCoupon(index);
        };

        return {
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $original: item.$original
        };
      });

      var loopArray158 = this.__state.hotList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey5 = "cbdzz" + index;

        _this4.anonymousFunc11Map[_$indexKey5] = function () {
          return _this4.deleteHotItem(index);
        };

        var _$indexKey6 = "cbezz" + index;

        _this4.anonymousFunc12Map[_$indexKey6] = function () {
          return _this4.changeHot(1, index);
        };

        return {
          _$indexKey5: _$indexKey5,
          _$indexKey6: _$indexKey6,
          $original: item.$original
        };
      });

      var loopArray159 = serveList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey7 = "cbfzz" + index;

        _this4.anonymousFunc13Map[_$indexKey7] = function () {
          return _this4.hasFuwu(index);
        };

        return {
          _$indexKey7: _$indexKey7,
          $original: item.$original
        };
      });

      var loopArray160 = this.__state.commonList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey8 = "cbgzz" + index;

        _this4.anonymousFunc15Map[_$indexKey8] = function () {
          return _this4.deleteCommonItem(index);
        };

        var _$indexKey9 = "cbhzz" + index;

        _this4.anonymousFunc16Map[_$indexKey9] = function () {
          return _this4.changeCaidan(2, index);
        };

        return {
          _$indexKey8: _$indexKey8,
          _$indexKey9: _$indexKey9,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.chooseShopImg,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__435, $prevCompid__435);
      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "13",
        "color": "#999"
      }, $compid__436, $prevCompid__436);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpencity,
        "onClose": this.anonymousFunc1
      }, $compid__437, $prevCompid__437);
      _taroWeapp.propsManager.set({
        "value": "map-pin",
        "size": "13",
        "color": "#999"
      }, $compid__438, $prevCompid__438);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "15",
        "color": "rgb(36, 200, 178)"
      }, $compid__439, $prevCompid__439);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "15",
        "color": "rgb(36, 200, 178)"
      }, $compid__440, $prevCompid__440);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "15",
        "color": "rgb(36, 200, 178)"
      }, $compid__441, $prevCompid__441);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc17
      }, $compid__442, $prevCompid__442);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpenToast,
        "text": this.__state.toastText
      }, $compid__443, $prevCompid__443);
      Object.assign(this.__state, {
        loopArray155: loopArray155,
        loopArray156: loopArray156,
        loopArray157: loopArray157,
        loopArray158: loopArray158,
        loopArray159: loopArray159,
        loopArray160: loopArray160,
        $compid__435: $compid__435,
        $compid__436: $compid__436,
        $compid__437: $compid__437,
        $compid__438: $compid__438,
        $compid__439: $compid__439,
        $compid__440: $compid__440,
        $compid__441: $compid__441,
        $compid__442: $compid__442,
        $compid__443: $compid__443
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
    value: function anonymousFunc6(_$indexKey2) {
      var _anonymousFunc6Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc6Map[_$indexKey2] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey2].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(_$indexKey3) {
      var _anonymousFunc8Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc8Map[_$indexKey3] && (_anonymousFunc8Map = this.anonymousFunc8Map)[_$indexKey3].apply(_anonymousFunc8Map, e);
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(_$indexKey4) {
      var _anonymousFunc9Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc9Map[_$indexKey4] && (_anonymousFunc9Map = this.anonymousFunc9Map)[_$indexKey4].apply(_anonymousFunc9Map, e);
    }
  }, {
    key: 'anonymousFunc10',
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(_$indexKey5) {
      var _anonymousFunc11Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc11Map[_$indexKey5] && (_anonymousFunc11Map = this.anonymousFunc11Map)[_$indexKey5].apply(_anonymousFunc11Map, e);
    }
  }, {
    key: 'anonymousFunc12',
    value: function anonymousFunc12(_$indexKey6) {
      var _anonymousFunc12Map;

      ;

      for (var _len7 = arguments.length, e = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        e[_key7 - 1] = arguments[_key7];
      }

      return this.anonymousFunc12Map[_$indexKey6] && (_anonymousFunc12Map = this.anonymousFunc12Map)[_$indexKey6].apply(_anonymousFunc12Map, e);
    }
  }, {
    key: 'anonymousFunc13',
    value: function anonymousFunc13(_$indexKey7) {
      var _anonymousFunc13Map;

      ;

      for (var _len8 = arguments.length, e = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        e[_key8 - 1] = arguments[_key8];
      }

      return this.anonymousFunc13Map[_$indexKey7] && (_anonymousFunc13Map = this.anonymousFunc13Map)[_$indexKey7].apply(_anonymousFunc13Map, e);
    }
  }, {
    key: 'anonymousFunc14',
    value: function anonymousFunc14(e) {
      ;
    }
  }, {
    key: 'anonymousFunc15',
    value: function anonymousFunc15(_$indexKey8) {
      var _anonymousFunc15Map;

      ;

      for (var _len9 = arguments.length, e = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        e[_key9 - 1] = arguments[_key9];
      }

      return this.anonymousFunc15Map[_$indexKey8] && (_anonymousFunc15Map = this.anonymousFunc15Map)[_$indexKey8].apply(_anonymousFunc15Map, e);
    }
  }, {
    key: 'anonymousFunc16',
    value: function anonymousFunc16(_$indexKey9) {
      var _anonymousFunc16Map;

      ;

      for (var _len10 = arguments.length, e = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
        e[_key10 - 1] = arguments[_key10];
      }

      return this.anonymousFunc16Map[_$indexKey9] && (_anonymousFunc16Map = this.anonymousFunc16Map)[_$indexKey9].apply(_anonymousFunc16Map, e);
    }
  }, {
    key: 'anonymousFunc17',
    value: function anonymousFunc17(e) {
      ;
    }
  }]);

  return AddFood;
}(_taroWeapp.Component), _class2.$$events = ["shopNameChange", "anonymousFunc0", "areaNameChange", "anonymousFunc3", "timeStartChange", "timeEndChange", "phoneBlur", "phoneChange", "anonymousFunc4", "anonymousFunc5", "deliverFeeChange", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16"], _class2.$$componentPath = "pagesA/pages/addFood/index", _temp2)) || _class);
exports.default = AddFood;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddFood, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesA/pages/addFood/index.wxml";

/***/ }),

/***/ "./src/pagesA/pages/addFood/index.jsx":
/*!********************************************!*\
  !*** ./src/pagesA/pages/addFood/index.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addFood/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addFood/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesA/pages/addFood/index.less":
/*!*********************************************!*\
  !*** ./src/pagesA/pages/addFood/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesA/pages/addFood/index.jsx","runtime","taro","vendors","common"]]]);