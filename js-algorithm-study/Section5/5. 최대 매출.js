function solution(k, arr) {
  let answer = [arr.slice(0, k).reduce((acc, cur) => acc + cur, 0)];

  for (let i = 1; i < arr.length - k; i++) {
    let sum = answer[answer.length - 1] - arr[i - 1] + arr[i + k - 1];
    // console.log(arr[i - 1], arr[i + k]);
    answer.push(sum);
    console.log(answer);
  }

  return Math.max(...answer);
}

// 연속된 k일 동안의 매출 기록을 배열에 저장하고 최대 값 출력
// 1. 초기값 arr[i]부터 arr[k]값 저장을 answer 배열에 저장
// 2. for문: i를 1부터 arr.length - k까지 순회
// 3.   마지막으로 저장된 answer 배열에서 arr[i-1]값을 빼고 arr[i+k-1]값을 더함 (연속적인 k개의 합)
// 3. 최댓값 출력

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// 해설
// function solution(k, arr) {
//   let answer,
//     sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];
//   answer = sum;
//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }
