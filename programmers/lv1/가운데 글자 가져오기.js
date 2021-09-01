function solution(s) {
  let answer = '';
  let len = s.length;
  let midIdx = Math.floor(len / 2);

  if (len % 2 !== 0) {
    answer = s.slice(midIdx, midIdx + 1);
  } else {
    answer = s.slice(midIdx - 1, midIdx + 1);
  }

  return answer;
}
