function solution(n, r) {
  let answer;
  const memo = new Array(34).fill(0).map(() => new Array(34).fill(0));

  function combination(n, r) {
    if (memo[n][r] !== 0) return memo[n][r];
    if (n === r) return 1;
    if (r === 1) {
      return n;
    } else {
      return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    }
  }
  answer = combination(n, r);

  return answer;
}

// n개에서 r개를 뽑는 경우의 수 공식: n!/((n-r)!*r!)
// 또는 n-1개에서 r-1개를 뽑는 경우의 수 + n-1개에서 r개를 뽑는 경우의 수

console.log(solution(5, 3));
console.log(solution(33, 19));

//! 해설: 메모이제이션
function solution(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1; // 종료 조건
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); // 저장하면서 리턴
  }
  answer = DFS(n, r);
  return answer;
}

// {1, 2, 3, 4, 5}에서 3개를 뽑을 때...
// 5를 기준으로 5가 포함되는 집합, 포함되지 않는 집합이 존재
//              {ㅇ, ㅇ, 5}, {ㅇ, ㅇ, ㅇ}
// -> 5가 3개에 포함되었다고 가정하면,
// 5가 포함되는 경우 4개에서 2개를 뽑는 경우의 수와 같음
// 5가 포함되지 않는 경우 4개에서 3개를 뽑는 경우의 수와 같음
// -> n개에서 r개를 뽑는 경우의 수 = r-1개를 뽑는 경우의 수 + n-1개에서 r개를 뽑는 경우의 수

//            5C3
//*           /  \
//         4C2 + 4C3
//*       /  \
//      3C1 + 3C2
//*    /  \
//   2C0 + 2C1
//*       /  \
//     1C0 + 1C1

// -> 종료조건: r이 0이되거나 r과 n이 같은 경우 return 1

// 이미 구한 값은 다시 계산하지 않음 -> 메모이제이션
