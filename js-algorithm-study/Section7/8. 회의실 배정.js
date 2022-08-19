function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  const tmp = new Array(meeting.length).fill(0).map((el) => new Array());
  for (let i = 0; i < meeting.length; i++) {
    tmp[i].push(meeting[i]);
    let fin = meeting[i][1];
    for (let j = i + 1; j < meeting.length; j++) {
      if (fin <= meeting[j][0]) {
        tmp[i].push(meeting[j]);
        fin = meeting[j][1];
      }
    }
  }
  answer = Math.max(...tmp.map((el) => el.length));

  return answer;
}

// 1. 각 회의를 포함했을 때 몇 개까지 회의를 넣을 수 있는지 계산
// 2. 이전 회의의 끝나는 시간을 기준으로 다음 회의를 할 수 있는지 확인
//    할 수 있는 회의만 카운팅
// O(n^2)

let arr1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr1));

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr2));

//! 해설: 그리디 알고리즘
function solution(meeting) {
  let answer = 0;
  // 끝나는 시간으로 정렬
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0; // end time
  for (let x of meeting) {
    if (x[0] >= et) {
      // 시작 시간과 끝나는 시간 비교
      answer++;
      et = x[1];
    }
  }
  return answer;
}

// 끝나는 시간으로 정렬. 끝나는 시간이 동일하면 시작하는 시간을 기준으로 정렬
// 첫 번째 회의는 무조건 하는 것으로 간주(그리디) -> O(n)
