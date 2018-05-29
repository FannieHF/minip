'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var borrowResult = function (_wepy$page) {
  _inherits(borrowResult, _wepy$page);

  function borrowResult() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, borrowResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borrowResult.__proto__ || Object.getPrototypeOf(borrowResult)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.config = {
      navigationBarTitleText: '提示',
      enablePullDownRefresh: false
    }, _this.data = {
      // type: 0成功, 失败 > 0
      type: 0,
      message: '',

      // 错误提示的文案
      buttonText: '重新借阅'
    }, _this.methods = {
      jump: function jump() {
        wx.redirectTo({ url: '/pages/user/borrow' });
      },
      back: function back() {
        wx.navigateBack({ delta: 1 });
      }
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(borrowResult, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var type = query && +query.type;
      var message = query && query.message;
      this.type = this.getNumber(type);
      this.message = message || '发生了一些异常，再试一次！';
    }
  }]);

  return borrowResult;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(borrowResult , 'pages/borrow/result'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5qcyJdLCJuYW1lcyI6WyJib3Jyb3dSZXN1bHQiLCJtaXhpbnMiLCJiYXNlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJ0eXBlIiwibWVzc2FnZSIsImJ1dHRvblRleHQiLCJtZXRob2RzIiwianVtcCIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsImJhY2siLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldE51bWJlciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsQyxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMO0FBQ0FDLFlBQU0sQ0FGRDtBQUdMQyxlQUFTLEVBSEo7O0FBS0w7QUFDQUMsa0JBQVk7QUFOUCxLLFFBZ0JQQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDRDtBQUNMQyxXQUFHQyxVQUFILENBQWMsRUFBQ0MsS0FBSyxvQkFBTixFQUFkO0FBQ0QsT0FITztBQUlSQyxVQUpRLGtCQUlEO0FBQ0xILFdBQUdJLFlBQUgsQ0FBZ0IsRUFBQ0MsT0FBTyxDQUFSLEVBQWhCO0FBQ0Q7QUFOTyxLLFFBU1ZDLFUsR0FBYSxFOzs7OzsyQkFoQk5DLEssRUFBTztBQUNaLFVBQU1aLE9BQU9ZLFNBQVMsQ0FBQ0EsTUFBTVosSUFBN0I7QUFDQSxVQUFNQyxVQUFVVyxTQUFTQSxNQUFNWCxPQUEvQjtBQUNBLFdBQUtELElBQUwsR0FBWSxLQUFLYSxTQUFMLENBQWViLElBQWYsQ0FBWjtBQUNBLFdBQUtDLE9BQUwsR0FBZUEsV0FBVyxlQUExQjtBQUNEOzs7O0VBcEJ1Q2EsZUFBS0MsSTs7a0JBQTFCdEIsWSIsImZpbGUiOiJyZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vLi4vbWl4aW5zL2Jhc2UnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9ycm93UmVzdWx0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBtaXhpbnMgPSBbYmFzZV1cbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q56S6JyxcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogZmFsc2VcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIHR5cGU6IDDmiJDlip8sIOWksei0pSA+IDBcbiAgICAgIHR5cGU6IDAsXG4gICAgICBtZXNzYWdlOiAnJyxcblxuICAgICAgLy8g6ZSZ6K+v5o+Q56S655qE5paH5qGIXG4gICAgICBidXR0b25UZXh0OiAn6YeN5paw5YCf6ZiFJ1xuICAgIH1cblxuICAgIG9uTG9hZChxdWVyeSkge1xuICAgICAgY29uc3QgdHlwZSA9IHF1ZXJ5ICYmICtxdWVyeS50eXBlXG4gICAgICBjb25zdCBtZXNzYWdlID0gcXVlcnkgJiYgcXVlcnkubWVzc2FnZVxuICAgICAgdGhpcy50eXBlID0gdGhpcy5nZXROdW1iZXIodHlwZSlcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ+WPkeeUn+S6huS4gOS6m+W8guW4uO+8jOWGjeivleS4gOasoe+8gSdcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAganVtcCgpIHtcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7dXJsOiAnL3BhZ2VzL3VzZXIvYm9ycm93J30pXG4gICAgICB9LFxuICAgICAgYmFjaygpIHtcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtkZWx0YTogMX0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcbiAgICB9XG4gIH1cbiJdfQ==