function solution(numbers) {
  let answer = '';

  answer = numbers
    .map((el) => String(el))
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');

  if (answer[0] === '0') answer = '0';

  return answer;
}

let input = [3, 30, 34, 5, 9];
console.log(solution(input));

// 순열 -> 시간 초과
