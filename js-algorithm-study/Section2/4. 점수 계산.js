function solution(arr) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      if (count !== 0) {
        answer += (count * (count + 1)) / 2;
        count = 0;
      }
    }
  }

  return answer;
}

// 배열의 값이 1이면 count 누적.
// 배열의 값이 0이고, count가 0이 아니라면 1부터 count까지의 합을 answer에 더함

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = 0,
//     cnt = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       cnt++;
//       answer += cnt;    // 증가시키며 바로 누적
//     } else cnt = 0;
//   }

//   return answer;
// }
