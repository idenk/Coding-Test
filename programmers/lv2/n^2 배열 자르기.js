function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }

  return answer;
}

console.log(solution(3, 2, 5));

// 배열을 전부 구현하지 않고 left와 right 범위의 값을 유추하는 방법이 필요
// left, right인 num(0 ~ n-1)가 주어졌을 때 2차원 배열에 임의의 좌표 (i, j)는
// i: Math.floor(num / n)
// j: num % n

//* 시간 초과
// 2차원 배열 arr[i][j]는 i or j 중 큰 값 + 1으로 초기화
// flat으로 평탄화

// function solution(n, left, right) {
//   let answer = [];
//   let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));

//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[0].length; j++){
//       arr[i][j] = Math.max(i, j) + 1;
//     }
//   }

//   answer = arr.flat().slice(left, right + 1);

//   return answer;
// }
