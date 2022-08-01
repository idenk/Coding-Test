function solution(arr) {
  let answer = 1; // 1: 처음 서 있는 학생
  let max = arr[0]; // 가장 큰 학생의 키를 배열을 탐색하며 저장

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer++;
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

// 배열을 순회
// max 값이 바뀔 때 카운팅

//해설
// function solution(arr) {
//   let answer = 1,
//     max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       answer++;
//       max = arr[i];
//     }
//   }
//   return answer;
// }
