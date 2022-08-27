function solution(n) {
  let answer;

  function factorial(num) {
    if (num <= 1) { // num가 0일 때 오버플로우 방지
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  answer = factorial(n);
  return answer;
}

console.log(solution(5));

// 해설
// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n === 1) return 1;
//     else return n * DFS(n - 1);
//   }
//   answer = DFS(n);
//   return answer;
// }

// D(5) = 5 * D(4)
//            4 * D(3)
//                3 * D(2)
//                    2 * D(1)
//                        1
// D(1)에서 리턴된 후, 각 재귀 함수가 리턴되며 역순으로 계산