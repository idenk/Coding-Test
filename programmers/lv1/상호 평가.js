function solution(scores) {
  let result = '';

  const scoresInfo = {};

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
      if (scoresInfo[j]) {
        scoresInfo[j].push(scores[i][j]);
      } else {
        scoresInfo[j] = [];
        scoresInfo[j].push(scores[i][j]);
      }
    }
  }

  // 2 차원 배열 전환하는 코드
  // const scores = _scores.map((row, i) => row.map((col, j) => _scores[j][i]));

  for (let student in scoresInfo) {
    let studentNum = scoresInfo[student].length;
    const score = scoresInfo[student][student];

    scoresInfo[student].sort((a, b) => a - b);

    if (scoresInfo[student].indexOf(score) === 0) {
      if (scoresInfo[student][0] !== scoresInfo[student][1]) {
        scoresInfo[student].splice(0, 1);
        studentNum -= 1;
      }
    } else if (scoresInfo[student].indexOf(score) === studentNum - 1) {
      if (scoresInfo[student][studentNum - 1] !== scoresInfo[student][studentNum - 2]) {
        scoresInfo[student].splice(studentNum - 1, 1);
        studentNum -= 1;
      }
    }

    const grade = getGrade(scoresInfo[student].reduce((acc, cur) => acc + cur) / studentNum);
    result += grade;
  }

  return result;
}

function getGrade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 50) return 'D';
  else return 'F';
}

const scores = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

solution(scores);

// i와 j가 동일한 숫자는 본인이 평가한 점수
// 본인이 평가한 점수가 유일한 최고점 혹은 최저점이면 평균에서 제외.
// if 1차원 배열을 정렬 시 해당 점수가 0번 인덱스 or 마지막 인덱스 일 때,
//    1번 or 마지막 - 1 인덱스와 값이 동일한지 확인

// 1. 검사를 쉽게 하기 위해서 학생의 번호를 key, 학생의 받은 점수의 배열을 value로 가지는 객체 생성
// 2. value[key]는 본인이 평가한 점수