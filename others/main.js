const names = ["Andry", "Ola", "Pitr", "Sasha"];

let resultName = names.filter(name => {
  return name.length < 5;
});

//console.log(resultName);

let data = ["marinA", "OLga", "MisHKA"];

data = data.map(item => item.toLowerCase());

//console.log(data);

const arr1 = [78, 6, 87],
  arr2 = [90, 76, 111];

const res = Math.max(...arr1, ...arr2);

//console.log(res);

const obj1 = {
  name: "Andry",
  age: 30
};

const obj2 = {
  name: "Ola",
  age: 25
};

const objRes = {
  ...obj1,
  ...obj2
};
//console.log(objRes);

const user = {
  name: {
    first: "Andry",
    second: "Skarinkin"
  },
  age: 30
};

const {
  name: {
    second: family
  }
} = user;

//console.log(family);

const datas = [
  ["Andry", "Ira"],
  ["Olia", "Sasha"]
];

const [
  [boy],
  [girl]
] = datas;

//console.log(`${boy} and ${girl}`);

const item = {
  name: "Andry",
  girls: {
    firsts: ["Marina", "Lena"],
    seconds: ["Ira", "Olia"],
    third: {
      friend: "default",
      wife: "good girl"
    }
  }
};

const {
  girls: {
    seconds: [, trueWife],
    third: {
      friend,
      wife: wif
    }
  }
} = item;

//console.log(trueWife);


const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let res = employers.filter(name => {
  if (name != '' && name.length > 0) {
    return name;
  }
}).map(name => name.toUpperCase())

console.log(res);