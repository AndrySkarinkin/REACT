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

const sponsor = [...eu, ...rus].join(' ');

export {
  money,
  sponsor,
  carefulSponsor
};