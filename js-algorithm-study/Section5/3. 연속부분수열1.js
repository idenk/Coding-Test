function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let p = i;
    while (sum < m) {
      // sum이 m보다 작을 때
      sum += arr[p]; // 수열의 요소를 순차적으로 더함
      if (sum === m) {
        // 비교
        console.log(sum, p, arr[p]);
        answer++;
        break;
      }
      p++;
    }
  }

  return answer;
}

// 1. for: i를 0부터 수열의 끝까지 순회
// 2.    sum이 m보다 작을 때 수열의 요소를 순서대로 더하며 m과 일치하는지 확인
// 3.    일치하면 cnt 증가
// 4. cnt 반환

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

//! 해설: 투 포인터 알고리즘
function solution(m, arr) {
  let answer = 0,
    lt = 0, // left 변수
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    // right 변수
    sum += arr[rt];
    if (sum === m) {
      answer++;
      console.log(arr.slice(lt, rt + 1));
    }
    while (sum >= m) {
      // sum이 m보다 크거나 같으면
      sum -= arr[lt++]; // m보다 작아질 때까지 빼기
      if (sum === m) {
        answer++;
        console.log(arr.slice(lt, rt + 1));
      }
    }
  }
  return answer;
}

// 1. lt, rt를 이용해 한 번의 for문 순회
// 2.   lt는 고정, rt는 오른쪽으로 이동하며 요소를 sum에 저장
// 3.   sum이 m보다 커지면 lt를 증가시킴, sum이 m보다 작아지면 rt를 증가시킴
// 4.   2와 3 과정에서 sum이 m과 동일한지 계속 확인 (sum은 lt~rt까지의 합)
// 5. rt가 끝에 도달하면 종료

// sum이 m보다 크면 rt가 증가하면서 더함
// sum이 m보다 작으면 lt가 증가하면 뺌
