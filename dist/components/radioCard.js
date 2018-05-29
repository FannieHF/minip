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

var radioCard = function (_wepy$component) {
  _inherits(radioCard, _wepy$component);

  function radioCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, radioCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = radioCard.__proto__ || Object.getPrototypeOf(radioCard)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        twoWay: true,
        type: Object,
        default: []
      },
      value: {
        twoWay: true,
        type: [String, Number],
        default: ''
      },
      key: {
        type: String,
        default: 'value'
      }
    }, _this.data = {
      unique: Math.random().toString(36).substring(2)
    }, _this.computed = {
      lists: function lists() {
        // 初始化已选项
        /* ============== 此处做法并不适合，但目前找不到拿到真正list的地方了 ============== */
        var value = this.getString(this.value);
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(value, this.list[i][this.key])) {
            this.list[i].checked = true;
          }
        }
      }
    }, _this.methods = {
      radioChange: function radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
        var value = e.detail.value;
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(value, this.list[i][this.key])) {
            this.list[i].checked = true;
            this.value = this.list[i][this.key];
          } else {
            this.list[i].checked = false;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(radioCard, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'isValueEqual',
    value: function isValueEqual(a, b) {
      return this.getString(a) === this.getString(b);
    }
  }]);

  return radioCard;
}(_wepy2.default.component);

exports.default = radioCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvQ2FyZC5qcyJdLCJuYW1lcyI6WyJyYWRpb0NhcmQiLCJtaXhpbnMiLCJiYXNlIiwicHJvcHMiLCJsaXN0IiwidHdvV2F5IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ2YWx1ZSIsIlN0cmluZyIsIk51bWJlciIsImtleSIsImRhdGEiLCJ1bmlxdWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImxpc3RzIiwiZ2V0U3RyaW5nIiwiaSIsImxlbmd0aCIsImlzVmFsdWVFcXVhbCIsImNoZWNrZWQiLCJtZXRob2RzIiwicmFkaW9DaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImEiLCJiIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUyxDQUFDQyxjQUFELEMsUUFDVEMsSyxHQUFRO0FBQ05DLFlBQU07QUFDSkMsZ0JBQVEsSUFESjtBQUVKQyxjQUFNQyxNQUZGO0FBR0pDLGlCQUFTO0FBSEwsT0FEQTtBQU1OQyxhQUFPO0FBQ0xKLGdCQUFRLElBREg7QUFFTEMsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FGRDtBQUdMSCxpQkFBUztBQUhKLE9BTkQ7QUFXTkksV0FBSztBQUNITixjQUFNSSxNQURIO0FBRUhGLGlCQUFTO0FBRk47QUFYQyxLLFFBaUJSSyxJLEdBQU87QUFDTEMsY0FBUUMsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQztBQURILEssUUFPUEMsUSxHQUFXO0FBQ1RDLFdBRFMsbUJBQ0Q7QUFDTjtBQUNBO0FBQ0EsWUFBTVgsUUFBUSxLQUFLWSxTQUFMLENBQWUsS0FBS1osS0FBcEIsQ0FBZDtBQUNBLGFBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtsQixJQUFMLENBQVVtQixNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsY0FBSSxLQUFLRSxZQUFMLENBQWtCZixLQUFsQixFQUF5QixLQUFLTCxJQUFMLENBQVVrQixDQUFWLEVBQWEsS0FBS1YsR0FBbEIsQ0FBekIsQ0FBSixFQUFzRDtBQUNwRCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLElBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBVlEsSyxRQWFYQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUNiQyxnQkFBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDRixFQUFFRyxNQUFGLENBQVN0QixLQUFuRDtBQUNBLFlBQUlBLFFBQVFtQixFQUFFRyxNQUFGLENBQVN0QixLQUFyQjtBQUNBLGFBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtsQixJQUFMLENBQVVtQixNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsY0FBSSxLQUFLRSxZQUFMLENBQWtCZixLQUFsQixFQUF5QixLQUFLTCxJQUFMLENBQVVrQixDQUFWLEVBQWEsS0FBS1YsR0FBbEIsQ0FBekIsQ0FBSixFQUFzRDtBQUNwRCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLElBQXZCO0FBQ0EsaUJBQUtoQixLQUFMLEdBQWEsS0FBS0wsSUFBTCxDQUFVa0IsQ0FBVixFQUFhLEtBQUtWLEdBQWxCLENBQWI7QUFDRCxXQUhELE1BR087QUFDTCxpQkFBS1IsSUFBTCxDQUFVa0IsQ0FBVixFQUFhRyxPQUFiLEdBQXVCLEtBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBWk8sSzs7Ozs7NkJBaEJELENBQ1I7OztpQ0E4QllPLEMsRUFBR0MsQyxFQUFHO0FBQ2pCLGFBQU8sS0FBS1osU0FBTCxDQUFlVyxDQUFmLE1BQXNCLEtBQUtYLFNBQUwsQ0FBZVksQ0FBZixDQUE3QjtBQUNEOzs7O0VBeERvQ0MsZUFBS0MsUzs7a0JBQXZCbkMsUyIsImZpbGUiOiJyYWRpb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmFkaW9DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIG1peGlucyA9IFtiYXNlXVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAga2V5OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3ZhbHVlJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1bmlxdWU6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGxpc3RzKCkge1xuICAgICAgICAvLyDliJ3lp4vljJblt7LpgInpoblcbiAgICAgICAgLyogPT09PT09PT09PT09PT0g5q2k5aSE5YGa5rOV5bm25LiN6YCC5ZCI77yM5L2G55uu5YmN5om+5LiN5Yiw5ou/5Yiw55yf5q2jbGlzdOeahOWcsOaWueS6hiA9PT09PT09PT09PT09PSAqL1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3RyaW5nKHRoaXMudmFsdWUpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVxdWFsKHZhbHVlLCB0aGlzLmxpc3RbaV1bdGhpcy5rZXldKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JhZGlv5Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgdmFyIHZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlRXF1YWwodmFsdWUsIHRoaXMubGlzdFtpXVt0aGlzLmtleV0pKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RbaV0uY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmxpc3RbaV1bdGhpcy5rZXldXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdFtpXS5jaGVja2VkID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbHVlRXF1YWwoYSwgYikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGEpID09PSB0aGlzLmdldFN0cmluZyhiKVxuICAgIH1cbiAgfVxuIl19