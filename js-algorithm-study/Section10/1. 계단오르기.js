function solution(n) {
  let answer = 0;
  const dy = new Array(n + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

// 한 번에 1~2계단씩 올라감

console.log(solution(7));

//! 해설
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 1 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n];
//   return answer;
// }

//! 동적 계획법
// 거대한 문제를 작은 단위의 문제로 쪼갬
// 작은 문제의 답을 기록하고,
// 문제의 범위를 조금씩 넓히면서 이전 작은 문제의 답을 이용해서 풀이
// 문제들의 관계에서 점화식을 만드는 것이 동적 계획법이 핵심

// 도착 계단:  1    2    3    4    5    6    7
//*방법의 수   1    2    3    5    8   13   21   -> dy테이블에 기록

// 3계단에 올라가려면? 1계단 or 2계단에서 올라가야 함
//    1계단에서 올라가는 경우의 수 + 2계단에서 올라가는 경우의 수 => 1 + 2 = 3
