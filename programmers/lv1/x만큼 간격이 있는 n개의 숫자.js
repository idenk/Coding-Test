function solution(x, n) {
  let answer = [];

  let value = x;

  for (let i = 0; i < n; i++) {
    answer.push(value);
    value += x;
  }

  return answer;
}

// 1. value의 초기값을 x로 할당
// 2. for문을 0부터 n번 전까지 반복
// 3. value 값을 x만큼 누적하여 answer에 push
// 4. 1이 종료되면 answer 리턴
