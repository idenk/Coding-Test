function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function makeMap(str) {
  const map = new Map();
  for (let x of str) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  return map;
}
function solution(s, t) {
  let answer = 0;
  let tH;
  let len = t.length;
  tH = makeMap(t);

  for (let i = 0; i < s.length - len + 1; i++) {
    sub = s.slice(i, i + len); // O(n) -> 투 포인터로 변경 필요
    const subH = makeMap(sub);
    // console.log(tH, subH);
    if (compareMaps(tH, subH)) answer++;
  }

  return answer;
}

// 1. b로 해시맵 생성
// 2. b의 길이만큼 a의 부분문자열을 구함
// 3. a의 부분 문자열의 해시맵과 b 매시맵 비교
// 4. 일치하면 cnt

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));

//! 해설
//* 맵 비교 함수
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  // tH 맵 입력
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1; // 맵을 한 칸 비워두기
  // sH 맵 입력
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0; // 투 포인터 + 슬라이딩
  for (let rt = len; rt < s.length; rt++) {
    // rt번째 요소 맵에 추가
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    // 비교
    if (compareMaps(sH, tH)) answer++;
    // lt번째 요소 맵에서 삭제
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

// 1. lt는 s의 0번째 인덱스, rt는 s의 t의 길이-1번째 인덱스
// 2. t로 t맵 생성, s의 0부터 rt-1까지로 s맵 생성 (맵을 한 칸 비워두고 rt와 lt에 따라 s맵 수정)
// 3. rt가 가리키는 요소를 s맵에 추가(값 + 1)하고 t맵과 비교
// 4. lt가 가리키는 요소를 s맵에서 삭제(값 -1). 0이면 삭제(맵 비교를 위해)
// 5. 3~4를 s를 모두 순회할 때까지 반복
