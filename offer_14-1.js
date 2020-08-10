/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if(n < 2) return 0
  if(n == 2) return 1
  if(n == 3) return 2

  let products = new Array(n + 1)
  products[0] = 0
  products[1] = 1
  products[2] = 2
  products[3] = 3
  let max = 0

  for(let i = 4; i <= n; i++){
    max = 0
    for(let j = 1; j <= Math.floor(i / 2); j++){
      let product = products[j] * products[i - j]
      if(max < product)
        max = product

      products[i] = max
    }
  }

  max = products[n]
  return max
};

console.log(cuttingRope(10));
