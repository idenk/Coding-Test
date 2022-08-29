function solution(n, arr) {
  let answer = 0;
  // 그래프 생성
  const graph = {};
  const maxVertex = Math.max(...arr.flat());
  for (let i = 0; i <= maxVertex; i++) graph[i] = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  // console.log(graph);

  const isVisited = new Array(maxVertex + 1).fill(false);
  const path = [];

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      // for (let i = 1; i <= maxVertex; i++) {
      //   if (graph[v].includes(i) && !isVisited[i]) {
      //     isVisited[i] = true;
      //     path.push(i);
      //     DFS(i);
      //     isVisited[i] = false;
      //     path.pop();
      //   }
      // }
      for (let i of graph[v]) {
        if (!isVisited[i]) {
          isVisited[i] = true;
          path.push(i);
          DFS(i);
          isVisited[i] = false;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  isVisited[1] = true;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));

// 해설
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array()); // 0으로 초기화 X
  // console.log(graph);
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let nv of graph[v]) {
        if (ch[nv] === 0) {
          path.push(nv);
          ch[nv] = 1;
          DFS(nv);
          ch[nv] = 0;
          path.pop();
        }
      }
      // for (let i = 0; i < graph[v].length; i++) {
      //   if (ch[graph[v][i]] === 0) {
      //     path.push(graph[v][i]);
      //     ch[graph[v][i]] = 1;
      //     DFS(graph[v][i]);
      //     ch[graph[v][i]] = 0;
      //     path.pop();
      //   }
      // }
    }
  }
  ch[1] = 1;
  path.push(1);
  DFS(1);
  return answer;
}

// 정점 n개일 때 인접 행렬로 표현하면 특정 정점과 연결된 정점을 찾기 위해 n번의 탐색이 필요
// -> n이 커질수록, 정점이 많을수록 메모리 낭비 및 시간복잡도에서 비효율적
// -> 인접 리스트 사용 (일반적으로 정점이 100개 이상)
//    특정 정점과 연결된 정점들만 탐색 가능

// 인접 리스트도 2차원 배열로 표현 가능
//  graph =
//  [ [],
//    [2, 3, 4],  //* graph[1]은 1번 정점과 연결된 정점들의 배열
//    [1, 3, 5],
//    [4],
//    [2, 5],
//    []]
