function solution(n, m) {
  const answer = [];

  function pickOrNot(idx, bucket) {
    if (bucket.length === m) {
      answer.push(bucket);
      return;
    }
    if (idx === n) return;
    pickOrNot(idx + 1, bucket.concat(idx + 1));
    pickOrNot(idx + 1, bucket);
  }
  pickOrNot(0, []);

  return answer;
}

console.log(solution(4, 2));

//! 해설
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {  // 종료 조건
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;  // i는 뽑는 숫자
        DFS(L + 1, i + 1); // i는 뽑았으니 i+1을 뽑기
      }
    }
  }
  DFS(0, 1);
  return answer;
}

// M개를 뽑는 방법의 수 -> 조합

// D(L, s)  L:레벨, s:스타트 숫자

//                D(0,1)
//* i:       1/                2|           3|       4\
//       D(1,2)              D(1,3)        D(1,4)    D(1,5)
//*   2/   3|    4\         3/   4\         4|
// D(2,3) D(2,4) D(2,5)   D(2,4) D(2,5)    D(2,5)
//! [1,2]  [1,3]  [1,4]   [2,3]    [2,4]    [3,4]   <- tmp에 저장된 조합