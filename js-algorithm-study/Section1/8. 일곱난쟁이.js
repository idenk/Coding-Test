function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let dwarf = arr.slice();

    for (let j = i + 1; j < arr.length; j++) {
      dwarf.splice(i, 1);
      dwarf.splice(j - 1, 1);
      let dwarfSum = dwarf.reduce((acc, cur) => acc + cur, 0);
      if (dwarfSum === 100) {
        answer = dwarf;
        return answer;
      }
    }
  }

  return answer;
}

// 1. 9개의 배열에서 두 요소를 제거했을 때 합이 100이 되는지 확인

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 해설
// function solution(arr) {
//   let answer = arr;
//   let sum = answer.reduce((a, b) => a + b, 0);
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (answer[i] + answer[j]) == 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//       }
//     }
//   }
//   return answer;
// }
