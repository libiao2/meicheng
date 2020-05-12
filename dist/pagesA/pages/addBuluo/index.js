(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pagesA/pages/addBuluo/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************/
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

var _counter = __webpack_require__(/*! ../../../actions/counter */ "./src/actions/counter.js");

__webpack_require__(/*! ./index.less */ "./src/pagesA/pages/addBuluo/index.less");

var _api = __webpack_require__(/*! ../../../utils/api */ "./src/utils/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBuluo = (_dec = (0, _redux.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    add: function add() {
      dispatch((0, _counter.add)());
    },
    dec: function dec() {
      dispatch((0, _counter.minus)());
    },
    asyncAdd: function asyncAdd() {
      dispatch((0, _counter.asyncAdd)());
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(AddBuluo, _BaseComponent);

  function AddBuluo() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddBuluo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddBuluo.__proto__ || Object.getPrototypeOf(AddBuluo)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["$compid__230", "$compid__231", "$compid__232", "$compid__233", "foodImg", "picList", "name", "detail", "isOpen", "toast"], _this.config = {
      navigationBarTitleText: '部落'
    }, _this.customComponents = ["AtForm", "ChooseImage", "AtTextarea", "AtButton", "AtToast"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddBuluo, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AddBuluo.prototype.__proto__ || Object.getPrototypeOf(AddBuluo.prototype), '_constructor', this).call(this, props);
      this.state = {
        foodImg: {
          files: [],
          showUploadBtn: true,
          upLoadImg: []
        },
        picList: [],
        name: '',
        detail: '',
        isOpen: false,
        toast: ''
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
      console.log('ffff', fails);
      this.setState({
        foodImgList: fails
      });
    }
  }, {
    key: 'deleteImgSrc',
    value: function deleteImgSrc(index) {
      var newList = this.state.picList;
      newList.splice(newList[index], 1); // 删除已上传的图片地址
      this.setState({
        picList: newList
      });
    }
  }, {
    key: 'foodNameChange',
    value: function foodNameChange(e) {
      this.setState({
        name: e.detail.value
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
    key: 'detailChange',
    value: function detailChange(e) {
      this.setState({
        detail: e
      });
    }
  }, {
    key: 'goAdd',
    value: function goAdd() {
      var _state = this.state,
          picList = _state.picList,
          name = _state.name,
          detail = _state.detail;


      if (picList.length == 0) {
        this.setState({
          isOpen: true,
          toast: '请上传部落图片'
        });
        return;
      }

      if (name == '') {
        this.setState({
          isOpen: true,
          toast: '请上传部落名称'
        });
        return;
      }

      if (detail == '') {
        this.setState({
          isOpen: true,
          toast: '请填写详细信息'
        });
        return;
      }

      var obj = {
        categoryId: 6,
        verifyStatus: 0,
        picList: picList,
        name: name,
        detail: detail
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__230"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__230 = _genCompid2[0],
          $compid__230 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__231"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__231 = _genCompid4[0],
          $compid__231 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__232"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__232 = _genCompid6[0],
          $compid__232 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__233"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__233 = _genCompid8[0],
          $compid__233 = _genCompid8[1];

      this.anonymousFunc0 = function () {
        return _this2.goAdd();
      };

      _taroWeapp.propsManager.set({
        "chooseImg": this.__state.foodImg,
        "onFilesValue": this.getOnFilesValue.bind(this),
        "returnImgSrc": this.getReturnImgSrc.bind(this),
        "deleteImgSrc": this.deleteImgSrc.bind(this)
      }, $compid__230, $prevCompid__230);
      _taroWeapp.propsManager.set({
        "className": "text",
        "count": false,
        "value": this.__state.detail,
        "onChange": this.detailChange.bind(this)
      }, $compid__231, $prevCompid__231);
      _taroWeapp.propsManager.set({
        "className": "btn",
        "onClick": this.anonymousFunc0
      }, $compid__232, $prevCompid__232);
      _taroWeapp.propsManager.set({
        "isOpened": this.__state.isOpen,
        "text": this.__state.toast
      }, $compid__233, $prevCompid__233);
      Object.assign(this.__state, {
        $compid__230: $compid__230,
        $compid__231: $compid__231,
        $compid__232: $compid__232,
        $compid__233: $compid__233
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return AddBuluo;
}(_taroWeapp.Component), _class2.$$events = ["foodNameChange"], _class2.$$componentPath = "pagesA/pages/addBuluo/index", _temp2)) || _class);
exports.default = AddBuluo;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.6@@tarojs/taro-weapp/index.js").default.createComponent(AddBuluo, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pagesA/pages/addBuluo/index.wxml";

/***/ }),

/***/ "./src/pagesA/pages/addBuluo/index.jsx":
/*!*********************************************!*\
  !*** ./src/pagesA/pages/addBuluo/index.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addBuluo/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=/Volumes/libiao/Project2020/lifeXCX/uslife-xcx/src!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.0.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pagesA/pages/addBuluo/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Volumes_libiao_Project2020_lifeXCX_uslife_xcx_src_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_0_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pagesA/pages/addBuluo/index.less":
/*!**********************************************!*\
  !*** ./src/pagesA/pages/addBuluo/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pagesA/pages/addBuluo/index.jsx","runtime","taro","vendors","common"]]]);