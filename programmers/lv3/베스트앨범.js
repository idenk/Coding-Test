function solution(genres, plays) {
  const answer = [];
  const map = new Map();
  const len = genres.length;

  // map에 노래 저장
  for (let i = 0; i < len; i++) {
    const data = map.get(genres[i]);
    if (data) {
      data[0] += plays[i];
      data.push([i, plays[i]]);
      data.sort((a, b) => {
        // 재생 횟수가 같으면 고유 번호가 낮은 노래를 우선 -> 오름차순
        if (a[1] === b[1]) return a[0] - b[0];
        // 재생 횟수가 높은 순으로 정렬 -> 내림차순
        return b[1] - a[1];
      });
    } else {
      map.set(genres[i], [plays[i], [i, plays[i]]]);
    }
  }
  // console.log(map);

  // 배열로 변경하고 정렬
  const arr = Array.from(map);
  arr.sort((a, b) => b[1][0] - a[1][0]);
  // console.log(arr);

  arr.forEach((list) => {
    answer.push(list[1][1][0]);
    if (list[1].length > 2) {
      answer.push(list[1][2][0]);
    }
  });

  return answer;
}

let genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));

// 장르마다 2개의 곡 수록
// genres[i]: i 노래의 장르
// plays[i]: i 노래의 재생 횟수

// 1. 장르별로 해시테이블에 노래를 정렬하며 저장
//   key : value ->  장르 : [총 재생 횟수, [a, a 재생 횟수], [b, b 재생 횟수]...]
// 2. 배열로 변경하고 다시 총 재생 횟수를 기준으로 정렬
// 3. 순서대로 answer에 입력
