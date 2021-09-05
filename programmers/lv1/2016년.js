function solution(a, b) {
  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let result = 0;
  for (let i = 0; i < a - 1; i++) {
    result += days[i];
  }
  result += b - 1;

  return week[result % 7];
}

let a = 5;
let b = 24;
solution(a, b);

// a월 b일 주어지면, 1월 1일과 며칠이나 차이가 있는지 계산
// days[0]부터 [a - 1]전까지 배열의 합(이전 달의 일수) + b(b달의 일수) - 1(1월 1일과의 차이)
// 해달 값을 7로 나눈 나머지를 week의 인덱스로 하여 리턴
