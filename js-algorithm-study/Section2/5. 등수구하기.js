function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[j] > arr[i]) count++;
    }
    answer.push(count + 1);
  }

  return answer;
}

// 배열을 탐색하며 각 점수(요소)보다 높은 점수를 받은 학생이 몇 명인지 count.
// answer 배열에 count + 1을 삽입

let arr = [87, 89, 92, 92, 100, 76];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1); // 전달 받은 배열과 똑같은 길이를 가지고 모든 요소를 1로 초기화 된 새로운 배열
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }
