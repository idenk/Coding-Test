function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  const len = ps.length;

  function DFS(L, score, time) {
    if (time > m) return;
    if (L === len) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + ps[L], time + pt[L]);
      DFS(L + 1, score, time);
    }
  }
  DFS(0, 0, 0);

  return answer;
}

// m: 제한 시간, ps: 문제 점수, pt: 문제 푸는데 걸리는 시간
// 부분 집합 문제
// 최대 점수를 구하기
// 부분 집합을 구하고 제한 시간 안에 풀었다면 그 점수가 최고점인지 확인

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));

// 해설
// function solution(m, ps, pt) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = ps.length;
//   function DFS(L, sum, time) {
//     if (time > m) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + ps[L], time + pt[L]);
//       DFS(L + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);
//   return answer;
// }

// 이진 트리의 부분 집합 문제
// 문제를 풀 것인지 안 풀 것인지 선택
// 완전 탐색 -> 문제를 풀 수 있는 조합의 경우
//! 집합의 개수가 커지면 재귀로 불가능 -> DP