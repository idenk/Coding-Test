function solution(n, lost, reserve) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let idx1 = lost.findIndex((el) => el === i);
    let idx2 = reserve.findIndex((el) => el === i);

    console.log(idx1, idx2);

    if (idx1 >= 0 && idx2 >= 0) {
      lost.splice(idx1, 1);
      reserve.splice(idx2, 1);
    }
  }

  console.log(lost, reserve);

  for (let i = 0; i < lost.length; i++) {
    let idx = reserve.findIndex((el) => el === lost[i] - 1 || el === lost[i] + 1);
    if (idx >= 0) {
      reserve.splice(idx, 1);
      count++;
    }
  }

  return n - lost.length + count;
}

let n = 3;
let lost = [1, 2];
let reserve = [2, 3];

let result = solution(n, lost, reserve);
console.log(result);

// 1. lost와 reserve에 중복으로 들어간 요소 제거
// 2. lost 배열을 순회
// 3. 해당 학생(lost 배열의 요소)의 +1번, -1번의 학생이reserve에 있을 경우
//    count 증가하며 reserver에서 제거(lost = reverse인 경우도 마찬가지)
// 4. 전체 학생 수 - lost 학생의 수 + count 반환
