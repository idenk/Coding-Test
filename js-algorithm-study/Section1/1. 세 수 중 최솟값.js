function solution(a, b, c) {
  let answer;
  if (a > b) {
    if (b > c) answer = c;
    else answer = b;
  } else if (a > c) answer = c;
  else answer = a;

  return answer;
}

console.log(solution(1, 2, 3));


// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;  //* 마지막에 answer와 한 번만 비교
//   return answer;
// }
