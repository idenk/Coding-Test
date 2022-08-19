function solution(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}
// 정렬되지 않은 원소와, 그 원소가 들어가야 할 원래 위치를 구해야 함
// 1. 정렬된 배열과 순서대로 요소를 비교하며 다른 요소의 순서를 저장

let arr1 = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr1));

let arr2 = [120, 130, 150, 150, 130, 150];
console.log(solution(arr2));

//! 해설
// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }
