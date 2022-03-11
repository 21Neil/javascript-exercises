// const removeFromArray = function(...argus) {
//   const array = argus[0];
//   return array.filter( val => !argus.includes(val))
// }

// const removeFromArray = function(...argus) {
//   const arr = argus[0];
//   const newArr = [];
//   arr.forEach( val => {
//     if(!argus.includes(val)){
//       newArr.push(val)
//     }
//   })
//   return newArr;
// }

const removeFromArray = function(arr, ...nums) {
  let result = arr.filter((item) => {
    let count = 0;
    for (const num of nums) {
      if (item === num) {
        count += 1;
      }
    }
    return count === 0
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
