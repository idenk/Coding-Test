function solution(n) {
  let answer = 0;
  const dy = new Array(n + 1).fill(0);
  dy[1] = 2;
  dy[2] = 3;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

// 돌 개수: 1    2    3    4    5    6    7
//*  방법: 2    3    5    8   13   21   34

console.log(solution(7));

// 해설
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 2 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n + 1; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n + 1];
//   return answer;
// }

// 목적지를 n+1칸으로 간주. 계단 오르기와 동일한 문제

//? 만약 3칸까지 건널 수 있다면?
// dy[0] = 1, dy[1] = 1, dy[2] = 2
// dy[n] = dy[n-3] + dy[n-2] + dy[n-1]
