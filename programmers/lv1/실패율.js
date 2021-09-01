function solution(N, stages) {
  let failureArr = new Array(N + 1).fill(0).map((el) => []);
  
  for (let i = 1; i < N + 1; i++){
    // if (i === 4) debugger;
    const uncleardUsers = stages.filter((el) => el === i).length;
    const clearedUsers = stages.filter((el) => el > i).length;
    //? 
    // const failure = clearedUsers === 0 ? 0 : uncleardUsers / clearedUsers;
    const failure = uncleardUsers / clearedUsers;

    failureArr[i].push(i);
    failureArr[i].push(failure);
  }

  failureArr.shift();
  failureArr.sort((a, b) => b[1] - a[1]);
  
  return failureArr.map((el) => el[0]);
}

let N = 4;
let stages = [4, 4, 4, 4, 4];
let result = solution(N, stages);
console.log(result);


// 유저의 수: stages.length
// 각 스테이지별로 실패율을 계산해야 한다
// i번 스테이지 실패율 = stages 배열 내 i의 개수 / stages 배열 내 i보다 큰 요소의 개수
// [스테이지, 실패율]을 요소로 같는 2차원 배열을 생성하고 실패율을 기준으로 정렬하여 리턴