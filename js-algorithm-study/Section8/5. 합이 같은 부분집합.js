function solution(arr) {
  let answer = 'NO';
  // let flag = 0;
  const len = arr.length;
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  const test = [];
  function DFS(L, sum, bucket) {
    // if (flag) return;
    if (L === len) {
      if (total - sum === sum) {
        answer = 'YES';
        // flag = 1;
        test.push(bucket);
      }
    } else {
      DFS(L + 1, sum + arr[L], bucket.concat(arr[L]));
      DFS(L + 1, sum, bucket);
    }
  }
  DFS(0, 0, []);
  console.log(test);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

//! 해설
// function solution(arr) {
//   let answer = 'NO',
//     flag = 0; //* YES가 되는 순간 더 재귀를 돌 필요가 없으므로 플래그 변수를 사용
//   let total = arr.reduce((a, b) => a + b, 0);
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (flag) return;
//     // L이 배열 끝까지 도달했으면 종료 (부분 집합의 완성)
//     if (L === n) {
//       //* 다른 부분 집합의 합 === 현재 누적된 부분 집합의 합
//       if (total - sum === sum) {
//         answer = 'YES';
//         flag = 1;
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// 전체 배열의 합을 구함
// 재귀를 돌면서 만든 부분 집합의 합을 구하고,
//  전체 배열의 합에서 빼면 다른 부분 집합의 합.
// 둘을 비교
