/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  /* return s.replace(/\s/g, '%20') */
  if(!s || !s.length) return ''

  let normalNum = 0, spaceNum = 0
  for(let i = 0; i < s.length; i++){
    if(s[i] == ' ') spaceNum++
    else normalNum++
  }

  let length = normalNum + spaceNum * 3
  let arr = []
  
  for(let i = s.length - 1, j = length - 1; i >= 0;){
    if(s[i] == ' '){
      arr[j] = '0'
      arr[j - 1] = '2'
      arr[j - 2] = '%'
      j -= 3
      i--
    }
    else {
      arr[j] = s[i]
      i--
      j--
    }
  }
  return arr.join('')
};

console.log(replaceSpace('we are happy'));
