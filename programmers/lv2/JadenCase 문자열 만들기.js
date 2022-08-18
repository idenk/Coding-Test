function solution(s) {
  let answer = ""
  for (let i = 0; i < s.length; i++){
    if (s[i - 1] === " " || i === 0) answer += s[i].toUpperCase();
    else answer += s[i].toLowerCase();
  }
  return answer;
}


let input = '3people unFollowed me';
console.log(solution(input));


//* 런타임 에러
// function solution(s) {
//   let answer = s
//     .split(' ')
//     .map((el, i, str) => el[0].toUpperCase() + el.slice(1).toLowerCase())
//     .join(' ');
//   return answer;
// }