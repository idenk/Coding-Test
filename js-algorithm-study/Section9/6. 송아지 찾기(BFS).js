function solution(s, e) {
  let answer = 0;
  const jump = [1, -1, 5];
  const check = new Array(10001).fill(false);
  const dist = new Array(10001).fill(0);

  function bfs(v) {
    const queue = [v];

    while (queue.length > 0) {
      const cur = queue.shift();
      check[cur] = true;
      if (cur === e) {
        return dist[cur];
      }
      for (let i = 0; i < jump.length; i++) {
        const next = cur + jump[i];
        if (check[next] || next < 1 || next > 10000) continue;
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  check[s] = true;
  dist[s] = 0;
  answer = bfs(s);
  return answer;
}

// 3가지 점프를 이용해 송아지까지 최단 거리로 도달할 때, 점프의 횟수

console.log(solution(5, 14));
console.log(solution(8, 3));

//! 해설
//* 배열 사용
function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // x지점에서 갈 수 있는 지점을 모두 큐에 삽입
      if (nx === e) return dis[x] + 1; // 목적지인지 확인
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

//* 레벨 사용
// function solution(s, e) {
//   let answer = 0;
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   let L = 0;
//   while (queue.length) {
//     let len = queue.length;
//     for (let i = 0; i < len; i++) {
//       let x = queue.shift();
//       for (let nx of [x - 1, x + 1, x + 5]) {
//         if (nx === e) return L + 1;
//         if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//           ch[nx] = 1;
//           queue.push(nx);
//         }
//       }
//     }
//     L++;
//   }
//   return answer;
// }

//* 레벨 탐색 방법
// s:                 5                         Lv0
//*          /        |            \
//         4          6           10            Lv1 -> 0레벨에서 한 번만에 갈 수 있는 지점
//*   /  |  \      /  |  \      /  |   \
//   3 5(x) 9    5(x) 7  11    9(x) 11(x) 15    Lv2 -> 0레벨에서 두 번만에 갈 수 있는 지점

// 목표 지점을 큐에서 삭제할 때 확인하는 것보다, 삽입할 때 확인하는 것이 더 좋음

//* 배열 사용 방법
// dis 배열에 각 지점(인덱스)에 출발 지점에서 몇 번만에 갈 수 있는지 표시 -> 편한 방법
// dis[nv] = dis[v] + 1
// 큐에 입력되는 지점으로 가는 횟수 = 부모로 가는 횟수 + 1
