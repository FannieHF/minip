'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var userSubscribe = function (_wepy$page) {
  _inherits(userSubscribe, _wepy$page);

  function userSubscribe() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userSubscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userSubscribe.__proto__ || Object.getPrototypeOf(userSubscribe)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '我的订阅'
    }, _this.data = {
      // 后置显示按钮
      loaded: false,
      // 面板数据
      list: [{
        key: 'remain',
        unit: '天',
        value: 0,
        title: '0天',
        subtitle: '剩余天数'
      }, {
        key: 'times',
        unit: '次',
        value: 0,
        title: '0次',
        subtitle: '可借'
      }, {
        key: 'quantity',
        unit: '本',
        value: 0,
        title: '0本',
        subtitle: '每次可借'
      }]
    }, _this.computed = {
      isShowBtn: function isShowBtn() {
        var _this2 = this;

        return !this.list.reduce(function (pre, post) {
          return (_this2.isObject(pre) ? pre.value : pre) && !!post.value;
        });
      }
    }, _this.methods = {
      change: function change() {
        wx.navigateTo({
          url: '/pages/borrow/subscribe'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userSubscribe, [{
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
      var _this3 = this;

      // 根据业务接口处理:请求套餐详情
      // this.$get({url: service.package}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loaded = false}
      // })

      // =============== 随机示例 ===============
      this.$getUserInfo(function (_ref2) {
        var packages = _ref2.packages;

        var list = _this3.getArray(_this3.list);
        list.map(function (obj) {
          var item = _this3.getObject(obj);
          var unit = _this3.getString(item.unit);
          var value = _this3.getNumber(packages[item.key], null);
          value && Object.assign(item, {
            title: '' + value + unit,
            value: value
          });
          return item;
        });
        _this3.list = list;
        _this3.loaded = true;
      });
    }
  }]);

  return userSubscribe;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userSubscribe , 'pages/user/subscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5qcyJdLCJuYW1lcyI6WyJ1c2VyU3Vic2NyaWJlIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsb2FkZWQiLCJsaXN0Iiwia2V5IiwidW5pdCIsInZhbHVlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImNvbXB1dGVkIiwiaXNTaG93QnRuIiwicmVkdWNlIiwicHJlIiwicG9zdCIsImlzT2JqZWN0IiwibWV0aG9kcyIsImNoYW5nZSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImluaXRQYWdlRGF0YSIsIiRnZXRVc2VySW5mbyIsInBhY2thZ2VzIiwiZ2V0QXJyYXkiLCJtYXAiLCJvYmoiLCJpdGVtIiwiZ2V0T2JqZWN0IiwiZ2V0U3RyaW5nIiwiZ2V0TnVtYmVyIiwiT2JqZWN0IiwiYXNzaWduIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUhBOzs7SUFLcUJBLGE7Ozs7Ozs7Ozs7Ozs7O29NQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxFQUFhQyxjQUFiLEMsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLGNBQVEsS0FGSDtBQUdMO0FBQ0FDLFlBQU0sQ0FBQztBQUNMQyxhQUFLLFFBREE7QUFFTEMsY0FBTSxHQUZEO0FBR0xDLGVBQU8sQ0FIRjtBQUlMQyxlQUFPLElBSkY7QUFLTEMsa0JBQVU7QUFMTCxPQUFELEVBTUg7QUFDREosYUFBSyxPQURKO0FBRURDLGNBQU0sR0FGTDtBQUdEQyxlQUFPLENBSE47QUFJREMsZUFBTyxJQUpOO0FBS0RDLGtCQUFVO0FBTFQsT0FORyxFQVlIO0FBQ0RKLGFBQUssVUFESjtBQUVEQyxjQUFNLEdBRkw7QUFHREMsZUFBTyxDQUhOO0FBSURDLGVBQU8sSUFKTjtBQUtEQyxrQkFBVTtBQUxULE9BWkc7QUFKRCxLLFFBeUJQQyxRLEdBQVc7QUFDVEMsZUFEUyx1QkFDRztBQUFBOztBQUNWLGVBQU8sQ0FBQyxLQUFLUCxJQUFMLENBQVVRLE1BQVYsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDdEMsaUJBQU8sQ0FBQyxPQUFLQyxRQUFMLENBQWNGLEdBQWQsSUFBcUJBLElBQUlOLEtBQXpCLEdBQWlDTSxHQUFsQyxLQUEwQyxDQUFDLENBQUNDLEtBQUtQLEtBQXhEO0FBQ0QsU0FGTyxDQUFSO0FBR0Q7QUFMUSxLLFFBNENYUyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQUxPLEs7Ozs7OzZCQXBDRDtBQUNQO0FBQ0EsV0FBS0MsWUFBTDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7QUFFRDs7OzttQ0FDZTtBQUFBOztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsaUJBQWdCO0FBQUEsWUFBZEMsUUFBYyxTQUFkQSxRQUFjOztBQUNoQyxZQUFNbkIsT0FBTyxPQUFLb0IsUUFBTCxDQUFjLE9BQUtwQixJQUFuQixDQUFiO0FBQ0FBLGFBQUtxQixHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGNBQU1DLE9BQU8sT0FBS0MsU0FBTCxDQUFlRixHQUFmLENBQWI7QUFDQSxjQUFNcEIsT0FBTyxPQUFLdUIsU0FBTCxDQUFlRixLQUFLckIsSUFBcEIsQ0FBYjtBQUNBLGNBQU1DLFFBQVEsT0FBS3VCLFNBQUwsQ0FBZVAsU0FBU0ksS0FBS3RCLEdBQWQsQ0FBZixFQUFtQyxJQUFuQyxDQUFkO0FBQ0FFLG1CQUFTd0IsT0FBT0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0FBQzNCbkIsd0JBQVVELEtBQVYsR0FBa0JELElBRFM7QUFFM0JDLG1CQUFPQTtBQUZvQixXQUFwQixDQUFUO0FBSUEsaUJBQU9vQixJQUFQO0FBQ0QsU0FURDtBQVVBLGVBQUt2QixJQUFMLEdBQVlBLElBQVo7QUFDQSxlQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNELE9BZEQ7QUFlRDs7OztFQXhFd0M4QixlQUFLQyxJOztrQkFBM0J2QyxhIiwiZmlsZSI6InN1YnNjcmliZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJTdWJzY3JpYmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTorqLpmIUnXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAvLyDlkI7nva7mmL7npLrmjInpkq5cbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAvLyDpnaLmnb/mlbDmja5cbiAgICAgIGxpc3Q6IFt7XG4gICAgICAgIGtleTogJ3JlbWFpbicsXG4gICAgICAgIHVuaXQ6ICflpKknLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgdGl0bGU6ICcw5aSpJyxcbiAgICAgICAgc3VidGl0bGU6ICfliankvZnlpKnmlbAnXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3RpbWVzJyxcbiAgICAgICAgdW5pdDogJ+asoScsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICB0aXRsZTogJzDmrKEnLFxuICAgICAgICBzdWJ0aXRsZTogJ+WPr+WAnydcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncXVhbnRpdHknLFxuICAgICAgICB1bml0OiAn5pysJyxcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIHRpdGxlOiAnMOacrCcsXG4gICAgICAgIHN1YnRpdGxlOiAn5q+P5qyh5Y+v5YCfJ1xuICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzU2hvd0J0bigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxpc3QucmVkdWNlKChwcmUsIHBvc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gKHRoaXMuaXNPYmplY3QocHJlKSA/IHByZS52YWx1ZSA6IHByZSkgJiYgISFwb3N0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgaW5pdFBhZ2VEYXRhKCkge1xuICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CGOuivt+axguWll+mkkOivpuaDhVxuICAgICAgLy8gdGhpcy4kZ2V0KHt1cmw6IHNlcnZpY2UucGFja2FnZX0sIHtcbiAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxuICAgICAgLy8gICBjb21wbGV0ZTogKCkgPT4ge3RoaXMubG9hZGVkID0gZmFsc2V9XG4gICAgICAvLyB9KVxuXG4gICAgICAvLyA9PT09PT09PT09PT09PT0g6ZqP5py656S65L6LID09PT09PT09PT09PT09PVxuICAgICAgdGhpcy4kZ2V0VXNlckluZm8oKHtwYWNrYWdlc30pID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0QXJyYXkodGhpcy5saXN0KVxuICAgICAgICBsaXN0Lm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0T2JqZWN0KG9iailcbiAgICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5nZXRTdHJpbmcoaXRlbS51bml0KVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXROdW1iZXIocGFja2FnZXNbaXRlbS5rZXldLCBudWxsKVxuICAgICAgICAgIHZhbHVlICYmIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgdGl0bGU6IGAke3ZhbHVlfSR7dW5pdH1gLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvYm9ycm93L3N1YnNjcmliZSdcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==