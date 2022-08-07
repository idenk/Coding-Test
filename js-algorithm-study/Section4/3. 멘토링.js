function solution(test) {
  let answer = 0;
  let m = test.length; // 테스트 횟수
  let n = test[0].length; // 학생 수
  let tmp = []; // 조건을 만족하는 요소 저장

  for (let i = 1; i <= n; i++) {
    //* 1~n 학생까지 (멘토)
    for (let j = 1; j <= n; j++) {
      //* 1~n 학생까지 (멘티)
      // 모든 멘토-멘티 (i, j) 경우를 미리 지정하고 조건에 맞는지 확인
      if (i === j) continue;  //? 학생 한 명이 혼자 멘토-멘티가 될 수 없음
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s; // k번째 테스트의 s위치에 i번 학생이 존재하면, i번 학생의 등수(pi)는 s
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++; // 멘토-멘티 성립 (i번 학생의 등수가 높음)
      }
      if (cnt === m) {
        answer++;
        tmp.push([i, j]);
      }
    }
  }
  // console.log(tmp);
  return answer;
}

// 1. 멘토-멘티 관계가 가능한 모든 페어 (i, j)에 대해
// 2. 각 테스트 마다 i와 j의 위치를 판별하고 비교
// 3. 모든 테스트에서 조건이 만족하면 counting

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

//! 해설
//* 완전탐색(브루트 포스)의 대표적인 예
// function solution(test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }
