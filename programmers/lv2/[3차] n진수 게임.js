function solution(n, t, m, p) {
  let answer = "";

  function makeNumber(sNum) {
    let str = "";
    for (let i = sNum; i < sNum + 10; i++) {
      str += i.toString(n).toUpperCase();
    }
    return str.split("");
  }

  let num = 0;
  let i = 0;
  const arr = [];
  while (answer.length < t) {
    arr.push(...makeNumber(num));
    // console.log(arr);
    num += 10;
    for (; i < arr.length; i++) {
      if (p === (i % m) + 1) {
        // 튜브가 말하는 숫자는 현재 인덱스를 멤버의 수로 나누면 구할 수 있음
        // i는 0부터 시작, 순서 p는 1부터 시작하므로 1을 더함
        answer += arr[i];
        if (answer.length === t) break;
      }
    }
  }

  return answer;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 2));

// n: 진법, t: 미리 구할 숫자 개수, m: 참가 인원, p: 튜브의 순서
// 튜브가 자신이 말해야할 숫자를 t개만큼 출력

// 1. 진법에 맞게 미리 일정한 개수만큼 숫자를 구하고 한 자리씩 끊어서 배열로 만듬
// 2. 배열을 순회하면서 p번째 마다 배열의 요소를 answer에 입력
// 3. answer의 길이가 t가 될 때까지 단계 1, 2를 반복