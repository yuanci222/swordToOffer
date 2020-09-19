function createTestData(count: number): number[] {
  let result: number[] = [];
  for (let i = 0; i < count; i++) {
    result.push(
      Math.floor(Math.random() * Math.pow(10, count.toString().length)) % count
    );
  }

  return result;
}

/**
 * 遍历数组，数组项的值为 x，新数组[x]++，统计每个值出现的次数
 * 当数组的值比较集中时，新数组会有较大浪费
 *
 * @param {number[]} nums
 * @returns {number}
 */

function findRepeatNumber(nums: number[]): number {
  console.log('nums', nums);
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]]) {
      result[nums[i]]++;
    } else {
      result[nums[i]] = 1;
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] && result[i] > 1) {
      return result[i];
    }
  }

  return -1;
}

console.log('result', findRepeatNumber(createTestData(99)));
