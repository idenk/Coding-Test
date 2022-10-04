function solution(arr1, arr2) {
  const row = arr1.length;
  const col = arr2[0].length;
  let answer = new Array(row).fill(0).map(() => new Array(col).fill(0));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

let arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
let arr2 = [
  [3, 3],
  [3, 3],
];

console.log(solution(arr1, arr2));

// 행렬의 곱셈은 arr1의 열 길이, arr2의 행 길이가 같아야 함
// a행b열 x b행c열 = a행c열
