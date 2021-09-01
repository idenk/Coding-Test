function solution(n, m) {
  let gcd = getGCD(n, m);
  let lcm = (n * m) / gcd;

  return [gcd, lcm];
}

function getGCD(m, n) {
  if (m % n === 0) return n;
  return getGCD(n, m % n);
}
