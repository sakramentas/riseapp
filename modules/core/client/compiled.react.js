'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentLoans = function (_React$Component) {
  _inherits(CurrentLoans, _React$Component);

  function CurrentLoans(props) {
    _classCallCheck(this, CurrentLoans);

    var _this = _possibleConstructorReturn(this, (CurrentLoans.__proto__ || Object.getPrototypeOf(CurrentLoans)).call(this, props));

    State = {
      loans: props.user.openedloans
    };
    return _this;
  }

  return CurrentLoans;
}(_react2.default.Component);

exports.default = CurrentLoans;
//# sourceMappingURL=compiled.react.js.map
