function solution(answers) {
  const stu1Pattern = [1, 2, 3, 4, 5];
  const stu2Pattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const stu3Pattren = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let stu1Answer = getStuAnswer(stu1Pattern, answers);
  let stu2Answer = getStuAnswer(stu2Pattern, answers);
  let stu3Answer = getStuAnswer(stu3Pattren, answers);

  let stu1Score = stu1Answer.filter((el, idx) => el === answers[idx]).length;
  let stu2Score = stu2Answer.filter((el, idx) => el === answers[idx]).length;
  let stu3Score = stu3Answer.filter((el, idx) => el === answers[idx]).length;

  let students = [
    [stu1Score, 1],
    [stu2Score, 2],
    [stu3Score, 3],
  ];
  students.sort((a, b) => b[0] - a[0]);

  let maxScore = students[0][0];
  let winner = students.filter((el) => el[0] >= maxScore);

  let result = winner.map((el) => el[1]);

  return result;
}

function getStuAnswer(pattern, answer) {
  let result = [];
  while (result.length < answer.length) {
    result = result.concat(pattern);
  }

  return result.slice(0, answer.length);
}

// 1. 각 학생의 찍기 패턴이 저장된 배열들을 answer길이에 맞춰서 증가시키거나 감소시켜서 학생들의 답을 구함
// 2. 학생의 답을 answer와 비교하여 해당 학생의 점수를 계산
// 3. 학생과 학생의 답을 연결한 배열을 만들고 가장 성적이 높은 학생순으로 정렬
// 4. 최고점인 학생이 여러명인지 필터링하고 최고점인 학생들만 출력
