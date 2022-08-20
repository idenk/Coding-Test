function solution(times) {
  let answer;

  times.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  // console.log(times);

  const aux = function (arr, count) {
    if (arr.length < 1) {
      return count;
    }
    let tmp = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] < arr[i - 1][1]) tmp.push([arr[i][0], arr[i - 1][1]]);
    }
    let result = count;
    if (tmp.length > 0) {
      tmp.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
      });
      // console.log(tmp);
      result = aux(tmp, count + 1);
    }
    return result;
  };
  const count = aux(times, 1);
  // console.log(count);

  answer = count;
  return count;
}

// [오는 시간, 가는 시간]
// 동시에 존재하는 최대 인원 수
// 정렬하고, 두 사람이 피로연에 동시에 존재하는 경우의 시간을 하나씩 계산
// 재귀적으로 몇 번이나 호출되는지 = 몇 명의 사람이 있는지
// 재귀 단계로 계산 -> 너무 비효율적

let arr1 = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr1));

let arr2 = [
  [1, 10],
  [2, 8],
  [3, 9],
];
console.log(solution(arr2));

// 해설
function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];
  // 이벤트 분리
  for (let x of times) {
    T_line.push([x[0], 's']);
    T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // 아스키 코드로 정렬
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of T_line) {
    if (x[1] === 's') cnt++; // s면 증가
    else cnt--; // e면 감소 -> e를 먼저 정렬해야 하는 이유
    answer = Math.max(answer, cnt); // 큰 값으로 계속 갱신
  }
  return answer;
}

// 하나의 사람을 2개의 이벤트로 분리
// [오는 시간, 's'] [가는 시간, 'e']
// 정렬은 시간 순서대로. 시간이 동일하면 e 먼저
