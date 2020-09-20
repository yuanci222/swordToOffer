/* 
  有两个排序的数组A1，A2，内存在A1的末尾有足够多的空余空间容纳A2，实现一个函数把A2中的所有数字插入A1中，并且所有的数字是排序的
*/
let testData_1 = [1, 2, 3, 7, 9, 11],
  testData_2 = [4, 5, 6, 8, 10, 12];

function solution(A1: number[], A2: number[]): void {
  let i = A1.length - 1,
    j = A2.length - 1,
    count = A2.length,
    lastIndex = A1.length + A2.length - 1;

  while (i >= 0 && j >= 0) {
    if (A1[i] > A2[j]) {
      A1[lastIndex] = A1[i];
      i--;
    } else {
      A1[lastIndex] = A2[j];
      j--;
    }
    lastIndex--;
  }

  if (i < 0) {
    while (lastIndex > 0) {
      A1[lastIndex] = A2[j];
      j--;
      lastIndex--;
    }
  }
  if (j < 0) {
    while (lastIndex > 0) {
      A1[lastIndex] = A1[i];
      i--;
      lastIndex--;
    }
  }
}

solution(testData_1, testData_2);
console.log(testData_1);
