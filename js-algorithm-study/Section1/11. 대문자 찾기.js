function solution(s) {
  let answer = 0;
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let x of s) {
    if (upperCase.includes(x)) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//* (1) charCodeAt로 문자열을 아스키 코드 변경
//! 아스키코드 대문자 65~90, 소문자 97~122 (대문자-소문자 간의 차이는 32)
//     //let num=x.charCodeAt();
//     //if(num>=65 && num<=90) answer++;
//* (2) 고전적인 방법. immutable하므로 대문자인지 확인 가능
//     if (x === x.toUpperCase()) answer++;
//   }

//   return answer;
// }
