function solution(s) {
  let answer = 'YES';
  const stack = [];
  
  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')') {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

// 1. 괄호를 순회
// 2.  (이면 스택에 push
// 3.  )이면 pop
// 4. 순회가 끝나고 배열이 비어있으면 올바른 괄호

let a = '(()(()))(()';
console.log(solution(a));

let b = '((((()))))()()(())';
console.log(solution(b));

// 해설
// function solution(s) {
//   let answer = 'YES';
//   stack = [];
//   for (let x of s) {
//     if (x === '(') stack.push(x);
//     else {
//       if (stack.length === 0) return 'NO'; // ')'가 더 많은 경우
//       stack.pop();
//     }
//   }
//   if (stack.length > 0) return 'NO'; // '('가 더 많은 경우
//   return answer;
// }
