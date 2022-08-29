function solution(tickets) {
  const path = [];
  const len = tickets.length; // 항공권의 개수
  const isUsed = new Array(len).fill(false);  // 항공권 사용 여부

  tickets.sort();

  function dfs(v, count) {
    path.push(v); // 공항 방문

    if (count === len) return true; // 모든 항공권을 사용

    for (let i = 0; i < len; i++) {
      // 사용한 항공권이 아님 && 현재 공항에서 사용할 수 있는 항공권
      if (!isUsed[i] && tickets[i][0] === v) {
        isUsed[i] = true;
        // 목적지로 출발하며 사용 개수 + 1
        if (dfs(tickets[i][1], count + 1)) return true;
        // 길이 없음 -> for문 이어서 순회
        isUsed[i] = false;
      }
    }

    // 모든 티켓을 사용하지 못 한 경우
    // -> 잘못된 경로이므로 이전으로 돌아가 다시 다른 항공권 사용
    path.pop();
    return false;
  }

  dfs('ICN', 0);
  return path;
}

let tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

const result = solution(tickets);
console.log(result);

// ICN 공항에서 출발하여 모든 티켓을 사용
// 가능한 경로가 2개 이상일 때 알파벳 순서로 결정 -> 정렬
