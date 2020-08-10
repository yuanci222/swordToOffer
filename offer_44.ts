function findNthDigit(n: number): number {
  if (n >= 0 && n < 10) return n;

  let level: number = 1,
    count: number = level * countOfLevel(level);

  while (n > count) {
    n -= count;
    level++;
    count = level * countOfLevel(level);
  }

  let target: string = (
    Math.pow(10, level - 1) + Math.floor(n / level)
  ).toString();

  return parseInt(target[n % level]);
}

function countOfLevel(n: number): number {
  if (n < 1) return 0;
  if (n == 1) return 10;
  return Math.pow(10, n) - Math.pow(10, n - 1);
}

console.log(findNthDigit(0));
