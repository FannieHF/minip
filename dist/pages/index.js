'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageIndex = function (_wepy$page) {
  _inherits(pageIndex, _wepy$page);

  function pageIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '我的数坤',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#049BFF'
    }, _this.data = {
      grids: [1, 2, 3, 4, 5, 6, 7, 8]
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageIndex, [{
    key: 'onReady',
    value: function onReady() {
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {}

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {}
  }]);

  return pageIndex;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageIndex , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInBhZ2VJbmRleCIsIm1peGlucyIsImJhc2UiLCJodHRwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZGF0YSIsImdyaWRzIiwibWV0aG9kcyIsImNvbXBvbmVudHMiLCJpbml0UGFnZURhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsOEJBQXdCLE9BRmpCO0FBR1BDLG9DQUE4QjtBQUh2QixLLFFBS1RDLEksR0FBTztBQUNMQyxhQUFPLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkI7QUFERixLLFFBbUJQQyxPLEdBQVUsRSxRQUdWQyxVLEdBQWEsRTs7Ozs7OEJBbEJIO0FBQ1IsV0FBS0MsWUFBTDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7O29DQUVlLENBQ2Y7O0FBRUQ7Ozs7bUNBQ2UsQ0FDZDs7OztFQXhCb0NDLGVBQUtDLEk7O2tCQUF2QmQsUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy5qcydcclxuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZUluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5pWw5Z2kJyxcclxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwNDlCRkYnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBncmlkczogWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXHJcbiAgICBpbml0UGFnZURhdGEoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgfVxyXG4gIH1cclxuIl19