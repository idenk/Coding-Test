function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (divisor(i) % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }
  return result;
}

function divisor(num) {
  let result = [];
  const sqrt = parseInt(Math.sqrt(num));

  for (let left = 1; left <= sqrt; left++) {
    if (num % left === 0) {
      result.push(left);
      if (left * left < num) {
        let right = num / left;
        result.push(right);
      }
    }
  }
  return result.length;
}
