"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var resultEmployers = employers.filter(function (name) {
  if (name != '' && name.length > 0) {
    return name;
  }
}).map(function (name) {
  return name.toLowerCase().trim();
});
var _default = resultEmployers;
exports.default = _default;