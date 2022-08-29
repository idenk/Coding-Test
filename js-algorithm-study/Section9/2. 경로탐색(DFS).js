function solution(n, arr) {
  let answer = 0;

  // 그래프 생성
  const maxVertex = Math.max(...arr.flat());
  const matrix = new Array(maxVertex + 1).fill(0).map(() => new Array(maxVertex + 1).fill(0));
  arr.forEach((el) => {
    matrix[el[0]][el[1]] = 1;
  });
  // console.log(matrix);
  const isVisited = new Array(n + 1).fill(false);

  const graph = [];
  const tmp = [];

  function DFS(v) {
    isVisited[v] = true; // 해당 정점을 방문
    tmp.push(v);

    if (v === n) {
      graph.push(tmp.slice());
      tmp.pop();
      return;
    }

    for (let i = 1; i <= maxVertex; i++) {
      if (matrix[v][i] === 1 && !isVisited[i]) {
        DFS(i);
        isVisited[i] = false;
      }
    }
    tmp.pop();
  }

  DFS(1, n);
  console.log(graph);

  answer = graph.length;
  return answer;
}

// 특정 정점에서 정점으로 가는 경로의 수
// 1에서 n으로 가는 경로

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
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);  // 방문한 정점 체크
  let path = [];  // 경로
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i); // DFS 재귀 호출
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = 1;  // 방문 전에 1번 체크
  DFS(1);
  return answer;
}

// 방문한 정점은 꼭 체크가 필요 -> 체크 배열

//        D(1)
//*   1x/ 2|  3|  4|  5\
//       D(2)
//* 1x/ 2x| 3|  4|  5\
//          D(3)
//* 1x/ 2x| 3x|  4|  5\
//              D(4)
//* 1x/ 2x| 3x| 4x|  5\
//                   D(5)
//!                 [1,2,3,4,5]
