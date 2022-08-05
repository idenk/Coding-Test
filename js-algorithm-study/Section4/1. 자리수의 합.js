function solution(n, arr) {
  let answer = arr[0];
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let sum = String(arr[i])
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      // 자릿수의 합이 동일하면 원래 숫자를 비교
      if (arr[i] > answer) answer = arr[i];
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// 해설
// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = 0,
//       tmp = x;   // 임시 변수
//     while (tmp) {    // tmp가 한자리 수일 때 10으로 나눠지면 0 (종료 조건)
//       sum += tmp % 10;   // 일의 자리 숫자 누적
//       tmp = Math.floor(tmp / 10); // 10으로 나눈 몫으로 재할당
//     }
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }

// function solution(n, arr) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER;
//   for (let x of arr) {
//     let sum = x
//       .toString()
//       .split('')
//       .reduce((a, b) => a + Number(b), 0);
//     if (sum > max) {
//       max = sum;
//       answer = x;
//     } else if (sum === max) {
//       if (x > answer) answer = x;
//     }
//   }
//   return answer;
// }
