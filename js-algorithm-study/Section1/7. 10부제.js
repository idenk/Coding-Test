function solution(day, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let carNum = arr[i];
    if (carNum % 10 === day) {
      if (carNum === day) answer += 1;
    }
  }
  return answer;
}

let arr1 = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr1));

let arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));

// 해설
// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 == day) answer++;
//   }

//   return answer;
// }
