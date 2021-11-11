function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

const result = solution('()()');
console.log(result);
