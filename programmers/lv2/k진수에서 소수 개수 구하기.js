function solution(n, k) {
  let answer = 0;
  let num = n.toString(k);

  const arr = num.split(0);
  arr.forEach((el) => {
    if (isPrime(Number(el))) answer++;
  });

  return answer;
}

function isPrime(number) {
  if (number === 2) return true;
  if (number <= 1 || number % 2 === 0) return false;

  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3));

// 정수 n을 k진수로 바꿨을 때 조건에 만족하는 소수의 개수
// 0을 기준으로 split, 분할된 배열 중 소수의 개수를 리턴
