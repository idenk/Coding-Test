function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER;   //* 최솟값을 구할 때는 가장 큰 숫자로 초기화 해두는 것도 좋음
//* 또는 배열의 첫번째 수로 초기화하는 방법도 존재
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

//* 최솟값 구하는 내장 함수
Math.min(...arr); // 배열을 넣으면 작동하지 않으므로 전개연산자를 이용해 펼쳐서 인자로 넣어 준다.
console.log('min 함수 이용, ', Math.min(arr));      // NaN
console.log('min 함수 이용, ', Math.min(...arr));

// 전개 연산자를 사용하지 않는 방법(잘 쓰이지 않음)
Math.min.apply(null, arr);  // (객체, 배열)

//* 최댓값 구하는 내장 함수
Math.max(...arr);
