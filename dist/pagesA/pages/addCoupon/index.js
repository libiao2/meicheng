(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesA/pages/addCoupon/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.less */ "./src/pagesA/pages/addCoupon/index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCoupon = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {};
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(AddCoupon, _BaseComponent);

  function AddCoupon() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddCoupon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddCoupon.__proto__ || Object.getPrototypeOf(AddCoupon)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__300", "$compid__301", "$compid__302", "$compid__303", "$compid__304", "$compid__305", "$compid__306", "$compid__307", "chooseShopImg", "picList", "name", "detail", "note", "description", "groupPrice", "price", "peopleCount", "startTime", "startTimeMiao", "endTime", "endTimeMiao", "isOpen", "toast", "pageType"], _this.config = {
      navigationBarTitleText: '美城美食365'
    }, _this.customComponents = ["AtForm", "ChooseImage", "AtTextarea", "DetaPick", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddCoupon, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AddCoupon.prototype.__proto__ || Object.getPrototypeOf(AddCoupon.prototype), '_constructor', this).call(this, props);
      this.state = {
        chooseShopImg: {
          files: [],
          showUploadBtn: true,
          upLoadImg: []
        },
        picList: [],
        name: '',
        detail: '', /// 说明
        note: '', /// 须知
        description: '', /// 其他说明
        groupPrice: '', /// 团购价
        price: '', /// 原价
        peopleCount: '', /// 人数
        startTime: '', /// 开始时间
        startTimeMiao: '', /// 开始时间秒数
        endTime: '', /// 结束时间
        endTimeMiao: '', /// 结束时间秒数
        isOpen: false,
        toast: '',
        pageType: '' /// 添加卡券，，，修改卡券
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var parmars = this.$router.params;

      if (parmars.type == 'change') {
        var obj = JSON.parse(parmars.obj);
        this.setState({
          chooseShopImg: obj.chooseShopImg,
          picList: obj.picList,
          name: obj.name,
          detail: obj.detail,
          note: obj.note,
          description: obj.description,
          groupPrice: obj.groupPrice,
          price: obj.price,
          peopleCount: obj.peopleCount,
          pageType: parmars.type,
          itemIndex: parmars.itemIndex
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
    key: 'couponNameChange',
    value: function couponNameChange(e) {
      console.log('4334343', e);
      this.setState({
        name: e.detail.value
      });
    }
  }, {
    key: 'detailChange',
    value: function detailChange(e) {
      console.log('mmmmm', e);
      this.setState({
        detail: e
      });
    }
  }, {
    key: 'shuomingChange',
    value: function shuomingChange() {}
  }, {
    key: 'needKnowChange',
    value: function needKnowChange(e) {
      this.setState({
        note: e
      });
    }
  }, {
    key: 'otherKnowChange',
    value: function otherKnowChange(e) {
      this.setState({
        description: e
      });
    }
  }, {
    key: 'tuanPriceChange',
    value: function tuanPriceChange(e) {
      var reg = /^0\.\d+$|^[1-9]+(\.\d+)?$/;
      if (!reg.test(e.detail.value)) {
        if (e.detail.value != '') {
          if (e.detail.value == 10 || e.detail.value == 100 || e.detail.value == 1000 || e.detail.value == 10000 || e.detail.value == 100000 || e.detail.value == 1000000) {
            this.setState({
              groupPrice: e.detail.value
            });
          } else {
            this.setState({
              groupPrice: ''
            });
            _taroWeapp2.default.showToast({
              title: '团购价填写有误！！',
              icon: 'none',
              mask: true
            });
          }
        }
      } else {
        this.setState({
          groupPrice: e.detail.value
        });
      }
    }
  }, {
    key: 'originalPriceChange',
    value: function originalPriceChange(e) {
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
              title: '外卖费填写有误！！',
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
    key: 'peopleNumChange',
    value: function peopleNumChange(e) {
      this.setState({
        peopleCount: e.detail.value
      });
    }
  }, {
    key: 'startOnOK',
    value: function startOnOK(e) {
      console.log('7778888889999', e);
      var T = new Date(e.current);
      console.log('tttt', T.getTime());
      this.setState({
        startTime: e.current,
        startTimeMiao: T.getTime()
      });
    }
  }, {
    key: 'endOnOK',
    value: function endOnOK(e) {
      var T = new Date(e.current);
      console.log('tttt', T.getTime());
      this.setState({
        endTime: e.current,
        endTimeMiao: T.getTime()
      });
    }
  }, {
    key: 'getReturnImgSrc',
    value: function getReturnImgSrc(img) {
      console.log('6565656565', img);
      var list = this.state.picList;
      list.push(img);
      this.setState({
        picList: list
      });
    }
  }, {
    key: 'goAddFood',
    value: function goAddFood() {
      var _state = this.state,
          picList = _state.picList,
          name = _state.name,
          detail = _state.detail,
          note = _state.note,
          description = _state.description,
          groupPrice = _state.groupPrice,
          price = _state.price,
          peopleCount = _state.peopleCount,
          startTime = _state.startTime,
          endTime = _state.endTime,
          chooseShopImg = _state.chooseShopImg,
          pageType = _state.pageType,
          itemIndex = _state.itemIndex,
          endTimeMiao = _state.endTimeMiao,
          startTimeMiao = _state.startTimeMiao;

      if (picList.length == 0) {
        this.setState({
          isOpen: true,
          toast: '请上传团购图片'
        });
        return;
      }
      if (name == '') {
        this.setState({
          isOpen: true,
          toast: '请填写团购名称'
        });
        return;
      }
      if (groupPrice == '') {
        this.setState({
          isOpen: true,
          toast: '请填写团购价格'
        });
        return;
      }
      if (price == '') {
        this.setState({
          isOpen: true,
          toast: '请填写原价格'
        });
        return;
      }
      if (peopleCount == '') {
        this.setState({
          isOpen: true,
          toast: '请填写原人数'
        });
        return;
      }
      if (startTime == '') {
        this.setState({
          isOpen: true,
          toast: '请选择开始时间'
        });
        return;
      }
      if (endTime == '') {
        this.setState({
          isOpen: true,
          toast: '请选择结束时间'
        });
        return;
      }
      if (startTimeMiao > endTimeMiao) {
        _taroWeapp2.default.showToast({
          title: '开始时间不能早于结束时间！',
          icon: 'none',
          mask: true
        });
        return;
      }
      var obj = {
        picList: picList,
        name: name,
        detail: detail,
        note: note,
        description: description,
        groupPrice: groupPrice,
        price: price,
        peopleCount: peopleCount,
        startTime: new Date(startTime.replace(/-/g, '/')),
        endTime: new Date(endTime.replace(/-/g, '/')),
        chooseShopImg: chooseShopImg
      };

      _taroWeapp2.default.navigateTo({
        url: "/pagesA/pages/addFood/index?addCouponObj=" + encodeURIComponent(JSON.stringify(obj)) + "&type=" + pageType + "&itemIndex=" + itemIndex
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__300"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__300 = _genCompid2[0],
          $compid__300 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__301"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__301 = _genCompid4[0],
          $compid__301 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__302"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__302 = _genCompid6[0],
          $compid__302 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__303"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__303 = _genCompid8[0],
          $compid__303 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__304"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__304 = _genCompid10[0],
          $compid__304 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__305"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__305 = _genCompid12[0],
          $compid__305 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__306"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__306 = _genCompid14[0],
          $compid__306 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__307"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__307 = _genCompid16[0],
          $compid__307 = _genCompid16[1];

      console.log('oooo', this.__state.chooseShopImg);

      this.anonymousFunc0 = function () {
        return _this2.goAddFood();
      };

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.chooseShopImg,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__300, $prevCompid__300);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.detail,
        "onChange": this.detailChange.bind(this)
      }, $compid__301, $prevCompid__301);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.note,
        "onChange": this.needKnowChange.bind(this)
      }, $compid__302, $prevCompid__302);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.description,
        "onChange": this.otherKnowChange.bind(this)
      }, $compid__303, $prevCompid__303);
      _taroWeapp.propsManager.set({
        "onOk": this.startOnOK.bind(this),
        "initValue": "2020/4/15 17:22:37"
      }, $compid__304, $prevCompid__304);
      _taroWeapp.propsManager.set({
        "onOk": this.endOnOK.bind(this),
        "initValue": "2020/4/15 17:22:37"
      }, $compid__305, $prevCompid__305);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc0
      }, $compid__306, $prevCompid__306);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpen,
        "text": this.__state.toast
      }, $compid__307, $prevCompid__307);
      Object.assign(this.__state, {
        $compid__300: $compid__300,
        $compid__301: $compid__301,
        $compid__302: $compid__302,
        $compid__303: $compid__303,
        $compid__304: $compid__304,
        $compid__305: $compid__305,
        $compid__306: $compid__306,
        $compid__307: $compid__307
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return AddCoupon;
}(_taroWeapp.Component), _class2.$$events = ["couponNameChange", "tuanPriceChange", "originalPriceChange", "peopleNumChange"], _class2.$$componentPath = "pagesA/pages/addCoupon/index", _temp2)) || _class);
exports.default = AddCoupon;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddCoupon, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesA/pages/addCoupon/index.wxml";

/***/ }),

/***/ "./src/pagesA/pages/addCoupon/index.jsx":
/*!**********************************************!*\
  !*** ./src/pagesA/pages/addCoupon/index.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addCoupon/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addCoupon/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesA/pages/addCoupon/index.less":
/*!***********************************************!*\
  !*** ./src/pagesA/pages/addCoupon/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesA/pages/addCoupon/index.jsx","runtime","taro","vendors"]]]);