function solution(s, t) {
  let answer = 0;

  for (let x of s) {
    if (x === t) answer++;
  }

  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

// 해설
// function solution(s, t) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === t) answer++;
//   }
//   return answer;
// }

// function solution(s, t) {
//   let answer = s.split(t).length;    // 찾으려는 문자를 구분자로 하여 분할하여 구하는 방법
//   return answer - 1;
// }
