import Employers from './employers';
import {
  CalcCash,
  Sponsors
} from './calcCash';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'],
  sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
  };

class MakeBusiness {
  constructor(owner, director, cash, employers, sponsor, carefulSponsor) {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.employers = employers;
    this.sponsor = sponsor;
    this.carefulSponsor = carefulSponsor;
  }
  getResult() {
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.employers}.`);
    console.log(`And we have a sponsors:`);
    console.log(`${this.sponsor} unexpected sponsor`);
    console.log(`Note. Be careful with ${this.carefulSponsor}. It's a huge risk.`)
  }
}

const empl = new Employers(employers),
  calcCash = new CalcCash(sponsors),
  spons = new Sponsors(sponsors);

const money = calcCash.getTotalCash(),
  resultEmployers = empl.getEmployers(),
  sponsor = spons.getAllSponsors(),
  carefulSponsor = spons.getCarefulSponsor();

let makeBusiness = new MakeBusiness('Sam', 'Viktor', money, resultEmployers, sponsor, carefulSponsor);
makeBusiness.getResult();