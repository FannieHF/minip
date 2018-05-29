'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _demo = require('./../../mixins/demo.js');

var _bookList = require('./../../components/bookList.js');

var _bookList2 = _interopRequireDefault(_bookList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userCollect = function (_wepy$page) {
  _inherits(userCollect, _wepy$page);

  function userCollect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userCollect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userCollect.__proto__ || Object.getPrototypeOf(userCollect)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '收藏图书',
      enablePullDownRefresh: false
    }, _this.data = {
      icon_star: '/images/icon/icon-star@2x.png',
      page: 0,
      size: 5,
      list: [],
      noMoreList: false,
      loading: false,
      loaded: false
    }, _this.methods = {
      toIndex: function toIndex() {
        wx.switchTab({ url: '/pages/index' });
      }
    }, _this.$repeat = {}, _this.$props = { "BookList": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList", "type": "collect" } }, _this.$events = {}, _this.components = {
      BookList: _bookList2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userCollect, [{
    key: 'onShow',
    value: function onShow() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      var _this2 = this;

      setTimeout(function () {
        _this2.updateBookList(_this2.page);
        _this2.$apply();
      }, 200);
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 初始化参数
      this.page = 0;
      this.loading = false;
      this.noMoreList = false;

      // 请求推荐列表
      this.updateBookList(this.page);
    }

    // 更新图书列表

  }, {
    key: 'updateBookList',
    value: function updateBookList(page) {
      var _this3 = this;

      if (this.loading || this.noMoreList) return;
      this.loading = true;
      // 推荐列表
      this.$post({
        url: _config.service.list,
        data: Object.assign({}, this.getObject(this.params), {
          type: 'collect',
          page: page,
          size: this.size
        })
      }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          // 示例规则：最多20本
          if (_this3.list.length >= 20) {
            _this3.noMoreList = true;
            return;
          }

          // 请求到空列表后就认为没有更多了
          if (_this3.isArray(data) && data.length === 0) {
            _this3.noMoreList = true;
          }
          // 处理列表关系
          if (!_this3.page || +_this3.page === 0) {
            _this3.list = _this3.getBooks(data);
          } else {
            // 添加到列表中
            _this3.list = [].concat(_toConsumableArray(_this3.list), _toConsumableArray(_this3.getBooks(data)));
          }
          // 成功了就增加一页
          _this3.page += 1;
        },
        fail: function fail(_ref3) {
          var code = _ref3.code,
              data = _ref3.data;

          console.log('[updateBookList fail]', code, data);
        },
        complete: function complete() {
          _this3.loading = false;
        }
      });
    }

    // 处理图书列表

  }, {
    key: 'getBooks',
    value: function getBooks(data) {
      var len = this.list.length;
      return this.getArray(data).map(function (book, index) {
        var xlen = len + index;
        // 拼接示例数据
        return {
          id: xlen,
          title: book.title,
          content: '\u7B80\u4ECB: \u5927\u5409\u5927\u5229\uFF0C\u4ECA\u665A\u5403\u9E21\u3002' + book.title + '\uFF1B' + book.title + '\u3002',
          image: _demo.funImages[(xlen + 4) % 8],
          tags: ['tag1', 'tag2'],
          status: xlen % 2,
          collected: 1
        };
      });
    }
  }]);

  return userCollect;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userCollect , 'pages/user/collect'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3QuanMiXSwibmFtZXMiOlsidXNlckNvbGxlY3QiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwiaWNvbl9zdGFyIiwicGFnZSIsInNpemUiLCJsaXN0Iiwibm9Nb3JlTGlzdCIsImxvYWRpbmciLCJsb2FkZWQiLCJtZXRob2RzIiwidG9JbmRleCIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQm9va0xpc3QiLCJpbml0UGFnZURhdGEiLCJzZXRUaW1lb3V0IiwidXBkYXRlQm9va0xpc3QiLCIkYXBwbHkiLCIkcG9zdCIsInNlcnZpY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRPYmplY3QiLCJwYXJhbXMiLCJ0eXBlIiwic3VjY2VzcyIsImNvZGUiLCJsZW5ndGgiLCJpc0FycmF5IiwiZ2V0Qm9va3MiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRlIiwibGVuIiwiZ2V0QXJyYXkiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJ4bGVuIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsImZ1bkltYWdlcyIsInRhZ3MiLCJzdGF0dXMiLCJjb2xsZWN0ZWQiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLCtCQUROO0FBRUxDLFlBQU0sQ0FGRDtBQUdMQyxZQUFNLENBSEQ7QUFJTEMsWUFBTSxFQUpE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LEtBQUtRLFFBQUwsQ0FBY3ZDLElBQWQsRUFBb0J3QyxHQUFwQixDQUF3QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDOUMsWUFBTUMsT0FBT0wsTUFBTUksS0FBbkI7QUFDQTtBQUNBLGVBQU87QUFDTEUsY0FBSUQsSUFEQztBQUVMRSxpQkFBT0osS0FBS0ksS0FGUDtBQUdMQyxrR0FBMEJMLEtBQUtJLEtBQS9CLGNBQXdDSixLQUFLSSxLQUE3QyxXQUhLO0FBSUxFLGlCQUFPQyxnQkFBVSxDQUFDTCxPQUFPLENBQVIsSUFBYSxDQUF2QixDQUpGO0FBS0xNLGdCQUFNLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FMRDtBQU1MQyxrQkFBUVAsT0FBTyxDQU5WO0FBT0xRLHFCQUFXO0FBUE4sU0FBUDtBQVNELE9BWk0sQ0FBUDtBQWFEOzs7O0VBekdzQ0MsZUFBS2xELEk7O2tCQUF6QlQsVyIsImZpbGUiOiJjb2xsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcuanMnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IHsgZnVuSW1hZ2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2RlbW8nXG4gIGltcG9ydCBCb29rTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Jvb2tMaXN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJDb2xsZWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pS26JeP5Zu+5LmmJyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBzaXplOiA1LFxuICAgICAgbGlzdDogW10sXG4gICAgICBub01vcmVMaXN0OiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9hZGVkOiBmYWxzZVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVCb29rTGlzdCh0aGlzLnBhZ2UpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgIH0sIDIwMClcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDliJ3lp4vljJblj4LmlbBcbiAgICAgIHRoaXMucGFnZSA9IDBcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLm5vTW9yZUxpc3QgPSBmYWxzZVxuXG4gICAgICAvLyDor7fmsYLmjqjojZDliJfooahcbiAgICAgIHRoaXMudXBkYXRlQm9va0xpc3QodGhpcy5wYWdlKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOWbvuS5puWIl+ihqFxuICAgIHVwZGF0ZUJvb2tMaXN0KHBhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgdGhpcy5ub01vcmVMaXN0KSByZXR1cm5cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIC8vIOaOqOiNkOWIl+ihqFxuICAgICAgdGhpcy4kcG9zdCh7XG4gICAgICAgIHVybDogc2VydmljZS5saXN0LFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldE9iamVjdCh0aGlzLnBhcmFtcyksIHtcbiAgICAgICAgICB0eXBlOiAnY29sbGVjdCcsXG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICBzaXplOiB0aGlzLnNpemVcbiAgICAgICAgfSlcbiAgICAgIH0sIHtcbiAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgIC8vIOekuuS+i+inhOWIme+8muacgOWkmjIw5pysXG4gICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOivt+axguWIsOepuuWIl+ihqOWQjuWwseiupOS4uuayoeacieabtOWkmuS6hlxuICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5aSE55CG5YiX6KGo5YWz57O7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2UgfHwgK3RoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRCb29rcyhkYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmt7vliqDliLDliJfooajkuK1cbiAgICAgICAgICAgIHRoaXMubGlzdCA9IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5saXN0LFxuICAgICAgICAgICAgICAuLi50aGlzLmdldEJvb2tzKGRhdGEpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOaIkOWKn+S6huWwseWinuWKoOS4gOmhtVxuICAgICAgICAgIHRoaXMucGFnZSArPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3VwZGF0ZUJvb2tMaXN0IGZhaWxdJywgY29kZSwgZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOWkhOeQhuWbvuS5puWIl+ihqFxuICAgIGdldEJvb2tzKGRhdGEpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGRhdGEpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeGxlbiA9IGxlbiArIGluZGV4XG4gICAgICAgIC8vIOaLvOaOpeekuuS+i+aVsOaNrlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB4bGVuLFxuICAgICAgICAgIHRpdGxlOiBib29rLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGDnroDku4s6IOWkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oeOAgiR7Ym9vay50aXRsZX3vvJske2Jvb2sudGl0bGV944CCYCxcbiAgICAgICAgICBpbWFnZTogZnVuSW1hZ2VzWyh4bGVuICsgNCkgJSA4XSxcbiAgICAgICAgICB0YWdzOiBbJ3RhZzEnLCAndGFnMiddLFxuICAgICAgICAgIHN0YXR1czogeGxlbiAlIDIsXG4gICAgICAgICAgY29sbGVjdGVkOiAxXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvSW5kZXgoKSB7XG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2luZGV4J30pXG4gICAgICB9XG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIkJvb2tMaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwiLFwidHlwZVwiOlwiY29sbGVjdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBCb29rTGlzdFxuICAgIH1cbiAgfVxuIl19