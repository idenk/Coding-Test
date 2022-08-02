function solution(arr) {
  let answer = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let value = arr[i][j];
      let up = (down = left = right = 0);

      // 배열 참조 오류 방지. 가장자리는 0으로 초기화 가정
      if (i !== 0) up = arr[i - 1][j];
      if (j !== 0) left = arr[i][j - 1];
      if (i !== n - 1) down = arr[i + 1][j];
      if (j !== n - 1) right = arr[i][j + 1];

      if (value > up && value > down && value > left && value > right) {
        answer++;
      }
    }
  }

  return answer;
}

// 배열 요소의 값보다 상.하.좌.우의 값 모두가 작은 경우 봉우리.
// 가장자리는 0으로 초기화되었으므로, i,j의 값이 0, n-1인 경우 조건 추가

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

// function solution(arr) {
//   let answer = 0;
//   let n = arr.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let flag = 1; // 플래그 변수
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k]; // 인덱스 상하우좌 순으로 조정
//         let ny = j + dy[k];
//         // 인덱스가 배열의 크기를 넘어서는 안되므로 배열에 참조하기 전에 인덱스 범위 지정
//         if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }
