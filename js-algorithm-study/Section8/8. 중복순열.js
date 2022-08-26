function solution(n, m) {
  const answer = [];

  function aux(count, bucket) {
    if (count === m) {
      answer.push(bucket);
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        aux(count + 1, bucket.concat(i));
      }
    }
  }
  aux(0, []);
  // answer.push(answer.length);
  return answer;
}

console.log(solution(3, 2));

// 해설
function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // tmp를 복사하여 push
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i; // 0번째, 1번째 인덱스에 뽑은 숫자 할당
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

// 중복 순열
// D(0)에서 n만큼 가지가 뻗는다 (for문. 1을 뽑는 경우, 2를 뽑는 경우, ... n을 뽑는 경우)
// 임시 배열 tmp 사용

//                      D(0)
//*             1/       2|       3\
//           D(1)       D(1)       D(1)
//*     1/  2|  3\
//   D(2)  D(2)  D(2)
//! [1 1] [1 2] [1 3]  <- tmp에 입력된 요소

// L === m일 때 tmp를 answer에 push <- L이 0부터 m단계까지 재귀적 호출

//? 2중 for문으로 구성해도 똑같은 문제
// function solution(n, m) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       answer.push([i, j]);
//     }
//   }
//   return answer;
// }
//? -> 그러나 n개에서 m을 뽑으려면 m중 for문이 필요함