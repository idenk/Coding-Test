function solution(s) {
  let arr = s.split('');
  let upper = [],
    lower = [];

  arr.forEach((char) => {
    if (char.match('[A-Z]')) {
      upper.push(char);
    } else {
      lower.push(char);
    }
  });

  upper.sort().reverse();
  lower.sort().reverse();

  let result = lower.concat(upper).join('');

  return result;
}
