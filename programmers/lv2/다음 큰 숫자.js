function countOne(num) {
  return num
    .toString(2)
    .split('')
    .filter((el) => el === '1').length;
}

function solution(n) {
  let answer;
  let next = n + 1;
  const originalCount = countOne(n);
  // console.log(originalCount);
  let nextCount = countOne(next);

  while (originalCount !== nextCount) {
    // console.log(originalCount, nextCount);
    next += 1;
    nextCount = countOne(next);
    // console.log(next, nextCount);
  }
  answer = next;
  return answer;
}

console.log(solution(78));
