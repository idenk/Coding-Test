function solution(n) {
  let answer = 0;
  function aux(n) {
    if (n === 0) return;
    aux(n - 1);
    console.log(n);
  }
  aux(n);
}

solution(3);

// 해설
// function solution(n) {
//   function DFS(L) {
//     if (L == 0) return;
//     else {
//       DFS(L - 1);
//       console.log(L);
//     }
//   }
//   DFS(n);
// }

// D(3) -> D(2) -> D(1) -> D(0)

// 스택 프레임에는 매개변수, 지역변수, 복귀 주소 등이 담기며
// 함수가 연속적으로 호출될 때 콜 스택에 쌓인다
// 함수 실행이 종료되면 복귀 주소로 이동: ex. D(0)의 복귀 주소는 D(1)의 6라인
