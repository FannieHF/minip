'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      placeholder: {
        type: String,
        default: '搜索'
      }
    }, _this.data = {
      inputShowed: false,
      inputVal: ''
    }, _this.computed = {
      computedPlaceholder: function computedPlaceholder() {
        return this.inputVal || this.placeholder;
      }
    }, _this.methods = {
      showInput: function showInput(isShow) {
        this.inputShowed = isShow === 'true';
        this.$apply();
      },
      search: function search() {
        var params = {
          key_word: this.inputVal || this.placeholder
        };
        wx.navigateTo({
          url: '/pages/main/list?params=' + JSON.stringify(params)
        });
      },
      clearInput: function clearInput(cb) {
        var _this2 = this;

        setTimeout(function () {
          _this2.inputVal = '';
          _this2.$apply();
        });
      },
      inputTyping: function inputTyping(e) {
        this.inputVal = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJwcm9wcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwiaW5wdXRTaG93ZWQiLCJpbnB1dFZhbCIsImNvbXB1dGVkIiwiY29tcHV0ZWRQbGFjZWhvbGRlciIsIm1ldGhvZHMiLCJzaG93SW5wdXQiLCJpc1Nob3ciLCIkYXBwbHkiLCJzZWFyY2giLCJwYXJhbXMiLCJrZXlfd29yZCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGVhcklucHV0IiwiY2IiLCJzZXRUaW1lb3V0IiwiaW5wdXRUeXBpbmciLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsbUJBQWE7QUFDWEMsY0FBTUMsTUFESztBQUVYQyxpQkFBUztBQUZFO0FBRFAsSyxRQU9SQyxJLEdBQU87QUFDTEMsbUJBQWEsS0FEUjtBQUVMQyxnQkFBVTtBQUZMLEssUUFLUEMsUSxHQUFXO0FBQ1RDLHlCQURTLGlDQUNhO0FBQ3BCLGVBQU8sS0FBS0YsUUFBTCxJQUFpQixLQUFLTixXQUE3QjtBQUNEO0FBSFEsSyxRQU1YUyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsTUFESCxFQUNXO0FBQ2pCLGFBQUtOLFdBQUwsR0FBbUJNLFdBQVcsTUFBOUI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxZQUxRLG9CQUtFO0FBQ1IsWUFBTUMsU0FBUztBQUNiQyxvQkFBVSxLQUFLVCxRQUFMLElBQWlCLEtBQUtOO0FBRG5CLFNBQWY7QUFHQWdCLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyw0Q0FBZ0NDLEtBQUtDLFNBQUwsQ0FBZU4sTUFBZjtBQURwQixTQUFkO0FBR0QsT0FaTztBQWFSTyxnQkFiUSxzQkFhSUMsRUFiSixFQWFRO0FBQUE7O0FBQ2RDLG1CQUFXLFlBQU07QUFDZixpQkFBS2pCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxpQkFBS00sTUFBTDtBQUNELFNBSEQ7QUFJRCxPQWxCTztBQW1CUlksaUJBbkJRLHVCQW1CS0MsQ0FuQkwsRUFtQlE7QUFDZCxhQUFLbkIsUUFBTCxHQUFnQm1CLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDRDtBQXJCTyxLOzs7O0VBbkIyQkMsZUFBS0MsUzs7a0JBQXZCL0IsUyIsImZpbGUiOiJzZWFyY2hiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICfmkJzntKInXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGlucHV0U2hvd2VkOiBmYWxzZSxcbiAgICAgIGlucHV0VmFsOiAnJ1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgY29tcHV0ZWRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWwgfHwgdGhpcy5wbGFjZWhvbGRlclxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93SW5wdXQgKGlzU2hvdykge1xuICAgICAgICB0aGlzLmlucHV0U2hvd2VkID0gaXNTaG93ID09PSAndHJ1ZSdcbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfSxcbiAgICAgIHNlYXJjaCAoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICBrZXlfd29yZDogdGhpcy5pbnB1dFZhbCB8fCB0aGlzLnBsYWNlaG9sZGVyXG4gICAgICAgIH1cbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL21haW4vbGlzdD9wYXJhbXM9JHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWBcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBjbGVhcklucHV0IChjYikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlucHV0VmFsID0gJydcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgaW5wdXRUeXBpbmcgKGUpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=