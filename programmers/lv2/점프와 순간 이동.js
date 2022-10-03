function solution(n) {
  let answer = 0;

  while (n != 0) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n -= 1;
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));

// k칸 점프 or (현재까지 온 거리)x2 위치에 순간이동
// 점프 시 k만큼의 건전지 사용
// 반환 값: n까지 갈 때 건전지 사용량의 최솟값

// 순간이동으로 최대한 이동해야 건전지 사용량의 최소화가 가능
// n에 순간이동으로 도달하려면 n/2에 도달하면 됨
// n/2에 순간이동으로 도달하려면 n/4에 도달하면 됨
// 이 과정에서 n이 홀수인 경우 n-1, 점프+1(배터리 사용)
// n이 0이 될 때까지 반복
