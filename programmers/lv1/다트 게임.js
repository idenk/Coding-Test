function solution(dartResult) {
  let score = [0, 0, 0];

  let scoreArr = dartResult
    .split(/[A-Z*#]/)
    .filter((el) => el !== '')
    .map((el) => Number(el));
  let bonusArr = dartResult.split(/[0-9]/).filter((el) => el !== '');

  for (let i = 0; i < scoreArr.length; i++) {
    if (bonusArr[i][0] === 'S') {
      score[i] = Math.pow(scoreArr[i], 1);
    } else if (bonusArr[i][0] === 'D') {
      score[i] = Math.pow(scoreArr[i], 2);
    } else if (bonusArr[i][0] === 'T') {
      score[i] = Math.pow(scoreArr[i], 3);
    }

    if (bonusArr[i].length === 2) {
      if (bonusArr[i][1] === '*') {
        if (score[i - 1]) score[i - 1] *= 2;
        score[i] *= 2;
      } else if (bonusArr[i][1] === '#') {
        score[i] *= -1;
      }
    }
  }

  return score.reduce((acc, num) => acc + num);
}
