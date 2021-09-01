function solution(seoul) {
  let idx = seoul.findIndex((el) => el === 'Kim');
  let answer = `김서방은 ${idx}에 있다`;
  return answer;
}
