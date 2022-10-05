function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkBracket(s)) answer++;
    s = s.slice(1) + s.slice(0, 1);
  }

  return answer;
}

function checkBracket(str) {
  const stack = [];

  for (let c of str) {
    switch (c) {
      case "[": case "{": case "(":
        stack.push(c);
        break;
      case "]": case "}": case ")":
        if (stack.length === 0) return false;

        const end = stack[stack.length - 1];
        if (
          (end === "[" && c === "]") ||
          (end === "{" && c === "}") ||
          (end === "(" && c === ")")
        ) {
          stack.pop();
        } else {
          return false;
        }
        break;
    }
  }

  if (stack.length > 0) return false;

  return true;
}

console.log(solution("[](){}"));

// 괄호 s를 0~s만큼 왼쪽으로 회전시켰을 때 올바른 괄호의 개수
// 회전시킨 문자열마다 괄호 검사
