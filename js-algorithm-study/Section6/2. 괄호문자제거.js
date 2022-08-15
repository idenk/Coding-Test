function solution(s) {
  let answer = '';
  const stack = [];

  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')') stack.pop();
    else {
      if (stack.length === 0) answer += x;
    }
  }
  return answer;
}

// 1. 문자열 순회
// 2.  (이면 스택에 push
// 3.  )이면 pop
// 4.  문자고 스택이 0이면 answer에 입력

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

// 해설
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {               // 닫는 괄호면 
      while (stack.pop() !== '('); // 여는 괄호를 pop했을 때 거짓
    } else stack.push(x); // 여는 괄호, 문자면 모두 push
  }
  answer = stack.join('');
  return answer;
}

// 1. 문자열을 순회
// 2.  '('와 문자를 모두 스택에 push
// 3.  ')'이면 스택의 마지막 요소부터 짝인 '('까지 모두 스택에서 제거