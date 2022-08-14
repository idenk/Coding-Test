function solution(str1, str2) {
  if (str1.length !== str2.length) return 'NO';

  const sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2){
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return 'YES';
}
// 1. 각 해시 객체에 알파벳을 키, 알파벳의 수를 값으로 입력
// 2. 정렬하고 일차원 배열로 만들고 비교. 일치하는지 확인
// -> 시간복잡도 오버

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

let c = 'abaCC';
let d = 'Caaab';
console.log(solution(c, d));

//! 해설
// function solution(str1, str2) {
//   let answer = 'YES';
//   let sH = new Map();
//   for (let x of str1) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   for (let x of str2) {
//     if (!sH.has(x) || sH.get(x) === 0) return 'NO'; // 개수가 0이라면 모두 상쇄된 것 -> 아나그램 아님
//     sH.set(x, sH.get(x) - 1); // 상쇄
//   }
//   return answer;
// }

// 1. 첫번째 문자로 맵(알파벳, 개수) 생성
// 2. 두번째 문자를 탐색할 때 맵에 문자가 없음 or 문자의 개수가 0 -> No 반환
//    아니면 맵의 값을 1씩 감소시키며 상쇄
