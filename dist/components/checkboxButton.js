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

var checkboxButton = function (_wepy$component) {
  _inherits(checkboxButton, _wepy$component);

  function checkboxButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, checkboxButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = checkboxButton.__proto__ || Object.getPrototypeOf(checkboxButton)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        twoWay: true,
        type: Object,
        default: []
      },
      value: {
        twoWay: true,
        type: [Array, String, Number],
        default: ''
      },
      col: {
        type: [String, Number],
        default: 4
      },
      gutter: {
        type: [String, Number],
        default: 16
      },
      unit: {
        type: String,
        default: 'rpx'
      },
      title: {
        type: String,
        default: ''
      }
    }, _this.data = {
      unique: Math.random().toString(36).substring(2)
    }, _this.computed = {
      hasTitle: function hasTitle() {
        return this.isDefined(this.title);
      },
      style_width: function style_width() {
        var col = this.col;
        return this.getPercent(1 / this.getNumber(col, 4));
      },
      style_gutter: function style_gutter() {
        var gutter = this.gutter;
        return this.getGutter(this.getNumber(gutter, 16), this.unit);
      },
      style_gutter_edge: function style_gutter_edge() {
        var gutter = this.gutter;
        var col = this.getNumber(this.col, 4);
        var edge = (col - 1) * this.getNumber(gutter, 16) / col;
        return this.getGutter(-edge, this.unit);
      }
    }, _this.methods = {
      checkboxChange: function checkboxChange(e) {
        var valueArr = e.detail.value;
        for (var i = 0; i < this.list.length; i++) {
          if (this.isValueEqual(valueArr, this.list[i].value)) {
            this.list[i].checked = true;
            this.value = valueArr;
          } else {
            this.list[i].checked = false;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(checkboxButton, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      // 使组件在父组件之后lond
      setTimeout(function () {
        _this2.initCheckBox();
      });
    }
  }, {
    key: 'initCheckBox',
    value: function initCheckBox() {
      // 初始化已选项
      var value = this.getString(this.value);
      for (var i = 0; i < this.list.length; i++) {
        if (this.isValueEqual(value, this.list[i].value)) {
          this.list[i].checked = true;
        }
      }
    }
  }, {
    key: 'isValueEqual',
    value: function isValueEqual(a, b) {
      return this.getArray(a).indexOf(this.getString(b)) > -1;
    }
  }, {
    key: 'getPercent',
    value: function getPercent(num) {
      return this.isNumber(num) ? num * 100 + '%' : '0%';
    }
  }, {
    key: 'getGutter',
    value: function getGutter(num, unit) {
      return this.isNumber(num) ? '' + num + (unit || 'rpx') : '16rpx';
    }
  }]);

  return checkboxButton;
}(_wepy2.default.component);

exports.default = checkboxButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94QnV0dG9uLmpzIl0sIm5hbWVzIjpbImNoZWNrYm94QnV0dG9uIiwibWl4aW5zIiwiYmFzZSIsInByb3BzIiwibGlzdCIsInR3b1dheSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidmFsdWUiLCJBcnJheSIsIlN0cmluZyIsIk51bWJlciIsImNvbCIsImd1dHRlciIsInVuaXQiLCJ0aXRsZSIsImRhdGEiLCJ1bmlxdWUiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJjb21wdXRlZCIsImhhc1RpdGxlIiwiaXNEZWZpbmVkIiwic3R5bGVfd2lkdGgiLCJnZXRQZXJjZW50IiwiZ2V0TnVtYmVyIiwic3R5bGVfZ3V0dGVyIiwiZ2V0R3V0dGVyIiwic3R5bGVfZ3V0dGVyX2VkZ2UiLCJlZGdlIiwibWV0aG9kcyIsImNoZWNrYm94Q2hhbmdlIiwiZSIsInZhbHVlQXJyIiwiZGV0YWlsIiwiaSIsImxlbmd0aCIsImlzVmFsdWVFcXVhbCIsImNoZWNrZWQiLCJzZXRUaW1lb3V0IiwiaW5pdENoZWNrQm94IiwiZ2V0U3RyaW5nIiwiYSIsImIiLCJnZXRBcnJheSIsImluZGV4T2YiLCJudW0iLCJpc051bWJlciIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGdCQUFRLElBREo7QUFFSkMsY0FBTUMsTUFGRjtBQUdKQyxpQkFBUztBQUhMLE9BREE7QUFNTkMsYUFBTztBQUNMSixnQkFBUSxJQURIO0FBRUxDLGNBQU0sQ0FBQ0ksS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixDQUZEO0FBR0xKLGlCQUFTO0FBSEosT0FORDtBQVdOSyxXQUFLO0FBQ0hQLGNBQU0sQ0FBQ0ssTUFBRCxFQUFTQyxNQUFULENB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QkcsT0FBakIsQ0FBeUIsS0FBS0osU0FBTCxDQUFlRSxDQUFmLENBQXpCLElBQThDLENBQUMsQ0FBdEQ7QUFDRDs7OytCQUVVRyxHLEVBQUs7QUFDZCxhQUFPLEtBQUtDLFFBQUwsQ0FBY0QsR0FBZCxJQUF3QkEsTUFBTSxHQUE5QixTQUF1QyxJQUE5QztBQUNEOzs7OEJBQ1NBLEcsRUFBS2xDLEksRUFBTTtBQUNuQixhQUFPLEtBQUttQyxRQUFMLENBQWNELEdBQWQsU0FBd0JBLEdBQXhCLElBQThCbEMsUUFBUSxLQUF0QyxJQUFnRCxPQUF2RDtBQUNEOzs7O0VBL0Z5Q29DLGVBQUtDLFM7O2tCQUE1QnBELGMiLCJmaWxlIjoiY2hlY2tib3hCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UuanMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hlY2tib3hCdXR0b24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgbWl4aW5zID0gW2Jhc2VdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgdHlwZTogW0FycmF5LCBTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9LFxuICAgICAgY29sOiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIGRlZmF1bHQ6IDRcbiAgICAgIH0sXG4gICAgICBndXR0ZXI6IHtcbiAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgZGVmYXVsdDogMTZcbiAgICAgIH0sXG4gICAgICB1bml0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3JweCdcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVuaXF1ZTogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgLy8g5L2/57uE5Lu25Zyo54i257uE5Lu25LmL5ZCObG9uZFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5pdENoZWNrQm94KClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBoYXNUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNEZWZpbmVkKHRoaXMudGl0bGUpXG4gICAgICB9LFxuICAgICAgc3R5bGVfd2lkdGgoKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuY29sXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBlcmNlbnQoMSAvIHRoaXMuZ2V0TnVtYmVyKGNvbCwgNCkpXG4gICAgICB9LFxuICAgICAgc3R5bGVfZ3V0dGVyKCkge1xuICAgICAgICBjb25zdCBndXR0ZXIgPSB0aGlzLmd1dHRlclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXIodGhpcy5nZXROdW1iZXIoZ3V0dGVyLCAxNiksIHRoaXMudW5pdClcbiAgICAgIH0sXG4gICAgICBzdHlsZV9ndXR0ZXJfZWRnZSgpIHtcbiAgICAgICAgY29uc3QgZ3V0dGVyID0gdGhpcy5ndXR0ZXJcbiAgICAgICAgY29uc3QgY29sID0gdGhpcy5nZXROdW1iZXIodGhpcy5jb2wsIDQpXG4gICAgICAgIGNvbnN0IGVkZ2UgPSAoY29sIC0gMSkgKiB0aGlzLmdldE51bWJlcihndXR0ZXIsIDE2KSAvIGNvbFxuICAgICAgICByZXR1cm4gdGhpcy5nZXRHdXR0ZXIoLWVkZ2UsIHRoaXMudW5pdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hlY2tib3hDaGFuZ2UoZSkge1xuICAgICAgICB2YXIgdmFsdWVBcnIgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWVFcXVhbCh2YWx1ZUFyciwgdGhpcy5saXN0W2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVBcnJcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluaXRDaGVja0JveCgpIHtcbiAgICAgIC8vIOWIneWni+WMluW3sumAiemhuVxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFN0cmluZyh0aGlzLnZhbHVlKVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVxdWFsKHZhbHVlLCB0aGlzLmxpc3RbaV0udmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5saXN0W2ldLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbHVlRXF1YWwoYSwgYikge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXJyYXkoYSkuaW5kZXhPZih0aGlzLmdldFN0cmluZyhiKSkgPiAtMVxuICAgIH1cblxuICAgIGdldFBlcmNlbnQobnVtKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc051bWJlcihudW0pID8gYCR7bnVtICogMTAwfSVgIDogJzAlJ1xuICAgIH1cbiAgICBnZXRHdXR0ZXIobnVtLCB1bml0KSB7XG4gICAgICByZXR1cm4gdGhpcy5pc051bWJlcihudW0pID8gYCR7bnVtfSR7dW5pdCB8fCAncnB4J31gIDogJzE2cnB4J1xuICAgIH1cbiAgfVxuIl19