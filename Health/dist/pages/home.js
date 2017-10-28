'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '养生保健__百科'
    }, _this.data = {
      numeral: ['http://img4.imgtn.bdimg.com/it/u=3804248273,3060415275&fm=27&gp=0.jpg', 'http://a1.ifengimg.com/autoimg/89/56/1745689_3.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509113906430&di=9e721622b2b2c39f425b3edaf49d2292&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120913%2F6488038_124557200143_2.jpg'],
      // awardArr: [
      //   [
      //     'http://pic39.nipic.com/20140307/8821914_191200664000_2.jpg',
      //     '谢谢惠顾'
      //   ],
      //   [
      //     'http://pic39.nipic.com/20140307/8821914_191200664000_2.jpg',
      //     '谢谢惠顾'
      //   ],
      //   [
      //     'http://pic39.nipic.com/20140307/8821914_191200664000_2.jpg',
      //     '谢谢惠顾'
      //   ]
      // ],
      text: ['恭喜您获得宝马1系轿车一辆', '恭喜您获得宝马X6越野车一辆', '谢谢惠顾,再接再厉'],
      awards: '',
      interval: null,
      num: '',
      index: null,
      texts: ''
    }, _this.methods = {
      start: function start() {
        var self = this;
        // let index = 0
        self.index = Math.floor(Math.random() * 3);
        console.log(self.index);
        // self.awards = self.numeral[self.index][0]
        self.awards = self.numeral[self.index];
        self.texts = self.text[self.index];
        self.setData({
          // awards: self.numeral[self.index][0]
          awards: self.numeral[self.index]
        });
      },
      stop: function stop() {
        var self = this;
        clearInterval(self.interval);
      },
      random: function random() {
        var self = this;
        var index = 0;
        self.awards = self.numeral[index];
        self.setData({
          awards: self.numeral[index]
        });
        self.interval = setInterval(function () {
          self.awards = self.numeral[index];
          self.setData({
            awards: self.numeral[index]
          });
          index = Math.floor(Math.random() * 5 + 3);
          // if (index === 8) {
          //   index = 0
          // }
        }, 600);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm51bWVyYWwiLCJ0ZXh0IiwiYXdhcmRzIiwiaW50ZXJ2YWwiLCJudW0iLCJpbmRleCIsInRleHRzIiwibWV0aG9kcyIsInN0YXJ0Iiwic2VsZiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwic3RvcCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1AsdUVBRE8sRUFFUCxvREFGTyxFQUdQLDBNQUhPLENBREo7QUFNTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFlBQU0sQ0FDSixlQURJLEVBRUosZ0JBRkksRUFHSixXQUhJLENBcEJEO0FBeUJMQyxjQUFRLEVBekJIO0FBMEJMQyxnQkFBVSxJQTFCTDtBQTJCTEMsV0FBSyxFQTNCQTtBQTRCTEMsYUFBTyxJQTVCRjtBQTZCTEMsYUFBTztBQTdCRixLLFFBK0JQQyxPLEdBQVU7QUFDUkMsV0FEUSxtQkFDQztBQUNQLFlBQUlDLE9BQU8sSUFBWDtBQUNBO0FBQ0FBLGFBQUtKLEtBQUwsR0FBYUssS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLENBQTNCLENBQWI7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUwsS0FBS0osS0FBakI7QUFDQTtBQUNBSSxhQUFLUCxNQUFMLEdBQWNPLEtBQUtULE9BQUwsQ0FBYVMsS0FBS0osS0FBbEIsQ0FBZDtBQUNBSSxhQUFLSCxLQUFMLEdBQWFHLEtBQUtSLElBQUwsQ0FBVVEsS0FBS0osS0FBZixDQUFiO0FBQ0FJLGFBQUtNLE9BQUwsQ0FBYTtBQUNYO0FBQ0FiLGtCQUFRTyxLQUFLVCxPQUFMLENBQWFTLEtBQUtKLEtBQWxCO0FBRkcsU0FBYjtBQUlELE9BYk87QUFjUlcsVUFkUSxrQkFjQTtBQUNOLFlBQUlQLE9BQU8sSUFBWDtBQUNBUSxzQkFBY1IsS0FBS04sUUFBbkI7QUFDRCxPQWpCTztBQWtCUlMsWUFsQlEsb0JBa0JFO0FBQ1IsWUFBSUgsT0FBTyxJQUFYO0FBQ0EsWUFBSUosUUFBUSxDQUFaO0FBQ0FJLGFBQUtQLE1BQUwsR0FBY08sS0FBS1QsT0FBTCxDQUFhSyxLQUFiLENBQWQ7QUFDQUksYUFBS00sT0FBTCxDQUFhO0FBQ1hiLGtCQUFRTyxLQUFLVCxPQUFMLENBQWFLLEtBQWI7QUFERyxTQUFiO0FBR0FJLGFBQUtOLFFBQUwsR0FBZ0JlLFlBQVksWUFBTTtBQUNoQ1QsZUFBS1AsTUFBTCxHQUFjTyxLQUFLVCxPQUFMLENBQWFLLEtBQWIsQ0FBZDtBQUNBSSxlQUFLTSxPQUFMLENBQWE7QUFDWGIsb0JBQVFPLEtBQUtULE9BQUwsQ0FBYUssS0FBYjtBQURHLFdBQWI7QUFHQUEsa0JBQVFLLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUEvQixDQUFSO0FBQ0M7QUFDQTtBQUNBO0FBQ0YsU0FUZSxFQVNiLEdBVGEsQ0FBaEI7QUFVRDtBQW5DTyxLOzs7Ozs2QkFxQ0QsQ0FDUjs7OztFQXpFZ0MsZUFBS08sSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WFu+eUn+S/neWBpV9f55m+56eRJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbnVtZXJhbDogW1xuICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTM4MDQyNDgyNzMsMzA2MDQxNTI3NSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ExLmlmZW5naW1nLmNvbS9hdXRvaW1nLzg5LzU2LzE3NDU2ODlfMy5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwOTExMzkwNjQzMCZkaT05ZTcyMTYyMmIyYjJjMzlmNDI1YjNlZGFmNDlkMjI5MiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZwaWMyMy5uaXBpYy5jb20lMkYyMDEyMDkxMyUyRjY0ODgwMzhfMTI0NTU3MjAwMTQzXzIuanBnJ1xuICAgIF0sXG4gICAgLy8gYXdhcmRBcnI6IFtcbiAgICAvLyAgIFtcbiAgICAvLyAgICAgJ2h0dHA6Ly9waWMzOS5uaXBpYy5jb20vMjAxNDAzMDcvODgyMTkxNF8xOTEyMDA2NjQwMDBfMi5qcGcnLFxuICAgIC8vICAgICAn6LCi6LCi5oOg6aG+J1xuICAgIC8vICAgXSxcbiAgICAvLyAgIFtcbiAgICAvLyAgICAgJ2h0dHA6Ly9waWMzOS5uaXBpYy5jb20vMjAxNDAzMDcvODgyMTkxNF8xOTEyMDA2NjQwMDBfMi5qcGcnLFxuICAgIC8vICAgICAn6LCi6LCi5oOg6aG+J1xuICAgIC8vICAgXSxcbiAgICAvLyAgIFtcbiAgICAvLyAgICAgJ2h0dHA6Ly9waWMzOS5uaXBpYy5jb20vMjAxNDAzMDcvODgyMTkxNF8xOTEyMDA2NjQwMDBfMi5qcGcnLFxuICAgIC8vICAgICAn6LCi6LCi5oOg6aG+J1xuICAgIC8vICAgXVxuICAgIC8vIF0sXG4gICAgdGV4dDogW1xuICAgICAgJ+aBreWWnOaCqOiOt+W+l+WunemprDHns7vovb/ovabkuIDovoYnLFxuICAgICAgJ+aBreWWnOaCqOiOt+W+l+WunemprFg26LaK6YeO6L2m5LiA6L6GJyxcbiAgICAgICfosKLosKLmg6Dpob4s5YaN5o6l5YaN5Y6JJ1xuICAgIF0sXG4gICAgYXdhcmRzOiAnJyxcbiAgICBpbnRlcnZhbDogbnVsbCxcbiAgICBudW06ICcnLFxuICAgIGluZGV4OiBudWxsLFxuICAgIHRleHRzOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc3RhcnQgKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBsZXQgaW5kZXggPSAwXG4gICAgICBzZWxmLmluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMylcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuaW5kZXgpXG4gICAgICAvLyBzZWxmLmF3YXJkcyA9IHNlbGYubnVtZXJhbFtzZWxmLmluZGV4XVswXVxuICAgICAgc2VsZi5hd2FyZHMgPSBzZWxmLm51bWVyYWxbc2VsZi5pbmRleF1cbiAgICAgIHNlbGYudGV4dHMgPSBzZWxmLnRleHRbc2VsZi5pbmRleF1cbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIC8vIGF3YXJkczogc2VsZi5udW1lcmFsW3NlbGYuaW5kZXhdWzBdXG4gICAgICAgIGF3YXJkczogc2VsZi5udW1lcmFsW3NlbGYuaW5kZXhdXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3RvcCAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5pbnRlcnZhbClcbiAgICB9LFxuICAgIHJhbmRvbSAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgIHNlbGYuYXdhcmRzID0gc2VsZi5udW1lcmFsW2luZGV4XVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgYXdhcmRzOiBzZWxmLm51bWVyYWxbaW5kZXhdXG4gICAgICB9KVxuICAgICAgc2VsZi5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2VsZi5hd2FyZHMgPSBzZWxmLm51bWVyYWxbaW5kZXhdXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgYXdhcmRzOiBzZWxmLm51bWVyYWxbaW5kZXhdXG4gICAgICAgIH0pXG4gICAgICAgIGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDMpXG4gICAgICAgICAvLyBpZiAoaW5kZXggPT09IDgpIHtcbiAgICAgICAgIC8vICAgaW5kZXggPSAwXG4gICAgICAgICAvLyB9XG4gICAgICB9LCA2MDApXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgfVxufVxuIl19