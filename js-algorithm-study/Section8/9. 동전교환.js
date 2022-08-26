function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const test = [];
  let tmp = [];
  function DFS(L, sum) {
    if (sum > m) return;
    if (sum === m) {
      test.push(tmp.slice());
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  console.log(test);

  return answer;
}
// m: 거슬러 줄 금액, arr: 동전의 종류
// -> 거슬러 줄 동전의 최소 개수

// A1. 그리디로 가장 큰 동전부터 하나씩 확인하며 개수를 계산 -> 사실 그리디로 불가능한 문제
// A2. 재귀로 거슬러 줄 금액을 만들 수 있는 모든 경우의 수를 계산하고, 그중 최소 개수를 빈환
// 동전의 개수는 무한정 -> 중복 순열

let arr = [1, 2, 5];
console.log(solution(15, arr));

// 해설
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  // arr.sort((a, b) => b - a); //* 사실 이 문제의 경우 내림차순으로 정렬하는 것이 효율성이 더 좋음
  function DFS(L, sum) {
    if (sum > m) return; // sum이 m보다 커졌을 때 무한 재귀(스택오버플로우)를 방지 ex. sum이 14에서 16으로 증가한 경우
    if (L >= answer) return; //! 최소 개수를 구하는 것이므로 굳이 더 재귀를 호출할 없음
    if (sum === m) {// 종료 조건
      console.log(L, sum);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

// L: 레벨은 동전을 사용한 개수.

//                      D(0,0)
//*  idx 번호     0/       1|       2\
//           D(1,1)     D(1,2)     D(1,5)
//*     0/   1|  2\
//  D(2,2) D(2,3) D(2,6)
//? ...
// D(15,15)까지 반복
