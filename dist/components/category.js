'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      col: {
        type: [String, Number],
        default: 4
      }
    }, _this.data = {}, _this.computed = {
      style_width: function style_width() {
        var col = this.col;
        return this.getPercent(this.isNumber(+col) ? 1 / +col : 0.25);
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'getPercent',
    value: function getPercent(num) {
      return this.isNumber(num) ? num * 100 + '%' : '0%';
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlNlYXJjaEJhciIsIm1peGlucyIsImJhc2UiLCJwcm9wcyIsImxpc3QiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImNvbCIsIlN0cmluZyIsIk51bWJlciIsImRhdGEiLCJjb21wdXRlZCIsInN0eWxlX3dpZHRoIiwiZ2V0UGVyY2VudCIsImlzTnVtYmVyIiwibWV0aG9kcyIsIm51bSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLFdBQUs7QUFDSEgsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FESDtBQUVISCxpQkFBUztBQUZOO0FBTEMsSyxRQVdSSSxJLEdBQU8sRSxRQUdQQyxRLEdBQVc7QUFDVEMsaUJBRFMseUJBQ0s7QUFDWixZQUFNTCxNQUFNLEtBQUtBLEdBQWpCO0FBQ0EsZUFBTyxLQUFLTSxVQUFMLENBQWdCLEtBQUtDLFFBQUwsQ0FBYyxDQUFDUCxHQUFmLElBQXNCLElBQUssQ0FBQ0EsR0FBNUIsR0FBbUMsSUFBbkQsQ0FBUDtBQUNEO0FBSlEsSyxRQU9YUSxPLEdBQVUsRTs7Ozs7K0JBR0NDLEcsRUFBSztBQUNkLGFBQU8sS0FBS0YsUUFBTCxDQUFjRSxHQUFkLElBQXdCQSxNQUFNLEdBQTlCLFNBQXVDLElBQTlDO0FBQ0Q7Ozs7RUE1Qm9DQyxlQUFLQyxTOztrQkFBdkJuQixTIiwiZmlsZSI6ImNhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBtaXhpbnMgPSBbYmFzZV1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIGNvbDoge1xuICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICBkZWZhdWx0OiA0XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHN0eWxlX3dpZHRoKCkge1xuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmNvbFxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJjZW50KHRoaXMuaXNOdW1iZXIoK2NvbCkgPyAxIC8gKCtjb2wpIDogMC4yNSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGdldFBlcmNlbnQobnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc051bWJlcihudW0pID8gYCR7bnVtICogMTAwfSVgIDogJzAlJ1xuICAgIH1cbiAgfVxuIl19