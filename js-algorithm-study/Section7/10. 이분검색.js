function solution(target, arr) {
  let answer = -1;
  arr.sort((a, b) => a - b);

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);

    if (arr[mid] === target) {
      answer = mid;
      break;
    }

    if (arr[mid] > target) min = mid + 1; // 범위를 오른쪽 파티션으로 좁힘
    else max = mid - 1;
  }

  return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

// 해설
// function solution(target, arr) {
//   let answer;
//   arr.sort((a, b) => a - b);
//   let lt = 0,
//     rt = arr.length - 1;
//   while (lt <= rt) { // lt와 rt가 교차되면 모두 탐색한 것
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) rt = mid - 1;
//     else lt = mid + 1;
//   }

//   return answer;
// }

// 한 번 비교할 때마다 절반씩 범위를 좁힙 -> O(logn)
