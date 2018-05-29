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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var userReturn = function (_wepy$page) {
  _inherits(userReturn, _wepy$page);

  function userReturn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userReturn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userReturn.__proto__ || Object.getPrototypeOf(userReturn)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '立即还书',
      enablePullDownRefresh: false
    }, _this.data = {
      id: '',
      express_co: '道是无晴却有晴',
      express_id: '',
      address: '年年岁岁花相似 岁岁年年人不同',
      loading: false
    }, _this.methods = {
      doReturn: function doReturn() {
        if (!this.getString(this.express_co)) {
          return this.$alert('温馨提示', '请输入快递公司');
        }
        if (!this.getString(this.express_id)) {
          return this.$alert('温馨提示', '请输入快递单号');
        }

        // 根据业务接口处理:提交信息
        // if (this.loading) return
        // this.loading = true
        // this.$post({url: service.return, data}, {
        //   success: ({code, data}) => {},
        //   fail: ({code, data}) => {},
        //   complete: () => {this.loading = false}
        // })

        // =============== 随机示例 ===============
        wx.showToast({ title: '提交成功！', icon: 'success', duration: 1000 });
        setTimeout(wx.navigateBack, 1000);
      },
      typing: function typing(type, e) {
        var key = 'express_' + type;
        if (this.isDefined(this[key])) {
          this[key] = e.detail.value;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userReturn, [{
    key: 'onLoad',
    value: function onLoad(query) {
      this.id = this.getString(query && +query.id);
    }
  }, {
    key: 'onReady',
    value: function onReady() {
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
      // 根据业务接口处理:请求邮寄地址
      // if (this.loading) return
      // this.loading = true
      // this.$get({url: service.express}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })
    }
  }]);

  return userReturn;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(userReturn , 'pages/user/return'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldHVybi5qcyJdLCJuYW1lcyI6WyJ1c2VyUmV0dXJuIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsImlkIiwiZXhwcmVzc19jbyIsImV4cHJlc3NfaWQiLCJhZGRyZXNzIiwibG9hZGluZyIsIm1ldGhvZHMiLCJkb1JldHVybiIsImdldFN0cmluZyIsIiRhbGVydCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwidHlwaW5nIiwidHlwZSIsImUiLCJrZXkiLCJpc0RlZmluZWQiLCJkZXRhaWwiLCJ2YWx1ZSIsInF1ZXJ5IiwiaW5pdFBhZ2VEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTs7O0lBSXFCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxVQUFJLEVBREM7QUFFTEMsa0JBQVksU0FGUDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLGVBQVMsaUJBSko7QUFLTEMsZUFBUztBQUxKLEssUUFpQ1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsWUFBSSxDQUFDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLTixVQUFwQixDQUFMLEVBQXNDO0FBQ3BDLGlCQUFPLEtBQUtPLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCLENBQVA7QUFDRDtBQUNELFlBQUksQ0FBQyxLQUFLRCxTQUFMLENBQWUsS0FBS0wsVUFBcEIsQ0FBTCxFQUFzQztBQUNwQyxpQkFBTyxLQUFLTSxNQUFMLENBQVksTUFBWixFQUFvQixTQUFwQixDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBQyxXQUFHQyxTQUFILENBQWEsRUFBQ0MsT0FBTyxPQUFSLEVBQWlCQyxNQUFNLFNBQXZCLEVBQWtDQyxVQUFVLElBQTVDLEVBQWI7QUFDQUMsbUJBQVdMLEdBQUdNLFlBQWQsRUFBNEIsSUFBNUI7QUFDRCxPQXJCTztBQXNCUkMsWUF0QlEsa0JBc0JBQyxJQXRCQSxFQXNCTUMsQ0F0Qk4sRUFzQlM7QUFDZixZQUFNQyxtQkFBaUJGLElBQXZCO0FBQ0EsWUFBSSxLQUFLRyxTQUFMLENBQWUsS0FBS0QsR0FBTCxDQUFmLENBQUosRUFBK0I7QUFDN0IsZUFBS0EsR0FBTCxJQUFZRCxFQUFFRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0Q7QUFDRjtBQTNCTyxLOzs7OzsyQkF6QkhDLEssRUFBTztBQUNaLFdBQUt2QixFQUFMLEdBQVUsS0FBS08sU0FBTCxDQUFlZ0IsU0FBUyxDQUFDQSxNQUFNdkIsRUFBL0IsQ0FBVjtBQUNEOzs7OEJBRVM7QUFDUjtBQUNBLFdBQUt3QixZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBckNxQ0MsZUFBS0MsSTs7a0JBQXhCbEMsVSIsImZpbGUiOiJyZXR1cm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gaW1wb3J0IHsgc2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy5qcydcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uLy4uL21peGlucy9iYXNlJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJSZXR1cm4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnq4vljbPov5jkuaYnLFxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiBmYWxzZVxuICAgIH1cbiAgICBkYXRhID0ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgZXhwcmVzc19jbzogJ+mBk+aYr+aXoOaZtOWNtOacieaZtCcsXG4gICAgICBleHByZXNzX2lkOiAnJyxcbiAgICAgIGFkZHJlc3M6ICflubTlubTlsoHlsoHoirHnm7jkvLwg5bKB5bKB5bm05bm05Lq65LiN5ZCMJyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuXG4gICAgb25Mb2FkKHF1ZXJ5KSB7XG4gICAgICB0aGlzLmlkID0gdGhpcy5nZXRTdHJpbmcocXVlcnkgJiYgK3F1ZXJ5LmlkKVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY66K+35rGC6YKu5a+E5Zyw5Z2AXG4gICAgICAvLyBpZiAodGhpcy5sb2FkaW5nKSByZXR1cm5cbiAgICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIC8vIHRoaXMuJGdldCh7dXJsOiBzZXJ2aWNlLmV4cHJlc3N9LCB7XG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxuICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cbiAgICAgIC8vIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGRvUmV0dXJuKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0U3RyaW5nKHRoaXMuZXhwcmVzc19jbykpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+a4qemmqOaPkOekuicsICfor7fovpPlhaXlv6vpgJLlhazlj7gnKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5nZXRTdHJpbmcodGhpcy5leHByZXNzX2lkKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+i+k+WFpeW/q+mAkuWNleWPtycpXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIY65o+Q5Lqk5L+h5oGvXG4gICAgICAgIC8vIGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxuICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgIC8vIHRoaXMuJHBvc3Qoe3VybDogc2VydmljZS5yZXR1cm4sIGRhdGF9LCB7XG4gICAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyA9PT09PT09PT09PT09PT0g6ZqP5py656S65L6LID09PT09PT09PT09PT09PVxuICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5o+Q5Lqk5oiQ5Yqf77yBJywgaWNvbjogJ3N1Y2Nlc3MnLCBkdXJhdGlvbjogMTAwMH0pXG4gICAgICAgIHNldFRpbWVvdXQod3gubmF2aWdhdGVCYWNrLCAxMDAwKVxuICAgICAgfSxcbiAgICAgIHR5cGluZyAodHlwZSwgZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBgZXhwcmVzc18ke3R5cGV9YFxuICAgICAgICBpZiAodGhpcy5pc0RlZmluZWQodGhpc1trZXldKSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==