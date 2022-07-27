function solution(a, b, c) {
  let answer = 'YES',
    max;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  // 짧은 두 막대의 길이의 합을 편하게 구하기 위한 수식
  if (a + b + c - max <= max) answer = 'NO';

  return answer;
}

// 가장 긴 막대의 길이보다 다른 두 막대의 길이의 합이 커야 삼각형이 만들어 진다

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));


// function solution(a, b, c) {
//   let answer = 'YES',    // 초기 YES로 할당을 해두고, 필요에 따라 NO 재할당
//     max;
//   let tot = a + b + c;   //* 변수 선언
//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (tot - max <= max) answer = 'NO';
//   return answer;
// }

// console.log(solution(13, 33, 17));
