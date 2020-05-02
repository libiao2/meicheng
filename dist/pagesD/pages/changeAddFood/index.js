(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesD/pages/changeAddFood/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE& ***!
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

__webpack_require__(/*! ./index.less */ "./src/pagesD/pages/changeAddFood/index.less");

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddFood.__proto__ || Object.getPrototypeOf(AddFood)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray161", "loopArray162", "loopArray163", "loopArray164", "loopArray165", "loopArray166", "loopArray167", "$compid__441", "$compid__442", "$compid__443", "$compid__444", "$compid__445", "$compid__446", "$compid__447", "$compid__448", "$compid__449", "chooseShopImgList", "serveList", "picList", "areaList", "foodType", "chooseShopImg", "isOpencity", "name", "cityName", "city", "address", "openTimeStart", "openTimeEnd", "telephone", "takeaway", "takeawayFee", "chooseFoodList", "groupList", "hotList", "commonList", "isOpenToast", "toastText", "longitude", "latitude", "id"], _this.config = {
      navigationBarTitleText: '美城美食365'
    }, _this.anonymousFunc0Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc7Map = {}, _this.anonymousFunc9Map = {}, _this.anonymousFunc10Map = {}, _this.anonymousFunc12Map = {}, _this.anonymousFunc13Map = {}, _this.anonymousFunc14Map = {}, _this.anonymousFunc16Map = {}, _this.anonymousFunc17Map = {}, _this.customComponents = ["AtForm", "ChooseImage", "AtIcon", "AtActionSheet", "AtActionSheetItem", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
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
        latitude: '',
        chooseShopImgList: [], /// 以前选的图片数组
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
        if (_taroWeapp2.default.getStorageSync('addFoodInfo') != '') {
          console.log('||||||||', _taroWeapp2.default.getStorageSync('shopFoodChooseImg'));
          var obj = JSON.parse(_taroWeapp2.default.getStorageSync('addFoodInfo'));
          console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
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
            latitude: _taroWeapp2.default.getStorageSync('addressInfo').latitude,
            chooseShopImgList: _taroWeapp2.default.getStorageSync('shopFoodChooseImg'),
            id: _taroWeapp2.default.getStorageSync('changeAddFoodId')
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
            console.log('11111111111111111111111');
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

    /// 获取需要修改的内容

  }, {
    key: 'getChangeData',
    value: function getChangeData(id) {
      var _this2 = this;

      var _state = this.state,
          foodType = _state.foodType,
          serveList = _state.serveList;

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

          console.log('>>>>>????', obj.productType);
          var chooseFoodType = obj.productType.split(',');
          var foodTypeCopy = [].concat(_toConsumableArray(foodType));
          foodTypeCopy.forEach(function (item) {
            chooseFoodType.forEach(function (item2) {
              if (item.label == item2) {
                item.isChoose = true;
              }
            });
          });

          var chooseServeList = obj.serviceSupport.split(',');
          var serveListCopy = [].concat(_toConsumableArray(serveList));
          serveListCopy.forEach(function (item) {
            chooseServeList.forEach(function (item2) {
              if (item.label == item2) {
                item.isChoose = true;
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
            openTimeStart: obj.openTimeStart,
            openTimeEnd: obj.openTimeEnd,
            telephone: obj.telephone,
            takeaway: obj.takeaway,
            takeawayFee: obj.takeawayFee,
            foodType: foodTypeCopy,
            groupList: obj.groupList || [],
            hotList: obj.hotList || [],
            serveList: serveListCopy,
            commonList: obj.commonList || [],
            chooseShopImgList: obj.picList
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
      var _state2 = this.state,
          picList = _state2.picList,
          foodType = _state2.foodType,
          serveList = _state2.serveList,
          name = _state2.name,
          city = _state2.city,
          address = _state2.address,
          openTimeStart = _state2.openTimeStart,
          openTimeEnd = _state2.openTimeEnd,
          telephone = _state2.telephone,
          takeaway = _state2.takeaway,
          takeawayFee = _state2.takeawayFee,
          groupList = _state2.groupList,
          hotList = _state2.hotList,
          commonList = _state2.commonList,
          chooseShopImg = _state2.chooseShopImg,
          cityName = _state2.cityName,
          latitude = _state2.latitude,
          longitude = _state2.longitude,
          chooseShopImgList = _state2.chooseShopImgList,
          id = _state2.id;


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
      _taroWeapp2.default.setStorageSync('shopFoodChooseImg', chooseShopImgList);
      _taroWeapp2.default.setStorageSync('changeAddFoodId', id);
    }
  }, {
    key: 'goAddCoupon',
    value: function goAddCoupon() {
      this.saveData();

      _taroWeapp2.default.navigateTo({
        url: '/pagesD/pages/changeAddCoupon/index?type="add"'
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
        url: "/pagesD/pages/changeAddFoodInfo/index?index=" + index + "&type=add"
      });
    }
  }, {
    key: 'deleteCoupon',
    value: function deleteCoupon(index) {
      var arr = this.state.groupList;
      arr.splice(index, 1);
      this.setState({
        groupList: arr,
        isOpenToast: true,
        toastText: '删除成功！'
      });
    }
  }, {
    key: 'changeCoupon',
    value: function changeCoupon(index) {
      this.saveData();
      var obj = this.state.groupList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesD/pages/changeAddCoupon/index?type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'deleteHotItem',
    value: function deleteHotItem(index) {
      var arr = this.state.hotList;
      arr.splice(index, 1);
      this.setState({
        hotList: arr,
        isOpenToast: true,
        toastText: '删除成功！'
      });
    }
  }, {
    key: 'changeHot',
    value: function changeHot(e, index) {
      this.saveData();
      var obj = this.state.hotList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesD/pages/changeAddFoodInfo/index?index=" + e + "&type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'changeCaidan',
    value: function changeCaidan(e, index) {
      this.saveData();
      var obj = this.state.commonList[index];
      _taroWeapp2.default.navigateTo({
        url: "/pagesD/pages/changeAddFoodInfo/index?index=" + e + "&type=change&obj=" + encodeURIComponent(JSON.stringify(obj)) + "&itemIndex=" + index
      });
    }
  }, {
    key: 'deleteChooseImg',
    value: function deleteChooseImg(index) {
      var chooseShopImgList = this.state.chooseShopImgList;

      var newList = [].concat(_toConsumableArray(chooseShopImgList));
      newList.splice(index, 1);
      this.setState({
        chooseShopImgList: newList
      });
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
      var _state3 = this.state,
          picList = _state3.picList,
          name = _state3.name,
          city = _state3.city,
          address = _state3.address,
          openTimeStart = _state3.openTimeStart,
          openTimeEnd = _state3.openTimeEnd,
          telephone = _state3.telephone,
          foodType = _state3.foodType,
          serveList = _state3.serveList,
          takeaway = _state3.takeaway,
          takeawayFee = _state3.takeawayFee,
          hotList = _state3.hotList,
          groupList = _state3.groupList,
          commonList = _state3.commonList,
          latitude = _state3.latitude,
          longitude = _state3.longitude,
          chooseShopImgList = _state3.chooseShopImgList,
          id = _state3.id;

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
        id: id,
        categoryId: 1,
        verifyStatus: 0,
        picList: [].concat(_toConsumableArray(picList), _toConsumableArray(chooseShopImgList)),
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
      console.log('------++++++++++', obj);

      _api2.default.post('/product/update', obj).then(function (res) {
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
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__441"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__441 = _genCompid2[0],
          $compid__441 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__442"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__442 = _genCompid4[0],
          $compid__442 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__443"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__443 = _genCompid6[0],
          $compid__443 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__444"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__444 = _genCompid8[0],
          $compid__444 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__445"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__445 = _genCompid10[0],
          $compid__445 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__446"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__446 = _genCompid12[0],
          $compid__446 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__447"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__447 = _genCompid14[0],
          $compid__447 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__448"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__448 = _genCompid16[0],
          $compid__448 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__449"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__449 = _genCompid18[0],
          $compid__449 = _genCompid18[1];

      var _state4 = this.__state,
          serveList = _state4.serveList,
          chooseShopImgList = _state4.chooseShopImgList;


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
        return _this5.chooseWai(true);
      };

      this.anonymousFunc6 = function () {
        return _this5.chooseWai(false);
      };

      this.anonymousFunc8 = function () {
        return _this5.goAddCoupon();
      };

      this.anonymousFunc11 = function () {
        return _this5.goAddcai(1);
      };

      this.anonymousFunc15 = function () {
        return _this5.goAddcai(2);
      };

      this.anonymousFunc18 = function () {
        return _this5.submitClick();
      };

      var loopArray161 = chooseShopImgList.length > 0 ? chooseShopImgList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "cajzz" + index;

        _this5.anonymousFunc0Map[_$indexKey] = function () {
          return _this5.deleteChooseImg(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];

      var loopArray162 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "cbazz" + index;

        _this5.anonymousFunc3Map[_$indexKey2] = function () {
          return _this5.selectCity(item.$original);
        };

        var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + 'cbjzzzzzzz' + index, true),
            _genCompid20 = _slicedToArray(_genCompid19, 2),
            $prevCompid__440 = _genCompid20[0],
            $compid__440 = _genCompid20[1];

        _taroWeapp.propsManager.set({
          "onClick": _this5.anonymousFunc3.bind(_this5, _$indexKey2)
        }, $compid__440, $prevCompid__440);
        return {
          _$indexKey2: _$indexKey2,
          $compid__440: $compid__440,
          $original: item.$original
        };
      });

      var loopArray163 = this.__state.foodType.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "cbbzz" + index;

        _this5.anonymousFunc7Map[_$indexKey3] = function () {
          return _this5.typeChoose(index);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      });

      var loopArray164 = this.__state.groupList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey4 = "cbczz" + index;

        _this5.anonymousFunc9Map[_$indexKey4] = function () {
          return _this5.deleteCoupon(index);
        };

        var _$indexKey5 = "cbdzz" + index;

        _this5.anonymousFunc10Map[_$indexKey5] = function () {
          return _this5.changeCoupon(index);
        };

        return {
          _$indexKey4: _$indexKey4,
          _$indexKey5: _$indexKey5,
          $original: item.$original
        };
      });

      var loopArray165 = this.__state.hotList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey6 = "cbezz" + index;

        _this5.anonymousFunc12Map[_$indexKey6] = function () {
          return _this5.deleteHotItem(index);
        };

        var _$indexKey7 = "cbfzz" + index;

        _this5.anonymousFunc13Map[_$indexKey7] = function () {
          return _this5.changeHot(1, index);
        };

        return {
          _$indexKey6: _$indexKey6,
          _$indexKey7: _$indexKey7,
          $original: item.$original
        };
      });

      var loopArray166 = serveList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey8 = "cbgzz" + index;

        _this5.anonymousFunc14Map[_$indexKey8] = function () {
          return _this5.hasFuwu(index);
        };

        return {
          _$indexKey8: _$indexKey8,
          $original: item.$original
        };
      });

      var loopArray167 = this.__state.commonList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey9 = "cbhzz" + index;

        _this5.anonymousFunc16Map[_$indexKey9] = function () {
          return _this5.deleteCommonItem(index);
        };

        var _$indexKey10 = "cbizz" + index;

        _this5.anonymousFunc17Map[_$indexKey10] = function () {
          return _this5.changeCaidan(2, index);
        };

        return {
          _$indexKey9: _$indexKey9,
          _$indexKey10: _$indexKey10,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.chooseShopImg,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__441, $prevCompid__441);
      _taroWeapp.propsManager.set({
        "value": "chevron-down",
        "size": "13",
        "color": "#999"
      }, $compid__442, $prevCompid__442);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpencity,
        "onClose": this.anonymousFunc2
      }, $compid__443, $prevCompid__443);
      _taroWeapp.propsManager.set({
        "value": "map-pin",
        "size": "13",
        "color": "#999"
      }, $compid__444, $prevCompid__444);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "12",
        "color": "#999"
      }, $compid__445, $prevCompid__445);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "12",
        "color": "#999"
      }, $compid__446, $prevCompid__446);
      _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "12",
        "color": "#999"
      }, $compid__447, $prevCompid__447);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc18
      }, $compid__448, $prevCompid__448);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpenToast,
        "text": this.__state.toastText
      }, $compid__449, $prevCompid__449);
      Object.assign(this.__state, {
        loopArray161: loopArray161,
        loopArray162: loopArray162,
        loopArray163: loopArray163,
        loopArray164: loopArray164,
        loopArray165: loopArray165,
        loopArray166: loopArray166,
        loopArray167: loopArray167,
        $compid__441: $compid__441,
        $compid__442: $compid__442,
        $compid__443: $compid__443,
        $compid__444: $compid__444,
        $compid__445: $compid__445,
        $compid__446: $compid__446,
        $compid__447: $compid__447,
        $compid__448: $compid__448,
        $compid__449: $compid__449
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
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(_$indexKey3) {
      var _anonymousFunc7Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc7Map[_$indexKey3] && (_anonymousFunc7Map = this.anonymousFunc7Map)[_$indexKey3].apply(_anonymousFunc7Map, e);
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
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
    value: function anonymousFunc10(_$indexKey5) {
      var _anonymousFunc10Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc10Map[_$indexKey5] && (_anonymousFunc10Map = this.anonymousFunc10Map)[_$indexKey5].apply(_anonymousFunc10Map, e);
    }
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(e) {
      ;
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
    value: function anonymousFunc14(_$indexKey8) {
      var _anonymousFunc14Map;

      ;

      for (var _len9 = arguments.length, e = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
        e[_key9 - 1] = arguments[_key9];
      }

      return this.anonymousFunc14Map[_$indexKey8] && (_anonymousFunc14Map = this.anonymousFunc14Map)[_$indexKey8].apply(_anonymousFunc14Map, e);
    }
  }, {
    key: 'anonymousFunc15',
    value: function anonymousFunc15(e) {
      ;
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
    value: function anonymousFunc17(_$indexKey10) {
      var _anonymousFunc17Map;

      ;

      for (var _len11 = arguments.length, e = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
        e[_key11 - 1] = arguments[_key11];
      }

      return this.anonymousFunc17Map[_$indexKey10] && (_anonymousFunc17Map = this.anonymousFunc17Map)[_$indexKey10].apply(_anonymousFunc17Map, e);
    }
  }, {
    key: 'anonymousFunc18',
    value: function anonymousFunc18(e) {
      ;
    }
  }]);

  return AddFood;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "shopNameChange", "anonymousFunc1", "anonymousFunc4", "areaNameChange", "timeStartChange", "timeEndChange", "phoneChange", "anonymousFunc5", "anonymousFunc6", "deliverFeeChange", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16", "anonymousFunc17"], _class2.$$componentPath = "pagesD/pages/changeAddFood/index", _temp2)) || _class);
exports.default = AddFood;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddFood, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesD/pages/changeAddFood/index.wxml";

/***/ }),

/***/ "./src/pagesD/pages/changeAddFood/index.jsx":
/*!**************************************************!*\
  !*** ./src/pagesD/pages/changeAddFood/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesD/pages/changeAddFood/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesD/pages/changeAddFood/index.less":
/*!***************************************************!*\
  !*** ./src/pagesD/pages/changeAddFood/index.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesD/pages/changeAddFood/index.jsx","runtime","taro","vendors","common"]]]);