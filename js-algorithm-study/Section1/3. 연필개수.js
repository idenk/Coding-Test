function solution(n) {
  let answer;
  answer = Math.ceil(n / 12); // Math 객체의 올림 함수 이용
  return answer;
}

console.log(solution(25));
console.log(solution(178));


// function solution(n) {
//   let answer;
//   answer = Math.ceil(n / 12);
//   return answer;
// }

//* 내림 함수
// Math.floor(n);

//* 반올림 함수
// Math.round(n);

//* 제곱근 함수
// Math.sqrt(n);
