function solution(brown, yellow) {
  let answer = 0;

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) {
      // yellow로 만든 사각형의 가로, 세로 길이
      const width = yellow / i;
      const height = i;

      //* 사각형의 테두리 길이 계산
      // 다음 테두리의 길이 = 현재 사각형의 가로 * 2 + 세로 * 2 + 4
      let borderHInc = height * 2;
      let borderWInc = width * 2;
      let border = 0;
      let cnt = 0;
      while (border < brown) {
        cnt++; // 테두리 겹
        border += borderHInc + borderWInc + 4;
        if (border === brown) {
          // 테두리가 증가할 때마다 가로 및 세로 길이는 2씩 증가
          answer = [width + cnt * 2, height + cnt * 2];
          break;
        }
        borderHInc += 4;
        borderWInc += 4;
      }
    }
  }

  return answer;
}

console.log(solution(24, 24));

// yellow로 만들 수 있는 사각형의 가로 길이  = yellow의 약수 중 제곱근 보다 큰 값
// brown은 yellow의 가로 + 세로 길이 + 4 씩 증가

// 1. yellow의 약수를 제곱근까지 구함
// 2. 가로 길이 = yellow / 약수, 세로 길이 = 약수
// 3. 테두리를 더해가며 counting,이때 brown과 일치하는지 확인
// 4. 일치하면 [가로 길이 + cnt * 2, 세로 길이 + cnt * 2] 반환, 일치하지 않으면 다음 약수로 계산
