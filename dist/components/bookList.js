'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookList = function (_wepy$component) {
  _inherits(BookList, _wepy$component);

  function BookList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BookList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BookList.__proto__ || Object.getPrototypeOf(BookList)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      title: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      },
      noMore: {
        type: Boolean,
        default: false
      },
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
      }
    }, _this.data = {
      icon_eye: '/images/icon/icon-eye@2x.png',
      icon_eye_active: '/images/icon/icon-eye-active@2x.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      toStar: function toStar(book, index) {
        var _this2 = this;

        // 将要发生的收藏动作
        var isCollect = Boolean(book && +book.collected);
        var newType = isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';
        // 收藏本书
        this.$post({
          url: _config.service.collect,
          data: {
            book_ids: [book.id],
            type: newType
          }
        }, {
          success: function success(_ref2) {
            var code = _ref2.code,
                data = _ref2.data;

            // 重置本书收藏状态
            if (_this2.isObject(_this2.list[index])) {
              _this2.list[index].collected = newType;
            }
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\uFF01',
              icon: 'success',
              duration: 1000
            });
          },
          fail: function fail(_ref3) {
            var code = _ref3.code,
                data = _ref3.data;

            // =============================== 调试代码 ===============================
            // this.book.collected = newType
            // =============================== 调试代码 ===============================
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\u5931\u8D25\uFF01',
              icon: 'loading',
              image: '/images/icon/icon-cancel.png',
              duration: 1000
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return BookList;
}(_wepy2.default.component);

exports.default = BookList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tMaXN0LmpzIl0sIm5hbWVzIjpbIkJvb2tMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsInRpdGxlIiwiU3RyaW5nIiwibG9hZGluZyIsIkJvb2xlYW4iLCJub01vcmUiLCJkYXRhIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInRvU3RhciIsImJvb2siLCJpbmRleCIsImlzQ29sbGVjdCIsImNvbGxlY3RlZCIsIm5ld1R5cGUiLCJuZXdUeXBlVGV4dCIsIiRwb3N0IiwidXJsIiwic2VydmljZSIsImNvbGxlY3QiLCJib29rX2lkcyIsImlkIiwic3VjY2VzcyIsImNvZGUiLCJpc09iamVjdCIsInd4Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiZmFpbCIsImltYWdlIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEVBQU9DLGNBQVAsQyxRQUNUQyxLLEdBQVE7QUFDTkMsWUFBTTtBQUNKQyxjQUFNQyxNQURGO0FBRUpDLGlCQUFTO0FBRkwsT0FEQTtBQUtOQyxhQUFPO0FBQ0xILGNBQU1JLE1BREQ7QUFFTEYsaUJBQVM7QUFGSixPQUxEO0FBU05HLGVBQVM7QUFDUEwsY0FBTU0sT0FEQztBQUVQSixpQkFBUztBQUZGLE9BVEg7QUFhTkssY0FBUTtBQUNOUCxjQUFNTSxPQURBO0FBRU5KLGlCQUFTO0FBRkgsT0FiRjtBQWlCTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1JLE1BREY7QUFFSkYsaUJBQVM7QUFGTDtBQXJCQSxLLFFBMkJSTSxJLEdBQU87QUFDTEMsZ0JBQVUsOEJBREw7QUFFTEMsdUJBQWlCLHFDQUZaO0FBR0xDLGlCQUFXLCtCQUhOO0FBSUxDLHdCQUFrQjtBQUpiLEssUUFPUEMsUSxHQUFXO0FBQ1RDLG1CQURTLDJCQUNPO0FBQ2QsZUFBTyxLQUFLZCxJQUFMLEtBQWMsU0FBckI7QUFDRDtBQUhRLEssUUFNWGUsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLElBREMsRUFDS0MsS0FETCxFQUNZO0FBQUE7O0FBQ2xCO0FBQ0EsWUFBTUMsWUFBWWIsUUFBUVcsUUFBUSxDQUFDQSxLQUFLRyxTQUF0QixDQUFsQjtBQUNBLFlBQU1DLFVBQVVGLFlBQVksQ0FBWixHQUFnQixDQUFoQztBQUNBLFlBQU1HLGNBQWNELFVBQVUsSUFBVixHQUFpQixJQUFyQztBQUNBO0FBQ0EsYUFBS0UsS0FBTCxDQUFXO0FBQ1RDLGVBQUtDLGdCQUFRQyxPQURKO0FBRVRsQixnQkFBTTtBQUNKbUIsc0JBQVUsQ0FBQ1YsS0FBS1csRUFBTixDQUROO0FBRUo1QixrQkFBTXFCO0FBRkY7QUFGRyxTQUFYLEVBTUc7QUFDRFEsbUJBQVMsd0JBQWtCO0FBQUEsZ0JBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVnRCLElBQVUsU0FBVkEsSUFBVTs7QUFDekI7QUFDQSxnQkFBSSxPQUFLdUIsUUFBTCxDQUFjLE9BQUtoQyxJQUFMLENBQVVtQixLQUFWLENBQWQsQ0FBSixFQUFxQztBQUNuQyxxQkFBS25CLElBQUwsQ0FBVW1CLEtBQVYsRUFBaUJFLFNBQWpCLEdBQTZCQyxPQUE3QjtBQUNEO0FBQ0RXLGVBQUdDLFNBQUgsQ0FBYTtBQUNYOUIscUJBQVVtQixXQUFWLHVCQURXO0FBRVhZLG9CQUFNLFNBRks7QUFHWEMsd0JBQVU7QUFIQyxhQUFiO0FBS0QsV0FYQTtBQVlEQyxnQkFBTSxxQkFBa0I7QUFBQSxnQkFBaEJOLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGdCQUFWdEIsSUFBVSxTQUFWQSxJQUFVOztBQUN0QjtBQUNBO0FBQ0E7QUFDQXdCLGVBQUdDLFNBQUgsQ0FBYTtBQUNYOUIscUJBQVVtQixXQUFWLG1DQURXO0FBRVhZLG9CQUFNLFNBRks7QUFHWEcscUJBQU8sOEJBSEk7QUFJWEYsd0JBQVU7QUFKQyxhQUFiO0FBTUQ7QUF0QkEsU0FOSDtBQThCRDtBQXJDTyxLOzs7O0VBMUMwQkcsZUFBS0MsUzs7a0JBQXRCN0MsUSIsImZpbGUiOiJib29rTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va0xpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbm9Nb3JlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBbdHlwZSDliJfooajnsbvlnovvvJrluLjop4TliJfooagv5pS26JeP5YiX6KGoXVxuICAgICAgICogQHR5cGUge2xpc3QvY29sbGVjdH1cbiAgICAgICAqL1xuICAgICAgdHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICdsaXN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBpY29uX2V5ZTogJy9pbWFnZXMvaWNvbi9pY29uLWV5ZUAyeC5wbmcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2ljb24tZXllLWFjdGl2ZUAyeC5wbmcnLFxuICAgICAgaWNvbl9zdGFyOiAnL2ltYWdlcy9pY29uL2ljb24tc3RhckAyeC5wbmcnLFxuICAgICAgaWNvbl9zdGFyX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXItYWN0aXZlQDJ4LnBuZydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzQ29sbGVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdjb2xsZWN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N0YXIoYm9vaywgaW5kZXgpIHtcbiAgICAgICAgLy8g5bCG6KaB5Y+R55Sf55qE5pS26JeP5Yqo5L2cXG4gICAgICAgIGNvbnN0IGlzQ29sbGVjdCA9IEJvb2xlYW4oYm9vayAmJiArYm9vay5jb2xsZWN0ZWQpXG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSBpc0NvbGxlY3QgPyAwIDogMVxuICAgICAgICBjb25zdCBuZXdUeXBlVGV4dCA9IG5ld1R5cGUgPyAn5re75YqgJyA6ICflj5bmtognXG4gICAgICAgIC8vIOaUtuiXj+acrOS5plxuICAgICAgICB0aGlzLiRwb3N0KHtcbiAgICAgICAgICB1cmw6IHNlcnZpY2UuY29sbGVjdCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBib29rX2lkczogW2Jvb2suaWRdLFxuICAgICAgICAgICAgdHlwZTogbmV3VHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vIOmHjee9ruacrOS5puaUtuiXj+eKtuaAgVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5saXN0W2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIC8vIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP5aSx6LSl77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaWNvbi9pY29uLWNhbmNlbC5wbmcnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=