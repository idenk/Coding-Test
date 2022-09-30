function solution(people, limit) {
  let answer = 0; // 보트의 수
  let lIdx = 0,
    rIdx = people.length - 1;

  people.sort((a, b) => a - b);
  console.log('people',people)

  while (lIdx < rIdx) {
    if (people[lIdx] + people[rIdx] <= limit) {
      lIdx++;
      rIdx--;
    } else {
      rIdx--;
    }
    answer++;
  }
  if (lIdx === rIdx) answer++

  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));

// 최대 2명이 가장 많이 탈 수 있는 방법
// -> 가장 무거운 사람과 가벼운 사람이 타는 것

// 투 포인터 이용, 배열의 처음과 끝을 가리키는 두 인덱스
// 1. 사람을 몸무게 기준 오림차순으로 정렬
// 2. 가장 가벼운 사람과 무거운 사람이 탈 수 있으면 양 포인터를 조절하여 둘 다 탄 것으로 간주
//    탈 수 없으면 무거운 사람만 타는 것으로 간주
// 3. 두 포인터가 교차될 때까지 단계 2를 반복