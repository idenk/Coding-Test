function solution(board, moves) {
  const basket = [];
  let lastDoll = null;
  let count = 0;

  const craneDepth = board.length - 1;
  for (let move of moves) {
    let currentDepth = 0;
    while (currentDepth <= craneDepth) {
      const target = board[currentDepth][move - 1];
      if (target > 0) {
        board[currentDepth][move - 1] = 0;

        if (lastDoll && lastDoll === target) {
          basket.splice(basket.length - 1, 1);
          count += 2;
        } else {
          basket.push(target);
        }

        lastDoll = basket[basket.length - 1];
        break;
      }

      currentDepth++;
    }
  }
  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
solution(board, moves);

// 크레인 뽑기 로직
// 크레인의 줄: moves의 요소
// if '1'이면,
// board[i]['1' - 1]이 0이 아닐 때까지 i가 증가.
// 인형을 만나면 해당 요소를 0으로 변경,

// 인형을 바구니 배열에 push하고, 직전 배열이 이번 인형과 동일하다면 같이 삭제하며 카운트 증가.
