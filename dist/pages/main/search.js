'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../../config.js');

var _base = require('./../../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _checkboxButton = require('./../../components/checkboxButton.js');

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainSearch = function (_wepy$page) {
  _inherits(mainSearch, _wepy$page);

  function mainSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mainSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mainSearch.__proto__ || Object.getPrototypeOf(mainSearch)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '分类选择'
    }, _this.data = {
      key1: '',
      key2: '',
      key3: '',
      key4: '',
      title1: '',
      title2: '',
      title3: '',
      title4: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      items1: undefined,
      items2: undefined,
      items3: undefined,
      items4: undefined,
      lists: [
        // {
        //   key: 'age',
        //   title: 'name',
        //   value: '',
        //   list: [
        //     {name: 'xxx', value: '1'},
        //     {name: 'yyy', value: '2'}
        //   ]
        // }
      ]
    }, _this.methods = {
      search: function search() {
        var _this2 = this;

        var params = { title: [] };[1, 2, 3, 4].map(function (i) {
          var items = 'items' + i;
          var value = 'value' + i;
          var key = 'key' + i;
          if (_this2[value] && _this2[key]) {
            params['' + _this2[key]] = _this2.isArray(_this2[value]) ? _this2[value] : [_this2[value]];
          }
          // 整理条件对应的文案信息
          if (_this2[items]) {
            var titleArr = _this2.getArray(_this2[items]).filter(function (item) {
              return _this2.getArray(params['' + _this2[key]]).indexOf(_this2.getString(item.value)) > -1;
            }).map(function (item) {
              return item.name;
            });
            if (titleArr && titleArr.length) {
              params.title = [].concat(_toConsumableArray(params.title), _toConsumableArray(titleArr));
            }
          }
        });
        params.title = params.title.join(' ');
        wx.redirectTo({
          url: '/pages/main/list?params=' + JSON.stringify(params)
        });
      }
    }, _this.$repeat = {}, _this.$props = { "checkboxButton1": { "xmlns:v-bind": "", "v-bind:title.sync": "title1", "v-bind:list.sync": "items1", "v-bind:value.sync": "value1" }, "checkboxButton2": { "v-bind:title.sync": "title2", "v-bind:list.sync": "items2", "v-bind:value.sync": "value2" }, "checkboxButton3": { "v-bind:title.sync": "title3", "v-bind:list.sync": "items3", "v-bind:value.sync": "value3" }, "checkboxButton4": { "v-bind:title.sync": "title4", "v-bind:list.sync": "items4", "v-bind:value.sync": "value4" } }, _this.$events = {}, _this.components = {
      checkboxButton1: _checkboxButton2.default,
      checkboxButton2: _checkboxButton2.default,
      checkboxButton3: _checkboxButton2.default,
      checkboxButton4: _checkboxButton2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mainSearch, [{
    key: 'onLoad',
    value: function onLoad(query) {
      var _$parse = this.$parse(query && query.params),
          index = _$parse.index,
          value = _$parse.value;

      if (index && value) {
        // 多选时，预置对应value为对应数组
        this['value' + index] = [].concat(_toConsumableArray(this.getArray(value, [this.getString(value, '1')])));
      }
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
      wx.stopPullDownRefresh();
    }

    // 初始化页面数据

  }, {
    key: 'initPageData',
    value: function initPageData() {
      var _this3 = this;

      // 获取tag列表
      this.$get({ url: _config.service.tags }, {
        success: function success(_ref2) {
          var code = _ref2.code,
              data = _ref2.data;

          // data = [{
          //   code: 'shukun',
          //   name: 'title',
          //   list: [
          //     {name: 'xxx', value: '1'},
          //     {name: 'yyy', value: '2'}
          //   ]
          // }]
          var arr = _this3.getArray(data);
          var lists = arr.map(function (_ref3, i) {
            var code = _ref3.code,
                name = _ref3.name,
                list = _ref3.list;

            return {
              key: code,
              title: name,
              list: list && list.map(function (item, index) {
                return {
                  name: item && item.name,
                  value: item && item.value,
                  checked: function () {
                    // 由于组件内不方便实现检测list变化及时初始化预算项
                    // 故在此hack，预处理checked属性
                    var value = _this3['value' + (i + 1)];
                    return value && value.indexOf ? value.indexOf(_this3.getString(index + 1)) > -1 : false;
                  }()
                };
              })
            };
          });
          _this3.lists = lists;

          for (var i = lists.length - 1; i >= 0; i--) {
            _this3['key' + (i + 1)] = lists[i].key;
            _this3['items' + (i + 1)] = lists[i].list;
            _this3['title' + (i + 1)] = lists[i].title;
          }
        },
        fail: function fail(_ref4) {
          var code = _ref4.code,
              data = _ref4.data;

          // 如果获取失败，就直接跳转到列表页
          wx.redirectTo({
            url: '/pages/main/list'
          });
        }
      });
    }
  }]);

  return mainSearch;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(mainSearch , 'pages/main/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJtYWluU2VhcmNoIiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImtleTEiLCJrZXkyIiwia2V5MyIsImtleTQiLCJ0aXRsZTEiLCJ0aXRsZTIiLCJ0aXRsZTMiLCJ0aXRsZTQiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJ2YWx1ZTMiLCJ2YWx1ZTQiLCJpdGVtczEiLCJ1bmRlZmluZWQiLCJpdGVtczIiLCJpdGVtczMiLCJpdGVtczQiLCJsaXN0cyIsIm1ldGhvZHMiLCJzZWFyY2giLCJwYXJhbXMiLCJ0aXRsZSIsIm1hcCIsImkiLCJpdGVtcyIsInZhbHVlIiwia2V5IiwiaXNBcnJheSIsInRpdGxlQXJyIiwiZ2V0QXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXhPZiIsImdldFN0cmluZyIsIm5hbWUiLCJsZW5ndGgiLCJqb2luIiwid3giLCJyZWRpcmVjdFRvIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNoZWNrYm94QnV0dG9uMSIsImNoZWNrYm94QnV0dG9uIiwiY2hlY2tib3hCdXR0b24yIiwiY2hlY2tib3hCdXR0b24zIiwiY2hlY2tib3hCdXR0b240IiwicXVlcnkiLCIkcGFyc2UiLCJpbmRleCIsImluaXRQYWdlRGF0YSIsInN0b3BQdWxsRG93blJlZnJlc2giLCIkZ2V0Iiwic2VydmljZSIsInRhZ3MiLCJzdWNjZXNzIiwiY29kZSIsImFyciIsImxpc3QiLCJjaGVja2VkIiwiZmFpbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLE0s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QUFPO0FBQ0xuQix3QkFBTUgsUUFBUUEsS0FBS0csSUFEZDtBQUVMVCx5QkFBT00sUUFBUUEsS0FBS04sS0FGZjtBQUdMc0MsMkJBQVUsWUFBTTtBQUNkO0FBQ0E7QUFDQSx3QkFBTXRDLFFBQVEsa0JBQWFGLElBQUksQ0FBakIsRUFBZDtBQUNBLDJCQUFPRSxTQUFTQSxNQUFNTyxPQUFmLEdBQXlCUCxNQUFNTyxPQUFOLENBQWMsT0FBS0MsU0FBTCxDQUFlb0IsUUFBUSxDQUF2QixDQUFkLElBQTJDLENBQUMsQ0FBckUsR0FBeUUsS0FBaEY7QUFDRCxtQkFMUTtBQUhKLGlCQUFQO0FBVUQsZUFYYTtBQUhULGFBQVA7QUFnQkQsV0FqQmEsQ0FBZDtBQWtCQSxpQkFBS3BDLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSxlQUFLLElBQUlNLElBQUlOLE1BQU1rQixNQUFOLEdBQWUsQ0FBNUIsRUFBK0JaLEtBQUssQ0FBcEMsRUFBdUNBLEdBQXZDLEVBQTRDO0FBQzFDLDRCQUFXQSxJQUFJLENBQWYsS0FBc0JOLE1BQU1NLENBQU4sRUFBU0csR0FBL0I7QUFDQSw4QkFBYUgsSUFBSSxDQUFqQixLQUF3Qk4sTUFBTU0sQ0FBTixFQUFTdUMsSUFBakM7QUFDQSw4QkFBYXZDLElBQUksQ0FBakIsS0FBd0JOLE1BQU1NLENBQU4sRUFBU0YsS0FBakM7QUFDRDtBQUNGLFNBcEM0QjtBQXFDN0IyQyxjQUFNLHFCQUFrQjtBQUFBLGNBQWhCSixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxjQUFWN0QsSUFBVSxTQUFWQSxJQUFVOztBQUN0QjtBQUNBc0MsYUFBR0MsVUFBSCxDQUFjO0FBQ1pDO0FBRFksV0FBZDtBQUdEO0FBMUM0QixPQUEvQjtBQTRDRDs7OztFQW5HcUMwQixlQUFLQyxJOztrQkFBeEJ6RSxVIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnLmpzJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi8uLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBjaGVja2JveEJ1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94QnV0dG9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG1haW5TZWFyY2ggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfliIbnsbvpgInmi6knXG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBrZXkxOiAnJyxcbiAgICAgIGtleTI6ICcnLFxuICAgICAga2V5MzogJycsXG4gICAgICBrZXk0OiAnJyxcbiAgICAgIHRpdGxlMTogJycsXG4gICAgICB0aXRsZTI6ICcnLFxuICAgICAgdGl0bGUzOiAnJyxcbiAgICAgIHRpdGxlNDogJycsXG4gICAgICB2YWx1ZTE6ICcnLFxuICAgICAgdmFsdWUyOiAnJyxcbiAgICAgIHZhbHVlMzogJycsXG4gICAgICB2YWx1ZTQ6ICcnLFxuICAgICAgaXRlbXMxOiB1bmRlZmluZWQsXG4gICAgICBpdGVtczI6IHVuZGVmaW5lZCxcbiAgICAgIGl0ZW1zMzogdW5kZWZpbmVkLFxuICAgICAgaXRlbXM0OiB1bmRlZmluZWQsXG4gICAgICBsaXN0czogW1xuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAga2V5OiAnYWdlJyxcbiAgICAgICAgLy8gICB0aXRsZTogJ25hbWUnLFxuICAgICAgICAvLyAgIHZhbHVlOiAnJyxcbiAgICAgICAgLy8gICBsaXN0OiBbXG4gICAgICAgIC8vICAgICB7bmFtZTogJ3h4eCcsIHZhbHVlOiAnMSd9LFxuICAgICAgICAvLyAgICAge25hbWU6ICd5eXknLCB2YWx1ZTogJzInfVxuICAgICAgICAvLyAgIF1cbiAgICAgICAgLy8gfVxuICAgICAgXVxuICAgIH1cblxuICAgIG9uTG9hZChxdWVyeSkge1xuICAgICAgY29uc3Qge2luZGV4LCB2YWx1ZX0gPSB0aGlzLiRwYXJzZShxdWVyeSAmJiBxdWVyeS5wYXJhbXMpXG4gICAgICBpZiAoaW5kZXggJiYgdmFsdWUpIHtcbiAgICAgICAgLy8g5aSa6YCJ5pe277yM6aKE572u5a+55bqUdmFsdWXkuLrlr7nlupTmlbDnu4RcbiAgICAgICAgdGhpc1tgdmFsdWUke2luZGV4fWBdID0gWy4uLnRoaXMuZ2V0QXJyYXkodmFsdWUsIFt0aGlzLmdldFN0cmluZyh2YWx1ZSwgJzEnKV0pXVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG5cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKVxuICAgIH1cblxuICAgIC8vIOWIneWni+WMlumhtemdouaVsOaNrlxuICAgIGluaXRQYWdlRGF0YSgpIHtcbiAgICAgIC8vIOiOt+WPlnRhZ+WIl+ihqFxuICAgICAgdGhpcy4kZ2V0KHt1cmw6IHNlcnZpY2UudGFnc30sIHtcbiAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgIC8vIGRhdGEgPSBbe1xuICAgICAgICAgIC8vICAgY29kZTogJ3NodWt1bicsXG4gICAgICAgICAgLy8gICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgIC8vICAgbGlzdDogW1xuICAgICAgICAgIC8vICAgICB7bmFtZTogJ3h4eCcsIHZhbHVlOiAnMSd9LFxuICAgICAgICAgIC8vICAgICB7bmFtZTogJ3l5eScsIHZhbHVlOiAnMid9XG4gICAgICAgICAgLy8gICBdXG4gICAgICAgICAgLy8gfV1cbiAgICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmdldEFycmF5KGRhdGEpXG4gICAgICAgICAgY29uc3QgbGlzdHMgPSBhcnIubWFwKCh7Y29kZSwgbmFtZSwgbGlzdH0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGtleTogY29kZSxcbiAgICAgICAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgICAgICAgIGxpc3Q6IGxpc3QgJiYgbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0gJiYgaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0gJiYgaXRlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOeUseS6jue7hOS7tuWGheS4jeaWueS+v+WunueOsOajgOa1i2xpc3Tlj5jljJblj4rml7bliJ3lp4vljJbpooTnrpfpoblcbiAgICAgICAgICAgICAgICAgICAgLy8g5pWF5Zyo5q2kaGFja++8jOmihOWkhOeQhmNoZWNrZWTlsZ7mgKdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2B2YWx1ZSR7aSArIDF9YF1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YgPyB2YWx1ZS5pbmRleE9mKHRoaXMuZ2V0U3RyaW5nKGluZGV4ICsgMSkpID4gLTEgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMubGlzdHMgPSBsaXN0c1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxpc3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzW2BrZXkke2kgKyAxfWBdID0gbGlzdHNbaV0ua2V5XG4gICAgICAgICAgICB0aGlzW2BpdGVtcyR7aSArIDF9YF0gPSBsaXN0c1tpXS5saXN0XG4gICAgICAgICAgICB0aGlzW2B0aXRsZSR7aSArIDF9YF0gPSBsaXN0c1tpXS50aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgIC8vIOWmguaenOiOt+WPluWksei0pe+8jOWwseebtOaOpei3s+i9rOWIsOWIl+ihqOmhtVxuICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL21haW4vbGlzdGBcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt0aXRsZTogW119XG4gICAgICAgIDtbMSwgMiwgMywgNF0ubWFwKChpKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbXMgPSBgaXRlbXMke2l9YFxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gYHZhbHVlJHtpfWBcbiAgICAgICAgICBjb25zdCBrZXkgPSBga2V5JHtpfWBcbiAgICAgICAgICBpZiAodGhpc1t2YWx1ZV0gJiYgdGhpc1trZXldKSB7XG4gICAgICAgICAgICBwYXJhbXNbYCR7dGhpc1trZXldfWBdID0gdGhpcy5pc0FycmF5KHRoaXNbdmFsdWVdKSA/IHRoaXNbdmFsdWVdIDogW3RoaXNbdmFsdWVdXVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDmlbTnkIbmnaHku7blr7nlupTnmoTmlofmoYjkv6Hmga9cbiAgICAgICAgICBpZiAodGhpc1tpdGVtc10pIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlQXJyID0gdGhpcy5nZXRBcnJheSh0aGlzW2l0ZW1zXSkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEFycmF5KHBhcmFtc1tgJHt0aGlzW2tleV19YF0pLmluZGV4T2YodGhpcy5nZXRTdHJpbmcoaXRlbS52YWx1ZSkpID4gLTFcbiAgICAgICAgICAgIH0pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHRpdGxlQXJyICYmIHRpdGxlQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICBwYXJhbXMudGl0bGUgPSBbLi4ucGFyYW1zLnRpdGxlLCAuLi50aXRsZUFycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5qb2luKCcgJylcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL21haW4vbGlzdD9wYXJhbXM9JHtKU09OLnN0cmluZ2lmeShwYXJhbXMpfWBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiY2hlY2tib3hCdXR0b24xXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJ0aXRsZTFcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcIml0ZW1zMVwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlMVwifSxcImNoZWNrYm94QnV0dG9uMlwiOntcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJ0aXRsZTJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcIml0ZW1zMlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlMlwifSxcImNoZWNrYm94QnV0dG9uM1wiOntcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJ0aXRsZTNcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcIml0ZW1zM1wiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlM1wifSxcImNoZWNrYm94QnV0dG9uNFwiOntcInYtYmluZDp0aXRsZS5zeW5jXCI6XCJ0aXRsZTRcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcIml0ZW1zNFwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInZhbHVlNFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBjaGVja2JveEJ1dHRvbjE6IGNoZWNrYm94QnV0dG9uLFxuICAgICAgY2hlY2tib3hCdXR0b24yOiBjaGVja2JveEJ1dHRvbixcbiAgICAgIGNoZWNrYm94QnV0dG9uMzogY2hlY2tib3hCdXR0b24sXG4gICAgICBjaGVja2JveEJ1dHRvbjQ6IGNoZWNrYm94QnV0dG9uXG4gICAgfVxuICB9XG4iXX0=