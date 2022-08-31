function solution(n, times) {
  let answer = 0;

  //* time 안에 n명을 심사할 수 있는지 확인하는 함수
  function checkImmigration(time) {
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count += parseInt(time / times[i]);
      if (count >= n) return true;
    }
    return false;
  }

  let lt = Math.min(...times);
  let rt = Math.max(...times) * n;
  console.log(lt, rt);

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (checkImmigration(mid)) {
      // 가능한 경우 -> 시간을 줄이며 더 짧은 시간에 가능한지 확인
      answer = mid;
      rt = mid - 1;
    } else {
      // 불가능한 경우 -> 시간을 늘림
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));

// 이분 탐색
// 심사관의 수: times배열의 길이

// n명을 심시하는 데 걸리는 최소 시간: times배열의 최솟값
// n명을 심시하는 데 걸리는 최대 시간: times배열의 최댓값 * n
