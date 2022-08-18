function solution(arr) {
  let answer;
  const positive = [];
  const negative = [];
  for (let x of arr) {
    if (x < 0) negative.push(x);
    else positive.push(x);
  }

  answer = negative.concat(positive);
  return answer;
}

// 1. 음의 정수, 양의 정수 각각 새로운 배열을 만들고 합친다 -> 정렬 알고리즘과는 거리가 멀다

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));

//! 해설
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

//* 버블 정렬 사용
// 인접한 두 숫자에서 앞이 양수고 뒤가 음수면 교환
// 음수와 양수인 경우만 교환하므로 음수의 순서, 양수의 순서는 변경되지 않음