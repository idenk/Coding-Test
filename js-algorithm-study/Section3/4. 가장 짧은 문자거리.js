function solution(s, t) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let dis = 0;
    let afterIndex = 0,
      beforeIndex = 0;

    if (s[i] === t) {
      answer.push(0);
      continue;
    }

    // s[i]를 기준으로 앞, 뒤로 index 계산. -1이면 없으므로 최대 길이 할당
    afterIndex = s.indexOf(t, i) !== -1 ? s.indexOf(t, i) : s.length - 1;
    beforeIndex = s.lastIndexOf(t, i - 1) !== -1 ? s.lastIndexOf(t, i - 1) : s.length - 1;

    // 더 가까이 있는 index와의 거리 계산
    dis = Math.min(afterIndex - i, i - beforeIndex);
    // 맨 처음, 마지막 인덱스의 경우
    if (i === 0) dis = afterIndex - i;
    if (i === s.length - 1) dis = i - beforeIndex;

    answer.push(dis);
  }

  return answer;
}

// 문자열을 순회하며
// indexOf 메소르를 이용해서 거리를 계산.
// 순회 중인 문자열을 기준으로 앞, 뒤 모두 가장 먼저 있는 인덱스 값을 구하고,
// 그 인덱스 값과 현재 문자열의 인덱스 값으로 거리를 계산

let str = 'teachermodel';
console.log(solution(str, 'e'));

// 해설
// function solution(s, t) {
//   let answer = [];
//   let p = 1000;     // 문자열의 길이가 1000을 넘지 않음
//   //* 해당 요소의 앞에 있는 t와의 거리
//   for (let x of s) {
//     if (x === t) {
//       p = 0;        // t를 만날 때마다 p를 0으로 초기화
//       answer.push(p);
//     } else {
//       p++;          // 다른 문자의 경우 p를 1씩 증가
//       answer.push(p);
//     }
//   }
//   p = 1000;
//   //* 해당 요소의 뒤에 있는 t와의 거리
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === t) p = 0;
//     else {
//       p++;
//       answer[i] = Math.min(answer[i], p);   // 기준 배열의 값과 비교하여 작은 값으로 재할당
//     }
//   }
//   return answer;
// }
