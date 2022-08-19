function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > tmp; j--) { // j가 지정된 위치에 멈춰야 함
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = tmp; // j는 tmp보다 작은 값에서 멈춤 -> +1
  }

  return arr;
}

//* 2번째 원소부터 시작해 그 앞의 원소들과 비교하며 삽입할 위치를 지정하고, 그 위치에 있던 원소를 뒤로 옮기고 삽입하여 정렬
// 1. i는 배열의 1번 인덱스부터 순회. arr[i] 값을 tmp에 저장
// 2.    j는 i-1부터 0까지 순회. tmp가 들어갈 자리까지 요소를 한 칸씩 뒤로 민다
//       (arr[j]가 tmp가 크면 arr[j]를 arr[j+1]에 저장)
// 3.  그 앞의 숫자들과 비교하며 지정된 위치에 삽입

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 해설
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (arr[i] < answer[j]) {
//         answer.splice(j, 0, arr[i]);
//         break;
//       }
//     }
//   }
//   return answer;
// }
