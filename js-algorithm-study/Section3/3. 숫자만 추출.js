function solution(str) {
  let answer = '';
  let num = str.replace(/[^0-9]/g, '');
  answer = Number(num);

  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

//해설
// function solution(str) {
//   let answer = '';
//   for (let x of str) {
//     if (!isNaN(x)) answer += x;  //* isNaN 메소드 사용
//   }
//   return parseInt(answer);
// }

//* 리턴 시 parseInt 메소드를 사용하지 않는 경우
// function solution(str) {
//   let answer = 0;
//   for (let x of str) {
//     if (!isNaN(x)) answer = answer * 10 + Number(x); // answer의 자릿수를 증가시키며 값 누적
//   }
//   return answer;
// }
