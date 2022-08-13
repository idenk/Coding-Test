function solution(n) {
  let answer = '';

  while(n > 0){
    let remainder = n % 3;
    let quotient = Math.floor(n / 3);
    if (remainder === 0){
      remainder = 4;
      quotient -= 1;
    }
    answer = remainder + answer;
    n = quotient;
  }

  return answer;
}

// 삼진법   -> 0, 1, 2
// 124나라  -> 1, 2, 4
// 0 대신 4가 사용됨
// -> 3으로 나누어 떨어진다면 나머지를 4, 몫을 1감소시킴

let input = 26;
console.log(solution(input));