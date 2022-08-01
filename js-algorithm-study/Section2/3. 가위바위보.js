function solution(a, b) {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 3) answer += 'A\n';
    else if (a[i] === 3 && b[i] === 1) answer += 'B\n';
    else if (a[i] > b[i]) answer += 'A\n';
    else if (a[i] < b[i]) answer += 'B\n';
    else answer += 'D\n';
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));

// 숫자가 크면 승. 예외) 3과 1
// 숫자가 동일하면 비김
// a를 기준으로 비교하며 저장

//해설: A가 이기는 경우만 판별. 나머지 경우는 B 승
// function solution(a, b) {
//   let answer = '';
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += 'D ';
//     else if (a[i] === 1 && b[i] === 3) answer += 'A ';
//     else if (a[i] === 2 && b[i] === 1) answer += 'A ';
//     else if (a[i] === 3 && b[i] === 2) answer += 'A ';
//     else answer += 'B ';
//   }

//   return answer;
// }
