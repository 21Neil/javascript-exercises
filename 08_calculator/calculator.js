const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  // let sum = 0;
  // arr.map(num => (sum += num));
  // return sum;
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator *= currentValue)
};

const power = function (a, b) {
  // let pow = 1;
  // for(let i = 0; i < b; i++){
  //   pow *= a
  // }
  // return pow;
  return Math.pow(a, b)
};

const factorial = function (num) {
  // let factorial = 1; 
  // for(let i = 1; i <= num; i++){
  //   factorial *= i
  // }
  // return factorial;
  if(num === 0){
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
