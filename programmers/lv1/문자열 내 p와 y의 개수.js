function solution(s) {
  let answer = false;

  let yCnt = 0,
    pCnt = 0;
  let arr = s.toLowerCase().split('');

  arr.forEach((char) => {
    if (char === 'y') yCnt++;
    if (char === 'p') pCnt++;
  });

  if (yCnt === pCnt) {
    answer = true;
  }
  return answer;
}
