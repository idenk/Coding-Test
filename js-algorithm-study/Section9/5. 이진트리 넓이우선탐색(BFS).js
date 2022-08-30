function solution() {
  let answer = '';
  const max = 7;

  function bfs(v) {
    const queue = [v];

    while (queue.length > 0) {
      const cur = queue.shift();
      answer += String(cur) + ' ';
      const left = cur * 2;
      const right = cur * 2 + 1;

      if (left <= max) queue.push(left);
      if (right <= max) queue.push(right);
    }
  }

  bfs(1);

  return answer;
}

console.log(solution());

// 해설
function solution() {
  let answer = '';
  let queue = [];
  queue.push(1);
  while (queue.length) {
    console.log(queue);
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

// 출발 지점에서 도착 지점까지의 최단 거리 -> BFS
// 상태 트리를 넓이 우선 탐색

// 출발 지점에서 간선 하나로(한 번만에) 갈 수 있는 모든 정점을 탐색
// 도착 지점이 없었다면, 두 번만에 갈 수 있는 모든 정점 탐색
