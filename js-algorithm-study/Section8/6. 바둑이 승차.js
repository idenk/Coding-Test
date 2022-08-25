function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(L, sum) {
    if (L === arr.length) {
      if (sum < c && sum > answer) answer = sum;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

// c: 최대 적재량, arr: 바둑이들의 무게
// 재귀 이용
// i번째 바둑이를 태웠을 때, 안 태웠을 때를 전부 검사하며
// c를 넘지 않으면서 최댓값을 구함

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

// 해설
// function solution(c, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > c) return; //* 조건에 맞지 않으면 빠른 리턴
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// 부분 집합 문제
// 바둑이를 태울 수 있는 경우의 수 2^5 - 1(공집합)
