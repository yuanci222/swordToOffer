const TestCase_1 = [2, 3, 5, 4, 3, 2, 6, 7];

var findRepeatNumber = function (nums) {
  let length = nums.length;

  if (nums.length <= 0) return false;

  let start = 1,
    end = length - 1;
  while (end >= start) {
    let middle = ((end - start) >> 1) + start;
    let count = countRange(nums, length, start, middle);
    if (end == start) {
      if (count > 1) {
        console.log(start);
        
        return start;
      } else break;
    }

    if (count > middle - start + 1) end = middle;
    else start = middle + 1;
  }
  return -1;
};

var countRange = function (nums, length, start, end) {
  if (length <= 0) return 0;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] >= start && nums[i] <= end) ++count;
    return count;
  }
};

findRepeatNumber(TestCase_1);
