function solution(maps) {
  let answer = 0;
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  // 특정 좌표까지 몇 칸이 걸리는지 기록하는 배열
  //* -> 사용하지 않고 기존 maps 배열의 값을 변경
  // const dist = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  // dist[0][0] = 1;

  // 상하좌우 좌표 (시계 방향)
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 시작점 입력
  maps[0][0] = 1;
  const queue = [[0, 0]];

  // BFS
  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx > n || ny < 0 || ny > m || maps[nx][ny] === 0) continue;
      if (maps[nx][ny] > 1) continue;

      queue.push([nx, ny]);
      maps[nx][ny] = maps[x][y] + 1;

      // 상대방 진영 도착
      if (nx === n && ny === m) {
        console.log(maps);
        answer = maps[nx][ny];
        return answer;
      }
    }
  }

  return -1;
}

let input1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// let input2 = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ];

console.log(solution(input1));
// console.log(solution(input2));

// 최단거리 BFS 문제
// (1, 1)에서 좌표 최우측하단 (n,m)으로 최단 거리로 갈 때 지나가는 칸의 개수
// 도착할 수 없으면 -1

// 시작 지점에서 상하좌우로 움직이며 1인지 확인, 값을 0으로 변경하면서 이동
// 값을 0대신 이동할 때 걸리는 칸으로 변경
// n,m에 도달하면 종료
