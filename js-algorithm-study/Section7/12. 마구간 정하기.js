function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1] - stable[0];
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));

//! 해설
// 가장 가까운 말의 거리를 dist로 잡았을 때 몇 마리 배치할 수 있는지 계산하는 함수
function count(stable, dist) {
  let cnt = 1,
    ep = stable[0]; // 직전 말을 배치한 마굿간의 좌표
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) { // c마리 이상인 경우 답
      answer = mid;
      lt = mid + 1; // 거리를 늘렸을 때도 조건을 만족하는지 범위를 좁혀 검사
    } else rt = mid - 1;  // c마리를 배치할 수 없으면 거리를 줄이도록 범위를 좁혀 검사
  }
  return answer;
}
// 이분 탐색
// lt: 1(두 말 사이의 거리), rt: 배열의 최댓값 -> mid
// 첫번째 말은 무조건 가장 먼저 있는 마굿간(0번 인덱스)에 넣고 자리를 endpoint로 저장
// 마굿간을 하나씩 살펴보며 mid 값을 만족하는 마굿간에 말을 연달아 넣음
// 말을 모두 못 넣었다면 범위를 좁힘
// 말을 모두 넣었다면 answer에 mid를 저장하고 범위를 좁힙
// lt와 rt가 교차할 때까지 반복
