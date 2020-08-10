/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  if(n <= 0) return []

  
  n = Math.floor(n);
  let arr = [];

  for (let i = 1; i < Math.pow(10, n); i++) arr.push(i);

  return arr;
};

console.log(printNumbers(2));
