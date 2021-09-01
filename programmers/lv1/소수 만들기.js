function solution(nums) {
  let count = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const number = nums[i] + nums[j] + nums[k];
        if (isPrime(number)) count++;
      }
    }
  }

  return count;
}

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  if (num === 1 || num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
