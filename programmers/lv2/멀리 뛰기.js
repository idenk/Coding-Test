function solution(n) {
  let answer = 0;
  const dp = [0n, 1n, 2n];  // BigInt 사용 (오버플로우 방지)

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  
  answer = dp[n];
  return answer % 1234567n;
}

console.log(solution(4))

// dp
// 리턴 값: 한 번에 1 or 2칸을 뛸 수 있을 때 n칸까지 도달하는 방법의 수
// 1칸으로 가는 방법 수: 1
// 2칸으로 가는 방법 수: 2 -> (1칸, 1칸), (2칸)

// 3칸으로 가는 방법 수 : 1칸에서 뛰는 방법 수 + 2칸에서 뛰는 방법 수 -> 1 + 2 = 3
// -> 피보나치 수열