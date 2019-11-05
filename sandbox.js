const {sum, subtract} = require('./math')

// console.log(
//     sum(3,4)
// )

// const newSet = new Set ([1,1,2,3,4,5,5,6])
// console.log(newSet);

const newSet = Array.from(new Set ([2,3,1,1,4,5,5,6]));
console.log(newSet);

const newArray = Array.from(('32141567')).map(Number)
newArray.unshift(sum(22,20));
newArray.sort(function(a, b){return a-b});
// const newArray = Array.from(('1234567')).map(val => parseInt(val,10));
console.log(newArray);