function solution(s) {
  let answer = '';
  let duplicate = [];

  for (let x of s) {
    if (!duplicate.includes(x)) {
      duplicate.push(x);
      answer += x;
    }
  }

  return answer;
}

console.log(solution('ksekkset'));

// 해설
// function solution(s) {
//   let answer = '';
//   //* index of 사용. 첫번째로 발견된 문자의 인덱스 조회
//   console.log(s.indexOf("K"));
//   for (let i = 0; i < s.length; i++) { // 문자열 탐색은 for of 문 사용 불가
//     console.log(s[i], i, s.indexOf(s[i])); // i와 s.indexOf(s[i])가 일치하지 않으면, 중복된 문자
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
// }

// 번외: 특정 문자의 개수
// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf('k');

//   while (pos !== -1) {
//     answer++;
//     pos = s.indexOf('k', pos + 1);
//   }

//   return answer;
// }