function solution(numbers, hand) {
  const keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const keyPadIdx = {}; // key: value = keyPad: Idx

  for (let i = 0; i < keyPad.length; i++) {
    for (let j = 0; j < keyPad[i].length; j++) {
      keyPadIdx[keyPad[i][j]] = `${i}${j}`;
    }
  }

  let result = '';

  const leftPad = [1, 4, 7];
  const rightPad = [3, 6, 9];

  let leftHand = '*';
  let rightHand = '#';

  for (let num of numbers) {
    if (leftPad.includes(num)) {
      result += 'L';
      leftHand = num;
    } else if (rightPad.includes(num)) {
      result += 'R';
      rightHand = num;
    } else {
      let leftDistance = getDistance(leftHand, num, keyPadIdx);
      let rightDistance = getDistance(rightHand, num, keyPadIdx);

      if (leftDistance < rightDistance) {
        result += 'L';
        leftHand = num;
      } else if (leftDistance > rightDistance) {
        result += 'R';
        rightHand = num;
      } else {
        if (hand === 'right') {
          result += 'R';
          rightHand = num;
        } else {
          result += 'L';
          leftHand = num;
        }
      }
    }
  }

  return result;
}

function getDistance(current, target, keyPadIdx) {
  if (current === target) return 0;

  let [curIdx1, curIdx2] = keyPadIdx[current];
  let [tarIdx1, tarIdx2] = keyPadIdx[target];

  return Math.abs(curIdx1 - tarIdx1) + Math.abs(curIdx2 - tarIdx2);
}

let numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let hand = 'left';

let output = solution(numbers, hand);
console.log(output); // 	"L R L L L R L L R R L"

//* 접근 방법:
// 키패드 임의의 x, y 번호 간의 최단 거리는
// 키패드를 keypad라는 2차원 배열로 선언하고,
// x와 y에 해당하는 keypad[i][j]가 있을 때, i 인덱스 간의 차와 j 인덱스 간의 차를 더한 것과 동일하다.

// 1. 2차원 배열 keypad 정의
// 2. 인덱스 관리를 편하게 하기 위해 keyPadIdx 선언 및 할당
// 3. numbers 순회
// 4.   numbers의 요소(숫자)에 따라 result 배열에 사용한 손가락 L or R을 입력. 3으로 이동
//      (요소가 중간 숫자라면 최단 거리를 구하는 getDistance 함수를 이용하여 비교)
// 5. result 반환
