function solution(nums) {
  const choice = nums.length / 2;
  const newNums = [...new Set(nums)];
  console.log(newNums);

  if (choice <= newNums.length) {
    return choice;
  }
  return newNums.length;
}

let result = solution([3, 1, 2, 3]);
console.log(result);
