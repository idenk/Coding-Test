function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  let diagonalSum1 = 0,
    diagonalSum2 = 0;

  for (let i = 0; i < n; i++) {
    let rowSum = 0;
    let columnSum = 0;
    let rowColumnMax;

    for (let j = 0; j < n; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
      if (i === j) {
        diagonalSum1 += arr[i][j];
        diagonalSum2 += arr[i][n - j - 1];
      }
    }

    rowColumnMax = Math.max(rowSum, columnSum);
    if (rowColumnMax > answer) answer = rowColumnMax;
  }

  let diagonalMax = Math.max(diagonalSum1, diagonalSum2);
  if (diagonalMax > answer) answer = diagonalMax;

  return answer;
}

// 2중 for문을 돌며 각 행의 합, 각 열의 합, 두 대각선의 합을 구하고
// 가장 큰 값을 출력

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = (sum2 = 0);
//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0;     // 동시에 초기화
//     for (let j = 0; j < n; j++) {
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);   // if문 조건 없이 할당
//   }
//   sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n - i - 1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   return answer;
// }
