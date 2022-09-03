function solution(jobs) {
  let answer = 0;
  let time = 0; // 시간
  const len = jobs.length;

  // 최소힙 생성
  const heap = new Heap();

  jobs.sort((a, b) => a[0] - b[0]);
  // console.log(jobs);

  let idx = 0;

  // jobs를 끝까지 순회하고 힙이 빌 때까지 반복
  while (idx < len || heap.size() > 0) {
    if (idx < len && time >= jobs[idx][0]) {
      // 작업의 범위를 벗어나지 않는 한에서 현재 시간에 요청되는 작업을 힙에 입력
      heap.insert(jobs[idx++]);
    } else if (heap.size() > 0) {
      // 현재 입력할 수 있는 작업이 없고 힙에 작업이 남아있으면
      let cJob = heap.remove(); // 작업이 종료되고 힙에서 제거
      time += cJob[1]; // 현재 시간 갱신
      answer += time - cJob[0]; // 완료된 시간 - 요청 시점 = 작업이 요청부터 종료까지 걸린 시간
      // console.log(time - cJob[0]);
    } else {
      // 힙이 비어있고 작업이 남아있는 경우
      // 그 다음 작업을 힙에 입력하기 위해 시간을 갱신
      time = jobs[idx][0];
    }
  }

  answer = parseInt(answer / len);
  return answer;
}

// 최소 힙 자료구조
class Heap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  insert(item) {
    this.heap.push(item);

    let idx = this.heap.length - 1; // 새로운 노드의 인덱스
    let pIdx = parseInt(idx / 2);

    // item이 배열이므로 1번 인덱스 값으로 값을 비교
    while (pIdx > 0 && this.heap[pIdx][1] > this.heap[idx][1]) {
      [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]]; // 교환
      idx = pIdx;
      pIdx = parseInt(idx / 2);
    }
    return this.heap;
  }

  remove() {
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[1];
    this.heap[1] = this.heap.pop();

    let pIdx = 1; // 부모 노드 (교체 후보)
    let cIdx = pIdx * 2; // 왼쪽 자식 노드

    while (this.heap[cIdx]) {
      if (this.heap[cIdx + 1] && this.heap[cIdx + 1][1] < this.heap[cIdx][1]) {
        cIdx++;
      }
      if (this.heap[pIdx][1] < this.heap[cIdx][1]) break;
      [this.heap[pIdx], this.heap[cIdx]] = [this.heap[cIdx], this.heap[pIdx]];
      pIdx = cIdx;
      cIdx = cIdx * 2;
    }
    return root;
  }
}

let input = [
  [0, 3],
  [1, 9],
  [2, 6],
];
console.log(solution(input));

// 작업이 최소 힙에 입력
// ex) 현재 작업이 완료되었을 때 소요 시간이 적은 작업을 다음 수행할 작업으로 선택
// 최소 힙에 입력하고 삭제하면서 그 값을 더하며 평균을 구함

// 처음 시도한 코드
// function solution(jobs) {
//   let answer = 0;
//   let count = 0;
//   const len = jobs.length;
//   let time = 0;
//   const tmp = [];

//   const heap = new Heap();

//   jobs.sort((a, b) => b[0] - a[0]);
//   console.log(jobs);

//   heap.insert(jobs.pop());

//   while (heap.size() > 0 || jobs.length > 0) {
//     let cJob = heap.remove();
//     if (cJob) {
//       console.log(cJob);
//       count += cJob[1];
//       time += count - cJob[0];
//       tmp.push(count - cJob[0]);
//       // console.log(cJob, count);
//       while (jobs.length > 0 && count >= jobs[jobs.length - 1][0]) {
//         heap.insert(jobs.pop());
//       }
//     } else {
//       heap.insert(jobs.pop());
//     }
//   }
//   console.log(tmp);
//   answer = parseInt(time / len);
//   return answer;
// }
