/* 
题目二:不修改数组找出重复的数字。
在一个长度为n+1的数组里的所有数字都在1~n的范围内，所以数组中至少有一个数字是重复的。请找出数组中任意一个重复的数字，但不能修改输入的数组。例如，如果输入长度为8的数组｛2，3，5，4，3，2，6，7｝，那么对应的输出是重复的数字2或者3。
*/

function createTestData(count: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < count; i++) {
    result.push(
      (Math.floor(Math.random() * Math.pow(10, count.toString().length)) %
        (count - 1)) +
        1
    );
  }

  return result;
}

let testData: number[] = createTestData(20);

/**
 * 新建数组result, 遍历nums, 将result[nums[i]]赋值true，如果发现result[nums[i]]已经为true，说明前面已经赋值过，判断重复
 *
 * @param {number[]} nums
 * @returns {number}
 */
function solution_1(nums: number[]): number {
  let result: boolean[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      return nums[i];
    } else {
      result[nums[i]] = true;
    }
  }

  return -1;
}

/**
 * 某个区间内，在不重复的前提下最多有 end - start + 1个数，即从start到end，如果在这个范围内的数字的个数比end - start + 1还多，说明肯定有重复
 *
 * @param {number[]} nums
 * @returns {number}
 */
function solution_2(nums: number[]): number {
  let start = 1,
    end = nums.length - 1;
  while (start <= end) {
    let middle = ((end - start) >> 1) + start;
    // 前半部分范围内出现的次数
    let count = countRange(nums, start, middle);
    // 这个范围只有一个数
    if (end == start) {
      // 如果count>1，说明一个数出现了不止一次
      if (count > 1) {
        return start;
      } else {
        break;
      }
    }

    // 如果count比范围差值大，说明这个范围内有重复的，继续在这个范围内找。否则在后半部分中找
    if (count > middle - start + 1) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}

function countRange(nums: number[], start: number, end: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= start && nums[i] <= end) {
      count++;
    }
  }

  return count;
}

console.log('testData', testData);
console.log('solution_1', solution_1(testData));
console.log('solution_2', solution_2(testData));
