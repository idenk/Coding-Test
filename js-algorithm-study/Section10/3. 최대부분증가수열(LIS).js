function solution(arr) {
  let answer = 0;

  // dy[i]: arr[i]를 마지막 원소로 가지는 LIS의 길이
  const dy = new Array(arr.length).fill(0);

  dy[0] = 1; // arr[0] 하나만 있는 수열: 1개
  for (let i = 1; i < arr.length; i++) {
    let max = 0; // arr[i]가 추가될 수 있는 가장 긴 수열의 길이 저장
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) max = Math.max(max, dy[j]);
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]); // 답은 dy의 최댓값
  }
  return answer;
}

//어떤 임의의 수열이 주어질 때, 이 수열에서 몇 개의 수들을 제거해서 부분 수열을 생성 가능
// 이때 만들어진 부분 수열 중 오름차순으로 정렬된 가장 긴 수열
// -> 최대 부분 증가 수열(LIS, Longest Increasing Subsequence)

// arr[i]가 수열에서 마지막 값이 되기 위해서는
// arr[i]가 추가되기 전 부분 증가 수열의 마지막 값이 arr[i]보다 작은 값이어야 함
// -> dy[i]의 값 = arr[i]가 추가될 수 있는 부분 증가 수열 중 가장 긴 수열의 길이 + 1

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));

//! 해설
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        // arr[i]를 추가할 수 있는 부분 증가 수열 중에서 가장 긴 길이를 저장
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

// dy[i]: arr[i]를 마지막 원소로 가지는 최대 부분 증가 수열의 길이
// dy[0] = 1

// idx   0   1   2   3   4   5   6   7
// arr   5   3   7   8   6   2   9   4
//* dy   1   1   2   3   2   1   4   2
//             [3,7]
//                [3,7,8]
//                           [3,7,8,9]
