// 최소공약수 함수
function gcd(a, b) {
  // 유클리드 호제법
  while (b !== 0) {
    let rest = a % b;
    a = b;
    b = rest;
  }
  return a;

}

// 최대공약수 함수
function lcm(a, b) {
  return a * b / gcd(a, b);
}

function solution(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++){
    result = lcm(result, arr[i]);
  }

  return result;
}

const result = solution([2, 6, 8, 14]);
console.log(result)