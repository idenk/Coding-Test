function solution(x) {
  let answer = false;

  let strArr = String(x).split('');
  let sum = 0;

  for (let num of strArr) {
    sum += Number(num);
  }

  if (x % sum === 0) {
    answer = true;
  }

  return answer;
}
