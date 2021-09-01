function solution(table, languages, preference) {
  table = table.map((el) => el.split(' '));

  const score = new Array(table.length).fill(0);

  for (let i = 0; i < languages.length; i++) {
    const lan = languages[i];
    const prf = preference[i];

    for (let j = 0; j < table.length; j++) {
      const idx = table[j].indexOf(lan);
      if (idx >= 1) {
        score[j] += (6 - idx) * prf; // 5점부터 시작
      } else {
        score[j] += 0;
      }
    }
  }
  const jobScore = score.map((el, idx) => [table[idx][0], el]);

  jobScore.sort((a, b) => b[1] - a[1]);

  const highestScore = jobScore[0][1];

  const highestJob = jobScore.filter((el) => el[1] === highestScore).map((el) => el[0]);
  highestJob.sort();

  return highestJob[0];
}

const table = [
  'SI JAVA JAVASCRIPT SQL PYTHON C#',
  'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
  'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
  'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
  'GAME C++ C# JAVASCRIPT C JAVA',
];
const languages = ['JAVA', 'JAVASCRIPT'];
const preference = [7, 5];

solution(table, languages, preference);

// table: 직업군 언어 점수. 문자열 배열
// languages: 개발자가 사용하는 언어. 문자열 배열
// preference: 언어 선호도. 정수 배열

// 1. table을 관리하기 쉽도록 2차원 배열로 변경
// 2. 개발자의 languages를 순회
// 2-1. 각 언어의 직업군 점수 X 언어 선호도를 계산하여 점수를 배열에 저장.
// 3. 점수와 직업군을 매칭한 뒤, 점수를 기준으로 내림차순을 정렬하여, 중복되는 점수가 있는지 확인 후 리턴
