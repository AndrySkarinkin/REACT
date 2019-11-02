"use strict";

var _employers = _interopRequireDefault(require("./employers"));

var _calcCash = require("./calcCash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
    sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner, director, cash, employers, sponsor, carefulSponsor) {
    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.employers = employers;
    this.sponsor = sponsor;
    this.carefulSponsor = carefulSponsor;
  }

  _createClass(MakeBusiness, [{
    key: "getResult",
    value: function getResult() {
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.employers, "."));
      console.log("And we have a sponsors:");
      console.log("".concat(this.sponsor, " unexpected sponsor"));
      console.log("Note. Be careful with ".concat(this.carefulSponsor, ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

var empl = new _employers.default(employers),
    calcCash = new _calcCash.CalcCash(sponsors),
    spons = new _calcCash.Sponsors(sponsors);
var money = calcCash.getTotalCash(),
    resultEmployers = empl.getEmployers(),
    sponsor = spons.getAllSponsors(),
    carefulSponsor = spons.getCarefulSponsor();
var makeBusiness = new MakeBusiness('Sam', 'Viktor', money, resultEmployers, sponsor, carefulSponsor);
makeBusiness.getResult();