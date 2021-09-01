function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++){
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      count++;
    } else {
      break;
    }
  }

  return count;
}

// 1. d를 오름차순으로 정렬
// 2. budget이 음수가 되기 전까지 d를 순서대로 빼며 카운트
