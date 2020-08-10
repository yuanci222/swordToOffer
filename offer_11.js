/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  /* 空指针和只有一个数的情况比较特殊 */
  if(numbers.length == 0) return null
  if(numbers.length == 1) return numbers[0]

  let index1 = 0, index2 = numbers.length - 1, middle = index1 + Math.floor((index2 - index1) / 2)
  /* 第一个数小于最后一个数，旋转一定为0 */
  if(numbers[index1] < numbers[index2]) return numbers[0]
  /* 第一个数大于最后一个数，旋转一定不为0 */
  else if(numbers[index1] > numbers[index2]){
    while(index1 != index2 - 1){
      if(numbers[middle] <= numbers[index2]) index2 = middle
      if(numbers[middle] >= numbers[index1]) index1 = middle
      middle = index1 + Math.floor((index2 - index1) / 2)
    }

    return numbers[index2]
  }
  /* 第一个数和最后一个数相等，旋转可能为0可能不为0 */
  else {
    let min = numbers[0]
    numbers.forEach((element)=>{
      if(element < min)
        min = element
    })
    
    return min
  }
};

let TestCase_1 = [2, 2, 2, 0, 1]
console.log(minArray(TestCase_1));
