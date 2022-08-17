function solution(n, k) {
  let answer;
  const queue = new Array(n).fill(0).map((el, i) => i + 1);
  // console.log(queue);
  let count = 1;
  let idx = 0;

  while (queue.length > 1) {
    console.log(count, queue, idx);
    if (count === k) {
      queue.splice(idx, 1);
      count = 1;
      if (idx === queue.length) idx = 0; // 마지막 인덱스의 왕자가 제외되면 0으로 초기화
    } else {
      count++;
      idx = idx + 1 === queue.length ? 0 : idx + 1;
    }
  }

  answer = queue[0];
  return answer;
}

// 왕자 n명, 외치면 안되는 번호 k

// 1. 왕자를 queue에 넣고 1명이 될 때까지 반복.
// 2.   count는 1부터, idx는 0부터 1씩 증가
// 3.   count가 k가 되었을 때 idx에 해당하는 왕자를 제외.
//      count는 1로 초기화, idx는 왕자가 한 명 줄었으므로 유지(가장 마지막에 있는 왕자면 0으로 초기화)
// 4.   idx가 큐의 끝에 도달하면 다시 0으로 변경
//* -> queue보단 배열의 풀이

console.log(solution(8, 3));

//! 해설
function solution(n, k) {
  let answer;
  // let queue = Array.from({ length: n }) // 길이가 n인 유사 배열 객체
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    if (queue.length === 2);
    for (let i = 1; i < k; i++) queue.push(queue.shift()); // k-1번 순회
    queue.shift(); // k번째는 그냥 제거
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

// 1. k-1만큼 반복하며 queue에서 앞에서 꺼내 뒤에 입력
// 2. k번째는 queue에서 그냥 꺼내기