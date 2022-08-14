function solution(s) {
  let answer;
  const vote = new Map();

  for (let x of s) {
    if (vote.has(x)) vote.set(x, vote.get(x) + 1);
    else vote.set(x, 1);
  }

  const arr = Array.from(vote);
  arr.sort((a, b) => b[1] - a[1]);
  answer = arr[0][0];
  return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER; // 가장 작은 수로 초기화
//   for (let [key, val] of sH) { // Map은 이터러블 객체이므로 for of 순회
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }
