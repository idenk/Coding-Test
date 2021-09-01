function solution(n) {
  let arr = [2];

  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    let sqrt = parseInt(Math.sqrt(i));

    for (let j = 3; j <= sqrt; j += 2) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr.length;
}
