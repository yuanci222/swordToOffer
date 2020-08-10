/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0 || n == 1) return n

  let first = 0,
    second = 1,
    ret = 1;
  for (let i = 2; i < n; i++) {
    first = second;
    second = ret;
    ret = (first + second)  % 1000000007;
  }

  return ret;
};

for(let i = 0; i <= 100; i++){
  console.log(`第${i}个数: ${fib(i)}`);
}