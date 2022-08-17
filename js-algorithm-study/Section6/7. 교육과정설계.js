function solution(need, plan) {
  let answer = 'YES';
  let cur = 0;
  for (let x of plan) {
    if (x === need[cur]) {
      cur++;
      if (!need[cur]) return 'YES'; // need의 끝에 도달 -> 검증 완료
    }
  }
  if (cur < need.length) return 'NO';
  return answer;
}

// 수업 설계
// 1. plan을 순회하며 need와 비교. 일치하면 need의 각 요소를 가리키는 포인터를 1씩 증가
// 2. 순회가 끝날 때까지 포인터가 배열 끝까지 도달하지 못했다면 NO

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
let c = 'CBA';
let d = 'CADBGE';
console.log(solution(c, d));

// 해설
// function solution(need, plan) {
//   let answer = 'YES';
//   let queue = need.split('');
//   for (let x of plan) {
//     if (queue.includes(x)) { // 필수 과목인지 확인
//       필수 과목이 큐의 맨 앞에 없는 경우(필수 과목 순서와 다르게 수업을 설계한 경우)
//       if (x !== queue.shift()) return 'NO';
//     }
//   }
//   if (queue.length > 0) return 'NO'; // 수업에 넣지 않은 필수 과목이 존재
//   return answer;
// }

// need로 queue 생성
// plan을 순회하며 과목이 queue에 있는지 확인
// 필수 과목이고 queue의 맨 앞에 있으면 올바른 수업 설계
// 필수 과목이고 queue의 맨 앞에 있지 않으면 올바르지 않은 수업 설계 -> NO
