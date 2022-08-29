function solution(n, computers) {
  // computers: 인접 행렬
  const isVisited = new Array(n).fill(false);
  let count = 0;
  // let path = [];

  function dfs(v) {
    isVisited[v] = true;
    for (let i = 0; i < n; i++) {
      // self loop 방지 && 연결된 정점인지 확인 && 방문하지 않은 정점인지 확인
      if (v !== i && computers[v][i] === 1 && !isVisited[i]) {
        // path.push(i);
        dfs(i);
      }
    }
  }

  // 각 정점마다 탐색 -> 해당 정점과 연결된 모든 정점이 방문됨
  // -> dfs의 호출이 끝나면 하나의 연결된 네트워크를 알 수 있음
  for (let v = 0; v < n; v++) {
    if (!isVisited[v]) {
      dfs(v);
      // console.log(v, path);
      // path = [];
      count++;
    }
  }
  return count;
}

let n = 3;
let computers = [
  [1, 1, 0], // 1번 pc와 2번 pc가 연결
  [1, 1, 0],
  [0, 0, 1], // 3번 pc는 없음
];

const result = solution(n, computers);
console.log(result);

// function solution(n, computers) {
//   // 인접 리스트 생성
//   const adjList = {};
//   for (let i = 0; i < n; i++) {
//     adjList[i] = new Set(); // 중복 제거를 위해 set을 사용
//   }
//   console.log(adjList);

//   // 정점 입력
//   computers.forEach((com, idx) => {
//     for (let i = 0; i < com.length; i++) {
//       if (i === idx) continue;
//       if (com[i] === 1) {
//         adjList[i].add(idx);
//         adjList[idx].add(i);
//       }
//     }
//   });
//   for (let i = 0; i < n; i++) {
//     adjList[i] = [...adjList[i]]; // 배열로 변경
//   }
//   console.log(adjList);

//   // 방문한 정점
//   const isVisited = new Array(n).fill(false);

//   let count = 0;

//   for (let vertex = 0; vertex < n; vertex++) {
//     if (!isVisited[vertex]) {
//       dfs(adjList, vertex, isVisited);
//       count++;
//     }
//   }
//   return count;
// }

// function dfs(adjList, vertex, isVisited) {
//   isVisited[vertex] = true;

//   for (let i = 0; i < adjList[vertex].length; i++) {
//     if (!isVisited[adjList[vertex][i]]) {
//       dfs(adjList, adjList[vertex][i], isVisited);
//     }
//   }
// }
