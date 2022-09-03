function solution(N, number) {
  // 값의 중복 방지를 위해 Set 사용, 초기화하며 숫자를 붙이는 경우를 입력
  const dp = new Array(9).fill(0).map((v, i) => new Set([Number(String(N).repeat(i))]));
  // console.log(dp);

  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i; j++) {
      // console.log('i:', i);
      // console.log('j:', j, '  i-j:', i - j);
      for (let num1 of dp[j]) {
        for (let num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
      console.log(dp);
    }
    if (dp[i].has(number)) return i;
  }

  return -1;
}

console.log(solution(5, 12));

// dp[j]: j개만큼 N을 사용했을 때 만들 수 있는 숫자의 집합

// 사칙연산과 숫자를 붙이는 경우 모두를 포함해야 함
// N이 1개인 경우 dp[1]: N
// N이 2개인 경우 dp[2]: NN, N+N, N-N, N*N, N/N (dp[1]과 dp[1]의 사칙연산)
// N이 3개인 경우 dp[3]: NNN, dp[1]과 dp[2]의 사칙연산 + dp[2]과 dp[1]의 사칙연산

// 2중 for문 i=1 ~ 9, j=i ~ i-1
// dp[j]와 dp[i-j]의 연산값을 dp[i]에 저장 ->
// i 2, j 1: dp[2] += dp[1],dp[1]의 사칙연산
// i 3, j 1: dp[3] += dp[1],dp[2]의 사칙연산
// i 3, j 2: dp[3] += dp[2],dp[1]의 사칙연산
// i 4, j 1: dp[4] += dp[1],dp[3]의 사칙연산
// i 4, j 2: dp[4] += dp[2],dp[2]의 사칙연산
// i 4, j 3: dp[4] += dp[3],dp[1]의 사칙연산
// ... 반복

// 이 과정에서 dp[i]에 number가 발견되면 종료, N이 i개일 때 최소 개수임을 보장
