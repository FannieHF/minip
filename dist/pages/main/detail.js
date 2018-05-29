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

var _cart = require('./../../mixins/cart.js');

var _cart2 = _interopRequireDefault(_cart);

var _user = require('./../../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _demo = require('./../../mixins/demo.js');

var _swiper = require('./../../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _screen = require('./../../components/screen.js');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { service } from '../../config.js'


var mainDetail = function (_wepy$page) {
  _inherits(mainDetail, _wepy$page);

  function mainDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainDetail.__proto__ || Object.getPrototypeOf(mainDetail)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default, _cart2.default, _user2.default], _this.config = {
      navigationBarTitleText: '图书详情'
    }, _this.data = {
      img_banner: '/images/swiper.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png',
      icon_shelf: '/images/tabbars/icon-shelf@2x.png',
      navigate: false,
      book: {
        id: '1825',
        name: '假如生活欺骗了你',
        author: '普希金',
        tags: ['诗歌', '普希金'],
        pubtime: '1825年',
        pubcompany: '俄国',
        image: '',
        images: _demo.funImages.slice().map(function (item) {
          return { image: item };
        }),
        stock: 1,
        exist: 0,
        desc: [{ type: 'text', value: '示例tip：下拉本页，随机改变状态~' }, { type: 'image', value: '/images/swiper.png' }, { type: 'text', value: '假如生活欺骗了你，' }, { type: 'text', value: '不要悲伤，不要心急！' }, { type: 'text', value: '忧郁的日子里须要镇静：' }, { type: 'text', value: '相信吧，快乐的日子将会来临！' }, { type: 'text', value: '心儿永远向往着未来；' }, { type: 'text', value: '现在却常是忧郁。' }, { type: 'text', value: '一切都是瞬息，一切都将会过去；' }, { type: 'text', value: '而那过去了的，就会成为亲切的怀恋。' }]
      }
    }, _this.computed = {
      banners: function banners() {
        return this.getArray(this.book && this.book.images);
      },
      description: function description() {
        var desc = this.book && this.book.desc;
        return desc || [{
          type: 'text',
          value: '暂无图书简介'
        }];
      },
      isCollect: function isCollect() {
        return Boolean(this.book && +this.book.collected);
      },
      isEnabled: function isEnabled() {
        return Boolean(this.book && +this.book.stock > 0);
      }
    }, _this.methods = {
      toStar: function toStar() {
        // 将要发生的收藏动作
        var newType = this.isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';

        // 根据业务接口处理数据
        // this.$post({url: service.collect, data: {}}, {
        //   success: ({code, data}) => {},
        //   fail: ({code, data}) => {}
        // })

        // ===== 以下随机示例 =====
        // 重置本书收藏状态
        this.book.collected = newType;
        wx.showToast({
          title: newTypeText + '\u6536\u85CF\uFF01',
          icon: 'success',
          duration: 1000
        });
      },
      toBorrow: function toBorrow() {
        // 查看书架
        wx.switchTab({ url: '/pages/borrow' });
      },
      toAdd: function toAdd(book) {
        var _this2 = this;

        // 根据业务接口处理数据
        this.addCart({
          id: book.id,
          name: book.name,
          author: book.author
        }, function (_ref2) {
          var code = _ref2.code,
              message = _ref2.message;

          var exist = _this2.getObject(_this2.book).exist;
          // 匹配加车状态
          switch (+code) {
            case 0:
              {
                if (exist) {
                  // 存在本书时，引导查看书架
                  _this2.methods.toBorrow();
                } else {
                  // 不存在则提示添加成功
                  wx.showToast({
                    title: '添加到书架成功！',
                    icon: 'success',
                    duration: 1000
                  });
                  // 临时打标
                  _this2.book.exist = true;
                }
                break;
              }
            // 超出书架可添加的最大值
            case 1001:
              {
                if (message && !exist) {
                  // 不存在本书时，提示去书架删减其他书
                  wx.showModal({
                    title: '温馨提示',
                    content: message,
                    showCancel: false,
                    success: function success() {
                      _this2.methods.toBorrow();
                    }
                  });
                } else {
                  // 存在本书时，直接引导查看书架
                  _this2.methods.toBorrow();
                }
                break;
              }
            case 4001:
              ;
            case 9002:
              {
                // 去购买套餐
                wx.navigateTo({ url: '/pages/borrow/subscribe' });
                break;
              }
            default:
              {
                // 加车失败，提示
                _this2.$alert('异常提示', message || '暂时无法借阅');
              }
          }
        });
      }
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "banners", "height": "200", "v-bind:navigate.once": "navigate" }, "Screen": { "class": "fixed-bottom" } }, _this.$events = {}, _this.components = {
      Swiper: _swiper2.default,
      Screen: _screen2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainDetail, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var _this3 = this;

      var id = query && +query.id;
      var title = query && query.title;
      var author = query && query.author;
      var status = query && +query.status;

      // ======== 此处示例代码，方便示例展示 ========
      setTimeout(function () {
        _this3.book = Object.assign({}, _this3.book, {
          id: _this3.getString(id) || _this3.book.id,
          name: title || '假如生活欺骗了你',
          author: author || '普希金',
          stock: Math.abs((status || Math.round(Math.random())) - 1)
        });
        _this3.$apply();
      }, 1000);
    }
  }, {
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
      // 请求图书详情
      this.getDetail();
    }

    // 获取图书信息

  }, {
    key: 'getDetail',
    value: function getDetail() {
      var _this4 = this;

      // 根据业务接口处理数据
      // this.$get({url: `${service.detail}?id=${this.id}`}, {
      //   success: ({code, data}) => {},
      //   fail: ({code, data}) => {}
      // })

      // 获取书架状态，优化本页交互
      var ids = this.getCartList().filter(function (_ref3) {
        var good = _ref3.good;
        return good;
      }).map(function (_ref4) {
        var good = _ref4.good;
        return _this4.getString(good.id);
      });
      // 标识本商品已存在书架中
      if (ids.indexOf(this.getString(this.book.id)) > -1) {
        this.book.exist = 1;
      }
      // 切换展示库存: 0/1
      this.book.stock = Math.abs(this.book.stock - 1);

      // ===== 随机示例：借完 -> 已加 -> 可借 -> 借完~ =====
      // const stock = this.book.stock
      // const exist = this.book.exist
      // this.book.stock = exist
      // this.book.exist = (stock + exist) % 2

      // 停止下拉状态
      wx.stopPullDownRefresh();
    }
  }]);

  return mainDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainDetail , 'pages/main/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJtYWluRGV0YWlsIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjYXJ0IiwidXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW1nX2Jhbm5lciIsImljb25fc3RhciIsImljb25fc3Rhcl9hY3RpdmUiLCJpY29uX3NoZWxmIiwibmF2aWdhdGUiLCJib29rIiwiaWQiLCJuYW1lIiwiYXV0aG9yIiwidGFncyIsInB1YnRpbWUiLCJwdWJjb21wYW55IiwiaW1hZ2UiLCJpbWFnZXMiLCJmdW5JbWFnZXMiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJzdG9jayIsImV4aXN0IiwiZGVzYyIsInR5cGUiLCJ2YWx1ZSIsImNvbXB1dGVkIiwiYmFubmVycyIsImdldEFycmF5IiwiZGVzY3JpcHRpb24iLCJpc0NvbGxlY3QiLCJCb29sZWFuIiwiY29sbGVjdGVkIiwiaXNFbmFibGVkIiwibWV0aG9kcyIsInRvU3RhciIsIm5ld1R5cGUiLCJuZXdUeXBlVGV4dCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ0b0JvcnJvdyIsInN3aXRjaFRhYiIsInVybCIsInRvQWRkIiwiYWRkQ2FydCIsImNvZGUiLCJtZXNzYWdlIiwiZ2V0T2JqZWN0Iiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJzdWNjZXNzIiwibmF2aWdhdGVUbyIsIiRhbGVydCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlN3aXBlciIsIlNjcmVlbiIsInF1ZXJ5Iiwic3RhdHVzIiwic2V0VGltZW91dCIsIk9iamVjdCIsImFzc2lnbiIsImdldFN0cmluZyIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInJhbmRvbSIsIiRhcHBseSIsImluaXRQYWdlRGF0YSIsImdldERldGFpbCIsImlkcyIsImdldENhcnRMaXN0IiwiZmlsdGVyIiwiZ29vZCIsImluZGV4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QUFMLENBQVdGLEtBQUtHLE1BQUwsRUFBWCxDQUFYLElBQXdDLENBQWpEO0FBSmdDLFNBQTdCLENBQVo7QUFNQSxlQUFLQyxNQUFMO0FBQ0QsT0FSRCxFQVFHLElBUkg7QUFTRDs7OzZCQUVRO0FBQ1A7QUFDQSxXQUFLQyxZQUFMO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOztBQUVEOzs7O21DQUNlO0FBQ2I7QUFDQSxXQUFLQyxTQUFMO0FBQ0Q7O0FBRUQ7Ozs7Z0NBQ1k7QUFBQTs7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBTUMsTUFBTSxLQUFLQyxXQUFMLEdBQW1CQyxNQUFuQixDQUEwQjtBQUFBLFlBQUVDLElBQUYsU0FBRUEsSUFBRjtBQUFBLGVBQVlBLElBQVo7QUFBQSxPQUExQixFQUE0QzVELEdBQTVDLENBQWdEO0FBQUEsWUFBRTRELElBQUYsU0FBRUEsSUFBRjtBQUFBLGVBQVksT0FBS1gsU0FBTCxDQUFlVyxLQUFLdEUsRUFBcEIsQ0FBWjtBQUFBLE9BQWhELENBQVo7QUFDQTtBQUNBLFVBQUltRSxJQUFJSSxPQUFKLENBQVksS0FBS1osU0FBTCxDQUFlLEtBQUs1RCxJQUFMLENBQVVDLEVBQXpCLENBQVosSUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLRCxJQUFMLENBQVVjLEtBQVYsR0FBa0IsQ0FBbEI7QUFDRDtBQUNEO0FBQ0EsV0FBS2QsSUFBTCxDQUFVYSxLQUFWLEdBQWtCZ0QsS0FBS0MsR0FBTCxDQUFTLEtBQUs5RCxJQUFMLENBQVVhLEtBQVYsR0FBa0IsQ0FBM0IsQ0FBbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBaUIsU0FBRzJDLG1CQUFIO0FBQ0Q7Ozs7RUFwSHFDQyxlQUFLQyxJOztrQkFBeEJ6RixVIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi8uLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBjYXJ0IGZyb20gJy4uLy4uL21peGlucy9jYXJ0J1xuICBpbXBvcnQgdXNlciBmcm9tICcuLi8uLi9taXhpbnMvdXNlcidcbiAgaW1wb3J0IHsgZnVuSW1hZ2VzIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2RlbW8nXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zd2lwZXInXG4gIGltcG9ydCBTY3JlZW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zY3JlZW4nXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWFpbkRldGFpbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIGNhcnQsIHVzZXJdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WbvuS5puivpuaDhSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGltZ19iYW5uZXI6ICcvaW1hZ2VzL3N3aXBlci5wbmcnLFxuICAgICAgaWNvbl9zdGFyOiAnL2ltYWdlcy9pY29uL2ljb24tc3RhckAyeC5wbmcnLFxuICAgICAgaWNvbl9zdGFyX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXItYWN0aXZlQDJ4LnBuZycsXG4gICAgICBpY29uX3NoZWxmOiAnL2ltYWdlcy90YWJiYXJzL2ljb24tc2hlbGZAMngucG5nJyxcbiAgICAgIG5hdmlnYXRlOiBmYWxzZSxcbiAgICAgIGJvb2s6IHtcbiAgICAgICAgaWQ6ICcxODI1JyxcbiAgICAgICAgbmFtZTogJ+WBh+WmgueUn+a0u+asuumql+S6huS9oCcsXG4gICAgICAgIGF1dGhvcjogJ+aZruW4jOmHkScsXG4gICAgICAgIHRhZ3M6IFsn6K+X5q2MJywgJ+aZruW4jOmHkSddLFxuICAgICAgICBwdWJ0aW1lOiAnMTgyNeW5tCcsXG4gICAgICAgIHB1YmNvbXBhbnk6ICfkv4Tlm70nLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGltYWdlczogZnVuSW1hZ2VzLnNsaWNlKCkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGltYWdlOiBpdGVtIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN0b2NrOiAxLFxuICAgICAgICBleGlzdDogMCxcbiAgICAgICAgZGVzYzogW1xuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn56S65L6LdGlw77ya5LiL5ouJ5pys6aG177yM6ZqP5py65pS55Y+Y54q25oCBfid9LFxuICAgICAgICAgIHt0eXBlOiAnaW1hZ2UnLCB2YWx1ZTogJy9pbWFnZXMvc3dpcGVyLnBuZyd9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5YGH5aaC55Sf5rS75qy66aqX5LqG5L2g77yMJ30sXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfkuI3opoHmgrLkvKTvvIzkuI3opoHlv4PmgKXvvIEnfSxcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+W/p+mDgeeahOaXpeWtkOmHjOmhu+imgemVh+mdme+8mid9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn55u45L+h5ZCn77yM5b+r5LmQ55qE5pel5a2Q5bCG5Lya5p2l5Li077yBJ30sXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICflv4PlhL/msLjov5zlkJHlvoDnnYDmnKrmnaXvvJsnfSxcbiAgICAgICAgICB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJ+eOsOWcqOWNtOW4uOaYr+W/p+mDgeOAgid9LFxuICAgICAgICAgIHt0eXBlOiAndGV4dCcsIHZhbHVlOiAn5LiA5YiH6YO95piv556s5oGv77yM5LiA5YiH6YO95bCG5Lya6L+H5Y6777ybJ30sXG4gICAgICAgICAge3R5cGU6ICd0ZXh0JywgdmFsdWU6ICfogIzpgqPov4fljrvkuobnmoTvvIzlsLHkvJrmiJDkuLrkurLliIfnmoTmgIDmgYvjgIInfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBiYW5uZXJzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJyYXkodGhpcy5ib29rICYmIHRoaXMuYm9vay5pbWFnZXMpXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IGRlc2MgPSB0aGlzLmJvb2sgJiYgdGhpcy5ib29rLmRlc2NcbiAgICAgICAgcmV0dXJuIGRlc2MgfHwgW3tcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdmFsdWU6ICfmmoLml6Dlm77kuabnroDku4snXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgaXNDb2xsZWN0KCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJvb2sgJiYgK3RoaXMuYm9vay5jb2xsZWN0ZWQpXG4gICAgICB9LFxuICAgICAgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmJvb2sgJiYgK3RoaXMuYm9vay5zdG9jayA+IDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBpZCA9IHF1ZXJ5ICYmICtxdWVyeS5pZFxuICAgICAgY29uc3QgdGl0bGUgPSBxdWVyeSAmJiBxdWVyeS50aXRsZVxuICAgICAgY29uc3QgYXV0aG9yID0gcXVlcnkgJiYgcXVlcnkuYXV0aG9yXG4gICAgICBjb25zdCBzdGF0dXMgPSBxdWVyeSAmJiArcXVlcnkuc3RhdHVzXG5cbiAgICAgIC8vID09PT09PT09IOatpOWkhOekuuS+i+S7o+egge+8jOaWueS+v+ekuuS+i+WxleekuiA9PT09PT09PVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYm9vayA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYm9vaywge1xuICAgICAgICAgIGlkOiB0aGlzLmdldFN0cmluZyhpZCkgfHwgdGhpcy5ib29rLmlkLFxuICAgICAgICAgIG5hbWU6IHRpdGxlIHx8ICflgYflpoLnlJ/mtLvmrLrpqpfkuobkvaAnLFxuICAgICAgICAgIGF1dGhvcjogYXV0aG9yIHx8ICfmma7luIzph5EnLFxuICAgICAgICAgIHN0b2NrOiBNYXRoLmFicygoc3RhdHVzIHx8IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIC0gMSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICBpbml0UGFnZURhdGEoKSB7XG4gICAgICAvLyDor7fmsYLlm77kuabor6bmg4VcbiAgICAgIHRoaXMuZ2V0RGV0YWlsKClcbiAgICB9XG5cbiAgICAvLyDojrflj5blm77kuabkv6Hmga9cbiAgICBnZXREZXRhaWwoKSB7XG4gICAgICAvLyDmoLnmja7kuJrliqHmjqXlj6PlpITnkIbmlbDmja5cbiAgICAgIC8vIHRoaXMuJGdldCh7dXJsOiBgJHtzZXJ2aWNlLmRldGFpbH0/aWQ9JHt0aGlzLmlkfWB9LCB7XG4gICAgICAvLyAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHt9LFxuICAgICAgLy8gICBmYWlsOiAoe2NvZGUsIGRhdGF9KSA9PiB7fVxuICAgICAgLy8gfSlcblxuICAgICAgLy8g6I635Y+W5Lmm5p6254q25oCB77yM5LyY5YyW5pys6aG15Lqk5LqSXG4gICAgICBjb25zdCBpZHMgPSB0aGlzLmdldENhcnRMaXN0KCkuZmlsdGVyKCh7Z29vZH0pID0+IGdvb2QpLm1hcCgoe2dvb2R9KSA9PiB0aGlzLmdldFN0cmluZyhnb29kLmlkKSlcbiAgICAgIC8vIOagh+ivhuacrOWVhuWTgeW3suWtmOWcqOS5puaetuS4rVxuICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMuZ2V0U3RyaW5nKHRoaXMuYm9vay5pZCkpID4gLTEpIHtcbiAgICAgICAgdGhpcy5ib29rLmV4aXN0ID0gMVxuICAgICAgfVxuICAgICAgLy8g5YiH5o2i5bGV56S65bqT5a2YOiAwLzFcbiAgICAgIHRoaXMuYm9vay5zdG9jayA9IE1hdGguYWJzKHRoaXMuYm9vay5zdG9jayAtIDEpXG5cbiAgICAgIC8vID09PT09IOmaj+acuuekuuS+i++8muWAn+WujCAtPiDlt7LliqAgLT4g5Y+v5YCfIC0+IOWAn+WujH4gPT09PT1cbiAgICAgIC8vIGNvbnN0IHN0b2NrID0gdGhpcy5ib29rLnN0b2NrXG4gICAgICAvLyBjb25zdCBleGlzdCA9IHRoaXMuYm9vay5leGlzdFxuICAgICAgLy8gdGhpcy5ib29rLnN0b2NrID0gZXhpc3RcbiAgICAgIC8vIHRoaXMuYm9vay5leGlzdCA9IChzdG9jayArIGV4aXN0KSAlIDJcblxuICAgICAgLy8g5YGc5q2i5LiL5ouJ54q25oCBXG4gICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TdGFyKCkge1xuICAgICAgICAvLyDlsIbopoHlj5HnlJ/nmoTmlLbol4/liqjkvZxcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9IHRoaXMuaXNDb2xsZWN0ID8gMCA6IDFcbiAgICAgICAgY29uc3QgbmV3VHlwZVRleHQgPSBuZXdUeXBlID8gJ+a3u+WKoCcgOiAn5Y+W5raIJ1xuXG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhuaVsOaNrlxuICAgICAgICAvLyB0aGlzLiRwb3N0KHt1cmw6IHNlcnZpY2UuY29sbGVjdCwgZGF0YToge319LCB7XG4gICAgICAgIC8vICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge30sXG4gICAgICAgIC8vICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge31cbiAgICAgICAgLy8gfSlcblxuICAgICAgICAvLyA9PT09PSDku6XkuIvpmo/mnLrnpLrkvosgPT09PT1cbiAgICAgICAgLy8g6YeN572u5pys5Lmm5pS26JeP54q25oCBXG4gICAgICAgIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IGAke25ld1R5cGVUZXh0feaUtuiXj++8gWAsXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdG9Cb3Jyb3coKSB7XG4gICAgICAgIC8vIOafpeeci+S5puaetlxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDogJy9wYWdlcy9ib3Jyb3cnfSlcbiAgICAgIH0sXG4gICAgICB0b0FkZChib29rKSB7XG4gICAgICAgIC8vIOagueaNruS4muWKoeaOpeWPo+WkhOeQhuaVsOaNrlxuICAgICAgICB0aGlzLmFkZENhcnQoe1xuICAgICAgICAgIGlkOiBib29rLmlkLFxuICAgICAgICAgIG5hbWU6IGJvb2submFtZSxcbiAgICAgICAgICBhdXRob3I6IGJvb2suYXV0aG9yXG4gICAgICAgIH0sICh7Y29kZSwgbWVzc2FnZX0pID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdCA9IHRoaXMuZ2V0T2JqZWN0KHRoaXMuYm9vaykuZXhpc3RcbiAgICAgICAgICAvLyDljLnphY3liqDovabnirbmgIFcbiAgICAgICAgICBzd2l0Y2ggKCtjb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgaWYgKGV4aXN0KSB7XG4gICAgICAgICAgICAgICAgLy8g5a2Y5Zyo5pys5Lmm5pe277yM5byV5a+85p+l55yL5Lmm5p62XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnRvQm9ycm93KClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3lrZjlnKjliJnmj5DnpLrmt7vliqDmiJDlip9cbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDliLDkuabmnrbmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIOS4tOaXtuaJk+agh1xuICAgICAgICAgICAgICAgIHRoaXMuYm9vay5leGlzdCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6LaF5Ye65Lmm5p625Y+v5re75Yqg55qE5pyA5aSn5YC8XG4gICAgICAgICAgICBjYXNlIDEwMDE6IHtcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UgJiYgIWV4aXN0KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN5a2Y5Zyo5pys5Lmm5pe277yM5o+Q56S65Y675Lmm5p625Yig5YeP5YW25LuW5LmmXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnRvQm9ycm93KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWtmOWcqOacrOS5puaXtu+8jOebtOaOpeW8leWvvOafpeeci+S5puaetlxuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy50b0JvcnJvdygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNDAwMTogO1xuICAgICAgICAgICAgY2FzZSA5MDAyOiB7XG4gICAgICAgICAgICAgIC8vIOWOu+i0reS5sOWll+mkkFxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6ICcvcGFnZXMvYm9ycm93L3N1YnNjcmliZSd9KVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAvLyDliqDovablpLHotKXvvIzmj5DnpLpcbiAgICAgICAgICAgICAgdGhpcy4kYWxlcnQoJ+W8guW4uOaPkOekuicsIG1lc3NhZ2UgfHwgJ+aaguaXtuaXoOazleWAn+mYhScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTd2lwZXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiYmFubmVyc1wiLFwiaGVpZ2h0XCI6XCIyMDBcIixcInYtYmluZDpuYXZpZ2F0ZS5vbmNlXCI6XCJuYXZpZ2F0ZVwifSxcIlNjcmVlblwiOntcImNsYXNzXCI6XCJmaXhlZC1ib3R0b21cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU3dpcGVyLFxuICAgICAgU2NyZWVuXG4gICAgfVxuICB9XG4iXX0=