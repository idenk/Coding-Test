function solution(s) {
  let answer = [];

  for (let x of s) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
  return answer;
}

let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

//해설
// function solution(s) {
//   let answer;
//   //console.log(s.indexOf("time"));
//   answer = s.filter(function (v, i) {
//   // if(s.indexOf(v)===i) return true; ->
//     return s.indexOf(v) === i;
//   });
//   return answer;
// }
