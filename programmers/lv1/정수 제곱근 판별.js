function solution(n) {
  let squareRoot = Math.sqrt(n);
  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot + 1, 2);
  }
  return -1;
}
