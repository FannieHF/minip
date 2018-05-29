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

var _cart = require('./../mixins/cart.js');

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../config.js'


var pageBorrow = function (_wepy$page) {
  _inherits(pageBorrow, _wepy$page);

  function pageBorrow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pageBorrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pageBorrow.__proto__ || Object.getPrototypeOf(pageBorrow)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _user2.default, _cart2.default], _this.config = {
      navigationBarTitleText: '书架',
      enablePullDownRefresh: false
    }, _this.data = {
      loaded: false,
      loading: false,
      // 列表/几本/几次
      borrowList: [],
      borrowCount: 0,
      borrowTime: 0,
      // 收件人信息
      receiver: '',
      address: '',
      phone: ''
    }, _this.computed = {
      showChooseAddress: function showChooseAddress() {
        return !!wx.chooseAddress;
      },
      canBorrow: function canBorrow() {
        return +this.borrowCount && +this.borrowTime;
      }
    }, _this.methods = {
      borrow: function borrow() {
        var _this2 = this;

        // 防抖
        if (this.loading) return;
        if (!this.isPhone(this.phone)) {
          return this.$alert('温馨提示', '请填写正确的手机号码');
        }
        if (this.isUndefined(this.address)) {
          return this.$alert('温馨提示', '请填写收货地址');
        }
        if (this.isUndefined(this.receiver)) {
          return this.$alert('温馨提示', '请填写收货人');
        }

        // 根据业务接口处理数据
        // this.loading = true
        // this.$post({url: service.borrow, data}, {
        //   success: ({code, data}) => {},
        //   fail: ({code, data}) => {},
        //   complete: () => {this.loading = false}
        // })

        // ===== 以下随机示例 =====
        setTimeout(function () {
          var random = Math.random() * 10;
          var res = {
            code: random < 3 ? 0 : random,
            message: '大吉大利 再试一次'

            // 提示成功/失败
          };wx.navigateTo({
            // type: 成功 = 0，失败 > 0，
            url: '/pages/borrow/result?type=' + _this2.getNumber(res.code) + '&message=' + res.message
          });
        }, 200);
      },
      chooseAddress: function chooseAddress() {
        var _this3 = this;

        wx.chooseAddress && wx.chooseAddress({
          success: function success(res) {
            var userName = res.userName,
                telNumber = res.telNumber,
                provinceName = res.provinceName,
                cityName = res.cityName,
                countyName = res.countyName,
                detailInfo = res.detailInfo,
                postalCode = res.postalCode;


            _this3.address = [provinceName, cityName, countyName, detailInfo, postalCode].join(' ');
            _this3.receiver = userName || _this3.receiver;
            _this3.phone = telNumber || _this3.phone;
            _this3.$apply();
          }
        });
      },
      remove: function remove(item) {
        var _this4 = this;

        this.removeCart(item, function () {
          _this4.updateBorrowList();
        });
      },
      toSubscribe: function toSubscribe() {
        wx.navigateTo({ url: '/pages/borrow/subscribe' });
      },
      goMain: function goMain() {
        wx.switchTab({ url: '/pages/index' });
      },
      typing: function typing(type, e) {
        if (this.isDefined(this[type])) {
          this[type] = e.detail.value;
        }
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pageBorrow, [{
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
      var _this5 = this;

      // 异步获取数据
      this.loading = true;
      this.$getUserInfo(function (data) {
        _this5.loaded = true;

        // 初始化收件人信息
        var identity = data.identity,
            packages = data.packages,
            nickName = data.nickName;

        _this5.phone = _this5.getString(_this5.phone || identity.mobile, '手机号码');
        _this5.address = _this5.getString(_this5.address || identity.address, '地址');
        _this5.receiver = _this5.getString(_this5.receiver || nickName, '用户');
        _this5.borrowTime = _this5.getNumber(_this5.borrowTime || packages.times, 1);
        _this5.borrowCount = _this5.getNumber(_this5.borrowCount || packages.quantity, 5);

        // 更新借阅列表
        _this5.updateBorrowList();
        _this5.loading = false;
      });
    }
  }, {
    key: 'updateBorrowList',
    value: function updateBorrowList() {
      var _this6 = this;

      if (!this.getNumber(this.borrowCount)) return;

      // 获取购物车信息
      this.getCartList(function (list) {
        var realist = _this6.getArray(list, []);
        var lenList = [];
        for (var i = 0; i < +_this6.borrowCount; i++) {
          lenList.push(realist[i] || {});
        }
        _this6.borrowList = lenList;
      });
    }
  }]);

  return pageBorrow;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pageBorrow , 'pages/borrow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvdy5qcyJdLCJuYW1lcyI6WyJwYWdlQm9ycm93IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwiY2FydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJkYXRhIiwibG9hZGVkIiwibG9hZGluZyIsImJvcnJvd0xpc3QiLCJib3Jyb3dDb3VudCIsImJvcnJvd1RpbWUiLCJyZWNlaXZlciIsImFkZHJlc3MiLCJwaG9uZSIsImNvbXB1dGVkIiwic2hvd0Nob29zZUFkZHJlc3MiLCJ3eCIsImNob29zZUFkZHJlc3MiLCJjYW5Cb3Jyb3ciLCJtZXRob2RzIiwiYm9ycm93IiwiaXNQaG9uZSIsIiRhbGVydCIsImlzVW5kZWZpbmVkIiwic2V0VGltZW91dCIsInJhbmRvbSIsIk1hdGgiLCJyZXMiLCJjb2RlIiwibWVzc2FnZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXROdW1iZXIiLCJzdWNjZXNzIiwidXNlck5hbWUiLCJ0ZWxOdW1iZXIiLCJwcm92aW5jZU5hbWUiLCJjaXR5TmFtZSIsImNvdW50eU5hbWUiLCJkZXRhaWxJbmZvIiwicG9zdGFsQ29kZSIsImpvaW4iLCIkYXBwbHkiLCJyZW1vdmUiLCJpdGVtIiwicmVtb3ZlQ2FydCIsInVwZGF0ZUJvcnJvd0xpc3QiLCJ0b1N1YnNjcmliZSIsImdvTWFpbiIsInN3aXRjaFRhYiIsInR5cGluZyIsInR5cGUiLCJlIiwiaXNEZWZpbmVkIiwiZGV0YWlsIiwidmFsdWUiLCJjb21wb25lbnRzIiwiaW5pdFBhZ2VEYXRhIiwiJGdldFVzZXJJbmZvIiwiaWRlbnRpdHkiLCJwYWNrYWdlcyIsIm5pY2tOYW1lIiwiZ2V0U3RyaW5nIiwibW9iaWxlIiwidGltZXMiLCJxdWFudGl0eSIsImdldENhcnRMaXN0IiwibGlzdCIsInJlYWxpc3QiLCJnZXRBcnJheSIsImxlbkxpc3QiLCJpIiwicHVzaCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoi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ICd3ZXB5J1xuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uL21peGlucy91c2VyJ1xuICBpbXBvcnQgY2FydCBmcm9tICcuLi9taXhpbnMvY2FydCdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwYWdlQm9ycm93IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cCwgdXNlciwgY2FydF1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lmm5p62JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIC8vIOWIl+ihqC/lh6DmnKwv5Yeg5qyhXG4gICAgICBib3Jyb3dMaXN0OiBbXSxcbiAgICAgIGJvcnJvd0NvdW50OiAwLFxuICAgICAgYm9ycm93VGltZTogMCxcbiAgICAgIC8vIOaUtuS7tuS6uuS/oeaBr1xuICAgICAgcmVjZWl2ZXI6ICcnLFxuICAgICAgYWRkcmVzczogJycsXG4gICAgICBwaG9uZTogJydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHNob3dDaG9vc2VBZGRyZXNzKCkge1xuICAgICAgICByZXR1cm4gISF3eC5jaG9vc2VBZGRyZXNzXG4gICAgICB9LFxuICAgICAgY2FuQm9ycm93KCkge1xuICAgICAgICByZXR1cm4gK3RoaXMuYm9ycm93Q291bnQgJiYgK3RoaXMuYm9ycm93VGltZVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cblxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxuICAgIGluaXRQYWdlRGF0YSgpIHtcbiAgICAgIC8vIOW8guatpeiOt+WPluaVsOaNrlxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgdGhpcy4kZ2V0VXNlckluZm8oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlXG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5pS25Lu25Lq65L+h5oGvXG4gICAgICAgIGNvbnN0IHsgaWRlbnRpdHksIHBhY2thZ2VzLCBuaWNrTmFtZSB9ID0gZGF0YVxuICAgICAgICB0aGlzLnBob25lID0gdGhpcy5nZXRTdHJpbmcodGhpcy5waG9uZSB8fCBpZGVudGl0eS5tb2JpbGUsICfmiYvmnLrlj7fnoIEnKVxuICAgICAgICB0aGlzLmFkZHJlc3MgPSB0aGlzLmdldFN0cmluZyh0aGlzLmFkZHJlc3MgfHwgaWRlbnRpdHkuYWRkcmVzcywgJ+WcsOWdgCcpXG4gICAgICAgIHRoaXMucmVjZWl2ZXIgPSB0aGlzLmdldFN0cmluZyh0aGlzLnJlY2VpdmVyIHx8IG5pY2tOYW1lLCAn55So5oi3JylcbiAgICAgICAgdGhpcy5ib3Jyb3dUaW1lID0gdGhpcy5nZXROdW1iZXIodGhpcy5ib3Jyb3dUaW1lIHx8IHBhY2thZ2VzLnRpbWVzLCAxKVxuICAgICAgICB0aGlzLmJvcnJvd0NvdW50ID0gdGhpcy5nZXROdW1iZXIodGhpcy5ib3Jyb3dDb3VudCB8fCBwYWNrYWdlcy5xdWFudGl0eSwgNSlcblxuICAgICAgICAvLyDmm7TmlrDlgJ/pmIXliJfooahcbiAgICAgICAgdGhpcy51cGRhdGVCb3Jyb3dMaXN0KClcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGJvcnJvdygpIHtcbiAgICAgICAgLy8g6Ziy5oqWXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxuICAgICAgICBpZiAoIXRoaXMuaXNQaG9uZSh0aGlzLnBob25lKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+Whq+WGmeato+ehrueahOaJi+acuuWPt+eggScpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5hZGRyZXNzKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLiRhbGVydCgn5rip6aao5o+Q56S6JywgJ+ivt+Whq+WGmeaUtui0p+WcsOWdgCcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5yZWNlaXZlcikpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kYWxlcnQoJ+a4qemmqOaPkOekuicsICfor7floavlhpnmlLbotKfkuronKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u5Lia5Yqh5o6l5Y+j5aSE55CG5pWw5o2uXG4gICAgICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgLy8gdGhpcy4kcG9zdCh7dXJsOiBzZXJ2aWNlLmJvcnJvdywgZGF0YX0sIHtcbiAgICAgICAgLy8gICBzdWNjZXNzOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fSxcbiAgICAgICAgLy8gICBjb21wbGV0ZTogKCkgPT4ge3RoaXMubG9hZGluZyA9IGZhbHNlfVxuICAgICAgICAvLyB9KVxuXG4gICAgICAgIC8vID09PT09IOS7peS4i+maj+acuuekuuS+iyA9PT09PVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTBcbiAgICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgICBjb2RlOiByYW5kb20gPCAzID8gMCA6IHJhbmRvbSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICflpKflkInlpKfliKkg5YaN6K+V5LiA5qyhJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIOaPkOekuuaIkOWKny/lpLHotKVcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIC8vIHR5cGU6IOaIkOWKnyA9IDDvvIzlpLHotKUgPiAw77yMXG4gICAgICAgICAgICB1cmw6IGAvcGFnZXMvYm9ycm93L3Jlc3VsdD90eXBlPSR7dGhpcy5nZXROdW1iZXIocmVzLmNvZGUpfSZtZXNzYWdlPSR7cmVzLm1lc3NhZ2V9YFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDIwMClcbiAgICAgIH0sXG4gICAgICBjaG9vc2VBZGRyZXNzKCkge1xuICAgICAgICB3eC5jaG9vc2VBZGRyZXNzICYmIHd4LmNob29zZUFkZHJlc3Moe1xuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgLy8g5pS26LSn5Lq65aeT5ZCNXG4gICAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgICAvLyDmiYvmnLrlj7dcbiAgICAgICAgICAgICAgdGVsTnVtYmVyLFxuICAgICAgICAgICAgICAvLyDlm73moIfmlLbotKflnLDlnYDnrKzkuIDnuqflnLDlnYBcbiAgICAgICAgICAgICAgcHJvdmluY2VOYW1lLFxuICAgICAgICAgICAgICAvLyDlm73moIfmlLbotKflnLDlnYDnrKzkuoznuqflnLDlnYBcbiAgICAgICAgICAgICAgY2l0eU5hbWUsXG4gICAgICAgICAgICAgIC8vIOWbveagh+aUtui0p+WcsOWdgOesrOS4iee6p+WcsOWdgFxuICAgICAgICAgICAgICBjb3VudHlOYW1lLFxuICAgICAgICAgICAgICAvLyDor6bnu4bmlLbotKflnLDlnYDkv6Hmga9cbiAgICAgICAgICAgICAgZGV0YWlsSW5mbyxcbiAgICAgICAgICAgICAgLy8g5pS26LSn5Zyw5Z2A5Zu95a6256CBXG4gICAgICAgICAgICAgIC8vIG5hdGlvbmFsQ29kZSxcbiAgICAgICAgICAgICAgLy8g6YKu57yWXG4gICAgICAgICAgICAgIHBvc3RhbENvZGVcbiAgICAgICAgICAgIH0gPSByZXNcblxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gW1xuICAgICAgICAgICAgICBwcm92aW5jZU5hbWUsXG4gICAgICAgICAgICAgIGNpdHlOYW1lLFxuICAgICAgICAgICAgICBjb3VudHlOYW1lLFxuICAgICAgICAgICAgICBkZXRhaWxJbmZvLFxuICAgICAgICAgICAgICBwb3N0YWxDb2RlXG4gICAgICAgICAgICBdLmpvaW4oJyAnKVxuICAgICAgICAgICAgdGhpcy5yZWNlaXZlciA9IHVzZXJOYW1lIHx8IHRoaXMucmVjZWl2ZXJcbiAgICAgICAgICAgIHRoaXMucGhvbmUgPSB0ZWxOdW1iZXIgfHwgdGhpcy5waG9uZVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICByZW1vdmUoaXRlbSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNhcnQoaXRlbSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlQm9ycm93TGlzdCgpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdG9TdWJzY3JpYmUoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDogJy9wYWdlcy9ib3Jyb3cvc3Vic2NyaWJlJ30pXG4gICAgICB9LFxuICAgICAgZ29NYWluKCkge1xuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9pbmRleCd9KVxuICAgICAgfSxcbiAgICAgIHR5cGluZyAodHlwZSwgZSkge1xuICAgICAgICBpZiAodGhpcy5pc0RlZmluZWQodGhpc1t0eXBlXSkpIHtcbiAgICAgICAgICB0aGlzW3R5cGVdID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUJvcnJvd0xpc3QoKSB7XG4gICAgICBpZiAoIXRoaXMuZ2V0TnVtYmVyKHRoaXMuYm9ycm93Q291bnQpKSByZXR1cm5cblxuICAgICAgLy8g6I635Y+W6LSt54mp6L2m5L+h5oGvXG4gICAgICB0aGlzLmdldENhcnRMaXN0KChsaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWxpc3QgPSB0aGlzLmdldEFycmF5KGxpc3QsIFtdKVxuICAgICAgICBjb25zdCBsZW5MaXN0ID0gW11cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCArdGhpcy5ib3Jyb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGVuTGlzdC5wdXNoKHJlYWxpc3RbaV0gfHwge30pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3Jyb3dMaXN0ID0gbGVuTGlzdFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRzID0ge1xuICAgIH1cbiAgfVxuIl19