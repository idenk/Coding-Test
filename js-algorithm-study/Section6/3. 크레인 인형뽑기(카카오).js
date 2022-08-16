// (1) 새로운 2차원 배열 생성
// function solution(board, moves) {
//   let answer = 0;
//   const gameBoard = new Array(board.length).fill(0).map((el) => new Array(0));
//   for (let i = board.length - 1; i > 0; i--) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] !== 0) gameBoard[j].push(board[i][j]);
//     }
//   }
//   const stack = [];
//   for (let i = 0; i < moves.length; i++) {
//     const crane = moves[i] - 1;
//     const doll = gameBoard[crane].length > 0 ? gameBoard[crane].pop() : 0;
//     if (doll === 0) continue;
//     if (stack.length > 0 && stack[stack.length - 1] === doll) {
//       stack.pop();
//       answer += 2;
//     } else stack.push(doll);
//   }

//   return answer;
// }

// 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이면 두 인형은 바구니에서 사라짐
// 1. 현 인형의 위치를 우측 90도로 돌려서 새로운 2차원 배열을 만듬. 만들 필요가 없음
//    -> 배열을 역순으로 순회
//       중첩 배열을 순회하며 새로운 배열의 요소인 배열에 순차적으로 push (0은 제외)
// 2. 크레인을 움직이며 stack에 push.
//      똑같은 인형을 만나면 삭제하며 answer + 1

// (2) 좌표를 변경해 접근
function solution(board, moves) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    const crane = moves[i] - 1;
    let j = 0;
    let doll;
    while (j < board.length) {
      doll = board[j][crane];
      if (doll === 0) j++; // 크레인이 내려가는 중
      else {
        // 인형을 뽑음
        board[j][crane] = 0;
        break;
      }
    }

    if (doll === 0) continue;
    if (stack.length > 0 && stack[stack.length - 1] === doll) {
      stack.pop();
      answer += 2;
    } else stack.push(doll);
  }

  return answer;
}

// 1. moves의 값이 n일 때 가장 최상단의 요소를 뽑는 법
//    -> board[i][n - 1]의 요소가 0이 아닐 때까지 i를 증가시키며 찾기
//       찾으면 해당 요소의 값을 stack에 넣고 0으로 변경

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
]; // 현 인형의 위치
let b = [1, 5, 3, 5, 1, 2, 1, 4]; // 크레인을 작동시킨 위치
console.log(solution(a, b));

// 해설
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}
