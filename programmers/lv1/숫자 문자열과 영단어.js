function solution(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < numbers.length; i++) {
    s = s.replace(new RegExp(numbers[i], 'g'), i);
  }
  
  return Number(s);
}

let s = 'one4seveneight';
solution(s);
