function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i; // 배열의 최솟값을 가리키는 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    // 교체
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  return arr;
}
// 
// 1. 배열을 순회하며 가장 작은 값을 구함
// 2. 그 값을 맨 앞에 위치한 값과 교환
//    (1회전이 끝나면 배열의 가장 작은 값이 맨 앞에 위치)
// 3. 맨 처음 위치를 뺀 나머지 배열을 같은 방법으로 교환

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }
//   return answer;
// }
