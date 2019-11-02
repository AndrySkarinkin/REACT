class CalcCash {
  constructor(data) {
    this.data = data;
  }
  getTotalCash() {
    const {
      cash
    } = this.data
    return cash.reduce((a, b) => a + b);
  }
}

class Sponsors {
  constructor(data) {
    this.data = data;
  }
  getAllSponsors() {
    const {
      eu,
      rus
    } = this.data;
    return [...eu, ...rus].join(' ');
  }
  getCarefulSponsor() {
    const {
      eu: [carefulSponsor]
    } = this.data;
    return carefulSponsor;
  }
}

export {
  CalcCash,
  Sponsors
};