//* 소수 판별 함수
function isPrime(number) {
  if (number === 2) return true;
  if (number <= 1 || number % 2 === 0) return false;
  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}
//* 1~n개의 순열 중에서 소수만 구하는 함수
function getPermutation(lookup) {
  const result = new Set();
  const aux = (arr, bucket) => {
    if (isPrime(Number(bucket))) result.add(Number(bucket));

    if (arr.length === 0) {
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let clone = arr.slice();
      let choice = clone.splice(i, 1);
      aux(clone, bucket.concat(choice));
    }
  };

  aux(lookup, '');
  return result;
}
function solution(numbers) {
  // let answer = 0;
  const permutation = getPermutation(numbers.split(''));
  console.log(permutation);

  return permutation.size;
}

// 1. numbers으로 만들 수 있는 모든 경우의 수를 계산 -> 1~n개를 순서를 고려해 뽑은 경우: 순열
// 2. 순열의 각 요소가 소수인지 검사

let input = '011';
console.log(solution(input));
