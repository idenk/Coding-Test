function solution(n, computers) {
  // 인접 리스트 생성
  const adjList = {};
  for (let i = 0; i < n; i++) {
    adjList[i] = new Set(); // 중복 제거를 위해 set을 사용
  }

  // 정점 입력
  computers.forEach((com, idx) => {
    for (let i = 0; i < com.length; i++) {
      if (i === idx) continue;
      if (com[i] === 1) {
        adjList[i].add(idx);
        adjList[idx].add(i);
      }
    }
  });
  for (let i = 0; i < n; i++) {
    adjList[i] = [...adjList[i]]; // 배열로 변경
  }

  // 방문한 정점
  const isVisited = new Array(n).fill(false);

  let count = 0;

  for (let vertex = 0; vertex < n; vertex++) {
    if (!isVisited[vertex]) {
      dfs(adjList, vertex, isVisited);
      count++;
    }
  }
  return count;
}

function dfs(adjList, vertex, isVisited) {
  isVisited[vertex] = true;

  for (let i = 0; i < adjList[vertex].length; i++) {
    if (!isVisited[adjList[vertex][i]]) {
      dfs(adjList, adjList[vertex][i], isVisited);
    }
  }
}

let n = 3;
let computers = [
  [1, 1, 0], // 1번 pc와 2번 pc가 연결
  [1, 1, 0],
  [0, 0, 1], // 3번 pc는 없음
];

const result = solution(n, computers);
console.log(result);
