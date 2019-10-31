const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

let {
  cash,
  eu: [carefulSponsor],
  eu,
  rus
} = sponsors

function calcCash(cash) {
  return cash.reduce((a, b) => a + b);
}
const money = calcCash(cash);

let resultEmployers = employers
  .filter(name => {
    if (name != '' && name.length > 0) {
      return name;
    }
  }).map(name => name.toLowerCase().trim());

const sponsor = [...eu, ...rus].join(' ');

function makeBusiness({
  owner = 'Sam',
  director = 'Viktor',
  cash = money,
  employers = resultEmployers,
  spons = sponsor,
  carefulSpons = carefulSponsor
}) {
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${employers}.`);
  console.log(`And we have a sponsors:`);
  console.log(`${spons} unexpected sponsor`);
  console.log(`Note. Be careful with ${carefulSpons}. It's a huge risk.`)
}

makeBusiness({
  cash: money,
  employers: resultEmployers,
  spons: sponsor,
  carefulSpons: carefulSponsor
});