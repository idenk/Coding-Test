function solution(n) {
  let answer = [];

  //from: 시작, tmp: 보조, to: 목표 기둥
  const hanoi = (n, from, tmp, to) => {
    console.log(n, from, tmp, to);
    // base case
    if (n === 1) {
      answer.push([from, to]);
      console.log(`${n}을 ${from}에서 ${to}로 옮긴다`);
    } else {
      // recursive case
      hanoi(n - 1, from, to, tmp); //  n-1개의 원판을 시작에서 보조로 옮김
      answer.push([from, to]);// 1개의 원판을 시작에서 목표로 옮김
      console.log(`${n}을 ${from}에서 ${to}로 옮긴다`);
      hanoi(n - 1, tmp, from, to);  // n-1개의 원판을 보조에서 목표로 옮김
    }
  };

  hanoi(n, 1, 2, 3);

  return answer;
}

//! 재귀 

// if (n === 1)
//   원판을 시작 기둥에서 목표 기둥으로 옮긴다
// 아니면
//   시작 기둥에 있는 맨 밑의 원판을 제외한 나머지 원판들(n-1)을 보조로 옮긴다
//   시작 기둥에 있는 맨 마지막 원판을 목표로 옮긴다
//   보조 기둥에 있는 원판들(n-1)을 목표 기둥으로 옮긴다

let input = 3;
console.log(solution(input));

// https://www.youtube.com/watch?v=FYCGV6F1NuY