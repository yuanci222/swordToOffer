let TestCase_1 = [2, 3, 1, 0, 2, 5, 3]

var findRepeatNumber = function(nums){
  if (nums.length <= 0) {
    return false
  }

  for (let i in nums) {
    if (i < 0 || i >nums.length - 1) {
      return false
    }
  }

  for (let i = 0; i < nums.length; i++) {
    while(nums[i] != i){
      if(nums[i] == nums[nums[i]]){
        return nums[i];
      }

      let temp = nums[i];
      nums[i] = nums[temp];
      nums[temp] = temp;
    }
  }

  return false
}

findRepeatNumber(TestCase_1)