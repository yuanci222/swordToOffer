/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length == 0 || word.length == 0) return false;

  let rows = board.length,
    cols = board[0].length,
    pathLength = 0;

  let isVisited = new Array(rows * cols);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) isVisited[row * cols + col] = false;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (hasPathCore(board, rows, cols, row, col, word, pathLength, isVisited))
        return true;
    }
  }

  return false;
};

var hasPathCore = function (
  board,
  rows,
  cols,
  row,
  col,
  word,
  pathLength,
  isVisited
) {
  if(pathLength == word.length) return true
  let hasPath = false;
  if (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    board[row][col] == word[pathLength] &&
    !isVisited[row * cols + col]
  ) {
    pathLength++;
    isVisited[row * cols + col] = true;

    hasPath =
      hasPathCore(
        board,
        rows,
        cols,
        row - 1,
        col,
        word,
        pathLength,
        isVisited
      ) ||
      hasPathCore(
        board,
        rows,
        cols,
        row + 1,
        col,
        word,
        pathLength,
        isVisited
      ) ||
      hasPathCore(
        board,
        rows,
        cols,
        row,
        col - 1,
        word,
        pathLength,
        isVisited
      ) ||
      hasPathCore(board, rows, cols, row, col + 1, word, pathLength, isVisited);

    if (!hasPath) {
      pathLength--;
      isVisited[row * cols + col] = false;
    }
  }

  return hasPath;
};

let TestCase_1 = [
  ['a', 'b', 't', 'g'],
  ['c', 'f', 'c', 's'],
  ['j', 'd', 'e', 'h'],
];
let TestCase_2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
let TestCase_3 = [
  ['a', 'b', 't', 'g']
];
let TestCase_4 = [['a']]

console.log('TestCase_1的结果: ' + exist(TestCase_1, 'bfce'));
console.log('TestCase_2的结果: ' + exist(TestCase_2, 'ABCCED'));
console.log('TestCase_3的结果: ' + exist(TestCase_3, 'bfce'));
console.log('TestCase_4的结果: ' + exist(TestCase_4, 'ab'));