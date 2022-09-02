function solution(m, coin) {
  let answer = 0;

  const bag = new Array(m + 1).fill(1000);
  bag[0] = 0; // 0원을 거슬러 줄 수 있는 경우는 0가지

  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      // 만드려는 금액(j)가 해당 동전보다 크거나 같은 경우만 고려
      bag[j] = Math.min(bag[j], bag[j - coin[i]] + 1);
    }
  }
  answer = bag[m];
  console.log(bag);

  return answer;
}

// bag[i]: i원을 만들 수 있는 경우의 수

let arr = [1, 2, 5];
console.log(solution(15, arr));

//! 해설
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000); // 큰 숫자로 초기화
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      // 기존 dy[i]와 coin[i] 동전을 적용했을 때의 값 비교
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  console.log(dy);
  answer = dy[m];
  return answer;
}

// 동전 교환 문제는 재귀로 풀 수도 있지만,
// 동전의 종류가 100개, 금액이 100,000정도라면 재귀로 풀 수 없음 -> DP, 냅색 알고리즘

// dy[i]: i금액을 거슬러줄 동전의 최소 개수를 저장

// 우선 동전이 1원짜리 하나만 있다고 가정
// 2중 for문 - i: 동전 종류, j: coin[i]~m
//! dy[j - coin[i]] + 1
// j가 1이고 coin[i]가 1이면 0 + 1

// + 1: coin[i] 동전 한 개 사용
// dy[j - coin[i]]: coin[i] 동전을 무조건 사용한다고 가정했기 때문에 금액에서 coin[i]만큼 차감하고,
//                  차감된 금액을 거슬러줄 동전의 최소 개수(이전 dy값)

//? dy 배열
//  idx  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
//       ----------------------------------------------
//*coin
//* 1 |  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15   (1원으로만 각 금액을 거슬러 줄 때 동전의 개수)

//* 2 |  0  1  1  2  2  3  3  4  4  5  5  6  6  7  7  8
// dy[2] = 1: 0원을 만들 수 있는 가짓수 '0' + 2원 동전을 하나 사용한 가짓수 '1'
// 기존 dy값과 비교하여 작으면 변경

//* 5 |  0  1  1  2  2  1  2  2  3  3  2  3  3  4  4  3
// dy[10] = 2: 5원을 사용한다고 가정하고 dy[5]의 값에서 +1을 더함
