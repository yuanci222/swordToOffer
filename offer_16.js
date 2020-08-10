/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n == 0) return 1

  let ret = 1;
  if(n > 0){
    if(x == 1) return 1
    if(x == - 1) return n % 2 == 0 ? 1 : -1
    for(let i = 0; i < n; i ++){
      ret *= x
    }  
    return ret
  }

  if(n < 0){
    return 1 / myPow(x, -n)
  }
};


console.log(myPow(0, 10));
console.log(myPow(-1, 10));
console.log(myPow(2, 10000));
console.log(myPow(2, -3));
console.log(myPow(-1, -1009));
console.log(myPow(0, -2));
