'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 示例:图片组
var funImages = ['/images/category/cate-da@2x.png', '/images/category/cate-ji@2x.png', '/images/category/cate-da@2x.png', '/images/category/cate-li@2x.png', '/images/category/cate-jin@2x.png', '/images/category/cate-wan@2x.png', '/images/category/cate-chi@2x.png', '/images/category/cate-jii@2x.png'];

// 示例:套餐组
var packages = new Array(5).fill(0).map(function (x, i) {
  var index = '' + (i + 1);
  var pow = '' + Math.pow(index, 2);
  var qtt = '' + Math.floor(Math.pow(index, 1.5));
  var pri = '' + (8.88 + Math.floor(Math.pow(i, 5)));
  return {
    id: index,
    period: pow,
    times: index,
    quantity: qtt,
    price: pri
  };
});

exports.funImages = funImages;
exports.packages = packages;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiZnVuSW1hZ2VzIiwicGFja2FnZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ4IiwiaSIsImluZGV4IiwicG93IiwiTWF0aCIsInF0dCIsImZsb29yIiwicHJpIiwiaWQiLCJwZXJpb2QiLCJ0aW1lcyIsInF1YW50aXR5IiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxJQUFNQSxZQUFZLENBQ2hCLGlDQURnQixFQUVoQixpQ0FGZ0IsRUFHaEIsaUNBSGdCLEVBSWhCLGlDQUpnQixFQUtoQixrQ0FMZ0IsRUFNaEIsa0NBTmdCLEVBT2hCLGtDQVBnQixFQVFoQixrQ0FSZ0IsQ0FBbEI7O0FBV0E7QUFDQSxJQUFNQyxXQUFXLElBQUlDLEtBQUosQ0FBVSxDQUFWLEVBQWFDLElBQWIsQ0FBa0IsQ0FBbEIsRUFBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xELE1BQU1DLGNBQVdELElBQUksQ0FBZixDQUFOO0FBQ0EsTUFBTUUsV0FBU0MsS0FBS0QsR0FBTCxDQUFTRCxLQUFULEVBQWdCLENBQWhCLENBQWY7QUFDQSxNQUFNRyxXQUFTRCxLQUFLRSxLQUFMLENBQVdGLEtBQUtELEdBQUwsQ0FBU0QsS0FBVCxFQUFnQixHQUFoQixDQUFYLENBQWY7QUFDQSxNQUFNSyxZQUFTLE9BQU9ILEtBQUtFLEtBQUwsQ0FBV0YsS0FBS0QsR0FBTCxDQUFTRixDQUFULEVBQVksQ0FBWixDQUFYLENBQWhCLENBQU47QUFDQSxTQUFPO0FBQ0xPLFFBQUlOLEtBREM7QUFFTE8sWUFBUU4sR0FGSDtBQUdMTyxXQUFPUixLQUhGO0FBSUxTLGNBQVVOLEdBSkw7QUFLTE8sV0FBT0w7QUFMRixHQUFQO0FBT0QsQ0FaZ0IsQ0FBakI7O1FBZUVaLFMsR0FBQUEsUztRQUNBQyxRLEdBQUFBLFEiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOekuuS+izrlm77niYfnu4RcbmNvbnN0IGZ1bkltYWdlcyA9IFtcbiAgJy9pbWFnZXMvY2F0ZWdvcnkvY2F0ZS1kYUAyeC5wbmcnLFxuICAnL2ltYWdlcy9jYXRlZ29yeS9jYXRlLWppQDJ4LnBuZycsXG4gICcvaW1hZ2VzL2NhdGVnb3J5L2NhdGUtZGFAMngucG5nJyxcbiAgJy9pbWFnZXMvY2F0ZWdvcnkvY2F0ZS1saUAyeC5wbmcnLFxuICAnL2ltYWdlcy9jYXRlZ29yeS9jYXRlLWppbkAyeC5wbmcnLFxuICAnL2ltYWdlcy9jYXRlZ29yeS9jYXRlLXdhbkAyeC5wbmcnLFxuICAnL2ltYWdlcy9jYXRlZ29yeS9jYXRlLWNoaUAyeC5wbmcnLFxuICAnL2ltYWdlcy9jYXRlZ29yeS9jYXRlLWppaUAyeC5wbmcnXG5dXG5cbi8vIOekuuS+izrlpZfppJDnu4RcbmNvbnN0IHBhY2thZ2VzID0gbmV3IEFycmF5KDUpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gYCR7aSArIDF9YFxuICBjb25zdCBwb3cgPSBgJHtNYXRoLnBvdyhpbmRleCwgMil9YFxuICBjb25zdCBxdHQgPSBgJHtNYXRoLmZsb29yKE1hdGgucG93KGluZGV4LCAxLjUpKX1gXG4gIGNvbnN0IHByaSA9IGAkezguODggKyBNYXRoLmZsb29yKE1hdGgucG93KGksIDUpKX1gXG4gIHJldHVybiB7XG4gICAgaWQ6IGluZGV4LFxuICAgIHBlcmlvZDogcG93LFxuICAgIHRpbWVzOiBpbmRleCxcbiAgICBxdWFudGl0eTogcXR0LFxuICAgIHByaWNlOiBwcmlcbiAgfVxufSlcblxuZXhwb3J0IHtcbiAgZnVuSW1hZ2VzLFxuICBwYWNrYWdlc1xufVxuIl19