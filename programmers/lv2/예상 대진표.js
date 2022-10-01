function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    answer++;
  }

  return answer;
}

console.log(solution(8, 4, 7));

// n: 참가자 수
// a와 b: 참가자의 번호
// 반환값: a, b가 주어질 때 붙는 라운드

// 참가자의 번호는 라운드가 진행될 때마다 절반으로 감소(홀수의 경우 반올림)
// 두 참가자의 번호가 같아지기 전까지 횟수를 계산

//* 시간 초과
// n = 2^x일 때 총 라운드 수 x
// 각 참가자가 n/2(mid) 기준으로 양 옆에 있을 경우 항상 마지막 라운드(x)에서 붙음
// mid를 절반씩 나누며, 나눠질 때마다 필요 라운드 수가 1씩 감소
// function solution(n, a, b) {
//   let cnt = 0;
//   let mid = n / 2;
//   let num = 2, x = 1;

//   while (num < n) {
//     num *= 2;
//     x++;
//   }

//   while (true) {
//     if (a <= mid && b > mid) break;
//     cnt++;
//     mid = mid / 2;
//   }

//   return x - cnt;
// }
