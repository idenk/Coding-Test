function solution(n) {
  if (n === 0) return 0;

  let answer = 1;
  const mid = parseInt(n / 2);

  for (let i = 1; i <= mid; i++) {
    let sum = 0;
    for (let j = i; j <= mid + 1; j++) {
      sum += j;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) break;
    }
  }

  return answer;
}