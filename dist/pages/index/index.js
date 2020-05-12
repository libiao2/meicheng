(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");

var _global_data = __webpack_require__(/*! ../../utils/global_data */ "./src/utils/global_data.js");

var _api = __webpack_require__(/*! ../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _redux.connect)(function (_ref) {
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
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["loopArray303", "loopArray304", "loopArray305", "loopArray306", "loopArray307", "$compid__676", "$compid__677", "$compid__678", "$compid__679", "dataList", "typeKey", "areaList", "selectArea", "city", "isSearch", "imgList", "typeList", "isMove", "recommendList", "stationMessage", "categoryId", "pageNum", "pageSize", "listInfo", "SocketTask", "counter", "addChat"], _this.config = {
      navigationBarTitleText: '美城美食365',
      "enablePullDownRefresh": true,
      onReachBottomDistance: 50
    }, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.anonymousFunc5Map = {}, _this.anonymousFunc7Map = {}, _this.customComponents = ["AtIcon", "AtNoticebar", "One", "Two", "AtActionSheet", "AtActionSheetItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), '_constructor', this).call(this, props);
      this.state = {
        areaList: [{ name: '全部', value: 0 }, { name: '休斯顿', value: 1 }, { name: '达拉斯', value: 2 }, { name: '奥斯丁', value: 3 }, { name: '西雅图', value: 4 }],
        selectArea: '全部',
        city: 0,
        isSearch: false,
        imgList: [],
        typeList: [{ name: '美食', pic: __webpack_require__(/*! ./../../image/food.png */ "./src/image/food.png") }, { name: '休闲', pic: __webpack_require__(/*! ./../../image/xiuxian.png */ "./src/image/xiuxian.png") }, { name: '生活', pic: __webpack_require__(/*! ./../../image/shenghuo.png */ "./src/image/shenghuo.png") }, { name: '二手', pic: __webpack_require__(/*! ./../../image/old.png */ "./src/image/old.png") }, { name: '房源', pic: __webpack_require__(/*! ./../../image/fangyuan.png */ "./src/image/fangyuan.png") }, { name: '部落', pic: __webpack_require__(/*! ./../../image/buluo.png */ "./src/image/buluo.png") }],
        typeKey: 0,

        isMove: true,
        recommendList: [],
        stationMessage: '',
        categoryId: 1,
        pageNum: 1,
        pageSize: 10,
        dataList: [],
        listInfo: {},
        SocketTask: (0, _global_data.getGlobalData)("SocketTask")
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount(query) {
      if (query) {
        var scene = decodeURIComponent(query.scene);
        var arr = scene.split('&');
        if (arr[0] == 0) {
          /// 店铺
          if (arr[1] == 1) {
            ///1->美食；2->休闲；3->生活；4->二手；5->房源；6->部落
            _taroWeapp2.default.navigateTo({
              url: "/pagesB/pages/foodDetail/index?id=" + arr[2]
            });
          } else if (arr[1] == 2) {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/leisureDetail/index?id=" + arr[2]
            });
          } else {
            _taroWeapp2.default.navigateTo({
              url: "/pagesC/pages/otherDetail/index?id=" + arr[2] + "&type=" + arr[1]
            });
          }
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_taroWeapp2.default.getStorageSync('userInfo') != '') {
        this.getCarCount();
      }

      this.getData();
      // this.initList()
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
    value: function componentDidShow() {
      var _this2 = this;

      console.log('diaoyongjiekou');
      this.setState({
        pageNum: 1,
        dataList: []
      }, function () {
        _this2.getList();
      });

      _taroWeapp2.default.onSocketMessage(function (res) {
        var message = JSON.parse(res.data);
        var myId = _taroWeapp2.default.getStorageSync('userId');
        var allList = _this2.props.counter.allChat;
        if (message.sendId == myId || message.sendToId == myId) {
          /// 判断该条信息是否与自己相关
          if (message.sendId == myId) {
            /// 如果发送人是自己
            /// 先判断之前是否存过对应联系人
            if (allList != '') {
              /// 说明存在该缓存字段allList
              var isHave = false;
              var haveIndex = null;
              allList.map(function (item, index) {
                if (item.id == message.sendToId) {
                  /// 判断是否存在对方id
                  isHave = true;
                  haveIndex = index;
                }
              });
              if (isHave) {
                allList[haveIndex].list.push(message);
                _this2.props.addChat(allList);
              } else {
                allList.push({ id: message.sendToId, list: [message] });
                _this2.props.addChat(allList);
              }
            } else {
              var _allList = [];
              _allList.push({ id: message.sendToId, list: [message] });
              _this2.props.addChat(_allList);
            }
          }
          if (message.sendToId == myId) {
            /// 发送人是别人
            /// 收到别人发的消息就要给一个回执，表示自己在线
            _taroWeapp2.default.sendSocketMessage({
              data: JSON.stringify({
                mesageType: 2,
                sendId: message.sendId,
                sendToId: message.sendToId
              }),
              success: function success(res) {
                console.log('我在线！！');
              }
            });
            if (allList != '') {
              /// 说明存在该缓存字段allList
              var _isHave = false;
              var _haveIndex = null;
              allList.map(function (item, index) {
                if (item.id == message.sendId) {
                  /// 判断是否存在对方id
                  _isHave = true;
                  _haveIndex = index;
                }
              });
              if (_isHave) {
                allList[_haveIndex].list.push(message);
                _this2.props.addChat(allList);
              } else {
                allList.push({ id: message.sendId, list: [message] });
                _this2.props.addChat(allList);
              }
            } else {
              var _allList2 = [];
              _allList2.push({ id: message.sendId, list: [message] });
              _this2.props.addChat(_allList2);
            }
          }
        }
      });
    }
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      /// 下拉事件
      console.log('lllllllllllll');
      this.setState({
        city: 0,
        categoryId: 1,
        pageNum: 1,
        pageSize: 10,
        dataList: []
      });
      this.getData();
      this.initList();
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
    key: 'serchArea',
    value: function serchArea() {
      this.setState({
        isSearch: true
      });
    }
  }, {
    key: 'selectArea',
    value: function selectArea(e) {
      var _this4 = this;

      this.setState({
        selectArea: e.name,
        city: e.value,
        isSearch: false,
        pageNum: 1,
        dataList: []
      }, function () {
        _this4.getList();
      });
    }
  }, {
    key: 'typeChoose',
    value: function typeChoose(e) {
      var timer = null;
      var that = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        console.log('0000000', that.state);
        that.setState({
          typeKey: e,
          categoryId: e + 1,
          pageNum: 1,
          dataList: []
        }, function () {
          that.getList();
        });
      }, 700);
    }
  }, {
    key: 'initList',
    value: function initList() {
      var _this5 = this;

      this.setState({
        typeKey: 0,
        categoryId: 1,
        pageNum: 1,
        dataList: []
      }, function () {
        _this5.getList();
      });
      _taroWeapp2.default.stopPullDownRefresh();
    }
  }, {
    key: 'getList',
    value: function getList() {
      var _this6 = this;

      var _state = this.state,
          city = _state.city,
          categoryId = _state.categoryId,
          pageNum = _state.pageNum,
          pageSize = _state.pageSize;

      var obj = {
        city: city,
        categoryId: categoryId,
        pageNum: pageNum,
        pageSize: pageSize
      };

      _api2.default.post('/home/productListByType', obj).then(function (res) {
        console.log('$$$$$', res);
        if (res.data.code == 200) {
          var list = _this6.state.dataList;
          if (pageNum == 1) {
            _this6.setState({
              dataList: res.data.data.list,
              listInfo: res.data.data
            });
          } else {
            _this6.setState({
              dataList: [].concat(_toConsumableArray(list), _toConsumableArray(res.data.data.list)),
              listInfo: res.data.data
            });
          }
        }
      });
    }
  }, {
    key: 'goMoreYouhui',
    value: function goMoreYouhui() {
      _taroWeapp2.default.navigateTo({
        url: '/pagesB/pages/moreFavorable/index'
      });
    }
  }, {
    key: 'goSearch',
    value: function goSearch() {
      var city = this.state.city;

      _taroWeapp2.default.navigateTo({
        url: "/pagesB/pages/search/index?city=" + city
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this7 = this;

      _api2.default.post('/home/content', {}).then(function (res) {
        if (res.data.code == 200) {
          var huiList = res.data.data.recommendList;
          _this7.setState({
            imgList: res.data.data.advertiseList,
            recommendList: huiList.length > 2 ? [huiList[0], huiList[1]] : huiList,
            stationMessage: res.data.data.stationMessage
          });
        }
      });
    }
  }, {
    key: 'goDetail',
    value: function goDetail(item) {
      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/foodTuan/index?goodsId=" + item.productItemId
      });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({
        isSearch: false
      });
    }
  }, {
    key: 'swiperClick',
    value: function swiperClick(index) {
      var imgList = this.state.imgList;

      console.log('00000', imgList[index]);
      var url = '';
      if (imgList[index].linkType == 0 && imgList[index].categoryId == 1) {
        url = "/pagesB/pages/foodDetail/index?id=" + imgList[index].linkId;
      } else if (imgList[index].linkType == 0 && imgList[index].categoryId == 2) {
        url = "/pagesC/pages/leisureDetail/index?id=" + imgList[index].linkId;
      } else if (imgList[index].linkType == 1 && imgList[index].categoryId == 1) {
        url = "/pagesA/pages/foodInfo/index?id=" + imgList[index].linkId;
      } else if (imgList[index].linkType == 1 && imgList[index].categoryId == 2) {
        url = "/pagesC/pages/leisureInfo/index?id=" + imgList[index].linkId;
      }
      if (_taroWeapp2.default.getStorageSync('userInfo') != '') {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      } else {
        _taroWeapp2.default.showToast({
          title: "请先去'我的'页面进行登录！",
          icon: 'none',
          mask: true
        });
      }
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      return {
        title: '美城美事365首页',
        path: '/pages/car/index',
        success: function success(res) {
          console.log('成功', res);
        }
      };
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this8 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__676"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__676 = _genCompid2[0],
          $compid__676 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__677"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__677 = _genCompid4[0],
          $compid__677 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__678"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__678 = _genCompid6[0],
          $compid__678 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__679"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__679 = _genCompid8[0],
          $compid__679 = _genCompid8[1];

      var _state2 = this.__state,
          dataList = _state2.dataList,
          typeKey = _state2.typeKey;


      this.anonymousFunc0 = function () {
        return _this8.serchArea();
      };

      this.anonymousFunc1 = function () {
        return _this8.goSearch();
      };

      this.anonymousFunc4 = function () {
        return _this8.goMoreYouhui();
      };

      this.anonymousFunc6 = function () {
        return _this8.handleClose();
      };

      var loopArray303 = this.__state.imgList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "eahzz" + index;

        _this8.anonymousFunc2Map[_$indexKey] = function () {
          return _this8.swiperClick(index);
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });

      var loopArray304 = this.__state.typeList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey2 = "eaizz" + index;

        _this8.anonymousFunc3Map[_$indexKey2] = function () {
          return _this8.typeChoose(index);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });

      var loopArray305 = this.__state.typeKey == 0 || this.__state.typeKey == 1 ? this.__state.recommendList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey3 = "eajzz" + index;

        _this8.anonymousFunc5Map[_$indexKey3] = function () {
          return _this8.goDetail(item.$original);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      }) : [];
      var loopArray306 = dataList.length > 0 ? dataList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + 'ebbzzzzzzz' + index, true),
            _genCompid10 = _slicedToArray(_genCompid9, 2),
            $prevCompid__673 = _genCompid10[0],
            $compid__673 = _genCompid10[1];

        (typeKey == 0 || typeKey == 1) && _taroWeapp.propsManager.set({
          "item": item.$original,
          "type": _this8.__state.categoryId
        }, $compid__673, $prevCompid__673);

        var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + 'ebczzzzzzz' + index, true),
            _genCompid12 = _slicedToArray(_genCompid11, 2),
            $prevCompid__674 = _genCompid12[0],
            $compid__674 = _genCompid12[1];

        !(typeKey == 0 || typeKey == 1) && _taroWeapp.propsManager.set({
          "item": item.$original,
          "type": typeKey
        }, $compid__674, $prevCompid__674);
        return {
          $compid__673: $compid__673,
          $compid__674: $compid__674,
          $original: item.$original
        };
      }) : [];

      var loopArray307 = this.__state.areaList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey4 = "ebazz" + index;

        _this8.anonymousFunc7Map[_$indexKey4] = function () {
          return _this8.selectArea(item.$original);
        };

        var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + 'ebdzzzzzzz' + index, true),
            _genCompid14 = _slicedToArray(_genCompid13, 2),
            $prevCompid__675 = _genCompid14[0],
            $compid__675 = _genCompid14[1];

        _taroWeapp.propsManager.set({
          "onClick": _this8.anonymousFunc7.bind(_this8, _$indexKey4)
        }, $compid__675, $prevCompid__675);
        return {
          _$indexKey4: _$indexKey4,
          $compid__675: $compid__675,
          $original: item.$original
        };
      });

      _taroWeapp.propsManager.set({
        "value": "search",
        "size": "12",
        "color": "#666"
      }, $compid__676, $prevCompid__676);
      _taroWeapp.propsManager.set({
        "single": true,
        "marquee": true,
        "icon": "volume-plus"
      }, $compid__677, $prevCompid__677);
      (this.__state.typeKey == 0 || this.__state.typeKey == 1) && _taroWeapp.propsManager.set({
        "value": "chevron-right",
        "size": "10",
        "color": "#999"
      }, $compid__678, $prevCompid__678);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isSearch,
        "onClose": this.anonymousFunc6
      }, $compid__679, $prevCompid__679);
      Object.assign(this.__state, {
        loopArray303: loopArray303,
        loopArray304: loopArray304,
        loopArray305: loopArray305,
        loopArray306: loopArray306,
        loopArray307: loopArray307,
        $compid__676: $compid__676,
        $compid__677: $compid__677,
        $compid__678: $compid__678,
        $compid__679: $compid__679
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
  }]);

  return Home;
}(_taroWeapp.Component), _class2.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class2.$$componentPath = "pages/index/index", _temp2)) || _class);
exports.default = Home;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(Home, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors","common"]]]);