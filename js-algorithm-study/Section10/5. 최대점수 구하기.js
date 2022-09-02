function solution(m, arr) {
  let answer = 0;

  const dy = new Array(m + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const ps = arr[i][0];
    const pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));

//! 해설
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];   // 문제 점수
    let pt = arr[i][1];   // 문제 시간
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

// dy[j] : j 시간 안에 얻을 수 있는 최고점
// 문제마다 해당 문제를 풀었다고 가정하며 dy 배열의 값을 수정

// 동전 교환 문제와 다르게 중복 적용을 하면 안되는 문제
// dy 배열을 앞에서부터 뒤로 적용 시 중복 적용이 되버림
// ex) 5분에 10점인 문제를 풀었다고 가정 -> dy[5] = 10, dy[10] = 20(한 문제를 두 번 풀은 것이 됨)

// j = m~pt[i] -> 뒤에서부터 앞으로 적용. 배열은 0으로 초기화돼있으므로 dy[10] = 10, dy[5] = 10

//! dy[j - pt] + ps
// 해당 문제를 풀었다고 가정했을 때의 최고점(해당 문제를 푸는데 걸리는 시간을 차감) + 해당 문제의 점수
// ex) dy[20] = 10일 때, 12분에 25점인 문제를 풀었다고 가정
//     dy[8]도 10이므로 10+25 = 35 -> dy[20]을 35로 변경
