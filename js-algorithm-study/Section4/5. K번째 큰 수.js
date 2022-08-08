function solution(n, k, card) {
  let answer;
  let arr = [];

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = card[i] + card[j] + card[k];
        if (arr.indexOf(sum) === -1) arr.push(sum);
      }
    }
  }

  arr.sort((a, b) => b - a);
  answer = arr[k - 1];
  
  return answer;
}

// 3장의 카드를 뽑은 모든 경우를 구하며 배열에 입력
// 오름차순으로 정렬
// k번째의 값 리턴

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//! 해설
//* 조합 풀 수 있음: 중첩된 for문 or 재귀
// function solution(n, k, card) {
//   let answer;
//   let tmp = new Set();   // 중복되지 않는 자료 구조: 같은 숫자의 카드가 여러장 있을 수 있음
//   for (let i = 0; i < n; i++) {  //* 굳이 n-2로 명시하지 않아도 반복 조건에서 탈락됨
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         tmp.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   let a = Array.from(tmp).sort((a, b) => b - a); // Set을 배열화
//   answer = a[k - 1];
//   return answer;
// }
