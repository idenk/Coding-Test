function solution(lottos, win_nums) {
  const rank = { 2: 5, 3: 4, 4: 3, 5: 2, 6: 1 };

  let zeroNum = lottos.filter((el) => el === 0).length;

  let minMatch = lottos.filter((el) => win_nums.includes(el)).length;
  let maxMatch = minMatch + zeroNum;

  let minRank = rank[minMatch] || 6;
  let maxRank = rank[maxMatch] || 6;

  return [maxRank, minRank];
}

// 1. lottos의 0의 개수를 구함
// 2. 남은 lottos에서 win_nums와 일치하는 요소를 필터링한 개수 = 최저 순위 조건
// 3. 최저 순위 + 0의 개수 = 최고 순위 조건
// 4. 조건을 기준으로 최고 순위와 최저 순위 반환
