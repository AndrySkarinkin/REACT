class Employers {
  constructor(employers) {
    this.employers = employers;
  }
  getEmployers() {
    return (this.employers.filter(name => {
      if (name != '' && name.length > 0) {
        return name;
      }
    }).map(name => name.toLowerCase().trim()))
  }
}

export default Employers;