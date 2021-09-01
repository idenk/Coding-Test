//! wip
function solution(tickets) {
  // 인접 리스트 생성
  const adjList = {};

  tickets.forEach((el) => {
    if (!adjList[el[0]]) {
      adjList[el[0]] = [];
      adjList[el[0]].push(el[1]);
    } else {
      adjList[el[0]].push(el[1]);
    }
  });

  tickets.sort();
  console.log(tickets);

  const isVisited = [];

  dfs(adjList, 'ICN', isVisited);

  return isVisited;
}

// function dfs(adjList, airport, isVisited, count) {
//   isVisited.push(airport);

//   if (!adjList[airport]) return;
//   if ()

//   for (let i = 0; i < adjList[airport].length; i++) {
//     // if (!isVisited.includes(adjList[airport][i])) {
//       dfs(adjList, adjList[airport][i], isVisited, count);
//     // }
//   }
// }

let tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

const result = solution(tickets);
console.log(result);
