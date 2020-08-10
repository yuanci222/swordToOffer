function maxSubArray(nums: number[]): number {
  if (nums.length <= 0) return 0;

  let maxSum: number = -Infinity,
    curSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (curSum <= 0) curSum = nums[i];
    else curSum += nums[i];

    if (curSum > maxSum) maxSum = curSum;
  }

  return maxSum;
}

console.log(maxSubArray([-2]));
