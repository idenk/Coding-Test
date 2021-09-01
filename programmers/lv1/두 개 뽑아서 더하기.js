function solution(numbers) {
  var answer = [];

  // 배열에 있는 요소마다 모든 숫자에 한번씩 접근하면서 더하고
  // 정답 배열에 없는 수라면 추가하고 마지막에 정렬

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.find((num) => num === numbers[i] + numbers[j])) {
        // ? 중복된 0값 처리가 되지 않음
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  answer.sort((a, b) => a - b);

  const set = Array.from(new Set(answer)); // 마지막에 set으로 중복된 0 제거

  return set;
}
