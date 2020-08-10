/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  if(nums.length == 0) return []

  let before = 0, after = nums.length - 1

  while(before < after){
    if(shouldBeAfter(nums[before])){
      if(shouldBeBefore(nums[after])){
        let temp = nums[after]
        nums[after] = nums[before]
        nums[before] = temp
        before++
        after--
      }
      else
        after--
    }
    else 
      before++
  }

  return nums
};

var shouldBeAfter = function(num){
  return num % 2 == 0 ? true : false
}

var shouldBeBefore = function(num){
  return num % 2 == 1 ? true : false
}

console.log(exchange([1,2,3,4]));
