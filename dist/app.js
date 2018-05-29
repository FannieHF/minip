'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { service } from './config.js'

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/user'],
      window: {
        navigationBarTitleText: '我的数坤',
        navigationBarTextStyle: 'white',
        navigationBarBackgroundColor: '#249AFA',
        backgroundColor: '#eaeaea',
        backgroundTextStyle: 'light',
        enablePullDownRefresh: true
      },
      // tabBar: {
      //   color: '#AEADAD',
      //   selectedColor: '#049BFF',
      //   backgroundColor: '#fff',
      //   borderStyle: 'black',
      //   list: [{
      //     pagePath: 'pages/index',
      //     selectedIconPath: './images/tabbars/icon-mark-active@2x.png',
      //     iconPath: './images/tabbars/icon-mark@2x.png',
      //     text: '首页'
      //   }, {
      //     pagePath: 'pages/borrow',
      //     selectedIconPath: './images/tabbars/icon-shelf-active@2x.png',
      //     iconPath: './images/tabbars/icon-shelf@2x.png',
      //     text: '书架'
      //   }, {
      //     pagePath: 'pages/user',
      //     selectedIconPath: './images/tabbars/icon-smile-active@2x.png',
      //     iconPath: './images/tabbars/icon-smile@2x.png',
      //     text: '我的'
      //   }]
      // },
      networkTimeout: {
        request: 5000,
        downloadFile: 10000
      },
      debug: true
    };
    _this.globalData = {
      user: null,
      cart: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'onShow',
    value: function onShow(options) {}

    /* ============= 工具方法（app没法用mixins，就再写一遍了） ============= */

  }, {
    key: 'isObject',
    value: function isObject(item) {
      return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !this.isArray(item);
    }
  }, {
    key: 'isArray',
    value: function isArray(item) {
      return Object.prototype.toString.apply(item) === '[object Array]';
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(item) {
      return typeof item === 'undefined';
    }

    /* ========================= 更新缓存信息 ======================== */

  }, {
    key: '$updateGlobalData',
    value: function $updateGlobalData(name, obj) {
      // 校验: globalData
      if (!this.globalData) return;
      // 校验: 操作字段
      if (typeof name !== 'string' || name === '') return {};
      // 取已有信息
      var info = this.globalData[name] || {};
      // 更新缓存
      if (obj && this.isObject(obj)) {
        // Object合并第一层
        this.globalData[name] = Object.assign({}, info, obj);
      } else if (!this.isUndefined(obj)) {
        // 其他非undefined数据直接覆盖
        this.globalData[name] = obj;
      }
      this.$apply && this.$apply();
      console.info('[' + (obj ? 'UPDATE' : 'GET') + ' GlobalData ' + name + ']:', this.globalData[name]);
      return this.globalData[name];
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJkb3dubG9hZEZpbGUiLCJkZWJ1ZyIsImdsb2JhbERhdGEiLCJ1c2VyIiwiY2FydCIsInVzZSIsIm9wdGlvbnMiLCJpdGVtIiwiaXNBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiYXBwbHkiLCJuYW1lIiwib2JqIiwiaW5mbyIsImlzT2JqZWN0IiwiYXNzaWduIiwiaXNVbmRlZmluZWQiLCIkYXBwbHkiLCJjb25zb2xlIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBa0RFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUEvQ2ZBLE1BK0NlLEdBL0NOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsWUFGSyxDQURBO0FBS1BDLGNBQVE7QUFDTkMsZ0NBQXdCLE1BRGxCO0FBRU5DLGdDQUF3QixPQUZsQjtBQUdOQyxzQ0FBOEIsU0FIeEI7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsNkJBQXFCLE9BTGY7QUFNTkMsK0JBQXVCO0FBTmpCLE9BTEQ7QUFhUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxzQkFBZ0I7QUFDZEMsaUJBQVMsSUFESztBQUVkQyxzQkFBYztBQUZBLE9BbkNUO0FBdUNQQyxhQUFPO0FBdkNBLEtBK0NNO0FBQUEsVUFMZkMsVUFLZSxHQUxGO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxZQUFNO0FBRkssS0FLRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVUsQ0FDVjs7OzJCQUVNQyxPLEVBQVMsQ0FDZjs7QUFFRDs7Ozs2QkFDU0MsSSxFQUFNO0FBQ2IsYUFBTyxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCLENBQUMsS0FBS0MsT0FBTCxDQUFhRCxJQUFiLENBQXBDO0FBQ0Q7Ozs0QkFDT0EsSSxFQUFNO0FBQ1osYUFBT0UsT0FBT0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLEtBQTFCLENBQWdDTCxJQUFoQyxNQUEwQyxnQkFBakQ7QUFDRDs7O2dDQUNXQSxJLEVBQU07QUFDaEIsYUFBTyxPQUFPQSxJQUFQLEtBQWdCLFdBQXZCO0FBQ0Q7O0FBRUQ7Ozs7c0NBQ2tCTSxJLEVBQU1DLEcsRUFBSztBQUMzQjtBQUNBLFVBQUksQ0FBQyxLQUFLWixVQUFWLEVBQXNCO0FBQ3RCO0FBQ0EsVUFBSSxPQUFPVyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCQSxTQUFTLEVBQXpDLEVBQTZDLE9BQU8sRUFBUDtBQUM3QztBQUNBLFVBQU1FLE9BQU8sS0FBS2IsVUFBTCxDQUFnQlcsSUFBaEIsS0FBeUIsRUFBdEM7QUFDQTtBQUNBLFVBQUlDLE9BQU8sS0FBS0UsUUFBTCxDQUFjRixHQUFkLENBQVgsRUFBK0I7QUFDN0I7QUFDQSxhQUFLWixVQUFMLENBQWdCVyxJQUFoQixJQUF3QkosT0FBT1EsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLElBQWxCLEVBQXdCRCxHQUF4QixDQUF4QjtBQUNELE9BSEQsTUFHTyxJQUFJLENBQUMsS0FBS0ksV0FBTCxDQUFpQkosR0FBakIsQ0FBTCxFQUE0QjtBQUNqQztBQUNBLGFBQUtaLFVBQUwsQ0FBZ0JXLElBQWhCLElBQXdCQyxHQUF4QjtBQUNEO0FBQ0QsV0FBS0ssTUFBTCxJQUFlLEtBQUtBLE1BQUwsRUFBZjtBQUNBQyxjQUFRTCxJQUFSLFFBQWlCRCxNQUFNLFFBQU4sR0FBaUIsS0FBbEMscUJBQXNERCxJQUF0RCxTQUFnRSxLQUFLWCxVQUFMLENBQWdCVyxJQUFoQixDQUFoRTtBQUNBLGFBQU8sS0FBS1gsVUFBTCxDQUFnQlcsSUFBaEIsQ0FBUDtBQUNEOzs7O0VBekYwQlEsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4vLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvdXNlcicsXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlbDlnaQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzI0OUFGQScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlYWVhZWEnLFxyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyB0YWJCYXI6IHtcclxuICAgIC8vICAgY29sb3I6ICcjQUVBREFEJyxcclxuICAgIC8vICAgc2VsZWN0ZWRDb2xvcjogJyMwNDlCRkYnLFxyXG4gICAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIC8vICAgYm9yZGVyU3R5bGU6ICdibGFjaycsXHJcbiAgICAvLyAgIGxpc3Q6IFt7XHJcbiAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXHJcbiAgICAvLyAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1tYXJrLWFjdGl2ZUAyeC5wbmcnLFxyXG4gICAgLy8gICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLW1hcmtAMngucG5nJyxcclxuICAgIC8vICAgICB0ZXh0OiAn6aaW6aG1J1xyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy9ib3Jyb3cnLFxyXG4gICAgLy8gICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc2hlbGYtYWN0aXZlQDJ4LnBuZycsXHJcbiAgICAvLyAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc2hlbGZAMngucG5nJyxcclxuICAgIC8vICAgICB0ZXh0OiAn5Lmm5p62J1xyXG4gICAgLy8gICB9LCB7XHJcbiAgICAvLyAgICAgcGFnZVBhdGg6ICdwYWdlcy91c2VyJyxcclxuICAgIC8vICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXNtaWxlLWFjdGl2ZUAyeC5wbmcnLFxyXG4gICAgLy8gICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLXNtaWxlQDJ4LnBuZycsXHJcbiAgICAvLyAgICAgdGV4dDogJ+aIkeeahCdcclxuICAgIC8vICAgfV1cclxuICAgIC8vIH0sXHJcbiAgICBuZXR3b3JrVGltZW91dDoge1xyXG4gICAgICByZXF1ZXN0OiA1MDAwLFxyXG4gICAgICBkb3dubG9hZEZpbGU6IDEwMDAwXHJcbiAgICB9LFxyXG4gICAgZGVidWc6IHRydWVcclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgY2FydDogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgfVxyXG5cclxuICBvblNob3cob3B0aW9ucykge1xyXG4gIH1cclxuXHJcbiAgLyogPT09PT09PT09PT09PSDlt6Xlhbfmlrnms5XvvIhhcHDmsqHms5XnlKhtaXhpbnPvvIzlsLHlho3lhpnkuIDpgY3kuobvvIkgPT09PT09PT09PT09PSAqL1xyXG4gIGlzT2JqZWN0KGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIXRoaXMuaXNBcnJheShpdGVtKVxyXG4gIH1cclxuICBpc0FycmF5KGl0ZW0pIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KGl0ZW0pID09PSAnW29iamVjdCBBcnJheV0nXHJcbiAgfVxyXG4gIGlzVW5kZWZpbmVkKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCdcclxuICB9XHJcblxyXG4gIC8qID09PT09PT09PT09PT09PT09PT09PT09PT0g5pu05paw57yT5a2Y5L+h5oGvID09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gICR1cGRhdGVHbG9iYWxEYXRhKG5hbWUsIG9iaikge1xyXG4gICAgLy8g5qCh6aqMOiBnbG9iYWxEYXRhXHJcbiAgICBpZiAoIXRoaXMuZ2xvYmFsRGF0YSkgcmV0dXJuXHJcbiAgICAvLyDmoKHpqow6IOaTjeS9nOWtl+autVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lID09PSAnJykgcmV0dXJuIHt9XHJcbiAgICAvLyDlj5blt7LmnInkv6Hmga9cclxuICAgIGNvbnN0IGluZm8gPSB0aGlzLmdsb2JhbERhdGFbbmFtZV0gfHwge31cclxuICAgIC8vIOabtOaWsOe8k+WtmFxyXG4gICAgaWYgKG9iaiAmJiB0aGlzLmlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgLy8gT2JqZWN05ZCI5bm256ys5LiA5bGCXHJcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YVtuYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIGluZm8sIG9iailcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNVbmRlZmluZWQob2JqKSkge1xyXG4gICAgICAvLyDlhbbku5bpnZ51bmRlZmluZWTmlbDmja7nm7TmjqXopobnm5ZcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhW25hbWVdID0gb2JqXHJcbiAgICB9XHJcbiAgICB0aGlzLiRhcHBseSAmJiB0aGlzLiRhcHBseSgpXHJcbiAgICBjb25zb2xlLmluZm8oYFske29iaiA/ICdVUERBVEUnIDogJ0dFVCd9IEdsb2JhbERhdGEgJHtuYW1lfV06YCwgdGhpcy5nbG9iYWxEYXRhW25hbWVdKVxyXG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YVtuYW1lXVxyXG4gIH1cclxufVxyXG4iXX0=