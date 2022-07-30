function solution(s) {
  let answer = '';
  const length = s.length;
  let mid = Math.floor(length / 2);

  if (length % 2 !== 0) answer += s[mid];
  else answer = answer.concat(s[mid - 1], s[mid]);

  return answer;
}

console.log(solution('study'));
console.log(solution('good'));

// 해설
// function solution(s) {
//     let answer;
//     let mid = Math.floor(s.length / 2);
//* (1) substring 사용
//     if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//     else answer = s.substring(mid - 1, mid + 1);
//* (2) substr 사용
//     //if(s.length%2===1) answer=s.substr(mid, 1);
//     //else answer=s.substr(mid-1, 2);
//     return answer;
//   }
