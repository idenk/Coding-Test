function solution(priorities, location) {
  let count = 0;

  const documents = new Array(priorities.length)
    .fill([])
    .map((el,idx) => [priorities[idx], idx]);


  while (documents.length > 0) {
    const doc = documents.shift();
    const isPrint = documents.every((el) => el[0] <= doc[0]);

    if (isPrint) {
      console.log(doc);
      count++;
      if (doc[1] === location) {
        return count;
      }
    } else {
      documents.push(doc);
    }
  }
}

solution([2, 1, 3, 2], 2);

// 1. 인쇄 대기 목록(priorities)를 [인쇄 대기 목록, index]의 요소를 가진 2차원 배열 documents로 매핑.
// 2. documents의 가장 앞에 있는 문서 J를 꺼냄.
// 3-1. 나머지 documents에서 해당 문서 J보다 중요도가 높은 문서가 있다면 J를 documents 마지막에 입력. 2로 이동
// 3-2. 아니면 J 인쇄. count를 기록. 2로 이동
// 4. J의 index(두번째 요소)가 location이면 count 리턴
