function solution(s) {
  const nums = s.split(" ");

  let min = nums[0], max = nums[0];

  for (let i = 1; i < nums.length; i++){
    if (min > Number(nums[i])) min = nums[i];
    if (max < Number(nums[i])) max = nums[i];
  }

  return `${min} ${max}`;
}

console.log(solution("1 2 3 4"));