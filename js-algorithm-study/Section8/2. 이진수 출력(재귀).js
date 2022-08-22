// 반복문
// function solution(n) {
//   let answer = '';
//   let q = n,
//     r;
//   while (q >= 1) {
//     r = q % 2;
//     q = parseInt(q / 2);
//     answer = r + answer;
//   }
//   return answer;
// }
// 재귀
function solution(n) {
  let answer = '';
  function recursive(num) {
    if (num === 0) return;

    // answer = (num % 2) + answer;
    recursive(parseInt(num / 2));
    answer = answer + (num % 2);
  }
  recursive(n);
  return answer;
}

console.log(solution(11));

// 해설
// function solution(n) {
//   let answer = '';
//   function DFS(n) {
//     if (n === 0) return;
//     else {
//       DFS(parseInt(n / 2));
//       answer += String(n % 2);
//     }
//   }
//   DFS(n);
//   return answer;
// }
