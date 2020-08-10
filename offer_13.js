/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  if (m < 0 || n < 0 || k < 0) return 0;

  /* 初始化 */
  let isVisited = new Array(m * n);
  for (let i = 0; i < m * n; i++) {
    isVisited[i] = false;
  }

  let count = movingCountCore(k, m, n, 0, 0, isVisited);

  return count;
};

var movingCountCore = function (k, m, n, row, col, isVisited) {
  let count = 0;
  if (check(k, m, n, row, col, isVisited)) {
    isVisited[row * n + col] = true;

    count =
      1 +
      movingCountCore(k, m, n, row - 1, col, isVisited) +
      movingCountCore(k, m, n, row + 1, col, isVisited) +
      movingCountCore(k, m, n, row, col - 1, isVisited) +
      movingCountCore(k, m, n, row, col + 1, isVisited);
  }

  return count;
};

var check = function (k, m, n, row, col, isVisited) {
  if (
    row >= 0 &&
    row < m &&
    col >= 0 &&
    col < n &&
    initCount(row) + initCount(col) <= k &&
    !isVisited[row * n + col]
  )
    return true;
  return false;
};

var initCount = function (num) {
  let count = 0;
  while (num >= 10) {
    count += num % 10;
    num = Math.floor(num / 10);
  }
  count += num;
  return count;
};

for(let i = 0; i < 16; i++){
  console.log(initCount(i));
  
}

