function solution(n) {
  let x = 2;

  while (true) {
    if (n % x === 1) return x;
    x++;
  }
}

// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 리턴
// x의 최댓값은 n-1, 최솟값은 2
// x를 2부터 1씩 증가시켜 올바른 답을 구함