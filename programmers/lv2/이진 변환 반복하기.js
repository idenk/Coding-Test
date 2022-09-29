function solution(s) {
  let zeroCount = 0;
  let sLen = 0;
  let count = 0;

  while (s != '1') {
    count++;
    zeroCount += s.split('').filter((el) => el === '0').length;
    sLen = s.replaceAll(0, '').length;
    s = sLen.toString(2).toString();
  }

  return [count, zeroCount];
}

console.log(solution('110010101001'));

// 1. 0과 1로 된 문자열에서 0을 모두 제거하고 남은 문자열의 길이(10진수)를 2진수로 변환
// 2. 변환된 2진수가 1이 될 때까지 단계 1을 반복
// 리턴값: [이진 변환 횟수, 총 제거한 0의 수]
