function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') answer += '#';
    else answer += s[i];
  }

  return answer;
}

let str = 'BANANA';
console.log(solution(str));

// 해설
// function solution(s) {
//     let answer = '';
//     for (let x of s) {
//       if (x == 'A') answer += '#';
//       else answer += x;
//     }
//     return answer;
//   }

//   let str = 'BANANA';
//   console.log(solution(str));

//* replace 사용
//   function solution(s) {
//     let answer = s;  // 얕은 복사
//     answer = answer.replace(/A/g, '#'); // 정규식 사용. g를 넣어서 전역 변경
//     return answer;
//   }
