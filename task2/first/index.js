import resultEmployers from './employers';
import {
  money,
  sponsor,
  carefulSponsor
} from './calcCash';

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

let makeBusiness = new MakeBusiness('Sam', 'Viktor', money, resultEmployers, sponsor, carefulSponsor);
makeBusiness.getResult();