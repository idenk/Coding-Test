function solution(numbers, target) {
  let count = 0;

  function aux(idx, number) {
    if (idx === numbers.length) {
      if (number === target) {
        count += 1;
      }
      return;
    }
    aux(idx + 1, number + numbers[idx]);
    aux(idx + 1, number - numbers[idx]);
  }
  aux(0, 0);

  return count;
}

let numbers = [1, 1, 1, 1, 1];
let target = 3;

let result = solution(numbers, target);
console.log(result);
