/*
题目一:找出数组中重复的数字。
在一个长度为n的数组里的所有数字都在0~-1的范围内。数组中某
些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了
几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数
组｛2，3，1，0，2，5，3｝，那么对应的输出是重复的数字2或者3
*/

function createTestData(count: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < count; i++) {
    result.push(
      Math.floor(Math.random() * Math.pow(10, count.toString().length)) % count
    );
  }

  return result;
}

let testData = createTestData(10);

/**
 * 第一种
 * 遍历数组，数组项的值为 x，新数组[x]++，统计每个值出现的次数
 * 可能当数组的值比较集中时，新数组会有较大浪费
 *
 * @param {number[]} nums
 * @returns {number}
 */
function solution_1(nums: number[]): boolean {
  let result: boolean[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      return true;
    } else {
      result[nums[i]] = true;
    }
  }

  return false;
}

/**
 * 数组的下标范围是 0~n-1，所有数字的范围也在 0~n-1，如果没有重复那么 nums[i] == i
 * 所以拿 nums[i] 和 i 比较
 * 如果相等，比较下一项
 * 如果不相等，再比较 nums[i] 和 nums[nums[i]]
 *  如果不相等，nums[i] 和 nums[nums[i]] 交换，使 nums[nums[i]] == nums[i]。把 nums[i] 记作 m，机 nums[m] = m
 *  如果相等，说明重复了
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
function solution_2(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i) {
      let m: number = nums[i];
      if (nums[i] == nums[m]) {
        return true;
      } else {
        [nums[i], nums[m]] = [nums[m], nums[i]];
        // 交换过一次之后，nums[i] 也不一定等于 i，还要再进行一轮比较，所以自减
        i--;
      }
    }
  }

  return false;
}

console.log('testData', testData);
console.log('solution_1', solution_1(testData));
console.log('solution_2', solution_2(testData));
