/* 
  在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
*/

let testMatrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  testTarget = 5;

/**
 * 直接遍历整个矩阵
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function solution_1(matrix: number[][], target: number): boolean {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === target) {
        return true;
      }
    }
  }

  return false;
}

/**
 * 从矩阵右上角开始比较
 * 如果小于target，那么上面一行肯定都小于target，所以row++
 * 如果大于target，那么右边一列肯定都大于target，所以col++
 * 如果一直到左下角即matrix[matrix.length - 1][0]，还是不相等，那也不会有相等的了
 *
 * 同理从左下角开始也是一样的
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function solution_2(matrix: number[][], target: number): boolean {
  let row = 0,
    col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return true;
    }
  }

  return false;
}

console.log('solution_1', solution_1(testMatrix, testTarget));
console.log('solution_2', solution_2(testMatrix, testTarget));
