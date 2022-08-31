function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function bfs(x, y) {
    const queue = [];
    board[x][y] = 2;
    queue.push([x, y]);

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < dx.length; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (nx < 0 || nx > board.length - 1 || ny < 0 || ny > board[0].length - 1) continue;
        if (board[nx][ny] === 1) {
          board[nx][ny] = 2;
          queue.push([nx, ny]);
          // console.log(x, y, '->', nx, ny);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        bfs(i, j);
        answer++;
        // console.log('BFS end');
      }
    }
  }
  // console.log(board);

  return answer;
}

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
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([i, j]);
        answer++;
        while (queue.length) {
          let x = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x[0] + dx[k];
            let ny = x[1] + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0; //* 큐에 삽입할 때 체크. 
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return answer;
}
