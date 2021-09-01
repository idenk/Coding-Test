function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  let minIdx = 0;
  arr.reduce((pre, cur, idx) => {
    if (pre > cur) {
      minIdx = idx;
      return cur;
    } else {
      return pre;
    }
  });

  arr.splice(minIdx, 1);
  return arr;
}
