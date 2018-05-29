'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../config.js'


var pageUser = function (_wepy$page) {
  _inherits(pageUser, _wepy$page);

  function pageUser() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageUser.__proto__ || Object.getPrototypeOf(pageUser)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '计划管理',
      enablePullDownRefresh: false
    }, _this.data = {
      userInfo: {
        nickName: '加载中...',
        // 头像占位图
        avatarUrl: '../images/icon/icon-avatar@2x.png'
      }
    }, _this.computed = {
      packages: function packages() {
        return this.getObject(this.getObject(this.userInfo).packages);
      },
      identity: function identity() {
        return this.getObject(this.getObject(this.userInfo).identity);
      },
      nickName: function nickName() {
        var info = this.getObject(this.userInfo);
        // 名称或头像不为空的，才认为是授权用户
        return info.nickName || info.avatarUrl ? info.nickName : '未授权用户';
      }
    }, _this.methods = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageUser, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化页面数据
      this.$getUserInfo(function (info) {
        var uinfo = _this2.getObject(info);
        var userInfo = _this2.getObject(_this2.userInfo);
        _this2.userInfo = Object.assign({}, userInfo, uinfo);
        _this2.initPageData();
      });
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
      // 根据业务接口处理:获取最新个人信息并更新
      // this.$get({url: service.user}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })
    }
  }]);

  return pageUser;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageUser , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsicGFnZVVzZXIiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJjb21wdXRlZCIsInBhY2thZ2VzIiwiZ2V0T2JqZWN0IiwiaWRlbnRpdHkiLCJpbmZvIiwibWV0aG9kcyIsImNvbXBvbmVudHMiLCIkZ2V0VXNlckluZm8iLCJ1aW5mbyIsIk9iamVjdCIsImFzc2lnbiIsImluaXRQYWdlRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0lBS3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsRUFBYUMsY0FBYixDLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVLFFBREY7QUFFUjtBQUNBQyxtQkFBVztBQUhIO0FBREwsSyxRQVFQQyxRLEdBQVc7QUFDVEMsY0FEUyxzQkFDRTtBQUNULGVBQU8sS0FBS0MsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLTCxRQUFwQixFQUE4QkksUUFBN0MsQ0FBUDtBQUNELE9BSFE7QUFJVEUsY0FKUyxzQkFJRTtBQUNULGVBQU8sS0FBS0QsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLTCxRQUFwQixFQUE4Qk0sUUFBN0MsQ0FBUDtBQUNELE9BTlE7QUFPVEwsY0FQUyxzQkFPRTtBQUNULFlBQU1NLE9BQU8sS0FBS0YsU0FBTCxDQUFlLEtBQUtMLFFBQXBCLENBQWI7QUFDQTtBQUNBLGVBQVFPLEtBQUtOLFFBQUwsSUFBaUJNLEtBQUtMLFNBQXZCLEdBQW9DSyxLQUFLTixRQUF6QyxHQUFvRCxPQUEzRDtBQUNEO0FBWFEsSyxRQXFDWE8sTyxHQUFVLEUsUUFHVkMsVSxHQUFhLEU7Ozs7OzZCQTFCSjtBQUFBOztBQUNQO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixVQUFDSCxJQUFELEVBQVU7QUFDMUIsWUFBTUksUUFBUSxPQUFLTixTQUFMLENBQWVFLElBQWYsQ0FBZDtBQUNBLFlBQU1QLFdBQVcsT0FBS0ssU0FBTCxDQUFlLE9BQUtMLFFBQXBCLENBQWpCO0FBQ0EsZUFBS0EsUUFBTCxHQUFnQlksT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JiLFFBQWxCLEVBQTRCVyxLQUE1QixDQUFoQjtBQUNBLGVBQUtHLFlBQUw7QUFDRCxPQUxEO0FBTUQ7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBakRtQ0MsZUFBS0MsSTs7a0JBQXRCekIsUSIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIC8vIGltcG9ydCB7IHNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuanMnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IHVzZXIgZnJvbSAnLi4vbWl4aW5zL3VzZXInXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZVVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqHliJLnrqHnkIYnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nLFxuICAgICAgICAvLyDlpLTlg4/ljaDkvY3lm75cbiAgICAgICAgYXZhdGFyVXJsOiAnLi4vaW1hZ2VzL2ljb24vaWNvbi1hdmF0YXJAMngucG5nJyxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHBhY2thZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykucGFja2FnZXMpXG4gICAgICB9LFxuICAgICAgaWRlbnRpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSlcbiAgICAgIH0sXG4gICAgICBuaWNrTmFtZSgpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMudXNlckluZm8pXG4gICAgICAgIC8vIOWQjeensOaIluWktOWDj+S4jeS4uuepuueahO+8jOaJjeiupOS4uuaYr+aOiOadg+eUqOaIt1xuICAgICAgICByZXR1cm4gKGluZm8ubmlja05hbWUgfHwgaW5mby5hdmF0YXJVcmwpID8gaW5mby5uaWNrTmFtZSA6ICfmnKrmjojmnYPnlKjmiLcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgICB0aGlzLiRnZXRVc2VySW5mbygoaW5mbykgPT4ge1xuICAgICAgICBjb25zdCB1aW5mbyA9IHRoaXMuZ2V0T2JqZWN0KGluZm8pXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gdGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbylcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHVzZXJJbmZvLCB1aW5mbylcbiAgICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY66I635Y+W5pyA5paw5Liq5Lq65L+h5oGv5bm25pu05pawXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS51c2VyfSwge1xuICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge31cbiAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgfVxuIl19