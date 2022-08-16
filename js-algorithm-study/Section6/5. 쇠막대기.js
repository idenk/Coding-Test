function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer += 1;
    }
  }

  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
let b = '(((()(()()))(())()))(()())';
console.log(solution(b));
let c = '((()()))';
console.log(solution(c));

//! 해설
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      stack.pop();
      //* 이전 입력 괄호 값으로 체크
      if (s[i - 1] === '(') answer += stack.length; // 레이저를 기준으로 좌측에 있는 잘린 막대기 개수
      else answer++; // 
      //* stack.pop(); 이 위치에 하면 레이저까지 막대기로 카운팅
    }
  }
  return answer;
}

//? 입력이 괄호: 80%는 스택 문제
// 1. 여는 괄호는 무조건 stack에 push
// 2. 닫는 괄호는 레이저인지, 막대기인지 검사해야 함 (이전 입력 괄호 값을 보고 판별)
//     레이저라면 pop하면서 현재 스택에 있는 괄호 개수 = 막대기의 개수 = 잘린 막대기의 개수를 answer에 누적
//     막대기라면 pop하면서 answer += 1. 현 시점 레이저를 기준으로 우측에 있는 잘린 막대기는 한 개
