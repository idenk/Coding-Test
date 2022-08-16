function solution(s) {
  let answer;
  const stack = [];

  for (let x of s) {
    console.log(stack);
    if (/[0-9]/.test(x)) {
      // 숫자
      stack.push(Number(x));
    } else {
      // 연산자
      const num2 = stack.pop();
      const num1 = stack.pop();
      let result;
      if (x === '+') result = num1 + num2;
      else if (x === '-') result = num1 - num2;
      else if (x === '*') result = num1 * num2;
      else if (x === '/') result = num1 / num2;
      stack.push(result);
    }
  }
  answer = stack[0];
  return answer;
}
// 중위 표기법(infix)는 피연산자 사이에 연산자. 후위 표기법(postfix)은 피연산자 2개를 먼저 쓰고 연산자
// 중위 표기법 => 후위 표기법 변환: 3*(5+2)-9  =>  352+*9-
// 후위 표기법은 연산자의 우선 순위를 고려할 필요가 없는 장점을 가짐

// 1. 배열의 요소들을 스택에 하나씩 입력
//    숫자를 그냥 만나면 push
//    연산자를 만나면 배열의 끝내서 숫자 2개를 꺼내서 계산 후 push
//    마지막에 배열에 있는 값이 연산 결과

let str = '352+*9-';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x)); //* isNaN 메서드 활용
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === '+') stack.push(lt + rt);  //* 바로 스택에 push
//       else if (x === '-') stack.push(lt - rt);
//       else if (x === '*') stack.push(lt * rt);
//       else if (x === '/') stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];
//   return answer;
// }
