function solution(number, k) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
    // console.log(stack);
  }

  stack = stack.slice(0, stack.length - k); // k가 남아있으면 k만큼 숫자를 뒤에서부터 제거
  answer = stack.join('');
  return answer;
}

let input = '1924';
console.log(solution(input, 2));

// 스택을 사용
// 1. 스택을 생성
// 2. number를 순회 (가장 큰 자릿수부터)
// 3. 현재 스택에 있는 숫자와 현재 idx가 가리키는 숫자를 비교
//    idx가 가리키는 숫자가 더 크다면 이전 숫자를 스택에서 pop하고 새로운 숫자를 push, k를 1 감소
// 4. k가 0이 될 때까지 단계 3을 반복
