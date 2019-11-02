"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sponsors = exports.CalcCash = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalcCash =
/*#__PURE__*/
function () {
  function CalcCash(data) {
    _classCallCheck(this, CalcCash);

    this.data = data;
  }

  _createClass(CalcCash, [{
    key: "getTotalCash",
    value: function getTotalCash() {
      var cash = this.data.cash;
      return cash.reduce(function (a, b) {
        return a + b;
      });
    }
  }]);

  return CalcCash;
}();

exports.CalcCash = CalcCash;

var Sponsors =
/*#__PURE__*/
function () {
  function Sponsors(data) {
    _classCallCheck(this, Sponsors);

    this.data = data;
  }

  _createClass(Sponsors, [{
    key: "getAllSponsors",
    value: function getAllSponsors() {
      var _this$data = this.data,
          eu = _this$data.eu,
          rus = _this$data.rus;
      return [].concat(_toConsumableArray(eu), _toConsumableArray(rus)).join(' ');
    }
  }, {
    key: "getCarefulSponsor",
    value: function getCarefulSponsor() {
      var _this$data$eu = _slicedToArray(this.data.eu, 1),
          carefulSponsor = _this$data$eu[0];

      return carefulSponsor;
    }
  }]);

  return Sponsors;
}();

exports.Sponsors = Sponsors;