function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
    console.log(stack);
  }

  return stack.length === 0 ? 1 : 0;
}

let input = 'baabaa';
console.log(solution(input));

//* 스택
// 문자열을 한 번만 순회하여 해결 -> O(n)
// 1. 스택을 생성
// 2. 문자열을 순회하며
//    스택이 비어있거나, 스택의 마지막 문자가 현재 문자와 다르면 해당 문자를 스택에 push
//    동일한 문자면 스택에서 pop
// 3. 순회가 끝났을 때 스택이 비어있다면 짝지어 제거하기로 문자열을 완전히 제거할 수 있는 경우

//* 재귀: 효율성 테스트 fail
// 몇 번 반복을 수행해야 할지 모름 -> 재귀
// 종료 조건: 짝지어 제거할 수 있는 문자열이 없는 경우
// 반복 조건: 짝지어 제거할 수 있는 문자열을 제거

// function solution(s) {
//   let answer = 0;
//   const sArr = s.split('');

//   function aux(arr) {
//     let flag = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === arr[i + 1]) {
//         arr.splice(i, 2);
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) {
//       if (arr.length === 0) answer = 1;
//       return;
//     } else {
//       aux(arr);
//     }
//   }

//   aux(sArr);
//   return answer;
// }
