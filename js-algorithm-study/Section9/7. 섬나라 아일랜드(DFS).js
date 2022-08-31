function solution(board) {
  let answer = 0;
  const dx = [-1, 1, 0, 0, -1, 1, 1, -1];
  const dy = [0, 0, -1, 1, -1, -1, 1, 1];

  function dfs(x, y) {
    board[x][y] = 2;
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx > board.length - 1 || ny < 0 || ny > board[0].length - 1) continue;
      if (board[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        dfs(i, j);
        answer++;
      }
    }
  }
  console.log(board);

  return answer;
}

// 섬의 개수를 구하는 문제
// 0,0 좌표부터 상하좌우+대각선이 1일 때 재귀적으로 dfs 탐색
// 탐색한 정점은 값을 2로 변경

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));

// 해설
function solution(board) {
  let answer = 0;
  let n = board.length;
  // 시계 방향
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        // console.log(x, y, '->', nx, ny);
        DFS(nx, ny);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
        console.log('DFS end');
      }
    }
  }
  return answer;
}
