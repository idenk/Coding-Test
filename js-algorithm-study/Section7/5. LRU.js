function solution(size, arr) {
  let answer = [];
  const cache = new Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const idx = cache.indexOf(arr[i]);
    if (idx >= 0) {
      // Cache hit
      for (let j = idx; j >= 1; j--) {
        cache[j] = cache[j - 1];
      }
      cache[0] = arr[i];
    } else {
      // Cache miss
      for (let j = size - 1; j >= 1; j--) {
        cache[j] = cache[j - 1];
      }
      cache[0] = arr[i];
      // cache.pop();
      // cache.unshift(arr[i]);
    }
    answer.push(cache.slice());
    // console.log(cache);
  }

  return answer;
}

// Least Recently Used: 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘
// 1. 0으로 초기화된 캐시(배열)을 생성
// 2. 만약 캐시에 있는 작업이면 해당 위치부터 캐시의 맨 앞까지 작업을 뒤로 밀며 맨 앞 자리를 만들고 입력
// 3. 없는 작업이면 맨 뒤부터 맨 앞까지 작업를 지우고 맨 앞에 입력

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// 해설: 삽입 정렬과 비슷한 알고리즘
// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x; //* 공통 작업
//   });

//   return answer;
// }

// function solution(size, arr) {
//   let answer = [];
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       answer.unshift(x); // 맨 앞에 넣고
//       if (answer.length > size) answer.pop(); // 캐시 크기가 초과되면 맨 뒤에 있는 작업 제거
//     } else {
//       answer.splice(pos, 1); // 캐시에 있는 작업을 지우고
//       answer.unshift(x); // 맨 앞에 다시 입력
//     }
//   });

//   return answer;
// }
