// 유클리드 호제법
function gcd(m, n) {
  const mod = m % n;
  if (mod === 0) return n;
  return gcd(n, mod);
}

function solution(w, h) {
  const gcdNum = gcd(w, h);
  const answer = w * h - (w + h - gcdNum);
  return answer;
}

console.log(solution(8, 12));

// 대각선이 지나는 정사각형의 개수 공식
// W + H - (W, H의 최대 공약수)
