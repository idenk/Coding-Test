// 소수 판별 함수
function isPrime(number) {
  if (number === 2) {
    return true;
  }
  if (number <= 1 || number % 2 === 0) {
    return false;
  }
  // 특정 숫자의 약수는 제곱근을 기준으로 대칭 -> 제곱근과 같거나 작은 숫자로 나누어 떨어지면 소수가 아님
  // 짝수는 소수가 될 수 없으므로 홀수만 검사
  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let reverse = '';
    let tmp = x;
    while (tmp) {
      reverse += String(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    reverse = Number(reverse);
    if (isPrime(reverse)) answer.push(Number(reverse));
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 해설
// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     //* 숫자 뒤집기
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// function solution(arr) {
//   let answer = [];
//   for (let x of arr) {
//     let res = Number(x.toString().split('').reverse().join(''));
//     if (isPrime(res)) answer.push(res);
//   }
//   return answer;
// }
