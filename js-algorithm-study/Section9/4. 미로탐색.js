function solution(board) {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const maxX = board.length - 1;
  const maxY = board[0].length - 1;

  const path = [];
  const allPaths = [];

  function dfs(x, y) {
    // console.log(path);
    if (x === 6 && y === 6) {
      // 목적지 도착
      answer++;
      allPaths.push(path.slice());
    } else {
      // 각 지점에 대해서 상하좌우 탐색
      for (let i = 0; i < dx.length; i++) {
        // 새로운 좌표
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || nx > maxX || ny < 0 || ny > maxY) continue; // 배열의 범위를 벗어나는지 체크
        // 갈 수 있는 경로라면
        if (board[nx][ny] === 0) {
          board[nx][ny] = 1;
          path.push([x, y]);
          dfs(nx, ny); // 해당 지점에서 또 상하좌우 탐색
          board[nx][ny] = 0;
          path.pop();
        }
      }
    }
  }
  board[0][0] = 1;
  dfs(0, 0);
  console.log(allPaths);

  return answer;
}

// 미로 탈출 가짓수
// 각 위치에서 상,하,좌,우가 0이면 재귀적으로 탐색
// board[x][y]
// 상: x-1, y
// 하: x+1, y
// 좌: x, y-1
// 우: x, y+1
// 방문한 정점을 1로 변경
// 목적지에 도달했을 때 카운팅

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));

// 해설
function solution(board) {
  let answer = 0;
  // 상우하좌
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

//              D(0,0)
//*    /      |       |      \
// D(-1,0)  D(0,1)  D(1,0)  D(0,-1)
//*   x    /  | | \
