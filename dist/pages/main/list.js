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

var mainList = function (_wepy$page) {
  _inherits(mainList, _wepy$page);

  function mainList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainList.__proto__ || Object.getPrototypeOf(mainList)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '找书'
    }, _this.data = {
      params: {},

      noMoreList: false,
      loading: false,
      list: [],
      page: 0,
      size: 5
    }, _this.methods = {
      clearSearch: function clearSearch() {
        // 清空参数
        this.params = {};
        // 初始化页面
        this.initPageData();
      }
    }, _this.computed = {
      keywords: function keywords() {
        var title = this.params && this.params.title;
        var words = this.params && this.params.key_word;
        var keywords = this.getString(words || title).split(/\s+/g);
        return keywords.filter(function (item) {
          return item;
        }) || [];
      }
    }, _this.$repeat = {}, _this.$props = { "BookList": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      BookList: _bookList2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainList, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var params = query && query.params;
      try {
        params = JSON.parse(params);
      } catch (e) {
        params = {};
      }
      this.params = params;
    }
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPageData(this.page);
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
  }, {
    key: 'initPageData',


    // 初始化页面数据
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
          // 默认从0开始为第一页
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
          status: xlen % 2
        };
      });
    }
  }]);

  return mainList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainList , 'pages/main/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsibWFpbkxpc3QiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicGFyYW1zIiwibm9Nb3JlTGlzdCIsImxvYWRpbmciLCJsaXN0IiwicGFnZSIsInNpemUiLCJtZXRob2RzIiwiY2xlYXJTZWFyY2giLCJpbml0UGFnZURhdGEiLCJjb21wdXRlZCIsImtleXdvcmRzIiwidGl0bGUiLCJ3b3JkcyIsImtleV93b3JkIiwiZ2V0U3RyaW5nIiwic3BsaXQiLCJmaWx0ZXIiLCJpdGVtIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiQm9va0xpc3QiLCJxdWVyeSIsIkpTT04iLCJwYXJzZSIsImUiLCJzZXRUaW1lb3V0IiwidXBkYXRlQm9va0xpc3QiLCIkYXBwbHkiLCIkcG9zdCIsInVybCIsInNlcnZpY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRPYmplY3QiLCJzdWNjZXNzIiwiY29kZSIsImxlbmd0aCIsImlzQXJyYXkiLCJnZXRCb29rcyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJsZW4iLCJnZXRBcnJheSIsIm1hcCIsImJvb2siLCJpbmRleCIsInhsZW4iLCJpZCIsImNvbnRlbnQiLCJpbWFnZSIsImZ1bkltYWdlcyIsInRhZ3MiLCJzdGF0dXMiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxFQURIOztBQUdMQyxrQkFBWSxLQUhQO0FBSUxDLGVBQVMsS0FKSjtBQUtMQyxZQUFNLEVB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aW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcydcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uLy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgeyBmdW5JbWFnZXMgfSBmcm9tICcuLi8uLi9taXhpbnMvZGVtbydcbiAgaW1wb3J0IEJvb2tMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYm9va0xpc3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFpbkxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmib7kuaYnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBwYXJhbXM6IHt9LFxuXG4gICAgICBub01vcmVMaXN0OiBmYWxzZSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbGlzdDogW10sXG4gICAgICBwYWdlOiAwLFxuICAgICAgc2l6ZTogNVxuICAgIH1cblxuICAgIG9uTG9hZChxdWVyeSkge1xuICAgICAgbGV0IHBhcmFtcyA9IHF1ZXJ5ICYmIHF1ZXJ5LnBhcmFtc1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyYW1zID0gSlNPTi5wYXJzZShwYXJhbXMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHBhcmFtcyA9IHt9XG4gICAgICB9XG4gICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtc1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSh0aGlzLnBhZ2UpXG4gICAgfVxuXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tMaXN0KHRoaXMucGFnZSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMjAwKVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBjbGVhclNlYXJjaCgpIHtcbiAgICAgICAgLy8g5riF56m65Y+C5pWwXG4gICAgICAgIHRoaXMucGFyYW1zID0ge31cbiAgICAgICAgLy8g5Yid5aeL5YyW6aG16Z2iXG4gICAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGtleXdvcmRzKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyYW1zICYmIHRoaXMucGFyYW1zLnRpdGxlXG4gICAgICAgIGNvbnN0IHdvcmRzID0gdGhpcy5wYXJhbXMgJiYgdGhpcy5wYXJhbXMua2V5X3dvcmRcbiAgICAgICAgY29uc3Qga2V5d29yZHMgPSB0aGlzLmdldFN0cmluZyh3b3JkcyB8fCB0aXRsZSkuc3BsaXQoL1xccysvZylcbiAgICAgICAgcmV0dXJuIGtleXdvcmRzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSkgfHwgW11cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDliJ3lp4vljJblj4LmlbBcbiAgICAgIHRoaXMucGFnZSA9IDBcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLm5vTW9yZUxpc3QgPSBmYWxzZVxuXG4gICAgICAvLyDor7fmsYLmjqjojZDliJfooahcbiAgICAgIHRoaXMudXBkYXRlQm9va0xpc3QodGhpcy5wYWdlKVxuICAgIH1cblxuICAgIC8vIOabtOaWsOWbvuS5puWIl+ihqFxuICAgIHVwZGF0ZUJvb2tMaXN0KHBhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgfHwgdGhpcy5ub01vcmVMaXN0KSByZXR1cm5cbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIC8vIOaOqOiNkOWIl+ihqFxuICAgICAgdGhpcy4kcG9zdCh7XG4gICAgICAgIHVybDogc2VydmljZS5saXN0LFxuICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldE9iamVjdCh0aGlzLnBhcmFtcyksIHtcbiAgICAgICAgICAvLyDpu5jorqTku44w5byA5aeL5Li656ys5LiA6aG1XG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICBzaXplOiB0aGlzLnNpemVcbiAgICAgICAgfSlcbiAgICAgIH0sIHtcbiAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgIC8vIOekuuS+i+inhOWIme+8muacgOWkmjIw5pysXG4gICAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPj0gMjApIHtcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOivt+axguWIsOepuuWIl+ihqOWQjuWwseiupOS4uuayoeacieabtOWkmuS6hlxuICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9Nb3JlTGlzdCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLnBhZ2UgfHwgK3RoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5nZXRCb29rcyhkYXRhKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmt7vliqDliLDliJfooajkuK1cbiAgICAgICAgICAgIHRoaXMubGlzdCA9IFtcbiAgICAgICAgICAgICAgLi4udGhpcy5saXN0LFxuICAgICAgICAgICAgICAuLi50aGlzLmdldEJvb2tzKGRhdGEpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOaIkOWKn+S6huWwseWinuWKoOS4gOmhtVxuICAgICAgICAgIHRoaXMucGFnZSArPSAxXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3VwZGF0ZUJvb2tMaXN0IGZhaWxdJywgY29kZSwgZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIOWkhOeQhuWbvuS5puWIl+ihqFxuICAgIGdldEJvb2tzKGRhdGEpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHRoaXMubGlzdC5sZW5ndGhcbiAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KGRhdGEpLm1hcCgoYm9vaywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeGxlbiA9IGxlbiArIGluZGV4XG4gICAgICAgIC8vIOaLvOaOpeekuuS+i+aVsOaNrlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB4bGVuLFxuICAgICAgICAgIHRpdGxlOiBib29rLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQ6IGDnroDku4s6IOWkp+WQieWkp+WIqe+8jOS7iuaZmuWQg+m4oeOAgiR7Ym9vay50aXRsZX3vvJske2Jvb2sudGl0bGV944CCYCxcbiAgICAgICAgICBpbWFnZTogZnVuSW1hZ2VzWyh4bGVuICsgNCkgJSA4XSxcbiAgICAgICAgICB0YWdzOiBbJ3RhZzEnLCAndGFnMiddLFxuICAgICAgICAgIHN0YXR1czogeGxlbiAlIDJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiQm9va0xpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vTW9yZS5zeW5jXCI6XCJub01vcmVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIEJvb2tMaXN0XG4gICAgfVxuICB9XG4iXX0=