// function solution(m, arr) {
//   let answer = 0;
//   let sum = 0;
//   let lt = 0;

//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     // console.log(arr.slice(lt, rt + 1));
//     while (sum > m) {
//       sum -= arr[lt++];
//       // console.log(arr.slice(lt, rt + 1));
//     }
//     answer += rt - lt + 1;
//   }

//   return answer;
// }

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//! 해설: 투 포인터 알고리즘
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    // 추가했는데 answer가 m보다 크면
    while (sum > m) {
      sum -= arr[lt++];
    }
    // 이때 answer은 m보다 항상 작음(lt ~ rt의 수열은 m보다 작음을 보장)
    // lt를 끝으로 하는 연속 부분 수열
    answer += rt - lt + 1;
  }
  return answer;
}

//
// 1. lt, rt를 이용해 한 번의 for문 순회
// 2.   lt는 고정, rt는 오른쪽으로 이동하며 요소를 sum에 저장
//      '새로운 요소 추가'되었을 때 sum이 m보다 작거나 같은 값이면
//      그 마지막으로 추가된 숫자를 포함한 부분 수열을 구함
//      -> lt~rt의 연속 부분 수열 공식: rt - lt + 1
// 3.   sum이 m보다 커지면 lt를 증가하며 sum에서 요소 제거
// 4.   sum이 m보다 크거나 같은지 계속 확인 (sum은 lt~rt까지의 합)
// 5. rt가 끝에 도달하면 종료

// input
// 1        3       1       2       3
// 연속 부분 수열
// 1        3       1       2       3
//        1 3     3 1     1 2     2 3
//              1 3 1
