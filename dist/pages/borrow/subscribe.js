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

var _demo = require('./../../mixins/demo.js');

var _radioCard = require('./../../components/radioCard.js');

var _radioCard2 = _interopRequireDefault(_radioCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var borrowSubscribe = function (_wepy$page) {
  _inherits(borrowSubscribe, _wepy$page);

  function borrowSubscribe() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, borrowSubscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borrowSubscribe.__proto__ || Object.getPrototypeOf(borrowSubscribe)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default], _this.config = {
      navigationBarTitleText: '订阅套餐',
      enablePullDownRefresh: false
    }, _this.data = {
      // 手机号/验证码
      phone: '',
      code: '',

      loading: false,
      timer: null,
      time: 0,

      // 套餐值
      value: '1',
      // 套餐列表
      list: undefined
    }, _this.computed = {
      listIndex: function listIndex() {
        var _this2 = this;

        var arr = this.getArray((this.list || []).filter(function (item, index) {
          item.TEMPINDEX = index;
          return _this2.getString(_this2.value) === _this2.getString(item.id);
        }));
        var index = arr[0] && arr[0].TEMPINDEX;
        return this.getNumber(index);
      },
      realPrice: function realPrice() {
        var item = this.list && this.list[this.listIndex];
        var price = item && item.price;
        return price || 0;
      },
      btnText: function btnText() {
        return +this.time > 0 ? this.time + 's\u540E\u91CD\u65B0\u83B7\u53D6' : '获取验证码';
      }
    }, _this.methods = {
      pay: function pay() {
        var _this3 = this;

        // 防抖
        if (this.loading) return;
        if (!this.isPhone(this.phone)) {
          return this.$alert('温馨提示', '请输入正确的手机号码');
        }
        if (!this.getString(this.code)) {
          return this.$alert('温馨提示', '请输入验证码');
        }
        if (!this.getString(this.value)) {
          return this.$alert('温馨提示', '请选择订阅时长');
        }
        var data = {
          mobile: this.getString(this.phone),
          code: this.getString(this.code),
          pid: this.getString(this.value)
          // 开防抖
        };this.loading = true;
        // 调用登录
        this.$login(function (_ref2) {
          var code = _ref2.code;

          // 获取微信登录code，再提交套餐订单
          _this3.requestPayment(Object.assign({}, data, { weixin_code: code }));
        }, 'noAutoLogin');
      },
      typing: function typing(type, e) {
        if (this.isDefined(this[type])) {
          this[type] = e.detail.value;
        }
      },
      verify: function verify() {
        // 防抖
        if (this.loading || this.time > 0) return;
        if (!this.isPhone(this.phone)) {
          return this.$alert('温馨提示', '请输入正确的手机号码');
        }
        // 开防抖
        // this.loading = true
        // 开倒计时
        this.timing(60);

        // 根据业务接口处理:发送验证码
        // this.$post({url: service.sendCode, data}, {
        //   success: (res) => {},
        //   fail: (res) => {
        //     clearTimeout(this.timer)
        //     this.timing(0)
        //   },
        //   complete: () => {this.loading = false}
        // })
      }
    }, _this.$repeat = {}, _this.$props = { "radioCard": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:value.sync": "value", "key": "id" } }, _this.$events = {}, _this.components = {
      radioCard: _radioCard2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(borrowSubscribe, [{
    key: 'onLoad',
    value: function onLoad() {
      // 初始化页面数据
      this.initPageData();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 清空code
      this.code = '';
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
      var _this4 = this;

      // 根据业务接口处理数据:请求套餐详情
      // this.$get({url: service.packages}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })

      // ===== 以下随机示例 =====
      setTimeout(function () {
        _this4.list = _this4.getArray(_demo.packages);
        _this4.$getUserInfo(function (user) {
          _this4.phone = _this4.getString(_this4.getObject(user.identity).mobile);
        });
      }, 200);
    }
  }, {
    key: 'requestPayment',
    value: function requestPayment(data) {
      var _this5 = this;

      // 根据业务接口处理:创建交易单
      // this.loading = true
      // this.$post({url: service.pay, data}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {},
      //   complete: () => {this.loading = false}
      // })

      // ===================== 以下为success随机示例 =====================
      setTimeout(function () {
        var params = _this5.getObject({
          timeStamp: '',
          nonceStr: '',
          package: '',
          signType: '',
          paySign: ''
        });
        // 成功需要唤起支付
        wx.requestPayment(Object.assign({}, params, {
          success: function success(res) {
            wx.showModal({
              title: '支付提示',
              content: '支付成功！',
              showCancel: false,
              success: function success(res) {
                wx.switchTab({ url: '/pages/borrow' });
              }
            });
          },
          fail: function fail(res) {
            wx.showModal({
              title: '支付提示',
              // content: '支付失败，请重新尝试！',
              content: '示例没法做支付,就当成功了吧~',
              showCancel: false,
              success: function success(res) {
                // ============ 假装支付成功:需要更新状态 ============
                _this5.$parent.$updateGlobalData('user', {
                  packages: {
                    times: _this5.list[_this5.listIndex].times,
                    remain: _this5.list[_this5.listIndex].times,
                    quantity: _this5.list[_this5.listIndex].quantity,
                    status: '未借阅'
                  }
                });
                wx.navigateBack();
              }
            });
          },
          complete: function complete() {
            _this5.loading = false;
          }
        }));
      }, 100);
    }
  }, {
    key: 'timing',
    value: function timing(time) {
      var _this6 = this;

      this.time = this.getNumber(time);
      this.$apply();
      this.timer = setTimeout(function () {
        if (time > 0) {
          _this6.timing(time - 1);
        }
      }, 1000);
    }
  }]);

  return borrowSubscribe;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(borrowSubscribe , 'pages/borrow/subscribe'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5qcyJdLCJuYW1lcyI6WyJib3Jyb3dTdWJzY3JpYmUiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInVzZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInBob25lIiwiY29kZSIsImxvYWRpbmciLCJ0aW1lciIsInRpbWUiLCJ2YWx1ZSIsImxpc3QiLCJ1bmRlZmluZWQiLCJjb21wdXRlZCIsImxpc3RJbmRleCIsImFyciIsImdldEFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiVEVNUElOREVYIiwiZ2V0U3RyaW5nIiwiaWQiLCJnZXROdW1iZXIiLCJyZWFsUHJpY2UiLCJwcmljZSIsImJ0blRleHQiLCJtZXRob2RzIiwicGF5IiwiaXNQaG9uZSIsIiRhbGVydCIsIm1vYmlsZSIsInBpZCIsIiRsb2dpbiIsInJlcXVlc3RQYXltZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2VpeGluX2NvZGUiLCJ0eXBpbmciLCJ0eXBlIiwiZSIsImlzRGVmaW5lZCIsImRldGFpbCIsInZlcmlmeSIsInRpbWluZyIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInJhZGlvQ2FyZCIsImluaXRQYWdlRGF0YSIsInNldFRpbWVvdXQiLCJwYWNrYWdlcyIsIiRnZXRVc2VySW5mbyIsImdldE9iamVjdCIsImlkZW50aXR5IiwicGFyYW1zIiwidGltZVN0YW1wIiwibm9uY2VTdHIiLCJwYWNrYWdlIiwic2lnblR5cGUiLCJwYXlTaWduIiwid3giLCJzdWNjZXNzIiwicmVzIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInN3aXRjaFRhYiIsInVybCIsImZhaWwiLCIkcGFyZW50IiwiJHVwZGF0ZUdsb2JhbERhdGEiLCJ0aW1lcyIsInJlbWFpbiIsInF1YW50aXR5Iiwic3RhdHVzIiwibmF2aWdhdGVCYWNrIiwiY29t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U0FBZixFQUEwQjRELEtBRjFCO0FBR1JFLDhCQUFVLE9BQUtqRSxJQUFMLENBQVUsT0FBS0csU0FBZixFQUEwQjhELFFBSDVCO0FBSVJDLDRCQUFRO0FBSkE7QUFEMkIsaUJBQXZDO0FBUUFmLG1CQUFHZ0IsWUFBSDtBQUNEO0FBaEJVLGFBQWI7QUFrQkQsV0E1QnlDO0FBNkIxQ0Msb0JBQVUsb0JBQU07QUFBRSxtQkFBS3hFLE9BQUwsR0FBZSxLQUFmO0FBQXNCO0FBN0JFLFNBQTFCLENBQWxCO0FBK0JELE9BeENELEVBd0NHLEdBeENIO0FBeUNEOzs7MkJBRU1FLEksRUFBTTtBQUFBOztBQUNYLFdBQUtBLElBQUwsR0FBWSxLQUFLYyxTQUFMLENBQWVkLElBQWYsQ0FBWjtBQUNBLFdBQUt1RSxNQUFMO0FBQ0EsV0FBS3hFLEtBQUwsR0FBYTJDLFdBQVcsWUFBTTtBQUM1QixZQUFJMUMsT0FBTyxDQUFYLEVBQWM7QUFDWixpQkFBS21DLE1BQUwsQ0FBWW5DLE9BQU8sQ0FBbkI7QUFDRDtBQUNGLE9BSlksRUFJVixJQUpVLENBQWI7QUFLRDs7OztFQTFMMEN3RSxlQUFLQyxJOztrQkFBN0J0RixlIiwiZmlsZSI6InN1YnNjcmliZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJ1xuICBpbXBvcnQgeyBwYWNrYWdlcyB9IGZyb20gJy4uLy4uL21peGlucy9kZW1vJ1xuICBpbXBvcnQgcmFkaW9DYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW9DYXJkJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGJvcnJvd1N1YnNjcmliZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iuoumYheWll+mkkCcsXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IGZhbHNlXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICAvLyDmiYvmnLrlj7cv6aqM6K+B56CBXG4gICAgICBwaG9uZTogJycsXG4gICAgICBjb2RlOiAnJyxcblxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIHRpbWU6IDAsXG5cbiAgICAgIC8vIOWll+mkkOWAvFxuICAgICAgdmFsdWU6ICcxJyxcbiAgICAgIC8vIOWll+mkkOWIl+ihqFxuICAgICAgbGlzdDogdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaXN0SW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuZ2V0QXJyYXkoKHRoaXMubGlzdCB8fCBbXSkuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGl0ZW0uVEVNUElOREVYID0gaW5kZXhcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcodGhpcy52YWx1ZSkgPT09IHRoaXMuZ2V0U3RyaW5nKGl0ZW0uaWQpXG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCBpbmRleCA9IGFyclswXSAmJiBhcnJbMF0uVEVNUElOREVYXG4gICAgICAgIHJldHVybiB0aGlzLmdldE51bWJlcihpbmRleClcbiAgICAgIH0sXG4gICAgICByZWFsUHJpY2UoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmxpc3QgJiYgdGhpcy5saXN0W3RoaXMubGlzdEluZGV4XVxuICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0gJiYgaXRlbS5wcmljZVxuICAgICAgICByZXR1cm4gcHJpY2UgfHwgMFxuICAgICAgfSxcbiAgICAgIGJ0blRleHQoKSB7XG4gICAgICAgIHJldHVybiArdGhpcy50aW1lID4gMCA/IGAke3RoaXMudGltZX1z5ZCO6YeN5paw6I635Y+WYCA6ICfojrflj5bpqozor4HnoIEnXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgLy8g5Yid5aeL5YyW6aG16Z2i5pWw5o2uXG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g5riF56m6Y29kZVxuICAgICAgdGhpcy5jb2RlID0gJydcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIbmlbDmja466K+35rGC5aWX6aSQ6K+m5oOFXG4gICAgICAvLyB0aGlzLiRnZXQoe3VybDogc2VydmljZS5wYWNrYWdlc30sIHtcbiAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAvLyAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHt9XG4gICAgICAvLyB9KVxuXG4gICAgICAvLyA9PT09PSDku6XkuIvpmo/mnLrnpLrkvosgPT09PT1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldEFycmF5KHBhY2thZ2VzKVxuICAgICAgICB0aGlzLiRnZXRVc2VySW5mbygodXNlcikgPT4ge1xuICAgICAgICAgIHRoaXMucGhvbmUgPSB0aGlzLmdldFN0cmluZyh0aGlzLmdldE9iamVjdCh1c2VyLmlkZW50aXR5KS5tb2JpbGUpXG4gICAgICAgIH0pXG4gICAgICB9LCAyMDApXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHBheSgpIHtcbiAgICAgICAgLy8g6Ziy5oqWXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxuICAgICAgICBpZiAoIXRoaXMuaXNQaG9uZSh0aGlzLnBob25lKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggScpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdldFN0cmluZyh0aGlzLmNvZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGFsZXJ0KCfmuKnppqjmj5DnpLonLCAn6K+36L6T5YWl6aqM6K+B56CBJylcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ2V0U3RyaW5nKHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuJGFsZXJ0KCfmuKnppqjmj5DnpLonLCAn6K+36YCJ5oup6K6i6ZiF5pe26ZW/JylcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIG1vYmlsZTogdGhpcy5nZXRTdHJpbmcodGhpcy5waG9uZSksXG4gICAgICAgICAgY29kZTogdGhpcy5nZXRTdHJpbmcodGhpcy5jb2RlKSxcbiAgICAgICAgICBwaWQ6IHRoaXMuZ2V0U3RyaW5nKHRoaXMudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5byA6Ziy5oqWXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8g6LCD55So55m75b2VXG4gICAgICAgIHRoaXMuJGxvZ2luKCh7Y29kZX0pID0+IHtcbiAgICAgICAgICAvLyDojrflj5blvq7kv6HnmbvlvZVjb2Rl77yM5YaN5o+Q5Lqk5aWX6aSQ6K6i5Y2VXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0UGF5bWVudChPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7d2VpeGluX2NvZGU6IGNvZGV9KSlcbiAgICAgICAgfSwgJ25vQXV0b0xvZ2luJylcbiAgICAgIH0sXG4gICAgICB0eXBpbmcgKHR5cGUsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKHRoaXNbdHlwZV0pKSB7XG4gICAgICAgICAgdGhpc1t0eXBlXSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2ZXJpZnkoKSB7XG4gICAgICAgIC8vIOmYsuaKllxuICAgICAgICBpZiAodGhpcy5sb2FkaW5nIHx8IHRoaXMudGltZSA+IDApIHJldHVyblxuICAgICAgICBpZiAoIXRoaXMuaXNQaG9uZSh0aGlzLnBob25lKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggScpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5byA6Ziy5oqWXG4gICAgICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8g5byA5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltaW5nKDYwKVxuXG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhjrlj5HpgIHpqozor4HnoIFcbiAgICAgICAgLy8gdGhpcy4kcG9zdCh7dXJsOiBzZXJ2aWNlLnNlbmRDb2RlLCBkYXRhfSwge1xuICAgICAgICAvLyAgIHN1Y2Nlc3M6IChyZXMpID0+IHt9LFxuICAgICAgICAvLyAgIGZhaWw6IChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICAgICAgICAvLyAgICAgdGhpcy50aW1pbmcoMClcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyAgIGNvbXBsZXRlOiAoKSA9PiB7dGhpcy5sb2FkaW5nID0gZmFsc2V9XG4gICAgICAgIC8vIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdFBheW1lbnQgKGRhdGEpIHtcbiAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhjrliJvlu7rkuqTmmJPljZVcbiAgICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgIC8vIHRoaXMuJHBvc3Qoe3VybDogc2VydmljZS5wYXksIGRhdGF9LCB7XG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxuICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgIC8vICAgY29tcGxldGU6ICgpID0+IHt0aGlzLmxvYWRpbmcgPSBmYWxzZX1cbiAgICAgIC8vIH0pXG5cbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PSDku6XkuIvkuLpzdWNjZXNz6ZqP5py656S65L6LID09PT09PT09PT09PT09PT09PT09PVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0T2JqZWN0KHtcbiAgICAgICAgICB0aW1lU3RhbXA6ICcnLFxuICAgICAgICAgIG5vbmNlU3RyOiAnJyxcbiAgICAgICAgICBwYWNrYWdlOiAnJyxcbiAgICAgICAgICBzaWduVHlwZTogJycsXG4gICAgICAgICAgcGF5U2lnbjogJydcbiAgICAgICAgfSlcbiAgICAgICAgLy8g5oiQ5Yqf6ZyA6KaB5ZSk6LW35pSv5LuYXG4gICAgICAgIHd4LnJlcXVlc3RQYXltZW50KE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcywge1xuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgIHRpdGxlOiAn5pSv5LuY5o+Q56S6JyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+aUr+S7mOaIkOWKn++8gScsXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7IHd4LnN3aXRjaFRhYih7dXJsOiAnL3BhZ2VzL2JvcnJvdyd9KSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgdGl0bGU6ICfmlK/ku5jmj5DnpLonLFxuICAgICAgICAgICAgICAvLyBjb250ZW50OiAn5pSv5LuY5aSx6LSl77yM6K+36YeN5paw5bCd6K+V77yBJyxcbiAgICAgICAgICAgICAgY29udGVudDogJ+ekuuS+i+ayoeazleWBmuaUr+S7mCzlsLHlvZPmiJDlip/kuoblkKd+JyxcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT0g5YGH6KOF5pSv5LuY5oiQ5YqfOumcgOimgeabtOaWsOeKtuaAgSA9PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJHVwZGF0ZUdsb2JhbERhdGEoJ3VzZXInLCB7XG4gICAgICAgICAgICAgICAgICBwYWNrYWdlczoge1xuICAgICAgICAgICAgICAgICAgICB0aW1lczogdGhpcy5saXN0W3RoaXMubGlzdEluZGV4XS50aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluOiB0aGlzLmxpc3RbdGhpcy5saXN0SW5kZXhdLnRpbWVzLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogdGhpcy5saXN0W3RoaXMubGlzdEluZGV4XS5xdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAn5pyq5YCf6ZiFJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7IHRoaXMubG9hZGluZyA9IGZhbHNlIH1cbiAgICAgICAgfSkpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgdGltaW5nKHRpbWUpIHtcbiAgICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0TnVtYmVyKHRpbWUpXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgICAgIHRoaXMudGltaW5nKHRpbWUgLSAxKVxuICAgICAgICB9XG4gICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJyYWRpb0NhcmRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlXCIsXCJrZXlcIjpcImlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHJhZGlvQ2FyZFxuICAgIH1cbiAgfVxuIl19