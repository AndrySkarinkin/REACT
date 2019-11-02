"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employers =
/*#__PURE__*/
function () {
  function Employers(employers) {
    _classCallCheck(this, Employers);

    this.employers = employers;
  }

  _createClass(Employers, [{
    key: "getEmployers",
    value: function getEmployers() {
      return this.employers.filter(function (name) {
        if (name != '' && name.length > 0) {
          return name;
        }
      }).map(function (name) {
        return name.toLowerCase().trim();
      });
    }
  }]);

  return Employers;
}();

var _default = Employers;
exports.default = _default;