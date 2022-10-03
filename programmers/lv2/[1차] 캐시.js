function solution(cacheSize, cities) {
  let answer = 0;
  const cache = new Array(cacheSize).fill(0);

  // cacheSize가 0이면 모든 도시에 대해 케시 미스
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    let idx = cache.indexOf(city);
    console.log("idx", idx);
    if (idx >= 0) {
      // 캐시 히트
      answer += 1;
      cache.splice(idx, 1);
      cache.push(city);
    } else {
      // 캐시 미스
      answer += 5;
      cache.shift();
      cache.push(city);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);

// LRU: 가장 참조가 오래된 페이지를 바꾸는 페이지 교체 알고리즘

// 배열을 이용해서 배열에 도시가 존재하면 캐시 히트, 존재하지 않으면 캐시 미스로 구현
// 탐색 시간을 줄이기 위해 map 사용 가능