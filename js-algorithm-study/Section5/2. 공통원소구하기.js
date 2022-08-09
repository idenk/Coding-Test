function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let p1 = 0,
    p2 = 0;

  while (p1 < arr1.length && p2 < arr1.length) {
    console.log(p1, p2);
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return answer;
}

// 두 배열을 오름차순으로 정렬
// 투 포인터 알고리즘을 사용해 포인터로 각 배열의 요소를 하나씩 비교
// 같은 값을 가진 원소를 만나면 answer 배열에 push

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let p1 = (p2 = 0);
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] == arr2[p2]) {
//       answer.push(arr1[p1++]);
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) p1++;
//     else p2++;
//   }
//   return answer;
// }
