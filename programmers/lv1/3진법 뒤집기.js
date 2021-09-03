function solution(n) {
  const ternary = n.toString(3);
  const reversed = ternary.split('').reverse().join('');
  const decimal = parseInt(reversed, 3);
  return decimal;
}

solution(45);

// 1. n을 3진법으로 표현
// 2. 앞뒤 반전
// 3. 다시 10진법으로 표현
