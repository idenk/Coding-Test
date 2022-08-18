function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    // console.log(arr);
    if (isSorted) break; // 교체된 요소가 없다면 이미 정렬된 배열
  }
  return arr;
}

// 1. 배열을 순회하며 인접한 두 값을 비교하며 교환
//    (1회전이 끝나면 가장 큰 값이 배열의 끝에 위치)
// 2. 맨 끝 위치를 뺀 나머지 배열을 같은 방식으로 교환

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }
