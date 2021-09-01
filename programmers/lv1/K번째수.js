function solution(array, commands) {
  const result = [];

  for (let command of commands) {
    const [start, end, location] = command;

    let sliced = array.slice(start - 1, end);
    sliced.sort((a, b) => a - b);
    result.push(sliced[location - 1]);
  }

  return result;
}

// 1. command에서 start, end, location 추출
// 2. 추출한 start, end로 array를 slice
// 3. array 오름차순 정렬
// 4. location 번째에 있는 수 추출
