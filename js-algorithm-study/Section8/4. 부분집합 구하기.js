function solution(n) {
  const answer = [];
  let el = 1;
  const arr = Array.from({ length: n }, () => el++);

  function pickOrNot(idx, bucket) {
    if (idx === arr.length) {
      if (bucket.length > 0) answer.push(bucket.trim());
      return;
    }
    pickOrNot(idx + 1, bucket.concat(arr[idx] + ' ')); // 현재 인덱스 요소 선택
    pickOrNot(idx + 1, bucket); // 현재 인덱스 요소 미선택
  }
  pickOrNot(0, '');

  return answer;
}

// 멱집합을 구하기

console.log(solution(3));

//! 해설
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열. n번까지 인덱스가 생겨야 하므로 n+1
  function DFS(L) {
    if (L === n + 1) {
      // n + 1이 되었을 때 종료
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim()); // trim: 문자열 앞, 뒤의 공백을 제거
    } else {
      ch[L] = 1; // 원소 포함 O
      DFS(L + 1);
      ch[L] = 0; // 원소 포험 X
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

//                       D(1)
//*            o/                   x\      2를 포함하는 경우, 포함하지 않는 경우
//           D(2)                    D(2)
//*        o/    x\                o/    x\
//       D(3)      D(3)          D(3)      D(3)
//*     o/ x\      o/ x\         o/ x\      o/ x\
//    D(4) D(4)   D(4) D(4)    D(4) D(4)   D(4) D(4)
//!  [123] [12]   [13] [1]    [23]   [2]   [3]   []

// 체크 배열을 이용
//ch  0  1  2  3
//   [x][] [] []

// 첫 번째로 D(4)가 호출되었을 때 체크 배열의 값은 [0, 1, 1, 1] => answer에 1 2 3을 입력
// 두 번째 체크 배열은 [0, 1, 1, 0] ...
