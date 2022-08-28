function solution(n, f) {
  let answer,
    flag = 0;
  // 조합 메모이제이션 배열, n이 1~10
  const dy = Array.from(Array(11), () => Array(11).fill(0));
  // 순열 체크 배열
  const ch = Array.from({ length: n + 1 }, () => 0);
  // 순열 저장 배열
  const p = Array.from({ length: n }, () => 0);
  // 조합값 저장 배열
  const b = Array.from({ length: n }, () => 0);

  // const test = [];

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (flag) return;
    // if (L === n) console.log(p);
    if (L === n && sum === f) {
      answer = p.slice();
      // test.push(p.slice());
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + p[L] * b[L]);
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  // console.log(test);
  return answer;
}

// n: 가장 윗줄에 있는 숫자의 개수, f: 가장 밑에 있는 수

// // n-1의 단계를 거쳐서 f가 완성됨
// // n = (n - x) + n - (n - x)
// // x는 1 ~ n-1까지의 수

console.log(solution(4, 16));

//! 해설: 확통 이항 정리
// function solution(n, f) {
//   let answer,
//     flag = 0;
//   let dy = Array.from(Array(11), () => Array(11).fill(0));
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   let p = Array.from({ length: n }, () => 0);
//?  let p = [];
//   let b = Array.from({ length: n }, () => 0);
//   function combi(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) return 1;
//     else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }
//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n && sum === f) {
//       answer = p.slice();
//       flag = 1;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           p[L] = i;
//?           p[L].push(i);
//           DFS(L + 1, sum + b[L] * p[L]);
//           ch[i] = 0;
//?           p[L].pop();
//         }
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i);
//   }
//   DFS(0, 0);
//   return answer;
// }

// n = 4인 경우 예제
//   1     2     3     4
//     1+2   2+3   3+4
//    1+2+2+3   2+3+3+4
//     1+2+2+2+3+3+3+4
//*  1*(1)+2*(3)+3*(3)+4*(1)
//!    3C0   3C1   3C2   3C3
//! 순열(1)*조합값(3C0) + ,,,
