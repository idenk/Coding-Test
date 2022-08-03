function solution(s) {
  let answer = 'YES';
  let string = s.toLowerCase();

  for (let i = 0; i < Math.floor(s.length / 2); i++) {   // 문자열의 절반까지만 순회
    if (string[i] !== string[s.length - i - 1]) {
      answer = 'NO';
      break;
    }
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer = 'YES';
//   s = s.toLowerCase();
//   let len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {    // 절반만 검사
//     if (s[i] != s[len - i - 1]) return 'NO';
//   }
//   return answer;
// }

// function solution(s) {
//   let answer = 'YES';
//   s = s.toLowerCase();
//   if (s.split('').reverse().join('') != s) return 'NO';
//   return answer;
// }
