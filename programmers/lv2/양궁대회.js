// 점수 차이 계산 함수
function calculateDiff(apeach, lion) {
  let aScore = 0;
  let lScore = 0;

  for (let i = 0; i < apeach.length; i++) {
    if (apeach[i] == 0 && lion[i] == 0) continue;
    if (apeach[i] >= lion[i]) {
      aScore += 10 - i;
    } else {
      lScore += 10 - i;
    }
  }
  return lScore - aScore;
}

function solution(n, info) {
  let answer = [-1];
  const shots = new Array(11).fill(0);
  let diff = 0;
  let maxDiff = Number.MIN_SAFE_INTEGER;

  function dfs(idx, count) {
    // 화살을 다 쏜 경우
    if (count < 0) return;
    // 끝까지 탐색한 경우 점수 계산
    if (idx < 0) {
      diff = calculateDiff(info, shots);
      if (diff > 0 && diff > maxDiff) {
        shots[10] += count; // 화살이 남았다면 0점에 맞춤
        answer = shots.slice();
        maxDiff = diff;
      }
      return;
    }
    // 어피치가 k에 쏜 화살보다 한 발 더 쏘는 경우
    shots[idx] = info[idx] + 1;
    dfs(idx - 1, count - shots[idx]);
    // k에 화살을 쏘지 않는 경우
    shots[idx] = 0;
    dfs(idx - 1, count);
  }

  // 점수차가 동일할 때, 더 낮은 점수를 많이 맞힌 경우를 우선하기 위해 배열의 끝부터 탐색
  dfs(10, n, shots);

  return answer;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));

// 어피치 화살 n발(info) -> 라이언 화살 n발
// 점수 k에 더 많은 화살을 맞춘 캐릭터가 k 점을 획득
// 가장 큰 점수 차이로 이기기 위해 n발의 화살을 어느 과녁에 맞춰야 하는가?

// n: 화살의 개수
// info: 화살의 점수. i번째 원소는 10-i점을 맞힌 화살 개수

// 완전 탐색
// 1. 라이언이 쏜 화살의 정보를 나타내는 shots 배열 생성
// 2. shots 배열의 idx, count(화살 수)를 이용해서,
//    shots의 idx 값을 info의 idx 값보다 +1만큼을 증가시키는 경우
//    shots의 idx 값을 0으로 한 경우를 재귀적으로 dfs 탐색
// 3. dfs가 끝까지 도달하면 점수 계산.
//    라이언이 이겼을 때 최대 점수차이가 갱신되었다면 shots을 answer에 저장
