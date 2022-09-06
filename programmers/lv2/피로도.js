function solution(k, dungeons) {
  let answer = 0;
  const len = dungeons.length;
  const ch = new Array(len).fill(false);

  function dfs(fatigue, count) {
    for (let i = 0; i < len; i++) {
      // console.log(ch);
      // 탐색한 던전이 아니고, 피로도가 충분하면 탐색
      if (!ch[i] && fatigue >= dungeons[i][0]) {
        ch[i] = true;
        dfs(fatigue - dungeons[i][1], count + 1);
        ch[i] = false;
      }
    }

    // 모든 경우를 탐색하면
    answer = Math.max(answer, count);
    return;
  }

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

// 최소 필요 피로도: 탐험 시작 시 필요한 피로도 (요구 조건)
// 소모 필요 피로도: 탐험 후 소모되는 피로도

// k: 현재 피로도
// dungeons	:[["최소 필요 피로도", "소모 피로도"], ...]

// 완전 탐색 -> dfs
// 1. 현재 필요도가 던전의 최소 필요 피로도보다 많을 때, 소모 피로도만큼 피로도를 감소시키며 카운팅
// 2. 단계 2를 재귀적으로 반복하며 최대 카운팅 값을 갱신
