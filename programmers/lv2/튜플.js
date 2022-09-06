function solution(s) {
  const answer = [];

  const arr = s
    .substring(2, s.length - 2)
    .split('},{')
    .map((v) => v.split(',').map((el) => Number(el)))
    .sort((a, b) => a.length - b.length);

  arr.forEach((set) => {
    for (let i = 0; i < set.length; i++) {
      if (!answer.includes(set[i])) {
        answer.push(set[i]);
      }
    }
  });

  return answer;
}

let input = '{{2},{2,1},{2,1,3},{2,1,3,4}}';
console.log(solution(input));

// 1. 문자열을 숫자만 남은 2차원 배열로 변경하고, 원소가 작은 순으로 정렬
// 2. 배열의 각 집합을 탐색하며 새롭게 들어온 숫자 순서대로 answer에 입력
