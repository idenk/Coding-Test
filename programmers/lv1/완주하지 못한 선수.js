// 효율성 검사 실패
function solution(participant, completion) {
  let answer = '';

  for (let person of participant) {
    let idx = completion.findIndex((el) => el === person);
    if (idx >= 0) {
      completion[idx] = '';
    } else {
      answer = person;
      break;
    }
  }

  return answer;
}

// 효율성 검사 통과
function solution(participant, completion) {
  let answer = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
