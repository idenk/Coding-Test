function solution(n, k, arr, m) {
  let answer = 0;
  const tmp = new Array(k).fill(0);

  function DFS(L, s) {
    if (L === k) {
      const sum = tmp.reduce((a, b) => a + b, 0);
      // console.log(tmp, sum);
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0, 0);

  return answer;
}

// n개에서 k를 뽑는 조합 중에서,
// 조합의 합이 m의 배수가 되는 개수

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

//! 해설
function solution(n, k, arr, m) {
  let answer = 0;
  function DFS(L, s, sum) { // sum을 매개변수로 넘김 -> 효율성
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);  // 뽑은 숫자를 sum에 누적
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}
