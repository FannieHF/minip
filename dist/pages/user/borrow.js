'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _demo = require('./../../mixins/demo.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userBorrow = function (_wepy$page) {
  _inherits(userBorrow, _wepy$page);

  function userBorrow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userBorrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userBorrow.__proto__ || Object.getPrototypeOf(userBorrow)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '我的借阅'
    }, _this.data = {
      loading: false,
      list: []
    }, _this.methods = {
      goReturn: function goReturn(id) {
        var str = this.getString(id);
        wx.navigateTo({ url: '/pages/user/return?id=' + str });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userBorrow, [{
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

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this2 = this;

      // 根据业务接口处理:获取最新个人信息并更新
      // if (this.loading) return
      // this.loading = true
      // this.$get({url: service.user}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })

      // =============== 随机示例 ===============
      this.$post({ url: _config.service.list }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          _this2.getBorrow(_this2.getArray(data));
        },
        fail: function fail(_ref3) {
          var code = _ref3.code,
              data = _ref3.data;

          console.log('[updateBookList fail]', code, data);
        }
      });
    }
  }, {
    key: 'getBorrow',


    // 处理借阅列表
    value: function getBorrow(books) {
      this.list = [{
        id: 12345,
        remain: 1,
        status: 2,
        statusText: '未发货',
        date: '2017-11-11',
        books: this.getBooks(books)
      }];
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
          image: _demo.funImages[(xlen + 4) % 8]
        };
      });
    }
  }]);

  return userBorrow;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userBorrow , 'pages/user/borrow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvdy5qcyJdLCJuYW1lcyI6WyJ1c2VyQm9ycm93IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImxvYWRpbmciLCJsaXN0IiwibWV0aG9kcyIsImdvUmV0dXJuIiwiaWQiLCJzdHIiLCJnZXRTdHJpbmciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJpbml0UGFnZURhdGEiLCIkcG9zdCIsInNlcnZpY2UiLCJzdWNjZXNzIiwiY29kZSIsImdldEJvcnJvdyIsImdldEFycmF5IiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJib29rcyIsInJlbWFpbiIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRlIiwiZ2V0Qm9va3MiLCJsZW4iLCJsZW5ndGgiLCJtYXAiLCJib29rIiwiaW5kZXgiLCJ4bGVuIiwidGl0bGUiLCJpbWFnZSIsImZ1bkltYWdlcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLEtBREo7QUFFTEMsWUFBTTtBQUZELEssUUFvQ1BDLE8sR0FBVTtBQUNSQyxjQURRLG9CQUNDQyxFQURELEVBQ0s7QUFDWCxZQUFNQyxNQUFNLEtBQUtDLFNBQUwsQ0FBZUYsRUFBZixDQUFaO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYyxFQUFDQyxnQ0FBOEJKLEdBQS9CLEVBQWQ7QUFDRDtBQUpPLEs7Ozs7OzZCQS9CRDtBQUNQO0FBQ0EsV0FBS0ssWUFBTDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7QUFFRDs7OzttQ0FDZTtBQUFBOztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFLQyxLQUFMLENBQVcsRUFBQ0YsS0FBS0csZ0JBQVFYLElBQWQsRUFBWCxFQUFnQztBQUM5QlksaUJBQVMsd0JBQWtCO0FBQUEsY0FBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGNBQVZmLElBQVUsU0FBVkEsSUFBVTs7QUFDekIsaUJBQUtnQixTQUFMLENBQWUsT0FBS0MsUUFBTCxDQUFjakIsSUFBZCxDQUFmO0FBQ0QsU0FINkI7QUFJOUJrQixjQUFNLHFCQUFrQjtBQUFBLGNBQWhCSCxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWZixJQUFVLFNBQVZBLElBQVU7O0FBQ3RCbUIsa0JBQVFDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0wsSUFBckMsRUFBMkNmLElBQTNDO0FBQ0Q7QUFONkIsT0FBaEM7QUFRRDs7Ozs7QUFTRDs4QkFDVXFCLEssRUFBTztBQUNmLFdBQUtuQixJQUFMLEdBQVksQ0FBQztBQUNYRyxZQUFJLEtBRE87QUFFWGlCLGdCQUFRLENBRkc7QUFHWEMsZ0JBQVEsQ0FIRztBQUlYQyxvQkFBWSxLQUpEO0FBS1hDLGNBQU0sWUFMSztBQU1YSixlQUFPLEtBQUtLLFFBQUwsQ0FBY0wsS0FBZDtBQU5JLE9BQUQsQ0FBWjtBQVFEOztBQUVEOzs7OzZCQUNTckIsSSxFQUFNO0FBQ2IsVUFBTTJCLE1BQU0sS0FBS3pCLElBQUwsQ0FBVTBCLE1BQXRCO0FBQ0EsYUFBTyxLQUFLWCxRQUFMLENBQWNqQixJQUFkLEVBQW9CNkIsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzlDLFlBQU1DLE9BQU9MLE1BQU1JLEtBQW5CO0FBQ0E7QUFDQSxlQUFPO0FBQ0wxQixjQUFJMkIsSUFEQztBQUVMQyxpQkFBT0gsS0FBS0csS0FGUDtBQUdMQyxpQkFBT0MsZ0JBQVUsQ0FBQ0gsT0FBTyxDQUFSLElBQWEsQ0FBdkI7QUFIRixTQUFQO0FBS0QsT0FSTSxDQUFQO0FBU0Q7Ozs7RUF4RXFDSSxlQUFLQyxJOztrQkFBeEIzQyxVIiwiZmlsZSI6ImJvcnJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCB7IGZ1bkltYWdlcyB9IGZyb20gJy4uLy4uL21peGlucy9kZW1vJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJCb3Jyb3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTlgJ/pmIUnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxpc3Q6IFtdXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuiOt+WPluacgOaWsOS4quS6uuS/oeaBr+W5tuabtOaWsFxuICAgICAgLy8gaWYgKHRoaXMubG9hZGluZykgcmV0dXJuXG4gICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS51c2VyfSwge1xuICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAvLyAgIGNvbXBsZXRlOiAoKSA9PiB7dGhpcy5sb2FkaW5nID0gZmFsc2V9XG4gICAgICAvLyB9KVxuXG4gICAgICAvLyA9PT09PT09PT09PT09PT0g6ZqP5py656S65L6LID09PT09PT09PT09PT09PVxuICAgICAgdGhpcy4kcG9zdCh7dXJsOiBzZXJ2aWNlLmxpc3R9LCB7XG4gICAgICAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICB0aGlzLmdldEJvcnJvdyh0aGlzLmdldEFycmF5KGRhdGEpKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1t1cGRhdGVCb29rTGlzdCBmYWlsXScsIGNvZGUsIGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGdvUmV0dXJuKGlkKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKGlkKVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6IGAvcGFnZXMvdXNlci9yZXR1cm4/aWQ9JHtzdHJ9YH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aSE55CG5YCf6ZiF5YiX6KGoXG4gICAgZ2V0Qm9ycm93KGJvb2tzKSB7XG4gICAgICB0aGlzLmxpc3QgPSBbe1xuICAgICAgICBpZDogMTIzNDUsXG4gICAgICAgIHJlbWFpbjogMSxcbiAgICAgICAgc3RhdHVzOiAyLFxuICAgICAgICBzdGF0dXNUZXh0OiAn5pyq5Y+R6LSnJyxcbiAgICAgICAgZGF0ZTogJzIwMTctMTEtMTEnLFxuICAgICAgICBib29rczogdGhpcy5nZXRCb29rcyhib29rcylcbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8g5aSE55CG5Zu+5Lmm5YiX6KGoXG4gICAgZ2V0Qm9va3MoZGF0YSkge1xuICAgICAgY29uc3QgbGVuID0gdGhpcy5saXN0Lmxlbmd0aFxuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJyYXkoZGF0YSkubWFwKChib29rLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB4bGVuID0gbGVuICsgaW5kZXhcbiAgICAgICAgLy8g5ou85o6l56S65L6L5pWw5o2uXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHhsZW4sXG4gICAgICAgICAgdGl0bGU6IGJvb2sudGl0bGUsXG4gICAgICAgICAgaW1hZ2U6IGZ1bkltYWdlc1soeGxlbiArIDQpICUgOF1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==