const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let resultEmployers = employers
  .filter(name => {
    if (name != '' && name.length > 0) {
      return name;
    }
  }).map(name => name.toLowerCase().trim());


export default resultEmployers;