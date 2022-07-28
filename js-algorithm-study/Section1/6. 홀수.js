function solution(arr) {
  let answer = [];
  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddSum += arr[i];
      if (oddMin > arr[i]) oddMin = arr[i];
    }
  }

  answer.push(oddSum, oddMin);

  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = [];
//   let sum = 0,
//     min = 1000;
//   for (let x of arr) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }