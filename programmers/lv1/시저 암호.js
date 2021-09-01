function solution(s, n) {
  return s
    .split('')
    .map((letter) => {
      if (letter === ' ') {
        return ' ';
      }

      let letterCode = letter.charCodeAt();
      let offset = n;

      if (letterCode <= 90) {
        if (letterCode + offset > 90) {
          offset = letterCode + offset - 91;
          letterCode = 65;
        }
      } else {
        if (letterCode + offset > 122) {
          offset = letterCode + offset - 123;
          letterCode = 97;
        }
      }
      return String.fromCharCode(letterCode + offset);
    })
    .join('');
}

let s = 'a B z';
let n = 3;
let result = solution(s, n);
console.log(result);
