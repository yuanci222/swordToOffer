/* 
  请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
*/

let testStr = 'We are happy.';
function solution_1(string: string): string {
  return string.split(' ').join('%20');
}

function solution_2(string: string): string {
  // 这种方法只会替换第一个空格，要匹配所有空格得用正则
  /* return string.replace(' ', '%20'); */
  return string.replace(/\s/g, '%20');
}

console.log('solution_1', solution_1(testStr));
console.log('solution_2', solution_2(testStr));
