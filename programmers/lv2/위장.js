function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (let [name, type] of clothes) {
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
    } else {
      map.set(type, 1);
    }
  }
  console.log(map);

  for (const value of map.values()) {
    answer *= value + 1;
  }

  return answer - 1; // 의상을 모두 입지 않는 경우 제거
}

// 2차원 배열의 요소는 [의상 이름, 의상 종류]
// 의상의 종류가 겹치면 안됨
// 의상이 겹치지 않게 뽑는 방법 -> Map (key: 의상 종류, value: 의상 개수)

// 1. 의상의 종류를 Map의 key로 등록하고
// 2. 각 key별 의상의 개수 파악
//! 3. 모든 key 별로 의상의 개수 + 1(입지 않는 경우)하여 곱해줌 -> 조합

let input1 = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
let input2 = [
  ['crow_mask', 'face'],
  ['blue_sunglasses', 'face'],
  ['smoky_makeup', 'face'],
];
console.log(solution(input1));
