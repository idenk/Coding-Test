function solution(operations) {
  const answer = [];
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  operations.forEach((op) => {
    if (op[0] === 'I') {
      const num = Number(op.slice(2));
      maxHeap.insert(num);
      minHeap.insert(num);
    } else if (op === 'D 1') {
      const deleted = maxHeap.remove();
      minHeap.remove(deleted);
    } else if (op === 'D -1') {
      const deleted = minHeap.remove();
      maxHeap.remove(deleted);
    }
  });
  // console.log(maxHeap);
  // console.log(minHeap);

  if (maxHeap.size() === 0) return [0, 0];

  answer.push(maxHeap.peek());
  answer.push(minHeap.peek());

  return answer;
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  peek() {
    return this.heap[1];
  }

  insert(item) {
    this.heap.push(item);

    let idx = this.heap.length - 1;
    let pIdx = parseInt(idx / 2);

    while (pIdx > 0 && this.heap[pIdx] > this.heap[idx]) {
      [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]]; // 교환
      idx = pIdx;
      pIdx = parseInt(idx / 2);
    }

    return this.heap;
  }

  remove(item) {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    let deleted, idx, pIdx, cIdx;
    if (item) {
      idx = this.heap.findIndex((v) => v === item);
      if (idx < 0) return;
      if (this.size() === idx) return this.heap.pop();

      deleted = this.heap[idx];
      this.heap[idx] = this.heap.pop();
      pIdx = idx;
      cIdx = pIdx * 2;
    } else {
      deleted = this.heap[1];
      this.heap[1] = this.heap.pop();
      pIdx = 1;
      cIdx = pIdx * 2;
    }

    while (this.heap[cIdx]) {
      if (this.heap[cIdx + 1] && this.heap[cIdx + 1] < this.heap[cIdx]) {
        cIdx++;
      }
      if (this.heap[pIdx] < this.heap[cIdx]) break;
      [this.heap[pIdx], this.heap[cIdx]] = [this.heap[cIdx], this.heap[pIdx]];
      pIdx = cIdx;
      cIdx = cIdx * 2;
    }

    return deleted;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  peek() {
    return this.heap[1];
  }

  insert(item) {
    this.heap.push(item);

    let idx = this.heap.length - 1;
    let pIdx = parseInt(idx / 2);

    while (pIdx > 0 && this.heap[pIdx] < this.heap[idx]) {
      [this.heap[pIdx], this.heap[idx]] = [this.heap[idx], this.heap[pIdx]];
      idx = pIdx;
      pIdx = parseInt(idx / 2);
    }

    return this.heap;
  }

  remove(item) {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    let deleted, idx, pIdx, cIdx;
    // 삭제할 원소가 들어오면
    if (item) {
      // 해당 원소의 idx 탐색
      idx = this.heap.findIndex((v) => v === item);
      if (idx < 0) return;
      if (this.size() === idx) return this.heap.pop();

      // 루트 대신 해당 원소의 위치에 힙의 가장 마지막 원소를 저장
      deleted = this.heap[idx];
      this.heap[idx] = this.heap.pop();
      pIdx = idx;
      cIdx = pIdx * 2;
    } else {
      deleted = this.heap[1];
      this.heap[1] = this.heap.pop();
      pIdx = 1;
      cIdx = pIdx * 2;
    }

    // 부모-자식 대소를 비교하며 교환
    while (this.heap[cIdx]) {
      if (this.heap[cIdx + 1] && this.heap[cIdx + 1] > this.heap[cIdx]) {
        cIdx++;
      }
      if (this.heap[pIdx] > this.heap[cIdx]) break;
      [this.heap[pIdx], this.heap[cIdx]] = [this.heap[cIdx], this.heap[pIdx]];
      pIdx = cIdx;
      cIdx = cIdx * 2;
    }
    return deleted;
  }
}

let op1 = ['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1'];
let op2 = ['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333'];

console.log(solution(op1));
console.log(solution(op2));

// 최소힙, 최대힙 2개를 사용하여 이중 우선순위 큐를 구현
// 최솟값 삭제시 최소힙에서 삭제 연산을 하고 그 값을 최대힙에서 찾아 삭제
// 최댓값 삭제시 최대힙에서 삭제 연산을 하고 그 값을 최소힙에서 찾아 삭제

//* 힙 연습문제이므로 힙을 이용해서 풀이
// 다른 힙에서 삭제할 원소를 탐색하는 과정에서 O(n)이 걸림
// -> 힙마다 원소의 위치를 저장하는 테이블을 두면 해결 가능
