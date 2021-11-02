function solution(numbers) {
  const none = [];

  for (let i = 0; i <= 9; i++){
    if (!numbers.includes(i)) {
      none.push(i);
    }
  }

  return none.reduce((a, c) => a + c);
}