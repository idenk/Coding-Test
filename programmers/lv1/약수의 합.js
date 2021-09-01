function solution(n) {
  let result = 0;
  const sqrt = Math.floor(Math.sqrt(n));

  for (let left = 1; left <= sqrt; left++) {
    if (n % left === 0) {
      result += left;
      if (left * left < n) {
        let right = n / left;
        result += right;
      }
    }
  }

  return result;
}
