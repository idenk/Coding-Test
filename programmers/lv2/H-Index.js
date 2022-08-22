function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  // console.log(citations);
  let i;
  for (i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      answer = i + 1
    }
  }
  return answer;
}

let input = [3, 0, 6, 1, 5];
console.log(solution(input));

// 어떤 과학자가 발표한 논문 n편 중,
// h번 이상 인용된 논문이 h편 이상이고
// 나머지 논문이 h번 이하 인용되었다면
// h의 최댓값이 이 과학자의 H-Index

// 1. 내림차순 정렬
// 2. idx 0부터 배열 끝까지 순회
// 3. idx + 1= 논문의 갯수, citations[idx]는 인용 횟수
//    citations[idx] >= idx + 1이 되는 최초의 idx + 1값