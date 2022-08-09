function solution(arr1, arr2) {
  let answer = [];
  let i = 0,
    j = 0;
  while (i === arr1.length || j === arr2.length) {
    if (arr1[i] <= arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      answer.push(arr2[j]);
      j++;
    }
  }
  console.log(answer);
  if (i === arr1.length) answer.concat(arr2.slice(j));
  if (j === arr2.length) answer.concat(arr1.slice(i));

  return answer;
}

// 각 배열의 값을 가리키는 인덱스 i, j를 기록
// 각 배열의 i와 j번째 값을 비교하며 작은 수를 answer 배열에 입력
// i와 j가 배열에 끝에 도달할 때까지 반복

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

//* sort 함수만 호출해도 -> O(nlogn)
// 해설: 투 포인터스 알고리즘(Two pointers algorithm) -> O(n + m)
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}