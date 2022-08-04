function solution(s) {
  let answer = '';
  let count = 1;
  let after = '';

  for (let i = 0; i < s.length; i++) {
    after = s[i + 1]; // 다음 문자열 갱신
    if (s[i] === after) {
      // 현재 문자가 다음 문자와 동일 (마지막 문자는 undefined와 비교)
      count++;
    } else {
      answer += s[i];
      if (count !== 1) answer += String(count);
      count = 1;
    }
  }
  return answer;
}

// 문자열을 순회하며
// 다음 문자열과 현재 문자열을 비교. 동일할 경우 Counting
// 다르면 현재 문자열과 Count를 입력(1 제외)하고 1로 초기화

let str = 'KKHSSSSSSSE';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer = '';
//   let cnt = 1;
//   s = s + ' ';   // 빈문자 입력
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) cnt++;
//     else {
//       answer += s[i];
//       if (cnt > 1) answer += String(cnt);
//       cnt = 1;
//     }
//   }
//   return answer;
// }
