/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if(n < 2) return 0
  if(n == 2) return 1
  if(n == 3) return 2

  let countOf3 = Math.floor(n / 3)

  if(n - countOf3 * 3 == 1)
    countOf3 -= 1

  let countOf2 = Math.floor((n - countOf3 * 3) / 2)
  
  let ret = 1
  for(let i = 1; i <= countOf3; i++){
    ret = (ret * 3) % 1000000007
  }

  return (ret * Math.pow(2, countOf2)) % 1000000007
};

console.log(cuttingRope(10));
