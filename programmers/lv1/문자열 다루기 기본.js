function solution(s) {
  let answer = true;

  if (s.length === 4 || s.length === 6) {
    const maybeNum = String(Number(s));
    if (maybeNum !== s) {
      answer = false;
    }
  } else {
    answer = false;
  }

  return answer;
}
