function solution(n) {
  return String(n)
    .split('')
    .map((el) => Number(el))
    .reduce((acc, num) => acc + num);
}
