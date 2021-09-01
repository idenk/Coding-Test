function solution(s) {
  let strArr = s.split(' ');

  let resultArr = strArr.map((string) => {
    return string
      .split('')
      .map((el, idx) => {
        if (idx % 2 === 0) {
          return el.toUpperCase();
        } else {
          return el.toLowerCase();
        }
      })
      .join('');
  });

  return resultArr.join(' ');
}
